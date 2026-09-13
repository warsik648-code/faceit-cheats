import type { PageSeo } from './seo';

export type GameId = 'cs2' | 'valorant' | 'overwatch-2' | 'rainbow-six-siege';

export interface Game {
  id: GameId;
  name: string;
  shortName: string;
  path: `/${string}/`;
  platformNote: string;
  summary: string;
  hubDescription: string;
  hubCta: string;
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
    hubDescription:
      'The primary FACEIT title on this hub. The dedicated CS2 page holds the product breakdown, FAQs, and access path.',
    hubCta: 'Explore CS2',
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
    hubDescription:
      'A separate tactical-shooter route for FACEIT play, with its own status row and a landing page that will grow in a later phase.',
    hubCta: 'View Valorant',
    featured: false,
    icon: '/icons/valorant.svg',
    seo: {
      path: '/valorant/',
      title: 'Valorant FACEIT Cheat | Aimbot, ESP & Private Access',
      description:
        'A Valorant FACEIT cheat for FACEIT lobbies and regular Riot Games Valorant: aimbot, ESP, radar, and private access. Confirm the configured undetected label on the status page, then continue from this URL.',
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
    hubDescription:
      'Role-queue coverage kept apart from CS2, with an independent route and its own configured availability label.',
    hubCta: 'View Overwatch 2',
    featured: false,
    icon: '/icons/overwatch-2.svg',
    seo: {
      path: '/overwatch-2/',
      title: 'Overwatch 2 FACEIT Cheat | Aimbot, ESP & Private Access',
      description:
        'An Overwatch 2 FACEIT cheat for FACEIT team fights and regular role-queue: aimbot, hero ESP, and private access. Confirm the configured undetected and running label on the status page, then continue from this URL.',
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
    hubDescription:
      'Operator-title coverage with its own URL so Siege never shares a CS2 product page or status row.',
    hubCta: 'View Rainbow Six Siege',
    featured: false,
    icon: '/icons/rainbow-six-siege.svg',
    seo: {
      path: '/rainbow-six-siege/',
      title: 'Rainbow Six Siege FACEIT Cheat | Aimbot, ESP & Private Access',
      description:
        'A Rainbow Six Siege FACEIT cheat for FACEIT and regular Siege: aimbot, operator ESP, and private access. Confirm the configured undetected and running label on the status page, then continue from this URL.',
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
