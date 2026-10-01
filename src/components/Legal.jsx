import { useEffect } from 'react'
import Reveal from './Reveal'
import AnimatedText from './AnimatedText'
import './legal.css'

// Turns bare URLs and e-mails in the legal text into links, so the source data
// can stay plain strings instead of carrying markup.
const TOKEN = /(https?:\/\/[^\s,;)]+[^\s,;.)]|[\w.+-]+@[\w-]+\.[\w.]+[\w])/g

function linkify(text) {
  return text.split(TOKEN).map((part, i) => {
    if (i % 2 === 0) return part
    const href = part.includes('@') ? `mailto:${part}` : part
    const external = !part.includes('@')
    return (
      <a key={i} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {part}
      </a>
    )
  })
}

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="legal-h2">{block.text}</h2>
    case 'ul':
      return (
        <ul className="legal-list">
          {block.items.map((item, i) => (
            <li key={i}>{linkify(item)}</li>
          ))}
        </ul>
      )
    case 'address':
      return (
        <address className="legal-address">
          {block.lines.map((line, i) => (
            <span key={i}>{linkify(line)}</span>
          ))}
        </address>
      )
    default:
      return <p className="legal-p">{linkify(block.text)}</p>
  }
}

/**
 * One legal document (terms, payment terms), reached from the footer via a
 * `#/<slug>` hash route. Both languages are kept side by side in the data; the
 * Czech text is the original the organiser signed off, so the English version
 * says as much above the document.
 */
export default function Legal({ doc, lang, backLabel }) {
  const text = doc[lang] || doc.cz

  // Each document opens at its own top, not wherever the landing page was left.
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [doc.slug])

  useEffect(() => {
    const previous = document.title
    document.title = `${text.title} — Battle of Europe`
    return () => {
      document.title = previous
    }
  }, [text.title])

  return (
    <section className="container legal">
      <Reveal as="div" className="eyebrow" y={18} duration={0.7}>
        {text.title}
      </Reveal>
      {/* keyed by language so the mask reveal replays on the translated copy
          instead of leaving the old headline frozen in place */}
      <AnimatedText key={lang} text={text.lead} className="section-title legal-title" delay={0.05} />

      {lang === 'en' && (
        <p className="legal-note">
          This is an English translation of the Czech original. In case of any discrepancy, the Czech version prevails.
        </p>
      )}

      <div className="legal-body">
        {text.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      <a href="#top" className="legal-back">
        ← {backLabel}
      </a>
    </section>
  )
}
