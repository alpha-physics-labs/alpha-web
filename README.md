# ALPHA — product website

Marketing / product-vision site for **ALPHA**, material intelligence for protective systems.
Clean, Apple-like, scroll-driven single page.

> ALPHA is an early MVP and decision-support concept. It helps teams decide what may be
> worth testing next — it does **not** replace laboratory, NIJ, military, or operational
> testing, and it is not a certified armor design tool.

## Stack

- **Next.js 16** (App Router, TypeScript) — server-rendered, static-exportable
- **Tailwind CSS v4** + a hand-authored design system in `app/globals.css`
- **Motion** (Framer Motion) — entrance reveals, hero parallax, and the sticky
  scrollytelling "How it works" sequence
- **Lucide** available for icons

Fonts: **Stack Sans Notch** (display), **Hanken Grotesk** (body), **JetBrains Mono**
(labels / data), loaded via Google Fonts in `app/layout.tsx`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & run

```bash
npm run build
npm run start
```

## Deploy (Vercel)

Push this folder to a Git repo and import it in Vercel — zero config. Or:

```bash
npx vercel
```

## Structure

```
app/
  layout.tsx        # fonts, metadata, <head>
  page.tsx          # composes all sections
  globals.css       # design tokens + component styles
components/
  Nav.tsx           # sticky nav (solidifies on scroll)
  Hero.tsx          # staggered entrance + glow parallax
  Workflow.tsx      # sticky scrollytelling (Ingest -> Structure -> Analyze -> Rank -> Explain)
  Sections.tsx      # MVP notice, Problem, Capabilities, Example, Data, Tech, Roadmap, Footer
  Contact.tsx       # feedback form
  Reveal.tsx        # reusable scroll-in animation wrapper
  Logo.tsx          # inline SVG shield mark (dark-theme safe)
public/
  logo.png          # favicon / source logo
```

## Editing copy

All section copy lives as plain arrays/JSX inside `components/Sections.tsx` and the
individual component files — no CMS. The color palette and type scale are CSS variables
at the top of `app/globals.css`.
