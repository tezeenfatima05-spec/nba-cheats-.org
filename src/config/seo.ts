import { t } from '../i18n';
import { SITE_DOMAIN as INDEXNOW_HOST_NAME } from './site';
import { getPageSeoEntry } from './pageSeo';

const configuredSite = import.meta.env.SITE as string | undefined;
export const SITE_ORIGIN = (configuredSite?.replace(/\/$/, '') || `https://${t.site.domain}`);

export const DEFAULT_OG_IMAGE = '/images/gameplay/hero-poster.webp';

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

/** @example nbacheats.org */
export const TWITTER_SITE = import.meta.env.PUBLIC_TWITTER_SITE as string | undefined;

export const TWITTER_CREATOR = import.meta.env.PUBLIC_TWITTER_CREATOR as string | undefined;

/** Comma-separated profile URLs (X, YouTube, etc.) for Organization sameAs. */
export function getOrganizationSameAs(): string[] {
  const raw = import.meta.env.PUBLIC_ORG_SAME_AS as string | undefined;
  if (!raw?.trim()) return [];
  return raw
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY as string | undefined;

export function canonicalUrl(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function clampMetaDescription(text: string, max = 155): string {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (normalized.length <= max) return normalized;
  const slice = normalized.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(' ');
  const trimmed = (lastSpace > 70 ? slice.slice(0, lastSpace) : slice).trim();
  return `${trimmed}…`;
}

export function clampPageTitle(title: string, max = 60): string {
  if (title.length <= max) return title;
  const brandSuffix = title.match(/(\s\|\sNBA Cheats)$/);
  if (brandSuffix) {
    const suffix = brandSuffix[1];
    const keyword = title.slice(0, -suffix.length).trim();
    const maxKeyword = max - suffix.length;
    if (maxKeyword < 12) return title.slice(0, max - 1).trim() + '…';
    let trimmed = keyword.slice(0, maxKeyword);
    const lastSpace = trimmed.lastIndexOf(' ');
    if (lastSpace > 20) trimmed = trimmed.slice(0, lastSpace);
    return `${trimmed.trim()}${suffix}`;
  }
  const slice = title.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(' ');
  return `${(lastSpace > 20 ? slice.slice(0, lastSpace) : slice).trim()}…`;
}

export function resolvePageSeo(pathname: string): { title: string; description: string } {
  const entry = getPageSeoEntry(pathname);
  const raw = entry ?? { title: t.site.title, description: t.site.description };
  return {
    title: clampPageTitle(raw.title),
    description: clampMetaDescription(raw.description),
  };
}

export function pageTitle(keyword: string, brand = t.site.name): string {
  return clampPageTitle(`${keyword} | ${brand}`);
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = INDEXNOW_HOST_NAME;
