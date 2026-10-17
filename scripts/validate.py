#!/usr/bin/env python3
"""Validate data/ against SCHEMA.md. Exit 1 on errors. Usage: python3 -I scripts/validate.py [data_dir]"""
import json, re, sys
from pathlib import Path

DATA = Path(sys.argv[1] if len(sys.argv) > 1 else Path(__file__).resolve().parent.parent / "data")
PARTIES = {"BJP", "INC"}
LEVELS = {"central", "state", "party"}
VERDICTS = {"false", "misleading", "unachieved", "missed-deadline", "in-progress", "true", "unverifiable"}
TYPES = {"promise", "statement", "statistic"}
EVIDENCE = {"govt_data", "parliament", "cag", "rti", "index", "news", "fact_check", "intl_org"}
TOPICS = set("""economy jobs agriculture income housing sanitation energy infrastructure railways health education
black-money corruption security terrorism kashmir citizenship internal-security women environment digital
manufacturing foreign-policy prices governance""".split())
DATE = re.compile(r"^\d{4}-\d{2}-\d{2}$")

errors, warnings = [], []
series = {p.stem for p in (DATA / "series").glob("*.json")}

def err(f, m): errors.append(f"{f}: {m}")
def warn(f, m): warnings.append(f"{f}: {m}")

for path in sorted((DATA / "claims").glob("*.json")):
    f = path.name
    try:
        c = json.loads(path.read_text())
    except Exception as e:
        err(f, f"invalid JSON: {e}"); continue
    if c.get("id") != path.stem: err(f, "id does not match filename")
    if not c.get("speaker"): err(f, "missing speaker")
    if c.get("party") not in PARTIES: err(f, f"bad party {c.get('party')!r}")
    if c.get("level") not in LEVELS: err(f, f"bad level {c.get('level')!r}")
    if not c.get("role"): warn(f, "missing role")
    if c.get("verdict") not in VERDICTS: err(f, f"bad verdict {c.get('verdict')!r}")
    if c.get("claim_type") not in TYPES: err(f, f"bad claim_type {c.get('claim_type')!r}")
    if not DATE.match(str(c.get("date", ""))): err(f, "bad date")
    if c.get("claim_type") == "promise" and not c.get("deadline"): warn(f, "promise without deadline")
    if c.get("review_status") != "draft": warn(f, "review_status is not 'draft'")
    bad_topics = set(c.get("topics", [])) - TOPICS
    if bad_topics: err(f, f"unknown topics {sorted(bad_topics)}")
    if not (c.get("media") or c.get("transcript_sources")): err(f, "no media or transcript source")
    ev = c.get("evidence", [])
    if len(ev) < 2: err(f, f"only {len(ev)} evidence item(s)")
    for e in ev:
        if e.get("type") not in EVIDENCE: err(f, f"bad evidence type {e.get('type')!r}")
        if not str(e.get("url", "")).startswith("http"): err(f, f"evidence without URL: {e.get('title')}")
    ch = c.get("chart")
    if ch and ch.get("series") not in series: warn(f, f"chart series {ch.get('series')!r} has no data/series file")

for path in sorted((DATA / "indices").glob("*.json")):
    try:
        i = json.loads(path.read_text())
    except Exception as e:
        err(path.name, f"invalid JSON: {e}"); continue
    if not i.get("points"): err(path.name, "no points")
    for p in i.get("points", []):
        if not p.get("source_url"): warn(path.name, f"point {p.get('year')} without source_url")

for path in sorted((DATA / "series").glob("*.json")):
    try:
        s = json.loads(path.read_text())
    except Exception as e:
        err(path.name, f"invalid JSON: {e}"); continue
    if not s.get("points"): err(path.name, "no points")

for w in warnings: print("WARN ", w)
for e in errors: print("ERROR", e)
n = len(list((DATA / "claims").glob("*.json")))
print(f"\n{n} claims, {len(errors)} errors, {len(warnings)} warnings")
sys.exit(1 if errors else 0)
