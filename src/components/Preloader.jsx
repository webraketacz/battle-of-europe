import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Wordmark from './Wordmark'

const EASE = [0.16, 1, 0.3, 1]

/** Brief branded intro curtain that wipes away to reveal the hero. */
export default function Preloader() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setDone(true), 1700)
    return () => clearTimeout(id)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9500,
            background: 'radial-gradient(120% 100% at 50% 30%, #1a0a2e 0%, #0c0714 60%, #08040d 100%)',
            display: 'grid',
            placeItems: 'center',
            padding: '0 8vw',
          }}
        >
          <div style={{ width: 'min(620px, 80vw)', textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: EASE }}>
              <Wordmark />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.3, ease: EASE, delay: 0.1 }}
              style={{ marginTop: 22, height: 2, transformOrigin: '0% 50%', background: 'linear-gradient(90deg,var(--pink),var(--red),transparent)' }}
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ display: 'inline-block', marginTop: 16, fontFamily: 'var(--font-body)', letterSpacing: '.4em', fontSize: 11, textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' }}
            >
              Prague · 2026
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
