import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy, Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { contactCopy, profile } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

type Fields = {
  name: string
  email: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(fields: Fields): Errors {
  const errors: Errors = {}

  if (!fields.name.trim()) {
    errors.name = 'Tell me who you are.'
  } else if (fields.name.trim().length < 2) {
    errors.name = 'That name looks too short.'
  }

  if (!fields.email.trim()) {
    errors.email = 'An email address is required.'
  } else if (!EMAIL_RE.test(fields.email.trim())) {
    errors.email = 'That does not look like a valid email address.'
  }

  if (!fields.message.trim()) {
    errors.message = 'Add a short message.'
  } else if (fields.message.trim().length < 12) {
    errors.message = 'A little more detail helps — 12 characters or more.'
  }

  return errors
}

export function Contact() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({})
  const [copied, setCopied] = useState(false)
  const [prepared, setPrepared] = useState(false)

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value
    setFields((prev) => ({ ...prev, [key]: value }))
    if (touched[key]) {
      setErrors(validate({ ...fields, [key]: value }))
    }
  }

  const blur = (key: keyof Fields) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }))
    setErrors(validate(fields))
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const nextErrors = validate(fields)
    setErrors(nextErrors)
    setTouched({ name: true, email: true, message: true })

    if (Object.keys(nextErrors).length > 0) {
      const firstError = document.querySelector<HTMLElement>('[data-invalid="true"]')
      firstError?.focus()
      return
    }

    const subject = encodeURIComponent(`Portfolio enquiry — ${fields.name.trim()}`)
    const body = encodeURIComponent(
      `${fields.message.trim()}\n\n—\n${fields.name.trim()}\n${fields.email.trim()}`,
    )

    // Confirm first, then hand off to the mail client — otherwise the
    // external navigation can cancel the state update before it paints.
    setPrepared(true)
    window.setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    }, 120)
  }

  const copyEmail = async () => {
    const address = profile.email

    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
      return
    } catch {
      /* Clipboard API blocked (insecure context, denied permission) — fall through. */
    }

    // Legacy fallback for browsers without the async clipboard API.
    try {
      const helper = document.createElement('textarea')
      helper.value = address
      helper.setAttribute('readonly', '')
      helper.style.position = 'fixed'
      helper.style.opacity = '0'
      document.body.appendChild(helper)
      helper.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(helper)
      if (ok) {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2200)
        return
      }
    } catch {
      /* Fall through to manual selection. */
    }

    // Last resort: select the visible address so the visitor can copy it.
    const link = document.getElementById('email-address')
    if (link) {
      const range = document.createRange()
      range.selectNodeContents(link)
      const selection = window.getSelection()
      selection?.removeAllRanges()
      selection?.addRange(range)
    }
  }

  const channels = [
    { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin, external: true },
    { icon: Github, label: 'GitHub', value: profile.githubHandle, href: profile.github, external: true },
    { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref, external: false },
  ]

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title={
        <>
          {contactCopy.headline.split(' ').slice(0, 4).join(' ')}{' '}
          <span className="text-signal">{contactCopy.headline.split(' ').slice(4).join(' ')}</span>
        </>
      }
      lede={contactCopy.body}
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        {/* Direct channels */}
        <Reveal>
          <div className="panel grain relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-7 md:p-9">
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-signal/[0.13] blur-3xl"
            />

            <div className="relative">
              <p className="eyebrow">Direct line</p>

              <a
                id="email-address"
                href={`mailto:${profile.email}`}
                className="group mt-6 block break-all font-display text-[1.375rem] font-semibold tracking-tight text-bone transition-colors duration-400 hover:text-signal md:text-[1.75rem]"
              >
                {profile.email}
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[0.8125rem] text-mist transition-all duration-400 hover:border-signal/45 hover:bg-signal/10 hover:text-bone"
                aria-label="Copy email address to clipboard"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={13} className="text-live" />
                      Copied
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      <Copy size={13} />
                      Copy email
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <ul className="mt-9 space-y-2.5">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={channel.external ? 'noreferrer noopener' : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.015] px-4 py-3.5 transition-all duration-500 ease-silk hover:border-signal/25 hover:bg-white/[0.035]"
                    >
                      <span className="grid h-9 w-9 flex-none place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-mist transition-colors duration-500 group-hover:text-signal">
                        <channel.icon size={15} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.6875rem] uppercase tracking-[0.16em] text-faint">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block truncate text-[0.875rem] text-bone">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="relative mt-9 border-t border-white/[0.06] pt-5 text-[0.8125rem] leading-relaxed text-faint">
              Based in {profile.location}, working with teams across time zones.
            </p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.08}>
          <form
            onSubmit={submit}
            noValidate
            className="panel relative overflow-hidden rounded-3xl p-7 md:p-9"
          >
            <div className="flex items-center gap-2.5">
              <Mail size={15} className="text-signal" />
              <p className="eyebrow">Send a message</p>
            </div>

            <div className="mt-8 space-y-5">
              <Field
                id="name"
                label="Your name"
                value={fields.name}
                onChange={update('name')}
                onBlur={blur('name')}
                error={touched.name ? errors.name : undefined}
                placeholder="Jane Doe"
                autoComplete="name"
              />
              <Field
                id="email"
                label="Email address"
                type="email"
                value={fields.email}
                onChange={update('email')}
                onBlur={blur('email')}
                error={touched.email ? errors.email : undefined}
                placeholder="jane@company.com"
                autoComplete="email"
              />
              <Field
                id="message"
                label="Message"
                value={fields.message}
                onChange={update('message')}
                onBlur={blur('message')}
                error={touched.message ? errors.message : undefined}
                placeholder="What are you building, and where do I fit in?"
                textarea
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-signal px-6 text-[0.9375rem] font-medium text-white shadow-[0_18px_44px_-20px_rgba(76,125,255,0.85)] transition-all duration-500 ease-silk hover:bg-[#5d8bff] hover:shadow-[0_22px_60px_-18px_rgba(76,125,255,0.95)]"
              >
                <Send size={15} className="transition-transform duration-500 group-hover:translate-x-0.5" />
                Send message
              </button>

              <p className="text-[0.75rem] leading-relaxed text-faint">
                Opens your email client with the message prepared.
              </p>
            </div>

            <AnimatePresence>
              {prepared && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex items-center gap-2 text-[0.8125rem] text-live"
                  role="status"
                >
                  <Check size={14} />
                  Your email client should now be open with the message ready to send.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  type = 'text',
  textarea = false,
  autoComplete,
}: {
  id: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur: () => void
  error?: string
  placeholder?: string
  type?: string
  textarea?: boolean
  autoComplete?: string
}) {
  const invalid = Boolean(error)
  const base =
    'w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-[0.9375rem] text-bone placeholder:text-faint/70 transition-colors duration-400 focus:outline-none focus:bg-white/[0.04]'
  const state = invalid
    ? 'border-red-400/50 focus:border-red-400/80'
    : 'border-white/[0.09] focus:border-signal/60'

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.8125rem] text-mist">
        {label}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          aria-invalid={invalid}
          aria-describedby={invalid ? `${id}-error` : undefined}
          data-invalid={invalid ? 'true' : 'false'}
          className={`${base} ${state} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={invalid}
          aria-describedby={invalid ? `${id}-error` : undefined}
          data-invalid={invalid ? 'true' : 'false'}
          className={`${base} ${state}`}
        />
      )}

      {error && (
        <p id={`${id}-error`} className="mt-2 text-[0.8125rem] text-red-400/90">
          {error}
        </p>
      )}
    </div>
  )
}
