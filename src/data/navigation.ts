import { games } from './games';

export interface NavItem {
  label: string;
  path: `/${string}` | `/${string}/`;
}

export const primaryNav: NavItem[] = [
  { label: 'Home', path: '/' },
  ...games.map((game) => ({
    label: game.shortName === 'Siege' ? 'Rainbow Six Siege' : game.shortName,
    path: game.path,
  })),
  { label: 'Status', path: '/status/' },
  { label: 'FAQ', path: '/faq/' },
  { label: 'Blog', path: '/blog/' },
];

export const footerNav = {
  games: games.map((game) => ({ label: game.name, path: game.path })),
  site: [
    { label: 'Home', path: '/' },
    { label: 'Status', path: '/status/' },
    { label: 'FAQ', path: '/faq/' },
    { label: 'Blog', path: '/blog/' },
    { label: 'Reviews', path: '/reviews/' },
  ] satisfies NavItem[],
} as const;
