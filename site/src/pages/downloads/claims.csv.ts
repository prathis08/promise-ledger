import { getData } from '../../lib/data';
const esc = (v: unknown) => { const s = String(v ?? ''); return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
export function GET() {
  const cols = ['id', 'speaker', 'date', 'venue', 'claim_type', 'deadline', 'verdict', 'summary', 'topics', 'quote_english', 'quote_original', 'quote_is_verbatim', 'confidence', 'review_status', 'last_reviewed', 'media_urls', 'transcript_urls', 'evidence_urls', 'notes'];
  const rows = getData().claims.map((c) => [c.id, c.speaker, c.date, c.venue, c.claim_type, c.deadline, c.verdict, c.summary, c.topics.join(' | '), c.quote_english, c.quote_original, c.quote_is_verbatim, c.confidence, c.review_status, c.last_reviewed,
    c.media.map((m) => m.url).join(' | '), c.transcript_sources.map((m) => m.url).join(' | '), c.evidence.map((m) => m.url ?? '').join(' | '), c.notes]);
  return new Response([cols, ...rows].map((r) => r.map(esc).join(',')).join('\n') + '\n', { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
}
