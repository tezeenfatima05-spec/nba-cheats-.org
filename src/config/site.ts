/** Central site identity — update this file for the next game conversion. */
export const SITE_DOMAIN = 'nbacheats.org';
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const SITE_NAME = 'NBA Cheats';
export const TITLE_PREFIX = 'NBA 2K26 Cheats';
export const PRIMARY_KEYWORD = 'NBA 2K26 cheats';
export const SECONDARY_KEYWORD = 'NBA 2K26 Auto Green';
export const PRODUCT_BASE = '/products/nba-2k26-cheats/';
export const PRODUCT_SLUG = 'nba-2k26';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;

export const CTA_CHECKOUT_URL = 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fnba-2k26';
export const DISCORD_INVITE_URL = 'https://discord.com/invite/wmFY3xVtwm';

export const SITE_ASSETS = {
  logo: '/logo.png',
  heroVideo: '',
  heroPoster: '/images/gameplay/hero-poster.webp',
  screenshots: [
    '/images/gameplay/screenshot-1.webp',
    '/images/gameplay/screenshot-2.webp',
    '/images/gameplay/screenshot-3.webp',
    '/images/gameplay/screenshot-4.webp',
    '/images/gameplay/screenshot-5.webp',
    '/images/gameplay/screenshot-6.webp',
    '/images/gameplay/screenshot-visuals.webp',
  ],
} as const;

/** @deprecated Use SITE_ASSETS — kept for older imports */
export const ASSETS = SITE_ASSETS;
