import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
    >
      {/* Cover area */}
      <div className="bg-brand-gray-100 rounded-lg aspect-[16/10] mb-6 flex items-center justify-center overflow-hidden transition-all duration-300">
        <div className="text-center px-8">
          <p className="text-xl font-normal text-brand-gray-700 mb-1" style={{ fontFamily: "var(--font-serif)" }}>
            {project.title}
          </p>
          <p className="text-xs tracking-wider uppercase text-brand-gray-500">{project.year}</p>
        </div>
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-base font-normal text-brand-black group-hover:opacity-70 transition-opacity" style={{ fontFamily: "var(--font-serif)" }}>
            {project.title}
          </h3>
          <p className="text-sm text-brand-gray-500 mt-2 leading-relaxed">
            {project.subtitle}
          </p>
        </div>
        <span className="mt-1 text-brand-gray-300 group-hover:text-brand-black transition-colors shrink-0">
          →
        </span>
      </div>

      {/* Tags as simple text labels */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-brand-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
