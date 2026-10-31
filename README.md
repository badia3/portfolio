# Mohamed Badii Bejaoui — Portfolio

A premium personal portfolio site for a Software Engineer / Backend & Full Stack Developer.

Every piece of content on this site is transcribed from `CV_badia_EN_2.pdf` and the
social profiles embedded in it. Nothing is invented — see *Content sourcing* below.

## Stack

| Concern    | Choice |
|------------|--------|
| Framework  | React 18 + TypeScript |
| Build      | Vite 5 |
| Styling    | Tailwind CSS 3 (extended design tokens) |
| Motion     | Framer Motion 11 |
| Icons      | lucide-react |

## Getting started

```bash
npm install
npm run dev      # dev server on :5173
npm run build    # typecheck + production build to dist/
npm run preview  # serve the production build
```

`dist/` is a fully static bundle — it can be dropped on any static host
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3).

## Design system

Tokens live in `tailwind.config.js`; component-layer utilities and the
reduced-motion rules live in `src/index.css`.

- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (labels, data, chips)
- **Colour** — `--ink` base, `--signal` blue accent, `--violet` secondary, `--live` for status
- **Signature motif** — the *signal trace*: a travelling packet of light along a bus
  line. It appears as the marquee ticker, the vertical timeline, and the section rules.
  It references both the emergency-dispatch domain (Tactilia) and the RabbitMQ
  event-driven work described in the CV.
- **Motion** — all transitions share one easing curve (`--ease-silk`) so the page
  reads as a single system. `prefers-reduced-motion` disables every decorative loop.

## Structure

```
src/
  data/profile.ts        ← single source of truth for all copy and CV data
  components/
    Nav.tsx              fixed nav, scroll-spy, mobile sheet
    Hero.tsx             two-column intro, portrait, CTAs
    SignalStrip.tsx      technology ticker
    About.tsx            narrative + profile panel
    Skills.tsx           seven capability groups
    Experience.tsx       animated timeline with the live signal trace
    Projects.tsx         featured + compact project cards
    ProjectVisual.tsx    abstract interface concepts (not screenshots)
    Education.tsx        degrees, languages, engineering practices
    Contact.tsx          channels, copy-email, validated form
    Footer.tsx
    ui/                  Reveal, MagneticButton, Section
  hooks/useScroll.ts     scroll-spy, scrolled state, scroll lock
```

## Content sourcing

- Roles, dates, locations, responsibilities and technologies: copied verbatim from the CV.
- Social links: extracted from the PDF's embedded URI annotations —
  `github.com/badiiii3`, `linkedin.com/in/moahamed-badia-bejaoui`, `bejaouib219@gmail.com`.
- Photographic portrait: `public/portrait.png`, the supplied image (transparent cut-out,
  palette-quantised to 102 KB).
- CV download: `public/Mohamed-Badii-Bejaoui-CV.pdf`, the supplied PDF.
- Project visuals are **stylised interface concepts drawn in CSS**, not screenshots of
  shipped software, and no project URLs are claimed.
- The CV lists no certifications, so no certification section is shown. The
  "Engineering practices" entry in Education is assembled only from patterns named in
  the CV (Clean Architecture, CQRS, event-driven design, CI/CD, automated testing).

## Known deviations from the original brief

The brief listed a few technologies that do not appear anywhere in the CV. Since the
brief also said to display only CV-supported technologies, these were dropped:
`Nginx`, `Flutter`. `Android` was kept because the Ionic engagement (DropSell) implies
it. Add them back in `src/data/profile.ts` if you have the hands-on experience.

## Contact form

There is no backend. The form validates in the browser and then opens the visitor's
mail client with the message pre-filled via `mailto:`. This is stated in the UI
rather than faking a success state.
