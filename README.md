# Battle of Europe — Landing Page

Premium, animation-rich React rebuild of the **Battle of Europe** landing page —
a shuffle & cutting-shapes dance battle held at OX Club Prague (24 Oct 2026), run
by Shuffle School Kalafa Batela.

Rebuilt 1:1 from the original Framer export, then leveled up with a fully custom
motion system for a high-end, "expensive" feel.

## Stack

- **React 18** + **Vite** — fast, modern build
- **Framer Motion** — scroll reveals, mask text, layout animations, magnetic buttons
- **Lenis** — buttery smooth scrolling
- Plain CSS with design tokens (no UI framework) — full control, tiny footprint

## Highlights

- **Mobile-first** layout with an animated **fullscreen menu** (clip-path reveal + staggered links)
- Branded **preloader** intro curtain
- Hero with animated gradient field, **3D floating glass cubes** (mouse + scroll parallax),
  mask-reveal wordmark, glass info cards and a **live countdown**
- **Word-by-word** mask reveals on every section heading
- **Velocity-reactive marquee** (scrolling speed bends the marquee)
- **Draggable judges carousel** with 3D pointer-tilt cards
- Animated **program tabs** with a shared layout pill
- **Magnetic** buttons + sheen-sweep hovers on every CTA
- Custom blend-mode **cursor**, film-grain overlay, scroll-progress bar
- **CZ / EN** language toggle
- Honours `prefers-reduced-motion`

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Configuration

- `src/data/content.js` — all copy (CZ/EN), judges, program, partners, event date, tickets URL
- Pass a YouTube id to `<Aftermovie aftermovieId="..." />` in `App.jsx` to embed the aftermovie inline

## Assets

Images live in `public/images/`. The original Framer export is kept locally in
`_reference/` (git-ignored) for reference.
