// Independent recomputation of Suite A and B means straight from data/claims; asserts they match scoring.ts.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { computeBenchmark } from '../src/lib/scoring.ts';

const dir = path.resolve(import.meta.dirname, '../../data/claims');
const claims = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))).filter((c) => c.scored !== false);
const A = { true: 1, misleading: 0.5, false: 0 };
const B = { true: 1, 'in-progress': 0.5, 'missed-deadline': 0.25, misleading: 0.25, unachieved: 0, false: 0 };
const today = new Date().toISOString().slice(0, 10);
const due = (c) => !(c.deadline && c.deadline > today);
const avg = (a) => a.reduce((x, y) => x + y, 0) / a.length;
const bm = computeBenchmark(claims, [], []);
for (const party of ['BJP', 'INC']) {
  const pc = claims.filter((c) => c.party === party);
  const a = pc.filter((c) => c.claim_type !== 'promise' && c.verdict in A).map((c) => A[c.verdict]);
  const b = pc.filter((c) => c.claim_type === 'promise' && due(c) && c.verdict in B).map((c) => B[c.verdict]);
  const row = bm.rows.find((r) => r.kind === 'party' && r.party === party);
  assert.equal(row.A.n, a.length, `${party} A n`); assert.equal(row.B.n, b.length, `${party} B n`);
  if (a.length) assert.ok(Math.abs(row.A.mean - avg(a)) < 1e-12, `${party} Suite A mean`);
  if (b.length) assert.ok(Math.abs(row.B.mean - avg(b)) < 1e-12, `${party} Suite B mean`);
  console.log(`OK  ${party}  Suite A mean=${a.length ? avg(a).toFixed(4) : '—'} n=${a.length}   Suite B mean=${b.length ? avg(b).toFixed(4) : '—'} n=${b.length}`);
}
