"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";

const routes = [
  { href: "/projects", label: "/projects" },
  { href: "/about", label: "/about" },
  { href: "/hobby", label: "/hobby" },
  { href: "/resume", label: "/resume" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <Container className="relative z-10">
      <nav
        aria-label="Main"
        className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-4 font-mono text-[13px]"
      >
        <Link
          href="/"
          aria-label="Home"
          className="flex min-h-11 items-center font-display text-xl font-bold tracking-[-0.04em] transition-colors hover:text-accent"
        >
          NT<span className="text-accent">/</span>
        </Link>
        <div className="flex flex-wrap items-center gap-0.5">
          {routes.map((route) => {
            const active =
              pathname === route.href || pathname.startsWith(`${route.href}/`);
            return (
              <Link
                key={route.href}
                href={route.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 items-center rounded-full border px-3.5 transition-colors ${
                  active
                    ? "border-[color-mix(in_srgb,var(--accent)_50%,var(--line))] text-accent"
                    : "border-transparent text-muted hover:bg-surface-2 hover:text-accent"
                }`}
              >
                {route.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </Container>
  );
}
