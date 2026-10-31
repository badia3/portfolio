import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, ShieldCheck } from 'lucide-react'
import { projects, type Project } from '../data/profile'
import { ProjectVisual } from './ProjectVisual'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

function FeatureCard({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1

  return (
    <Reveal>
      <article className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-2 transition-colors duration-700 hover:border-signal/25">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-signal/[0.09] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        />

        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Visual */}
          <motion.div
            className={flipped ? 'lg:order-2' : ''}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectVisual variant={project.visual} />
          </motion.div>

          {/* Content */}
          <div className={flipped ? 'lg:order-1' : ''}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="mono text-[0.625rem] uppercase tracking-[0.2em] text-signal/80">
                {project.context}
              </span>
              <span aria-hidden className="h-px w-6 bg-white/15" />
              <span className="mono text-[0.625rem] uppercase tracking-[0.16em] text-faint">
                {project.kicker}
              </span>
            </div>

            <h3 className="mt-4 font-display text-[1.75rem] font-semibold tracking-tight text-bone md:text-[2.125rem]">
              {project.title}
            </h3>

            <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-mist md:text-base">
              {project.description}
            </p>

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="flex items-center gap-2 text-[0.8125rem] font-medium text-bone">
                  <ShieldCheck size={14} className="text-signal/80" />
                  Technical challenges
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.challenges.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-mist"
                    >
                      <span aria-hidden className="mt-[0.5em] h-1 w-1 flex-none rounded-full bg-white/25" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-[0.8125rem] font-medium text-bone">
                  <GitBranch size={14} className="text-violet" />
                  My contribution
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.contribution.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-mist"
                    >
                      <span aria-hidden className="mt-[0.5em] h-1 w-1 flex-none rounded-full bg-violet/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/[0.09] bg-white/[0.03] px-3 py-1.5 font-mono text-[0.6875rem] tracking-tight text-mist transition-colors duration-500 group-hover:border-signal/25 group-hover:text-bone"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function CompactCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={0.08 * index}>
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.035] to-transparent p-2 transition-colors duration-700 hover:border-signal/25"
      >
        <div className="relative px-4 pt-4">
          <ProjectVisual variant={project.visual} />
        </div>

        <div className="flex flex-1 flex-col px-4 pb-6 pt-6">
          <span className="mono text-[0.625rem] uppercase tracking-[0.2em] text-signal/80">
            {project.context}
          </span>

          <h3 className="mt-3 font-display text-[1.375rem] font-semibold tracking-tight text-bone">
            {project.title}
          </h3>
          <p className="mt-1.5 text-[0.8125rem] text-faint">{project.kicker}</p>

          <p className="mt-4 flex-1 text-[0.875rem] leading-relaxed text-mist">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/[0.09] bg-white/[0.03] px-2.5 py-1 font-mono text-[0.625rem] tracking-tight text-faint transition-colors duration-500 group-hover:border-signal/25 group-hover:text-mist"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </Reveal>
  )
}

export function Projects() {
  const featured = projects.filter((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Selected work"
      title={
        <>
          Systems built for pressure —{' '}
          <span className="text-signal">dispatch, recovery, healthcare.</span>
        </>
      }
      lede="Two professional platforms and two personal builds. Each one is a story about coordination: between people, between services, and between the code and the reality it has to survive."
    >
      <div className="space-y-6">
        {featured.map((project, index) => (
          <FeatureCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((project, index) => (
          <CompactCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 flex items-center gap-2 text-[0.8125rem] text-faint">
          <ArrowUpRight size={14} className="text-signal/70" />
          Source for these projects is available on request.
        </p>
      </Reveal>
    </Section>
  )
}
