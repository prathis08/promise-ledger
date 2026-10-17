#!/usr/bin/env bash
# Run one research job through opencode + DeepSeek (free) in the read-only sandbox.
# The agent can only search/fetch the web and read research/oc/; it returns JSON as text.
# Usage: scripts/oc_run.sh research/jobs/<job>.md      (writes research/raw/<job>.md)
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
JOB="$1"; NAME="$(basename "$JOB" .md)"
MODEL="${OC_MODEL:-opencode/deepseek-v4.1-flash-free}"
OUT="$ROOT/research/raw/$NAME.md"
cd "$ROOT/research/oc" || exit 1
echo "[$(date +%T)] start $NAME"
timeout "${OC_TIMEOUT:-1800}" opencode run --standalone -m "$MODEL" --title "ledger-$NAME" "$(cat "$ROOT/$JOB")" > "$OUT.tmp" 2>&1
rc=$?
mv "$OUT.tmp" "$OUT"
echo "[$(date +%T)] done  $NAME rc=$rc bytes=$(wc -c < "$OUT")"
