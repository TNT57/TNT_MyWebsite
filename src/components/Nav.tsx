"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/Container";

const routes = [
  { href: "/projects", label: "/projects" },
  { href: "/about", label: "/about" },
  { href: "/hobby", label: "/hobby" },
  { href: "/resume", label: "/resume" },
];

// Frosted-glass menu that stays at the top while scrolling (.glass-nav).
export function Nav() {
  const pathname = usePathname();

  return (
    <div className="glass-nav sticky top-0 z-50">
      <Container>
        <nav
          aria-label="Main"
          className="flex items-center justify-between gap-x-3 gap-y-2 py-2.5 font-mono text-xs sm:text-[13px]"
        >
          <Link
            href="/"
            aria-label="Home"
            className="flex min-h-11 min-w-11 flex-none items-center font-display text-xl font-bold tracking-[-0.04em] transition-colors hover:text-accent"
          >
            NT<span className="text-accent">/</span>
          </Link>
          <div className="flex items-center gap-0.5">
            {routes.map((route) => {
              const active =
                pathname === route.href || pathname.startsWith(`${route.href}/`);
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-11 items-center rounded-full border px-2 transition-colors sm:px-3 ${
                    active
                      ? "border-[color-mix(in_srgb,var(--accent)_50%,var(--line))] text-accent"
                      : "border-transparent text-muted hover:bg-white/5 hover:text-accent"
                  }`}
                >
                  {route.label}
                </Link>
              );
            })}
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn btn-primary ml-2 hidden min-h-10 px-4 font-sans text-[13.5px] sm:inline-flex"
            >
              Get in touch
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
}
