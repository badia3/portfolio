import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { useRef } from 'react'
import { profile } from '../data/profile'
import { MagneticButton } from './ui/MagneticButton'

const EASE = [0.22, 1, 0.36, 1] as const

const FLOATING = [
  { label: 'Java', className: 'left-[-7%] top-[13%]', delay: '0s' },
  { label: 'Spring Boot', className: 'right-[-7%] top-[24%]', delay: '0.9s' },
  { label: 'Angular', className: 'left-[-10%] bottom-[26%]', delay: '1.7s' },
  { label: '.NET', className: 'right-[-5%] bottom-[13%]', delay: '2.4s' },
]

const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin, external: true },
  { label: 'GitHub', href: profile.github, icon: Github, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail, external: false },
]

const figures = [
  { value: '2022 — 2026', label: 'Professional journey' },
  { value: '6', label: 'Engineering roles' },
  { value: '2', label: 'Engineering degrees' },
  { value: '3', label: 'Working languages' },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '13%'])
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.94])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-7%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0.15])

  const line = {
    hidden: { y: '112%' },
    show: (i: number) => ({
      y: '0%',
      transition: { duration: 1, ease: EASE, delay: 0.35 + i * 0.1 },
    }),
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-24 md:pb-20 md:pt-28"
    >
      <div className="shell w-full">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          {/* ── LEFT: the introduction ─────────────────────────────── */}
          <motion.div style={{ y: contentY, opacity: contentOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-1.5 backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-live" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
              </span>
              <span className="text-[0.8125rem] text-mist">{profile.availability}</span>
            </motion.div>

            <p className="mt-7 font-display text-[1.0625rem] font-medium tracking-tight text-mist sm:text-xl">
              Hello, I&apos;m
            </p>

            <h1 className="mt-2 text-display-xl text-bone">
              <span className="block overflow-hidden">
                <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block">
                  Mohamed Badii
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  custom={1}
                  variants={line}
                  initial="hidden"
                  animate="show"
                  className="block text-signal"
                >
                  Bejaoui
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
              className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-mist sm:text-lg"
            >
              {profile.headline} Backend and full stack work, focused on distributed systems
              and event-driven services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.87 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3"
            >
              <MagneticButton href="#projects" size="lg" className="w-full sm:w-auto">
                Explore My Work
                <ArrowUpRight size={17} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
              <MagneticButton
                href={profile.cvFile}
                download
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto"
              >
                <Download size={17} />
                Download My CV
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 flex items-center gap-5"
            >
              <span className="mono text-[0.6875rem] uppercase tracking-[0.22em] text-faint">
                Connect
              </span>
              <span className="h-px w-8 bg-white/10" />
              <ul className="flex items-center gap-2">
                {socials.map(({ label, href, icon: Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer noopener' : undefined}
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist transition-all duration-400 ease-silk hover:-translate-y-0.5 hover:border-signal/45 hover:bg-signal/10 hover:text-bone"
                    >
                      <Icon size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: the portrait ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}
            style={{ y: portraitY, scale: portraitScale }}
            className="relative mx-auto w-full max-w-[28rem] lg:max-w-none"
          >
            {/* Ambient halo */}
            <div
              aria-hidden
              className="conic-halo absolute -inset-10 -z-10 rounded-[3.5rem] opacity-70"
            />
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[3rem] bg-signal/[0.07] blur-3xl"
            />

            <div className="relative">
              {/* The frame — sized to hug the portrait rather than box it in */}
              <div className="relative mx-auto w-fit">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-1.5 shadow-lift">
                  <div className="relative overflow-hidden rounded-[1.6rem] bg-ink/40">
                    <img
                      src={profile.portrait}
                      alt={`${profile.name}, software engineer`}
                      width={500}
                      height={500}
                      loading="eager"
                      decoding="async"
                      className="block w-[min(23rem,74vw)] select-none drop-shadow-[0_28px_60px_rgba(0,0,0,0.7)]"
                      draggable={false}
                    />

                    {/* Cinematic light sweep across the frame */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent opacity-0 transition-opacity duration-700 hover:opacity-100"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/80 to-transparent"
                    />
                  </div>
                </div>

                {/* Floating technology labels — deliberately breaking the frame edge */}
                {FLOATING.map(({ label, className, delay }) => (
                  <span
                    key={label}
                    aria-hidden
                    className={`absolute ${className} hidden rounded-full border border-white/12 bg-ink/75 px-3 py-1.5 font-mono text-[0.6875rem] font-medium tracking-tight text-mist backdrop-blur-md sm:block`}
                    style={{ animation: `float-soft 8s ease-in-out ${delay} infinite` }}
                  >
                    {label}
                  </span>
                ))}

                {/* Caption plate */}
                <div className="mt-6 flex justify-center">
                  <div className="rounded-full border border-white/10 bg-ink/70 px-4 py-1.5 backdrop-blur-md">
                    <span className="mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist">
                      {profile.caption}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Figures row */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/[0.07] pt-8 sm:grid-cols-4 lg:mt-20"
        >
          {figures.map((figure) => (
            <div key={figure.label}>
              <dt className="font-display text-xl font-semibold tracking-tight text-bone md:text-2xl">
                {figure.value}
              </dt>
              <dd className="mono mt-2 text-[0.6875rem] uppercase tracking-[0.16em] text-faint">
                {figure.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-faint transition-colors duration-400 hover:text-mist lg:flex"
        aria-label="Scroll to About"
      >
        <ArrowDown size={15} className="animate-bounce" />
        <span className="mono text-[0.625rem] uppercase tracking-[0.24em]">Scroll</span>
      </motion.a>
    </section>
  )
}
