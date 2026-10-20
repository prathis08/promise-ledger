// robots.txt: allow everything and point crawlers at the sitemap. The download files are data, not pages.
import type { APIRoute } from 'astro';
import { u } from '../lib/site';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://sarkaribenchmark.site');
  const body = `User-agent: *
Allow: /
Disallow: ${u('/downloads/')}

Sitemap: ${new URL(u('/sitemap.xml'), base).href}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
