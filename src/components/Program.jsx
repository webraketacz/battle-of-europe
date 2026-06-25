import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'

const EASE = [0.16, 1, 0.3, 1]

export default function Program({ t }) {
  const [active, setActive] = useState(1)
  const day = t.days[active]

  return (
    <section id="program" className="container" style={{ padding: '40px var(--pad) 120px', scrollMarginTop: 90 }}>
      <Reveal as="div" className="eyebrow" y={18} duration={0.7}>
        {t.programEyebrow}
      </Reveal>
      <AnimatedText text={t.programTitle} className="section-title" style={{ marginTop: 14, fontSize: 'clamp(36px,5.5vw,76px)' }} delay={0.05} />

      {/* tabs */}
      <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {t.days.map((d, i) => {
          const isActive = i === active
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'flex-start',
                padding: '14px 24px',
                borderRadius: 14,
                cursor: 'pointer',
                border: `1px solid ${isActive ? 'var(--red)' : 'rgba(255,255,255,.14)'}`,
                background: isActive ? 'transparent' : 'rgba(255,255,255,.03)',
                color: isActive ? '#fff' : 'rgba(255,255,255,.78)',
                transition: 'color .25s, border-color .25s',
                overflow: 'hidden',
              }}
            >
              {isActive && (
                <motion.span
                  layoutId="dayPill"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  style={{ position: 'absolute', inset: 0, background: 'var(--red)', borderRadius: 13, zIndex: 0 }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--font-display)', fontSize: 20, textTransform: 'uppercase', transform: 'skewX(-6deg)' }}>
                {d.label}
              </span>
              <span style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '.06em', opacity: 0.8 }}>
                {d.sub}
              </span>
            </button>
          )
        })}
      </div>

      {/* timeline */}
      <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { staggerChildren: 0.06 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            {day.items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="program-row"
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,2vw,26px)', color: 'var(--pink)', transform: 'skewX(-6deg)' }}>
                  {it.time}
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 20, textTransform: 'uppercase', letterSpacing: '.02em' }}>{it.title}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,.6)', marginTop: 4 }}>{it.desc}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.4)', marginTop: 6 }}>{it.place}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
