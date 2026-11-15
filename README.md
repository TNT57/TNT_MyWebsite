# Nathan Tran — Portfolio

Next.js (App Router) + TypeScript + Tailwind. `npm run dev` to run locally.

## Add a project

Open `src/content/projects.ts` and add an object to the `projects` array
matching the `Project` interface at the top of the file (`problem`,
`approach`, `result`, `metric`, `metricExplanation`, `whatIdDoDifferently`,
etc.). The design also uses:

- `stack` — tools listed under "Built with" on the case study.
- `pipeline` — the 4-step "how it works" strip under Approach.
- `headline` (optional) — the big cyan number on project cards. Leave it out
  when there is no honest number yet.
- `stats` (optional) — big numbers under Result; `before`/`after` (0–100)
  draw a comparison bar.
- `subCategory`, `titleOutline` (optional) — the label after the category,
  and the title word drawn as glowing outline text.

Set `status` to `"featured"` or `"active"` (shown on the homepage and
`/projects`) or `"archive"` (only on `/projects`, de-emphasised). The order of
the array is the order on the site. A page at `/projects/<slug>` is generated
automatically. Any text that starts with `TODO` is hidden on the site.

## Edit bio / hobby / availability

Open `src/content/about.ts` and edit the plain strings directly
(`homeIntro`, `bioParagraphs`, `aboutLead`, `background`, `toolTicker`,
`availabilityRole`, `hobbyIntro`, `hobbyItems`). These feed the homepage,
`/about`, `/hobby` and `/resume` automatically.

## Edit the homepage numbers and skills

Open `src/content/home.ts`. `proofStats` are the four numbers under the
hero (they count up from 0; `bar` is how full the little bar is, 0–100).
`skills` are the "What I can do" cards; each `proof` link should point at the
project or page that backs the skill up.

## Change the look

Colours live at the top of `src/app/globals.css`. Change `--accent` to
recolour the whole site. Animations there all switch off for visitors who ask
their device for reduced motion.

## Connect to Vercel

1. Push this repo to GitHub (already done).
2. On [vercel.com](https://vercel.com), "Add New Project" → import this repo.
3. Framework preset auto-detects as Next.js — no config needed.
4. Deploy, then copy the assigned `*.vercel.app` URL into `siteConfig.url`
   in `src/config/site.ts`, commit, and push.
