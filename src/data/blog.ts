import type { GameId } from './games';

export const blogHero = {
  eyebrow: 'Guides & explanations',
  title: 'FACEIT Cheats Blog',
  description:
    'Deeper notes on FACEIT as a platform, how games differ, and how status is organized. These articles support the game pages, the FAQ, and the status hub — they are not a second storefront.',
} as const;

export interface BlogCategory {
  id: string;
  label: string;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  { id: 'faceit', label: 'FACEIT', description: 'Platform, queues, and terminology.' },
  { id: 'cs2', label: 'CS2', description: 'Counter-Strike 2 context for later guides.' },
  { id: 'valorant', label: 'Valorant', description: 'Valorant notes kept off the CS2 cluster.' },
  { id: 'overwatch-2', label: 'Overwatch 2', description: 'Role-queue context for later guides.' },
  { id: 'rainbow-six-siege', label: 'Rainbow Six Siege', description: 'Siege notes for later guides.' },
  { id: 'guides', label: 'Guides', description: 'How the site and ecosystem fit together.' },
  { id: 'status-updates', label: 'Status & Updates', description: 'How configured status is organized.' },
];

export interface BlogLearningPath {
  gameId: GameId;
  title: string;
  description: string;
}

export const blogLearningPaths: BlogLearningPath[] = [
  {
    gameId: 'cs2',
    title: 'CS2 reading path',
    description: 'Start with the CS2 product page, then return here for platform explainers.',
  },
  {
    gameId: 'valorant',
    title: 'Valorant reading path',
    description: 'Use the Valorant listing for modules; use the blog for FACEIT vs regular play.',
  },
  {
    gameId: 'overwatch-2',
    title: 'Overwatch 2 reading path',
    description: 'The OW2 route holds the commercial listing; status and FAQ stay separate.',
  },
  {
    gameId: 'rainbow-six-siege',
    title: 'Siege reading path',
    description: 'Siege has its own page. Blog posts only explain the platform around it.',
  },
];

export const relatedPageLabels: Record<string, string> = {
  '/': 'FACEIT provider overview',
  '/faq/': 'Site-wide FAQ',
  '/status/': 'FACEIT cheat status',
  '/cs2/': 'CS2 product page',
  '/valorant/': 'Valorant listing',
  '/overwatch-2/': 'Overwatch 2 route',
  '/rainbow-six-siege/': 'Rainbow Six Siege page',
  '/blog/': 'Blog index',
};

export function labelForInternalPath(path: string): string {
  return relatedPageLabels[path] ?? path;
}
