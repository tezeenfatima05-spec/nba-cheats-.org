/** Checkout destinations keyed by internal product id — NBA 2K26 only. */
export const CHECKOUT_URLS = {
  nba2k26: 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fnba-2k26',
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/nba-2k26', CHECKOUT_URLS.nba2k26],
  ['/go/nba-2k26/', CHECKOUT_URLS.nba2k26],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
