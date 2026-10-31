import { GraduationCap, Languages, Wrench } from 'lucide-react'
import { education, type Education } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

const ICONS = {
  degree: GraduationCap,
  language: Languages,
  practice: Wrench,
} as const

function Entry({ item, index }: { item: Education; index: number }) {
  const Icon = ICONS[item.kind]

  return (
    <Reveal delay={0.06 * index}>
      <article className="group relative flex gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 transition-all duration-500 ease-silk hover:border-signal/25 hover:bg-white/[0.03]">
        <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-signal transition-colors duration-500 group-hover:border-signal/40">
          <Icon size={17} strokeWidth={1.6} />
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-display text-[1.125rem] font-semibold tracking-tight text-bone">
              {item.school}
            </h3>
            <p className="mono text-[0.6875rem] tracking-tight text-faint">{item.period}</p>
          </div>
          <p className="mt-1.5 text-[0.9375rem] text-mist">{item.degree}</p>
          <p className="mt-2 text-[0.8125rem] leading-relaxed text-faint">{item.detail}</p>
        </div>
      </article>
    </Reveal>
  )
}

export function Education() {
  return (
    <Section
      id="education"
      index="05"
      eyebrow="Education"
      title={
        <>
          A degree in software engineering, and a habit of{' '}
          <span className="text-signal">keeping the fundamentals sharp.</span>
        </>
      }
      lede="Engineering studies at two universities in Tunis, followed by four years of putting the theory to work on systems that could not afford to be theoretical."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {education.map((item, index) => (
          <Entry key={item.school + item.period} item={item} index={index} />
        ))}
      </div>
    </Section>
  )
}
