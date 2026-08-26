import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'
import Countdown from './Countdown'
import { useLite } from '../hooks/useLite'

const WIDGET_ORIGIN = 'https://app.terminuj.cz'
const WIDGET_BASE = `${WIDGET_ORIGIN}/vstupenka/org_ad27c13775de`
const WIDGET_THEME =
  'backgroundColor=%23ffffff&textColor=%23111827&buttonTextColor=%23ffffff&borderRadius=18&lang=en'

// Terminuj embeds, keyed by the ticket ids in content.js. Each one posts a
// `terminuj:resize` message up to us as its own content grows or shrinks.
const WIDGETS = {
  spectator: `${WIDGET_BASE}/tt_42aa5f68eff2_a?primaryColor=%23f90401&buttonColor=%23f90401&${WIDGET_THEME}`,
  competitor: `${WIDGET_BASE}/tt_42aa5f68eff2_b?primaryColor=%237c3aed&buttonColor=%237c3aed&${WIDGET_THEME}`,
  merch: `${WIDGET_BASE}/mrch_788e5e1fe0ae?primaryColor=%237c3aed&buttonColor=%237c3aed&${WIDGET_THEME}`,
}

export default function Tickets({ t }) {
  const lite = useLite()
  const frames = useRef([])

  // The vendor's copy-paste snippet resizes one hard-coded iframe id, so with
  // three widgets on the page every message would resize all of them to the
  // same height. Match on the message source instead and only touch the frame
  // that actually sent it.
  useEffect(() => {
    const onMessage = (e) => {
      if (e.origin !== WIDGET_ORIGIN) return
      const { type, height } = e.data || {}
      if (type !== 'terminuj:resize' || typeof height !== 'number') return
      const frame = frames.current.find((f) => f && f.contentWindow === e.source)
      if (frame) frame.style.height = `${height}px`
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  const types = t.ticketTypes || []

  return (
    <section id="tickets" style={{ position: 'relative', textAlign: 'center', padding: '100px var(--pad) 110px', scrollMarginTop: 90, overflow: 'hidden' }}>
      <motion.div
        aria-hidden
        animate={lite ? undefined : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={lite ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 80% at 50% 40%,rgba(249, 4, 1,.2),transparent 70%)' }}
      />
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto' }}>
        <AnimatedText text={t.ticketsTitle} className="section-title" style={{ fontSize: 'clamp(40px,8vw,110px)', margin: '0 auto' }} />
        <Reveal as="p" delay={0.1} style={{ marginTop: 18, fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,.66)' }}>
          {t.ticketsSub}
        </Reveal>

        <Reveal as="div" delay={0.18} style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
          <Countdown labels={t.countdownLabels} />
        </Reveal>

        <div
          style={{
            marginTop: 52,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            alignItems: 'start',
            gap: 24,
            textAlign: 'left',
          }}
        >
          {types.map((type, i) => (
            <Reveal
              key={type.id}
              delay={0.26 + i * 0.08}
              // The merch card runs taller than the viewport once its photo is
              // in; the default 25% threshold would leave its column blank
              // while the two beside it had already faded in.
              amount={0.08}
              style={{
                background: 'rgba(255,255,255,.03)',
                border: '1px solid rgba(255,255,255,.1)',
                borderRadius: 26,
                padding: 18,
              }}
            >
              {/* Fixed-height head so the widgets line up across the row even
                  though the descriptions differ in length. */}
              <div style={{ padding: '10px 8px 18px', minHeight: 96 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 26, letterSpacing: '.01em' }}>
                  {type.label}
                </h3>
                <p style={{ marginTop: 8, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5, color: 'rgba(255,255,255,.6)' }}>
                  {type.desc}
                </p>
              </div>

              <div style={{ background: '#fff', borderRadius: 18, overflow: 'hidden' }}>
                <iframe
                  ref={(el) => { frames.current[i] = el }}
                  src={WIDGETS[type.id]}
                  title={type.label}
                  allow="payment"
                  loading="lazy"
                  style={{ display: 'block', width: '100%', height: 560, border: 'none' }}
                />
              </div>

              {type.photo && (
                <img
                  src={type.photo}
                  alt={type.photoAlt || type.label}
                  loading="lazy"
                  style={{ display: 'block', width: '100%', marginTop: 14, borderRadius: 18, border: '1px solid rgba(255,255,255,.1)' }}
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
