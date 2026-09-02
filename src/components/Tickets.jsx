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

  const [active, setActive] = useState(groups[0]?.id)
  // Iframes are only mounted once their tab has been opened, so the first paint
  // costs two embeds instead of five. Once mounted they stay mounted — the
  // hidden panel keeps its layout (see .tickets-panel--hidden), which is what
  // lets a backgrounded widget go on reporting its real height.
  const [mounted, setMounted] = useState(() => (groups[0] ? [groups[0].id] : []))

  // Language switch swaps the whole content object: fall back to the first tab
  // if the ids ever stop lining up.
  useEffect(() => {
    if (groups.length && !groups.some((g) => g.id === active)) {
      setActive(groups[0].id)
      setMounted((prev) => (prev.includes(groups[0].id) ? prev : [...prev, groups[0].id]))
    }
  }, [groups, active])

  const openTab = (id) => {
    setActive(id)
    setMounted((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  // Roving arrow keys across the tab strip, the expected behaviour for tabs.
  const onTabKeyDown = (e, i) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    e.preventDefault()
    const next = groups[(i + step + groups.length) % groups.length]
    openTab(next.id)
    document.getElementById(`ticket-tab-${next.id}`)?.focus()
  }

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

  // Cards in a tab share the tallest widget's height so a row never ends up
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
          <Reveal as="div" delay={0.24} className="ticket-tabs" role="tablist" aria-label={t.ticketsTitle}>
            {groups.map((group, i) => (
              <button
                key={group.id}
                id={`ticket-tab-${group.id}`}
                type="button"
                role="tab"
                aria-selected={active === group.id}
                aria-controls={`ticket-panel-${group.id}`}
                tabIndex={active === group.id ? 0 : -1}
                className={`ticket-tab${active === group.id ? ' is-active' : ''}`}
                onClick={() => openTab(group.id)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
              >
                {active === group.id && (
                  <motion.span layoutId="ticket-tab-pill" className="ticket-tab__pill" transition={lite ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 36 }} />
                )}
                <span className="ticket-tab__label">{group.label}</span>
              </button>
            ))}
          </Reveal>
        )}

        <div className="tickets-panels">
          {groups.map((group) => {
            if (!mounted.includes(group.id)) return null
            const isActive = active === group.id
            const height = groupHeight(group)
            return (
              <div
                key={group.id}
                id={`ticket-panel-${group.id}`}
                role="tabpanel"
                aria-labelledby={`ticket-tab-${group.id}`}
                aria-hidden={!isActive}
                // Keeps the backgrounded panel out of the tab order (its
                // iframes are still in the DOM, just parked off-screen).
                inert={isActive ? undefined : ''}
                className={`tickets-panel${isActive ? '' : ' tickets-panel--hidden'}`}
              >
                <div className="tickets-grid">
                  {group.items.map((type) => (
                    <div key={type.id} className={`ticket-card${type.photo ? ' ticket-card--wide' : ''}`}>
                      <div className="ticket-card__head">
                        <h3 className="ticket-card__title">{type.label}</h3>
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
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

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
