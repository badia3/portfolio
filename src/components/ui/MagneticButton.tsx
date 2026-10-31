import { motion, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'quiet'

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-signal text-white shadow-[0_18px_44px_-20px_rgba(76,125,255,0.85)] hover:shadow-[0_22px_60px_-18px_rgba(76,125,255,0.95)] hover:bg-[#5d8bff]',
  ghost:
    'border border-white/12 text-bone hover:border-signal/45 hover:text-white bg-white/[0.02] hover:bg-white/[0.05]',
  quiet: 'text-mist hover:text-bone',
}

const SIZES: Record<string, string> = {
  md: 'h-12 px-6 text-[0.9375rem]',
  lg: 'h-14 px-7 text-base',
}

/**
 * A button that leans toward the cursor — a small, physical cue that
 * makes the interface feel responsive rather than static.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'lg',
  download,
  target,
  rel,
  className = '',
  strength = 0.28,
  type,
  ariaLabel,
}: {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: keyof typeof SIZES
  download?: boolean
  target?: string
  rel?: string
  className?: string
  strength?: number
  type?: 'button' | 'submit'
  ariaLabel?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const handleMove = (event: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (event.clientX - (rect.left + rect.width / 2)) * strength
    const y = (event.clientY - (rect.top + rect.height / 2)) * strength
    ref.current.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`
  }

  const handleLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate3d(0, 0, 0)'
  }

  const base =
    'group relative inline-flex select-none items-center justify-center gap-2.5 rounded-full font-medium tracking-[-0.01em] transition-[color,background-color,border-color,box-shadow] duration-500 ease-silk will-change-transform'

  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2.5">{children}</span>
      {variant === 'primary' && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 blur-[6px] transition-transform duration-700 ease-silk group-hover:translate-x-[420%]" />
        </span>
      )}
    </>
  )

  const shared = {
    className: `${base} ${SIZES[size]} ${VARIANTS[variant]} ${className}`,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    style: { transform: 'translate3d(0,0,0)' },
  }

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        download={download}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        {...shared}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type ?? 'button'}
      onClick={onClick}
      aria-label={ariaLabel}
      {...shared}
    >
      {inner}
    </motion.button>
  )
}
