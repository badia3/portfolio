import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

/**
 * Section frame. Keeps the eyebrow → title → optional lede rhythm
 * consistent so every band on the page reads as the same system.
 */
export function Section({
  id,
  index,
  eyebrow,
  title,
  lede,
  children,
  className = '',
  tone = 'default',
}: {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  lede?: string
  children: ReactNode
  className?: string
  tone?: 'default' | 'raised'
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 ${
        tone === 'raised' ? 'bg-ink-soft' : ''
      } ${className}`}
    >
      <div className="shell py-24 md:py-32">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="mono text-[0.6875rem] font-medium tracking-[0.2em] text-signal/70">
              {index}
            </span>
            <span className="eyebrow">{eyebrow}</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl text-display-md text-bone">{title}</h2>
        </Reveal>

        {lede && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-prose text-[1.0625rem] leading-relaxed text-mist">{lede}</p>
          </Reveal>
        )}

        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </section>
  )
}
