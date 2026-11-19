import Link from "next/link";
import type { Skill } from "@/content/home";
import { ArrowRight } from "@/components/Icons";
import { pad2 } from "@/lib/format";

// "What I can do" cards; each ends with links to the work that proves it.
export function SkillCards({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {skills.map((skill, i) => (
        <article
          key={skill.title}
          className="skill-card flex flex-col gap-4 rounded-[22px] border border-line bg-surface p-[clamp(22px,2.4vw,28px)]"
        >
          <span className="skill-num font-mono text-[13px] text-muted">
            {pad2(i + 1)}
          </span>
          <h3 className="m-0 font-display text-[26px] leading-[1.08] font-bold tracking-[-0.035em]">
            {skill.title}
          </h3>
          <p className="m-0 text-[14.5px] text-muted">{skill.text}</p>
          <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
            {skill.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[11.5px] text-soft"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex-auto" />
          <div className="flex flex-col gap-1 border-t border-line pt-4">
            <span className="font-mono text-[11px] tracking-[0.1em] text-accent uppercase">Proof</span>
            {skill.proof.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="flex min-h-11 items-center justify-between gap-2 text-sm font-medium transition-colors hover:text-accent"
              >
                {p.label} <ArrowRight />
              </Link>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
