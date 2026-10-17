// Pure scoring module. No I/O, no framework imports: runs at build time and ships to the browser.
// Rules here are the single source of truth; /methodology is generated from these constants.

export const MIN_N = 5;
export const BOOTSTRAP_N = 1000;
export const SEED = 20260417;
export const CI_LEVEL = 0.95;
export const DEFAULT_WEIGHTS = { A: 1 / 3, B: 1 / 3, C: 1 / 3 };
export type Weights = { A: number; B: number; C: number };

export const SUITES = {
  A: { id: 'A', slug: 'accuracy', name: 'Factual Accuracy', claimTypes: ['statement', 'statistic'] },
  B: { id: 'B', slug: 'promises', name: 'Promise Delivery', claimTypes: ['promise'] },
  C: { id: 'C', slug: 'benchmarks', name: 'External Benchmarks', claimTypes: [] as string[] },
} as const;

// verdict -> score; verdicts absent from a table are excluded from that suite (abstained / ungradable).
export const VERDICT_SCORES_A: Record<string, number> = { true: 1, misleading: 0.5, false: 0 };
export const VERDICT_SCORES_B: Record<string, number> = { true: 1, 'in-progress': 0.5, 'missed-deadline': 0.25, misleading: 0.25, unachieved: 0, false: 0 };

export const BASELINE_YEAR = 2014;
export const INDEX_FLAGS: Record<string, { kind: 'comparability' | 'discontinued'; text: string }> = {
  'global-hunger-index': { kind: 'comparability', text: 'Publisher states ranks are not comparable across editions.' },
  'world-bank-ease-of-doing-business': { kind: 'discontinued', text: 'Discontinued in 2020; latest edition is 2020.' },
  'ti-corruption-perceptions': { kind: 'comparability', text: 'Methodology changed in 2012 (0–10 scale before, 0–100 after); TI says scores across the break are not comparable. Affects the INC era.' },
};

export const DOMAINS: { id: string; name: string; topics: string[]; indices: string[] }[] = [
  { id: 'economy-jobs', name: 'Economy & Jobs', topics: ['economy', 'jobs', 'black-money', 'manufacturing', 'prices', 'income'], indices: ['world-bank-ease-of-doing-business', 'global-innovation-index'] },
  { id: 'agriculture-rural', name: 'Agriculture & Rural', topics: ['agriculture'], indices: [] },
  { id: 'welfare-health-education', name: 'Welfare, Health & Education', topics: ['housing', 'sanitation', 'health', 'education', 'women'], indices: ['undp-hdi', 'global-hunger-index', 'wef-global-gender-gap', 'world-happiness-report'] },
  { id: 'infrastructure-energy', name: 'Infrastructure & Energy', topics: ['energy', 'infrastructure', 'railways', 'digital', 'environment'], indices: ['yale-epi'] },
  { id: 'security-internal', name: 'Security & Internal Affairs', topics: ['security', 'terrorism', 'kashmir', 'citizenship', 'internal-security'], indices: [] },
  { id: 'democracy-governance', name: 'Democracy & Governance', topics: ['governance', 'corruption', 'foreign-policy'], indices: ['vdem-liberal-democracy', 'eiu-democracy-index', 'freedom-house', 'rsf-press-freedom', 'ti-corruption-perceptions'] },
];

export function domainOfTopics(topics: string[]): string | null {
  const first = topics[0];
  return DOMAINS.find((d) => d.topics.includes(first))?.id ?? null;
}
export const domainOfIndex = (slug: string) => DOMAINS.find((d) => d.indices.includes(slug))?.id ?? null;

