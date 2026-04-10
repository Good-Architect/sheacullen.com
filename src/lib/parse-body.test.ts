import { describe, it, expect } from "vitest";
import { parseBody } from "./parse-body";

describe("parseBody", () => {
  it("splits body into sections by ## headings", () => {
    const body = `## First

Content one.

## Second

Content two.`;

    const sections = parseBody(body);
    expect(sections).toHaveLength(2);
    expect(sections[0].heading).toBe("First");
    expect(sections[1].heading).toBe("Second");
  });

  it("treats content before first ## as a section with no heading", () => {
    const body = `Intro paragraph.

## First Section

Some content.`;

    const sections = parseBody(body);
    expect(sections).toHaveLength(2);
    expect(sections[0].heading).toBeNull();
    expect(sections[0].paragraphs).toHaveLength(1);
    expect(sections[0].paragraphs[0]).toEqual({
      type: "paragraph",
      text: "Intro paragraph.",
    });
  });

  it("parses ### subheadings", () => {
    const body = `## Section

### Subheading

Some text.`;

    const sections = parseBody(body);
    expect(sections[0].paragraphs).toContainEqual({
      type: "subheading",
      text: "Subheading",
    });
  });

  it("parses bullet lists", () => {
    const body = `## Section

- Item one
- Item two
- Item three`;

    const sections = parseBody(body);
    expect(sections[0].paragraphs).toContainEqual({
      type: "list",
      items: ["Item one", "Item two", "Item three"],
    });
  });

  it("parses bold text within paragraphs", () => {
    const body = `## Section

This has **bold** text in it.`;

    const sections = parseBody(body);
    expect(sections[0].paragraphs).toContainEqual({
      type: "paragraph",
      text: "This has **bold** text in it.",
    });
  });

  it("handles real project body content", () => {
    const body = `## The Problem

Some problem description.

## What I Built

**Dudils** is a search engine. It does things.

### Key Product Decisions

The admin workflow was important.

### Technical Highlights

- Feature one
- Feature two

## Outcome

The site is live.`;

    const sections = parseBody(body);
    expect(sections).toHaveLength(3);
    expect(sections[0].heading).toBe("The Problem");
    expect(sections[1].heading).toBe("What I Built");
    expect(sections[2].heading).toBe("Outcome");

    // "What I Built" section should have paragraphs, subheadings, and lists
    const builtSection = sections[1];
    const types = builtSection.paragraphs.map((p) => p.type);
    expect(types).toContain("paragraph");
    expect(types).toContain("subheading");
    expect(types).toContain("list");
  });
});
