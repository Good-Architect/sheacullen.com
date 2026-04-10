import { describe, it, expect } from "vitest";
import sitemap from "./sitemap";
import { projects } from "@/lib/projects";

describe("sitemap", () => {
  it("includes the home page", () => {
    const entries = sitemap();
    expect(entries[0].url).toBe("https://sheacullen.com");
  });

  it("includes an entry for every project", () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);
    for (const project of projects) {
      expect(urls).toContain(`https://sheacullen.com/work/${project.slug}`);
    }
  });

  it("has correct total count (home + all projects)", () => {
    const entries = sitemap();
    expect(entries).toHaveLength(1 + projects.length);
  });

  it("every entry has a lastModified date", () => {
    const entries = sitemap();
    for (const entry of entries) {
      expect(entry.lastModified).toBeInstanceOf(Date);
    }
  });
});
