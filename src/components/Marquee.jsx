import { useRef } from 'react'
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame,
  wrap,
} from 'framer-motion'
import { MARQUEE_TEXT } from '../data/content'

/**
 * Two-row marquee. Base auto-scroll speed, but scroll velocity adds a kick and
 * even flips the direction — a hallmark "premium" interaction.
 */
function Row({ baseVelocity, children, outline }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smooth = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velFactor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false })

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)
  const dir = useRef(1)

  useAnimationFrame((t, delta) => {
    let moveBy = dir.current * baseVelocity * (delta / 1000)
    if (velFactor.get() < 0) dir.current = -1
    else if (velFactor.get() > 0) dir.current = 1
    moveBy += dir.current * moveBy * velFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  const spanStyle = outline
    ? { color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,.28)' }
    : { color: 'var(--red)' }

  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
      <motion.div style={{ x, display: 'flex', whiteSpace: 'nowrap', flexWrap: 'nowrap' }}>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px,9vw,128px)',
              textTransform: 'uppercase',
              transform: 'skewX(-8deg)',
              paddingRight: '0.2em',
              ...spanStyle,
            }}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '36px 0',
        borderTop: '1px solid rgba(255,255,255,.08)',
        borderBottom: '1px solid rgba(255,255,255,.08)',
        background: 'linear-gradient(90deg,#12081c,#1e0c2c,#12081c)',
        overflow: 'hidden',
      }}
    >
      <Row baseVelocity={3} outline>
        {MARQUEE_TEXT}
      </Row>
      <div style={{ marginTop: 6 }}>
        <Row baseVelocity={-3}>{MARQUEE_TEXT}</Row>
      </div>
    </section>
  )
}
