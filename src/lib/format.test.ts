import { describe, expect, it } from "vitest";
import { formatCountUp, hostOf, pad2 } from "./format";

describe("pad2", () => {
  it("pads single digits", () => {
    expect(pad2(1)).toBe("01");
    expect(pad2(4)).toBe("04");
  });
  it("leaves two digits alone", () => {
    expect(pad2(12)).toBe("12");
  });
});

describe("hostOf", () => {
  it("keeps only the host", () => {
    expect(hostOf("https://price-check-au.vercel.app/")).toBe("price-check-au.vercel.app");
    expect(hostOf("https://tnt57.github.io/SmiteMe")).toBe("tnt57.github.io");
  });
  it("returns the input when it is not a full URL", () => {
    expect(hostOf("SKILL.md")).toBe("SKILL.md");
  });
});

describe("formatCountUp", () => {
  it("shows whole numbers with thousands separators", () => {
    expect(formatCountUp({ value: 63662 }, 1)).toBe("63,662");
  });
  it("keeps decimal places, prefix and suffix", () => {
    expect(formatCountUp({ value: 0.73, decimals: 2 }, 1)).toBe("0.73");
    expect(formatCountUp({ value: 6.7, decimals: 1, suffix: " / 7" }, 1)).toBe("6.7 / 7");
    expect(formatCountUp({ value: 80, suffix: "%" }, 1)).toBe("80%");
  });
  it("counts from zero", () => {
    expect(formatCountUp({ value: 80, suffix: "%" }, 0)).toBe("0%");
    expect(formatCountUp({ value: 0.73, decimals: 2 }, 0)).toBe("0.00");
    expect(formatCountUp({ value: 63662 }, 0.5)).toBe("31,831");
  });
});
