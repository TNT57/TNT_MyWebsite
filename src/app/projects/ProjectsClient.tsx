"use client";

import { useState } from "react";
import type { Project } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

interface ProjectsClientProps {
  projects: Project[];
}

const ALL = "All";

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const [active, setActive] = useState<string>(ALL);

  const visible =
    active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-6">
        {[ALL, ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`border-b-2 pb-1 font-mono text-sm transition-colors ${
              active === category
                ? "border-accent text-accent"
                : "border-transparent text-text-muted hover:text-accent"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {visible.map((project) => (
          <div
            key={project.slug}
            className={project.status === "archive" ? "opacity-60 grayscale" : undefined}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
