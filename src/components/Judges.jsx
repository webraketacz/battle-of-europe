import { useRef } from 'react'
import { motion } from 'framer-motion'
import './judges.css'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'
import { judges } from '../data/content'

function JudgeCard({ j, i }) {
  const ref = useRef(null)

  // pointer-tilt (3D) on fine pointers
  function onMove(e) {
    const el = ref.current
    if (!el || !window.matchMedia('(pointer:fine)').matches) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateY(-8px)`
  }
  function reset() {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
      className="judge-card"
    >
      <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
        <img src={j.img} alt={j.name} className="judge-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} draggable={false} />
        <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(8,4,13,.92))' }} />
        <span
          style={{
            position: 'absolute',
            top: 16,
            left: 16,
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: '#fff',
            background: 'rgba(229,9,20,.9)',
            padding: '6px 12px',
            borderRadius: 999,
          }}
        >
          {j.country}
        </span>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '22px 24px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, textTransform: 'uppercase', transform: 'skewX(-6deg)' }}>{j.name}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.62)', marginTop: 4 }}>{j.role}</p>
      </div>
    </motion.article>
  )
}

export default function Judges({ t }) {
  const trackRef = useRef(null)
  const scrollBy = (dx) => trackRef.current?.scrollBy({ left: dx, behavior: 'smooth' })

  const ArrowBtn = ({ dir }) => (
    <button
      onClick={() => scrollBy(dir * 380)}
      aria-label={dir < 0 ? 'Prev' : 'Next'}
      className="icon-btn icon-btn--accent"
      style={{ width: 54, height: 54 }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d={dir < 0 ? 'M11 4l-5 5 5 5' : 'M7 4l5 5-5 5'} />
      </svg>
    </button>
  )

  return (
    <section id="judges" style={{ position: 'relative', padding: '120px 0', scrollMarginTop: 90 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div>
          <Reveal as="div" className="eyebrow" y={18} duration={0.7}>
            {t.judgesEyebrow}
          </Reveal>
          <AnimatedText text={t.judgesTitle} className="section-title" style={{ marginTop: 14, fontSize: 'clamp(36px,5.5vw,76px)' }} delay={0.05} />
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <ArrowBtn dir={-1} />
          <ArrowBtn dir={1} />
        </div>
      </div>

      <div ref={trackRef} className="no-bar judge-track">
        {judges.map((j, i) => (
          <JudgeCard key={j.name} j={j} i={i} />
        ))}
      </div>
    </section>
  )
}
