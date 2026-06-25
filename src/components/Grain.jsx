/**
 * Fixed full-screen film-grain + subtle scanline overlay. Pure CSS/SVG noise,
 * very cheap, adds a tactile "expensive print" texture over the whole page.
 */
const NOISE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>`,
  )

export default function Grain() {
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
