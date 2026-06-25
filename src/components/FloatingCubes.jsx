import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const SETS = {
  A: [
    { id: 'c1', size: 190, right: '8%', top: '24%', hue: 330, depth: 1.1, dur: 30, floatDur: 7, delay: 0 },
    { id: 'c2', size: 120, right: '22%', top: '58%', hue: 280, depth: 1.8, dur: 24, floatDur: 6, delay: 1.2 },
    { id: 'c3', size: 96, left: '6%', top: '30%', hue: 190, depth: 2.4, dur: 20, floatDur: 5.5, delay: 0.6 },
    { id: 'c4', size: 70, left: '16%', bottom: '18%', hue: 340, depth: 3.0, dur: 18, floatDur: 5, delay: 2 },
  ],
  B: [
    { id: 'c1', size: 170, right: '-4%', top: '8%', hue: 330, depth: 1.1, dur: 30, floatDur: 7, delay: 0 },
    { id: 'c2', size: 104, right: '8%', bottom: '12%', hue: 280, depth: 1.9, dur: 24, floatDur: 6, delay: 1.2 },
    { id: 'c3', size: 120, right: '26%', top: '18%', hue: 190, depth: 1.5, dur: 22, floatDur: 6.5, delay: 0.6 },
    { id: 'c4', size: 64, left: '-2%', top: '62%', hue: 340, depth: 3.0, dur: 18, floatDur: 5, delay: 2 },
  ],
}

function Cube({ cfg, mx, my }) {
  const s = cfg.size
  const h = s / 2
  const px = useTransform(mx, (v) => v * cfg.depth * 60)
  const py = useTransform(my, (v) => v * cfg.depth * 40)

  const faceTransforms = [
    `translateZ(${h}px)`,
    `rotateY(180deg) translateZ(${h}px)`,
    `rotateY(90deg) translateZ(${h}px)`,
    `rotateY(-90deg) translateZ(${h}px)`,
    `rotateX(90deg) translateZ(${h}px)`,
    `rotateX(-90deg) translateZ(${h}px)`,
  ]

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: cfg.left,
        top: cfg.top,
        right: cfg.right,
        bottom: cfg.bottom,
        width: s,
        height: s,
        pointerEvents: 'none',
        x: px,
        y: py,
        willChange: 'transform',
      }}
    >
      <div style={{ width: '100%', height: '100%', animation: `floatY ${cfg.floatDur}s ease-in-out ${cfg.delay}s infinite` }}>
        <div style={{ width: '100%', height: '100%', perspective: '900px' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              animation: `spin3d ${cfg.dur}s linear infinite`,
            }}
          >
            {faceTransforms.map((t, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: s,
                  height: s,
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,.22)',
                  background: `linear-gradient(135deg, hsla(${cfg.hue},95%,62%,.20), hsla(${cfg.hue + 45},95%,58%,.04))`,
                  boxShadow: `inset 0 0 46px hsla(${cfg.hue},95%,60%,.30)`,
                  backdropFilter: 'blur(2px)',
                  WebkitBackdropFilter: 'blur(2px)',
                  transform: t,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FloatingCubes({ variant = 'B' }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 60, damping: 20 })
  const smy = useSpring(my, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5)
      my.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  const cubes = SETS[variant] || SETS.B
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} aria-hidden>
      {cubes.map((c) => (
        <Cube key={c.id} cfg={c} mx={smx} my={smy} />
      ))}
    </div>
  )
}
