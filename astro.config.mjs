// @ts-check
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { SITE } from './src/data/site.ts';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    sitemap({
      changefreq: ChangeFreqEnum.WEEKLY,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === `${SITE.url}/`) {
          return { ...item, priority: 1.0, changefreq: ChangeFreqEnum.DAILY };
        }

        if (item.url === `${SITE.url}/cs2/`) {
          return { ...item, priority: 0.9 };
        }

        if (item.url === `${SITE.url}/status/`) {
          return { ...item, priority: 0.85 };
        }

        if (item.url === `${SITE.url}/faq/`) {
          return { ...item, priority: 0.8 };
        }

        if (item.url === `${SITE.url}/blog/`) {
          return { ...item, priority: 0.75 };
        }

        if (item.url.startsWith(`${SITE.url}/blog/`)) {
          return { ...item, priority: 0.65 };
        }

        return { ...item, priority: 0.7 };
      },
    }),
  ],
});
