import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
    >
      {/* Cover area */}
      <div
        className={`${project.coverColor} rounded-lg aspect-[16/10] mb-5 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg`}
      >
        <div className="text-center px-8">
          <p className="text-2xl font-semibold text-brand-gray-900 mb-1">
            {project.title}
          </p>
          <p className="text-sm text-brand-gray-500">{project.year}</p>
        </div>
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-medium text-brand-black group-hover:opacity-70 transition-opacity">
            {project.title}
          </h3>
          <p className="text-sm text-brand-gray-500 mt-1 leading-relaxed">
            {project.subtitle}
          </p>
        </div>
        <span className="mt-1 text-brand-gray-300 group-hover:text-brand-black transition-colors shrink-0">
          &rarr;
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-brand-gray-500 bg-brand-gray-100 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
