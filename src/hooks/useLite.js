import { useEffect, useState } from 'react'

// "Lite" mode = phones / touch / reduced-motion. We strip the most expensive
// GPU effects (backdrop blur, big animated blurs, 3D backdrop-filter cubes,
// blend-mode grain) so mobile scrolling and the fullscreen menu stay smooth.
const QUERY = '(max-width: 820px), (pointer: coarse)'

function evaluate() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia(QUERY).matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useLite() {
  const [lite, setLite] = useState(evaluate)
  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const onChange = () => setLite(evaluate())
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return lite
}

// Non-reactive one-shot check for modules that read it once (cheap).
export const isLite = evaluate
