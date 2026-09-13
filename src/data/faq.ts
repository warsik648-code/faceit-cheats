export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const homepageFaqs: FaqItem[] = [
  {
    id: 'what-are-faceit-cheats',
    question: 'What are FACEIT cheats?',
    answer:
      'FACEIT cheats are private tools for games played through FACEIT’s competitive platform. A FACEIT cheat or FACEIT hack is not a separate FACEIT-only video game — it is software aimed at a supported title in that ecosystem.',
  },
  {
    id: 'is-faceit-a-game',
    question: 'Is FACEIT a game?',
    answer:
      'No. FACEIT is a competitive gaming platform. Players use it to queue Counter-Strike 2 and other titles. This site therefore organizes FACEIT hacks and information by those games.',
  },
  {
    id: 'which-games',
    question: 'Which games does faceitcheats.net cover?',
    answer:
      'The current FACEIT games on this hub are Counter-Strike 2, Valorant, Overwatch 2, and Rainbow Six Siege. Each has its own route so later product copy can stay unique.',
  },
  {
    id: 'is-cs2-main',
    question: 'Is CS2 the main FACEIT game covered here?',
    answer:
      'Yes. Counter-Strike 2 is the primary offering. CS2 FACEIT product detail belongs on the CS2 page; this homepage only introduces that route.',
  },
  {
    id: 'where-status',
    question: 'Where can I check product and FACEIT status?',
    answer:
      'Configured availability, last detection-test notes, bans, ban waves, and safety percentages are collected on the status page. The homepage board is a summary that links there.',
  },
  {
    id: 'different-features',
    question: 'Does each game have different features?',
    answer:
      'Yes. Treat feature lists as game-specific. The CS2 page is the reference for that title’s modules; Valorant, Overwatch 2, and Siege will document their own sets on their routes.',
  },
  {
    id: 'where-purchase',
    question: 'Where does purchasing take place?',
    answer:
      'Not on this homepage. Open the dedicated game page first. Access, purchase, and download actions are reserved for those product URLs and a single configured external destination.',
  },
  {
    id: 'where-support',
    question: 'Where can I get support?',
    answer:
      'Use the site FAQ for platform questions, or open a game page when you need product-level help. Support is not completed as a checkout action on this hub.',
  },
];

export const faqPageItems: FaqItem[] = [
  ...homepageFaqs,
  {
    id: 'placeholders',
    question: 'Are user counts and ban statistics live?',
    answer:
      'Not yet. Figures marked [PLACEHOLDER] on the status route are structural only and must be replaced with verified numbers. Generated timestamps are never used as proof that a product was tested at that moment.',
  },
  {
    id: 'undetected',
    question: 'What do “undetected” and “ban-safe” mean on this site?',
    answer:
      'Those words are editorial status labels configured per game. Confirm every claim against current, verified data on the status page before treating a label as current.',
  },
  {
    id: 'commercial-links',
    question: 'Where do purchase links go?',
    answer:
      'Commercial calls to action on game pages use one centralized external destination. They are regular links, not JavaScript redirects, and they include nofollow on that destination. The homepage does not start checkout.',
  },
  {
    id: 'cs2-product-page',
    question: 'Where are Counter-Strike 2 product details?',
    answer:
      'CS2 feature descriptions, commercial access notes, and CS2-specific questions live on the CS2 page. This FAQ stays on platform-wide topics so the two URLs do not repeat the same copy.',
  },
];
