import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Hobby",
  description: `A few things ${siteConfig.name} does outside of code — coming soon.`,
  path: "/hobby",
});

// Temporarily showing an "in progress" state instead of the real hobby
// content while it gets rewritten. The actual copy still lives in
// src/content/about.ts (hobbyIntro / hobbyItems) — swap this page back to
// reading from there whenever it's ready.
export default function HobbyPage() {
  return (
    <div className="py-10">
      <span className="inline-flex items-center rounded bg-accent px-3.5 py-1.5 font-mono text-[12.5px] font-semibold text-accent-contrast">
        In progress
      </span>

      <h1 className="mt-5 text-3xl font-bold tracking-tight text-balance text-text">
        This page is under renovation.
      </h1>
      <p className="mt-3 max-w-[66ch] text-text-muted">
        Sports, music and gaming stories are on the way. Check back soon.
      </p>

      <div className="relative mt-10 flex aspect-video max-w-md items-center justify-center rounded border border-border bg-[repeating-linear-gradient(135deg,var(--border)_0_1px,transparent_1px_14px)]">
        <span className="rounded bg-bg px-3 py-1 font-mono text-xs tracking-wide text-text-muted uppercase">
          Coming soon
        </span>
      </div>
    </div>
  );
}
