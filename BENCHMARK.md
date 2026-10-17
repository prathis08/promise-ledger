# Benchmark spec: scoring the government like an ML model

The site presents the government as a "model under evaluation": each claim is a **test case**, related claims form an **eval suite**, global indices are **external benchmarks**, and 2014 versus the latest year is a **checkpoint comparison**. Every score must trace back to the test cases and their sources, and every weight must be visible and adjustable.

## Suites

Claims with `"scored": false` are excluded from every suite (see SCHEMA.md). They are shown as context on the claim named in their `context_for` field.

### A. Factual Accuracy  (claim_type = statement | statistic)
Score for each test case:

| verdict | score |
|---|---|
| true | 1.0 |
| misleading | 0.5 |
| false | 0.0 |
| unverifiable | excluded (counted as "abstained/ungradable", shown separately) |

The suite score is the mean. Also report **strict accuracy**, the share of cases with verdict true.

### B. Promise Delivery  (claim_type = promise)
Partial credit by verdict:

| verdict | score |
|---|---|
| true (met) | 1.0 |
| in-progress | 0.5 |
| missed-deadline | 0.25 |
| misleading | 0.25 |
| unachieved / false | 0.0 |
| unverifiable | excluded |

Two more metrics:
- **On-time rate** (like pass@1): the share of gradable promises with verdict `true`.
- **Gap closed**, for promises with a numeric `chart.target` and a series: `(value − baseline) / (target − baseline)`, clamped to [0, 1]. The baseline is the series point at or before the claim date; if there is none, use the first point. Show it twice:
  - **at deadline**: the series point at or before the deadline
  - **latest**: the most recent point

  If the baseline and target are not in the same units or prices (farm income is nominal against a target in 2015-16 prices), show the number with a caveat flag. When the target is null, skip it.

### C. External Benchmarks  (data/indices)
Normalise each edition to a value between 0 and 1, where higher is better:
- **Score indices:** `value / out_of`. V-Dem is already on a 0–1 scale, so use the value as is when out_of is null.
- **Rank indices:** `percentile = 1 − (rank − 1) / (out_of − 1)`. When out_of is null, use the out_of from the nearest year that has one, and flag it.

**Checkpoints:**
- **Baseline:** the edition closest to 2014, preferring ≤ 2014.
- **Latest:** the most recent edition.

Report the baseline, the latest and the **Δ**. The suite score is the mean of the latest normalised values; also report the mean Δ and the count improved/declined. Flag indices with comparability caveats: GHI says its ranks can't be compared across editions, and EoDB was discontinued in 2020. A toggle lets the user exclude flagged indices.

## Domains (claims are counted only under their first topic)

| Domain | Claim topics | Indices |
|---|---|---|
| Economy & Jobs | economy, jobs, black-money, manufacturing, prices, income | world-bank-ease-of-doing-business, global-innovation-index |
| Agriculture & Rural | agriculture | — |
| Welfare, Health & Education | housing, sanitation, health, education, women | undp-hdi, global-hunger-index, wef-global-gender-gap, world-happiness-report |
| Infrastructure & Energy | energy, infrastructure, railways, digital, environment | yale-epi |
| Security & Internal Affairs | security, terrorism, kashmir, citizenship, internal-security | — |
| Democracy & Governance | governance, corruption, foreign-policy | vdem-liberal-democracy, eiu-democracy-index, freedom-house, rsf-press-freedom, ti-corruption-perceptions |

## Overall score
Overall = the weighted mean of suites A, B and C. Each weight defaults to ⅓, and the user can change them with sliders that update live. Show the formula next to the number. **Never show an overall number without n and its confidence interval.**

## Uncertainty (required)
- **A and B:** 95% bootstrap CI over the test cases (1,000 resamples, fixed seed so the build is reproducible). Always show `n`.
- **Small samples:** any suite or domain with n < 5 is shown greyed out, with an "insufficient data" label instead of a big score.
- **Draft banner:** all entries are `review_status: draft`, so the leaderboard carries a "preliminary — unreviewed drafts" banner.

## Leaderboard rows ("models")
- **Narendra Modi:** suites A and B, from his claims only
- **Amit Shah:** suites A and B, from his claims only
- **Government of India (2014→latest):** suite C, plus A and B from all claims, and the overall score

Every row shows its n for each suite.
