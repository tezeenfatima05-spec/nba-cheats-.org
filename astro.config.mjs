import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { getSiteOrigin } from './scripts/site-origin.mjs';

export default defineConfig({
  site: getSiteOrigin(),
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/nba-2k26-cheats/',
    '/cheats/lite/': '/products/nba-2k26-cheats/',
    '/cheats/pro/': '/products/nba-2k26-cheats/',
    '/cheats/elite/': '/products/nba-2k26-cheats/nba-2k26/',
    '/cheats/compare/': '/blog/nba-2k26-auto-green-timing/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
