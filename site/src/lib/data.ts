import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';
import { fixtureClaims, fixtureIndices, fixtureSeries } from '../fixtures/fixtures';

export const VERDICTS = ['false', 'misleading', 'unachieved', 'missed-deadline', 'in-progress', 'true', 'unverifiable'] as const;

const str = z.string().catch('');
const optStr = z.string().nullish().catch(undefined).transform((v) => v ?? undefined);
const arr = <T extends z.ZodTypeAny>(s: T) => z.array(s.optional().catch(undefined)).catch([]).transform((a) => a.filter((x) => x != null) as z.output<T>[]);

const Media = z.object({ platform: optStr, title: optStr, url: str, timestamp_seconds: z.number().nullish().catch(undefined).transform((v) => v ?? undefined), channel: optStr });
const Src = z.object({ title: optStr, url: str });
const Evidence = z.object({ type: optStr, publisher: optStr, title: optStr, url: optStr, date: optStr, key_figure: optStr });
const Resp = z.object({ title: optStr, url: optStr, summary: optStr });

export const ClaimSchema = z.object({
  id: z.string().min(1),
  speaker: z.string().min(1),
  party: z.enum(['BJP', 'INC']),
  role: str,
  level: z.enum(['central', 'state', 'party']).catch('central'),
  state: z.string().nullish().catch(null).transform((v) => v ?? null),
  researched_by: optStr,
  grounding: z.object({ checked: z.number(), matched: z.number(), score: z.number().nullable() }).nullish().catch(null).transform((v) => v ?? null),
  date: z.string().regex(/^\d{4}-\d{2}(-\d{2})?$/),
  venue: str,
  language: str,
  quote_original: str,
  quote_english: str,
  quote_is_verbatim: z.boolean().catch(false),
  claim_type: z.enum(['promise', 'statement', 'statistic']).catch('statement'),
  deadline: z.string().nullish().catch(null).transform((v) => v || null),
  verdict: z.enum(VERDICTS),
  summary: str,
  topics: z.array(z.string()).catch([]),
  media: arr(Media),
  transcript_sources: arr(Src),
  evidence: arr(Evidence),
  govt_response: arr(Resp),
  chart: z.object({ series: z.string(), target: z.number().nullish().catch(null), target_label: optStr, baseline: z.object({ x: z.string(), y: z.number() }).nullish().catch(null) }).nullish().catch(null).transform((v) => v ?? null),
  analysis: str,
  confidence: z.enum(['high', 'medium', 'low']).catch('low'),
  review_status: z.enum(['draft', 'in-review', 'verified', 'disputed']).catch('draft'),
  reviews: arr(z.object({
    reviewer: z.string(), trusted: z.boolean().catch(false), date: str, decision: z.enum(['approve', 'request-changes', 'reject']),
    checks_complete: z.boolean().catch(false), suggested_verdict: optStr, notes: str, extra_sources: str, issue: optStr,
  })),
  last_reviewed: str,
  notes: str,
  scored: z.boolean().catch(true),
  context_for: optStr,
  scoring_note: optStr,
});
export type Claim = z.infer<typeof ClaimSchema>;

const Point = z.object({ year: z.number(), value: z.number(), out_of: z.number().nullish().catch(null), source_url: optStr });
export const IndexSchema = z.object({
  slug: z.string().min(1), name: z.string().min(1), publisher: str, url: optStr,
  higher_is_better: z.boolean().catch(false), metric: str, out_of_label: str,
  points: arr(Point), govt_response: arr(Resp), methodology_note: str, related_claims: z.array(z.string()).catch([]),
});
export type Index = z.infer<typeof IndexSchema>;

export const SeriesSchema = z.object({
  slug: z.string().min(1), title: str, unit: str,
  source: z.object({ publisher: optStr, title: optStr, url: optStr }).nullish().catch(null).transform((v) => v ?? null),
  points: arr(z.object({ x: z.union([z.string(), z.number()]).transform(String), y: z.number() })),
  note: str,
});
export type Series = z.infer<typeof SeriesSchema>;

const root = path.resolve(process.cwd(), '..', 'data');

function load<T>(dir: string, schema: z.ZodType<T>): T[] {
  const d = path.join(root, dir);
  let files: string[] = [];
  try { files = fs.readdirSync(d).filter((f) => f.endsWith('.json')).sort(); } catch { return []; }
  const out: T[] = [];
  for (const f of files) {
    try {
      const raw = JSON.parse(fs.readFileSync(path.join(d, f), 'utf8'));
      const r = schema.safeParse(raw);
      if (r.success) out.push(r.data);
      else console.warn(`[data] skipped ${dir}/${f}: ${r.error.issues.slice(0, 3).map((i) => i.path.join('.') + ' ' + i.message).join('; ')}`);
    } catch (e) {
      console.warn(`[data] skipped ${dir}/${f}: ${(e as Error).message}`);
    }
  }
  return out;
}

let cache: { claims: Claim[]; indices: Index[]; series: Series[]; fixture: boolean } | null = null;

export function getData() {
  if (cache) return cache;
  let claims = load('claims', ClaimSchema);
  let indices = load('indices', IndexSchema);
  let series = load('series', SeriesSchema);
  let fixture = false;
  if (claims.length === 0 && indices.length === 0 && series.length === 0) {
    fixture = true;
    claims = fixtureClaims.map((c) => ClaimSchema.parse(c));
    indices = fixtureIndices.map((c) => IndexSchema.parse(c));
    series = fixtureSeries.map((c) => SeriesSchema.parse(c));
  }
  const seen = new Set<string>();
  claims = claims.filter((c) => (seen.has(c.id) ? (console.warn(`[data] duplicate claim id ${c.id}`), false) : (seen.add(c.id), true)));
  claims.sort((a, b) => b.date.localeCompare(a.date));
  cache = { claims, indices, series, fixture };
  return cache;
}

export const seriesBySlug = (slug: string) => getData().series.find((s) => s.slug === slug);

export function youtubeId(url: string): string | null {
  try {
    const u = new URL(url);
    const h = u.hostname.replace(/^(www|m|music)\./, '');
    if (h === 'youtu.be') return u.pathname.split('/')[1] || null;
    if (h === 'youtube.com' || h === 'youtube-nocookie.com') {
      if (u.pathname === '/watch') return u.searchParams.get('v');
      const m = u.pathname.match(/^\/(shorts|live|embed|v)\/([\w-]{6,})/);
      if (m) return m[2];
    }
  } catch {}
  return null;
}

export function startSeconds(url: string, ts?: number): number {
  if (typeof ts === 'number' && ts > 0) return Math.floor(ts);
  try {
    const t = new URL(url).searchParams.get('t') || new URL(url).searchParams.get('start');
    if (!t) return 0;
    if (/^\d+$/.test(t)) return +t;
    const m = t.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
    if (m) return (+(m[1] || 0)) * 3600 + (+(m[2] || 0)) * 60 + +(m[3] || 0);
  } catch {}
  return 0;
}

export type PromiseStatus = 'met' | 'missed' | 'pending' | 'overdue';
export function promiseStatus(c: Claim, today: string): PromiseStatus {
  if (c.verdict === 'true') return 'met';
  if (['missed-deadline', 'unachieved', 'false', 'misleading'].includes(c.verdict)) return 'missed';
  if (c.deadline && c.deadline >= today) return 'pending';
  return c.deadline ? 'overdue' : 'pending';
}

export const buildDate = new Date().toISOString().slice(0, 10);
export const year = (d: string) => d.slice(0, 4);
export const speakerSlug = (s: string) => s;
