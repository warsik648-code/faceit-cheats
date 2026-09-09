export interface Feature {
  id: string;
  title: string;
  description: string;
}

export const homepageFeatures: Feature[] = [
  {
    id: 'detection',
    title: 'Real-time detection information',
    description:
      'Each supported game carries a configured detection label so you can see whether a title is marked undetected, monitored, or updating — without inventing a live test clock.',
  },
  {
    id: 'undetected',
    title: 'Undetected, up to date, running',
    description:
      'CS2 is configured as undetected, current, and working. Other titles expose their own run state so availability is visible at a glance.',
  },
  {
    id: 'users',
    title: 'User counts',
    description:
      'Per-game operator counts will sit on the status board. Until verified numbers exist, every user-count figure is marked as a placeholder.',
  },
  {
    id: 'tests',
    title: 'Detection tests',
    description:
      'Detection-test totals are reserved in the data layer for each game. Do not publish them as evidence until an editorial source replaces the placeholders.',
  },
  {
    id: 'bans',
    title: 'Ban statistics',
    description:
      'Ban-rate and “ban-safe” wording is centralized with the rest of the status data so claims stay consistent — and stay labeled until they are verified.',
  },
  {
    id: 'availability',
    title: 'Availability by game',
    description:
      'Working, updating, or unavailable is set per title. The homepage and status route both read the same configuration.',
  },
];
