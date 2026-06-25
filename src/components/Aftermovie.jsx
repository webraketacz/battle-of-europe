import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'
import { TICKETS_URL } from '../data/content'

/**
 * Poster → click-to-play. If an `aftermovieId` (YouTube) is provided it embeds,
 * otherwise it opens the external page (matches original behaviour).
 */
export default function Aftermovie({ t, aftermovieId = '' }) {
  const [playing, setPlaying] = useState(false)
  const hasVid = aftermovieId.trim().length > 0

  return (
    <section id="aftermovie" className="container" style={{ padding: '30px var(--pad) 120px', scrollMarginTop: 90 }}>
      <Reveal as="div" className="eyebrow" y={18} duration={0.7}>
        {t.afterEyebrow}
      </Reveal>
      <AnimatedText text={t.afterTitle} className="section-title" style={{ marginTop: 14, marginBottom: 42, fontSize: 'clamp(36px,5.5vw,76px)' }} delay={0.05} />

      <Reveal
        y={50}
        style={{
          position: 'relative',
          borderRadius: 26,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,.12)',
          aspectRatio: '16/9',
          background: '#0c0714',
        }}
      >
        {playing && hasVid ? (
          <iframe
            src={`https://www.youtube.com/embed/${aftermovieId}?autoplay=1&rel=0`}
            title="Aftermovie"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          />
        ) : (
          <button
            onClick={() => (hasVid ? setPlaying(true) : window.open(TICKETS_URL, '_blank'))}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, cursor: 'pointer', padding: 0, background: 'none' }}
            aria-label={t.afterPlay}
          >
            <motion.img
              src="./images/aftermovie.jpg"
              alt="Aftermovie"
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05 }}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%,rgba(8,4,13,.15),rgba(8,4,13,.7))' }} />

            {/* pulsing play */}
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', display: 'grid', placeItems: 'center' }}>
              <span
                style={{
                  position: 'absolute',
                  width: 96,
                  height: 96,
                  borderRadius: '50%',
                  border: '1px solid rgba(229,9,20,.6)',
                  animation: 'bobDown 2.4s ease-in-out infinite',
                }}
              />
              <motion.span
                whileHover={{ scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 300, damping: 16 }}
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: '50%',
                  background: 'var(--red)',
                  display: 'grid',
                  placeItems: 'center',
                  boxShadow: '0 12px 50px rgba(229,9,20,.6)',
                }}
              >
                <svg width="30" height="34" viewBox="0 0 30 34" fill="#fff">
                  <path d="M28 15.3 3 .6C1.6-.2 0 .8 0 2.4v29.2c0 1.6 1.6 2.6 3 1.8l25-14.6c1.4-.8 1.4-2.7 0-3.5z" />
                </svg>
              </motion.span>
            </span>

            <span
              style={{
                position: 'absolute',
                bottom: 22,
                left: 24,
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                letterSpacing: '.04em',
                color: '#fff',
                textShadow: '0 2px 12px rgba(0,0,0,.6)',
              }}
            >
              {t.afterPlay}
            </span>
          </button>
        )}
      </Reveal>
    </section>
  )
}
