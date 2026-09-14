import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { Section } from "@/components/Section";
import { MetricStat } from "@/components/MetricStat";
import { pageMetadata } from "@/app/seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return pageMetadata({
      title: "Project not found",
      description: "This project doesn't exist.",
      path: `/projects/${slug}`,
    });
  }

  return pageMetadata({
    title: project.title,
    description: project.oneLine,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const hasLinks = Boolean(project.links?.demo || project.links?.repo);

  return (
    <div className="py-10">
      <Link
        href="/projects"
        className="font-mono text-sm text-text-muted transition-colors hover:text-accent"
      >
        &#8592; All projects
      </Link>

      <header className="mt-6 mb-10">
        <span className="inline-block rounded bg-accent px-2 py-0.5 font-mono text-[10.5px] font-semibold tracking-wide text-accent-contrast uppercase">
          {project.category}
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance text-text md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-text-muted">{project.role}</p>
      </header>

      <Section title="Problem">
        <p className="max-w-[66ch] text-text">{project.problem}</p>
      </Section>

      <Section title="Approach">
        <p className="max-w-[66ch] text-text">{project.approach}</p>
      </Section>

      <Section title="Result">
        <p className="mb-6 max-w-[66ch] text-text">{project.result}</p>
        <MetricStat metric={project.metric} explanation={project.metricExplanation} />
      </Section>

      <Section title="What I'd do differently">
        <p className="max-w-[66ch] text-text">{project.whatIdDoDifferently}</p>
      </Section>

      {hasLinks ? (
        <Section title="Links">
          <div className="flex flex-wrap gap-5">
            {project.links?.demo ? (
              <a
                href={project.links.demo}
                className="border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
              >
                View live demo &#8594;
              </a>
            ) : null}
            {project.links?.repo ? (
              <a
                href={project.links.repo}
                className="border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
              >
                View repo &#8594;
              </a>
            ) : null}
          </div>
        </Section>
      ) : null}
    </div>
  );
}
