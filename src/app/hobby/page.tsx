import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { hobbyIntro, hobbyItems } from "@/content/about";
import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Hobby",
  description: `A few things ${siteConfig.name} does outside of code.`,
  path: "/hobby",
});

export default function HobbyPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold tracking-tight text-text">Outside of code</h1>
      <p className="mt-2 mb-8 max-w-[66ch] text-text-muted">{hobbyIntro}</p>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {hobbyItems.map((item) => {
          const imageExists = fs.existsSync(
            path.join(process.cwd(), "public", item.image),
          );

          return (
            <article
              key={item.category}
              className="group flex h-full flex-col overflow-hidden rounded border border-border bg-surface transition-shadow hover:shadow-[0_0_0_2px_var(--accent)]"
            >
              {imageExists ? (
                <Image
                  src={`/${item.image}`}
                  alt={`Photo for ${item.category}`}
                  width={640}
                  height={360}
                  className="aspect-video w-full object-cover brightness-90 transition-all duration-300 group-hover:scale-105 group-hover:brightness-105"
                />
              ) : (
                <span
                  role="img"
                  aria-label={`Placeholder for a ${item.category} photo`}
                  className="flex aspect-video w-full flex-col items-center justify-center gap-2.5 bg-surface"
                >
                  <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
                    <path
                      d="M50 4 L58 42 L96 50 L58 58 L50 96 L42 58 L4 50 L42 42 Z"
                      fill="var(--accent)"
                    />
                  </svg>
                  <span className="font-mono text-[10.5px] font-semibold tracking-wide text-text-muted uppercase">
                    Photo coming soon
                  </span>
                </span>
              )}
              <div className="flex flex-1 flex-col gap-2 p-4">
                <span className="self-start rounded bg-accent px-2 py-0.5 font-mono text-[10.5px] font-semibold tracking-wide text-accent-contrast uppercase">
                  {item.category}
                </span>
                <p className="flex-1 text-sm text-text-muted">{item.text}</p>
                {item.link ? (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 self-start border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
                  >
                    {item.link.label} &#8594;
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
