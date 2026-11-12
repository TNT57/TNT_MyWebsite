import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isTodo, projects, type Project } from "@/content/projects";
import { pageMetadata } from "@/app/seo";
import { Container } from "@/components/Container";
import { GlowArea } from "@/components/GlowArea";
import { TiltCard } from "@/components/TiltCard";
import { ProjectVisual } from "@/components/ProjectVisual";
import { categoryLabel } from "@/components/ProjectRow";
import { ArrowLeft, ArrowUpRight } from "@/components/Icons";

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

// Draws one word of the title as glowing outline text.
function OutlinedTitle({ project }: { project: Project }) {
  const word = project.titleOutline;
  const at = word ? project.title.indexOf(word) : -1;
  if (!word || at < 0) return <>{project.title}</>;
  return (
    <>
      {project.title.slice(0, at)}
      <span className="outline-text">{word}</span>
      {project.title.slice(at + word.length)}
    </>
  );
}

function SectionRow({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="group flex flex-wrap gap-x-[clamp(24px,5vw,80px)] gap-y-5">
      <div className="flex flex-[0_1_300px] items-baseline gap-4">
        <span
          aria-hidden="true"
          className="outline-num font-display text-[clamp(56px,6vw,88px)] leading-[0.9] font-bold tracking-[-0.05em]"
        >
          {number}
        </span>
        <h2 className="m-0 font-display text-[clamp(26px,2.6vw,36px)] leading-none font-bold tracking-[-0.04em] uppercase">
          {title}
        </h2>
      </div>
      <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-9">{children}</div>
    </section>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="m-0 max-w-[66ch] text-[clamp(17px,1.5vw,20px)] leading-[1.6] text-pretty text-soft">
      {children}
    </p>
  );
}

