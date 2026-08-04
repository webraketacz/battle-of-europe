import Reveal from './Reveal'
import AnimatedText from './AnimatedText'

/**
 * Competition rules, split into the two formats. The two buttons in the About
 * section deep-link straight to these cards via their ids.
 */
export default function Rules({ t }) {
  return (
    <section id="rules" className="container" style={{ padding: '20px var(--pad) 120px', scrollMarginTop: 90 }}>
      <Reveal as="div" className="eyebrow" y={18} duration={0.7}>
        {t.rulesEyebrow}
      </Reveal>
      <AnimatedText text={t.rulesTitle} className="section-title" style={{ marginTop: 14, fontSize: 'clamp(36px,5.5vw,76px)' }} delay={0.05} />

      <div className="rules-grid">
        {t.rules.map((block, i) => (
          <Reveal key={block.id} y={40} delay={i * 0.1}>
            <div className="rules-card" id={block.id}>
              <h3 className="rules-card__title">{block.title}</h3>
              <ul className="rules-list">
                {block.items.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
