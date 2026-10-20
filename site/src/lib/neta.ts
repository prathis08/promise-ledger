// Neta Ranking: one score out of 100 per leader, from four parts. Pure functions only, so the page's
// sliders can recompute the ranking in the browser with exactly the same maths.
//
//   Honesty     the leader's checked claims on this site (true statements and kept promises), averaged.
//               Leaders with few checked claims are pulled toward the average of everyone (PRIOR_WEIGHT
//               pseudo-claims), so one lucky or unlucky claim cannot put someone at the top or bottom.
//   Clean record  pending criminal cases declared in their latest affidavit; a conviction counts as 2 cases.
//   Corruption  pending cases under the Prevention of Corruption Act, money laundering (PMLA), IPC 409
//               (criminal breach of trust by a public servant) or IPC 171B / 171E (bribery at elections).
//   Education   highest degree declared (honorary degrees not counted). Kept to a small default weight,
//               because schooling says nothing about honesty; readers can change it with the sliders.
//
// Pending cases are accusations, not proof of guilt. The page says so next to every number.

export const PRIOR_WEIGHT = 3;
export const NETA_WEIGHTS = { honesty: 50, record: 20, corruption: 20, education: 10 } as const;
export type NetaWeights = { honesty: number; record: number; corruption: number; education: number };

export const EDU_POINTS: Record<string, number | null> = {
  Literate: 10, '8th Pass': 20, '10th Pass': 30, '12th Pass': 45, Graduate: 65, 'Graduate Professional': 75, 'Post Graduate': 85, Doctorate: 100, Others: null,
};

export const honestyScore = (sum: number, n: number, prior: number) => (sum + PRIOR_WEIGHT * prior) / (n + PRIOR_WEIGHT);
// Each extra case takes a smaller bite: 0 → 100, 1 → 80, 3 → 57, 10 → 29.
export const recordScore = (pending: number, convictions: number) => 100 / (1 + 0.25 * (pending + 2 * convictions));
// Corruption cases weigh twice as much per case: 0 → 100, 1 → 67, 4 → 33, 8 → 20.
export const corruptionScore = (cases: number) => 100 / (1 + 0.5 * cases);

export type NetaParts = { honesty: number; record: number; corruption: number; education: number | null };
export function netaOverall(p: NetaParts, w: NetaWeights): number | null {
  const parts: [number | null, number][] = [[p.honesty, w.honesty], [p.record, w.record], [p.corruption, w.corruption], [p.education, w.education]];
  let s = 0, t = 0;
  for (const [v, wt] of parts) if (v != null && wt > 0) { s += v * wt; t += wt; }
  return t ? s / t : null;
}
