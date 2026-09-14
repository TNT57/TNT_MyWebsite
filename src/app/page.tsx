import { siteConfig } from "@/config/site";
import { bioParagraphs, availabilityLocation, availabilityRole } from "@/content/about";
import { projects } from "@/content/projects";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

const featuredProjects = projects.filter(
  (project) => project.status === "featured",
);

export default function Home() {
  return (
    <>
      <header className="pt-10 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-balance text-text md:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-2 text-lg text-text-muted">{siteConfig.tagline}</p>
        <p className="mt-1 font-mono text-sm text-text-muted">
          {siteConfig.location}
        </p>
        <div className="mt-5 flex flex-wrap gap-4">
          <a
            href={siteConfig.githubUrl}
            className="border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedinUrl}
            className="border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Email
          </a>
          <a
            href="/resume"
            className="border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Resume
          </a>
        </div>
      </header>

      <div className="max-w-[66ch]">
        {bioParagraphs.map((paragraph) => (
          <p key={paragraph} className="mb-4 text-base text-text">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-2 mb-16 flex flex-wrap gap-3">
        <span className="inline-flex items-center rounded bg-accent px-3.5 py-1.5 font-mono text-[12.5px] font-semibold text-accent-contrast">
          {availabilityLocation}
        </span>
        <span className="inline-flex items-center rounded bg-accent px-3.5 py-1.5 font-mono text-[12.5px] font-semibold text-accent-contrast">
          {availabilityRole}
        </span>
      </div>

      <Section title="Selected work">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
