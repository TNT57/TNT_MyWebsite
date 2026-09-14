import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

// site.ts intentionally holds a TODO placeholder for `url` until this site is
// deployed (see site.ts). Fall back to localhost so metadata/sitemap/robots
// still build correctly — this will pick up the real URL automatically once
// siteConfig.url is set, with no change needed here.
export const siteUrl = siteConfig.url.startsWith("http")
  ? siteConfig.url
  : "http://localhost:3000";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

// Builds a full, page-specific Metadata object (title, description, OG,
// Twitter card, canonical) from one small input, so every page in src/app
// gets unique, consistent metadata without repeating itself.
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
