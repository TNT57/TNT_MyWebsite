import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { background } from "@/content/about";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/app/seo";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/ContactCTA";
import { ArrowRight, ArrowUpRight, Download } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "Resume",
  description: `Download ${siteConfig.name}'s resume.`,
  path: "/resume",
});

export default function ResumePage() {
  const resumeExists = fs.existsSync(
    path.join(process.cwd(), "public", "resume.pdf"),
  );

  const glance = [
    ...background,
    {
      label: "Projects",
      title: `${projects.length} solo builds`,
      detail: projects.map((p) => p.title).join(", ") + ".",
    },
  ];

  return (
    <>
      <PageHero
        eyebrowLeft={siteConfig.tagline}
        eyebrowRight="resume.pdf"
        titleClassName="text-[clamp(56px,13.5vw,204px)]"
        title={
          <>
            My <span className="outline-text">resume</span>
          </>
        }
      >
        {resumeExists ? (
          <div className="rise rise-2 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary min-h-[54px] px-7 text-base"
            >
              Open the PDF <ArrowUpRight size={15} />
            </a>
            <a href="/resume.pdf" download className="btn btn-ghost min-h-[54px] px-[26px] text-base">
              Download <Download size={15} />
            </a>
          </div>
        ) : null}
      </PageHero>

      <Container>
        <section className="flex flex-wrap items-start gap-[clamp(32px,6vw,88px)]">
          <div className="min-w-0 max-w-[640px] flex-[1.2_1_420px] overflow-hidden rounded-[18px] border border-line bg-surface shadow-[0_50px_120px_-50px_color-mix(in_srgb,var(--accent)_60%,transparent)]">
            <div className="flex items-center justify-between gap-3.5 border-b border-line px-4 py-3 font-mono text-[11.5px] text-muted">
              <span>resume.pdf</span>
              <span>fit to width</span>
            </div>
            {resumeExists ? (
              <iframe
                src="/resume.pdf#view=FitH"
                title={`${siteConfig.name}'s resume`}
                className="block aspect-[8.5/11] w-full bg-white"
              />
            ) : (
              <p className="m-0 p-6 text-muted">
                Resume isn&apos;t uploaded yet. In the meantime, reach out directly at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-text underline hover:text-accent">
                  {siteConfig.email}
                </a>
                .
              </p>
            )}
          </div>

          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-7">
            <h2 className="m-0 font-display text-[clamp(32px,4vw,56px)] leading-[0.95] font-bold tracking-[-0.05em] uppercase">
              At a glance
            </h2>
            <ul className="m-0 flex list-none flex-col border-b border-line p-0">
              {glance.map((item) => (
                <li key={item.title} className="flex flex-col gap-1 border-t border-line py-5">
                  <span className="font-mono text-xs tracking-[0.1em] text-accent uppercase">{item.label}</span>
                  <span className="font-display text-[21px] leading-[1.15] font-bold tracking-[-0.03em]">{item.title}</span>
                  <span className="text-[14.5px] text-muted">{item.detail}</span>
                </li>
              ))}
            </ul>
            <Link href="/projects" className="btn btn-ghost min-h-[50px] self-start px-6 text-[15px]">
              See the projects <ArrowRight />
            </Link>
          </div>
        </section>

        <ContactCTA showResume={false} />
      </Container>
    </>
  );
}
