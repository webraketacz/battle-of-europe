import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Custom cursor: a small solid dot that tracks 1:1 and a larger ring that lags
 * behind with a spring. The ring grows + inverts over interactive elements.
 * Only mounts on fine pointers (desktop); hidden otherwise.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 280, damping: 28, mass: 0.5 })
  const ry = useSpring(y, { stiffness: 280, damping: 28, mass: 0.5 })

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return
    setEnabled(true)
    document.body.style.cursor = 'none'

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = e.target
      const interactive = el.closest('a, button, [data-cursor="hover"]')
      setHovering(!!interactive)
    }
    const leave = () => setHidden(true)
    const enter = () => setHidden(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)
    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#fff',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: hidden ? 0 : 1,
        }}
      />
      <motion.div
        aria-hidden
        animate={{ scale: hovering ? 1.9 : 1, opacity: hidden ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: rx,
          y: ry,
          translateX: '-50%',
          translateY: '-50%',
          width: 38,
          height: 38,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.6)',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  )
}
