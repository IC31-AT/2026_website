# AgencyTech 2026 Website

The AgencyTech marketing site, built in **Next.js (App Router) + TypeScript**. The
pages are faithful implementations of the HTML/CSS/JS prototypes designed in Claude
Design; the original prototypes are kept under `new-website/` for provenance.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
src/
  app/                     App Router routes (one folder per page)
    layout.tsx             Root layout — fonts, metadata, motion runtime
    globals.css            Fonts + design-system tokens + shared keyframes/helpers
    page.tsx               Home
    futureproofing/        Futureproofing overview + about + case-studies
    the-review/ ongoing-work/ automations/
    it-services/           IT Services + case-studies
    phishing-simulations/ itad/
    case-studies/          Index + pointzerogroup + squareeye
    book-the-review/ ai-readiness-audit/
  components/              SiteNav, SiteFooter, CaseStudyCard, ImageSlot, Icon,
                           IntroOverlay, ReviewToTrainingReveal, SiteMotion
  lib/                     routes.ts (route map), siteMotion.ts, blobscene.ts
  styles/tokens/           AgencyTech design-system CSS custom properties
public/assets/             Brand logos, marks, blob-scene backgrounds, partner logos
```

## Design system

Two-colour brand — **Cyprus** `#004040` and **Turquoise** `#069A98` — on generous
white space. Brand font **Manrope**. Tokens live in `src/styles/tokens/` and are
consumed everywhere via CSS custom properties (`var(--at-cyprus)`, `var(--radius-md)`,
`var(--shadow-lg)`, the `.at-eyebrow` / `.at-highlight` helpers, etc.). Icons are
[Lucide](https://lucide.dev) via a curated `<Icon>` wrapper. No emoji, British English.

## Motion

Scroll reveals, count-ups, parallax, testimonial crossfades, pinned stack-scroll,
sticky categories, the loop carousel, the branded cursor, and `data-hover` styling
are all handled by a single DOM-driven runtime (`src/lib/siteMotion.ts`), re-initialised
on each client navigation by `SiteMotion`. All effects respect
`prefers-reduced-motion`.

## Notes

- Photographic areas render on-brand `ImageSlot` placeholders until real imagery is
  dropped in — the prototypes did not ship photography.
- A few sections carry prototype placeholder copy/stats (flagged in the source) that
  should be replaced with real figures before launch.
