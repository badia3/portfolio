/**
 * Full-bleed technology ticker. Runs between the hero and the About band —
 * the first appearance of the signal-trace motif that recurs throughout.
 */
export function SignalStrip() {
  const items = [
    'Java',
    'Spring Boot',
    'C#',
    'ASP.NET Core',
    'Angular',
    'TypeScript',
    'PostgreSQL',
    'RabbitMQ',
    'Docker',
    'Jenkins',
    'Microservices',
    'Event-driven',
    'Camunda BPMN',
    'Keycloak',
    'REST APIs',
    'CI/CD',
  ]

  const row = [...items, ...items]

  return (
    <div className="relative border-y border-white/[0.07] bg-ink-soft/60 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

      <div className="marquee-shell relative flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-8 pr-8">
          {row.map((item, index) => (
            <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-8">
              <span className="mono text-[0.75rem] uppercase tracking-[0.16em] text-faint transition-colors duration-500 hover:text-mist">
                {item}
              </span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-signal/45" />
            </span>
          ))}
        </div>
      </div>

      <span className="sr-only">
        Core technologies: {items.join(', ')}.
      </span>
    </div>
  )
}
