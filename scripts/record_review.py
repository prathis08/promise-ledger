#!/usr/bin/env python3
"""Record a GitHub issue-form review onto a claim and recompute its review_status.
Run by .github/workflows/record-review.yml. All inputs come from environment variables (never interpolated into shell):
  ISSUE_BODY, ISSUE_USER, ISSUE_URL
Writes data/claims/<id>.json and prints a JSON result {ok, claim_id, status, message} on the last line.
Status rules (also described on the site's /review page):
  verified  = >= 2 distinct trusted reviewers whose latest review is an approval with the full checklist, and no trusted
              reviewer's latest review is reject / request-changes
  disputed  = any trusted reviewer's latest review is reject or request-changes
  in-review = at least one review of any kind, but neither of the above
  draft     = no reviews"""
import datetime, json, os, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REQUIRED_CHECKS = 6
DECISIONS = {"approve": "approve", "request changes": "request-changes", "reject": "reject"}
VERDICTS = {"true", "misleading", "false", "unachieved", "missed-deadline", "in-progress", "unverifiable"}
LIMIT = 4000  # max characters kept from free-text fields

def sections(body):
    """Issue forms render as '### Label' followed by the value."""
    out, cur = {}, None
    for line in body.replace("\r\n", "\n").split("\n"):
        m = re.match(r"^###\s+(.*)$", line)
        if m: cur = m.group(1).strip().lower(); out[cur] = []; continue
        if cur is not None: out[cur].append(line)
    return {k: "\n".join(v).strip() for k, v in out.items()}

def status_of(reviews):
    latest = {}
    for r in reviews: latest[r["reviewer"].lower()] = r  # reviews are kept in chronological order
    trusted = [r for r in latest.values() if r["trusted"]]
    if any(r["decision"] in ("reject", "request-changes") for r in trusted): return "disputed"
    if len([r for r in trusted if r["decision"] == "approve" and r["checks_complete"]]) >= 2: return "verified"
    return "in-review" if reviews else "draft"

def result(ok, **kw):
    print(json.dumps({"ok": ok, **kw})); sys.exit(0)

def main():
    body, user, url = os.environ.get("ISSUE_BODY", ""), os.environ.get("ISSUE_USER", ""), os.environ.get("ISSUE_URL", "")
    if not re.fullmatch(r"[A-Za-z0-9-]{1,39}", user): result(False, message="Could not read the GitHub username.")
    s = sections(body)
    cid = s.get("claim id", "").strip().strip("`").strip()
    if not re.fullmatch(r"[a-z0-9-]{3,120}", cid): result(False, message=f"`Claim ID` must be an id like `bjp-modi-2021-500gw-nonfossil-2030`; got `{cid[:80]}`.")
    path = ROOT / "data" / "claims" / f"{cid}.json"
    if not path.is_file(): result(False, claim_id=cid, message=f"No claim with id `{cid}` exists.")
    dec_raw = s.get("decision", "").lower()
    decision = next((v for k, v in DECISIONS.items() if dec_raw.startswith(k)), None)
    if not decision: result(False, claim_id=cid, message="Please choose a Decision.")
    ticked = len(re.findall(r"^- \[[xX]\]", s.get("checklist", ""), re.M))
    sv = s.get("suggested verdict (only if you disagree)", "").strip().strip('"')
    sv = sv if sv in VERDICTS else None
    clean = lambda t: ("" if t in ("_No response_", "None") else t)[:LIMIT]
    trusted = user.lower() in {x.lower() for x in json.loads((ROOT / "reviewers.json").read_text()).get("trusted", [])}

    c = json.loads(path.read_text())
    reviews = [r for r in c.get("reviews", []) if not (r["reviewer"].lower() == user.lower() and r.get("issue") == url)]
    reviews.append({
        "reviewer": user, "trusted": trusted, "date": datetime.date.today().isoformat(), "decision": decision,
        "checks_complete": ticked >= REQUIRED_CHECKS, "checks_ticked": ticked, "suggested_verdict": sv,
        "notes": clean(s.get("notes", "")), "extra_sources": clean(s.get("additional sources", "")), "issue": url,
    })
    before = c.get("review_status", "draft")
    c["reviews"] = reviews
    c["review_status"] = status_of(reviews)
    if c["review_status"] == "verified": c["last_reviewed"] = datetime.date.today().isoformat()
    path.write_text(json.dumps(c, indent=2, ensure_ascii=False) + "\n")

    note = []
    if not trusted: note.append("You are not on the trusted reviewer list yet, so this is recorded as a **community** review: it is shown on the claim but does not count toward verification.")
    if decision == "approve" and ticked < REQUIRED_CHECKS: note.append(f"Only {ticked} of {REQUIRED_CHECKS} checklist items were ticked, so this approval does not count toward verification. Edit the issue to update it.")
    result(True, claim_id=cid, status=c["review_status"], before=before,
           message=f"Recorded **{decision}** by @{user} on `{cid}`. Status: `{before}` → `{c['review_status']}`.\n\n" + "\n\n".join(note))

if __name__ == "__main__":
    main()
