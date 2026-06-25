import { useEffect, useState } from 'react'
import { useLenis } from './hooks/useLenis'
import { content } from './data/content'

import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Grain from './components/Grain'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Aftermovie from './components/Aftermovie'
import Marquee from './components/Marquee'
import Judges from './components/Judges'
import Program from './components/Program'
import Partners from './components/Partners'
import Organizers from './components/Organizers'
import Tickets from './components/Tickets'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('cz')
  const t = content[lang]

  useLenis()

  useEffect(() => {
    document.documentElement.lang = lang === 'cz' ? 'cs' : 'en'
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'cz' ? 'en' : 'cz'))

  return (
    <>
      <Preloader />
      <Cursor />
      <Grain />
      <ScrollProgress />
      <Navbar t={t} lang={lang} onToggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Aftermovie t={t} />
        <Marquee />
        <Judges t={t} />
        <Program t={t} />
        <Partners t={t} />
        <Organizers t={t} />
        <Tickets t={t} />
      </main>
      <Footer t={t} />
    </>
  )
}
