import { getData } from './data';
import { computeBenchmark } from './scoring';
let cache: ReturnType<typeof computeBenchmark> | null = null;
export function getBench() {
  if (!cache) { const d = getData(); cache = computeBenchmark(d.claims, d.indices, d.series); }
  return cache;
}
export const f3 = (x: number | null | undefined) => (x == null ? '—' : x.toFixed(3));
export const fci = (ci: [number, number] | null) => (ci ? `[${ci[0].toFixed(2)}, ${ci[1].toFixed(2)}]` : '');
export const fd = (x: number) => (x >= 0 ? '+' : '−') + Math.abs(x).toFixed(3);
