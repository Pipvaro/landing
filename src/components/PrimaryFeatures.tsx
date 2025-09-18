'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImageDesktop from '@/images/1.png'
import backgroundImageMobile from '@/images/1-mobile.png'
import screenshotDashboard from '@/images/screenshots/dummy.png'
import screenshotAccounts from '@/images/screenshots/dummy.png'
import screenshotReceivers from '@/images/screenshots/dummy.png'
import screenshotVatReturns from '@/images/screenshots/dummy.png'

const features = [
  {
    title: 'Dashboard',
    description:
      "At-a-glance health for your accounts and bots: equity, balance, margin, open positions and live reporting. Real-time bot feed with executions, edits and alerts.",
    image: screenshotDashboard,
  },
  {
    title: 'Accounts',
    description:
      "Auto-discovered by the receiver and kept in sync. See balances and snapshots, margin usage and change logs—no spreadsheets, no manual work.",
    image: screenshotAccounts,
  },
  {
    title: 'Receivers',
    description:
      "Where the automation lives. Set allowed symbols, risk caps, max open trades and news window; choose SL/TP modes, breakeven and trailing. License status and last-seen included.",
    image: screenshotVatReturns,
  },
  {
    title: 'Economic Calendar',
    description:
      'Built-in high-impact calendar powers the news filter. Automatically pause trading before/after events per receiver—fully time-zone aware.',
    image: screenshotReceivers,
  },
]

export function PrimaryFeatures() {
  const [tabOrientation, setTabOrientation] =
    useState<'horizontal' | 'vertical'>('horizontal')

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')
    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }
    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)
    return () => lgMediaQuery.removeEventListener('change', onMediaQueryChange)
  }, [])

  return (
    <section
      id="why"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      {/* Desktop-Hintergrund */}
      <Image
        className="absolute inset-0 hidden lg:block object-cover pointer-events-none select-none"
        src={backgroundImageDesktop}
        alt=""
        fill
        priority
        sizes="(min-width:1024px) 100vw"
      />

      {/* Mobile-Hintergrund */}
      <Image
        className="absolute inset-0 lg:hidden object-cover pointer-events-none select-none"
        src={backgroundImageMobile}
        alt=""
        fill
        priority
        sizes="(max-width:1023px) 100vw"
      />

      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to manage your trades.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Control every bot from one clean console—live P/L, rules, and risk all in one place.
          </p>
        </div>

        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg data-selected:not-data-focus:outline-hidden',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>

              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-26 -bottom-17 bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-180 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-271.25">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
