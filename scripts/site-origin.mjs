import fs from 'node:fs';
import path from 'node:path';

const LIVE_HOST = 'nbacheats.org';

/** Reject preview/workers hosts so sitemap, canonical, and robots match production. */
export function assertLiveSiteOrigin(origin) {
  let host;
  try {
    host = new URL(origin).hostname;
  } catch {
    throw new Error(`Invalid SITE origin: ${origin}`);
  }
  if (/workers\.dev$/i.test(host) || host.includes('.workers.')) {
    throw new Error(
      `SITE must be https://${LIVE_HOST} for production builds, not ${origin}. Update wrangler.toml [vars] SITE or unset SITE in the shell.`,
    );
  }
  if (host !== LIVE_HOST) {
    console.warn(
      `site-origin: SITE host is "${host}" (expected "${LIVE_HOST}"). Sitemap and canonical URLs will use ${origin}.`,
    );
  }
}

/** Canonical origin for sitemap, robots, and astro `site` (no trailing slash). */
export function getSiteOrigin() {
  const fromEnv = process.env.SITE || process.env.PUBLIC_SITE_ORIGIN;
  let origin;
  if (fromEnv?.trim()) {
    origin = fromEnv.trim().replace(/\/$/, '');
  } else {
    const wranglerPath = path.join(process.cwd(), 'wrangler.toml');
    if (fs.existsSync(wranglerPath)) {
      const text = fs.readFileSync(wranglerPath, 'utf8');
      const match = text.match(/^\s*SITE\s*=\s*"([^"]+)"/m);
      if (match?.[1]) origin = match[1].replace(/\/$/, '');
    }
  }
  if (!origin) origin = `https://${LIVE_HOST}`;
  assertLiveSiteOrigin(origin);
  return origin;
}
