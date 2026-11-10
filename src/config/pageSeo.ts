/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'NBA 2K26 Cheats – Auto Green, Unlock All & Attribute Changer',
    description:
      'Explore NBA 2K26 cheats for PC featuring Auto Green timing, unlock all clothes, animations and equipment, max badges, attribute changer, custom.',
  },
  '/products/nba-2k26-cheats/': {
    title: 'NBA 2K26 Cheats for PC — Auto Green | Cheats',
    description:
      'NBA 2K26 cheat software for PC—Auto Green, unlock-all, badges, attribute editor, and configs. Feature list and secure checkout.',
  },
  '/products/nba-2k26-cheats/nba-2k26/': {
    title: 'NBA 2K26 Auto Green & Unlock All | Cheats',
    description:
      'Full feature list: Auto Green timing, unlock-all cosmetics, attribute editor, config profiles, stream-proof overlay, and Cloud DMA.',
  },
  '/blog/': {
    title: 'NBA 2K26 setup guides — Auto Green & configs | Cheats',
    description:
      'Setup: Auto Green tuning, unlock-all workflows, attribute presets, Cloud DMA notes, and patch-day checks for NBA 2K26 cheats on PC.',
  },
  '/forum/': {
    title: 'NBA 2K26 community forum — Auto Green & builds | Cheats',
    description:
      'NBA 2K26 community forum: Auto Green timing, MyPLAYER builds, unlock-all settings, configs, and troubleshooting on PC.',
  },
  '/faq/': {
    title: 'FAQ — NBA 2K26 cheats, checkout & Cloud DMA | Cheats',
    description:
      'Answers on NBA 2K26 Auto Green, unlock-all modules, attribute tools, checkout, Cloud DMA, and supported PC platforms.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Cheats',
    description: 'Purchase terms, license use, and refund policy for NBA Cheats products sold through nbacheats.org.',
  },
  '/privacy/': {
    title: 'Privacy — cookies & support data | Cheats',
    description:
      'Privacy policy: how nbacheats.org uses analytics, cookies, and contact data when you browse, purchase, or request support.',
  },
  '/about/': {
    title: 'Status — About NBA Cheats guides & loader | Cheats',
    description:
      'What NBA Cheats publishes: NBA 2K26 cheat guides, feature notes, live loader status, patch-day updates, and editorial standards.',
  },
  '/support/': {
    title: 'Support | Cheats',
    description: 'Loader setup, Cloud DMA, HWID, and checkout help for NBA 2K26 cheats on PC.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
