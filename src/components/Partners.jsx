import { motion } from 'framer-motion'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'
import { partners } from '../data/content'

export default function Partners({ t }) {
  return (
    <section id="partners" className="container" style={{ padding: '40px var(--pad) 120px', scrollMarginTop: 90 }}>
      <Reveal as="div" className="eyebrow" y={18} duration={0.7}>
        {t.partnersEyebrow}
      </Reveal>
      <AnimatedText text={t.partnersTitle} className="section-title" style={{ marginTop: 14, marginBottom: 42, fontSize: 'clamp(36px,5.5vw,76px)' }} delay={0.05} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 18 }}>
        {partners.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.06 }}
            whileHover={{ y: -6 }}
            style={{
              aspectRatio: '16/9',
              borderRadius: 16,
              border: '1px solid rgba(255,255,255,.1)',
              background: 'repeating-linear-gradient(135deg,rgba(255,255,255,.03) 0 10px,rgba(255,255,255,.05) 10px 20px)',
              display: 'grid',
              placeItems: 'center',
              transition: 'border-color .3s, box-shadow .3s',
            }}
            className="partner-tile"
          >
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>
              {p}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
