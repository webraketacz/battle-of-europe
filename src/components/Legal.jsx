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
 * `#/<slug>` hash route. The documents are binding Czech-law texts and are not
 * translated, so the EN side of the site gets a note rather than a translation.
 */
export default function Legal({ doc, lang, backLabel }) {
  // Each document opens at its own top, not wherever the landing page was left.
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [doc.slug])

  useEffect(() => {
    const previous = document.title
    document.title = `${doc.title} — Battle of Europe`
    return () => {
      document.title = previous
    }
  }, [doc.title])

  return (
    <section className="container legal">
      <Reveal as="div" className="eyebrow" y={18} duration={0.7}>
        {doc.title}
      </Reveal>
      <AnimatedText text={doc.lead} className="section-title legal-title" delay={0.05} />

      {lang === 'en' && (
        <p className="legal-note">
          These terms are the binding Czech-law version and are published in Czech only.
        </p>
      )}

      <div className="legal-body">
        {doc.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      <a href="#top" className="legal-back">
        ← {backLabel}
      </a>
    </section>
  )
}
