#!/usr/bin/env bash
# Archive every video referenced in data/claims: download with yt-dlp, record SHA-256,
# and request a Wayback Machine snapshot. Output goes to archive/ (gitignored).
# Usage: scripts/archive_media.sh [--no-download]
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/archive"
mkdir -p "$OUT"
MANIFEST="$OUT/manifest.tsv"
touch "$MANIFEST"

mapfile -t URLS < <(python3 -I - "$ROOT/data/claims" <<'PY'
import json, sys, pathlib
for p in sorted(pathlib.Path(sys.argv[1]).glob("*.json")):
    for m in json.loads(p.read_text()).get("media", []):
        print(m["url"])
PY
)

for url in "${URLS[@]}"; do
  grep -qF "$url" "$MANIFEST" && continue
  echo ">> $url"
  if [[ "${1:-}" != "--no-download" ]]; then
    file=$(yt-dlp -q --no-playlist -f 'b[height<=480]/b' --write-info-json \
      -o "$OUT/%(id)s.%(ext)s" --print after_move:filepath "$url" || true)
    sha=$([[ -n "$file" && -f "$file" ]] && sha256sum "$file" | cut -d' ' -f1 || echo "download-failed")
  else
    file="-"; sha="-"
  fi
  wb=$(curl -s -o /dev/null -w '%{http_code}' "https://web.archive.org/save/$url" || echo "000")
  printf '%s\t%s\t%s\twayback:%s\t%s\n' "$url" "$file" "$sha" "$wb" "$(date -Iseconds)" >> "$MANIFEST"
done
echo "Manifest: $MANIFEST"
