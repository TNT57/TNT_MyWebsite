"use client";

import { useState } from "react";
import type { Project } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

interface ProjectsClientProps {
  projects: Project[];
}

const ALL = "All";
const pad = (n: number) => String(n).padStart(2, "0");

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const [active, setActive] = useState<string>(ALL);

  const filters = [ALL, ...categories].map((label) => ({
    label,
    count: label === ALL ? projects.length : projects.filter((p) => p.category === label).length,
  }));

  // Archived projects go last, de-emphasised.
  const visible = projects
    .map((project, index) => ({ project, number: pad(index + 1) }))
    .filter(({ project }) => active === ALL || project.category === active)
    .sort((a, b) => Number(a.project.status === "archive") - Number(b.project.status === "archive"));

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by kind"
        className="rise rise-2 -mt-[clamp(8px,2vw,24px)] mb-[clamp(36px,5vw,56px)] flex flex-wrap gap-2.5"
      >
        {filters.map(({ label, count }) => {
          const on = active === label;
          return (
            <button
              key={label}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(label)}
              className={`btn min-h-[46px] cursor-pointer px-5 text-sm font-semibold ${
                on ? "btn-primary" : "btn-ghost"
              }`}
            >
              {label}
              <span className="font-mono text-xs font-medium">{pad(count)}</span>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(480px,100%),1fr))] gap-x-[clamp(24px,3vw,40px)] gap-y-[clamp(40px,5vw,72px)]">
        {visible.map(({ project, number }) => (
          <div
            key={project.slug}
            className={project.status === "archive" ? "opacity-60 grayscale" : undefined}
          >
            <ProjectCard project={project} number={number} />
          </div>
        ))}
      </div>
    </div>
  );
}
