import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Buttery smooth scrolling for the whole document.
 * Also wires anchor links (#about, #judges …) to animate via Lenis.
 * Respects prefers-reduced-motion and pointer-coarse (touch) devices stay native.
 */
export function useLenis() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // intercept in-page anchor clicks for smooth animated scroll
    function onClick(e) {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (!id || id === '#') return
      const target = document.querySelector(id)
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: -80, duration: 1.3 })
    }
    document.addEventListener('click', onClick)

    // expose for programmatic scrolls (e.g. closing the menu)
    window.__lenis = lenis

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', onClick)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])
}
