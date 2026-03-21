import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";

const writingPosts = [
  {
    title: "What architecture taught me about product design",
    excerpt:
      "Buildings and digital products share more DNA than you'd think. Both are systems designed around human movement, attention, and comfort.",
    date: "Coming soon",
  },
  {
    title: "The case for dimension-first search in spatial products",
    excerpt:
      "When your users think in metres, your filters should too. How physical constraints should drive digital UX patterns.",
    date: "Coming soon",
  },
  {
    title: "Building a crawler pipeline with Claude",
    excerpt:
      "Lessons from building a production web crawler that extracts structured data from 26 different website architectures.",
    date: "Coming soon",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-brand-black leading-[1.1] max-w-3xl" style={{ fontFamily: "var(--font-serif)" }}>
            Designing products with the rigour of architecture
          </h1>
          <p className="mt-8 text-base md:text-lg text-brand-gray-500 max-w-2xl leading-relaxed">
            I&apos;m Shea Cullen — a UX & Product Designer based on the
            Central Coast, NSW. I bring an architect&apos;s eye for
            systems, space, and user flows to digital product design.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-brand-black text-brand-black px-4 py-2 rounded text-sm hover:bg-brand-black hover:text-brand-white transition-colors"
            >
              View my work
              <span>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-brand-gray-500 hover:text-brand-black transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-brand-gray-100" />
      </div>

      {/* Work */}
      <section id="work" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-normal uppercase tracking-wider text-brand-gray-500 mb-3">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-brand-black" style={{ fontFamily: "var(--font-serif)" }}>
              Recent projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-brand-gray-100" />
      </div>

      {/* Writing */}
      <section id="writing" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-normal uppercase tracking-wider text-brand-gray-500 mb-3">
              Writing
            </p>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-brand-black" style={{ fontFamily: "var(--font-serif)" }}>
              Thinking out loud
            </h2>
            <p className="mt-6 text-base text-brand-gray-500 max-w-xl leading-relaxed">
              Essays on product design, architecture, and the overlap
              between physical and digital spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {writingPosts.map((post) => (
              <article
                key={post.title}
                className="group"
              >
                <p className="text-xs tracking-wider uppercase text-brand-gray-500 mb-4">
                  {post.date}
                </p>
                <h3 className="text-lg font-normal text-brand-black mb-3 leading-snug group-hover:opacity-70 transition-opacity" style={{ fontFamily: "var(--font-serif)" }}>
                  {post.title}
                </h3>
                <p className="text-sm text-brand-gray-500 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-brand-gray-100" />
      </div>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-normal uppercase tracking-wider text-brand-gray-500 mb-3">
                About
              </p>
              <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-brand-black mb-8" style={{ fontFamily: "var(--font-serif)" }}>
                Architect turned product designer
              </h2>
              <div className="space-y-5 text-brand-gray-700 leading-relaxed">
                <p>
                  I started my career designing buildings — residential
                  homes, multi-unit developments, and community projects
                  on the Central Coast of NSW. Architecture taught me to
                  think in systems: how people move through space, where
                  natural light falls, how a floor plan shapes daily
                  life.
                </p>
                <p>
                  Those same instincts now drive my approach to digital
                  product design. I think about user flows the way I
                  think about circulation in a building. I obsess over
                  information hierarchy the way I used to obsess over
                  sight lines. And I believe the best products, like the
                  best buildings, feel so natural that you don&apos;t
                  notice the design at all.
                </p>
                <p>
                  I&apos;m currently building tools at the intersection
                  of architecture and technology — including Dudils, a
                  house plan search engine that helps architects assess
                  passive solar orientation across thousands of plans
                  from Australian builders.
                </p>
              </div>
            </div>
            <div className="bg-brand-gray-100 rounded aspect-[4/5] flex items-center justify-center">
              <p className="text-sm text-brand-gray-500">Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-brand-gray-100" />
      </div>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-normal uppercase tracking-wider text-brand-gray-500 mb-3">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-brand-black mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Let&apos;s talk
            </h2>
            <p className="text-base text-brand-gray-500 mb-10 leading-relaxed">
              Whether you&apos;re looking for a product designer, want
              to collaborate on something, or just want to chat about
              architecture and UX — I&apos;d love to hear from you.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
