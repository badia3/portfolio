import { ArrowUpRight, Globe, MapPin } from 'lucide-react'
import { about, profile } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          Engineering the parts of software that have to{' '}
          <span className="text-signal">keep working</span> when nobody is watching.
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="max-w-2xl font-display text-[1.375rem] font-medium leading-[1.45] tracking-[-0.02em] text-bone md:text-[1.625rem]">
              {about.lead}
            </p>
          </Reveal>

          <div className="mt-9 space-y-6">
            {about.body.map((paragraph, index) => (
              <Reveal key={index} delay={0.06 * index}>
                <p className="max-w-prose text-[1.0625rem] leading-[1.75] text-mist">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <a
              href="#experience"
              className="link-underline group mt-10 inline-flex items-center gap-2 font-medium text-bone"
            >
              See how that played out
              <ArrowUpRight
                size={16}
                className="text-signal transition-transform duration-500 ease-silk group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>

        {/* Facts panel */}
        <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
          <div className="panel grain panel-hover overflow-hidden rounded-3xl p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow">Profile</p>
              <span className="mono text-[0.625rem] uppercase tracking-[0.18em] text-faint">
                {profile.monogram}
              </span>
            </div>

            <dl className="mt-7 space-y-6">
              {about.facts.map((fact) => (
                <div key={fact.label} className="border-b border-white/[0.06] pb-5 last:border-0 last:pb-0">
                  <dt className="mono text-[0.625rem] uppercase tracking-[0.18em] text-faint">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-bone">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[0.75rem] text-mist">
                <MapPin size={12} className="text-signal/80" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[0.75rem] text-mist">
                <Globe size={12} className="text-signal/80" />
                {profile.languages.join(' · ')}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
