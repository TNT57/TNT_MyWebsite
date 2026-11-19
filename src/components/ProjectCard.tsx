import type { Project } from "@/content/projects";
import { TiltCard } from "@/components/TiltCard";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ProjectLinks } from "@/components/ProjectLinks";
import { categoryLabel } from "@/components/ProjectRow";

interface ProjectCardProps {
  project: Project;
  number: string;
}

// /projects grid card: tilting screenshot on top, text below.
export function ProjectCard({ project, number }: ProjectCardProps) {
  return (
    <article className="group flex min-w-0 flex-col gap-[22px]">
      <TiltCard strength={10}>
        <ProjectVisual project={project} />
      </TiltCard>
      <div className="flex flex-col gap-3.5">
        <div className="flex items-baseline gap-4">
          <span
            aria-hidden="true"
            className="outline-num font-display text-[56px] leading-[0.9] font-bold tracking-[-0.05em]"
          >
            {number}
          </span>
          <span className="font-mono text-xs tracking-[0.1em] text-accent uppercase">
            {categoryLabel(project)}
          </span>
        </div>
        <h2 className="m-0 font-display text-[clamp(26px,2.6vw,36px)] leading-[1.05] font-bold tracking-[-0.04em] text-balance">
          {project.title}
        </h2>
        <p className="m-0 max-w-[54ch] text-muted">{project.oneLine}</p>
        {project.headline ? (
          <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
            <span className="font-display text-[44px] leading-none font-bold tracking-[-0.05em] text-accent">
              {project.headline.value}
            </span>
            <span className="flex-[1_1_200px] text-[14.5px] text-soft">
              {project.headline.label}
            </span>
          </div>
        ) : null}
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
