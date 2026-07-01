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
        {/* photo stage */}
        <Reveal
          y={50}
          style={{
            position: 'relative',
            borderRadius: 26,
            overflow: 'hidden',
            background: 'radial-gradient(circle at 50% 35%,#2a0e54,#0c0714)',
            border: '1px solid rgba(255,255,255,.1)',
            aspectRatio: '4/3',
            display: 'grid',
            placeItems: 'end center',
          }}
        >
          {/* glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(45% 45% at 50% 45%,rgba(255,45,120,.35),transparent 70%)', filter: 'blur(20px)' }} />
          {/* rotating dashed ring */}
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '78%',
              aspectRatio: '1',
              translateX: '-50%',
              translateY: '-50%',
              borderRadius: '50%',
              border: '1.5px dashed rgba(255,255,255,.18)',
              rotate: ringRot,
            }}
          />
          <motion.img
            src="./images/organizers.png"
            alt={t.orgTitle}
            style={{
              position: 'relative',
              width: '82%',
              height: 'auto',
              objectFit: 'contain',
              y: photoY,
              filter: 'drop-shadow(0 24px 50px rgba(0,0,0,.55))',
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
          <Reveal as="div" delay={0.28} style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {t.orgContacts.map((c) => (
              <div key={c.value}>
                <div style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '.16em', fontSize: 11, color: 'var(--pink-soft)', fontWeight: 600 }}>
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
