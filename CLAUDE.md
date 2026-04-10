# sheacullen.com

Personal portfolio site for Shea Cullen -- architect, product designer. Showcases projects (Dudils, Good Architect, FriendsFindMe) as interactive postcard-style cards with a dark, gold-accented aesthetic.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack dev server)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 via PostCSS
- **Image optimization**: sharp, Next.js `<Image>` with AVIF/WebP
- **Deployed on**: Vercel
- **Package manager**: npm (no pnpm-lock or yarn.lock present)

## Commands

| Command         | What it does                        |
|-----------------|-------------------------------------|
| `npm run dev`   | Start dev server with Turbopack     |
| `npm run build` | Production build                    |
| `npm run start` | Serve production build locally      |
| `npm run lint`  | Run ESLint (next/core-web-vitals)   |

## Project Structure

```
src/
  app/
    layout.tsx        -- Root layout, Google Fonts, metadata/OG tags
    page.tsx          -- Homepage (hero + postcard grid)
    globals.css       -- Tailwind + custom postcard/flip CSS
    not-found.tsx     -- 404 page
    robots.ts         -- robots.txt generation
    sitemap.ts        -- Sitemap generation
    icon.tsx / apple-icon.tsx -- Dynamic favicon/app icons
    work/[slug]/page.tsx     -- Project detail pages
  components/
    ContactForm.tsx
    EmailLink.tsx     -- mailto + popover CTA
    Footer.tsx
    Header.tsx
    PostcardScrollFlip.tsx  -- Scroll-triggered postcard flip animation
    ProjectCard.tsx
  lib/
    projects.ts       -- Static project data (slug, description, body markdown)
public/images/        -- Postcard images (WebP + SVG)
content/projects/     -- Project content (if used)
```

## Conventions

- Path alias `@/*` maps to `./src/*`
- Seven Google Fonts loaded via `next/font/google` with CSS variables (`--nf-*`)
- Custom font utility classes: `font-serif`, `font-sans`, `font-cursive`, `font-display`, `font-title`, `font-handwrite`
- Brand colors: background `#020202`, gold accent `#f6e3a4`
- Postcard cards use CSS 3D transforms for flip effect (`.postcard-*` classes in globals.css)
- No test suite configured; no database; static content only
