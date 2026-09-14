import Link from "next/link";

const routes = [
  { href: "/about", label: "/about" },
  { href: "/projects", label: "/projects" },
  { href: "/hobby", label: "/hobby" },
  { href: "/resume", label: "/resume" },
];

export function Nav() {
  return (
    <nav className="flex gap-6 border-b border-border py-5">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className="font-mono text-sm text-text-muted transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
