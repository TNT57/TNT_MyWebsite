import type { Project } from "@/content/projects";
import { TiltCard } from "@/components/TiltCard";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ProjectLinks } from "@/components/ProjectLinks";

interface ProjectRowProps {
  project: Project;
  index: number;
}

export function categoryLabel(project: Project): string {
  return project.subCategory
    ? `${project.category} · ${project.subCategory}`
    : project.category;
}

// Homepage: one big row per project, screenshot alternating left/right.
export function ProjectRow({ project, index }: ProjectRowProps) {
  const flipped = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`group flex flex-wrap items-center gap-[clamp(28px,5vw,72px)] ${
        flipped ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-[18px]">
        <div className="flex items-baseline gap-[18px]">
          <span
            aria-hidden="true"
            className="outline-num font-display text-[clamp(56px,6vw,88px)] leading-[0.9] font-bold tracking-[-0.05em]"
          >
            {number}
          </span>
          <span className="font-mono text-xs tracking-[0.1em] text-accent uppercase">
            {categoryLabel(project)}
          </span>
        </div>
        <h3 className="m-0 font-display text-[clamp(28px,3.3vw,46px)] leading-[1.02] font-bold tracking-[-0.04em] text-balance">
          {project.title}
        </h3>
        <p className="m-0 max-w-[50ch] text-muted">{project.oneLine}</p>
        {project.headline ? (
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
            <span className="font-display text-[clamp(44px,5vw,72px)] leading-none font-bold tracking-[-0.05em] text-accent [text-shadow:0_0_50px_color-mix(in_srgb,var(--accent)_55%,transparent)]">
              {project.headline.value}
            </span>
            <span className="flex-[1_1_200px] text-[14.5px] text-soft">
              {project.headline.label}
            </span>
          </div>
        ) : null}
        <ProjectLinks project={project} />
      </div>
      <TiltCard
        lean={flipped ? "right" : "left"}
        className="min-w-0 flex-[1.35_1_440px]"
      >
        <ProjectVisual project={project} priority={index === 0} />
      </TiltCard>
    </article>
  );
}
