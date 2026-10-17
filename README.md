# Promise Ledger

An open benchmark of public claims and promises by Indian political leaders, scored like an ML model evaluation: **BJP (May 2014 → today)** vs **Congress (2000 → May 2014)**, covering Union ministers, Chief Ministers and party leaders.

- **Site:** https://shreyashsiddharth-collab.github.io/promise-ledger/
- **Status:** preliminary. Most entries are unreviewed drafts, and many were researched by an AI model (`researched_by`). Read the confidence intervals, and help review.

## How it works

| Piece | Where |
|---|---|
| Data: one JSON file per claim, plus global indices and time series | `data/` · format in `SCHEMA.md` |
| Scoring: suites, eras, bootstrap CIs, false-claim rates | `site/src/lib/scoring.ts` · spec in `BENCHMARK.md` |
| Site (Astro, static) | `site/` |
| Research pipeline (DeepSeek via opencode, read-only sandbox) | `scripts/make_jobs.py`, `scripts/oc_run.sh` |
| QA: format validation, dead-link and duplicate rejection, grounding check | `scripts/ingest.py`, `scripts/ground.py`, `scripts/validate.py`, `scripts/check_links.py` |

## Reviewing claims (anyone can help)

1. Open a claim on the site and press **Review this claim on GitHub**.
2. Tick the checklist, choose Approve / Request changes / Reject, and submit the issue.
3. A bot (`.github/workflows/record-review.yml`) records the review on the claim, replies, and redeploys the site.

A claim becomes **verified** after two approvals with a full checklist from different reviewers in `reviewers.json`. Any rejection or change request from a trusted reviewer marks it **disputed**. Reviews from people not on the list are shown as "community" reviews. To fix data directly, open a pull request against `data/claims/<id>.json`.

## Local development

```
npm run install:site   # once
npm run dev            # http://localhost:4321
npm run build          # static output in site/dist
node site/scripts/check-scoring.mjs   # independent check of the scoring
python3 -I scripts/validate.py        # data validation
```

Pushing to `main` deploys to GitHub Pages (`.github/workflows/pages.yml`).
