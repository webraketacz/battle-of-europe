import { motion } from 'framer-motion'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'
import CtaButton from './CtaButton'
import Countdown from './Countdown'
import { TICKETS_URL } from '../data/content'

export default function Tickets({ t }) {
  return (
    <section id="tickets" style={{ position: 'relative', textAlign: 'center', padding: '100px var(--pad) 110px', scrollMarginTop: 90, overflow: 'hidden' }}>
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 80% at 50% 40%,rgba(229,9,20,.2),transparent 70%)' }}
      />
      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
        <AnimatedText text={t.ticketsTitle} className="section-title" style={{ fontSize: 'clamp(40px,8vw,110px)', margin: '0 auto' }} />
        <Reveal as="p" delay={0.1} style={{ marginTop: 18, fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,.66)' }}>
          {t.ticketsSub}
        </Reveal>

        <Reveal as="div" delay={0.18} style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
          <Countdown labels={t.countdownLabels} />
        </Reveal>

        <Reveal as="div" delay={0.26} style={{ marginTop: 38 }}>
          <CtaButton href={TICKETS_URL} target="_blank" size="lg">
            {t.cta}
          </CtaButton>
        </Reveal>
      </div>
    </section>
  )
}
