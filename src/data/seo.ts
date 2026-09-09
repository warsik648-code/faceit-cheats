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
    title: 'Premium FACEIT Cheats for CS2, Valorant & More',
    description:
      'FACEIT is a competitive platform, not a game. FACEIT Cheats organizes CS2, Valorant, Overwatch 2, and Rainbow Six Siege products, detection notes, and availability in one place.',
  },
  status: {
    path: '/status/',
    title: 'Detection & Availability Status | FACEIT Cheats',
    description:
      'Configured per-game availability, undetected labels, and detection notes for CS2, Valorant, Overwatch 2, and Rainbow Six Siege. Placeholder user, test, and ban figures are marked.',
  },
  faq: {
    path: '/faq/',
    title: 'FAQ | FACEIT Cheats',
    description:
      'Answers about FACEIT as a platform, which games are covered, how status and detection labels work, and how commercial links are handled on FACEIT Cheats.',
  },
  blog: {
    path: '/blog/',
    title: 'Blog | FACEIT Cheats',
    description:
      'Editorial notes and later articles about FACEIT-oriented game coverage, detection updates, and product changes. No posts are published in this phase.',
  },
  reviews: {
    path: '/reviews/',
    title: 'Reviews | FACEIT Cheats',
    description:
      'A future home for user and editorial reviews of FACEIT-oriented game products. This index is a route shell until verified reviews are added.',
  },
} as const satisfies Record<string, PageSeo>;
