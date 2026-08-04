import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Wordmark from './Wordmark'
import Countdown from './Countdown'
import CtaButton from './CtaButton'
import { useLite } from '../hooks/useLite'

const EASE = [0.16, 1, 0.3, 1]

function GlassCard({ label, value, delay, lite }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      whileHover={{ y: -6, borderColor: 'rgba(126, 162, 255,.55)' }}
      style={{
        // Solid translucent fill on mobile (backdrop-filter is a big repaint cost)
        background: lite ? 'rgba(40,16,60,.55)' : 'rgba(255,255,255,.05)',
        border: '1px solid rgba(255,255,255,.12)',
        borderRadius: 18,
        backdropFilter: lite ? 'none' : 'blur(12px)',
        WebkitBackdropFilter: lite ? 'none' : 'blur(12px)',
        padding: '20px 22px',
      }}
    >
      <div style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '.2em', fontSize: 12, color: 'var(--blue-soft)', fontWeight: 600 }}>
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, textTransform: 'uppercase', transform: 'skewX(-6deg)', marginTop: 6 }}>
        {value}
      </div>
    </motion.div>
  )
}

export default function Hero({ t }) {
  const ref = useRef(null)
  const lite = useLite()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section
      id="top"
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        /* horizontal padding comes from .container on the inner wrapper, so the
           hero sits on the same grid as the navbar and every other section */
        padding: '140px 0 70px',
        overflow: 'hidden',
      }}
    >
      {/* animated gradient field */}
      <motion.div style={{ position: 'absolute', inset: 0, scale: lite ? 1 : scale }}>
        {/* black base with the deep blue bleeding in from the top right,
            mirroring the brand board */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(120% 110% at 80% 8%,#0c2671 0%,#0a1230 34%,#05050a 72%,#05050a 100%)',
          }}
        />
        {/* red wash, bottom left */}
        <div
          style={{
            position: 'absolute',
            inset: '-25%',
            background: 'radial-gradient(44% 44% at 18% 78%,rgba(249,4,1,.55),transparent 70%)',
            filter: lite ? 'blur(24px)' : 'blur(46px)',
            animation: lite ? 'none' : 'shadeDrift 24s ease-in-out infinite, shadeFade 10s ease-in-out infinite',
            opacity: lite ? 0.7 : 1,
          }}
        />
        {/* blue wash, top right */}
        <div
          style={{
            position: 'absolute',
            inset: '-25%',
            background: 'radial-gradient(46% 46% at 82% 24%,rgba(28,86,255,.5),transparent 70%)',
            filter: lite ? 'blur(28px)' : 'blur(60px)',
            animation: lite ? 'none' : 'shadeDrift 32s ease-in-out infinite reverse, shadeFade 14s ease-in-out infinite',
            opacity: lite ? 0.7 : 1,
          }}
        />
        {/* deep red pooling in the lower left corner */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(70% 60% at 8% 100%,#470100,transparent 70%)',
            opacity: 0.85,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(5, 5, 10,.5),transparent 30%,rgba(5, 5, 10,.85))' }} />
      </motion.div>

      <motion.div className="container" style={{ position: 'relative', zIndex: 3, y, opacity }}>
        {t.announce && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="announce"
            style={{ marginBottom: 22 }}
            role="status"
          >
            <span className="announce__chip">
              <span className="announce__dot" />
              {t.announceLabel}
            </span>
            <span className="announce__text">{t.announce}</span>
          </motion.div>
        )}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-body)',
              textTransform: 'uppercase',
              letterSpacing: '.42em',
              fontSize: 13,
              color: 'rgba(255,255,255,.7)',
              fontWeight: 600,
            }}
          >
            {t.heroSub}
          </motion.span>
        </div>

        {/* wordmark reveal: clip up */}
        <div style={{ overflow: 'hidden', marginTop: 18 }}>
          <motion.div
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}
          >
            <Wordmark style={{ filter: 'drop-shadow(0 18px 50px rgba(0,0,0,.55))' }} />
          </motion.div>
        </div>

        {/* info cards */}
        <div
          style={{
            marginTop: 46,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
            gap: 16,
            maxWidth: 860,
            perspective: 1000,
          }}
        >
          <GlassCard label={t.lblDate} value={t.date} delay={0.8} lite={lite} />
          <GlassCard label={t.lblVenue} value={t.venue} delay={0.9} lite={lite} />
          <GlassCard label={t.lblFormat} value={t.format} delay={1.0} lite={lite} />
        </div>

        {/* countdown */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.15 }}
          style={{ marginTop: 40 }}
        >
          <Countdown labels={t.countdownLabels} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.3 }}
          style={{ marginTop: 38 }}
        >
          <CtaButton href="#tickets" size="lg">
            {t.cta}
          </CtaButton>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 54,
          height: 54,
          borderRadius: '50%',
          border: '1.5px dashed rgba(255,255,255,.4)',
          display: 'grid',
          placeItems: 'center',
          color: '#fff',
          textDecoration: 'none',
          animation: 'bobDown 2s ease-in-out infinite',
          zIndex: 3,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M8 2v12M3 9l5 5 5-5" />
        </svg>
      </motion.a>
    </section>
  )
}
