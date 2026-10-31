import { motion } from 'framer-motion'
import {
  Container,
  Database,
  FlaskConical,
  Layers,
  Network,
  Server,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import { skillCategories, type IconName } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

const ICONS: Record<IconName, LucideIcon> = {
  server: Server,
  layers: Layers,
  database: Database,
  container: Container,
  network: Network,
  smartphone: Smartphone,
  flask: FlaskConical,
}

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[number]
  index: number
}) {
  const Icon = ICONS[category.icon]

  return (
    <Reveal delay={0.05 * index} className="h-full">
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group panel panel-hover relative h-full overflow-hidden rounded-3xl p-7"
      >
        {/* Hover bloom */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-signal/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        />

        <div className="relative flex items-start justify-between gap-4">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-signal transition-colors duration-500 group-hover:border-signal/40">
            <Icon size={19} strokeWidth={1.6} />
          </span>
          <span className="mono text-[0.625rem] tracking-[0.18em] text-faint">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="relative mt-6 font-display text-[1.25rem] font-semibold tracking-tight text-bone">
          {category.title}
        </h3>
        <p className="relative mt-2 text-[0.875rem] leading-relaxed text-mist">{category.focus}</p>

        <ul className="relative mt-6 flex flex-wrap gap-2">
          {category.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 font-mono text-[0.6875rem] tracking-tight text-mist transition-all duration-500 group-hover:border-white/[0.14] group-hover:text-bone"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.article>
    </Reveal>
  )
}

export function Skills() {
  const [primary, secondary] = [skillCategories.slice(0, 6), skillCategories.slice(6)]

  return (
    <Section
      id="skills"
      index="02"
      tone="raised"
      eyebrow="Capabilities"
      title={
        <>
          The stack I reach for, and{' '}
          <span className="text-signal">why it fits the problem.</span>
        </>
      }
      lede="A backend-heavy toolkit sharpened by real production work — every technology below was used on a shipped project, not collected from a tutorial."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {primary.map((category, index) => (
          <SkillCard key={category.id} category={category} index={index} />
        ))}
      </div>

      {/* Test & Automation sits as a full-width band — it is a discipline,
          not a single technology, and the layout should say so. */}
      {secondary.map((category) => (
        <Reveal key={category.id} delay={0.1} className="mt-5">
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group panel panel-hover relative flex flex-col gap-6 overflow-hidden rounded-3xl p-7 lg:flex-row lg:items-center lg:gap-10"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-violet/15 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
            />

            <div className="relative flex items-center gap-4 lg:w-64 lg:flex-none">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-violet transition-colors duration-500 group-hover:border-violet/40">
                <FlaskConical size={19} strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="font-display text-[1.25rem] font-semibold tracking-tight text-bone">
                  {category.title}
                </h3>
                <p className="mt-1 text-[0.8125rem] text-mist">{category.focus}</p>
              </div>
            </div>

            <span aria-hidden className="relative hidden h-12 w-px bg-white/[0.08] lg:block" />

            <ul className="relative flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3.5 py-1.5 font-mono text-[0.6875rem] tracking-tight text-mist transition-all duration-500 group-hover:border-white/[0.14] group-hover:text-bone"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        </Reveal>
      ))}
    </Section>
  )
}
