export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

export const forumPosts: ForumPost[] = [
  guideDiscussion({
    slug: 'nba-2k26-auto-green-early-late',
    title: 'Auto Green feels early in park—normal?',
    excerpt: 'Park latency can make timing feel different from practice courts.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Auto Green timing guide',
    sourcePath: '/blog/nba-2k26-auto-green-timing/',
    upvotes: 58,
    answer:
      'Load your practice-court preset, then adjust timing in small steps after one park game. Save a separate park preset once releases feel consistent.',
    detail: 'The Auto Green guide walks through conservative defaults before online modes.',
    tip: 'Check the status banner before each park night—patches can reset timing tables.',
  }),
  guideDiscussion({
    slug: 'nba-2k26-unlock-all-not-showing',
    title: 'Unlock all clothes not visible to squadmates?',
    excerpt: 'Visibility depends on which unlock modules are enabled together.',
    category: 'Features',
    categoryTone: 'green',
    sourceTitle: 'Unlock all guide',
    sourcePath: '/blog/nba-2k26-unlock-all-guide/',
    upvotes: 44,
    answer:
      'Enable clothes and equipment modules, re-enter the City, then have a friend confirm from their client. Disable unused categories to reduce conflicts.',
    detail: 'The unlock-all article explains visible-to-everyone behavior per module.',
    tip: 'Screenshot your toggle list when support asks for loader state.',
  }),
  guideDiscussion({
    slug: 'nba-2k26-attribute-cap-online',
    title: 'Attribute changer caps for online guards?',
    excerpt: 'Stacking every shooting badge slider can look unusual in rec.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'Attribute changer tips',
    sourcePath: '/blog/nba-2k26-attribute-changer-tips/',
    upvotes: 39,
    answer:
      'Raise three point and ball handle first, test dribble moves, then add speed with ball if handling still feels sluggish.',
    detail: 'The attribute guide lists defensive and athletic sliders worth tuning last.',
    tip: 'Save a rec preset separate from MyCAREER story builds.',
  }),
  guideDiscussion({
    slug: 'nba-2k26-cloud-dma-eligible',
    title: 'How do I know if my rig qualifies for Cloud DMA?',
    excerpt: 'DMA is optional—standard loader paths include Auto Green and unlock-all.',
    category: 'Setup',
    categoryTone: 'purple',
    sourceTitle: 'Cloud DMA requirements',
    sourcePath: '/blog/nba-2k26-cloud-dma-requirements/',
    upvotes: 51,
    answer: 'Walk through the hardware checklist in the Cloud DMA guide before enabling DMA mode.',
    detail: 'If any firmware or second-PC step fails, stay on the external loader until support confirms.',
    tip: 'Do not mix DMA experiments with fresh configs on the same day—pick one path.',
  }),
  guideDiscussion({
    slug: 'nba-2k26-config-after-patch',
    title: 'Should I delete configs after a big patch?',
    excerpt: 'Old timing presets sometimes reference outdated tables.',
    category: 'Patch Talk',
    categoryTone: 'orange',
    sourceTitle: 'Patch day checklist',
    sourcePath: '/blog/nba-2k26-patch-day-checklist/',
    upvotes: 62,
    answer: 'Keep backups offline, delete in-loader copies you no longer trust, and recreate presets after the status banner is green.',
    detail: 'The patch checklist covers loader refresh and practice-court tests.',
    tip: 'Name new presets with the patch date so you know which file is current.',
  }),
  guideDiscussion({
    slug: 'nba-2k26-stream-proof-obs',
    title: 'Stream proof still showing menu in OBS?',
    excerpt: 'Capture mode affects whether overlays leak into recordings.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'Stream proof overlay',
    sourcePath: '/blog/nba-2k26-stream-proof-overlay/',
    upvotes: 33,
    answer: 'Enable stream proof before launching OBS, use game capture, and run a ten-second test clip.',
    detail: 'The stream proof article covers Game Bar and OBS checks.',
    tip: 'Toggle stream proof off only when you are done streaming for the night.',
  }),
];

export function getForumPost(slug: string) {
  return forumPosts.find((p) => p.slug === slug);
}

export function categoryKey(name: string) {
  return name.toLowerCase().replaceAll(' ', '-');
}
