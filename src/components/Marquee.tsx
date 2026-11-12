import { toolTicker } from "@/content/about";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden ? "true" : undefined}
      className="flex items-center gap-9 px-[18px] py-[22px]"
    >
      {toolTicker.map((tool) => (
        <span key={tool} className="flex items-center gap-9">
          <span>{tool}</span>
          <span aria-hidden="true" className="text-accent">
            +
          </span>
        </span>
      ))}
    </div>
  );
}

// Endless scrolling list of tools. The second copy makes the loop seamless.
export function Marquee({ className }: { className?: string }) {
  return (
    <div
      className={`marquee overflow-hidden border-y border-line ${className ?? ""}`}
    >
      <div className="marquee-track flex w-max font-display text-[clamp(18px,2vw,26px)] font-medium tracking-[-0.02em] whitespace-nowrap">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
