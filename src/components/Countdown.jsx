import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EVENT_DATE } from '../data/content'

function getParts() {
  const diff = Math.max(0, new Date(EVENT_DATE).getTime() - Date.now())
  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff / 3600000) % 24)
  const m = Math.floor((diff / 60000) % 60)
  const s = Math.floor((diff / 1000) % 60)
  return { d, h, m, s }
}

function Unit({ value, label }) {
  const str = String(value).padStart(2, '0')
  return (
    <div style={{ textAlign: 'center', minWidth: 64 }}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(34px,5vw,56px)',
          lineHeight: 1,
          transform: 'skewX(-6deg)',
          overflow: 'hidden',
          height: '1em',
          position: 'relative',
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={str}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'inline-block' }}
          >
            {str}
          </motion.span>
        </AnimatePresence>
      </div>
      <div
        style={{
          marginTop: 8,
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--pink-soft)',
          fontWeight: 600,
        }}
      >
        {label}
      </div>
    </div>
  )
}

/** Live ticking countdown to the event. Labels come from the active language. */
export default function Countdown({ labels }) {
  const [parts, setParts] = useState(getParts)
  useEffect(() => {
    const id = setInterval(() => setParts(getParts()), 1000)
    return () => clearInterval(id)
  }, [])

  const sep = (
    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,46px)', opacity: 0.3, transform: 'skewX(-6deg)' }}>:</span>
  )

  return (
    <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 14 }}>
      <Unit value={parts.d} label={labels.days} />
      {sep}
      <Unit value={parts.h} label={labels.hours} />
      {sep}
      <Unit value={parts.m} label={labels.mins} />
      {sep}
      <Unit value={parts.s} label={labels.secs} />
    </div>
  )
}
