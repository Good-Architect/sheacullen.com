export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  coverColor: string;
  body: string;
}

export const projects: Project[] = [
  {
    slug: "dudils",
    title: "Dudils",
    subtitle: "House plan search engine for passive solar design",
    description:
      "A full-stack product that crawls Australian home builders, extracts floor plans, and lets architects assess passive solar orientation. Built the entire product from concept to production — database design, crawler pipeline, admin curation tools, and the public search interface.",
    tags: ["Product Design", "Full-Stack", "Next.js", "Supabase"],
    year: "2026",
    role: "Product Owner & Designer",
    coverColor: "bg-amber-50",
    body: `## The Problem

Architects assessing house plans for passive solar orientation had no centralised tool. Plans were scattered across dozens of builder websites, each with different formats, and there was no way to compare them side-by-side or filter by orientation suitability.

## What I Built

**Dudils** is a search engine for Australian house plans, purpose-built for passive solar assessment. It crawls 26+ builder websites, extracts floor plan images and specifications, and presents them in a unified interface where architects can filter by bedrooms, dimensions, and builder.

### Key Product Decisions

The admin curation workflow was the most important design decision. Rather than automatically publishing every crawled plan, I built a review queue where the architect manually inspects each plan, sets the north direction, identifies the garage/road side, and rates the plan's passive solar potential. This human-in-the-loop approach ensures quality over quantity.

The crawler pipeline handles the messiest part — each builder site has a different tech stack, different HTML structure, and different ways of presenting floor plan data. I built a generic extractor that handles ~80% of sites, plus custom extractors for builders with unusual data formats (JSON attributes, inline SVGs, mirrored plan variants).

### Technical Highlights

- Crawled 1,600+ floor plans across 13 builders
- Custom extractors for Clarendon (inline SVGs with double encoding), JG King (JSON data attributes), and others
- Incremental crawling with polite rate limiting and robots.txt respect
- Admin dashboard with draft review, approval scoring, and one-click promotion to production
- Greyscale CSS filter on all floor plan images for visual consistency across builders

## Outcome

The site is live at dudils.com with 1,600+ plans ready for curation. The admin architect is actively reviewing and promoting plans, with the goal of becoming the definitive resource for passive-solar-assessed house plans in Australia.`,
  },
  {
    slug: "good-architect",
    title: "Good Architect",
    subtitle: "Architecture practice website — full migration from Google Sites",
    description:
      "Migrated a 211-page architecture practice website from Google Sites to a modern Next.js stack. Preserved all SEO rankings while dramatically improving performance, converting 342 images to WebP, and building a maintainable content system.",
    tags: ["Web Design", "Next.js", "SEO", "Content Architecture"],
    year: "2026",
    role: "Designer & Developer",
    coverColor: "bg-emerald-50",
    body: `## The Problem

The existing Good Architect website was hosted on Google Sites — functional but slow, visually dated, and impossible to customise. With 211 pages of content (architecture articles, bushwalk guides, project case studies, and tool resources), migration wasn't trivial. The site had accumulated real SEO value that couldn't be lost.

## What I Built

A complete rebuild on Next.js 15 with App Router, preserving every URL path and adding 301 redirects where paths changed. The content system uses markdown files with YAML frontmatter — no database, no CMS, zero monthly cost.

### Key Product Decisions

**Content architecture was the hardest part.** The original site had grown organically across articles, bushwalk guides, project pages, and tool resources — all mixed together. I designed a three-tier dynamic routing system: root-level articles (\`/[slug]\`), tools subpages (\`/tools/[slug]\`), and project case studies (\`/success/[slug]\`). Static routes take priority, so adding a custom page for any slug is non-breaking.

**Image optimisation mattered more than redesign.** The original 342 images totalled 202MB. Converting to WebP and resizing brought that to 38MB — an 81% reduction. On the free Vercel tier with 100GB/month bandwidth, this was essential.

### Technical Highlights

- 211 pages generated at build time via \`generateStaticParams\`
- Dynamic sitemap covering all content
- SEO metadata with \`generateMetadata\` on every page
- JSON-LD Organization schema
- Formspree contact form integration
- System fonts for zero web font overhead

## Outcome

Clean build with zero type errors, all 211 pages generating correctly, and a clear migration checklist for DNS cutover. The site is ready for deployment at goodarchitect.au.`,
  },
  {
    slug: "plan-search-ux",
    title: "Plan Search UX",
    subtitle: "Designing search and filter patterns for spatial data",
    description:
      "Deep dive into the UX decisions behind Dudils' search interface — how to let users filter house plans by physical dimensions, bedroom count, and builder while keeping the interface fast and intuitive.",
    tags: ["UX Design", "Search Patterns", "Interaction Design"],
    year: "2026",
    role: "UX Designer",
    coverColor: "bg-sky-50",
    body: `## The Challenge

House plans have unusual filter requirements compared to typical e-commerce products. Users care about physical dimensions (width × depth in metres), room counts, number of storeys, and which builder made the plan. The challenge was designing a filter system that felt natural for architects — people who think spatially.

## Research & Discovery

I studied how architects actually browse plans. The key insight: they start with site constraints (block width, then depth), not with the house style. A 12-metre-wide block eliminates most plans immediately. This reversed the typical filter priority — dimensions first, then rooms.

### Filter Design Decisions

**Range sliders for dimensions, not dropdowns.** Block widths vary continuously (8m to 25m+), so discrete buckets would force arbitrary boundaries. Continuous sliders let users set exact constraints matching their site survey.

**Bedroom count as toggle chips, not a slider.** Unlike dimensions, bedroom count is discrete and low-cardinality (2–6). Chips are faster than a slider for this — one tap vs. drag-and-release.

**Builder as a searchable multi-select.** With 26+ builders, a flat list would be overwhelming. The searchable dropdown handles both "I want Metricon plans" and "show me everything" use cases.

**No "Apply" button.** Filters update results in real-time. This gives immediate feedback on how restrictive a filter combination is — if the result count drops to zero, the user sees it instantly and can relax a constraint.

## Key Screens

The search interface uses a sidebar filter panel on desktop (always visible) and a bottom sheet on mobile (tap to expand). Results display as cards with the floor plan image prominent — architects need to see the layout at a glance, not read a description.

## Outcome

The filter system handles 1,600+ plans across 13 builders with sub-second response times. The dimension-first approach aligns with how architects actually work, reducing the average filter-to-result time compared to browsing individual builder websites.`,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
