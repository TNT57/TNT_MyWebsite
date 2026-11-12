"use client";

import type { MouseEvent } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  // Which way the card leans while resting.
  lean?: "left" | "right" | "up" | "none";
  // How far (in degrees) the card turns toward the mouse.
  strength?: number;
  className?: string;
  cardClassName?: string;
}

const restingLean = {
  left: { rx: "2deg", ry: "-7deg" },
  right: { rx: "2deg", ry: "7deg" },
  up: { rx: "4deg", ry: "0deg" },
  none: { rx: "0deg", ry: "0deg" },
};

// A card that tilts in 3D toward the mouse, with a light glare
// (styles: .tilt / .tilt-card in globals.css). Motion is skipped for
// people who ask their system for reduced motion.
export function TiltCard({
  children,
  lean = "none",
  strength = 12,
  className,
  cardClassName,
}: TiltCardProps) {
  function tilt(event: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--ry", `${(px * strength).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${(py * -strength * 0.75).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  function reset(event: MouseEvent<HTMLDivElement>) {
    const el = event.currentTarget;
    el.style.removeProperty("--ry");
    el.style.removeProperty("--rx");
  }

  const { rx, ry } = restingLean[lean];

  return (
    <div
      onMouseMove={tilt}
      onMouseLeave={reset}
      className={`tilt ${className ?? ""}`}
      style={{ "--rx0": rx, "--ry0": ry } as React.CSSProperties}
    >
      <div
        className={`tilt-card overflow-hidden rounded-[18px] border border-line bg-surface ${cardClassName ?? ""}`}
      >
        {children}
      </div>
    </div>
  );
}
