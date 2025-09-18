// app/(or src)/components/Steps.tsx
import { Container } from '@/components/Container'
import React from 'react'

type Step = {
  title: string
  description: React.ReactNode
}

const steps: Step[] = [
  {
    title: 'Create your account',
    description: (
      <>
        &nbsp;
        <a
          href="https://app.pipvaro.com/register"
          rel="noopener noreferrer"
          className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
        >
          Sign Up
        </a>
        &nbsp;in minutes and explore the dashboard.
      </>
    ),
  },
  {
    title: 'Choose a plan',
    description: 'Pick Fusion (Free), Lunar, or Nova — whatever fits your needs.',
  },
  {
    title: 'Join the community',
    description: (
      <>
        Hop into our community:&nbsp;
        <a
          href="https://dc.pipvaro.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
        >
          Open Discord
        </a>
        .
      </>
    ),
  },
  {
    title: 'Set up the bot',
    description: 'Complete the setup in a few minutes (tutorial in Dashboard/Docs).',
  },
  {
    title: 'Let automation run',
    description: 'Let the bot trade while you monitor your account.',
  },
]

export function Steps() {
  return (
    <section id="steps" className="py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-white/60">
            A quick overview of getting started.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-16">
          {/* Horizontal connector line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-white/10 lg:block" />
          {/* Vertical connector line (mobile) */}
          <div className="pointer-events-none absolute bottom-0 left-5 top-0 w-px bg-white/10 lg:hidden" />

          <ul role="list" className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            {steps.map((step, i) => (
              <li
                key={i}
                className="relative flex items-start gap-4 lg:flex-col lg:items-center lg:text-center"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3f4bf2] font-semibold text-white ring-4 ring-white/5 shadow-md lg:mb-4">
                  {i + 1}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
