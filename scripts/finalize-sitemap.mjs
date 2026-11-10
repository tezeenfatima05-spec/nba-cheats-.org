import fs from 'node:fs';
import path from 'node:path';
import { findSitemapChunkPath, resolveDistAssetDir } from './dist-asset-dir.mjs';
import { getSiteOrigin } from './site-origin.mjs';

const root = process.cwd();
const assetDir = resolveDistAssetDir(root);
const source = findSitemapChunkPath(assetDir);

if (!source) {
  console.error(
    'finalize-sitemap: sitemap chunk not found under dist/ or dist/client/ — run astro build first.',
  );
  process.exit(1);
}

const raw = fs.readFileSync(source, 'utf8');
const urlCount = (raw.match(/<url>/g) ?? []).length;

if (urlCount === 0) {
  console.error('finalize-sitemap: sitemap chunk contains no URLs.');
  process.exit(1);
}

function formatUrlset(xml) {
  return xml
    .replace(/^<\?xml[^?]*\?>/, '<?xml version="1.0" encoding="UTF-8"?>\n')
    .replace(/<urlset([^>]*)>/, '<urlset$1>\n')
    .replace(/<\/urlset>/, '\n</urlset>\n')
    .replace(/<url>/g, '  <url>\n')
    .replace(/<\/url>/g, '\n  </url>\n')
    .replace(/<loc>/g, '    <loc>')
    .replace(/<\/loc>/g, '</loc>\n')
    .replace(/<lastmod>/g, '    <lastmod>')
    .replace(/<\/lastmod>/g, '</lastmod>\n')
    .replace(/<changefreq>/g, '    <changefreq>')
    .replace(/<\/changefreq>/g, '</changefreq>\n')
    .replace(/<priority>/g, '    <priority>')
    .replace(/<\/priority>/g, '</priority>\n');
}

const siteOrigin = getSiteOrigin();

function rewriteLocHosts(xml) {
  return xml.replace(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g, (_tag, pathname) => {
    return `<loc>${siteOrigin}${pathname}</loc>`;
  });
}

const formatted = rewriteLocHosts(formatUrlset(raw));
fs.writeFileSync(path.join(assetDir, 'sitemap.xml'), formatted, 'utf8');

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteOrigin}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(assetDir, 'sitemap-index.xml'), indexXml, 'utf8');
fs.writeFileSync(path.join(assetDir, 'sitemap-0.xml'), formatted, 'utf8');

const rel = path.relative(root, assetDir).replace(/\\/g, '/');
const robots = `User-agent: *
Allow: /

Disallow: /go/

Sitemap: ${siteOrigin}/sitemap.xml
`;
fs.writeFileSync(path.join(assetDir, 'robots.txt'), robots, 'utf8');

console.log(`Sitemap finalized: ${urlCount} URLs → ${rel}/sitemap.xml`);
