import { ArrowUpRight, Award } from 'lucide-react'
import { certifications, type Certification } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

const sqlCertificate = new URL('../assets/sql.png', import.meta.url).href
const aiAgentsCertificate = new URL('../assets/ai.png', import.meta.url).href
const microsoftGenerativeAiCertificate = new URL('../assets/microsoft-generative-ai.png', import.meta.url).href
const microsoftAzureAiCertificate = new URL('../assets/microsoft-ai-in-azure.png', import.meta.url).href

function Entry({ item, index }: { item: Certification; index: number }) {
  const imageSrc =
    item.title === 'SQL Certification'
      ? sqlCertificate
      : item.title === 'Ai Agents in Practice Certification'
        ? aiAgentsCertificate
        : item.title === 'Introduction to generative AI and agents'
          ? microsoftGenerativeAiCertificate
          : item.title === 'Get started with AI in Azure'
            ? microsoftAzureAiCertificate
            : undefined

  return (
    <Reveal delay={0.06 * index}>
      <article className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5 transition-all duration-500 ease-silk hover:border-signal/25 hover:bg-white/[0.03] md:p-6">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full md:w-[220px]">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-raised">
              <img
                src={imageSrc}
                alt={`${item.title} certificate`}
                className="h-[180px] w-full object-cover object-center md:h-[220px]"
              />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 flex-none place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-signal">
                <Award size={16} strokeWidth={1.6} />
              </span>

              <div className="flex-1">
                <h3 className="font-display text-[1.125rem] font-semibold tracking-tight text-bone">
                  {item.title}
                </h3>
                <p className="mt-1 text-[0.8125rem] text-faint">{item.issuer}</p>
              </div>

              {item.period && (
                <p className="mono text-[0.625rem] tracking-tight text-faint">{item.period}</p>
              )}
            </div>

            <p className="mt-4 text-[0.8125rem] leading-relaxed text-mist">{item.detail}</p>

            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[0.75rem] font-medium text-signal transition-colors duration-300 hover:text-bone"
            >
              Open credential
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      index="05"
      eyebrow="Certifications"
      title={
        <>
          Data and fundamentals I continue to build on —{' '}
          <span className="text-signal">with proof.</span>
        </>
      }
      lede="I keep my technical foundations sharp across data, AI, and cloud technologies."
    >
      <div className="grid gap-4 lg:grid-cols-1">
        {certifications.map((item, index) => (
          <Entry key={item.title + item.period} item={item} index={index} />
        ))}
      </div>
    </Section>
  )
}
