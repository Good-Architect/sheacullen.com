import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brand-gray-100 bg-brand-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <p className="text-base font-normal text-brand-black mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              Shea Cullen
            </p>
            <p className="text-sm text-brand-gray-500 leading-relaxed">
              UX & Product Designer based on the Central Coast, NSW.
              Designing digital products with the same care and
              intentionality I bring to architecture.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-normal uppercase tracking-wider text-brand-gray-500 mb-4">
                Navigate
              </p>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/#work"
                  className="text-sm text-brand-gray-700 hover:text-brand-black transition-colors"
                >
                  Work
                </Link>
                <Link
                  href="/#writing"
                  className="text-sm text-brand-gray-700 hover:text-brand-black transition-colors"
                >
                  Writing
                </Link>
                <Link
                  href="/#about"
                  className="text-sm text-brand-gray-700 hover:text-brand-black transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/#contact"
                  className="text-sm text-brand-gray-700 hover:text-brand-black transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <p className="text-xs font-normal uppercase tracking-wider text-brand-gray-500 mb-4">
                Elsewhere
              </p>
              <nav className="flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/sheacullen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-gray-700 hover:text-brand-black transition-colors"
                >
                  LinkedIn →
                </a>
                <a
                  href="mailto:shea@goodarchitect.com.au"
                  className="text-sm text-brand-gray-700 hover:text-brand-black transition-colors"
                >
                  Email →
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-gray-100">
          <p className="text-xs text-brand-gray-500">
            © {new Date().getFullYear()} Shea Cullen. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
