import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16">
      <p className="font-mono text-sm text-text-muted">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-text">
        Page not found
      </h1>
      <p className="mt-3 max-w-[66ch] text-text-muted">
        That page doesn&apos;t exist. Try the homepage instead.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block border-b border-border text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
      >
        Back to homepage &#8594;
      </Link>
    </div>
  );
}
