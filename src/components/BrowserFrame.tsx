interface BrowserFrameProps {
  label: string;
  children: React.ReactNode;
}

// The fake browser bar (three dots + address) on top of screenshots.
export function BrowserFrame({ label, children }: BrowserFrameProps) {
  return (
    <>
      <div className="flex items-center gap-3.5 border-b border-line px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-[9px] rounded-full bg-line-strong" />
          <span className="size-[9px] rounded-full bg-line-strong" />
          <span className="size-[9px] rounded-full bg-line-strong" />
        </span>
        <span className="min-w-0 truncate font-mono text-[11.5px] text-muted">
          {label}
        </span>
      </div>
      {children}
    </>
  );
}

// "https://price-check-au.vercel.app/" -> "price-check-au.vercel.app"
export function hostOf(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}
