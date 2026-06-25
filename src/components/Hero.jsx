import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Wordmark from './Wordmark'
import FloatingCubes from './FloatingCubes'
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
      whileHover={{ y: -6, borderColor: 'rgba(255,126,176,.55)' }}
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
      <div style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '.2em', fontSize: 12, color: 'var(--pink-soft)', fontWeight: 600 }}>
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
        padding: '140px var(--pad) 70px',
        overflow: 'hidden',
      }}
    >
      {/* animated gradient field */}
      <motion.div style={{ position: 'absolute', inset: 0, scale: lite ? 1 : scale }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(110% 100% at 22% 18%,#ff2d78 0%,#a01f8f 32%,#5b1fb0 56%,#241047 78%,#08040d 100%)',
            // hue-rotate over a full-screen gradient repaints every frame — desktop only
            animation: lite ? 'none' : 'huePulse 16s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: '-25%',
            background: 'radial-gradient(42% 42% at 28% 30%,rgba(255,45,120,.6),transparent 70%)',
            filter: lite ? 'blur(24px)' : 'blur(46px)',
            animation: lite ? 'none' : 'shadeDrift 24s ease-in-out infinite, shadeFade 10s ease-in-out infinite',
            opacity: lite ? 0.7 : 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: '-25%',
            background: 'radial-gradient(48% 48% at 78% 66%,rgba(0,190,255,.4),transparent 70%)',
            filter: lite ? 'blur(28px)' : 'blur(60px)',
            animation: lite ? 'none' : 'shadeDrift 32s ease-in-out infinite reverse, shadeFade 14s ease-in-out infinite',
            opacity: lite ? 0.7 : 1,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(8,4,13,.5),transparent 30%,rgba(8,4,13,.85))' }} />
      </motion.div>

      <FloatingCubes variant="B" />

      <motion.div style={{ position: 'relative', zIndex: 3, maxWidth: 1640, margin: '0 auto', width: '100%', y, opacity }}>
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
