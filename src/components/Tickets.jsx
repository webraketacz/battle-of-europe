import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'
import Countdown from './Countdown'
import { useLite } from '../hooks/useLite'
import './tickets.css'

const WIDGET_ORIGIN = 'https://app.terminuj.cz'
const WIDGET_BASE = `${WIDGET_ORIGIN}/vstupenka/org_ad27c13775de`

// Terminuj embeds, keyed by the ticket ids in content.js. They all run on
// Terminuj's own theme — no colour overrides. Each posts a `terminuj:resize`
// message up to us as its own content grows or shrinks.
const WIDGETS = {
  spectator: `${WIDGET_BASE}/tt_42aa5f68eff2_a?lang=en`,
  competitor: `${WIDGET_BASE}/tt_42aa5f68eff2_b?lang=en`,
  bundleSpectator: `${WIDGET_BASE}/pkg_1787812738999_907bv?lang=en`,
  bundleCompetitor: `${WIDGET_BASE}/pkg_1787812687133_44cqu?lang=en`,
  merch: `${WIDGET_BASE}/mrch_788e5e1fe0ae?lang=en`,
}

// Terminuj's snippet ships this as the iframe height before any resize message
// arrives; keeping it as the floor stops the cards jumping on first paint.
const MIN_WIDGET_H = 560

export default function Tickets({ t }) {
  const lite = useLite()
  // id -> iframe element, so a resize message can be traced back to its card.
  const frames = useRef({})
  // id -> px reported by the widget itself.
  const [heights, setHeights] = useState({})

  const types = t.ticketTypes || []
  const groups = useMemo(() => {
    const defined = t.ticketGroups || []
    return defined
      .map((g) => ({ ...g, items: types.filter((type) => type.group === g.id) }))
      .filter((g) => g.items.length)
  }, [t])

  // Every group is on the page, one under the other — the strip above them is a
  // shortcut, not a filter, so nobody who misses it misses a product either.
  const [active, setActive] = useState(groups[0]?.id)
  const groupEls = useRef({})

  useEffect(() => {
    const els = groups.map((g) => groupEls.current[g.id]).filter(Boolean)
    if (!els.length) return
    // Band across the middle of the viewport: whichever group is crossing it
    // owns the highlight.
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting)
        if (!hit.length) return
        const top = hit.reduce((a, b) => (a.boundingClientRect.top <= b.boundingClientRect.top ? a : b))
        const id = Object.keys(groupEls.current).find((key) => groupEls.current[key] === top.target)
        if (id) setActive(id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [groups])

  // The vendor's copy-paste snippet resizes one hard-coded iframe id, so with
  // several widgets on the page every message would resize all of them to the
  // same height. Match on the message source instead and only record the height
  // for the frame that actually sent it.
  useEffect(() => {
    const onMessage = (e) => {
      if (e.origin !== WIDGET_ORIGIN) return
      const { type, height } = e.data || {}
      if (type !== 'terminuj:resize' || typeof height !== 'number') return
      const entry = Object.entries(frames.current).find(([, f]) => f && f.contentWindow === e.source)
      if (!entry) return
      setHeights((prev) => (prev[entry[0]] === height ? prev : { ...prev, [entry[0]]: height }))
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  // Cards in a group share the tallest widget's height so a row never ends up
  // ragged — the extra space is the widget's own background, so it reads as one
  // block rather than two mismatched ones.
  const groupHeight = (group) =>
    Math.max(MIN_WIDGET_H, ...group.items.map((item) => heights[item.id] || 0))

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

        {groups.length > 1 && (
          <Reveal as="nav" delay={0.24} className="ticket-tabs" aria-label={t.ticketsTitle}>
            {groups.map((group) => (
              // Plain anchors: Lenis picks them up for the animated scroll on
              // desktop, and they still work if its script never runs.
              <a
                key={group.id}
                href={`#tickets-${group.id}`}
                className={`ticket-tab${active === group.id ? ' is-active' : ''}`}
                aria-current={active === group.id ? 'true' : undefined}
              >
                {active === group.id && (
                  <motion.span layoutId="ticket-tab-pill" className="ticket-tab__pill" transition={lite ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 36 }} />
                )}
                <span className="ticket-tab__label">{group.label}</span>
              </a>
            ))}
          </Reveal>
        )}

        {groups.map((group) => {
          const height = groupHeight(group)
          return (
            <div
              key={group.id}
              id={`tickets-${group.id}`}
              className="tickets-group"
              ref={(el) => { groupEls.current[group.id] = el }}
            >
              <Reveal as="h3" amount="some" className="eyebrow tickets-group__label">
                {group.label}
              </Reveal>

              <div className="tickets-grid">
                {group.items.map((type, i) => (
                  <Reveal
                    key={type.id}
                    delay={i * 0.08}
                    // "some" (threshold 0), not the default 25%: a card can be
                    // taller than the viewport, and a ratio-based threshold
                    // left it blank well after it had scrolled into view.
                    amount="some"
                    className={`ticket-card${type.photo ? ' ticket-card--wide' : ''}`}
                  >
                    <div className="ticket-card__head">
                      <h4 className="ticket-card__title">{type.label}</h4>
                      <p className="ticket-card__desc">{type.desc}</p>
                    </div>

                    {(() => {
                      const widget = (
                        <div className="ticket-card__widget">
                          <iframe
                            ref={(el) => { frames.current[type.id] = el }}
                            src={WIDGETS[type.id]}
                            title={type.label}
                            allow="payment"
                            loading="lazy"
                            style={{ height }}
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
          )
        })}

        {t.ticketingBy && (
          <Reveal as="p" delay={0.34} amount="some" className="ticketing-by">
            {t.ticketingBy.before}
            <a href="https://terminuj.cz" target="_blank" rel="noopener noreferrer">
              {t.ticketingBy.brand}
            </a>
            {t.ticketingBy.after}
          </Reveal>
        )}
      </div>
    </section>
  )
}
