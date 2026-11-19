// Small pure helpers shared by several pages. Covered by format.test.ts.

/** 1 -> "01", 12 -> "12". Used for section and project numbers. */
export function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

/** "https://price-check-au.vercel.app/" -> "price-check-au.vercel.app" */
export function hostOf(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

export interface CountUpNumber {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

/**
 * A number part-way through counting up. `progress` runs 0 -> 1.
 * Whole numbers get thousands separators (63,662); decimals keep their places.
 */
export function formatCountUp(stat: CountUpNumber, progress: number): string {
  const n = stat.value * progress;
  const body =
    stat.decimals !== undefined
      ? n.toFixed(stat.decimals)
      : Math.round(n).toLocaleString("en-AU");
  return `${stat.prefix ?? ""}${body}${stat.suffix ?? ""}`;
}
