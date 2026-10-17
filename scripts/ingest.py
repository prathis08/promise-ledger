#!/usr/bin/env python3
"""Extract claim JSON from DeepSeek raw output, validate it, check its URLs are live, and write it to data/claims.
Rejected entries go to research/rejected/<job>.json with reasons.
Usage: python3 -I scripts/ingest.py research/raw/<job>.md [...]"""
import json, re, sys, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CLAIMS = ROOT / "data" / "claims"
REJ = ROOT / "research" / "rejected"; REJ.mkdir(parents=True, exist_ok=True)
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
VERDICTS = {"false", "misleading", "unachieved", "missed-deadline", "in-progress", "true", "unverifiable"}
TYPES = {"promise", "statement", "statistic"}
EVTYPES = {"govt_data", "parliament", "cag", "rti", "index", "news", "fact_check", "intl_org"}
TOPICS = set("""economy jobs agriculture income housing sanitation energy infrastructure railways health education
black-money corruption security terrorism kashmir citizenship internal-security women environment digital
manufacturing foreign-policy prices governance""".split())
ERA = {"INC": ("2000-01-01", "2014-05-25"), "BJP": ("2013-09-01", "2099-12-31")}  # BJP incl. 2013-14 campaign

def extract(text):
    blocks = re.findall(r"```(?:json)?\s*(\[.*?\])\s*```", text, re.S)
    for b in reversed(blocks):
        try: return json.loads(b)
        except Exception: pass
    i, j = text.find("["), text.rfind("]")
    return json.loads(text[i:j + 1])

def url_status(u):
    m = re.search(r"(?:v=|youtu\.be/|shorts/|live/)([\w-]{11})", u)
    target = f"https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v={m.group(1)}" if m and "youtu" in u else u
    for method in ("HEAD", "GET"):
        try:
            with urllib.request.urlopen(urllib.request.Request(target, method=method, headers={"User-Agent": UA}), timeout=20) as r:
                return r.status
        except urllib.error.HTTPError as e:
            if method == "GET" or e.code not in (400, 403, 405): return e.code
        except Exception:
            if method == "GET": return None
    return None

def check(c):
    errs = []
    for k in ("id", "speaker", "party", "role", "level", "date", "verdict", "claim_type", "summary", "analysis"):
        if not c.get(k): errs.append(f"missing {k}")
    if c.get("party") not in ERA: errs.append(f"bad party {c.get('party')!r}")
    else:
        lo, hi = ERA[c["party"]]
        if not (lo <= str(c.get("date", "")) <= hi): errs.append(f"date {c.get('date')} outside {c['party']} era")
    if c.get("verdict") not in VERDICTS: errs.append(f"bad verdict {c.get('verdict')!r}")
    if c.get("claim_type") not in TYPES: errs.append(f"bad claim_type {c.get('claim_type')!r}")
    if not re.match(r"^\d{4}-\d{2}-\d{2}$", str(c.get("date", ""))): errs.append("bad date")
    if not re.match(r"^[a-z0-9-]+$", str(c.get("id", ""))): errs.append("bad id")
    c["topics"] = [t for t in c.get("topics", []) if t in TOPICS] or ["governance"]
    if not (c.get("media") or c.get("transcript_sources")): errs.append("no media/transcript source")
    ev = [e for e in c.get("evidence", []) if e.get("type") in EVTYPES and str(e.get("url", "")).startswith("http")]
    c["evidence"] = ev
    if len(ev) < 2: errs.append(f"only {len(ev)} valid evidence items")
    return errs

WORD = re.compile(r"[a-z0-9]+")
STOP = set("the a an of to in and for by will be is was on with that this from at as are it all its has have india".split())
def sig(c):
    return {w for w in WORD.findall(f"{c.get('quote_english','')} {c.get('summary','')}".lower()) if w not in STOP and len(w) > 2}
def near_dup(c, pool):
    s = sig(c)
    for o in pool:
        t = o["_sig"]
        if s and t and len(s & t) / len(s | t) >= 0.35 and abs(int(c["date"][:4]) - int(o["date"][:4])) <= 3:
            return o["id"]
    return None

def main(paths):
    existing = {p.stem for p in CLAIMS.glob("*.json")}
    pool = []
    for p in CLAIMS.glob("*.json"):
        o = json.loads(p.read_text()); o["_sig"] = sig(o); pool.append(o)
    for raw in map(Path, paths):
        job = raw.stem
        try:
            items = extract(raw.read_text())
        except Exception as e:
            print(f"{job}: could not parse JSON ({e})"); continue
        good, bad = [], []
        for c in items:
            errs = check(c)
            if c.get("id") in existing: errs.append("duplicate id")
            elif not errs and (d := near_dup(c, pool)): errs.append(f"near-duplicate of {d}")
            (bad if errs else good).append((c, errs))
        # URL liveness: every evidence + media + transcript URL
        allurls = sorted({x["url"] for c, _ in good for k in ("evidence", "media", "transcript_sources") for x in c.get(k, []) if x.get("url")})
        with ThreadPoolExecutor(16) as ex: st = dict(zip(allurls, ex.map(url_status, allurls)))
        dead = lambda u: st.get(u) in (404, 410)
        kept = []
        for c, _ in good:
            c["media"] = [m for m in c.get("media", []) if not dead(m["url"])]  # drop dead/invented videos
            c["transcript_sources"] = [t for t in c.get("transcript_sources", []) if not dead(t["url"])]
            live_ev = [e for e in c["evidence"] if not dead(e["url"])]
            n_dead = len(c["evidence"]) - len(live_ev)
            c["evidence"] = live_ev
            errs = []
            if len(live_ev) < 2: errs.append(f"{n_dead} evidence URLs dead (404); {len(live_ev)} left")
            if not (c["media"] or c["transcript_sources"]): errs.append("all source-of-quote URLs dead")
            if errs: bad.append((c, errs)); continue
            unreachable = [e["url"] for e in live_ev if st.get(e["url"]) is None or st.get(e["url"]) >= 400]
            note = f" [ingest: {n_dead} dead evidence link(s) removed]" if n_dead else ""
            if unreachable: note += f" [ingest: {len(unreachable)} evidence link(s) blocked/unreachable to the checker; verify manually]"
            c["notes"] = (c.get("notes") or "") + note
            c.update(review_status="draft", researched_by=c.get("researched_by") or "deepseek-v4.1-flash-free",
                     quote_is_verbatim=bool(c.get("quote_is_verbatim")), last_reviewed=c.get("last_reviewed") or "2026-10-17")
            c.setdefault("state", None); c.setdefault("deadline", None); c.setdefault("chart", None)
            c.setdefault("govt_response", []); c.setdefault("confidence", "low")
            (CLAIMS / f"{c['id']}.json").write_text(json.dumps({k: v for k, v in c.items() if k != "_sig"}, indent=2, ensure_ascii=False) + "\n")
            existing.add(c["id"]); kept.append(c["id"]); c["_sig"] = sig(c); pool.append(c)
        (REJ / f"{job}.json").write_text(json.dumps([{"errors": e, "claim": c} for c, e in bad], indent=2, ensure_ascii=False))
        print(f"{job}: {len(items)} returned, {len(kept)} kept, {len(bad)} rejected")
        for c, e in bad: print(f"   REJECT {c.get('id')}: {'; '.join(e)}")

if __name__ == "__main__":
    main(sys.argv[1:])
