import { t } from '../i18n';
import { checkoutPath, PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE, PRODUCT_SLUG } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  'nba-2k26': [
    'nba-2k26-auto-green-timing',
    'nba-2k26-unlock-all-guide',
    'nba-2k26-cloud-dma-requirements',
    'nba-2k26-attribute-changer-tips',
  ],
};

const gameplay = '/images/gameplay';

const slideDefs: ProductSlide[] = [
  {
    src: `${gameplay}/screenshot-1.webp`,
    alt: 'NBA 2K26 Auto Green timing overlay on a jump shot',
    caption: 'Auto Green',
    captionDesc: 'Shot-meter timing assistance tuned for online MyPLAYER games.',
  },
  {
    src: `${gameplay}/screenshot-2.webp`,
    alt: 'NBA 2K26 unlock all clothes and animations menu',
    caption: 'Unlock all',
    captionDesc: 'Clothes, animations, equipment, and badges visible to everyone.',
  },
  {
    src: `${gameplay}/screenshot-3.webp`,
    alt: 'NBA 2K26 attribute changer panel with shooting sliders',
    caption: 'Attributes',
    captionDesc: 'Edit shooting, defense, athleticism, and playmaking stats.',
  },
  {
    src: `${gameplay}/screenshot-4.webp`,
    alt: 'NBA 2K26 save and load configuration screen',
    caption: 'Configs',
    captionDesc: 'Create, load, save, and delete named presets.',
  },
  {
    src: `${gameplay}/screenshot-5.webp`,
    alt: 'NBA 2K26 stream proof overlay settings',
    caption: 'Overlay',
    captionDesc: 'Stream-proof menu that stays off capture software when enabled.',
  },
  {
    src: `${gameplay}/screenshot-6.webp`,
    alt: 'NBA 2K26 Cloud DMA setup checklist',
    caption: 'Cloud DMA',
    captionDesc: 'Optional hardware path when your rig meets requirements.',
  },
];

export const fullFeatureList: string[] = [
  'Auto Green (timing)',
  'Unlock all clothes (visible to everyone)',
  'Unlock all animations (visible to everyone)',
  'Unlock all equipment (visible to everyone)',
  'Unlock max badges (visible to everyone)',
  'Close shot attribute changer',
  'Driving layup attribute changer',
  'Driving dunk attribute changer',
  'Standing dunk attribute changer',
  'Post control attribute changer',
  'Mid range shot attribute changer',
  'Three point shot attribute changer',
  'Free throw attribute changer',
  'Pass accuracy attribute changer',
  'Ball handle attribute changer',
  'Speed with ball attribute changer',
  'Interior defense attribute changer',
  'Perimeter defense attribute changer',
  'Steal attribute changer',
  'Block attribute changer',
  'Offensive rebound attribute changer',
  'Defensive rebound attribute changer',
  'Speed attribute changer',
  'Agility attribute changer',
  'Strength attribute changer',
  'Vertical attribute changer',
  'Create configuration',
  'Load configuration',
  'Save configuration',
  'Delete configuration',
  'Stream proof overlay',
  'Cloud DMA support',
];

const nbaSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A PC that meets NBA 2K26 published hardware requirements.' },
];

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on nbacheats.org before checkout—especially after an NBA 2K26 update.',
  },
  {
    num: '02',
    title: 'Complete secure checkout',
    desc: 'Use Buy now to reach checkout, then confirm your order email and Windows version.',
  },
  {
    num: '03',
    title: 'Download from the portal',
    desc: 'Open the operator portal, pull the latest loader, and import a conservative preset.',
  },
  {
    num: '04',
    title: 'Verify in a practice match',
    desc: 'Test Auto Green timing, attribute caps, and unlock-all visibility before going online.',
  },
];

