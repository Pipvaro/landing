// app/(or src)/components/Bots.tsx
import { Container } from '@/components/Container'
import Link from 'next/link'
import React from 'react'

type Bot = {
  name: 'Fusion' | 'Nova' | 'Lunar'
  description: string
  points: string[]
  icon: React.ReactNode
}

const Icon = {
  Fusion: (
    <svg viewBox="0 0 96 96" className="h-16 w-16">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3f4bf2" />
          <stop offset="100%" stopColor="#7b86ff" />
        </linearGradient>
      </defs>
      <circle cx="48" cy="48" r="28" fill="none" stroke="url(#g1)" strokeWidth="3" />
      <circle cx="48" cy="48" r="14" fill="url(#g1)" opacity="0.25" />
    </svg>
  ),
  Nova: (
    <svg viewBox="0 0 96 96" className="h-16 w-16">
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3f4bf2" />
          <stop offset="100%" stopColor="#7b86ff" />
        </linearGradient>
      </defs>
      <path d="M48 18 76 36v24L48 78 20 60V36L48 18Z" fill="none" stroke="url(#g2)" strokeWidth="3" />
      <path d="M48 30 64 40 48 50 32 40 48 30Z" fill="url(#g2)" opacity="0.25" />
    </svg>
  ),
  Lunar: (
    <svg viewBox="0 0 96 96" className="h-16 w-16">
      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3f4bf2" />
          <stop offset="100%" stopColor="#7b86ff" />
        </linearGradient>
      </defs>
      <path d="M48 18c16.6 0 30 13.4 30 30S64.6 78 48 78c-8.3 0-15.8-3.6-21-9.2A30 30 0 0 0 48 18Z"
        fill="url(#g3)" opacity="0.18" />
      <path d="M36 30c6 0 12 6 12 12s-6 12-12 12-12-6-12-12 6-12 12-12Zm24 12c6 0 12 6 12 12s-6 12-12 12-12-6-12-12 6-12 12-12Z"
        fill="none" stroke="url(#g3)" strokeWidth="3" />
    </svg>
  ),
}

const bots: Bot[] = [
  {
    name: 'Fusion',
    description:
      'Your zero-cost entry. Ideal to start quickly and test the automation with XAUUSD.',
    points: [
      'Prebuilt bot preset for XAUUSD',
      'Limited daily bot executions',
      'Core dashboard & live reporting',
      'SL/TP, breakeven & trailing controls',
      'Push alerts for fills & errors',
    ],
    icon: Icon.Fusion,
  },
  {
    name: 'Nova',
    description:
      'Performance-driven and feature-rich — built for users who want more control and more trades.',
    points: [
      'All markets: FX, metals & indices',
      'Highest frequency bots with pro filters & regime switching',
      'Detailed reporting',
      'Hosting included: Windows VPS (24/7, RDP; multi-instance on request)',
      'Full setup included',
      'Multi-strategy slots with per-asset risk caps',
    ],
    icon: Icon.Nova,
  },
  {
    name: 'Lunar',
    description:
      'Balanced automation for steady performance across changing market conditions.',
    points: [
      'FX majors & metals',
      'Increased daily bot executions',
      'Adaptive risk management',
      'Session profiles (London/NY) auto-optimize',
      'Standard support (24–48h)',
    ],
    icon: Icon.Lunar,
  },
]

export function Bots() {
  return (
    <section id="bots" className="py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pick your automation level
          </h2>
          <p className="mt-3 text-white/60">
            From the free starter to full-featured pro — choose the plan that fits you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-3">
          {bots.map((bot, idx) => {
            const isFeatured = bot.name === 'Nova' // middle card
            return (
              <div
                key={bot.name}
                className={[
                  'group relative overflow-hidden rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 transition',
                  'hover:-translate-y-0.5 hover:bg-white/[0.06]',
                  isFeatured
                    ? 'lg:scale-[1.02] ring-[#3f4bf2]/40 shadow-[0_10px_40px_-10px_rgba(63,75,242,0.35)] before:content-[\'\'] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(120%_80%_at_50%_0%,rgba(63,75,242,0.18),transparent_60%)]'
                    : '',
                ].join(' ')}
              >
                {isFeatured && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#3f4bf2]/20 px-2.5 py-1 text-xs font-medium text-[#cfd2ff] ring-1 ring-[#3f4bf2]/30">
                    Recommended
                  </span>
                )}

                {/* Icon (bigger, no border box) */}
                <div className="mb-6">{bot.icon}</div>

                <h3 className="text-xl font-semibold text-white">{bot.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{bot.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {bot.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className={[
                          'mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full',
                          isFeatured ? 'bg-[#3f4bf2]' : 'bg-[#3f4bf2]/80',
                        ].join(' ')}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* CTA under the three cards */}
        <div className="mt-10 flex justify-center">
          <Link
            href="https://app.pipvaro.com/register"
            className="inline-flex items-center justify-center rounded-full bg-[#3f4bf2] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(63,75,242,0.35)] transition hover:translate-y-[-1px] hover:shadow-[0_12px_40px_rgba(63,75,242,0.45)] focus:outline-none focus:ring-2 focus:ring-[#3f4bf2]/60"
          >
            Start free with Nova
          </Link>
        </div>
      </Container>
    </section>
  )
}
