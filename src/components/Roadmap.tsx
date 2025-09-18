'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  CheckCircle2,
  Clock,
  Rocket,
  Smartphone,
  ChevronUp,
} from 'lucide-react'

type Status = 'done' | 'in-progress' | 'planned'

type RoadmapItem = {
  id: string
  title: string
  description?: string
  status: Status
  tags?: string[]
}

const ITEMS: RoadmapItem[] = [
  {
    id: 'dashboard-v1',
    title: 'Dashboard – first version',
    description: 'Core features and navigation.',
    status: 'done',
    tags: ['Dashboard'],
  },
  {
    id: 'event-calendar',
    title: 'Event Calendar',
    description: 'Key market dates at a glance.',
    status: 'done',
    tags: ['Core'],
  },
  {
    id: 'changelog',
    title: 'Changelog',
    description: 'Transparent release notes and updates.',
    status: 'done',
  },
  {
    id: 'accounts-receivers',
    title: 'Accounts Receivers',
    description: 'Account connections and data ingestion.',
    status: 'done',
  },
  {
    id: 'mt4',
    title: 'MetaTrader 4 integration',
    description: 'Direct MT4 integration for automated trading.',
    status: 'in-progress',
    tags: ['Trading'],
  },
  {
    id: 'mobile-app',
    title: 'Mobile App (Android & iOS)',
    description: 'Full control on the go from your phone.',
    status: 'planned',
    tags: ['Mobile'],
  },
]

const STATUS_LABEL: Record<Status, string> = {
  'done': 'Done',
  'in-progress': 'In Progress',
  'planned': 'Planned',
}

const STATUS_ORDER: Status[] = ['in-progress', 'planned', 'done']

function StatusPill({ status }: { status: Status }) {
  const base =
    'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset'
  switch (status) {
    case 'done':
      return (
        <span className={`${base} bg-emerald-500/10 text-emerald-300 ring-emerald-400/30`}>
          <CheckCircle2 className="h-3.5 w-3.5" />
          {STATUS_LABEL[status]}
        </span>
      )
    case 'in-progress':
      return (
        <span className={`${base} bg-amber-500/10 text-amber-300 ring-amber-400/30`}>
          <Clock className="h-3.5 w-3.5" />
          {STATUS_LABEL[status]}
        </span>
      )
    default:
      return (
        <span className={`${base} bg-[#3f4bf2]/15 text-indigo-300 ring-indigo-400/30`}>
          <Rocket className="h-3.5 w-3.5" />
          {STATUS_LABEL[status]}
        </span>
      )
  }
}

function StatusIcon({ status }: { status: Status }) {
  const cls =
    'h-5 w-5 shrink-0 rounded-full ring-2 ring-offset-2 ring-offset-[#1e2122]'
  if (status === 'done') {
    return (
      <span className="relative flex">
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 blur" />
        <CheckCircle2 className={`${cls} text-emerald-400 ring-emerald-500/40`} />
      </span>
    )
  }
  if (status === 'in-progress') {
    return <Clock className={`${cls} text-amber-300 ring-amber-500/40`} />
  }
  return <Rocket className={`${cls} text-indigo-300 ring-indigo-500/40`} />
}

export default function Roadmap() {
  const [filter, setFilter] = useState<'all' | Status>('all')

  const grouped = useMemo(() => {
    const by = new Map<Status, RoadmapItem[]>()
    for (const s of STATUS_ORDER) by.set(s, [])
    for (const item of ITEMS) {
      by.get(item.status)!.push(item)
    }
    return by
  }, [])

  const total = ITEMS.length
  const doneCount = useMemo(
    () => ITEMS.filter((i) => i.status === 'done').length,
    []
  )
  const progress = Math.round((doneCount / Math.max(1, total)) * 100)

  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const sections = STATUS_ORDER.filter((s) => filter === 'all' || s === filter)

  return (
    <div className="relative">
      {/* header with progress */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold">Progress</h2>
            <p className="mt-1 text-sm text-white/60">
              {doneCount} of {total} items completed ({progress}%)
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-full px-3 py-1.5 text-sm ring-1 ring-inset transition ${filter === 'all'
                ? 'bg-[#3f4bf2] text-white ring-[#3f4bf2]'
                : 'text-white/80 ring-white/15 hover:bg-white/5'
                }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('in-progress')}
              className={`rounded-full px-3 py-1.5 text-sm ring-1 ring-inset transition ${filter === 'in-progress'
                ? 'bg-amber-500 text-[#1e2122] ring-amber-500'
                : 'text-white/80 ring-white/15 hover:bg-white/5'
                }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setFilter('planned')}
              className={`rounded-full px-3 py-1.5 text-sm ring-1 ring-inset transition ${filter === 'planned'
                ? 'bg-indigo-500 text-white ring-indigo-500'
                : 'text-white/80 ring-white/15 hover:bg-white/5'
                }`}
            >
              Planned
            </button>
            <button
              onClick={() => setFilter('done')}
              className={`rounded-full px-3 py-1.5 text-sm ring-1 ring-inset transition ${filter === 'done'
                ? 'bg-emerald-500 text-[#1e2122] ring-emerald-500'
                : 'text-white/80 ring-white/15 hover:bg-white/5'
                }`}
            >
              Done
            </button>
          </div>
        </div>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#3f4bf2] transition-[width]"
            style={{ width: `${progress}%` }}
            aria-label={`Progress: ${progress}%`}
          />
        </div>
      </div>

      {/* timeline */}
      <div className="mt-10 space-y-16">
        {sections.map((status) => {
          const list = grouped.get(status) || []
          if (list.length === 0) return null
          return (
            <section key={status} aria-labelledby={`rm-${status}`}>
              <div className="mb-6 flex items-center justify-between">
                <h3
                  id={`rm-${status}`}
                  className="text-base font-semibold text-white/90"
                >
                  {STATUS_LABEL[status]}
                </h3>
                <StatusPill status={status} />
              </div>

              <ol className="relative ml-4 border-l border-white/10 pl-6">
                {/* decorative gradient line */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-[1px] top-0 h-full w-[3px] bg-gradient-to-b from-[#3f4bf2] via-indigo-400 to-transparent"
                />
                {list.map((item) => (
                  <li key={item.id} className="mb-10 last:mb-0">
                    <div className="absolute -left-3.5 mt-1 translate-x-[3.5px]">
                      <StatusIcon status={item.status} />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h4 className="text-sm font-semibold tracking-tight">
                          {item.title}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.tags?.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-white/70 ring-1 ring-inset ring-white/10"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      {item.description && (
                        <p className="mt-2 text-sm text-white/70">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )
        })}
      </div>

      {/* back-to-top button */}
      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-[#3f4bf2] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[#3f4bf2]/30 ring-1 ring-white/15 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          aria-label="Back to top"
        >
          <ChevronUp className="h-4 w-4" />
          Top
        </button>
      )}
    </div>
  )
}
