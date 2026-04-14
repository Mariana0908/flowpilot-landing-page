# FlowPilot — Landing Page

A responsive landing page prototype for **FlowPilot**, an AI-powered workspace that helps teams organize ideas, tasks, and decisions in one place. Built as part of a Senior Frontend Developer technical challenge.

**Live URL:** _[Deploy to Vercel/Netlify and add URL here]_  
**Repository:** https://github.com/Mariana0908/flowpilot-landing-page

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Mariana0908/flowpilot-landing-page.git
cd flowpilot-landing-page

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI library |
| TypeScript | 6 | Type safety |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling |

No external component libraries or animation libraries were used — all interactions are implemented with CSS transitions and custom keyframe animations.

---

## Project Structure

```
src/
├── assets/
│   └── branding/          # SVG logo
├── components/
│   ├── layout/            # Structural components
│   │   ├── Container.tsx  # Max-width wrapper
│   │   ├── Footer.tsx
│   │   ├── Header.tsx     # Sticky nav with scroll-aware blur
│   │   ├── Section.tsx    # Consistent section padding
│   │   └── SectionHeading.tsx
│   ├── sections/          # Page sections (one per requirement)
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Benefits.tsx
│   │   ├── SocialProof.tsx
│   │   └── FinalCTA.tsx
│   └── ui/                # Reusable UI primitives
│       ├── Button.tsx
│       ├── FeatureCard.tsx
│       ├── Logo.tsx
│       ├── MobileMenu.tsx
│       ├── Reveal.tsx
│       ├── StatCard.tsx
│       └── TestimonialCard.tsx
├── data/
│   └── landing.ts         # All content data (typed)
└── lib/
    └── cn.ts              # Class name utility
```

---

## Design Decisions

### Visual language
- **Dark theme** (`slate-950` base) with `indigo` and `cyan` as accent colors — chosen to feel modern, technical, and trustworthy without being generic.
- **Rounded corners** (`rounded-[1.75rem]`, `rounded-4xl`) give the UI a soft, product-forward feel consistent with modern SaaS tools.
- **Subtle gradients** (`from-indigo-500/15 to-cyan-500/10`) add depth without visual noise.

### Typography & hierarchy
- Inter font for clean readability at all sizes.
- Eyebrow labels in small caps with wide tracking establish section context before the headline.
- Headline sizes scale from `text-4xl` to `text-6xl` using responsive Tailwind classes.

### Component architecture
- **Layout components** (`Section`, `Container`, `SectionHeading`) handle spacing and structure consistently across all sections.
- **Data is separated** from components in `data/landing.ts` with TypeScript types — making content easy to update without touching component logic.
- **`Reveal`** is a lightweight wrapper that applies a CSS `fadeUp` animation with configurable delay and Y offset — no animation library needed.

### Interactions
- **Header**: Becomes more opaque with `backdrop-blur-md` on scroll, providing a clear visual cue of depth.
- **MobileMenu**: Animates open/close using `max-h` + `opacity` transitions (avoids `display: none` flash). Closes on `Escape` key for accessibility.
- **Buttons**: Subtle `-translate-y-0.5` lift on hover with shadow enhancement.
- **Cards**: `hover:-translate-y-1` with border color shift on `FeatureCard`, `StatCard`, `TestimonialCard`, and benefit articles.
- **Reveal animations**: Staggered `fadeUp` entrance animations applied to all section headings and card grids.

### Accessibility
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- `aria-label` on interactive elements (logo link, hamburger button).
- `aria-expanded` on the mobile menu toggle.
- `aria-hidden` on decorative SVGs.
- `focus-visible` ring styles on all interactive elements.
- Keyboard support: `Escape` closes the mobile menu.

---

## How AI-Assisted Tools Were Used

This project was built using **Cline (AI coding assistant in VS Code)** alongside manual review and refinement at every step.

### What AI helped with
- **Scaffolding**: Generating the initial component structure and TypeScript types from the product brief.
- **Copy**: Drafting product messaging (hero headline, feature descriptions, testimonials) aligned with the FlowPilot concept.
- **SVG icons**: Generating inline Heroicons-style SVG paths for each feature card.
- **Boilerplate**: Writing repetitive but correct code (map renders, prop types, aria attributes).
- **Diagnosis**: Identifying missing imports, TypeScript errors, and gaps against the challenge requirements.

### What required manual judgment
- Visual hierarchy decisions (font sizes, spacing scale, color choices).
- Animation timing and easing values.
- Deciding which components warranted `Reveal` wrappers vs. which were purely static.
- Reviewing and correcting AI output (e.g., fixing `JSX.Element` → `ReactElement`, catching missing imports).
- Structuring the component tree for reusability vs. simplicity.

The workflow was iterative: AI generated a first pass → manual review → targeted corrections → AI applied fixes. This mirrors how a senior developer would use AI tools: as an accelerator, not a replacement for judgment.

---

## What I Would Improve With More Time

1. **Intersection Observer for Reveal** — Replace the CSS-only `animate-fade-up` (which fires on load) with an `IntersectionObserver`-based trigger so animations fire when elements enter the viewport.
2. **Hero mockup as an animated component** — The UI preview in the Hero could have subtle animated progress bars or a typing effect to feel more alive.
3. **Form integration** — The "Request access" CTA could open a modal with an email capture form, connected to a service like Resend or Formspree.
4. **Logo assets for trusted companies** — Replace text-only logos with actual SVG placeholder logos for a more polished social proof section.
5. **Dark/light mode toggle** — The design system is dark-first but could support a light variant.
6. **E2E tests** — Add Playwright smoke tests for navigation, mobile menu behavior, and CTA visibility.
7. **Performance audit** — Run Lighthouse and optimize font loading (preconnect to Google Fonts or use a local Inter subset).
