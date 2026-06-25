import Wordmark from './Wordmark'
import Magnetic from './Magnetic'
import { socials, payments } from '../data/content'

export default function Footer({ t }) {
  return (
    <footer style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,.08)', padding: '70px var(--pad) 0', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 40, padding: 0 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'grid', placeItems: 'center', width: 46, height: 46, borderRadius: '50%', background: '#000', overflow: 'hidden', boxShadow: '0 0 0 1px rgba(255,255,255,.12)' }}>
              <img src="./images/logo.jpg" alt="Shuffle School" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontStyle: 'italic', textTransform: 'uppercase', fontSize: 15, lineHeight: 1 }}>
              Shuffle
              <br />
              School
            </span>
          </div>
          <p style={{ marginTop: 18, fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.5)', maxWidth: '30ch' }}>{t.footerTag}</p>
        </div>

        <div>
          <h5 className="footer-h">{t.footerNav}</h5>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {t.nav.map((n) => (
              <a key={n.href} href={n.href} className="footer-link">
                {n.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="footer-h">{t.footerLegal}</h5>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="#" className="footer-link">{t.legalTerms}</a>
            <a href="#" className="footer-link">{t.legalPayment}</a>
          </div>
        </div>

        <div>
          <h5 className="footer-h">{t.footerFollow}</h5>
          <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
            {socials.map((s) => (
              <Magnetic key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="icon-btn icon-btn--accent" style={{ width: 42, height: 42, fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-body)' }}>
                  {s.short}
                </a>
              </Magnetic>
            ))}
          </div>
          <div style={{ marginTop: 22, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {payments.map((pm) => (
              <span key={pm} style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '.06em', color: 'rgba(255,255,255,.5)', border: '1px solid rgba(255,255,255,.14)', padding: '6px 10px', borderRadius: 7 }}>
                {pm}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', marginTop: 64, overflow: 'hidden' }}>
        <Wordmark style={{ opacity: 0.07 }} />
      </div>

      <div
        className="container footer-bottom"
        style={{ padding: '22px 0 34px', borderTop: '1px solid rgba(255,255,255,.06)', fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.4)' }}
      >
        <span>© 2026 Battle of Europe · Shuffle School Kalafa Batela</span>

        <Magnetic strength={0.3}>
          <a href="https://mjdesign.cz" target="_blank" rel="noopener noreferrer" className="made-by" aria-label="Made by Mjdesign">
            <span className="made-by__label">Made by</span>
            <span className="made-by__brand">
              <span className="made-by__dot" />
              Mjdesign
            </span>
            <svg className="made-by__arrow" width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2.5 9.5L9.5 2.5M4 2.5h5.5V8" />
            </svg>
          </a>
        </Magnetic>
      </div>
    </footer>
  )
}
