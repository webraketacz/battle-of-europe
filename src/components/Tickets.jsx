import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'
import Countdown from './Countdown'
import { useLite } from '../hooks/useLite'
import './tickets.css'

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

        <div className="tickets-grid">
          {types.map((type, i) => (
            <Reveal
              key={type.id}
              delay={0.26 + i * 0.08}
              // "some" (threshold 0), not the default 25%: the merch card is
              // taller than the viewport, so a ratio-based threshold left it
              // blank well after it had scrolled into view.
              amount="some"
              className={`ticket-card${type.photo ? ' ticket-card--wide' : ''}`}
            >
              <div className="ticket-card__head">
                <h3 className="ticket-card__title">{type.label}</h3>
                <p className="ticket-card__desc">{type.desc}</p>
              </div>

              {(() => {
                const widget = (
                  <div className="ticket-card__widget">
                    <iframe
                      ref={(el) => { frames.current[i] = el }}
                      src={WIDGETS[type.id]}
                      title={type.label}
                      allow="payment"
                      loading="lazy"
                    />
                  </div>
                )
                if (!type.photo) return widget
                return (
                  <div className="merch-body">
                    {widget}
                    <img className="merch-photo" src={type.photo} alt={type.photoAlt || type.label} loading="lazy" />
                  </div>
                )
              })()}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
