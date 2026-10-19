// Deployment settings. SITE_BASE is "/" locally and on custom domains, "/promise-ledger/" for GitHub project pages (set in astro.config.mjs).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Prefix a root-relative path with the deploy base path. */
export const u = (p: string) => BASE + p;
export const REPO = 'shreyashsiddharth-collab/promise-ledger';
export const REPO_URL = `https://github.com/${REPO}`;
