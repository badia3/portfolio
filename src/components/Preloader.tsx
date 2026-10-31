import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

/**
 * Opening sequence: the monogram resolves, a signal trace sweeps across,
 * then the curtain lifts. Deliberately short — it should read as an
 * introduction, not a wait.
 */
export function Preloader() {
  const reduce = useReducedMotion()
  const [done, setDone] = useState(reduce)

  useEffect(() => {
    if (reduce) return
    const timer = window.setTimeout(() => setDone(true), 1750)
    return () => window.clearTimeout(timer)
  }, [reduce])

  if (reduce) return null

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/12 bg-white/[0.03] font-display text-xl font-bold tracking-tight text-bone"
          >
            {profile.monogram}
            <span className="absolute inset-0 rounded-2xl bg-signal/25 blur-2xl" />
          </motion.div>

          <motion.div
            className="relative mt-8 h-px w-40 overflow-hidden bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <motion.span
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-signal-bright to-transparent"
              initial={{ x: '-120%' }}
              animate={{ x: '420%' }}
              transition={{ duration: 1.25, ease: 'easeInOut', repeat: Infinity }}
            />
          </motion.div>

          <motion.p
            className="mono mt-6 text-[0.6875rem] uppercase tracking-[0.28em] text-faint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Initialising session
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
