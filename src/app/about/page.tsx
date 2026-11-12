import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  aboutLead,
  aboutLeadHighlight,
  availabilityLocation,
  background,
  bioParagraphs,
} from "@/content/about";
import { pageMetadata } from "@/app/seo";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { TiltCard } from "@/components/TiltCard";
import { Marquee } from "@/components/Marquee";
import { ContactCTA } from "@/components/ContactCTA";
import { ArrowRight } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "About",
  description: `About ${siteConfig.name}: background, education, and links.`,
  path: "/about",
});

export default function AboutPage() {
  const photoExists = fs.existsSync(
    path.join(process.cwd(), "public", "1691113000549.jpg"),
  );

  return (
    <>
      <PageHero
        eyebrowLeft={siteConfig.tagline}
        eyebrowRight={
          <span className="flex items-center gap-2.5 text-text">
            <span className="live-dot" aria-hidden="true" />
            Open to graduate roles &middot; {availabilityLocation}
          </span>
        }
        title={
          <>
            About <span className="outline-text">me</span>
          </>
        }
      />

      <Container>
        <section className="flex flex-wrap items-start gap-[clamp(32px,6vw,96px)]">
          <TiltCard lean="right" strength={14} className="min-w-0 flex-[0_1_380px]" cardClassName="rounded-[22px]">
            {photoExists ? (
              <Image
                src="/1691113000549.jpg"
                alt={`Photo of ${siteConfig.name}`}
                width={400}
                height={500}
                priority
                className="block aspect-[4/5] w-full object-cover"
              />
            ) : (
              <span
                role="img"
                aria-label={`Placeholder for a photo of ${siteConfig.name}`}
                className="placeholder-stripes block aspect-[4/5] w-full"
              />
            )}
            <div className="flex items-center justify-between gap-3 border-t border-line px-[18px] py-3.5 font-mono text-xs text-muted">
              <span className="text-text">{siteConfig.name}</span>
              <span>{siteConfig.location}</span>
            </div>
          </TiltCard>

          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6">
            <p className="m-0 max-w-[34ch] font-display text-[clamp(26px,3vw,42px)] leading-[1.12] font-medium tracking-[-0.035em] text-balance">
              {aboutLead} <span className="text-accent">{aboutLeadHighlight}</span>
            </p>
            {bioParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="m-0 max-w-[66ch] text-[clamp(16px,1.35vw,18px)] leading-[1.65] text-pretty text-soft"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <Link href="/projects" className="btn btn-primary min-h-[50px] px-6 text-[15px]">
                See the work <ArrowRight />
              </Link>
              <a href={siteConfig.githubUrl} className="btn btn-ghost min-h-[50px] px-6 text-[15px]">
                GitHub
              </a>
              <a href={siteConfig.linkedinUrl} className="btn btn-ghost min-h-[50px] px-6 text-[15px]">
                LinkedIn
              </a>
              <a href={`mailto:${siteConfig.email}`} className="btn btn-ghost min-h-[50px] px-6 text-[15px]">
                Email
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="background-title" className="pt-[clamp(80px,10vw,144px)]">
          <div className="mb-[clamp(24px,4vw,48px)] flex flex-wrap items-end justify-between gap-3">
            <h2
              id="background-title"
              className="m-0 font-display text-[clamp(40px,6.4vw,92px)] leading-[0.9] font-bold tracking-[-0.055em] uppercase"
            >
              Background
            </h2>
            <span className="font-mono text-[13px] text-muted">study and work</span>
          </div>
          <ul className="m-0 flex list-none flex-col border-b border-line p-0">
            {background.map((item) => (
              <li
                key={item.title}
                className="slide-row flex flex-wrap items-baseline gap-x-[clamp(20px,4vw,56px)] gap-y-2.5 border-t border-line py-[clamp(22px,3vw,36px)]"
              >
                <span className="flex-[0_0_190px] font-mono text-xs tracking-[0.1em] text-accent uppercase">
                  {item.label}
                </span>
                <span className="slide-row-title flex-[1_1_360px] font-display text-[clamp(22px,2.5vw,34px)] leading-[1.1] font-bold tracking-[-0.035em]">
                  {item.title}
                </span>
                <span className="flex-[1_1_300px] text-[15.5px] text-muted">{item.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <Marquee className="mt-[clamp(72px,9vw,120px)]" />

      <Container>
        <ContactCTA />
      </Container>
    </>
  );
}
