export interface PageSeo {
  path: `/${string}` | `/${string}/`;
  title: string;
  description: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const pageSeo = {
  home: {
    path: '/',
    title: 'FACEIT Cheats | Private Cheats for Competitive Games',
    description:
      'FACEIT cheats for competitive games on FACEIT — a platform, not a game. CS2 is the primary offering, with Valorant, Overwatch 2, and Siege on their own pages. Safe, undetected, and up to date: check status, then open your game.',
  },
  status: {
    path: '/status/',
    title: 'FACEIT Cheat Status | CS2, Valorant, OW2 & R6',
    description:
      'Check FACEIT cheat status for CS2, Valorant, Overwatch 2, and Rainbow Six Siege. Each game has its own configured, safe, undetected-oriented label — then open the dedicated product page.',
  },
  faq: {
    path: '/faq/',
    title: 'FACEIT Cheats FAQ | Games, Status, Access & Support',
    description:
      'FACEIT cheats FAQ: what FACEIT is, which games this site covers, where to check status, and how access and support are organized. Informational answers — not a storefront.',
  },
  blog: {
    path: '/blog/',
    title: 'FACEIT Cheats Blog | Guides, Games & Updates',
    description:
      'Guides and explainers about FACEIT, supported games, and how cheat status is organized. Informational articles that point to game pages, status, and the FAQ — not a checkout.',
  },
} as const satisfies Record<string, PageSeo>;
