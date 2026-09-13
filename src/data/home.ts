import type { Feature } from './features';

export const homeHero = {
  eyebrow: 'Private competitive access',
  title: 'Premium FACEIT Cheats',
  description:
    'FACEIT cheats on faceitcheats.net are private tools for FACEIT — a competitive gaming platform, not a standalone game. You play Counter-Strike 2, Valorant, Overwatch 2, or Rainbow Six Siege inside that ecosystem. This hub explains the provider, then sends you to the game page that matches your title. Counter-Strike 2 is the primary offering; the other FACEIT games each have their own section. Status stays centralized so you can confirm an undetected, up-to-date label before you open a product page.',
} as const;

export const providerPoints: Feature[] = [
  {
    id: 'per-game',
    title: 'A page for each FACEIT game',
    description:
      'A FACEIT cheat provider should not dump every title into one article. CS2, Valorant, Overwatch 2, and Siege each keep an independent route so feature lists never blur together.',
  },
  {
    id: 'private',
    title: 'Private, premium access',
    description:
      'This lineup is sold as a FACEIT private cheat and a premium FACEIT cheat — closed distribution, not a public free drop — with access completed from the game page, not from this hub.',
  },
  {
    id: 'status',
    title: 'One status board for every title',
    description:
      'Last detection tests, bans, ban waves, and safety percentages live on the status route so the homepage can stay a directory instead of a second update log.',
  },
  {
    id: 'safety',
    title: 'Safe, undetected, kept current',
    description:
      'The site is positioned as the safest FACEIT cheat provider and the #1 private option: a FACEIT undetected cheat standard that is guaranteed undetected, treated as impossible to detect in ordinary play, 100% safe, zero bans, and a low ban ratio that is kept up to date.',
  },
  {
    id: 'support',
    title: 'Direct support, dedicated access',
    description:
      'Support and checkout are centralized configuration — not a different URL pasted into every paragraph. Open the relevant game page when you are ready to get help or continue.',
  },
  {
    id: 'responsive',
    title: 'Clear resources on every screen',
    description:
      'The hub, game cards, and status board are built as static HTML with a responsive interface so you can move from FACEIT games to a dedicated route without a heavy client app.',
  },
];

export const hubFeatures: Feature[] = [
  {
    id: 'aim',
    title: 'Aim features',
    description:
      'Aim assistance is described per game. Do not assume every title ships the same module — open the game page for the exact set.',
  },
  {
    id: 'esp',
    title: 'ESP and visual information',
    description:
      'Visual overlays are a common FACEIT cheat category. Availability and naming are listed on each game route, not copied here.',
  },
  {
    id: 'radar',
    title: 'Radar',
    description:
      'Radar-style information appears where a title actually includes it. CS2 documents that module on its own feature block.',
  },
  {
    id: 'config',
    title: 'Configuration',
    description:
      'Hotkeys, visuals, and strength are meant to be configurable per product. This hub only explains that the controls live on the game pages.',
  },
  {
    id: 'game-specific',
    title: 'Game-specific options',
    description:
      'Siege, Valorant, Overwatch 2, and CS2 do not share one feature dump. If a tool is unique to a title, it will be written on that URL.',
  },
  {
    id: 'access',
    title: 'Support and access',
    description:
      'Access and support actions are reserved for dedicated game pages and the centralized destination. This homepage only routes you there.',
  },
];

