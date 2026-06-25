import { useLite } from '../hooks/useLite'

/**
 * Fixed full-screen film-grain + subtle scanline overlay. Pure CSS/SVG noise,
 * adds a tactile "expensive print" texture over the whole page (desktop only).
 */
const NOISE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>`,
  )

export default function Grain() {
  // A fixed, blend-mode overlay forces a full-page repaint on every scroll
  // frame — too costly on phones, so we drop it there.
  const lite = useLite()
  if (lite) return null
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9000,
        pointerEvents: 'none',
        backgroundImage: `url("${NOISE}")`,
        backgroundSize: '160px 160px',
        opacity: 0.04,
        mixBlendMode: 'overlay',
      }}
    />
  )
}
