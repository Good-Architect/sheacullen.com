import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <p className="text-sm text-brand-gray-500 mb-2">404</p>
        <h1 className="text-2xl font-semibold text-brand-black mb-4">
          Page not found
        </h1>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-brand-gray-500 hover:text-brand-black transition-colors"
        >
          <span>&larr;</span>
          Back home
        </Link>
      </div>
    </div>
  );
}
