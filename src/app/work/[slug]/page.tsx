import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/lib/projects";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Simple markdown-like rendering: split by ## headings
  const sections = project.body.split(/^## /m).filter(Boolean);

  return (
    <article className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-brand-gray-500 hover:text-brand-black transition-colors mb-12"
        >
          <span>&larr;</span>
          Back to all work
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-brand-gray-500 bg-brand-gray-100 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-black mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-brand-gray-500 leading-relaxed">
            {project.subtitle}
          </p>
          <div className="mt-6 flex gap-8 text-sm text-brand-gray-500">
            <div>
              <span className="font-medium text-brand-gray-700">
                Role
              </span>{" "}
              &middot; {project.role}
            </div>
            <div>
              <span className="font-medium text-brand-gray-700">
                Year
              </span>{" "}
              &middot; {project.year}
            </div>
          </div>
        </header>

        <hr className="border-brand-gray-100 mb-12" />

        {/* Body */}
        <div className="prose-custom">
          {sections.map((section, i) => {
            const lines = section.split("\n");
            const heading = i === 0 ? null : lines[0].trim();
            const content = (i === 0 ? lines : lines.slice(1))
              .join("\n")
              .trim();

            return (
              <section key={i} className="mb-12">
                {heading && (
                  <h2 className="text-2xl font-semibold text-brand-black mb-4">
                    {heading}
                  </h2>
                )}
                <div className="space-y-4">
                  {content.split(/\n\n+/).map((para, j) => {
                    // Handle ### subheadings
                    if (para.startsWith("### ")) {
                      return (
                        <h3
                          key={j}
                          className="text-lg font-semibold text-brand-black mt-8 mb-2"
                        >
                          {para.replace("### ", "")}
                        </h3>
                      );
                    }
                    // Handle bullet lists
                    if (para.startsWith("- ")) {
                      return (
                        <ul
                          key={j}
                          className="space-y-2 text-brand-gray-700 leading-relaxed"
                        >
                          {para.split("\n").map((line, k) => (
                            <li
                              key={k}
                              className="flex gap-2"
                            >
                              <span className="text-brand-gray-300 mt-0.5">
                                &bull;
                              </span>
                              <span>
                                {line.replace(/^- /, "")}
                              </span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    // Handle bold text within paragraphs
                    const parts = para.split(/\*\*(.*?)\*\*/g);
                    return (
                      <p
                        key={j}
                        className="text-brand-gray-700 leading-relaxed"
                      >
                        {parts.map((part, k) =>
                          k % 2 === 1 ? (
                            <strong
                              key={k}
                              className="font-semibold text-brand-black"
                            >
                              {part}
                            </strong>
                          ) : (
                            <span key={k}>{part}</span>
                          )
                        )}
                      </p>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Next project */}
        <hr className="border-brand-gray-100 mt-16 mb-8" />
        <div className="flex justify-between items-center">
          <Link
            href="/#work"
            className="text-sm text-brand-gray-500 hover:text-brand-black transition-colors"
          >
            &larr; All projects
          </Link>
          {(() => {
            const idx = projects.findIndex((p) => p.slug === slug);
            const next = projects[(idx + 1) % projects.length];
            return (
              <Link
                href={`/work/${next.slug}`}
                className="text-sm text-brand-gray-500 hover:text-brand-black transition-colors"
              >
                Next: {next.title} &rarr;
              </Link>
            );
          })()}
        </div>
      </div>
    </article>
  );
}
