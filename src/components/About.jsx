import Reveal from './Reveal'
import AnimatedText from './AnimatedText'

export default function About({ t }) {
  return (
    <section id="about" className="container" style={{ padding: '130px var(--pad)', scrollMarginTop: 90 }}>
      <Reveal as="div" className="eyebrow" y={18} duration={0.7}>
        {t.aboutEyebrow}
      </Reveal>
      <AnimatedText
        text={t.aboutTitle}
        className="section-title"
        style={{ marginTop: 18, fontSize: 'clamp(44px,7.5vw,104px)', maxWidth: '14ch' }}
        delay={0.05}
      />

      <div style={{ marginTop: 54, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 38 }}>
        {t.aboutBody.map((p, i) => (
          <Reveal key={i} as="p" delay={i * 0.08} style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,.72)' }}>
            {p}
          </Reveal>
        ))}
      </div>

      {/* stat strip */}
      <div
        style={{
          marginTop: 70,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))',
          gap: 1,
          background: 'rgba(255,255,255,.09)',
          border: '1px solid rgba(255,255,255,.09)',
          borderRadius: 22,
          overflow: 'hidden',
        }}
      >
        {t.aboutStats.map((s, i) => (
          <Reveal
            key={i}
            delay={i * 0.08}
            y={24}
            style={{ background: 'var(--bg)', padding: '30px 26px' }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(38px,5vw,58px)', lineHeight: 1, transform: 'skewX(-6deg)', color: '#fff' }}>
              {s.value}
            </div>
            <div style={{ marginTop: 10, fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--pink-soft)', fontWeight: 600 }}>
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
