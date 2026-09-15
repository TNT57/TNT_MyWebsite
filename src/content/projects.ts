export interface ProjectLinks {
  repo?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "AI/ML" | "Full-stack" | "Open source";
  oneLine: string;
  role: string;
  status: "featured" | "active" | "archive";
  problem: string;
  approach: string;
  result: string;
  metric: string;
  metricExplanation: string;
  whatIdDoDifferently: string;
  links?: ProjectLinks;
  // Optional — falls back to a greyscale placeholder when not set.
  // TODO: Nathan, drop real screenshots in /public and set these per project.
  imageSrc?: string;
}

export const projects: Project[] = [
  {
    slug: "visa-intelligence-system",
    title: "Auto-Updating VISA Intelligence System",
    category: "AI/ML",
    oneLine:
      "Answers real questions about Australia's 485 visa and cites the government page each answer came from.",
    role: "Solo build: data pipeline, retrieval, and the chat interface.",
    status: "featured",
    problem:
      "Australian visa rules change often and the details are spread across pages that render entirely in JavaScript, so a plain HTTP fetch returns almost no text. Finding the current answer meant reading long pages by hand, with no way to check whether an answer was still current.",
    approach:
      "Built a RAG pipeline: a headless Chromium browser renders the JavaScript pages, the content is split into overlapping chunks and embedded (768 dimensions) into a ChromaDB index, and Llama 3.3 70B answers questions using only the retrieved passages. A second pass re-reads every answer against those same passages and labels it grounded or not before showing it. A GitHub Actions job re-scrapes and re-indexes daily.",
    result:
      "Diagnosed a vocabulary mismatch between how applicants phrase questions and how the government writes its pages (\"onshore\" vs. \"be in Australia when you apply\"), then fixed it with LLM query expansion and reciprocal rank fusion. Also found that generic application-form PDFs made up over half the indexed chunks while never mentioning the visa, and filtered them out on content rather than filename.",
    metric: "80% top-1 retrieval accuracy (up from 50%), 100% top-3 (up from 70%)",
    metricExplanation:
      "Out of 10 test questions, the right source passage now shows up first 8 times out of 10, and is in the top 3 every time, up from getting it right first only half the time.",
    // TODO: Nathan, anything you'd change here? README's own "Known limitations"
    // section flags table parsing and page coverage, which is what the note
    // below is based on, but confirm it still matches your priorities.
    whatIdDoDifferently:
      "The scraper flattens HTML tables into loose text, so a merged or empty cell could silently break an answer. I'd port the markdown table parser already used for PDFs over to the HTML path, and expand past the 7 pages currently monitored.",
    links: {
      repo: "https://github.com/TNT57/Auto-updating-VISA-Intelligence-System",
      demo: "https://auto-updating-visa-intelligence-system.streamlit.app/",
    },
  },
  {
    slug: "nba-fair-value-model",
    title: "NBA Fair-Value Model",
    category: "AI/ML",
    oneLine:
      "Predicts what an NBA player is actually worth from on-court performance alone, then flags who's overpaid or underpaid.",
    role: "Solo rebuild of an earlier coursework project.",
    status: "active",
    problem:
      "Rebuilt from an earlier data-mining coursework version. That original model had target leakage: salary-derived numbers were still present in the feature matrix, so it was partly predicting salary from salary rather than from performance, which made its \"fair value\" number meaningless.",
    approach:
      "Retrained a gradient-boosted model on six seasons (about 2,100 player-seasons) of performance-only stats scraped from Basketball-Reference and ESPN, covering scoring, rebounding, playmaking, efficiency, age and availability, with every salary-derived column removed. Added a unit test that fails the build if any salary-derived column re-enters the feature matrix, and validated with leave-one-season-out cross-validation rather than a single train/test split.",
    result:
      "The rebuilt model holds an R² of 0.73 across held-out seasons (0.62 to 0.78 depending on the season), and recovers cases that match intuition: Gordon Hayward and a declining Klay Thompson read as overpaid, Desmond Bane on his rookie deal and an early-career Pascal Siakam read as underpaid. Shipped as an interactive Streamlit explorer with player lookup and over/underpaid leaderboards.",
    metric: "R² ≈ 0.73 (0.62–0.78 across held-out seasons)",
    metricExplanation:
      "On a scale where 1.0 means the model predicts fair salary perfectly and 0 means it's no better than guessing the average, 0.73 means performance stats alone explain about 73% of what a player actually gets paid.",
    whatIdDoDifferently:
      "TODO: Nathan, what's next for this one? More recent seasons, injury data, positional adjustments?",
    links: {
      repo: "https://github.com/TNT57/NBA-fair-value",
      demo: "https://nba-fair-value.streamlit.app/",
    },
  },
  {
    slug: "everything-larper",
    title: "Everything Larper",
    category: "Open source",
    oneLine:
      "A Claude Skill that turns a one-line persona prompt into fan commentary that reads like a real fan wrote it.",
    role: "Solo build: skill design, slang reference guide, and the eval suite.",
    status: "featured",
    problem:
      "Generic AI \"fan takes\" read as generic: no slang, no inside references, nothing a real fan would actually know. That's an obvious tell, and it's not useful for the moment before joining a conversation you're supposed to already have opinions on.",
    approach:
      "Built a Claude Skill (SKILL.md format) that takes a short persona prompt (e.g. \"World Cup 2026 Messi Fan\") and generates concise commentary with inside references, real statistics, rivalry banter and a distinctive sign-off. A slang reference guide keeps vocabulary genuinely insider across football, NBA and esports, with a tone kept sarcastic but warm and aimed at situations rather than real people.",
    result:
      "Added an evaluation framework with quality rubrics and adversarial guardrail tests, specifically checking the skill never fabricates quotes or uses real athletes' likenesses in a way that could misrepresent them, since this is a public, attributed tool anyone can install.",
    // Nathan: no one's really used this yet, so there's no adoption number to show.
    metric: "TODO: no usage data yet for this one",
    metricExplanation:
      "TODO: pick a real, honest metric once one exists (e.g. guardrail-test pass rate), or leave this card without a number.",
    whatIdDoDifferently:
      "TODO: Nathan, anything you'd change here (more fandoms, a real usage metric, packaging)?",
    links: {
      repo: "https://github.com/TNT57/Everything-Larper",
    },
  },
  {
    slug: "pricecheck-au",
    title: "PriceCheck AU",
    category: "Full-stack",
    oneLine:
      "Compares grocery prices across Coles, Woolworths and Aldi, built and deployed solo.",
    role: "Solo build; product and engineering. Deployed under the VietBrosInAus collective.",
    status: "featured",
    problem:
      "Grocery prices differ across supermarkets and change often, and there's no single place to compare them using real, current prices rather than a cached snapshot.",
    approach:
      "Built on Next.js, tRPC, Prisma and Postgres. All price data goes through one PriceSource interface, so the underlying source can swap out (a dataset loader, a hand-entry form, a collected feed) without touching the rest of the app. Three polite, rate-limited collectors gather prices from each store, write drafts a person reviews, and only import into the shared database after passing automated checks: a row-count floor, a fixed staples basket, price sanity, and per-aisle comparisons against the prior week.",
    result:
      "63,662 products and 64,883 recorded prices, all real and none invented, across Coles, Woolworths and Aldi; 62,972 of those products carry the store's own product photo. Every price is stored as a new row rather than overwritten, so full price history is preserved and freshness can be shown honestly.",
    metric: "63,662 products tracked live across 3 supermarket chains",
    metricExplanation:
      "That's every product this app currently knows the price of, across Coles, Woolworths and Aldi combined, from real, currently-collected prices rather than a one-time snapshot.",
    whatIdDoDifferently:
      "TODO: Nathan, what's the honest \"next time\" here? (e.g. earlier investment in product matching, or a different collector strategy for Coles)",
    links: {
      demo: "https://price-check-au.vercel.app",
      // No repo link: the repo is private.
    },
  },
];
