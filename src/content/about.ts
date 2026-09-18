// Plain, editable strings — this file is meant to change often.
// Nothing here is coupled to component props; edit freely.

// Homepage bio paragraphs. Edit me freely.
export const bioParagraphs: string[] = [
  "I finished a Bachelor of Computer Science, majoring in Artificial Intelligence, at the University of Adelaide in 2026. I've interned as an AI engineer at Viettel Solutions, fine-tuning and evaluating NLP models before release, and worked as a research assistant automating threat-intelligence analysis with large language models.",
  "Outside coursework, I build full projects end to end: a RAG system that answers real Australian visa questions with cited sources, and a grocery price comparison app that tracks tens of thousands of real product prices across three supermarket chains.",
];

// Shown near the top of the homepage, as two short separate chips. Edit me freely.
export const availabilityLocation = "Adelaide, SA";
export const availabilityRole = "Open to graduate AI Engineer and SWE roles";

// Content for the /hobby route. Edit me freely.
export interface HobbyItem {
  category: string;
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
    text: "I played on my high school's basketball team, and I'm the vice-president of a Vietnamese community soccer club here in Adelaide.",
    image: "hobby-sports.jpg",
  },
  {
    category: "Music",
    text: "I play piano, guitar, and a bit of drums.",
    image: "hobby-music.jpg",
  },
  {
    category: "Gaming",
    text: "SmiteMe — a browser tool I built to practice smite timing on the dragon in League of Legends and Honor of Kings. It judges each tap Perfect to Too Slow and gets harder as you improve.",
    image: "hobby-gaming.png",
    link: { label: "Try it", href: "https://tnt57.github.io/SmiteMe" },
  },
];
