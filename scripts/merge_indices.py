#!/usr/bin/env python3
"""Merge DeepSeek index back-fill output into data/indices without touching existing points.
Only years absent from the file are added, and only if their source_url is not dead (404/410).
Usage: python3 -I scripts/merge_indices.py research/raw/indices-1.md [...]"""
import json, re, sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from ingest import url_status  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent

def extract(text):
    for b in reversed(re.findall(r"```(?:json)?\s*(\{.*?\})\s*```", text, re.S)):
        try: return json.loads(b)
        except Exception: pass
    return json.loads(text[text.find("{"):text.rfind("}") + 1])

for raw in map(Path, sys.argv[1:]):
    new = extract(raw.read_text())
    for slug, ix in new.items():
        f = ROOT / "data" / "indices" / f"{slug}.json"
        if not f.exists(): print(f"{slug}: no existing file, skipped"); continue
        old = json.loads(f.read_text())
        have = {p["year"] for p in old["points"]}
        cand = [p for p in ix.get("points", []) if isinstance(p.get("year"), int) and p["year"] not in have
                and isinstance(p.get("value"), (int, float)) and str(p.get("source_url", "")).startswith("http")]
        with ThreadPoolExecutor(8) as ex: st = list(ex.map(lambda p: url_status(p["source_url"]), cand))
        add = [p for p, s in zip(cand, st) if s not in (404, 410)]
        dropped = len(cand) - len(add)
        changed = [p["year"] for p in ix.get("points", []) if p.get("year") in have and
                   next(q for q in old["points"] if q["year"] == p["year"])["value"] != p.get("value")]
        old["points"] = sorted(old["points"] + [{k: p.get(k) for k in ("year", "value", "out_of", "source_url", "status") if k in p} for p in add], key=lambda p: p["year"])
        nn = (ix.get("methodology_note") or "").strip()
        if add and nn and nn != old.get("methodology_note", "").strip():
            old["methodology_note"] = (old.get("methodology_note", "").strip() + "\n\nBack-fill (pre-2014 editions, researched by deepseek, unreviewed): " + nn).strip()
        f.write_text(json.dumps(old, indent=2, ensure_ascii=False) + "\n")
        print(f"{slug}: +{len(add)} points {sorted(p['year'] for p in add)}" + (f", {dropped} dropped (dead source)" if dropped else "")
              + (f", ignored attempted changes to existing years {changed}" if changed else ""))
