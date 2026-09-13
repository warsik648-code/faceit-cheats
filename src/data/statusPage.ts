import type { FaqItem } from './faq';
import type { GameId } from './games';

export const statusHero = {
  eyebrow: 'Site-wide operations',
  title: 'FACEIT Cheat Status',
  description:
    'FACEIT cheat status is organized per game so you can confirm the configured, safe label for CS2, Valorant, Overwatch 2, or Rainbow Six Siege, then continue to that title’s page. This hub owns FACEIT hack status and FACEIT product status — not checkout.',
} as const;

export const statusOverview = {
  title: 'Status is split by game, not bundled',
  titleId: 'status-overview',
  description:
    'Each offering has its own detection and availability row. Read the configured label here, then open the dedicated page for that title.',
  body: 'CS2, Valorant, Overwatch 2, and Rainbow Six Siege FACEIT cheat status are all configured undetected and running. Each title still has its own row. Use this board to stay current, then move to the product URL — the homepage directory and site-wide FAQ sit beside this hub, not inside it.',
} as const;

export const statusBoardIntro = {
  title: 'Current FACEIT product status',
  titleId: 'status-board',
  description:
    'One board for every supported FACEIT game. Labels come from the same status file used across the site — no invented figures, no second commercial pitch.',
} as const;

export interface StatusSection {
  gameId: GameId;
  heading: string;
  headingId: string;
  context: string;
  ctaLabel: string;
}

export const statusSections: StatusSection[] = [
  {
    gameId: 'cs2',
    heading: 'CS2 FACEIT Cheat Status',
    headingId: 'cs2-faceit-cheat-status',
    context:
      'CS2 is the primary title on this site. The configured CS2 FACEIT cheat status snapshot is undetected and running — a safe, current row you can trust before opening the CS2 product page for tools and access.',
    ctaLabel: 'Open the CS2 product page',
  },
  {
    gameId: 'valorant',
    heading: 'Valorant FACEIT Cheat Status',
    headingId: 'valorant-faceit-cheat-status',
    context:
      'Valorant FACEIT cheat status lives on this same board, not inside CS2. The configured label is undetected and available, so you can move to the Valorant listing for agent-round modules with that snapshot already confirmed.',
    ctaLabel: 'Open the Valorant listing',
  },
  {
    gameId: 'overwatch-2',
    heading: 'Overwatch 2 FACEIT Cheat Status',
    headingId: 'ow2-faceit-cheat-status',
    context:
      'Overwatch 2 FACEIT cheat status and OW2 FACEIT cheat status are the same configured row: undetected and running. Role-queue tools stay on the Overwatch 2 page.',
    ctaLabel: 'Open the Overwatch 2 route',
  },
  {
    gameId: 'rainbow-six-siege',
    heading: 'Rainbow Six Siege FACEIT Cheat Status',
    headingId: 'r6-faceit-cheat-status',
    context:
      'Rainbow Six Siege FACEIT cheat status and R6 FACEIT cheat status share one Siege row. The configured label is undetected and running. Product copy stays on the Siege page.',
    ctaLabel: 'Open the Siege page',
  },
];

export const statusFaqs: FaqItem[] = [
  {
    id: 'where-check-status',
    question: 'Where can I check FACEIT cheat status?',
    answer:
      'This page is the FACEIT cheat status hub. Each supported game has a configured row and a short section so you can confirm the safe, current label, then open that game’s dedicated page.',
  },
  {
    id: 'per-game',
    question: 'Is status tracked separately for each game?',
    answer:
      'Yes. CS2, Valorant, Overwatch 2, and Rainbow Six Siege each have their own detection and availability fields in one status file. A FACEIT hack status label on CS2 does not automatically apply to Siege.',
  },
  {
    id: 'cs2-status',
    question: 'Where can I check CS2 FACEIT status?',
    answer:
      'Use the CS2 FACEIT cheat status section on this page, then continue to the CS2 product page. The configured CS2 row is undetected and running.',
  },
  {
    id: 'valorant-status',
    question: 'Where can I check Valorant FACEIT status?',
    answer:
      'Use the Valorant FACEIT cheat status section below, then open the Valorant listing. Valorant is configured as undetected and available.',
  },
  {
    id: 'ow2-r6-separate',
    question: 'Are Overwatch 2 and Rainbow Six Siege tracked separately?',
    answer:
      'Yes. Overwatch 2 FACEIT cheat status is an undetected and running row. Rainbow Six Siege FACEIT cheat status is also undetected and running. Neither shares CS2 or Valorant product copy — only the same kind of configured label.',
  },
  {
    id: 'updating-monitoring',
    question: 'What does an updating or monitoring state mean?',
    answer:
      'Those labels exist in the status model: monitoring means a title is running while detection is watched; updating means a FACEIT cheat update is in progress. Right now all four games are configured undetected and running. Read the board for the current snapshot — not generated lab clocks or invented percentages.',
  },
  {
    id: 'after-status',
    question: 'Where do I go after checking status?',
    answer:
      'To the dedicated game page — CS2, Valorant, Overwatch 2, or Siege. Access and purchase start there, not on this status hub.',
  },
  {
    id: 'general-questions',
    question: 'Where can I find general site questions?',
    answer:
      'The site-wide FAQ covers FACEIT as a platform. The homepage is the provider directory. This URL stays on FACEIT product status.',
  },
];
