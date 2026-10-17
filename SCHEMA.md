# Data contract (all agents must follow this exactly)

Everything is plain JSON under `data/`. The site reads these files at build time. Local preview only — nothing is hosted.

## 1. Claims — `data/claims/<id>.json` (one file per claim)

`id` = kebab-case `<speaker>-<year>-<short-slug>`, e.g. `modi-2016-double-farmers-income`. Filename = `<id>.json`.

```json
{
  "id": "modi-2016-double-farmers-income",
  "speaker": "Narendra Modi",                 // "Narendra Modi" | "Amit Shah"
  "date": "2016-02-28",                        // YYYY-MM-DD; use YYYY-MM-01 if day unknown and say so in notes
  "venue": "Kisan rally, Bareilly, Uttar Pradesh",
  "language": "hi",                            // hi | en
  "quote_original": "…",                       // verbatim if known, else "" (never invent)
  "quote_english": "…",                        // translation or the widely reported English wording
  "quote_is_verbatim": true,                   // false if paraphrased from news reports
  "claim_type": "promise",                     // promise | statement | statistic
  "deadline": "2022-12-31",                    // promises only, else null
  "verdict": "unachieved",                     // false | misleading | unachieved | missed-deadline | in-progress | true | unverifiable
  "summary": "One neutral sentence: what the data shows.",
  "topics": ["agriculture", "income"],         // from the topic list below
  "media": [
    { "platform": "youtube", "title": "…", "url": "https://www.youtube.com/watch?v=…&t=123s", "timestamp_seconds": 123, "channel": "Narendra Modi" }
  ],
  "transcript_sources": [
    { "title": "PIB release …", "url": "https://pib.gov.in/…" }
  ],
  "evidence": [
    {
      "type": "govt_data",                     // govt_data | parliament | cag | rti | index | news | fact_check | intl_org
      "publisher": "NSO / MoSPI",
      "title": "Situation Assessment Survey, 77th round",
      "url": "https://…",
      "date": "2021-09-10",
      "key_figure": "Average monthly income of agricultural household: ₹10,218 (2018-19)"
    }
  ],
  "govt_response": [
    { "title": "…", "url": "…", "summary": "What the government/party says in its defence." }
  ],
  "chart": null,                               // or { "series": "farm-income", "target": 16000, "target_label": "2x of 2015-16 baseline" }
  "analysis": "2–5 short neutral paragraphs in plain text. Separate paragraphs with \\n\\n. Data first, no adjectives, no opinions about intent.",
  "confidence": "high",                        // high | medium | low  (how solid the verdict is)
  "review_status": "draft",                    // ALWAYS "draft" — a human must review before it is ever published
  "last_reviewed": "2026-10-17",
  "notes": "Anything uncertain, conflicting sources, URLs you could not open, etc."
}
```

(Comments above are documentation only — real files must be valid JSON with no comments.)

### Topics (use only these)
economy, jobs, agriculture, income, housing, sanitation, energy, infrastructure, railways, health, education, black-money, corruption, security, terrorism, kashmir, citizenship, internal-security, women, environment, digital, manufacturing, foreign-policy, prices, governance

### Rules
- **Never fabricate** a URL, quote, video ID, or number. If you can't find a real source via search, leave it out and say so in `notes`. A thin honest entry beats a rich invented one.
- Every claim needs ≥1 `media` OR `transcript_sources` item (proof he/she said it), and ≥2 `evidence` items (proof of the verdict), preferring government data, Parliament answers, CAG and RBI.
- Include `govt_response` whenever an official rebuttal/defence exists.
- `verdict: "true"` is allowed and encouraged when a claim held up — the site is a ledger, not a hit list.
- YouTube links: only use a video URL you actually found in search results. Add `&t=NNNs` only if you know the timestamp.

## 2. Index rankings — `data/indices/<slug>.json`

```json
{
  "slug": "global-hunger-index",
  "name": "Global Hunger Index",
  "publisher": "Concern Worldwide / Welthungerhilfe",
  "url": "https://www.globalhungerindex.org/india.html",
  "higher_is_better": false,                  // for rank: false (rank 1 = best) — describe what the number is in "metric"
  "metric": "Rank",
  "out_of_label": "countries ranked",
  "points": [ { "year": 2014, "value": 55, "out_of": 76, "source_url": "…" } ],
  "govt_response": [ { "title": "…", "url": "…", "summary": "…" } ],
  "methodology_note": "Short note on methodology changes / comparability caveats.",
  "related_claims": ["claim-id", "…"]
}
```

## 3. Time series for charts — `data/series/<slug>.json`

```json
{
  "slug": "farm-income",
  "title": "Average monthly income per agricultural household",
  "unit": "₹ (nominal)",
  "source": { "publisher": "NSO", "title": "…", "url": "…" },
  "points": [ { "x": "2012-13", "y": 6426 }, { "x": "2018-19", "y": 10218 } ],
  "note": "…"
}
```

## Optional claim fields (scoring control)
- `scored` (boolean, default true): when false, the claim is excluded from every benchmark suite but still has its own page.
- `context_for` (claim id): the claim page with this id shows this entry in a "Context" box.
- `scoring_note` (string): explains why the claim is excluded from scoring.
- `chart.baseline` ({ "x": label, "y": number }, optional): an explicit starting value for gap-closed scoring. Use it when the series has no point from before the claim. Example: a cumulative scheme counter that started at 0 when the scheme launched.

## v2: party comparison (BJP vs Congress)

New REQUIRED claim fields:
- `speaker`: any person's full name (no longer limited to Modi or Shah).
- `party`: "BJP" | "INC".
- `role`: the office held when they spoke, e.g. "Prime Minister", "Union Finance Minister", "Chief Minister, Uttar Pradesh", "BJP President", "UPA Chairperson".
- `level`: "central" | "state" | "party" (party = an office-bearer who is not in government).
- `state`: state name if level is "state", else null.

Eras:
- INC claims fall between 2000-01-01 and 2014-05-25.
- BJP claims fall between 2014-05-26 and today.
- Campaign promises for the election that opened an era also count, e.g. BJP 2013–14 campaign promises or the INC 2004/2009 manifestos.

Provenance: `researched_by` holds the model or agent that produced the entry.

### `data/indices/*.json`: points should now go back to 2004 where the index exists, so the INC era (2004→2014) can be measured too.
