#!/usr/bin/env python3
"""Grounding check: for each evidence item, fetch the page and test whether the numbers in its key_figure appear
in the page text. Writes `grounding` onto each claim (share of checkable evidence items that matched) and prints a report.
Usage: python3 -I scripts/ground.py [claim-id-prefix ...]   (default: all claims researched by a non-Claude model)"""
import html, json, re, sys, urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
NUM = re.compile(r"\d[\d,]*(?:\.\d+)?")

def page_text(url):
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=25) as r:
            ctype = r.headers.get("Content-Type", "")
            if "pdf" in ctype or url.lower().endswith(".pdf"): return None  # PDFs: not checkable here
            raw = r.read(3_000_000).decode("utf-8", "ignore")
    except Exception:
        return None
    raw = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", raw)
    return html.unescape(re.sub(r"<[^>]+>", " ", raw))

def numbers(s):
    out = set()
    for n in NUM.findall(s or ""):
        n = n.replace(",", "").rstrip(".")
        if len(n.replace(".", "")) >= 2 and not re.fullmatch(r"(19|20)\d\d", n):  # skip 1-digit numbers and years
            out.add(n)
    return out

def norm_page(t):
    return {n.replace(",", "").rstrip(".") for n in NUM.findall(t)}

def main(prefixes):
    files = sorted((ROOT / "data" / "claims").glob("*.json"))
    claims = [(f, json.loads(f.read_text())) for f in files]
    if prefixes: claims = [(f, c) for f, c in claims if any(c["id"].startswith(p) for p in prefixes)]
    else: claims = [(f, c) for f, c in claims if not str(c.get("researched_by", "")).startswith("claude")]
    urls = sorted({e["url"] for _, c in claims for e in c.get("evidence", []) if e.get("url")})
    with ThreadPoolExecutor(12) as ex: pages = dict(zip(urls, ex.map(page_text, urls)))
    for f, c in claims:
        checked = matched = 0; detail = []
        for e in c.get("evidence", []):
            want = numbers(e.get("key_figure", ""))
            t = pages.get(e.get("url"))
            if not want or t is None: detail.append("?"); continue
            have = norm_page(t)
            hit = len(want & have) / len(want)
            checked += 1; matched += hit >= 0.5
            detail.append("✓" if hit >= 0.5 else "✗")
        score = matched / checked if checked else None
        c["grounding"] = {"checked": checked, "matched": matched, "score": score}
        f.write_text(json.dumps(c, indent=2, ensure_ascii=False) + "\n")
        print(f"{'—' if score is None else f'{score:.2f}':>5}  {''.join(detail):8} {c['id']}")
    print("\n✓ numbers found on page · ✗ numbers NOT found · ? not checkable (PDF, blocked, or no numbers)")

if __name__ == "__main__":
    main(sys.argv[1:])
