import { describe, expect, it } from "vitest";
import { categoryLabel, isTodo, projects } from "./projects";
import { proofStats, skills } from "./home";

describe("isTodo", () => {
  it("treats empty and TODO text as placeholders", () => {
    expect(isTodo(undefined)).toBe(true);
    expect(isTodo("")).toBe(true);
    expect(isTodo("TODO: Nathan, fill this in")).toBe(true);
    expect(isTodo("  TODO later")).toBe(true);
  });
  it("keeps real text", () => {
    expect(isTodo("The scraper flattens HTML tables.")).toBe(false);
  });
});

describe("categoryLabel", () => {
  it("adds the sub-category when there is one", () => {
    const visa = projects.find((p) => p.slug === "visa-intelligence-system")!;
    expect(categoryLabel(visa)).toBe("AI/ML · RAG");
    const nba = projects.find((p) => p.slug === "nba-fair-value-model")!;
    expect(categoryLabel(nba)).toBe("AI/ML");
  });
});

// Content checks: catch typos in links before they reach the live site.
describe("content links", () => {
  const slugs = new Set(projects.map((p) => p.slug));
  const internal = [
    ...proofStats.map((s) => s.href),
    ...skills.flatMap((s) => s.proof.map((p) => p.href)),
  ];

  it("every proof link points at a real page", () => {
    for (const href of internal) {
      const slug = href.match(/^\/projects\/(.+)$/)?.[1];
      if (slug) expect(slugs, href).toContain(slug);
      else expect(["/about", "/projects", "/hobby", "/resume"], href).toContain(href);
    }
  });

  it("project slugs are unique", () => {
    expect(slugs.size).toBe(projects.length);
  });

  it("proof bars stay between 0 and 100", () => {
    for (const s of proofStats) {
      expect(s.bar).toBeGreaterThanOrEqual(0);
      expect(s.bar).toBeLessThanOrEqual(100);
    }
  });
});
