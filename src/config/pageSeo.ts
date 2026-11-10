/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'NBA 2K26 Cheats — Auto Green, Unlock All & Attribute Changer | NBA Cheats',
    description:
      'Explore NBA 2K26 cheats for PC featuring Auto Green timing, unlock all clothes, animations and equipment, max badges, attribute changer, custom configurations, and Cloud DMA support at NBA Cheats.',
  },
  '/products/nba-2k26-cheats/': {
    title: 'NBA 2K26 Cheats for PC — Auto Green & Unlock All | NBA Cheats',
    description:
      'NBA 2K26 cheat software for PC with Auto Green, unlock-all cosmetics, max badges, attribute changer, and config profiles—feature list and secure checkout at nbacheats.org.',
  },
  '/products/nba-2k26-cheats/nba-2k26/': {
    title: 'NBA 2K26 Auto Green, Unlock All & Attributes | NBA Cheats',
    description:
      'Full NBA 2K26 cheat feature list: Auto Green timing, visible unlock-all gear, attribute editor, save/load configs, stream-proof overlay, and Cloud DMA support.',
  },
  '/blog/': {
    title: 'NBA 2K26 setup guides — Auto Green & configs | NBA Cheats',
    description:
      'Auto Green tuning, unlock-all workflows, attribute presets, Cloud DMA notes, and patch-day checks for NBA 2K26 cheats on PC—guides from NBA Cheats.',
  },
  '/forum/': {
    title: 'NBA 2K26 community forum — Auto Green & builds',
    description:
      'Community forum for NBA 2K26 cheats: Auto Green timing, MyPLAYER builds, unlock-all settings, configs, and troubleshooting on PC.',
  },
  '/faq/': {
    title: 'FAQ — NBA 2K26 cheats, checkout & Cloud DMA | NBA Cheats',
    description:
      'FAQ: Answers on NBA 2K26 Auto Green, unlock-all modules, attribute changer, checkout, Cloud DMA, and supported platforms at nbacheats.org.',
  },
  '/terms/': {
    title: 'Terms & Conditions | NBA Cheats',
    description: 'Purchase terms, license use, and refund policy for NBA Cheats products sold through nbacheats.org.',
  },
  '/privacy/': {
    title: 'Privacy — analytics, cookies & support data | NBA Cheats',
    description:
      'Privacy: How nbacheats.org uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About NBA Cheats — guides, features & status',
    description:
      'What NBA Cheats publishes: NBA 2K26 cheat guides, feature notes, loader status, and site updates at nbacheats.org.',
  },
  '/support/': {
    title: 'Support | NBA Cheats',
    description: 'Get help with loader setup, Cloud DMA, and checkout for NBA 2K26 cheats on PC.',
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
