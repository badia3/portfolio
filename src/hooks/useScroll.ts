import { useEffect, useState } from 'react'

/**
 * Tracks which section owns the viewport so the nav can highlight it.
 * Uses a band across the upper-middle of the screen as the trigger,
 * which keeps the active state stable while a long section scrolls past.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let best = ''
        let bestRatio = 0
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        }
        if (best) setActive(best)
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return active
}

/** True once the page has scrolled past `threshold` pixels. */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

/** Locks body scroll while the mobile menu is open. */
export function useScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [locked])
}