const nbaProduct: ProductPage = {
  slug: PRODUCT_SLUG,
  kind: 'tier',
  badge: 'Available',
  tier: 'Premium',
  name: 'NBA 2K26',
  title: 'NBA 2K26 Cheats',
  subtitle: 'Auto Green timing, unlock-all cosmetics, attribute changer, and Cloud DMA support for PC.',
  desc: 'NBA 2K26 PC cheats: Auto Green, unlock-all gear, badges, attribute editor, configs, and Cloud DMA support.',
  features: [
    'Auto Green timing',
    'Unlock all clothes & animations',
    'Max badges & equipment',
    'Full attribute changer',
    'Save, load, and delete configs',
    'Cloud DMA support',
  ],
  more: fullFeatureList.length - 6,
  variant: 'popular',
  buyUrl: checkoutPath('nba2k26'),
  images: slideDefs,
  overview: {
    title: 'Built around MyPLAYER timing and customization',
    paragraphs: [
      'This build groups Auto Green, unlock-all modules, and attribute editing in one loader. Timing sliders, cosmetic unlocks, and stat caps stay in dedicated tabs so you can tune online sessions without hunting through scattered toggles.',
      'Cloud DMA support is available for setups that meet the hardware requirements listed in our guides. Check the status banner on nbacheats.org before every session and after NBA 2K26 patches.',
    ],
  },
  acquisition: {
    title: 'How to get NBA 2K26 Cheats',
    steps: defaultAcquisitionSteps,
  },
  goodToKnow:
    'NBA 2K26 receives frequent updates. Confirm module availability on the live status panel before you purchase or launch. Overlay behavior may differ in menus, City, and MyTEAM after patches.',
  limitations:
    'Third-party software in online sports games can violate publisher terms and lead to account action. You use this software at your own risk. Compatibility and availability can change after game, anti-cheat, or Windows updates without notice.',
  fullFeatures: fullFeatureList,
  systemRequirements: nbaSystemRequirements,
  about: [
    { type: 'h2', text: 'Auto Green and shot timing' },
    {
      type: 'p',
      text: 'Timing assistance focuses on consistent release windows for jumpers and layups. Start with conservative timing offsets, test in a private court, then adjust after you confirm stable frame rates.',
    },
    { type: 'h2', text: 'Unlock-all that others can see' },
    {
      type: 'p',
      text: 'Clothes, animations, equipment, and badge layers are grouped so you can preview fits before queuing online. Visibility settings match what the product page describes—toggle modules individually when you only need one category.',
    },
  ],
  body: [
    { type: 'h2', text: 'Configuration workflow' },
    {
      type: 'p',
      text: 'Save ranked and casual profiles separately, delete stale presets when patches land, and reload configs after major NBA 2K26 updates.',
    },
  ],
  relatedBlogSlugs: productRelatedBlogSlugs['nba-2k26'] ?? [],
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => ({
    ...nbaProduct,
    badge: cheat.badge,
    tier: cheat.tier,
    name: cheat.name,
    title: cheat.title,
    subtitle: cheat.desc,
    desc: cheat.desc,
    features: cheat.features,
    more: cheat.more,
    variant: cheat.variant,
    buyUrl: checkoutPath('nba2k26'),
    slug: PRODUCT_SLUG,
  }));
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== PRODUCT_BASE)
    .map((product) => {
      const slug = product.href.replace(PRODUCT_BASE, '').replace(/\/$/, '');
      return {
        ...nbaProduct,
        slug,
        kind: 'utility' as const,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutPath('nba2k26'),
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug) ?? (slug === PRODUCT_SLUG ? nbaProduct : undefined);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug) ?? getProductPage(slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides: ProductSlide[] = [
  {
    src: `${gameplay}/hero-poster.webp`,
    alt: 'NBA 2K26 MyPLAYER court with cheat overlay preview',
    caption: 'NBA 2K26',
    captionDesc: 'Auto Green, unlock-all, and attribute tools for PC.',
  },
  slideDefs[0],
  slideDefs[1],
  slideDefs[2],
  slideDefs[3],
  slideDefs[4],
  slideDefs[5],
];

export const productHub = {
  path: PRODUCT_BASE,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'NBA 2K26 cheats for PC: Auto Green timing, unlock-all cosmetics, attribute editor, config profiles, and Cloud DMA support.',
  buyUrl: PRIMARY_CHECKOUT_PATH,
};