// ---------- statistics ----------
export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const mean = (v: number[]) => (v.length ? v.reduce((a, b) => a + b, 0) / v.length : null);
function quantile(sorted: number[], q: number) {
  const pos = (sorted.length - 1) * q, lo = Math.floor(pos), hi = Math.ceil(pos);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
}
export type CI = [number, number] | null;
function ciOf(samples: number[]): CI {
  if (!samples.length) return null;
  const s = [...samples].sort((a, b) => a - b);
  const a = (1 - CI_LEVEL) / 2;
  return [quantile(s, a), quantile(s, 1 - a)];
}
function resampleMean(v: number[], rng: () => number) {
  let s = 0;
  for (let i = 0; i < v.length; i++) s += v[Math.floor(rng() * v.length)];
  return s / v.length;
}
export function bootstrapCI(values: number[]): CI {
  if (!values.length) return null;
  const rng = mulberry32(SEED);
  const out: number[] = [];
  for (let i = 0; i < BOOTSTRAP_N; i++) out.push(resampleMean(values, rng));
  return ciOf(out);
}

export type Stat = { n: number; mean: number | null; ci: CI; sufficient: boolean; abstained: number; pending: number; share: number | null };
export function stat(values: number[], abstained = 0, shareOfOnes = false, pending = 0): Stat {
  const n = values.length;
  return {
    n, mean: mean(values), ci: bootstrapCI(values), sufficient: n >= MIN_N, abstained, pending,
    share: shareOfOnes && n ? values.filter((v) => v === 1).length / n : null,
  };
}

// ---------- test cases ----------
export type ClaimLike = {
  id: string; speaker: string; party?: string; level?: string; role?: string; date: string; claim_type: string; verdict: string; topics: string[]; confidence: string;
  deadline: string | null; scored?: boolean; chart: { series: string; target?: number | null; target_label?: string; baseline?: { x: string; y: number } | null } | null;
};
export type Case = { id: string; suite: 'A' | 'B'; date: string; speaker: string; party: string; level: string; verdict: string; score: number | null; notYetDue: boolean; confidence: string; domain: string | null };

// Claims with scored === false are context only: excluded from every suite, domain, bootstrap and output.
export const isScored = (c: { scored?: boolean }) => c.scored !== false;

// Promises whose deadline is after the evaluation date are not graded in either direction (no credit for early
// delivery, no penalty for being in progress), so parties with older, already-due promises are not disadvantaged.
export const AS_OF = new Date().toISOString().slice(0, 10);
export function scoreClaim(c: ClaimLike, asOf: string = AS_OF): Case {
  const suite = c.claim_type === 'promise' ? 'B' : 'A';
  const table = suite === 'A' ? VERDICT_SCORES_A : VERDICT_SCORES_B;
  const notYetDue = suite === 'B' && !!c.deadline && c.deadline > asOf;
  return { id: c.id, suite, date: c.date, speaker: c.speaker, party: c.party ?? 'BJP', level: c.level ?? 'central', verdict: c.verdict, notYetDue, score: !notYetDue && c.verdict in table ? table[c.verdict] : null, confidence: c.confidence, domain: domainOfTopics(c.topics) };
}

export function suiteStat(cases: Case[], suite: 'A' | 'B'): Stat {
  const cs = cases.filter((c) => c.suite === suite);
  const graded = cs.filter((c) => c.score !== null).map((c) => c.score as number);
  const pending = cs.filter((c) => c.notYetDue).length;
  return stat(graded, cs.length - graded.length - pending, true, pending);
}

