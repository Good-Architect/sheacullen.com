import { describe, it, expect } from "vitest";
import { getProject, projects } from "./projects";

describe("getProject", () => {
  it("returns the project matching the given slug", () => {
    const result = getProject("dudils");
    expect(result).toBeDefined();
    expect(result!.slug).toBe("dudils");
    expect(result!.title).toBe("Dudils");
  });

  it("returns undefined for a non-existent slug", () => {
    const result = getProject("does-not-exist");
    expect(result).toBeUndefined();
  });

  it("returns correct project for each known slug", () => {
    for (const project of projects) {
      const result = getProject(project.slug);
      expect(result).toBe(project);
    }
  });
});

describe("projects data integrity", () => {
  it("has no duplicate slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every project has all required fields", () => {
    for (const project of projects) {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.subtitle).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.year).toBeTruthy();
      expect(project.role).toBeTruthy();
      expect(project.coverColor).toBeTruthy();
      expect(project.body).toBeTruthy();
    }
  });

  it("all slugs are URL-safe", () => {
    for (const project of projects) {
      expect(project.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });
});
