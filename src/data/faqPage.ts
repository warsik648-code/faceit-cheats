import type { FaqItem } from './faq';
import type { GameId } from './games';

export const faqHero = {
  eyebrow: 'Help & information',
  title: 'FACEIT Cheats FAQ',
  description:
    'Answers to general questions about FACEIT, the games this site covers, how pages are organized, where to check FACEIT cheat status, and how access and support work. Product modules and checkout stay on each game page.',
} as const;

export interface FaqGroup {
  id: string;
  eyebrow: string;
  title: string;
  titleId: string;
  description: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: 'basics',
    eyebrow: 'Platform first',
    title: 'FACEIT basics',
    titleId: 'faceit-basics',
    description:
      'Start here if you are asking what FACEIT is, whether it is a game, or what FACEIT cheats actually refer to.',
    items: [
      {
        id: 'what-is-faceit',
        question: 'What is FACEIT?',
        answer:
          'FACEIT is a competitive gaming platform and ecosystem. Players launch supported titles — such as Counter-Strike 2 — into FACEIT queues, rankings, and events. It is not a standalone shooter you buy instead of those games.',
      },
      {
        id: 'is-faceit-a-game',
        question: 'Is FACEIT a game?',
        answer:
          'No. FACEIT hosts matches for games you already own or install. That is why faceitcheats.net is organized by title instead of treating “FACEIT” as one product page.',
      },
      {
        id: 'what-are-faceit-cheats',
        question: 'What are FACEIT cheats?',
        answer:
          'FACEIT cheats are private, game-specific tools aimed at titles played through FACEIT. A FACEIT private cheat is software for CS2, Valorant, Overwatch 2, or Siege in that ecosystem — not a FACEIT-only video game.',
      },
      {
        id: 'can-you-cheat-on-faceit',
        question: 'Can you cheat on FACEIT?',
        answer:
          'This site publishes per-game FACEIT cheat listings. “Hack FACEIT” searches mean the same thing: tools for a title inside FACEIT, not a bypass guide. This FAQ does not explain how to defeat or disable anti-cheat. Open the matching game page for product detail.',
      },
      {
        id: 'why-separate-pages',
        question: 'Why are there separate game pages?',
        answer:
          'Each title has its own features, status row, and access path. Separate routes keep CS2, Valorant, Overwatch 2, and Rainbow Six Siege from sharing one commercial article.',
      },
      {
        id: 'main-focus-game',
        question: 'Which game is the main focus of this site?',
        answer:
          'Counter-Strike 2 is the primary, featured offering. The other three games still have their own landing pages so FACEIT CS2 cheats never stand in for every title.',
      },
    ],
  },
  {
    id: 'games',
    eyebrow: 'Coverage',
    title: 'Games supported on this site',
    titleId: 'games-supported',
    description:
      'faceitcheats.net covers four FACEIT games. Each answer points to the dedicated route rather than repeating that game’s landing-page copy.',
    items: [
      {
        id: 'which-games-covered',
        question: 'Which FACEIT games are covered?',
        answer:
          'The current set is Counter-Strike 2, Valorant, Overwatch 2, and Rainbow Six Siege. Use the homepage directory if you are still choosing, then open the matching game URL.',
      },
      {
        id: 'cover-cs2',
        question: 'Does faceitcheats.net cover CS2?',
        answer:
          'Yes. CS2 is the featured FACEIT title. FACEIT CS2 cheats, modules, and access notes live on the CS2 product page, not in this FAQ.',
      },
      {
        id: 'cover-valorant',
        question: 'Does it cover Valorant?',
        answer:
          'Yes. Valorant FACEIT cheats have a dedicated listing for agent-round play. Open that page for Valorant-specific product detail.',
      },
      {
        id: 'cover-ow2',
        question: 'Does it cover Overwatch 2?',
        answer:
          'Yes. Overwatch 2 FACEIT cheats are documented on the Overwatch 2 route so role-queue tools stay separate from CS2.',
      },
      {
        id: 'cover-r6',
        question: 'Does it cover Rainbow Six Siege?',
        answer:
          'Yes. Rainbow Six Siege FACEIT cheats sit on their own Siege page for operators and gadgets. R6 is not folded into the CS2 listing.',
      },
    ],
  },
  {
    id: 'features',
    eyebrow: 'Modules',
    title: 'Product and feature questions',
    titleId: 'feature-questions',
    description:
      'Feature names are shared language across shooters. Exact availability is always documented on the individual game page.',
    items: [
      {
        id: 'feature-types',
        question: 'What types of features are covered?',
        answer:
          'Game pages typically discuss combat and visual modules such as aim, ESP, radar, and related extras. That is also how FACEIT cheats work at a high level: a private build for one title. This FAQ does not describe loaders, injection, or evasion. The exact set is unique to each listing.',
      },
      {
        id: 'own-feature-set',
        question: 'Does each game have its own feature set?',
        answer:
          'Yes. Features are not copied across CS2, Valorant, Overwatch 2, and Siege. If two pages mention aim or ESP, that still does not mean the same options ship on both builds.',
      },
      {
        id: 'cs2-feature-list',
        question: 'Where can I see exact CS2 features?',
        answer:
          'On the CS2 product page. This FAQ will not reprint that feature list. Use the CS2 feature block when you want named modules for the primary game.',
      },
      {
        id: 'features-every-game',
        question: 'Are aimbot, ESP, radar, and triggerbot available on every game?',
        answer:
          'Not automatically. Those words appear in shooter product copy, but availability is confirmed per listing. Check CS2, Valorant, Overwatch 2, or Siege individually instead of assuming a shared kit.',
      },
    ],
  },
  {
    id: 'status',
    eyebrow: 'Availability',
    title: 'Status questions',
    titleId: 'status-questions',
    description:
      'Configured detection and availability live on the status hub. This section only explains where to read them.',
    items: [
      {
        id: 'where-check-status',
        question: 'Where can I check current product status?',
        answer:
          'Use the central FACEIT cheat status page for the latest configured labels. It owns per-game status. This FAQ does not republish the board.',
      },
      {
        id: 'status-per-game',
        question: 'Is status tracked separately for each game?',
        answer:
          'Yes. CS2, Valorant, Overwatch 2, and Rainbow Six Siege each have their own configured detection and availability fields. A label on one title does not apply to the others.',
      },
      {
        id: 'what-monitoring-means',
        question: 'What does monitoring mean?',
        answer:
          'Monitoring is a configured status label: the title is treated as running while detection is watched. All four games are currently configured undetected and running. Read the current row on the status page rather than treating this sentence as a live clock.',
      },
      {
        id: 'what-updating-means',
        question: 'What does updating mean?',
        answer:
          'Updating is a configured label meaning a FACEIT cheat update is in progress for that game. Right now every supported title is undetected and running. Confirm the latest wording on the status hub before you open a product page.',
      },
    ],
  },
  {
    id: 'access',
    eyebrow: 'Getting started',
    title: 'Access and purchasing',
    titleId: 'access-questions',
    description:
      'Checkout is not started from this FAQ. The path is homepage or FAQ, then a game page, then the configured external destination.',
    items: [
      {
        id: 'where-to-buy',
        question: 'Where do I buy FACEIT cheats?',
        answer:
          'Open the correct game listing — CS2, Valorant, Overwatch 2, or Siege — then use that page’s access action. Purchase is reserved for those URLs and a single configured external destination. This FAQ is not a storefront.',
      },
      {
        id: 'purchase-on-site',
        question: 'Does purchasing happen on faceitcheats.net?',
        answer:
          'No. This domain organizes games, status, and questions. Game pages send you to one centralized external destination so checkout stays off the homepage, status hub, and this FAQ.',
      },
      {
        id: 'start-from-game-page',
        question: 'Do I need to start from the game page?',
        answer:
          'Yes, if you intend to buy or get access. Checkout takes place on the configured external destination after you leave a game page. Homepage, status, and this FAQ only help you pick a title. The final destination URL is not published here.',
      },
      {
        id: 'choose-correct-game',
        question: 'How do I choose the correct game?',
        answer:
          'Match the FACEIT title you actually queue. CS2 is the primary listing; Valorant, Overwatch 2, and Siege are separate. The homepage directory is the shortest chooser if you are unsure.',
      },
      {
        id: 'how-much-cost',
        question: 'How much do FACEIT cheats cost?',
        answer:
          'This FAQ does not list prices. Plans and payment details appear on the game page’s access path and the configured checkout destination — not as a site-wide price table here.',
      },
    ],
  },
  {
    id: 'support',
    eyebrow: 'Help',
    title: 'Support questions',
    titleId: 'support-questions',
    description:
      'Site-wide questions stay here. Product-level help belongs on the game page or the configured support channel — not a third-party community we do not list.',
    items: [
      {
        id: 'where-support',
        question: 'Where can I get FACEIT cheat support?',
        answer:
          'Use this FAQ for platform and organization questions. For a specific listing, open that game page. The site’s configured support channel is the support address in site configuration, not a Discord we invent here.',
      },
      {
        id: 'support-by-game',
        question: 'Is support different by game?',
        answer:
          'Product questions are game-specific because features and status are. A CS2 access issue is not answered by the Siege page. Broad FACEIT questions can stay on this FAQ.',
      },
      {
        id: 'wrong-game',
        question: 'Where should I go if I selected the wrong game?',
        answer:
          'Return to the homepage directory or jump to the correct landing page — CS2, Valorant, Overwatch 2, or Rainbow Six Siege — before you continue to access.',
      },
      {
        id: 'best-faceit-cheat',
        question: 'What is the best FACEIT cheat?',
        answer:
          '“Best” depends on the game you play. This site is a FACEIT cheat provider with CS2 as the primary private listing and three other dedicated pages. Compare the title you queue, then confirm its configured status before access.',
      },
    ],
  },
];

export const faqPageQuestions: FaqItem[] = faqGroups.flatMap((group) => group.items);

export interface FaqGameExplore {
  gameId: GameId;
  blurb: string;
  ctaLabel: string;
}

export const faqExploreGames: FaqGameExplore[] = [
  {
    gameId: 'cs2',
    blurb: 'Primary FACEIT listing. Use it for CS2 modules and the access path after you have read status.',
    ctaLabel: 'Open the CS2 product page',
  },
  {
    gameId: 'valorant',
    blurb: 'Separate Valorant route for FACEIT and regular tactical-shooter play.',
    ctaLabel: 'Open the Valorant listing',
  },
  {
    gameId: 'overwatch-2',
    blurb: 'Role-queue coverage kept on its own Overwatch 2 URL.',
    ctaLabel: 'Open the Overwatch 2 route',
  },
  {
    gameId: 'rainbow-six-siege',
    blurb: 'Operator-title coverage that does not share the CS2 page.',
    ctaLabel: 'Open the Siege page',
  },
];
