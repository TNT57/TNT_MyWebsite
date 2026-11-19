import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  availabilityLocation,
  background,
  homeIntro,
  hobbyItems,
} from "@/content/about";
import { projects } from "@/content/projects";
import { pad2 } from "@/lib/format";
import { proofStats, skills } from "@/content/home";
import { Container } from "@/components/Container";
import { GlowArea } from "@/components/GlowArea";
import { Marquee } from "@/components/Marquee";
import { ProjectRow } from "@/components/ProjectRow";
import { ContactCTA } from "@/components/ContactCTA";
import { ScrambleText } from "@/components/ScrambleText";
import { ProofStrip } from "@/components/ProofStrip";
import { SkillCards } from "@/components/SkillCards";
import { ArrowDown, ArrowUpRight } from "@/components/Icons";

const shownProjects = projects.filter((project) => project.status !== "archive");
const [study, internship] = background;
// Hobbies come from content/about.ts: the ones Nathan built (with a link)
// get their own card, the rest share one card.
const gaming = hobbyItems.find((item) => item.link);
const pastimes = hobbyItems.filter((item) => !item.link);

export default function Home() {
  return (
    <>
      <GlowArea>
        <Container className="relative">
          <header className="flex flex-col gap-[clamp(20px,3vw,36px)] pt-[clamp(32px,5vw,64px)] pb-[clamp(48px,6vw,80px)]">
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2.5 font-mono text-[13px] text-muted">
              <ScrambleText text={siteConfig.tagline} />
              <span className="flex items-center gap-2.5 text-text">
                <span className="live-dot" aria-hidden="true" />
                <ScrambleText text={`Open to graduate roles · ${availabilityLocation}`} delay={120} />
              </span>
            </div>

            <h1 className="sr-only">{siteConfig.name}</h1>
            <div className="font-display text-[clamp(68px,17.5vw,264px)] leading-[0.82] font-bold tracking-[-0.065em] uppercase">
              <span aria-hidden="true" className="rise rise-1 block">
                Nathan
              </span>
              <div className="flex flex-wrap items-end gap-[clamp(16px,3vw,48px)]">
                <span aria-hidden="true" className="rise rise-2 outline-text">
                  Tran
                </span>
                <div className="flex flex-[1_1_320px] flex-col gap-5 pb-[0.06em] font-sans text-[clamp(16px,1.45vw,19px)] leading-normal font-normal tracking-normal text-muted normal-case">
                  <p className="rise rise-4 m-0 max-w-[46ch] text-pretty">{homeIntro}</p>
                  <div className="rise rise-5 flex flex-wrap gap-3">
                    <a href="#work" className="btn btn-primary min-h-[52px] px-[26px] text-[15px]">
                      See the work <ArrowDown size={16} />
                    </a>
                    <Link href="/resume" className="btn btn-ghost min-h-[52px] px-[26px] text-[15px]">
                      Resume
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <ProofStrip stats={proofStats} />
          </header>
        </Container>
      </GlowArea>

      <Marquee />

      <Container>
        <section aria-labelledby="skills-title" className="pt-[clamp(64px,8vw,112px)]">
          <div className="mb-[clamp(28px,4vw,48px)] flex flex-wrap items-end justify-between gap-3">
            <div className="flex flex-col gap-3.5">
              <ScrambleText
                text="// what I can do for your team"
                start="view"
                className="font-mono text-[13px] text-accent"
              />
              <h2
                id="skills-title"
                className="m-0 font-display text-[clamp(40px,6.4vw,92px)] leading-[0.9] font-bold tracking-[-0.055em] uppercase"
              >
                What I can <span className="outline-text">do</span>
              </h2>
            </div>
            <span className="max-w-[38ch] font-mono text-[13px] text-muted">
              Every skill below points to a project that proves it.
            </span>
          </div>
          <SkillCards skills={skills} />
        </section>

        <section aria-labelledby="work-title" className="pt-[clamp(80px,10vw,136px)]">
          {/* The jump target sits on the heading row, so "See the work" lands on it. */}
          <div id="work" className="mb-[clamp(40px,6vw,80px)] flex flex-wrap items-end justify-between gap-3">
            <div className="flex flex-col gap-3.5">
              <ScrambleText
                text="// the proof, in detail"
                start="view"
                className="font-mono text-[13px] text-accent"
              />
              <h2
                id="work-title"
                className="m-0 font-display text-[clamp(40px,6.4vw,92px)] leading-[0.9] font-bold tracking-[-0.055em] uppercase"
              >
                Selected work
              </h2>
            </div>
            <span className="font-mono text-[13px] text-muted">
              ({pad2(shownProjects.length)}) projects, all built solo
            </span>
          </div>
          <div className="flex flex-col gap-[clamp(72px,9vw,128px)]">
            {shownProjects.map((project, index) => (
              <ProjectRow key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section aria-labelledby="human-title" className="pt-[clamp(80px,10vw,144px)]">
          <div className="mb-[clamp(28px,4vw,48px)] flex flex-wrap items-end justify-between gap-3">
            <h2
              id="human-title"
              className="m-0 font-display text-[clamp(40px,6.4vw,92px)] leading-[0.9] font-bold tracking-[-0.055em] uppercase"
            >
              The human
            </h2>
            <span className="font-mono text-[13px] text-muted">study, work, and outside of code</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              aria-label="About me: study and work"
              className="lift box-border flex min-w-0 flex-[1.6_1_420px] flex-wrap gap-6 rounded-[22px] border border-line bg-surface p-[clamp(22px,2.6vw,32px)]"
            >
              <Image
                src="/1691113000549.jpg"
                alt={`Photo of ${siteConfig.name}`}
                width={132}
                height={164}
                className="h-[164px] w-[132px] flex-none rounded-2xl border border-line-strong object-cover"
              />
              <div className="flex flex-[1_1_240px] flex-col gap-3.5">
                {[study, internship].map((item) => (
                  <div key={item.title} className="flex flex-col gap-0.5">
                    <span className="font-mono text-xs tracking-[0.1em] text-accent uppercase">{item.label}</span>
                    <span className="font-semibold">{item.title}</span>
                    <span className="text-[14.5px] text-muted">{item.detail}</span>
                  </div>
                ))}
              </div>
            </Link>

            <Link
              href="/hobby"
              aria-label={`Hobbies: ${pastimes.map((i) => i.category.toLowerCase()).join(" and ")}`}
              className="lift box-border flex min-w-0 flex-[1_1_240px] flex-col gap-3 rounded-[22px] border border-line bg-surface p-[clamp(22px,2.6vw,32px)]"
            >
              <span className="font-mono text-xs tracking-[0.1em] text-accent uppercase">
                {pastimes.map((i) => i.category).join(" + ")}
              </span>
              <span className="font-display text-2xl leading-[1.1] font-bold tracking-[-0.03em]">
                {pastimes.map((i) => i.headline).join(" ")}
              </span>
              <span className="text-[14.5px] text-muted">{pastimes.map((i) => i.text).join(" ")}</span>
            </Link>

            {gaming?.link ? (
              <a
                href={gaming.link.href}
                aria-label={`${gaming.headline}: ${gaming.link.label}`}
                target="_blank"
                rel="noopener noreferrer"
                className="lift box-border flex min-w-0 flex-[1_1_240px] flex-col gap-3 rounded-[22px] border border-line bg-surface p-[clamp(22px,2.6vw,32px)]"
              >
                <span className="font-mono text-xs tracking-[0.1em] text-accent uppercase">{gaming.category}</span>
                <span className="font-display text-2xl leading-[1.1] font-bold tracking-[-0.03em]">{gaming.headline}</span>
                <span className="text-[14.5px] text-muted">{gaming.text}</span>
                <span className="flex-auto" />
                <span className="flex min-h-11 items-center gap-2 text-sm font-medium text-accent">
                  {gaming.link.label} <ArrowUpRight />
                </span>
              </a>
            ) : null}
          </div>
        </section>

        <ContactCTA />
      </Container>
    </>
  );
}
