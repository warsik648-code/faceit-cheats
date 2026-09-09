import type { FaqItem } from './faq';
import type { Feature } from './features';
import { SITE } from './site';

export const cs2Hero = {
  eyebrow: 'Counter-Strike 2 on FACEIT',
  title: 'CS2 FACEIT Cheat',
  description:
    'This CS2 FACEIT cheat is the Counter-Strike 2 product page for FACEIT matchmaking. FACEIT is the competitive platform; CS2 is the game. Use this route for the commercial feature set, then confirm the configured label on the status board before checkout.',
} as const;

export const cs2Features: Feature[] = [
  {
    id: 'aimbot',
    title: 'Aimbot, with silent aim',
    description:
      'The CS2 FACEIT aimbot is built for FACEIT CS2 rounds: configurable targeting, smoothing, and a silent-aim mode that keeps the camera quieter while shots still track. It ships in the product — there is no separate user setup for platform protections.',
  },
  {
    id: 'esp',
    title: 'ESP, wallhack, and glow',
    description:
      'CS2 FACEIT ESP reads player, weapon, and utility context through walls. The same module covers a classic CS2 FACEIT wallhack view and a softer CS2 FACEIT glow ESP outline when you want less visual noise.',
  },
  {
    id: 'radar',
    title: 'Radar',
    description:
      'CS2 FACEIT radar keeps rotations and lurks on a compact map overlay so you are not relying on ESP alone. It is meant for FACEIT’s CS2 timer, not for Premier or other queues described on this page.',
  },
  {
    id: 'triggerbot',
    title: 'Triggerbot',
    description:
      'CS2 FACEIT triggerbot fires when a valid target crosses your crosshair. Pair it with the aim module or run it alone when you only want a hold-angle assist.',
  },
  {
    id: 'recoil',
    title: 'No-recoil control',
    description:
      'CS2 FACEIT no recoil flattens spray patterns on the rifles you actually buy in FACEIT CS2. It is a complement to aim assist, not a replacement for the rest of the build.',
  },
  {
    id: 'skins',
    title: 'Skin changer',
    description:
      'CS2 FACEIT skin changer is a client-side inventory view. It does not move items on the official economy; it is a visual extra beside the combat tools.',
  },
];

export const cs2Faqs: FaqItem[] = [
  {
    id: 'what-is-cs2-faceit-cheat',
    question: 'What is a CS2 FACEIT cheat?',
    answer:
      'A CS2 FACEIT cheat is a Counter-Strike 2 product aimed at FACEIT’s matchmaking, not at FACEIT as if it were its own game. This page is the commercial listing for that CS2 build: aim, ESP, radar, triggerbot, and the extras below.',
  },
  {
    id: 'is-faceit-a-separate-cs2',
    question: 'Is FACEIT a separate version of CS2?',
    answer:
      'No. You still play Counter-Strike 2. FACEIT is a third-party competitive platform with its own client, anti-cheat, and ranking. FACEIT CS2 means CS2 matches hosted on that platform.',
  },
  {
    id: 'what-does-faceit-cs2-mean',
    question: 'What does FACEIT CS2 mean?',
    answer:
      'FACEIT CS2 is shorthand for Counter-Strike 2 queues on FACEIT. FACEIT CS2 cheats are tools written for that environment. Premier, Faceit-unrelated pugs, and other games are covered on their own routes.',
  },
  {
    id: 'where-to-check-status',
    question: 'Where can CS2 FACEIT status be checked?',
    answer:
      'Detection labels, availability, and update notes live on the status page. This CS2 route only repeats the configured snapshot so you can move on to features and checkout. Do not treat a generated clock on this page as a lab result.',
  },
  {
    id: 'other-games',
    question: 'Does faceitcheats.net cover other FACEIT games?',
    answer:
      'Yes. Valorant, Overwatch 2, and Rainbow Six Siege each have their own landing pages. The homepage explains the site as a FACEIT-oriented provider; this URL stays on CS2.',
  },
  {
    id: 'where-to-buy',
    question: 'Where does purchasing take place?',
    answer: `Checkout is not on this domain. Commercial buttons open the centralized transaction destination (${new URL(SITE.external.transactionUrl).host}) as a normal link, with nofollow.`,
  },
  {
    id: 'where-is-support',
    question: 'Where can support be found?',
    answer:
      'Use the site support address from the centralized configuration, or start with the broader FAQ if the question is about the platform rather than this CS2 product.',
  },
];
