// Single source of truth for site-wide values.
// Every page/component should import from here — never hardcode a URL elsewhere.
export const siteConfig = {
  name: "Nathan Tran",
  tagline: "Graduate AI Engineer / Software Engineer",
  location: "Adelaide, South Australia",
  // TODO: set the real canonical URL once this site is deployed to Vercel.
  url: "TODO: canonical deploy URL (e.g. https://<project-name>.vercel.app)",
  email: "trung.tn05@gmail.com",
  githubUrl: "https://github.com/TNT57",
  linkedinUrl: "https://linkedin.com/in/nathan-tran",
} as const;
