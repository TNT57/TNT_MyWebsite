"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ProofStat } from "@/content/home";
import { ArrowUpRight } from "@/components/Icons";
import { canAnimate } from "@/components/motion";
import { formatCountUp } from "@/lib/format";


// The row of headline numbers under the hero. Numbers count up from 0 once
// the strip is on screen; the server renders the final numbers.
export function ProofStrip({ stats }: { stats: ProofStat[] }) {
  const [progress, setProgress] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canAnimate(el)) return;

    let frame = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const pre = requestAnimationFrame(() => setProgress(0));

    const run = () => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / 1600);
        setProgress(1 - Math.pow(1 - t, 3)); // ease out
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    // Very old browsers (Safari before 12.1) have no IntersectionObserver:
    // count straight away rather than throwing and taking the page down.
    if (!("IntersectionObserver" in window)) {
      timer = setTimeout(run, 900);
      return () => {
        cancelAnimationFrame(pre);
        cancelAnimationFrame(frame);
        clearTimeout(timer);
        setProgress(1);
      };
    }

    // Wait for the hero to finish landing before counting.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          timer = setTimeout(run, 900);
        }
      },
      // Start as soon as the top of the strip shows (it is tall on phones).
      { threshold: 0, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(pre);
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      setProgress(1);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="rise rise-6 overflow-hidden rounded-[20px] border border-line bg-[rgba(10,15,23,0.72)]"
    >
      <ul className="m-0 grid list-none grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3 bg-line p-0">
        {stats.map((stat) => (
          <li key={stat.label} className="flex">
            <Link
              href={stat.href}
              className="proof-cell flex w-full flex-col gap-2.5 bg-[#070b11] p-[clamp(18px,2vw,26px)]"
            >
              <span className="proof-label flex items-center justify-between gap-2 font-mono text-[11.5px] tracking-[0.1em] text-muted uppercase">
                {stat.label}
                <ArrowUpRight size={13} />
              </span>
              <span className="font-display text-[clamp(40px,4.2vw,60px)] leading-none font-bold tracking-[-0.05em] tabular-nums">
                <span aria-hidden="true">{formatCountUp(stat, progress)}</span>
                <span className="sr-only">{formatCountUp(stat, 1)}</span>
              </span>
              <span aria-hidden="true" className="block h-[3px] rounded-sm bg-[#121a26]">
                <span
                  className="block h-full rounded-sm bg-accent"
                  style={{ width: `${stat.bar * progress}%` }}
                />
              </span>
              <span className="text-[13.5px] text-soft">{stat.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
