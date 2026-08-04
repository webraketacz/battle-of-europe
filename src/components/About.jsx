import Reveal from './Reveal'
import AnimatedText from './AnimatedText'

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M2.5 9.5L9.5 2.5M4 2.5h5.5V8" />
  </svg>
)

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

      {/* the old stat strip is replaced by direct links into the rules section */}
      <Reveal as="div" y={24} delay={0.1} style={{ marginTop: 54, display: 'flex', flexWrap: 'wrap', gap: 14 }}>
        <a href="#rules-1v1" className="btn btn--outline">
          {t.rulesCta1v1}
          <span className="btn__icon">
            <ArrowIcon />
          </span>
        </a>
        <a href="#rules-team" className="btn btn--outline">
          {t.rulesCtaTeam}
          <span className="btn__icon">
            <ArrowIcon />
          </span>
        </a>
      </Reveal>
    </section>
  )
}
