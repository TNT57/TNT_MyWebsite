# Nathan Tran — Portfolio

Next.js (App Router) + TypeScript + Tailwind. `npm run dev` to run locally.

## Add a project

Open `src/content/projects.ts` and add an object to the `projects` array
matching the `Project` interface at the top of the file (`problem`,
`approach`, `result`, `metric`, `metricExplanation`, `whatIdDoDifferently`,
etc.). Set `status` to `"featured"` (shown on the homepage), `"active"`, or
`"archive"` (shown de-emphasised on `/projects`). A page at
`/projects/<slug>` is generated automatically — no other file needs editing.

## Edit bio / hobby / availability

Open `src/content/about.ts` and edit the plain strings directly
(`bioParagraphs`, `availabilityLine`, `hobbyIntro`, `hobbyItems`). These feed
the homepage, `/about`, and `/hobby` automatically.

## Connect to Vercel

1. Push this repo to GitHub (already done).
2. On [vercel.com](https://vercel.com), "Add New Project" → import this repo.
3. Framework preset auto-detects as Next.js — no config needed.
4. Deploy, then copy the assigned `*.vercel.app` URL into `siteConfig.url`
   in `src/config/site.ts`, commit, and push.
