import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

/**
 * Generic scroll-reveal wrapper. Fades + slides its children into place once,
 * when ~15% enters the viewport. `as` lets it render any motion element.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 40,
  duration = 0.9,
  as = 'div',
  once = true,
  amount = 0.25,
  style,
  className,
  ...rest
}) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </M>
  )
}
