import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  const links = [
    { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin, external: true },
    { label: 'GitHub', href: profile.github, icon: Github, external: true },
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail, external: false },
  ]

  return (
    <footer className="relative border-t border-white/[0.07] bg-ink-soft/40">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/12 bg-white/[0.03] font-display text-[0.9375rem] font-bold tracking-tight text-bone">
              {profile.monogram}
            </span>
            <div>
              <p className="font-display text-[0.9375rem] font-medium tracking-tight text-bone">
                {profile.name}
              </p>
              <p className="mt-0.5 text-[0.8125rem] text-faint">
                {profile.roles.join(' · ')}
              </p>
            </div>
          </div>

          <ul className="flex items-center gap-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer noopener' : undefined}
                  aria-label={link.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist transition-all duration-400 hover:border-signal/45 hover:bg-signal/10 hover:text-bone"
                >
                  <link.icon size={15} />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-[0.8125rem] text-mist transition-colors duration-400 hover:text-bone"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 transition-all duration-400 group-hover:-translate-y-0.5 group-hover:border-signal/45">
              <ArrowUp size={13} />
            </span>
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-[0.75rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="mono text-[0.6875rem] uppercase tracking-[0.16em]">
            Built with React · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
