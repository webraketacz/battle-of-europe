import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Magnetic from './Magnetic'
import CtaButton from './CtaButton'

const EASE = [0.16, 1, 0.3, 1]

const FacebookIcon = () => (
  <svg width="11" height="20" viewBox="0 0 11 20" fill="currentColor">
    <path d="M7.3 20v-9.1h3l.45-3.56H7.3V5.06c0-1.03.29-1.73 1.76-1.73h1.88V.14C10.61.1 9.5 0 8.2 0 5.49 0 3.63 1.66 3.63 4.7v2.63H.6v3.56h3.03V20H7.3z" />
  </svg>
)

const menuVariants = {
  closed: { clipPath: 'circle(0% at 92% 5%)', transition: { duration: 0.5, ease: EASE, when: 'afterChildren' } },
  open: { clipPath: 'circle(150% at 92% 5%)', transition: { duration: 0.7, ease: EASE, when: 'beforeChildren', staggerChildren: 0.07, delayChildren: 0.1 } },
}
const itemVariants = {
  closed: { y: 40, opacity: 0 },
  open: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
}

export default function Navbar({ t, lang, onToggleLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (window.__lenis) open ? window.__lenis.stop() : window.__lenis.start()
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: scrolled ? 68 : 86,
          transition: 'height .35s var(--ease-out), background .35s, backdrop-filter .35s, border-color .35s',
          background: scrolled ? 'rgba(8,4,13,.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,.08)' : 'transparent'}`,
        }}
      >
        <div
          className="container"
          style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}
        >
          {/* logo */}
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <motion.span
              whileHover={{ rotate: -8, scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              style={{
                display: 'grid',
                placeItems: 'center',
                width: 46,
                height: 46,
                borderRadius: '50%',
                background: '#000',
                boxShadow: '0 0 0 1px rgba(255,255,255,.12),0 6px 18px rgba(0,0,0,.5)',
                overflow: 'hidden',
              }}
            >
              <img src="./images/logo.jpg" alt="Shuffle School" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontStyle: 'italic',
                fontSize: 15,
                letterSpacing: '.04em',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              Shuffle
              <br />
              School
            </span>
          </a>

          {/* desktop nav */}
          <nav className="nav-desktop" style={{ alignItems: 'center', gap: 34 }}>
            {t.nav.map((n) => (
              <a key={n.href} href={n.href} className="nav-link">
                {n.label}
              </a>
            ))}
          </nav>

          {/* right cluster */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="nav-desktop">
              <Magnetic>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="icon-btn" style={{ width: 42, height: 42 }}>
                  <FacebookIcon />
                </a>
              </Magnetic>
            </div>
            <div className="nav-desktop">
              <CtaButton href="#tickets" size="sm">
                {t.cta}
              </CtaButton>
            </div>
            <button onClick={onToggleLang} className="btn btn--ghost" style={{ letterSpacing: '.08em' }} aria-label="Switch language">
              {lang === 'cz' ? 'EN' : 'CZ'}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              className="burger"
            >
              <span style={{ transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
              <span style={{ opacity: open ? 0 : 1 }} />
              <span style={{ transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 55,
              background: 'radial-gradient(120% 100% at 80% 0%, #1a0a2e 0%, #0c0714 55%, #08040d 100%)',
              display: 'flex',
              flexDirection: 'column',
              padding: 'clamp(24px,6vw,64px)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontStyle: 'italic', textTransform: 'uppercase', fontSize: 15, lineHeight: 1 }}>
                Shuffle School
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="icon-btn" style={{ width: 52, height: 52, fontSize: 26 }}>
                ×
              </button>
            </div>

            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(6px,1.5vh,14px)' }}>
              {t.nav.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  variants={itemVariants}
                  className="menu-link"
                  whileHover={{ x: 18 }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--pink)', marginRight: 16 }}>
                    0{i + 1}
                  </span>
                  {n.label}
                </motion.a>
              ))}
            </nav>

            <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 18, justifyContent: 'space-between' }}>
              <CtaButton href="#tickets" size="lg" onClick={() => setOpen(false)}>
                {t.cta}
              </CtaButton>
              <a href="mailto:shufflepraque@gmail.com" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>
                shufflepraque@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
