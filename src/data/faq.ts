import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES, blogPostPath } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const product = link('NBA 2K26 Cheats', productPath('nba-2k26'));
const productsHub = link('NBA 2K26 products', ROUTES.products);
const cloudDmaGuide = link('Cloud DMA requirements guide', blogPostPath('nba-2k26-cloud-dma-requirements'));
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if NBA 2K26 cheats are online?',
    a: a('The live status banner is on nbacheats.org and in the Discord #status channel. Check after every NBA 2K26 patch.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide, and config library. Follow the guide before launching NBA 2K26 multiplayer.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using NBA 2K26 cheats?',
    a: a('Yes—third-party tools carry risk. Anti-cheat and report systems change over time. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('NBA 2K26 on Windows 10/11 64-bit through the Steam & 2K Launcher. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Use the HWID reset in your portal or open a Discord support ticket with your order email.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where is the product page?',
    a: `${productsHub} lists ${product} with the full feature checklist and secure checkout.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Auto Green in NBA 2K26?',
    a: a('Auto Green is shot-meter timing assistance for jumpers and layups. Start with conservative offsets in a practice court before online games.'),
    scopes: ['nba-2k26'],
  },
  {
    id: 'attributes-safe',
    topic: 'scripts',
    icon: 'faqEspVsScripts',
    q: 'How should I tune attributes on day one?',
    a: a('Raise one shooting stat at a time, test in a practice court, then save a preset before park or rec games.'),
    scopes: ['nba-2k26'],
  },
  {
    id: 'cloud-dma',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Do I need Cloud DMA?',
    a: `Cloud DMA is optional inside the NBA 2K26 loader. Read the ${cloudDmaGuide} before enabling it on your PC.`,
  },
  {
    id: 'bot-esp',
    topic: 'esp',
    icon: 'comparePlayerEsp',
    q: 'Do unlock-all modules work separately?',
    a: a('Yes. You can enable clothes, animations, equipment, or badges individually. Preview in the City before queuing online.'),
    scopes: ['nba-2k26'],
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `See the ${faqPage} for all answers—or read ${blog} for setup walkthroughs.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter Auto Green, unlock-all, setup, products, and blog answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'products', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined = kind === 'tier' ? [...scoped, ...general] : [...general];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Setup: [
    {
      id: 'blog-setup-patch',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I play right after an NBA 2K26 patch?',
      a: a('No—check the status banner, update the loader, import your config, and test Auto Green in a practice court first.'),
    },
  ],
  Features: [
    {
      id: 'blog-features-esp',
      topic: 'blog',
      icon: 'faqWhatIsEsp',
      q: 'Which unlock modules should I enable first?',
      a: a('Start with one category—clothes or animations—preview in the City, then enable equipment or badges if you need them.'),
    },
  ],
};

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const defaultBlogFaqs = siteFaqs.filter((f) => f.topic === 'blog');
  return [...topicFaqs, ...defaultBlogFaqs].slice(0, 6);
}

