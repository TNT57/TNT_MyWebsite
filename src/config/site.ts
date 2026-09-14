// Single source of truth for site-wide values.
// Every page/component should import from here — never hardcode a URL elsewhere.
export const siteConfig = {
  name: "Nathan Tran",
  tagline: "Graduate AI Engineer / Software Engineer",
  location: "Adelaide, South Australia",
  url: "https://tnt-website-jet.vercel.app",
  email: "trung.tn05@gmail.com",
  githubUrl: "https://github.com/TNT57",
  linkedinUrl: "https://www.linkedin.com/in/nathan-tran-8e38e6/",
} as const;
