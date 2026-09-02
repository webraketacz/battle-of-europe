import { motion } from 'framer-motion'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'
import { partners, PARTNER_SLOTS, PARTNER_EMAIL } from '../data/content'
import './partners.css'

const RISE = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.4 },
}

export default function Partners({ t }) {
  const delay = (i) => ({ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.06 })

  return (
    <section id="partners" className="container" style={{ padding: '40px var(--pad) 120px', scrollMarginTop: 90 }}>
      <Reveal as="div" className="eyebrow" y={18} duration={0.7}>
        {t.partnersEyebrow}
      </Reveal>
      <AnimatedText text={t.partnersTitle} className="section-title" style={{ marginTop: 14, marginBottom: 42, fontSize: 'clamp(36px,5.5vw,76px)' }} delay={0.05} />

      <div className="partners-grid">
        {partners.map((p, i) => {
          const Tag = p.href ? motion.a : motion.div
          return (
            <Tag
              key={p.name}
              {...(p.href ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...RISE}
              transition={delay(i)}
              whileHover={{ y: -6 }}
              className="partner-tile"
            >
              <img className="partner-tile__logo" src={p.logo} alt={p.name} loading="lazy" style={p.logoW ? { width: p.logoW } : undefined} />
            </Tag>
          )
        })}

        {Array.from({ length: PARTNER_SLOTS }, (_, i) => (
          <motion.div key={`slot-${i}`} aria-hidden {...RISE} transition={delay(partners.length + i)} className="partner-tile partner-tile--empty" />
        ))}

        <motion.div {...RISE} transition={delay(partners.length + PARTNER_SLOTS)} whileHover={{ y: -6 }} className="partner-tile partner-tile--cta">
          <p className="partner-cta__title">{t.partnersCtaTitle}</p>
          <p className="partner-cta__lead">
            {t.partnersCtaLead}
            <br />
            <a className="partner-cta__mail" href={`mailto:${PARTNER_EMAIL}`}>
              {PARTNER_EMAIL}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
