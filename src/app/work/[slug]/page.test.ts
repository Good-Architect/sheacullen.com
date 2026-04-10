import { describe, it, expect } from "vitest";
import { generateStaticParams } from "./page";
import { projects } from "@/lib/projects";

describe("generateStaticParams", () => {
  it("returns a param object for every project", () => {
    const params = generateStaticParams();
    expect(params).toHaveLength(projects.length);
  });

  it("each param has the correct slug", () => {
    const params = generateStaticParams();
    const slugs = params.map((p) => p.slug);
    for (const project of projects) {
      expect(slugs).toContain(project.slug);
    }
  });
});
