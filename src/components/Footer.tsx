import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border py-6 text-sm text-text-muted">
      <span>
        &copy; {year} {siteConfig.name}
      </span>
      <div className="flex flex-wrap gap-4">
        <a
          href={siteConfig.githubUrl}
          className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          GitHub
        </a>
        <a
          href={siteConfig.linkedinUrl}
          className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
