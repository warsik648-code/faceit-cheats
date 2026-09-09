export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const homepageFaqs: FaqItem[] = [
  {
    id: 'is-faceit-a-game',
    question: 'Is FACEIT a game?',
    answer:
      'No. FACEIT is a competitive gaming platform used to play titles such as Counter-Strike 2. This site is organized by those supported games, not as if FACEIT itself were a game.',
  },
  {
    id: 'primary-game',
    question: 'Which game is the primary focus?',
    answer:
      'Counter-Strike 2 is the primary game landing page. Valorant, Overwatch 2, and Rainbow Six Siege each have their own routes and status rows.',
  },
  {
    id: 'status-board',
    question: 'What does the status board show?',
    answer:
      'Each game has a separately configured availability state, detection label, and editorial note. Real-time detection information is described on the status page. Placeholder user counts, detection-test counts, and ban statistics are labeled as placeholders.',
  },
];

export const faqPageItems: FaqItem[] = [
  ...homepageFaqs,
  {
    id: 'placeholders',
    question: 'Are user counts and ban statistics live?',
    answer:
      'Not yet. Figures marked [PLACEHOLDER] are structural only and must be replaced with verified numbers. Generated timestamps are never used as proof that a product was tested at that moment.',
  },
  {
    id: 'undetected',
    question: 'What do “undetected” and “ban-safe” mean on this site?',
    answer:
      'Those words are editorial status labels configured per game. They are not a guarantee against detection or bans. Confirm every claim against current, verified data before treating a label as current.',
  },
  {
    id: 'commercial-links',
    question: 'Where do purchase links go?',
    answer:
      'Commercial calls to action use one centralized external transaction URL. They are regular links, not JavaScript redirects, and they include nofollow on the transaction destination.',
  },
  {
    id: 'cs2-product-page',
    question: 'Where are Counter-Strike 2 product details?',
    answer:
      'CS2 feature descriptions, commercial access notes, and CS2-specific questions live on the CS2 page. This FAQ stays on platform-wide topics so the two URLs do not repeat the same copy.',
  },
];
