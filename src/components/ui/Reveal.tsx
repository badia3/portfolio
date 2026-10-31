import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Shared motion vocabulary. Every transition uses the same silk easing so
 * the page feels like one system rather than a collection of effects.
 */

export const EASE = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
}

export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
})

/** Mask-style reveal for headline lines: the text rises out of a clip. */
export const lineMask: Variants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 1, ease: EASE } },
}

/**
 * Scroll-triggered reveal wrapper. Falls back to plain rendering when the
 * visitor prefers reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}) {
  const reduce = useReducedMotion()

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
