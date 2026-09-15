import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { bioParagraphs, availabilityLocation, availabilityRole } from "@/content/about";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "About",
  description: `About ${siteConfig.name}: background, education, and links.`,
  path: "/about",
});

// Not in about.ts (about.ts is out of scope for this change) but it's real,
// sourced from the CV — not invented.
const education = {
  degree: "Bachelor of Computer Science, Major in Artificial Intelligence",
  institution: "University of Adelaide (Global Citizens Scholarship)",
  years: "2023–2026",
  gpa: "GPA: 6.7/7.00",
};

export default function AboutPage() {
  const photoExists = fs.existsSync(
    path.join(process.cwd(), "public", "profile.jpg"),
  );

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold tracking-tight text-text">About</h1>

      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
        {photoExists ? (
          <Image
            src="/profile.jpg"
            alt={`Photo of ${siteConfig.name}`}
            width={192}
            height={240}
            className="aspect-[4/5] w-40 flex-none rounded border border-border object-cover sm:w-48"
          />
        ) : (
          <span
            role="img"
            aria-label={`Placeholder for a photo of ${siteConfig.name}`}
            className="block aspect-[4/5] w-40 flex-none rounded border border-border bg-[repeating-linear-gradient(135deg,var(--border)_0_1px,transparent_1px_14px)] sm:w-48"
          />
        )}
        <div className="max-w-[66ch]">
          {bioParagraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 text-base text-text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-2 mb-10 flex flex-wrap gap-3">
        <span className="inline-flex items-center rounded bg-accent px-3.5 py-1.5 font-mono text-[12.5px] font-semibold text-accent-contrast">
          {availabilityLocation}
        </span>
        <span className="inline-flex items-center rounded bg-accent px-3.5 py-1.5 font-mono text-[12.5px] font-semibold text-accent-contrast">
          {availabilityRole}
        </span>
      </div>

      <Section title="Education">
        <p className="text-text">{education.degree}</p>
        <p className="mt-1 text-text-muted">
          {education.institution} &middot; {education.years}
        </p>
        <p className="mt-1 font-mono text-sm text-text-muted">{education.gpa}</p>
      </Section>

      <Section title="Links">
        <div className="flex flex-wrap gap-5">
          <a
            href={siteConfig.githubUrl}
            className="border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedinUrl}
            className="border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            Email
          </a>
        </div>
      </Section>
    </div>
  );
}
