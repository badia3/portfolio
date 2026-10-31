/**
 * Abstract interface concepts for each project.
 *
 * These are deliberately stylised wireframes built from real DOM elements —
 * not screenshots, and not claims about the shipped UI. They exist to give
 * each project a visual identity without inventing anything.
 */

export function ProjectVisual({ variant }: { variant: 'dispatch' | 'pipeline' | 'board' | 'health' }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-raised">
      <div className="grid-field absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-signal/[0.07] via-transparent to-violet/[0.06]" />

      {variant === 'dispatch' && <Dispatch />}
      {variant === 'pipeline' && <Pipeline />}
      {variant === 'board' && <Board />}
      {variant === 'health' && <Health />}

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
