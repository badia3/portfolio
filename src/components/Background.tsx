import { useMemo } from 'react'

/** Deterministic pseudo-random so the particle field is stable across renders. */
function seeded(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

/**
 * The ambient field behind the whole page: a technical grid, three slow
 * drifting lights, and a sparse field of signal particles. All of it is
 * pointer-transparent and sits beneath the content layer.
 */
export function Background() {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => {
        const s = seeded(i + 1)
        const s2 = seeded(i + 40)
        return {
          left: `${(s * 100).toFixed(2)}%`,
          size: `${(1 + s2 * 1.8).toFixed(2)}px`,
          delay: `${(s * 16).toFixed(2)}s`,
          duration: `${(14 + s2 * 16).toFixed(2)}s`,
          opacity: (0.18 + s2 * 0.42).toFixed(2),
        }
      }),
    [],
  )

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="grid-field absolute inset-0" />

      {/* Drifting lights */}
      <div
        className="absolute -left-[18%] top-[-12%] h-[46rem] w-[46rem] rounded-full bg-signal/[0.13] blur-[130px]"
        style={{ animation: 'float-soft 22s ease-in-out infinite' }}
      />
      <div
        className="absolute -right-[14%] top-[18%] h-[38rem] w-[38rem] rounded-full bg-violet/[0.11] blur-[140px]"
        style={{ animation: 'float-soft 27s ease-in-out infinite reverse' }}
      />
      <div
        className="absolute bottom-[-20%] left-[28%] h-[40rem] w-[40rem] rounded-full bg-signal/[0.08] blur-[150px]"
        style={{ animation: 'float-soft 31s ease-in-out infinite' }}
      />

      {/* Signal particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-[-8%] rounded-full bg-signal-bright"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: '0 0 10px rgba(132,167,255,0.7)',
            animation: `signal-rise ${p.duration} linear ${p.delay} infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes signal-rise {
          0%   { transform: translate3d(0, 0, 0) scale(1); opacity: 0; }
          12%  { opacity: 1; }
          88%  { opacity: 1; }
          100% { transform: translate3d(24px, -104vh, 0) scale(0.4); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
