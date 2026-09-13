import type { FaqItem } from './faq';
import type { Feature } from './features';

export const valorantHero = {
  eyebrow: 'Valorant',
  title: 'Valorant FACEIT Cheat',
  description:
    'This Valorant FACEIT cheat is the Valorant product page for FACEIT lobbies and for regular Riot Games Valorant. Valorant stays the game; FACEIT is only an optional competitive layer. Agent rounds, ability fights, and precision rifles are documented here — not on the CS2 route.',
} as const;

export const valorantSteps = [
  {
    id: 'configure',
    title: 'Choose configuration',
    text: 'Pick a profile for the agents and queue you actually play — FACEIT or standard Riot ranked — before you touch combat modules.',
  },
  {
    id: 'status',
    title: 'Review status',
    text: 'Read the configured Valorant label on the status board. This page does not replace that route with a second detection article.',
  },
  {
    id: 'access',
    title: 'Get access',
    text: 'Continue from the centralized access action on this product URL. The homepage never starts checkout.',
  },
  {
    id: 'support',
    title: 'Use support and resources',
    text: 'Product questions stay on this page; platform questions go to the site FAQ. Support uses the same configured destination as other game pages.',
  },
] as const;

export const valorantFeatures: Feature[] = [
  {
    id: 'aimbot',
    title: 'Aimbot for agent duels',
    description:
      'Valorant FACEIT aimbot is tuned for first-bullet rifles and Operator picks, not spray-heavy CS2 transfers. Silent aim is a quieter camera mode for the same module when you want less visible snap during ability trades.',
  },
  {
    id: 'esp',
    title: 'ESP, wallhack, and glow',
    description:
      'Valorant FACEIT ESP and a Valorant FACEIT wallhack view mark agents, the spike, and throwable utility through smokes and walls. Glow ESP keeps silhouettes readable when a full box overlay is too loud for a VOD or a live tab.',
  },
  {
    id: 'triggerbot',
    title: 'Triggerbot',
    description:
      'Valorant FACEIT triggerbot is for tight Jett/Chamber angles and post-plant holds. It fires when a valid hitbox crosses the crosshair so you are not forced to run aim assist on every round.',
  },
  {
    id: 'radar',
    title: 'Radar',
    description:
      'Valorant FACEIT radar tracks rotates when smokes and walls hide mid. It is a map-level read for ability-heavy executes, not a copy of the CS2 overlay.',
  },
  {
    id: 'recoil',
    title: 'No-recoil rifles',
    description:
      'No-recoil control flattens Vandal and Phantom sprays for the rifles you buy in Valorant. It sits beside aimbot rather than replacing it.',
  },
  {
    id: 'skins',
    title: 'Skin changer',
    description:
      'A client-side skin changer for the weapons you already own visually. It does not move Riot inventory and is optional next to the combat tools.',
  },
  {
    id: 'profiles',
    title: 'Configuration profiles',
    description:
      'Save separate strengths for FACEIT nights versus ordinary Riot ranked. Agent-heavy setups (entry, sentinel, lurk) stay on this Valorant listing instead of borrowing CS2 sliders.',
  },
];

export const valorantShots = [
  {
    src: '/images/valorant/valorant-preview-01.webp',
    alt: 'Valorant preview: ESP and agent outlines in a competitive round',
    caption: 'Agent ESP / glow layout',
  },
  {
    src: '/images/valorant/valorant-preview-02.webp',
    alt: 'Valorant preview: aim and trigger settings for rifle rounds',
    caption: 'Aim and trigger profiles',
  },
  {
    src: '/images/valorant/valorant-preview-03.webp',
    alt: 'Valorant preview: radar and utility information overlay',
    caption: 'Radar and utility read',
  },
] as const;

export const valorantFaqs: FaqItem[] = [
  {
    id: 'what-valorant-faceit-means',
    question: 'What does Valorant FACEIT mean?',
    answer:
      'Valorant FACEIT means Riot’s Valorant played in FACEIT’s competitive ecosystem. The game files are still Valorant. This page is the Valorant FACEIT cheat listing for that queue and for standard Riot matchmaking.',
  },
  {
    id: 'separate-game',
    question: 'Is FACEIT Valorant a separate game?',
    answer:
      'No. FACEIT does not ship a second Valorant client. You launch Valorant from Riot; FACEIT is a community and ranking layer around those matches.',
  },
  {
    id: 'what-features',
    question: 'What features are available?',
    answer:
      'This Valorant FACEIT hack listing covers aimbot, ESP, wallhack-style information, triggerbot, radar, no-recoil, glow, silent aim, a skin changer, and configuration profiles. Exact toggles are the cards on this page, not the CS2 feature block.',
  },
  {
    id: 'where-status',
    question: 'Where can I check the current status?',
    answer:
      'Configured undetected / availability labels for Valorant live on the status page. This route only repeats the snapshot so you can keep shopping. Ban-wave write-ups do not belong here.',
  },
  {
    id: 'covers-cs2',
    question: 'Does the site cover CS2 as well?',
    answer:
      'Yes. Counter-Strike 2 has its own commercial page. This URL stays on Valorant so the two games do not share product copy.',
  },
  {
    id: 'where-access',
    question: 'Where does access and purchasing take place?',
    answer:
      'From this Valorant page’s access buttons, which read the site’s centralized destination. The homepage only routes you here.',
  },
  {
    id: 'where-support',
    question: 'Where can I get support?',
    answer:
      'Use the support action on this product page, or the site-wide FAQ for platform questions that are not Valorant-specific.',
  },
  {
    id: 'features-differ',
    question: 'Are features different between games?',
    answer:
      'Yes. Valorant FACEIT cheats are written around agents, abilities, and rifle first-bullets. CS2, Overwatch 2, and Siege keep independent lists on their own routes.',
  },
];
