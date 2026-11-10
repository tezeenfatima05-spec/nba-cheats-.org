/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/nba-2k26-cheats/'],
  ['/cheats/', '/products/nba-2k26-cheats/'],
  ['/cheats/lite', '/products/nba-2k26-cheats/'],
  ['/cheats/lite/', '/products/nba-2k26-cheats/'],
  ['/cheats/pro', '/products/nba-2k26-cheats/'],
  ['/cheats/pro/', '/products/nba-2k26-cheats/'],
  ['/cheats/elite', '/products/nba-2k26-cheats/nba-2k26/'],
  ['/cheats/elite/', '/products/nba-2k26-cheats/nba-2k26/'],
  ['/cheats/compare', '/blog/nba-2k26-auto-green-timing/'],
  ['/cheats/compare/', '/blog/nba-2k26-auto-green-timing/'],
  ['/products/nba-2k26-cheats', '/products/nba-2k26-cheats/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
