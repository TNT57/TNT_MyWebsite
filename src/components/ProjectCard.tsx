import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const href = project.links?.demo ?? project.links?.repo;
  const linkLabel = project.links?.demo
    ? "View live demo"
    : project.links?.repo
      ? "View repo"
      : undefined;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded border border-border bg-surface transition-shadow focus-within:shadow-[0_0_0_2px_var(--accent)] hover:shadow-[0_0_0_2px_var(--accent)]">
      {project.imageSrc ? (
        <div className="overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={`Screenshot of ${project.title}`}
            width={640}
            height={360}
            className="aspect-video w-full object-cover brightness-90 transition-all duration-300 group-hover:scale-105 group-hover:brightness-105"
          />
        </div>
      ) : (
        <span
          role="img"
          aria-label={`Placeholder screenshot for ${project.title}`}
          className="block aspect-video w-full bg-[repeating-linear-gradient(135deg,var(--border)_0_1px,transparent_1px_14px)] brightness-90 transition-all duration-300 group-hover:brightness-110"
        />
      )}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="self-start rounded bg-accent px-2 py-0.5 font-mono text-[10.5px] font-semibold tracking-wide text-accent-contrast uppercase">
          {project.category}
        </span>
        <h3 className="line-clamp-2 text-base font-bold tracking-tight text-text">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            {project.title}
          </Link>
        </h3>
        <p className="line-clamp-3 flex-1 text-sm text-text-muted">{project.oneLine}</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="mt-1 self-start border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Case study &#8594;
          </Link>
          {href && linkLabel ? (
            <a
              href={href}
              className="mt-1 self-start border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {linkLabel} &#8594;
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
