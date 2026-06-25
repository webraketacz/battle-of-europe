import Magnetic from './Magnetic'

const ArrowIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M2.5 9.5L9.5 2.5M4 2.5h5.5V8" />
  </svg>
)

/**
 * The site's primary call-to-action. Magnetic, with a sheen sweep (CSS) and a
 * rotating arrow chip on hover.
 */
export default function CtaButton({ children, href, size = 'md', target, onClick, magnetic = true, withChip = true }) {
  const cls = `btn btn--primary${size === 'lg' ? ' btn--lg' : ''}${size === 'sm' ? ' btn--sm' : ''}`
  const inner = (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={cls}
    >
      {children}
      {withChip ? (
        <span className="btn__icon">
          <ArrowIcon />
        </span>
      ) : (
        <ArrowIcon size={14} />
      )}
    </a>
  )
  return magnetic ? <Magnetic strength={0.4}>{inner}</Magnetic> : inner
}
