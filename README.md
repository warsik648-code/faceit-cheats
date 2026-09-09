# FACEIT Cheats

Production site for [faceitcheats.net](https://faceitcheats.net). Phase 1 is the Astro foundation: layouts, centralized data, SEO, and route shells.

## Commands

| Command           | Action                             |
| ----------------- | ---------------------------------- |
| `npm install`     | Install dependencies               |
| `npm run dev`     | Local server at `localhost:4321`   |
| `npm run check`   | Astro / TypeScript diagnostics     |
| `npm run build`   | Production build to `./dist/`      |
| `npm run preview` | Preview the production build       |

## Architecture

Site URL, transaction destination, navigation, games, and status live in `src/data/`. Commercial CTAs read `SITE.external.transactionUrl` only.

Replace `[PLACEHOLDER]` figures in `src/data/status.ts` before treating user counts, detection tests, or ban statistics as real.
