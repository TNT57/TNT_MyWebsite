import { projects } from "@/content/projects";
import { pageMetadata } from "@/app/seo";
import { ProjectsClient } from "./ProjectsClient";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Everything I've built, filterable by kind.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold tracking-tight text-text">Projects</h1>
      <p className="mt-2 mb-8 max-w-[66ch] text-text-muted">
        Everything I&apos;ve built, filterable by kind. Archived projects are
        shown de-emphasised below the current ones.
      </p>
      <ProjectsClient projects={projects} />
    </div>
  );
}
