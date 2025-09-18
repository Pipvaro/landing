import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Roadmap from '@/components/Roadmap'

export const metadata: Metadata = {
  title: 'Roadmap – Pipvaro',
  description:
    'Transparent view into what’s live, what we’re building now, and what’s coming next.',
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-[#1e2122] text-white">
        <section className="relative">
          {/* removed top gradient */}
          <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-20">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Roadmap
              </h1>
              <p className="mt-3 text-base text-white/70">
                See what’s already shipped, what we’re actively working on, and
                what we plan to tackle next.
              </p>
            </div>

            <div className="mt-10">
              <Roadmap />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
