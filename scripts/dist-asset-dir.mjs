import fs from 'node:fs';
import path from 'node:path';

/** Astro static build → `dist/`; @astrojs/cloudflare → `dist/client/`. */
export function resolveDistAssetDir(cwd = process.cwd()) {
  const dist = path.join(cwd, 'dist');
  const client = path.join(dist, 'client');
  if (fs.existsSync(client) && fs.existsSync(path.join(client, 'index.html'))) {
    return client;
  }
  return dist;
}

export function findSitemapChunkPath(assetDir) {
  const direct = path.join(assetDir, 'sitemap-0.xml');
  if (fs.existsSync(direct)) return direct;

  const indexPath = path.join(assetDir, 'sitemap-index.xml');
  if (fs.existsSync(indexPath)) {
    const index = fs.readFileSync(indexPath, 'utf8');
    const match = index.match(/<loc>[^<]*\/(sitemap-\d+\.xml)<\/loc>/i);
    if (match) {
      const named = path.join(assetDir, match[1]);
      if (fs.existsSync(named)) return named;
    }
  }

  if (path.basename(assetDir) === 'client') {
    const parentChunk = path.join(path.dirname(assetDir), 'sitemap-0.xml');
    if (fs.existsSync(parentChunk)) return parentChunk;
  }

  return null;
}
