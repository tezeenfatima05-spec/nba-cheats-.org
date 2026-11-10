import fs from 'node:fs';
import path from 'node:path';

/** Canonical origin for sitemap, robots, and astro `site` (no trailing slash). */
export function getSiteOrigin() {
  const fromEnv = process.env.SITE || process.env.PUBLIC_SITE_ORIGIN;
  if (fromEnv?.trim()) return fromEnv.trim().replace(/\/$/, '');

  const wranglerPath = path.join(process.cwd(), 'wrangler.toml');
  if (fs.existsSync(wranglerPath)) {
    const text = fs.readFileSync(wranglerPath, 'utf8');
    const match = text.match(/^\s*SITE\s*=\s*"([^"]+)"/m);
    if (match?.[1]) return match[1].replace(/\/$/, '');
  }

  return 'https://nbacheats.org';
}
