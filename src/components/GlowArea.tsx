"use client";

import type { MouseEvent } from "react";

interface GlowAreaProps {
  children: React.ReactNode;
  className?: string;
}

// A soft cyan glow that follows the mouse (styles: .glow-area in globals.css).
export function GlowArea({ children, className }: GlowAreaProps) {
  function track(event: MouseEvent<HTMLDivElement>) {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div onMouseMove={track} className={`glow-area ${className ?? ""}`}>
      {children}
    </div>
  );
}
