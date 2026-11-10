import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_INVITE_URL, PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'NBA Cheats',
    domain: 'nbacheats.org',
    title: 'NBA 2K26 Cheats — Auto Green & Unlock All | NBA Cheats',
    description:
      'NBA 2K26 cheats for PC: Auto Green, unlock-all gear, attributes, configs, and optional Cloud DMA. Guides and checkout at nbacheats.org.',
    discord: DISCORD_INVITE_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'NBA 2K26 — build online',
    eyebrow: 'Premium PC software',
    titleLine1: 'NBA 2K26',
    titleLine2: 'Cheats for PC',
    subtitle:
      'NBA 2K26 cheats with Auto Green timing, unlock-all cosmetics, max badges, attribute editing, and Cloud DMA support—tuned for MyPLAYER and online modes at nbacheats.org.',
    ctaPrimary: 'View product',
    ctaDiscord: 'Buy now',
    modesLabel: 'Game modes',
    modes: ['MyCAREER', 'MyTEAM', 'Park', 'Rec'],
    metrics: [
      { label: 'Auto Green', strong: 'Timing' },
      { label: 'Unlock all', strong: 'Visible' },
      { label: 'Attributes', strong: 'Full edit' },
      { label: 'Configs', strong: 'Save & load' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'NBA 2K26 cheats in one loader',
    subtitle: 'Auto Green, unlock-all, attributes, and configs grouped the way you tune MyPLAYER builds.',
    items: [
      {
        title: 'Auto Green',
        subtitle: 'Timing that stays consistent.',
        desc: 'Shot-meter timing assistance for jumpers and layups—start conservative, then refine in a practice court.',
        bullets: [
          'Auto Green timing toggle',
          'Works with online MyPLAYER modes',
          'Pairs with stream-proof overlay',
          'Tune before park and rec games',
          'Saved inside named configs',
        ],
        tags: ['NBA 2K26 Auto Green', 'green release', 'shot timing'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Unlock all',
        subtitle: 'Visible to everyone.',
        desc: 'Clothes, animations, equipment, and max badges unlock together or one category at a time.',
        bullets: [
          'Unlock all clothes (visible to everyone)',
          'Unlock all animations (visible to everyone)',
          'Unlock all equipment (visible to everyone)',
          'Unlock max badges (visible to everyone)',
        ],
        tags: ['NBA 2K26 unlock all', 'clothing unlocker', 'badge unlocker'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Attribute changer',
        subtitle: 'Build the stats you want.',
        desc: 'Edit shooting, finishing, playmaking, defense, and athleticism sliders from one panel.',
        bullets: [
          'Close shot through three point shot',
          'Ball handle, speed with ball, pass accuracy',
          'Interior and perimeter defense, steal, block',
          'Speed, agility, strength, vertical',
        ],
        tags: ['NBA 2K26 attribute changer', 'player stats editor'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Configs',
        subtitle: 'Profiles that travel.',
        desc: 'Create, load, save, and delete presets without rebuilding every slider after a patch.',
        bullets: ['Create configuration', 'Load configuration', 'Save configuration', 'Delete configuration'],
        tags: ['NBA 2K26 config', 'save load config'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Stream proof',
        subtitle: 'Creators stay safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['Toggle stream proof overlay', 'Test before going live', 'Pairs with Auto Green tuning'],
        tags: ['stream proof overlay', 'OBS safe'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Cloud DMA',
        subtitle: 'Hardware path when supported.',
        desc: 'Cloud DMA support for qualified setups—see the requirements guide before enabling.',
        bullets: ['DMA-compatible workflow', 'Documented setup checklist', 'Optional alongside standard loader'],
        tags: ['NBA 2K26 Cloud DMA', 'DMA cheat software'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Menu & performance',
        subtitle: 'Stay in control.',
        desc: 'External loader with grouped tabs, hotkeys, and performance options for long sessions.',
        bullets: ['Organized module tabs', 'Unload binds for quick restarts', 'Stable defaults after patches'],
        tags: ['NBA 2K26 cheat menu', 'external loader'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'MyPLAYER tooling backed by patches—not promises',
    subtitle:
      'Most cheat shops ship stale loaders and copy-paste support. We built nbacheats.org around patch-day delivery, conservative Auto Green defaults, and live Discord operators.',
    usLabel: 'NBA Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'anti-cheat-aware builds pushed within hours of NBA 2K26 updates—check Discord #status before you queue ranked.',
      },
      {
        title: 'Conservative Auto Green defaults',
        desc: 'Timing offsets start mild so you can refine in practice courts—not extreme releases that stand out in park games.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, attribute presets, and config help—24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader',
        desc: 'Organized overlay menu with grouped Auto Green, unlock-all, and attribute tabs—tune without digging through scattered toggles.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'MyCAREER and MyTEAM profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major NBA 2K26 or anti-cheat changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'PC players running Auto Green, unlock-all, and configs on nbacheats.org.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first match in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and queue NBA 2K26 on Steam & 2K Launcher PC—with live Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import a conservative preset, and tune Auto Green timing plus attribute caps.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & queue NBA 2K26',
        desc: 'Check the live status banner, launch Steam & 2K Launcher NBA 2K26, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching NBA 2K26 after updates.',
    items: ['Windows 10 & 11', 'Steam & 2K Launcher', 'NBA 2K26 client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Product',
    title: 'NBA 2K26 cheats for PC',
    subtitle: 'One premium build with Auto Green, unlock-all modules, attribute editor, and Cloud DMA support.',
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'Premium',
        name: 'NBA 2K26',
        title: 'NBA 2K26 Cheats',
        desc: 'Auto Green timing, unlock-all cosmetics, max badges, attribute changer, config profiles, and Cloud DMA support.',
        features: [
          'Auto Green timing',
          'Unlock all clothes & animations',
          'Max badges & equipment',
          'Full attribute changer',
          'Save, load, and delete configs',
          'Cloud DMA support',
        ],
        more: 24,
        href: `${productBase}nba-2k26/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'NBA 2K26 cheats',
    subtitle: 'Premium NBA 2K26 Auto Green and MyPLAYER tools for PC.',
    viewAll: 'View product',
    get: 'Get',
    explore: 'Explore',
    items: [],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Auto Green tuning, unlock-all workflows, attribute presets, Cloud DMA notes, and patch-day checks for NBA 2K26.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Setup',
        title: 'NBA 2K26 Auto Green timing for PC',
        slug: 'nba-2k26-auto-green-timing',
        image: '/images/gameplay/screenshot-1.webp',
        desc: 'Tune Auto Green timing before park and MyCAREER games—with conservative defaults.',
        date: 'Aug 18, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'NBA 2K26 unlock all clothes and animations',
        slug: 'nba-2k26-unlock-all-guide',
        image: '/images/gameplay/screenshot-3.webp',
        desc: 'How visible unlock-all works for clothes, animations, equipment, and badges.',
        date: 'Aug 17, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Features',
        title: 'NBA 2K26 attribute changer tips',
        slug: 'nba-2k26-attribute-changer-tips',
        image: '/images/gameplay/screenshot-2.webp',
        desc: 'Shooting, defense, and athletic sliders that stay balanced for online builds.',
        date: 'Aug 16, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'NBA 2K26 Cloud DMA requirements',
        slug: 'nba-2k26-cloud-dma-requirements',
        image: '/images/gameplay/screenshot-5.webp',
        desc: 'Hardware expectations and when Cloud DMA beats standard loader paths.',
        date: 'Aug 15, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Guides',
        title: 'NBA 2K26 config save, load, and delete workflows',
        slug: 'nba-2k26-config-system-tips',
        image: '/images/gameplay/screenshot-6.webp',
        desc: 'Name presets and reload configs after NBA 2K26 patches.',
        date: 'Aug 14, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Features',
        title: 'Stream proof overlay for NBA 2K26',
        slug: 'nba-2k26-stream-proof-overlay',
        image: '/images/gameplay/screenshot-4.webp',
        desc: 'Keep menus off capture software while you tune Auto Green on stream.',
        date: 'Aug 13, 2026',
        readTime: '4 min read',
      },
      {
        tag: 'Updates',
        title: 'NBA 2K26 patch day checklist for cheats',
        slug: 'nba-2k26-patch-day-checklist',
        image: '/images/gameplay/hero-poster.webp',
        desc: 'Status banner, loader refresh, and practice-court routine after updates.',
        date: 'Aug 12, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'How to buy NBA 2K26 cheats in 2026',
        slug: 'how-to-buy-nba-2k26-cheats',
        image: '/images/gameplay/screenshot-visuals.webp',
        desc: 'Checkout flow, portal access, and first-launch checklist.',
        date: 'Aug 11, 2026',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Auto Green', title: 'Shot timing', desc: 'Release assistance tuned for jumpers and layups.' },
      { num: '02', label: 'Unlock all', title: 'Cosmetics', desc: 'Clothes, animations, equipment, and badges others can see.' },
      { num: '03', label: 'Attributes', title: 'Stat editor', desc: 'Shooting, defense, playmaking, and athletic sliders.' },
      { num: '04', label: 'Configs', title: 'Save and load', desc: 'Create, load, save, and delete named presets.' },
      { num: '05', label: 'Overlay', title: 'Stream proof', desc: 'Hide menus from capture software when enabled.' },
      { num: '06', label: 'DMA', title: 'Optional hardware path', desc: 'Cloud DMA workflow when your rig meets requirements.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a NBA 2K26 profile you can reuse every session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check anti-cheat status',
        desc: 'Read the live banner on nbacheats.org before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Complete checkout',
        desc: 'Use Buy now to reach secure checkout, then confirm your portal email.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune delays in a practice lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save MyCAREER and MyTEAM presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how NBA 2K26 plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Status updates hit Discord and the portal—check before you queue MyCAREER.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with wide smoothness, small FOV, and capped ESP distance—then tune up gradually.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or ESP tuning? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'NBA Cheats support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID and account issues.",
        linkLabel: 'support@nbacheats.org',
        href: 'mailto:support@nbacheats.org',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Join Discord',
        desc: 'Discord engineers on shift 24/7.',
        linkLabel: 'Join Discord',
        href: DISCORD_INVITE_URL,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on nbacheats.org or via our secure checkout.' },
      { title: 'Platform', desc: 'Steam & 2K Launcher on Windows 10 or 11—and your NBA 2K26 client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or Steam & 2K Launcher.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if NBA 2K26 cheats are online?',
        a: 'The live status banner is on nbacheats.org and in the Discord #status channel. Always check after a NBA 2K26 or anti-cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching NBA 2K26.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party NBA 2K26 cheats?',
        a: 'Yes—any modification carries risk. anti-cheat and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'NBA 2K26 via Steam & 2K Launcher on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'NBA 2K26 cheats with full feature lists and secure checkout live at nbacheats.org/products/nba-2k26-cheats/.',
      },
    ],
  },
  footer: {
    tagline: 'NBA 2K26 cheats — Auto Green, unlock all, and MyPLAYER tools for PC. nbacheats.org',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/nba-2k26-cheats/nba-2k26/', label: 'NBA 2K26 cheats', ariaLabel: 'NBA 2K26 product' },
      { href: '/products/nba-2k26-cheats/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About NBA Cheats',
      description:
        'NBA Cheats provides NBA 2K26 cheat tiers, utility tools and PC support resources at nbacheats.org.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'NBA Cheats is a PC-focused resource for NBA 2K26 players exploring Auto Green, unlock-all, attribute editing, and Cloud DMA workflows. We publish setup guides and live status notes so you can evaluate NBA 2K26 cheats before checkout.',
            'Loader status, patch-day banners, and Discord #status updates are part of how we communicate online/offline states—we summarize those signals on the homepage and in blog patch checklists.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers the premium NBA 2K26 cheat build with Auto Green, unlock-all modules, and attribute tools. Blog articles explain config tips, patch-day checks, and anti-cheat update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, Steam & 2K Launcher account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How NBA Cheats handles analytics, cookies, and contact data when you use nbacheats.org.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on nbacheats.org.',
            'Privacy-related requests about stored analytics or support tickets can be sent through the Support page; we respond using the email address you provide and delete ticket content when the issue is closed.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for NBA Cheats products and nbacheats.org.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using nbacheats.org or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to NBA 2K26 cheat software delivered through an operator portal and loader for Windows, with Auto Green, unlock-all, attribute, and configuration tools described on the product page.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when NBA 2K26 or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. nbacheats.org does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching NBA 2K26.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, anti-cheat penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Steam & 2K Launcher NBA 2K26 on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, NBA 2K26 build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for NBA 2K26 can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'NBA Cheats Support',
      description:
        'Get support for loader, HWID, and checkout questions at nbacheats.org.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'NBA Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join NBA Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
