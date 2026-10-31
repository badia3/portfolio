import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useRef } from 'react'
import { experience } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 70%'],
  })

  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 })
  const lineScale = useTransform(smooth, [0, 1], [0, 1])
  const packetTop = useTransform(smooth, [0, 1], ['0%', '100%'])

  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Experience"
      title={
        <>
          Six roles, one throughline:{' '}
          <span className="text-signal">build it so it can be trusted.</span>
        </>
      }
      lede="From automated testing to emergency dispatch — each engagement added a layer: automation, then distribution, then orchestration."
    >
      <div ref={trackRef} className="relative">
        {/* The bus line: a static rail plus a live trace that fills as you scroll */}
        <div
          aria-hidden
          className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-white/[0.14] via-white/[0.07] to-transparent md:left-[9px]"
        />
        <motion.div
          aria-hidden
          style={{ scaleY: lineScale }}
          className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-signal-bright via-signal to-violet/70 shadow-[0_0_14px_rgba(76,125,255,0.65)] md:left-[9px]"
        />
        {/* Travelling packet of light */}
        <motion.div
          aria-hidden
          style={{ top: packetTop }}
          className="absolute left-[7px] -translate-y-1/2 md:left-[9px]"
        >
          <span className="block h-3 w-3 -translate-x-1/3 rounded-full bg-signal-bright shadow-[0_0_18px_4px_rgba(132,167,255,0.6)]" />
        </motion.div>

        <ol className="space-y-6">
          {experience.map((item) => (
            <li key={`${item.company}-${item.period}`} className="relative pl-9 md:pl-12">
              {/* Node */}
              <span
                aria-hidden
                className={`absolute left-0 top-7 grid h-4 w-4 place-items-center rounded-full border md:h-[18px] md:w-[18px] ${
                  item.featured
                    ? 'border-signal/60 bg-ink shadow-[0_0_0_4px_rgba(76,125,255,0.12)]'
                    : 'border-white/20 bg-ink'
                }`}
              >
                {item.featured && (
                  <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_10px_rgba(132,167,255,0.9)]" />
                )}
              </span>

              <Reveal delay={0.05}>
                <article
                  className={`panel panel-hover group relative overflow-hidden rounded-3xl p-6 md:p-8 ${
                    item.featured ? 'lg:p-9' : ''
                  }`}
                >
                  {item.featured && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-signal/[0.11] blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                    />
                  )}

                  <div className="relative flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-[1.3125rem] font-semibold tracking-tight text-bone md:text-[1.5rem]">
                          {item.company}
                        </h3>
                        {item.context && (
                          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-mist">
                            {item.context}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-[0.9375rem] text-signal/90 md:text-base">{item.role}</p>
                    </div>

                    <div className="text-left md:text-right">
                      <p className="mono text-[0.75rem] tracking-tight text-bone">{item.period}</p>
                      <p className="mt-1.5 inline-flex items-center gap-1.5 text-[0.8125rem] text-faint">
                        <MapPin size={12} />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <p className="relative mt-5 max-w-3xl text-[0.9375rem] leading-relaxed text-mist md:text-base">
                    {item.summary}
                  </p>

                  <ul className="relative mt-5 space-y-2.5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[0.9375rem] leading-relaxed text-mist">
                        <span
                          aria-hidden
                          className="mt-[0.55em] h-1 w-1 flex-none rounded-full bg-signal/70"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <ul className="relative mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                    {item.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-white/[0.09] bg-white/[0.025] px-2.5 py-1 font-mono text-[0.625rem] tracking-tight text-faint transition-colors duration-500 group-hover:text-mist"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
