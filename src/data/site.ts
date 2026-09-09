export const SITE = {
  url: 'https://faceitcheats.net',
  name: 'FACEIT Cheats',
  legalName: 'FACEIT Cheats',
  tagline: 'Premium FACEIT Cheats',
  locale: 'en_US',
  language: 'en',
  defaultRobots: 'index, follow',
  themeColor: '#0D0A14',
  /**
   * Single source of truth for commercial and support destinations.
   * Do not hardcode these URLs in components.
   */
  external: {
    transactionUrl: 'https://go.faceitcheats.net',
    supportUrl: 'mailto:support@faceitcheats.net',
  },
} as const;

export type SiteConfig = typeof SITE;
