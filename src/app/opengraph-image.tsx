import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

// Shared across every page — a per-project image would be a nice upgrade
// later, but isn't required for unique title/description/OG text metadata.
// TODO: consider a per-project opengraph-image under /projects/[slug] if
// you want project case studies to preview with their own title.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#f6f2ea",
          color: "#211c14",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 2,
            color: "#a8480f",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.location}
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 36, color: "#7a6f5c", marginTop: 16 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
