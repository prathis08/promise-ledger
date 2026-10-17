import { getBench } from '../../lib/bench';
import * as S from '../../lib/scoring';
export function GET() {
  const b = getBench();
  const body = {
    spec: { min_n: S.MIN_N, bootstrap_resamples: S.BOOTSTRAP_N, seed: S.SEED, ci_level: S.CI_LEVEL, default_weights: S.DEFAULT_WEIGHTS, verdict_scores_a: S.VERDICT_SCORES_A, verdict_scores_b: S.VERDICT_SCORES_B, baseline_year: S.BASELINE_YEAR, index_flags: S.INDEX_FLAGS, parties: S.PARTIES, rates: S.RATES, as_of: S.AS_OF },
    head_to_head: b.h2h, rates: b.rates, rate_diffs: b.rateDiffs, verdict_mix: b.mix, leaderboard: b.rows, domains: b.domains, cases: b.cases, gap_closed: b.gaps, indices: b.indices,
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
