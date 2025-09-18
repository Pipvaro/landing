'use client'

import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/dummy2.png'
import screenshotInventory from '@/images/screenshots/dummy2.png'
import screenshotProfitLoss from '@/images/screenshots/dummy2.png'

interface Feature {
  name: React.ReactNode
  summary: string
  description: string
  image: ImageProps['src']
  icon: React.ComponentType
}

const features: Array<Feature> = [
  {
    name: 'Live reporting',
    summary: 'Real-time equity, balance, margin—always in view.',
    description:
      'Auto-refreshing charts and snapshots show performance at a glance. Inspect account changes, open positions and execution logs when you need detail.',
    image: screenshotProfitLoss,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: 'Risk & limits',
    summary:
      'Cap daily risk and positions with built-in guardrails.',
    description:
      'Set daily/max drawdown %, max open trades (global & per symbol) and time windows around news. Bots pause automatically—rules come first.',
    image: screenshotInventory,
    icon: function RiskShieldIcon() {
      return (
        <>
          {/* Shield */}
          <path
            d="M18 4 28 8v6c0 7.4-4.6 12.5-10 13.9C12.6 26.5 8 21.4 8 14V8l10-4Z"
            fill="#fff"
            opacity=".25"
          />
          {/* Checkmark */}
          <path
            d="M12.5 18.5 16 22l8-8"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: 'Bot rules',
    summary:
      'Define how orders behave—SL/TP, breakeven, trailing.',
    description:
      'Pick fixed or from bot SL/TP, breakeven on TP hit, optional trailing. Choose units (pips/%) and volume per TP, then save as presets for any receiver.',
    image: screenshotContacts,
    icon: function RulesSlidersIcon() {
      return (
        <>
          {/* slider rails */}
          <path d="M6 12h24" stroke="#fff" strokeWidth={2} strokeLinecap="round" opacity=".35" />
          <path d="M6 18h24" stroke="#fff" strokeWidth={2} strokeLinecap="round" opacity=".35" />
          <path d="M6 24h24" stroke="#fff" strokeWidth={2} strokeLinecap="round" opacity=".35" />
          {/* knobs */}
          <circle cx="14" cy="12" r="2.5" fill="#fff" />
          <circle cx="24" cy="18" r="2.5" fill="#fff" opacity=".85" />
          <circle cx="18" cy="24" r="2.5" fill="#fff" opacity=".7" />
        </>
      )
    },
  },
]

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-[#3f4bf2]' : 'bg-gray-400/80',
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-[#3f4bf2]' : 'text-gray-400/80',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-white">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-gray-400/80">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 top-8 bottom-0 bg-[#3f4bf2]/50 sm:-inset-x-6" />
            <div className="relative mx-auto w-211 overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="data-selected:not-data-focus:outline-hidden">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-[#3f4bf2]/50 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out data-selected:not-data-focus:outline-hidden',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-211 overflow-hidden rounded-xl bg-gray-500 shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-slate-900/10 ring-inset" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Simplify everyday trading ops.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-400/80">
            You shouldn’t babysit charts. The dashboard keeps your bots compliant, fast, and under control.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
