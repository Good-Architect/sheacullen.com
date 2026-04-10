export type Paragraph =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] };

export interface Section {
  heading: string | null;
  paragraphs: Paragraph[];
}

export function parseBody(body: string): Section[] {
  const rawSections = body.split(/^## /m).filter(Boolean);

  return rawSections.map((section, i) => {
    const lines = section.split("\n");
    // If this wasn't preceded by "## " in the original, it's the intro
    const isIntro = i === 0 && !body.trimStart().startsWith("## ");
    const heading = isIntro ? null : lines[0].trim();
    const content = (isIntro ? lines : lines.slice(1)).join("\n").trim();

    const paragraphs: Paragraph[] = content
      .split(/\n\n+/)
      .filter(Boolean)
      .map((para): Paragraph => {
        if (para.startsWith("### ")) {
          return { type: "subheading", text: para.replace("### ", "") };
        }
        if (para.startsWith("- ")) {
          return {
            type: "list",
            items: para.split("\n").map((line) => line.replace(/^- /, "")),
          };
        }
        return { type: "paragraph", text: para };
      });

    return { heading, paragraphs };
  });
}
