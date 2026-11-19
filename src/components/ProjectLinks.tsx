import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";

// "Case study" + the best outside link (live demo, else repo).
export function ProjectLinks({ project }: { project: Project }) {
  const outside = project.links?.demo
    ? { href: project.links.demo, label: "Live demo" }
    : project.links?.repo
      ? { href: project.links.repo, label: "Repo" }
      : undefined;

  return (
    <div className="flex flex-wrap gap-2.5">
      <Link
        href={`/projects/${project.slug}`}
        className="btn btn-ghost min-h-[46px] px-5 text-sm"
      >
        Case study <ArrowRight />
      </Link>
      {outside ? (
        <a href={outside.href} className="btn btn-ghost min-h-[46px] px-5 text-sm">
          {outside.label} <ArrowUpRight />
        </a>
      ) : null}
    </div>
  );
}
