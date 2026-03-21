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
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-brand-black leading-[1.1] max-w-3xl">
            Designing products with the rigour of architecture
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-gray-500 max-w-2xl leading-relaxed">
            I&apos;m Shea Cullen — a UX & Product Designer based on the
            Central Coast, NSW. I bring an architect&apos;s eye for
            systems, space, and user flows to digital product design.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-brand-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
            >
              View my work
              <span>&rarr;</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-brand-gray-700 hover:text-brand-black transition-colors"
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
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500 mb-2">
                Selected Work
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-black">
                Recent projects
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500 mb-2">
              Writing
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-black">
              Thinking out loud
            </h2>
            <p className="mt-4 text-brand-gray-500 max-w-xl">
              Essays on product design, architecture, and the overlap
              between physical and digital spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {writingPosts.map((post) => (
              <article
                key={post.title}
                className="group border border-brand-gray-100 rounded-lg p-6 hover:border-brand-gray-300 transition-colors"
              >
                <p className="text-xs text-brand-gray-500 mb-3">
                  {post.date}
                </p>
                <h3 className="text-base font-medium text-brand-black mb-2 leading-snug">
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
              <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500 mb-2">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-black mb-6">
                Architect turned product designer
              </h2>
              <div className="space-y-4 text-brand-gray-700 leading-relaxed">
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
            <div className="bg-brand-gray-100 rounded-lg aspect-[4/5] flex items-center justify-center">
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
            <p className="text-xs font-medium uppercase tracking-wider text-brand-gray-500 mb-2">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-black mb-4">
              Let&apos;s talk
            </h2>
            <p className="text-brand-gray-500 mb-10">
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
