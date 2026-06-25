import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin gradient progress bar pinned to the very top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 70,
        transformOrigin: '0% 50%',
        scaleX,
        background: 'linear-gradient(90deg, var(--pink), var(--red), var(--violet))',
      }}
    />
  )
}
