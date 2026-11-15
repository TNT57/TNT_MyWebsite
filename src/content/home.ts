// Homepage-only content: the proof strip and the "What I can do" cards.
// Plain data, edit freely.

export interface ProofStat {
  label: string;
  // The number counts up from 0 to `value` when the page loads.
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  // How full the little bar under the number is, 0–100.
  bar: number;
  note: string;
  href: string;
}

export const proofStats: ProofStat[] = [
  {
    label: "Retrieval accuracy",
    value: 80,
    suffix: "%",
    bar: 80,
    note: "Top-1, VISA system. Up from 50%.",
    href: "/projects/visa-intelligence-system",
  },
  {
    label: "Products tracked",
    value: 63662,
    bar: 100,
    note: "PriceCheck AU, across 3 supermarket chains.",
    href: "/projects/pricecheck-au",
  },
  {
    label: "Model fit (R²)",
    value: 0.73,
    decimals: 2,
    bar: 73,
    note: "NBA model, on held-out seasons.",
    href: "/projects/nba-fair-value-model",
  },
  {
    label: "GPA",
    value: 6.7,
    decimals: 1,
    suffix: " / 7",
    bar: 95.7,
    note: "B.CompSci (AI), University of Adelaide.",
    href: "/about",
  },
];

export interface Skill {
  title: string;
  text: string;
  tags: string[];
  // Links to the work that proves this skill.
  proof: { label: string; href: string }[];
}

export const skills: Skill[] = [
  {
    title: "RAG and LLM apps",
    text: "Retrieval pipelines that cite their sources: rendering, chunking, embeddings and answers grounded in the retrieved text.",
    tags: ["ChromaDB", "Llama 3.3 70B", "Query expansion"],
    proof: [{ label: "VISA Intelligence System", href: "/projects/visa-intelligence-system" }],
  },
  {
    title: "Evals and reliability",
    text: "Measure before shipping: retrieval accuracy tests, grounded-answer checks and adversarial guardrail tests.",
    tags: ["Top-k accuracy", "Guardrails", "Rubrics"],
    proof: [
      { label: "VISA Intelligence System", href: "/projects/visa-intelligence-system" },
      { label: "Viettel Solutions internship", href: "/about" },
    ],
  },
  {
    title: "Machine learning models",
    text: "Leak-free features and honest validation, with tests that fail the build if leakage comes back.",
    tags: ["Gradient boosting", "Cross-validation"],
    proof: [{ label: "NBA Fair-Value Model", href: "/projects/nba-fair-value-model" }],
  },
  {
    title: "Full-stack product",
    text: "Web apps with real data behind them: collectors, review steps, automated checks and full price history.",
    tags: ["Next.js", "tRPC", "Prisma", "Postgres"],
    proof: [{ label: "PriceCheck AU", href: "/projects/pricecheck-au" }],
  },
];
