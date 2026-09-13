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
   * The eventual Zadeyo URL belongs in `destinationUrl`. Do not invent it.
   * Until that value is supplied, specific URLs below keep existing game-page
   * actions working. When destinationUrl is set, empty specific fields inherit it.
   *
   * Labels that should read from this config later:
   * Buy Now, Get Access, Get Support, Download, Purchase, Access Product.
   */
  external: {
    destinationUrl: '',
    transactionUrl: 'https://go.faceitcheats.net',
    accessUrl: '',
    supportUrl: 'mailto:support@faceitcheats.net',
    affiliateUrl: {
      cs2: 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Fcs2-faceit',
      valorant: 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Fval-faceit',
      'overwatch-2': 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Fow2-faceit',
      'rainbow-six-siege': 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Fr6-faceit',
    },
  },
} as const;

export type SiteConfig = typeof SITE;
export type ExternalAction = 'transaction' | 'access' | 'support';
