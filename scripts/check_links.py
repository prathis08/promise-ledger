#!/usr/bin/env python3
"""Check every URL in data/ and write scripts/link-report.json. Usage: python3 -I scripts/check_links.py"""
import json, re, sys, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
URL = re.compile(r'"(https?://[^"\s]+)"')
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"

urls = {}
for path in sorted((ROOT / "data").rglob("*.json")):
    for u in URL.findall(path.read_text()):
        urls.setdefault(u, []).append(str(path.relative_to(ROOT)))

def check(u):
    # YouTube: oEmbed tells us whether the video actually exists
    m = re.search(r"(?:v=|youtu\.be/|shorts/|live/)([\w-]{11})", u)
    target = f"https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v={m.group(1)}" if m and "youtu" in u else u
    for method in ("HEAD", "GET"):
        try:
            req = urllib.request.Request(target, method=method, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=20) as r:
                return u, r.status, None
        except urllib.error.HTTPError as e:
            if method == "GET" or e.code not in (403, 405, 400):
                return u, e.code, str(e.reason)
        except Exception as e:
            if method == "GET":
                return u, None, type(e).__name__ + ": " + str(e)[:120]
    return u, None, "unknown"

with ThreadPoolExecutor(16) as ex:
    results = list(ex.map(check, urls))

report = [{"url": u, "status": s, "error": e, "files": urls[u]} for u, s, e in results]
bad = [r for r in report if not r["status"] or r["status"] >= 400]
(ROOT / "scripts" / "link-report.json").write_text(json.dumps(report, indent=2))
for r in bad:
    print(r["status"], r["url"], "<-", ", ".join(sorted(set(r["files"]))))
print(f"\n{len(report)} URLs checked, {len(bad)} failing (403s are often bot-blocking on .gov.in sites, not dead links)")
