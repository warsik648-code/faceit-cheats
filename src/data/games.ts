import type { PageSeo } from './seo';

export type GameId = 'cs2' | 'valorant' | 'overwatch-2' | 'rainbow-six-siege';

export interface Game {
  id: GameId;
  name: string;
  shortName: string;
  path: `/${string}/`;
  platformNote: string;
  summary: string;
  featured: boolean;
  icon: string;
  seo: PageSeo;
}

export const games: Game[] = [
  {
    id: 'cs2',
    name: 'Counter-Strike 2',
    shortName: 'CS2',
    path: '/cs2/',
    platformNote: 'Primary title covered for FACEIT play',
    summary:
      'CS2 is the lead game on this site. Open the CS2 product page for FACEIT matchmaking tools, then confirm availability on the status board.',
    featured: true,
    icon: '/icons/cs2.svg',
    seo: {
      path: '/cs2/',
      title: 'CS2 FACEIT Cheat — Premium Counter-Strike 2 Tools',
      description:
        'A premium CS2 FACEIT cheat for FACEIT matchmaking, with aimbot, ESP, radar, and triggerbot. Private access is listed here; confirm the configured label on the status page before checkout.',
    },
  },
  {
    id: 'valorant',
    name: 'Valorant',
    shortName: 'Valorant',
    path: '/valorant/',
    platformNote: 'Tactical shooter coverage for FACEIT play',
    summary:
      'Valorant is organized as its own game landing page — separate from CS2 — with its own status and product notes.',
    featured: false,
    icon: '/icons/valorant.svg',
    seo: {
      path: '/valorant/',
      title: 'Valorant FACEIT Cheats — Agent Title Coverage',
      description:
        'Valorant coverage on FACEIT Cheats, with a dedicated landing page for status, detection notes, and product information distinct from CS2.',
    },
  },
  {
    id: 'overwatch-2',
    name: 'Overwatch 2',
    shortName: 'Overwatch 2',
    path: '/overwatch-2/',
    platformNote: 'Role-queue title coverage for FACEIT play',
    summary:
      'Overwatch 2 has its own route, status row, and upcoming product detail. It is not grouped under CS2.',
    featured: false,
    icon: '/icons/overwatch-2.svg',
    seo: {
      path: '/overwatch-2/',
      title: 'Overwatch 2 FACEIT Cheats — Role-Queue Coverage',
      description:
        'Overwatch 2 information on FACEIT Cheats: a dedicated route for availability, detection notes, and product coverage for this title.',
    },
  },
  {
    id: 'rainbow-six-siege',
    name: 'Rainbow Six Siege',
    shortName: 'Siege',
    path: '/rainbow-six-siege/',
    platformNote: 'Operator title coverage for FACEIT play',
    summary:
      'Rainbow Six Siege is tracked independently, with its own availability and detection labels on the status board.',
    featured: false,
    icon: '/icons/rainbow-six-siege.svg',
    seo: {
      path: '/rainbow-six-siege/',
      title: 'Rainbow Six Siege FACEIT Cheats — Operator Coverage',
      description:
        'Rainbow Six Siege coverage on FACEIT Cheats, including a dedicated landing page for Siege status, detection notes, and product information.',
    },
  },
];

export const featuredGame = games.find((game) => game.featured) ?? games[0];

export function getGameById(id: GameId): Game {
  const game = games.find((entry) => entry.id === id);

  if (!game) {
    throw new Error(`Unknown game id: ${id}`);
  }

  return game;
}

export function getGameByPath(path: string): Game | undefined {
  return games.find((game) => game.path === path);
}
