import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { hobbyIntro, hobbyItems, type HobbyItem } from "@/content/about";
import { pageMetadata } from "@/app/seo";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { TiltCard } from "@/components/TiltCard";
import { BrowserFrame, hostOf } from "@/components/BrowserFrame";
import { ContactCTA } from "@/components/ContactCTA";
import { ArrowUpRight } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "Hobby",
  description: `A few things ${siteConfig.name} does outside of code.`,
  path: "/hobby",
});

const pad = (n: number) => String(n).padStart(2, "0");

function imageExists(item: HobbyItem) {
  return fs.existsSync(path.join(process.cwd(), "public", item.image));
}

export default function HobbyPage() {
  // Items with a link (things Nathan built) get the big feature layout.
  const cards = hobbyItems.filter((item) => !item.link);
  const features = hobbyItems.filter((item) => item.link);

  return (
    <>
      <PageHero
        eyebrowLeft={hobbyIntro}
        eyebrowRight={`(${pad(hobbyItems.length)}) ${hobbyItems.map((i) => i.category.toLowerCase()).join(", ")}`}
        titleClassName="max-w-[9ch] text-[clamp(56px,13vw,196px)]"
        title={
          <>
            Outside <span className="outline-text">of code</span>
          </>
        }
      />

      <Container>
        <section
          aria-label="Hobbies"
          className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-[clamp(20px,2.4vw,32px)]"
        >
          {cards.map((item) => (
            <article
              key={item.category}
              className="group lift flex flex-col overflow-hidden rounded-3xl border border-line bg-surface"
            >
              {imageExists(item) ? (
                <Image
                  src={`/${item.image}`}
                  alt={`Photo for ${item.category}`}
                  width={800}
                  height={400}
                  className="aspect-[2/1] w-full object-cover"
                />
              ) : (
                <span
                  role="img"
                  aria-label={`Placeholder for a ${item.category} photo`}
                  className="placeholder-stripes flex aspect-[2/1] items-center justify-center border-b border-dashed border-line-strong"
                >
                  <span className="rounded-full border border-line-strong bg-bg px-3 py-1.5 font-mono text-xs text-muted">
                    Photo coming soon
                  </span>
                </span>
              )}
              <div className="flex flex-col gap-3.5 p-[clamp(22px,2.8vw,36px)]">
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="outline-num font-display text-[56px] leading-[0.9] font-bold tracking-[-0.05em]"
                  >
                    {pad(hobbyItems.indexOf(item) + 1)}
                  </span>
                  <span className="font-mono text-xs tracking-[0.1em] text-accent uppercase">{item.category}</span>
                </div>
                <h2 className="m-0 font-display text-[clamp(26px,2.8vw,38px)] leading-[1.05] font-bold tracking-[-0.04em]">
                  {item.headline}
                </h2>
                <p className="m-0 max-w-[52ch] text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        {features.map((item) => (
          <article
            key={item.category}
            className="group flex flex-wrap items-center gap-[clamp(28px,5vw,72px)] pt-[clamp(72px,9vw,128px)]"
          >
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-[18px]">
              <div className="flex items-baseline gap-[18px]">
                <span
                  aria-hidden="true"
                  className="outline-num font-display text-[clamp(56px,6vw,88px)] leading-[0.9] font-bold tracking-[-0.05em]"
                >
                  {pad(hobbyItems.indexOf(item) + 1)}
                </span>
                <span className="font-mono text-xs tracking-[0.1em] text-accent uppercase">{item.category}</span>
              </div>
              <h2 className="m-0 font-display text-[clamp(40px,6vw,88px)] leading-[0.92] font-bold tracking-[-0.055em] uppercase">
                {item.headline}
              </h2>
              <p className="m-0 max-w-[50ch] text-[clamp(16px,1.35vw,18px)] text-soft">{item.text}</p>
              {item.link ? (
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary min-h-[50px] px-6 text-[15px]"
                  >
                    {item.link.label} <ArrowUpRight />
                  </a>
                </div>
              ) : null}
            </div>
            <TiltCard lean="right" className="min-w-0 flex-[1.35_1_440px]">
              <BrowserFrame label={item.link ? `${hostOf(item.link.href)}${new URL(item.link.href).pathname}` : item.category}>
                {imageExists(item) ? (
                  <Image
                    src={`/${item.image}`}
                    alt={`Screenshot of ${item.headline}`}
                    width={1875}
                    height={910}
                    sizes="(min-width: 900px) 55vw, 100vw"
                    className="tilt-shot block aspect-[16/10] w-full object-cover object-[center_22%]"
                  />
                ) : (
                  <span className="placeholder-stripes block aspect-[16/10] w-full" />
                )}
              </BrowserFrame>
            </TiltCard>
          </article>
        ))}

        <ContactCTA />
      </Container>
    </>
  );
}
