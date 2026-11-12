// Plain, editable strings — this file is meant to change often.
// Nothing here is coupled to component props; edit freely.

// Homepage bio paragraphs. Edit me freely.
export const bioParagraphs: string[] = [
  "I finished a Bachelor of Computer Science, majoring in Artificial Intelligence, at the University of Adelaide in 2026. I've interned as an AI engineer at Viettel Solutions, fine-tuning and evaluating NLP models before release, and worked as a research assistant automating threat-intelligence analysis with large language models.",
  "Outside coursework, I build full projects end to end: a RAG system that answers real Australian visa questions with cited sources, and a grocery price comparison app that tracks tens of thousands of real product prices across three supermarket chains.",
];

// The short intro beside the giant name on the homepage. Edit me freely.
export const homeIntro =
  "I build AI systems end to end and measure them honestly: a RAG system that answers real Australian visa questions with cited sources, and a grocery app tracking tens of thousands of real prices.";

// The large lead sentence on /about. Edit me freely.
export const aboutLead = "I build full projects end to end, then";
export const aboutLeadHighlight = "check the numbers honestly.";

// Study and work, shown on /about and /resume. Edit me freely.
export interface BackgroundItem {
  label: string;
  title: string;
  detail: string;
}

export const background: BackgroundItem[] = [
  {
    label: "Study · 2023 to 2026",
    title: "Bachelor of Computer Science, major in Artificial Intelligence",
    detail: "University of Adelaide, Global Citizens Scholarship. GPA 6.7/7.00.",
  },
  {
    label: "Internship",
    title: "AI Engineer Intern, Viettel Solutions",
    detail: "Fine-tuned and evaluated NLP models before release.",
  },
  {
    label: "Research",
    title: "Research Assistant",
    detail: "Automated threat-intelligence analysis with large language models.",
  },
];

// The scrolling ticker of tools on the homepage and /about. Edit me freely.
export const toolTicker: string[] = [
  "RAG",
  "ChromaDB",
  "Llama 3.3 70B",
  "Gradient boosting",
  "Next.js",
  "tRPC",
  "Prisma",
  "Postgres",
  "Streamlit",
  "GitHub Actions",
  "Claude Skills",
];

// Shown near the top of the homepage, as two short separate chips. Edit me freely.
export const availabilityLocation = "Adelaide, SA";
export const availabilityRole = "Open to graduate AI Engineer and SWE roles";

// Content for the /hobby route. Edit me freely.
export interface HobbyItem {
  category: string;
  // Big short line on the card, e.g. "Piano, guitar, drums."
  headline: string;
  text: string;
  // Filename under /public. Card shows this image if it exists, else a
  // placeholder — same pattern as the About-page photo.
  image: string;
  link?: { label: string; href: string };
}

export const hobbyIntro = "A few things outside of code.";
export const hobbyItems: HobbyItem[] = [
  {
    category: "Sports",
    headline: "Basketball and soccer.",
    text: "I played on my high school's basketball team, and I'm the vice-president of a Vietnamese community soccer club here in Adelaide.",
    image: "hobby-sports.jpg",
  },
  {
    category: "Music",
    headline: "Piano, guitar, drums.",
    text: "I play piano, guitar, and a bit of drums.",
    image: "hobby-music.jpg",
  },
  {
    category: "Gaming",
    headline: "SmiteMe",
    text: "SmiteMe — a browser tool I built to practice smite timing on the dragon in League of Legends and Honor of Kings. It judges each tap Perfect to Too Slow and gets harder as you improve.",
    image: "hobby-gaming.png",
    link: { label: "Try it", href: "https://tnt57.github.io/SmiteMe" },
  },
];
