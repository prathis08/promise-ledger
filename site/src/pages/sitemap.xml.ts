// sitemap.xml: every page on the site, so search engines find all claim pages, not just the ones linked from the home page.
import type { APIRoute } from 'astro';
import { getData } from '../lib/data';
import { u } from '../lib/site';

const STATIC: [string, string, number][] = [
  ['/', 'daily', 1.0],
  ['/netas/', 'weekly', 0.9],
  ['/claims/', 'daily', 0.9],
  ['/suites/accuracy/', 'weekly', 0.7],
  ['/suites/promises/', 'weekly', 0.7],
  ['/benchmarks/', 'monthly', 0.6],
  ['/methodology/', 'monthly', 0.5],
  ['/review/', 'weekly', 0.4],
  ['/data/', 'monthly', 0.3],
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://sarkaribenchmark.site');
  const today = new Date().toISOString().slice(0, 10);
  const abs = (p: string) => new URL(u(p), base).href;
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const urls = [
    ...STATIC.map(([p, freq, pri]) => ({ loc: abs(p), lastmod: today, freq, pri })),
    ...getData().claims.map((c) => ({ loc: abs(`/claims/${c.id}/`), lastmod: (c.last_reviewed || today).slice(0, 10), freq: 'monthly', pri: 0.6 })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((x) => `  <url><loc>${esc(x.loc)}</loc><lastmod>${x.lastmod}</lastmod><changefreq>${x.freq}</changefreq><priority>${x.pri.toFixed(1)}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
