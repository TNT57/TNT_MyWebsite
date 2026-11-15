"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_/[]{}=+*^?#01";

function noise(text: string) {
  let s = "";
  for (const ch of text) s += ch === " " ? " " : GLYPHS[(Math.random() * GLYPHS.length) | 0];
  return s;
}

interface ScrambleTextProps {
  text: string;
  // "load" runs once on page load; "view" waits until it scrolls into view.
  start?: "load" | "view";
  delay?: number;
  className?: string;
}

// Text that "decodes" from random symbols into the real words, left to right.
// The server renders the real text, so it works without JavaScript, and
// screen readers always get the real text (the animated copy is hidden).
export function ScrambleText({ text, start = "load", delay = 0, className }: ScrambleTextProps) {
  const [shown, setShown] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let observer: IntersectionObserver | undefined;

    const run = () => {
      const t0 = performance.now();
      const duration = 700 + text.length * 12;
      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / duration);
        const reveal = Math.floor(t * text.length);
        let s = "";
        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          s += i < reveal || ch === " " ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        }
        setShown(s);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    // Same length as the real text, so nothing jumps.
    const pre = requestAnimationFrame(() => setShown(noise(text)));

    if (start === "view" && "IntersectionObserver" in window && ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            observer?.disconnect();
            timer = setTimeout(run, delay);
          }
        },
        { threshold: 0.6 },
      );
      observer.observe(ref.current);
    } else {
      timer = setTimeout(run, delay);
    }

    return () => {
      cancelAnimationFrame(pre);
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      observer?.disconnect();
      setShown(text);
    };
  }, [text, start, delay]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">{shown}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
