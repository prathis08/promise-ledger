import { getData } from './data';
import { computeBenchmark } from './scoring';
let cache: ReturnType<typeof computeBenchmark> | null = null;
export function getBench() {
  if (!cache) { const d = getData(); cache = computeBenchmark(d.claims, d.indices, d.series); }
  return cache;
}
// Scores are computed on a 0–1 scale and shown out of 100, which reads more easily.
export const f3 = (x: number | null | undefined) => (x == null ? '—' : (x * 100).toFixed(1));
export const fci = (ci: [number, number] | null) => (ci ? `${(ci[0] * 100).toFixed(0)} to ${(ci[1] * 100).toFixed(0)}` : '');
export const fd = (x: number) => (x >= 0 ? '+' : '−') + Math.abs(x * 100).toFixed(1);