function Bar({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`w-[52px] flex-none ${accent ? "text-text" : ""}`}>{label}</span>
      <div className="h-1.5 flex-auto rounded-[3px] bg-[#121a26]">
        <div
          className={`bar-grow h-full rounded-[3px] ${
            accent ? "bg-accent shadow-[0_0_14px_var(--accent)]" : "bg-[#4a586e]"
          }`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className={`w-10 flex-none text-right ${accent ? "text-text" : ""}`}>{value}%</span>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const pad = (n: number) => String(n).padStart(2, "0");

  // Sections skip text that is still a TODO placeholder.
  const showResultNumbers = Boolean(project.stats?.length) && !isTodo(project.metric);

  return (
    <>
      <GlowArea>
        <Container className="relative">
          <header className="flex flex-col gap-[clamp(20px,3vw,32px)] pt-[clamp(24px,4vw,48px)] pb-[clamp(40px,5vw,64px)]">
            <div className="rise flex flex-wrap items-center justify-between gap-x-6 gap-y-2.5 font-mono text-[13px] text-muted">
              <Link href="/projects" className="flex min-h-11 items-center gap-2 transition-colors hover:text-accent">
                <ArrowLeft /> All projects
              </Link>
              <span className="text-accent">
                ({pad(index + 1)}) {categoryLabel(project)}
              </span>
            </div>
            <h1 className="rise rise-1 m-0 font-display text-[clamp(38px,7.4vw,112px)] leading-[0.9] font-bold tracking-[-0.06em] text-balance uppercase">
              <OutlinedTitle project={project} />
            </h1>
            <p className="rise rise-2 m-0 max-w-[58ch] text-[clamp(17px,1.6vw,21px)] text-pretty text-soft">
              {project.oneLine}
            </p>
            <div className="rise rise-3 flex flex-wrap gap-x-[clamp(24px,4vw,64px)] gap-y-5 border-t border-line pt-6">
              <div className="flex flex-[1_1_240px] flex-col gap-1.5">
                <span className="font-mono text-xs tracking-[0.1em] text-muted uppercase">Role</span>
                <span className="text-[15px]">{project.role}</span>
              </div>
              <div className="flex flex-[1_1_240px] flex-col gap-1.5">
                <span className="font-mono text-xs tracking-[0.1em] text-muted uppercase">Built with</span>
                <span className="text-[15px]">{project.stack.join(", ")}</span>
              </div>
              <div className="flex flex-[1_1_240px] flex-wrap items-center gap-2.5">
                {project.links?.demo ? (
                  <a href={project.links.demo} className="btn btn-primary min-h-12 px-[22px] text-[14.5px]">
                    Live demo <ArrowUpRight />
                  </a>
                ) : null}
                {project.links?.repo ? (
                  <a
                    href={project.links.repo}
                    className={`btn min-h-12 px-[22px] text-[14.5px] ${project.links.demo ? "btn-ghost" : "btn-primary"}`}
                  >
                    Repo <ArrowUpRight />
                  </a>
                ) : null}
              </div>
            </div>
          </header>
        </Container>
      </GlowArea>

      <Container>
        <TiltCard lean="up" strength={7} className="mx-auto max-w-[1120px]" cardClassName="rounded-[20px]">
          <ProjectVisual project={project} variant="hero" priority />
        </TiltCard>

        <div className="flex flex-col gap-[clamp(64px,8vw,112px)] pt-[clamp(72px,9vw,128px)]">
          <SectionRow number="01" title="Problem">
            <Prose>{project.problem}</Prose>
          </SectionRow>

          <SectionRow number="02" title="Approach">
            <Prose>{project.approach}</Prose>
            <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(170px,100%),1fr))] gap-4 p-0">
              {project.pipeline.map((step, i) => (
                <li key={step.step} className="flex flex-col gap-2.5">
                  <div className="flow-line" aria-hidden="true" />
                  <span className="font-mono text-xs text-accent">
                    {i + 1} {step.step}
                  </span>
                  <span className="font-display text-xl font-bold tracking-[-0.03em]">{step.title}</span>
                  <span className="text-sm text-muted">{step.text}</span>
                </li>
              ))}
            </ol>
          </SectionRow>

          <SectionRow number="03" title="Result">
            <Prose>{project.result}</Prose>
            {showResultNumbers ? (
              <>
                <div className="flex flex-wrap gap-4">
                  {project.stats?.map((stat) => (
                    <div
                      key={stat.label}
                      className="box-border flex min-w-0 flex-[1_1_280px] flex-col gap-4 rounded-[22px] border border-line bg-surface p-[clamp(22px,2.6vw,32px)]"
                    >
                      <span className="font-mono text-xs tracking-[0.1em] text-muted uppercase">{stat.label}</span>
                      <span className="font-display text-[clamp(56px,7vw,112px)] leading-[0.9] font-bold tracking-[-0.06em] text-accent [text-shadow:0_0_60px_color-mix(in_srgb,var(--accent)_55%,transparent)]">
                        {stat.value}
                      </span>
                      {stat.after !== undefined ? (
                        <div className="flex flex-col gap-2 font-mono text-xs text-muted">
                          {stat.before !== undefined ? <Bar label="before" value={stat.before} /> : null}
                          <Bar label={stat.before !== undefined ? "now" : "score"} value={stat.after} accent />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
                {!isTodo(project.metricExplanation) ? (
                  <div className="flex max-w-[66ch] flex-col gap-2">
                    <span className="font-mono text-xs tracking-[0.1em] text-accent uppercase">In plain English</span>
                    <p className="m-0 text-muted">{project.metricExplanation}</p>
                  </div>
                ) : null}
              </>
            ) : null}
          </SectionRow>

          {!isTodo(project.whatIdDoDifferently) ? (
            <SectionRow number="04" title="Next time">
              <Prose>{project.whatIdDoDifferently}</Prose>
            </SectionRow>
          ) : null}
        </div>

        <Link
          href={`/projects/${next.slug}`}
          className="next-link mt-[clamp(80px,10vw,136px)] flex flex-col gap-3.5 border-y border-line py-[clamp(32px,5vw,56px)]"
        >
          <span className="font-mono text-[13px] text-muted">
            Next project ({pad(projects.indexOf(next) + 1)})
          </span>
          <span
            className={`flex flex-wrap items-center gap-x-[clamp(16px,3vw,40px)] gap-y-3 font-display leading-[0.88] font-bold tracking-[-0.065em] uppercase ${
              next.title.length > 20 ? "text-[clamp(36px,6vw,96px)]" : "text-[clamp(44px,9vw,140px)]"
            }`}
          >
            <span className="next-word">{next.title}</span>
            <svg
              className="next-arrow size-[0.7em] text-accent"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12h16M13 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </Container>
    </>
  );
}
