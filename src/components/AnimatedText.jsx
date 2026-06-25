import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

/**
 * Word-by-word mask reveal — each word rides up from behind a clip.
 * Great for big display headings (the "expensive" editorial feel).
 */
export default function AnimatedText({
  text,
  className,
  style,
  as = 'h2',
  stagger = 0.06,
  delay = 0,
  wordStyle,
}) {
  const words = String(text).split(' ')
  const Tag = motion[as] || motion.h2

  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.12em' }}
        >
          <motion.span
            style={{ display: 'inline-block', ...wordStyle }}
            variants={{
              hidden: { y: '110%', rotate: 4 },
              show: { y: '0%', rotate: 0 },
            }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