// ---------- series dates & gap closed ----------
const MON = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const endOfMonth = (y: number, m: number) => Date.UTC(y, m + 1, 0);
// Parse a series x-label to the END of the period it covers (ms since epoch), or null.
export function periodEnd(x: string): number | null {
  let m: RegExpMatchArray | null;
  if ((m = x.match(/^(\d{4})-(\d{2})-(\d{2})$/))) return Date.UTC(+m[1], +m[2] - 1, +m[3]);
  if ((m = x.match(/^([A-Za-z]{3})[a-z]*\s+(\d{4})$/))) { const i = MON.indexOf(m[1].toLowerCase()); return i < 0 ? null : endOfMonth(+m[2], i); }
  if ((m = x.match(/^(\d{4})-(\d{2})$/))) return endOfMonth(Math.floor(+m[1] / 100) * 100 + +m[2], 2); // financial year ends 31 March
  if ((m = x.match(/^(\d{4})\s*\(to\s+(\d{1,2})\s+([A-Za-z]{3})/))) { const i = MON.indexOf(m[3].toLowerCase()); return i < 0 ? null : Date.UTC(+m[1], i, +m[2]); }
  if ((m = x.match(/^(\d{4})$/))) return Date.UTC(+m[1], 11, 31);
  return null;
}
const dateMs = (d: string) => Date.UTC(+d.slice(0, 4), +(d.slice(5, 7) || '1') - 1, +(d.slice(8, 10) || '1'));

export type SeriesLike = { slug: string; unit: string; points: { x: string; y: number }[] };
export type Gap = {
  id: string; series: string; unit: string; target: number; targetLabel: string;
  baseline: { x: string; y: number }; atDeadline: { x: string; y: number } | null; latest: { x: string; y: number };
  gapAtDeadline: number | null; gapLatest: number; caveats: string[];
};
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

export function gapClosed(c: ClaimLike, series: SeriesLike | undefined): Gap | null {
  if (!c.chart || c.chart.target == null || !series) return null;
  const pts = series.points.map((p) => ({ ...p, t: periodEnd(p.x) })).filter((p) => p.t !== null) as { x: string; y: number; t: number }[];
  if (!pts.length) return null;
  pts.sort((a, b) => a.t - b.t);
  const caveats: string[] = [];
  const claimT = dateMs(c.date);
  const before = pts.filter((p) => p.t <= claimT);
  let baseline = c.chart.baseline ?? before[before.length - 1];
  if (c.chart.baseline) caveats.push(`Baseline set explicitly: ${c.chart.baseline.y} (${c.chart.baseline.x}).`);
  else if (!baseline) { baseline = pts[0]; caveats.push('No series point at or before the claim date; baseline is the first point.'); }
  const target = c.chart.target;
  const tl = c.chart.target_label ?? '';
  if (/nominal/i.test(series.unit) && /prices/i.test(tl)) caveats.push('Series is nominal; target is stated in constant prices. Units are not comparable.');
  const gap = (v: number) => (target === baseline.y ? null : clamp01((v - baseline.y) / (target - baseline.y)));
  let atDeadline: (typeof pts)[number] | null = null;
  if (c.deadline) { const dl = dateMs(c.deadline); const b = pts.filter((p) => p.t <= dl); atDeadline = b[b.length - 1] ?? null; }
  const latest = pts[pts.length - 1];
  const gl = gap(latest.y);
  if (gl === null) return null;
  return {
    id: c.id, series: series.slug, unit: series.unit, target, targetLabel: tl,
    baseline: { x: baseline.x, y: baseline.y }, atDeadline: atDeadline && { x: atDeadline.x, y: atDeadline.y }, latest: { x: latest.x, y: latest.y },
    gapAtDeadline: atDeadline ? gap(atDeadline.y) : null, gapLatest: gl, caveats,
  };
}

// ---------- parties & eras ----------
// Each party is a "model". Claims are attributed by the claim's party field. For indices, each party is
// scored on the change during its own era at the centre: INC (UPA) 2004 → 2014 edition, BJP (NDA) 2014 → latest.
export const PARTIES = [
  { id: 'BJP', name: 'BJP', label: 'BJP (May 2014 → today)', claimEra: '2014-05-26 → today (2013–14 campaign promises included)', indexFrom: 2014, indexTo: null as number | null },
  { id: 'INC', name: 'INC', label: 'Congress (2000 → May 2014)', claimEra: '2000-01-01 → 2014-05-25 (2004/2009 manifesto promises included)', indexFrom: 2004, indexTo: 2014 as number | null },
] as const;
export type PartyId = (typeof PARTIES)[number]['id'];
export const ERA_START_SLACK = 3; // an era's first edition may be up to this many years after the era start (flagged)
export const ERA_END_SLACK = 2; // a closed era's last edition must be within this many years before the era end
// Suite C score for a party = share of indices that improved during its era (improved 1, flat 0.5, declined 0).
export const C_IMPROVED = 1, C_FLAT = 0.5, C_DECLINED = 0, C_EPS = 0.0005;

// ---------- indices (Suite C) ----------
export type IndexLike = {
  slug: string; name: string; metric: string; higher_is_better: boolean;
  points: { year: number; value: number; out_of?: number | null }[];
};
export type NormPoint = { year: number; value: number; outOf: number | null; norm: number; outOfImputed: boolean };
export type EraResult = { start: NormPoint; end: NormPoint; delta: number; perYear: number | null; score: number; lateStart: boolean };
export type IndexResult = {
  slug: string; name: string; domain: string | null; isRank: boolean; series: NormPoint[];
  baseline: NormPoint; latest: NormPoint; delta: number; flags: { kind: string; text: string }[]; excludable: boolean;
  eras: Record<string, EraResult | null>; eraGaps: Record<string, string | null>;
};
function eraOf(series: NormPoint[], from: number, to: number | null): { r: EraResult | null; why: string | null } {
  const atOrBefore = series.filter((p) => p.year <= from);
  let start = atOrBefore[atOrBefore.length - 1], lateStart = false;
  if (!start) {
    start = series.find((p) => p.year <= from + ERA_START_SLACK) as NormPoint;
    if (!start) return { r: null, why: `no edition between ${from - 1} and ${from + ERA_START_SLACK}` };
    lateStart = true;
  }
  const inEra = series.filter((p) => p.year > start.year && (to == null || p.year <= to));
  const end = inEra[inEra.length - 1];
  if (!end) return { r: null, why: 'only one edition in era' };
  if (to != null && end.year < to - ERA_END_SLACK) return { r: null, why: `last edition in era is ${end.year}` };
  const delta = end.norm - start.norm;
  return { r: { start, end, delta, perYear: end.year > start.year ? delta / (end.year - start.year) : null, score: delta > C_EPS ? C_IMPROVED : delta < -C_EPS ? C_DECLINED : C_FLAT, lateStart }, why: null };
}
export function normaliseIndex(ix: IndexLike): IndexResult | null {
  const isRank = /rank/i.test(ix.metric);
  const pts = [...ix.points].sort((a, b) => a.year - b.year);
  if (!pts.length) return null;
  const series: NormPoint[] = [];
  for (const p of pts) {
    let outOf = p.out_of ?? null, imputed = false;
    if (outOf == null && (isRank || !/0?1\b|0-1/.test(ix.metric))) {
      const near = pts.filter((q) => q.out_of != null).sort((a, b) => Math.abs(a.year - p.year) - Math.abs(b.year - p.year) || a.year - b.year)[0];
      if (near) { outOf = near.out_of as number; imputed = true; }
    }
    let norm: number;
    if (isRank) { if (outOf == null || outOf < 2) continue; norm = 1 - (p.value - 1) / (outOf - 1); }
    else norm = outOf == null ? p.value : p.value / outOf;
    series.push({ year: p.year, value: p.value, outOf, norm: clamp01(norm), outOfImputed: imputed });
  }
  if (!series.length) return null;
  const le = series.filter((p) => p.year <= BASELINE_YEAR);
  const baseline = le.length ? le[le.length - 1] : series[0];
  const latest = series[series.length - 1];
  const flags: { kind: string; text: string }[] = [];
  const f = INDEX_FLAGS[ix.slug];
  if (f) flags.push(f);
  if (series.some((p) => p.outOfImputed)) flags.push({ kind: 'out-of-imputed', text: 'Number of countries missing for some editions; taken from the nearest year that has it.' });
  const eras: Record<string, EraResult | null> = {}, eraGaps: Record<string, string | null> = {};
  for (const pa of PARTIES) { const { r, why } = eraOf(series, pa.indexFrom, pa.indexTo); eras[pa.id] = r; eraGaps[pa.id] = why; if (r?.lateStart) flags.push({ kind: 'late-start', text: `${pa.name} era: first edition is ${r.start.year}, after ${pa.indexFrom}.` }); }
  return { slug: ix.slug, name: ix.name, domain: domainOfIndex(ix.slug), isRank, series, baseline, latest, delta: latest.norm - baseline.norm, flags, excludable: !!f, eras, eraGaps };
}

export type CStat = { n: number; mean: number | null; ci: CI; sufficient: boolean; meanDelta: number | null; meanPerYear: number | null; improved: number; declined: number; flat: number };
export function cStat(res: IndexResult[], party: string, excludeFlagged: boolean): CStat {
  const eras = res.filter((r) => !(excludeFlagged && r.excludable)).map((r) => r.eras[party]).filter(Boolean) as EraResult[];
  const sc = eras.map((e) => e.score);
  const py = eras.map((e) => e.perYear).filter((x): x is number => x != null);
  return {
    n: eras.length, mean: mean(sc), ci: bootstrapCI(sc), sufficient: eras.length >= MIN_N, meanDelta: mean(eras.map((e) => e.delta)), meanPerYear: mean(py),
    improved: sc.filter((x) => x === C_IMPROVED).length, declined: sc.filter((x) => x === C_DECLINED).length, flat: sc.filter((x) => x === C_FLAT).length,
  };
}

// ---------- overall ----------
export type Pools = { A: number[]; B: number[]; C: number[] };
export type Overall = { score: number | null; ci: CI; n: number; used: Weights };
function usedWeights(pools: Pools, w: Weights) {
  const keys = (['A', 'B', 'C'] as const).filter((k) => pools[k].length > 0 && w[k] > 0);
  const total = keys.reduce((s, k) => s + w[k], 0);
  const used = { A: 0, B: 0, C: 0 };
  keys.forEach((k) => (used[k] = w[k] / total));
  return { keys, used };
}
const weighted = (pools: Pools, keys: readonly ('A' | 'B' | 'C')[], used: Weights, f: (v: number[]) => number) => keys.reduce((s, k) => s + used[k] * f(pools[k]), 0);
export function overall(pools: Pools, w: Weights): Overall {
  const { keys, used } = usedWeights(pools, w);
  const n = pools.A.length + pools.B.length + pools.C.length;
  if (!keys.length) return { score: null, ci: null, n, used };
  const rng = mulberry32(SEED);
  const samples: number[] = [];
  for (let i = 0; i < BOOTSTRAP_N; i++) samples.push(weighted(pools, keys, used, (v) => resampleMean(v, rng)));
  return { score: weighted(pools, keys, used, (v) => mean(v) as number), ci: ciOf(samples), n, used };
}
// Head-to-head: difference of means (a − b), CI from independent bootstrap resamples of each side.
export type Diff = { diff: number | null; ci: CI; significant: boolean };
export function diffMeans(a: number[], b: number[]): Diff {
  if (!a.length || !b.length) return { diff: null, ci: null, significant: false };
  const rng = mulberry32(SEED);
  const out: number[] = [];
  for (let i = 0; i < BOOTSTRAP_N; i++) out.push(resampleMean(a, rng) - resampleMean(b, rng));
  const ci = ciOf(out);
  return { diff: (mean(a) as number) - (mean(b) as number), ci, significant: !!ci && (ci[0] > 0 || ci[1] < 0) };
}
export function diffOverall(pa: Pools, pb: Pools, w: Weights): Diff {
  const ua = usedWeights(pa, w), ub = usedWeights(pb, w);
  if (!ua.keys.length || !ub.keys.length) return { diff: null, ci: null, significant: false };
  const rng = mulberry32(SEED);
  const out: number[] = [];
  for (let i = 0; i < BOOTSTRAP_N; i++) out.push(weighted(pa, ua.keys, ua.used, (v) => resampleMean(v, rng)) - weighted(pb, ub.keys, ub.used, (v) => resampleMean(v, rng)));
  const ci = ciOf(out);
  const m = (p: Pools, u: typeof ua) => weighted(p, u.keys, u.used, (v) => mean(v) as number);
  return { diff: m(pa, ua) - m(pb, ub), ci, significant: !!ci && (ci[0] > 0 || ci[1] < 0) };
}

// ---------- false-claim rates ----------
// Plain shares of verdicts, independent of how many claims a party has. Each rate is the mean of a 0/1 indicator,
// so it gets the same bootstrap CI as the suites, and head-to-head differences use diffMeans.
export const RATES = [
  { id: 'false', label: 'False claims', of: 'A', verdicts: ['false'], help: 'share of graded statements/statistics rated false' },
  { id: 'falseOrMisleading', label: 'False or misleading claims', of: 'A', verdicts: ['false', 'misleading'], help: 'share of graded statements/statistics rated false or misleading' },
  { id: 'broken', label: 'Promises not delivered', of: 'B', verdicts: ['unachieved', 'false', 'missed-deadline', 'misleading'], help: 'share of due, graded promises not delivered on time (unachieved, false, missed deadline, misleading)' },
  { id: 'brokenOutright', label: 'Promises unachieved or false', of: 'B', verdicts: ['unachieved', 'false'], help: 'share of due, graded promises rated unachieved or false (excludes late delivery)' },
] as const;
export type RateId = (typeof RATES)[number]['id'];
export function rateIndicators(cases: Case[], r: (typeof RATES)[number]): number[] {
  return cases.filter((c) => c.suite === r.of && c.score !== null).map((c) => ((r.verdicts as readonly string[]).includes(c.verdict) ? 1 : 0));
}
export const VERDICT_ORDER = ['true', 'in-progress', 'missed-deadline', 'misleading', 'unachieved', 'false', 'unverifiable', 'not-yet-due'] as const;
export function verdictMix(cases: Case[], suite: 'A' | 'B'): { verdict: string; n: number; share: number }[] {
  const cs = cases.filter((c) => c.suite === suite);
  const key = (c: Case) => (c.notYetDue ? 'not-yet-due' : c.verdict);
  return VERDICT_ORDER.map((v) => { const n = cs.filter((c) => key(c) === v).length; return { verdict: v, n, share: cs.length ? n / cs.length : 0 }; }).filter((x) => x.n > 0);
}

// ---------- whole benchmark ----------
export const SPEAKER_MIN_CASES = 3; // speakers with fewer graded cases are not given their own leaderboard row
export type Row = { id: string; label: string; party: string; kind: 'party' | 'level' | 'speaker'; A: Stat; B: Stat; C: CStat | null; overall: Overall | null };
export type PartyBench = { id: string; name: string; label: string; pools: Pools; cPool: { s: number; x: boolean }[] };
export type Benchmark = {
  cases: Case[]; gaps: Gap[]; indices: IndexResult[];
  parties: PartyBench[]; rows: Row[];
  h2h: { A: Diff; B: Diff; C: Diff; overall: Diff };
  rates: Record<string, Record<RateId, Stat>>; rateDiffs: Record<RateId, Diff>;
  mix: Record<string, { A: ReturnType<typeof verdictMix>; B: ReturnType<typeof verdictMix> }>;
  domains: { id: string; name: string; byParty: Record<string, { A: Stat; B: Stat; C: CStat; AB: Stat }> }[];
};
const graded = (cs: Case[], suite: 'A' | 'B') => cs.filter((c) => c.suite === suite && c.score !== null).map((c) => c.score as number);
export function computeBenchmark(claims: ClaimLike[], indices: IndexLike[], series: SeriesLike[], weights: Weights = DEFAULT_WEIGHTS): Benchmark {
  claims = claims.filter(isScored);
  const cases = claims.map((c) => scoreClaim(c));
  const gaps = claims.map((c) => gapClosed(c, series.find((s) => s.slug === c.chart?.series))).filter(Boolean) as Gap[];
  const idx = indices.map(normaliseIndex).filter(Boolean) as IndexResult[];
  const parties: PartyBench[] = [];
  const rows: Row[] = [];
  for (const pa of PARTIES) {
    const pc = cases.filter((c) => c.party === pa.id);
    const cPool = idx.filter((r) => r.eras[pa.id]).map((r) => ({ s: r.eras[pa.id]!.score, x: r.excludable }));
    const pools: Pools = { A: graded(pc, 'A'), B: graded(pc, 'B'), C: cPool.map((c) => c.s) };
    parties.push({ id: pa.id, name: pa.name, label: pa.label, pools, cPool });
    rows.push({ id: pa.id.toLowerCase(), label: pa.label, party: pa.id, kind: 'party', A: suiteStat(pc, 'A'), B: suiteStat(pc, 'B'), C: cStat(idx, pa.id, false), overall: overall(pools, weights) });
    for (const [lv, name] of [['central', 'Union ministers & PM'], ['state', 'Chief Ministers'], ['party', 'Party leaders (not in govt)']] as const) {
      const lc = pc.filter((c) => c.level === lv);
      if (lc.length) rows.push({ id: `${pa.id}-${lv}`.toLowerCase(), label: `${pa.name} · ${name}`, party: pa.id, kind: 'level', A: suiteStat(lc, 'A'), B: suiteStat(lc, 'B'), C: null, overall: null });
    }
    const speakers = [...new Set(pc.map((c) => c.speaker))];
    for (const sp of speakers) {
      const sc = pc.filter((c) => c.speaker === sp);
      if (sc.filter((c) => c.score !== null).length < SPEAKER_MIN_CASES) continue;
      rows.push({ id: `${pa.id}-${sp}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'), label: sp, party: pa.id, kind: 'speaker', A: suiteStat(sc, 'A'), B: suiteStat(sc, 'B'), C: null, overall: null });
    }
  }
  const [P, Q] = parties;
  const h2h = { A: diffMeans(P.pools.A, Q.pools.A), B: diffMeans(P.pools.B, Q.pools.B), C: diffMeans(P.pools.C, Q.pools.C), overall: diffOverall(P.pools, Q.pools, weights) };
  const domains = DOMAINS.map((d) => {
    const byParty: Benchmark['domains'][number]['byParty'] = {};
    for (const pa of PARTIES) {
      const dc = cases.filter((c) => c.domain === d.id && c.party === pa.id);
      byParty[pa.id] = { A: suiteStat(dc, 'A'), B: suiteStat(dc, 'B'), C: cStat(idx.filter((r) => r.domain === d.id), pa.id, false), AB: stat([...graded(dc, 'A'), ...graded(dc, 'B')]) };
    }
    return { id: d.id, name: d.name, byParty };
  });
  const rates: Benchmark['rates'] = {}, mix: Benchmark['mix'] = {};
  for (const pa of PARTIES) {
    const pc = cases.filter((c) => c.party === pa.id);
    rates[pa.id] = Object.fromEntries(RATES.map((r) => [r.id, stat(rateIndicators(pc, r))])) as Record<RateId, Stat>;
    mix[pa.id] = { A: verdictMix(pc, 'A'), B: verdictMix(pc, 'B') };
  }
  const byP = (id: string) => cases.filter((c) => c.party === id);
  const rateDiffs = Object.fromEntries(RATES.map((r) => [r.id, diffMeans(rateIndicators(byP(PARTIES[0].id), r), rateIndicators(byP(PARTIES[1].id), r))])) as Record<RateId, Diff>;
  return { cases, gaps, indices: idx, parties, rows, h2h, domains, rates, rateDiffs, mix };
}
