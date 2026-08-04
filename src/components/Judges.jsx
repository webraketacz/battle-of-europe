import { useState } from 'react'
import { motion } from 'framer-motion'
import './judges.css'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'
import { judges } from '../data/content'

const EASE = [0.16, 1, 0.3, 1]

function JudgeCard({ j, i, lang, t }) {
  const [expanded, setExpanded] = useState(false)
  // A judge photo may not be uploaded yet — fall back to an initial tile.
  const [imgOk, setImgOk] = useState(true)

  const country = j.country?.[lang] || j.country?.cz || ''
  const bio = j.bio?.[lang] || j.bio?.cz || ''

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.08 }}
      className="judge-card"
    >
      <div className="judge-photo">
        {imgOk ? (
          <img src={j.img} alt={j.name} className="judge-img" draggable={false} onError={() => setImgOk(false)} />
        ) : (
          <span className="judge-photo__fallback" aria-hidden>
            {j.name.charAt(0)}
          </span>
        )}
        <span className="judge-photo__scrim" />
        <div className="judge-name">
          <h3>{j.name}</h3>
          {country && <p>{country}</p>}
        </div>
      </div>

      <div className="judge-body">
        {bio && <p className="judge-bio">{bio}</p>}
        {j.quote && (
          <>
            <blockquote className={`judge-quote${expanded ? '' : ' judge-quote--clamped'}`}>{j.quote}</blockquote>
            <button className="judge-more" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
              {expanded ? t.judgeLess : t.judgeMore}
            </button>
          </>
        )}
      </div>
    </motion.article>
  )
}

function TbcCard({ i, t }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.08 }}
      className="judge-card judge-card--tbc"
    >
      <div className="judge-photo">
        <span className="judge-tbc-mark">TBC</span>
      </div>
      <div className="judge-body">
        <p className="judge-tbc-label">{t.judgeTbc}</p>
      </div>
    </motion.article>
  )
}

export default function Judges({ t, lang = 'cz' }) {
  return (
    <section id="judges" className="container" style={{ padding: '120px var(--pad)', scrollMarginTop: 90 }}>
      <Reveal as="div" className="eyebrow" y={18} duration={0.7}>
        {t.judgesEyebrow}
      </Reveal>
      <AnimatedText text={t.judgesTitle} className="section-title" style={{ marginTop: 14, fontSize: 'clamp(36px,5.5vw,76px)' }} delay={0.05} />

      <div className="judge-grid">
        {judges.map((j, i) =>
          j.tbc ? <TbcCard key={`tbc-${i}`} i={i} t={t} /> : <JudgeCard key={j.name} j={j} i={i} lang={lang} t={t} />
        )}
      </div>
    </section>
  )
}
