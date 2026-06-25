import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Wraps any element and makes it "magnetic": it leans toward the cursor while
 * hovered, then springs back. Disabled on touch / coarse pointers.
 */
export default function Magnetic({ children, strength = 0.35, className, style }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const isFine = typeof window !== 'undefined' && window.matchMedia('(pointer:fine)').matches

  function onMove(e) {
    if (!isFine || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: 'inline-flex', ...style }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
