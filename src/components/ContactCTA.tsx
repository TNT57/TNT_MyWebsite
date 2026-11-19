import Link from "next/link";
import { siteConfig } from "@/config/site";
import { availabilityRole } from "@/content/about";

// The giant "LET'S TALK" block near the bottom of most pages.
export function ContactCTA({ showResume = true }: { showResume?: boolean }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="flex flex-col gap-[clamp(20px,3vw,32px)] pt-[clamp(80px,10vw,136px)]"
    >
      <span className="flex items-center gap-2.5 font-mono text-[13px]">
        <span className="live-dot" aria-hidden="true" />
        {availabilityRole}
      </span>
      <h2
        id="contact-title"
        className="m-0 font-display text-[clamp(56px,13vw,200px)] leading-[0.84] font-bold tracking-[-0.065em] uppercase"
      >
        Let&apos;s <span className="outline-text">talk</span>
      </h2>
      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${siteConfig.email}`}
          className="btn btn-primary min-h-[54px] px-[30px] text-base"
        >
          Email me
        </a>
        <a href={siteConfig.linkedinUrl} className="btn btn-ghost min-h-[54px] px-7 text-base">
          LinkedIn
        </a>
        <a href={siteConfig.githubUrl} className="btn btn-ghost min-h-[54px] px-7 text-base">
          GitHub
        </a>
        {showResume ? (
          <Link href="/resume" className="btn btn-ghost min-h-[54px] px-7 text-base">
            Resume
          </Link>
        ) : null}
      </div>
    </section>
  );
}
