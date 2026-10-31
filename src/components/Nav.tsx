import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/profile'
import { useActiveSection, useScrolled, useScrollLock } from '../hooks/useScroll'

const SECTION_IDS = navItems.map((item) => item.id)

export function Nav() {
  const scrolled = useScrolled(20)
  const active = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    typeof window !== 'undefined' && localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark',
  )
  const [language, setLanguage] = useState<'en' | 'fr'>(() =>
    typeof window !== 'undefined' && localStorage.getItem('portfolio-language') === 'fr' ? 'fr' : 'en',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: language }))
    localStorage.setItem('portfolio-language', language)
  }, [language])
  const reduce = useReducedMotion()

  useScrollLock(menuOpen)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-500 ease-silk ${
            scrolled
              ? 'border-b border-white/[0.07] bg-ink/70 backdrop-blur-xl backdrop-saturate-150'
              : 'border-b border-transparent bg-transparent'
          }`}
        >
          <nav
            className="shell flex h-[72px] items-center justify-between gap-6"
            aria-label="Primary"
          >
            <a
              href="#home"
              className="group flex items-center gap-3"
              aria-label={`${profile.name} — home`}
            >
              <span className="relative grid h-9 w-9 place-items-center rounded-[10px] border border-white/12 bg-white/[0.03] font-display text-[0.8125rem] font-bold tracking-tight text-bone transition-colors duration-500 group-hover:border-signal/45">
                {profile.monogram}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-[10px] bg-signal/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
                />
              </span>
              <span className="min-w-0 truncate font-display text-[0.9375rem] font-medium tracking-tight text-bone">
                {profile.name}
              </span>
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative block px-3.5 py-2 text-[0.8125rem] transition-colors duration-400 ${
                        isActive ? 'text-bone' : 'text-mist hover:text-bone'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          aria-hidden
                          className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-signal"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-bone transition-colors duration-400 hover:border-signal/45 hover:bg-signal/10"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                type="button"
                onClick={() => setLanguage((value) => (value === 'en' ? 'fr' : 'en'))}
                aria-label={language === 'en' ? 'Switch language to French' : 'Switch language to English'}
                className="h-9 min-w-10 rounded-full border border-white/12 px-2.5 font-mono text-[0.6875rem] font-semibold tracking-wide text-bone transition-colors duration-400 hover:border-signal/45 hover:bg-signal/10"
              >
                {language === 'en' ? 'FR' : 'EN'}
              </button>
              <a
                href="#contact"
                className="hidden rounded-full border border-white/12 px-4 py-2 text-[0.8125rem] text-bone transition-all duration-400 hover:border-signal/50 hover:bg-signal/10 md:block"
              >
                Let&apos;s talk
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-bone transition-colors duration-400 hover:border-signal/45 lg:hidden"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/95 backdrop-blur-2xl"
              onClick={() => setMenuOpen(false)}
            />
            <motion.ul
              className="relative flex h-full flex-col justify-center gap-1 px-8 pt-20"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.055, delayChildren: 0.08 } },
              }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/[0.06] py-4 font-display text-2xl font-medium tracking-tight text-bone"
                  >
                    <span aria-hidden className="mono text-[0.6875rem] text-signal/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
