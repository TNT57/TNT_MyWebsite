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
import { Container } from "@/components/Container";
import { GlowArea } from "@/components/GlowArea";
import { Marquee } from "@/components/Marquee";
import { ProjectRow } from "@/components/ProjectRow";
import { ContactCTA } from "@/components/ContactCTA";
import { ArrowDown, ArrowUpRight } from "@/components/Icons";

const shownProjects = projects.filter((project) => project.status !== "archive");
const [study, internship] = background;
const gaming = hobbyItems.find((item) => item.link);

export default function Home() {
  return (
    <>
      <GlowArea>
        <Container className="relative">
          <header className="flex flex-col gap-[clamp(20px,3vw,36px)] pt-[clamp(32px,5vw,64px)] pb-[clamp(48px,6vw,80px)]">
            <div className="rise flex flex-wrap items-center justify-between gap-x-6 gap-y-2.5 font-mono text-[13px] text-muted">
              <span>{siteConfig.tagline}</span>
              <span className="flex items-center gap-2.5 text-text">
                <span className="live-dot" aria-hidden="true" />
                Open to graduate roles &middot; {availabilityLocation}
              </span>
            </div>

            <h1 className="sr-only">{siteConfig.name}</h1>
            <div className="font-display text-[clamp(68px,17.5vw,264px)] leading-[0.82] font-bold tracking-[-0.065em] uppercase">
              <span aria-hidden="true" className="rise rise-1 block">
                Nathan
              </span>
              <div className="rise rise-2 flex flex-wrap items-end gap-[clamp(16px,3vw,48px)]">
                <span aria-hidden="true" className="outline-text">
                  Tran
                </span>
                <div className="flex flex-[1_1_320px] flex-col gap-5 pb-[0.06em] font-sans text-[clamp(16px,1.45vw,19px)] leading-normal font-normal tracking-normal text-muted normal-case">
                  <p className="m-0 max-w-[46ch] text-pretty">{homeIntro}</p>
                  <div className="flex flex-wrap gap-3">
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
          </header>
        </Container>
      </GlowArea>

      <Marquee />

      <Container>
        <section id="work" aria-labelledby="work-title" className="scroll-mt-6 pt-[clamp(64px,8vw,112px)]">
          <div className="mb-[clamp(40px,6vw,80px)] flex flex-wrap items-end justify-between gap-3">
            <h2
              id="work-title"
              className="m-0 font-display text-[clamp(40px,6.4vw,92px)] leading-[0.9] font-bold tracking-[-0.055em] uppercase"
            >
              Selected work
            </h2>
            <span className="font-mono text-[13px] text-muted">
              ({String(shownProjects.length).padStart(2, "0")}) projects, all built solo
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
              className="lift box-border flex min-w-0 flex-[1_1_240px] flex-col gap-3 rounded-[22px] border border-line bg-surface p-[clamp(22px,2.6vw,32px)]"
            >
              <span className="font-mono text-xs tracking-[0.1em] text-accent uppercase">Sports + music</span>
              <span className="font-display text-2xl leading-[1.1] font-bold tracking-[-0.03em]">
                Basketball, soccer, piano, guitar.
              </span>
              <span className="text-[14.5px] text-muted">
                I&apos;m vice-president of a Vietnamese community soccer club here in Adelaide, and I play a bit of drums too.
              </span>
            </Link>

            {gaming?.link ? (
              <a
                href={gaming.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="lift box-border flex min-w-0 flex-[1_1_240px] flex-col gap-3 rounded-[22px] border border-line bg-surface p-[clamp(22px,2.6vw,32px)]"
              >
                <span className="font-mono text-xs tracking-[0.1em] text-accent uppercase">{gaming.category}</span>
                <span className="font-display text-2xl leading-[1.1] font-bold tracking-[-0.03em]">{gaming.headline}</span>
                <span className="text-[14.5px] text-muted">
                  A browser tool I built to practise smite timing on the dragon. It gets harder as you improve.
                </span>
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
