import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import { content } from './data/content'
import { legalBySlug } from './data/legal'

import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Grain from './components/Grain'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Rules from './components/Rules'
import Aftermovie from './components/Aftermovie'
import Marquee from './components/Marquee'
import Judges from './components/Judges'
import Program from './components/Program'
import Partners from './components/Partners'
import Organizers from './components/Organizers'
import Tickets from './components/Tickets'
import Legal from './components/Legal'
import Footer from './components/Footer'

// Section anchors (#tickets) and document routes (#/obchodni-podminky) share
// the hash. The leading slash is what separates them — anything else is a
// scroll target on the landing page, which is what the whole site was until
// the legal documents arrived.
const routeSlug = (hash) => (hash.startsWith('#/') ? hash.slice(2) : '')

export default function App() {
  const [lang, setLang] = useState('cz')
  const [hash, setHash] = useState(() => window.location.hash)
  const t = content[lang]
  const doc = legalBySlug(routeSlug(hash))

  useLenis()

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Leaving a document through a navbar link only changes the hash — Lenis had
  // no element to scroll to at click time, because the landing page wasn't
  // mounted yet. Once it is, finish the jump the link asked for.
  //
  // The jump is native rather than a Lenis animation: at this point Lenis has
  // just watched the document grow from one short page to the full landing
  // page, and animating against those stale dimensions lands nowhere. We
  // measure, jump, and hand Lenis the new position so the next wheel tick
  // carries on from here instead of snapping back.
  useEffect(() => {
    if (doc || !hash || hash.startsWith('#/')) return
    const timer = setTimeout(() => {
      const target = document.querySelector(hash)
      if (!target) return
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      if (window.__lenis) window.__lenis.resize()
      window.scrollTo(0, top)
      if (window.__lenis) window.__lenis.scrollTo(top, { immediate: true })
    }, 100)
    return () => clearTimeout(timer)
  }, [hash, doc])

  useEffect(() => {
    document.documentElement.lang = lang === 'cz' ? 'cs' : 'en'
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'cz' ? 'en' : 'cz'))

  return (
    // reducedMotion="user" makes Framer honour the OS "reduce motion" setting.
    // The @media rule in global.css only covers CSS animations — every reveal,
    // parallax and marquee here is JS-driven and ignored it.
    <MotionConfig reducedMotion="user">
      <Preloader />
      <Cursor />
      <Grain />
      <ScrollProgress />
      <Navbar t={t} lang={lang} onToggleLang={toggleLang} />
      {doc ? (
        <main>
          <Legal doc={doc} lang={lang} backLabel={t.legalBack} />
        </main>
      ) : (
      <main>
        <Hero t={t} />
        <About t={t} />
        <Rules t={t} />
        <Aftermovie t={t} aftermovieId="Fsk82gwyffY" />
        <Marquee />
        <Judges t={t} lang={lang} />
        <Program t={t} />
        <Partners t={t} />
        <Organizers t={t} />
        <Tickets t={t} />
      </main>
      )}
      <Footer t={t} />
    </MotionConfig>
  )
}
