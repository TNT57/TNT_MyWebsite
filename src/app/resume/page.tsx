import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Resume",
  description: `Download ${siteConfig.name}'s resume.`,
  path: "/resume",
});

export default function ResumePage() {
  const resumeExists = fs.existsSync(
    path.join(process.cwd(), "public", "resume.pdf"),
  );

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold tracking-tight text-text">Resume</h1>

      {resumeExists ? (
        <>
          <p className="mt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-border text-base font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              View resume detail (PDF) &#8594;
            </a>
          </p>
          <iframe
            src="/resume.pdf#view=FitH"
            title={`${siteConfig.name}'s resume`}
            className="mt-6 aspect-[8.5/11] w-full rounded border border-border"
          />
        </>
      ) : (
        <p className="mt-4 max-w-[66ch] text-text-muted">
          Resume isn&apos;t uploaded yet. In the meantime, reach out directly
          at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="border-b border-border text-text transition-colors hover:border-accent hover:text-accent"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </div>
  );
}
