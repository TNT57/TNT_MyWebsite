import Image from "next/image";
import type { Project } from "@/content/projects";
import { BrowserFrame, hostOf } from "@/components/BrowserFrame";
import { ArrowDown } from "@/components/Icons";

// The Everything Larper "screenshot": a prompt turning into commentary.
function LarperVisual({ large }: { large?: boolean }) {
  return (
    <div
      className={`box-border flex flex-col justify-center gap-4 font-mono ${
        large ? "p-[clamp(24px,5vw,64px)]" : "aspect-video p-[clamp(20px,3vw,40px)]"
      }`}
    >
      <span className="text-[11.5px] tracking-[0.1em] text-muted uppercase">
        persona prompt
      </span>
      <span className="font-display text-[clamp(22px,2.8vw,40px)] leading-[1.05] font-bold tracking-[-0.04em]">
        &ldquo;World Cup 2026 Messi Fan&rdquo;
      </span>
      <ArrowDown size={20} className="text-accent" />
      <span className="text-[11.5px] tracking-[0.1em] text-muted uppercase">
        fan commentary with
      </span>
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0 text-[13px]">
        {["inside references", "real statistics", "rivalry banter", "a sign-off"].map((chip) => (
          <li key={chip} className="rounded-full border border-line-strong px-3 py-1.5 text-soft">
            {chip}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ProjectVisualProps {
  project: Project;
  // "card" = 16:9 crop for grids; "hero" = full screenshot on a case study.
  variant?: "card" | "hero";
  priority?: boolean;
}

// What goes inside a TiltCard for a project: a framed screenshot, or the
// Larper prompt visual for projects with no app to screenshot.
export function ProjectVisual({ project, variant = "card", priority }: ProjectVisualProps) {
  const frameLabel = project.links?.demo ? hostOf(project.links.demo) : "SKILL.md";
  const hasScreenshot = Boolean(project.imageSrc && project.links?.demo);

  return (
    <BrowserFrame label={frameLabel}>
      {hasScreenshot && project.imageSrc ? (
        <Image
          src={project.imageSrc}
          alt={`Screenshot of ${project.title}`}
          width={1904}
          height={902}
          priority={priority}
          sizes={variant === "hero" ? "(min-width: 1200px) 1120px, 100vw" : "(min-width: 900px) 50vw, 100vw"}
          className={`tilt-shot block w-full object-cover object-top ${
            variant === "hero" ? "aspect-[1903/902]" : "aspect-[16/9.4]"
          }`}
        />
      ) : (
        <LarperVisual large={variant === "hero"} />
      )}
    </BrowserFrame>
  );
}
