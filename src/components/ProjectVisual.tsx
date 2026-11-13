/**
 * Abstract interface concepts for each project.
 *
 * These are deliberately stylised wireframes built from real DOM elements —
 * not screenshots, and not claims about the shipped UI. They exist to give
 * each project a visual identity without inventing anything.
 */

export function ProjectVisual({
  variant,
  mediaSrc,
}: {
  variant: 'dispatch' | 'pipeline' | 'board' | 'health' | 'video'
  mediaSrc?: string
}) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-raised">
      <div className="grid-field absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-signal/[0.07] via-transparent to-violet/[0.06]" />

      {variant === 'dispatch' && <Dispatch />}
      {variant === 'pipeline' && <Pipeline />}
      {variant === 'board' && <Board />}
      {variant === 'health' && <Health />}
      {variant === 'video' && <VideoPreview mediaSrc={mediaSrc} />}

      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]" />
    </div>
  )
}

/* ── Tactilia: dispatch board ─────────────────────────────────── */
const Tactilia = new URL('../assets/tactilia.png', import.meta.url).href
function Dispatch() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <img
        src={Tactilia}
        alt="Tactilia Emergency Management Platform"
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}

/* ── Debt recovery: orchestration pipeline ─────────────────────── */
const deployProcess = new URL('../assets/deploy_process.png', import.meta.url).href

function Pipeline() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <img
        src={deployProcess}
        alt="Debt Recovery Platform"
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}

/* ── WorkBridge: matching board ───────────────────────────────── */
const WorkBridge = new URL('../assets/work_home.png', import.meta.url).href

function Board() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <img
        src={WorkBridge}
        alt="WorkBridge Platform"
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}

/* ── MediBridge: appointments and delivery ────────────────────── */
const MediBridge = new URL('../assets/medi_home.png', import.meta.url).href

function Health() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <img
        src={MediBridge}
        alt="MediBridge Platform"
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}

function VideoPreview({ mediaSrc }: { mediaSrc?: string }) {
  if (mediaSrc) {
    return (
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <video
          src={mediaSrc}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center"
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(123,92,255,0.28),_rgba(5,8,14,0.92)_55%)]">
      <div className="flex max-w-[70%] flex-col items-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
          <div className="h-0 w-0 border-y-[10px] border-l-[18px] border-y-transparent border-l-white/90" />
        </div>
        <div>
          <p className="mono text-[0.625rem] uppercase tracking-[0.22em] text-signal/80">
            Demo video
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-bone">Project preview</h3>
          <p className="mt-2 text-sm text-mist">
            Drop your mp4 here to replace this placeholder.
          </p>
        </div>
      </div>
    </div>
  )
}
