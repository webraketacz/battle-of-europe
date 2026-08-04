import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'

export default function Organizers({ t }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const ringRot = useTransform(scrollYProgress, [0, 1], [0, 90])

  return (
    <section id="organizers" ref={ref} className="container" style={{ padding: '40px var(--pad) 120px', scrollMarginTop: 90 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 56, alignItems: 'center' }}>
        {/* logo stage */}
        <Reveal
          y={50}
          style={{
            position: 'relative',
            borderRadius: 26,
            overflow: 'hidden',
            // The logo file is a JPEG on solid black, so the stage stays black
            // behind it — otherwise its square/disc edge shows against a lit
            // background, which is what made it read as a pasted-on box.
            background: 'radial-gradient(circle at 50% 45%,#000 0%,#000 46%,#07070e 100%)',
            border: '1px solid rgba(255,255,255,.1)',
            aspectRatio: '4/3',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          {/* brand glow, picked up from the red in the logo itself */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(38% 38% at 50% 46%,rgba(249,4,1,.42),transparent 72%)', filter: 'blur(26px)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(58% 58% at 50% 52%,rgba(28,86,255,.16),transparent 74%)', filter: 'blur(34px)' }} />
          {/* rotating dashed ring, orbiting outside the mark */}
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '86%',
              aspectRatio: '1',
              translateX: '-50%',
              translateY: '-50%',
              borderRadius: '50%',
              border: '1.5px dashed rgba(255,255,255,.14)',
              rotate: ringRot,
            }}
          />
          <motion.img
            src="./images/logo.jpg"
            alt="Kalafa & Batela Shuffle School"
            style={{
              position: 'relative',
              width: '68%',
              height: 'auto',
              objectFit: 'contain',
              // The logo ships as an opaque JPEG on pure black, which punched a
              // visible square out of the glow behind it. `screen` drops the
              // black to transparent and keeps the white/red artwork, so the
              // mark floats with the glow showing through — no edge, and no
              // circular crop that would clip the wordmark arc.
              mixBlendMode: 'screen',
              y: photoY,
            }}
          />
        </Reveal>

        {/* copy */}
        <div>
          <Reveal as="div" className="eyebrow" y={18} duration={0.7}>
            {t.orgEyebrow}
          </Reveal>
          <AnimatedText text={t.orgTitle} className="section-title" style={{ marginTop: 14, fontSize: 'clamp(34px,4.5vw,64px)' }} delay={0.05} />
          {t.orgBody.map((para, i) => (
            <Reveal
              key={i}
              as="p"
              delay={0.1 + i * 0.06}
              style={{ marginTop: i === 0 ? 24 : 16, fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,.72)' }}
            >
              {para}
            </Reveal>
          ))}

          <Reveal
            as="figure"
            delay={0.2}
            style={{
              marginTop: 28,
              paddingLeft: 22,
              borderLeft: '2px solid var(--red)',
            }}
          >
            <blockquote
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 18,
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,.88)',
              }}
            >
              „{t.orgQuote}“
            </blockquote>
            <figcaption
              style={{
                marginTop: 14,
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--blue-soft)',
                fontWeight: 600,
              }}
            >
              — {t.orgQuoteAuthor}
            </figcaption>
          </Reveal>

          <Reveal as="div" delay={0.28} style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {t.orgContacts.map((c) => (
              <div key={c.value}>
                <div style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '.16em', fontSize: 11, color: 'var(--blue-soft)', fontWeight: 600 }}>
                  {c.label}
                </div>
                <a href={c.href} className="org-mail" style={{ marginTop: 4, display: 'inline-block' }}>
                  {c.value}
                </a>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
