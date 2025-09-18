// src/components/Trust.tsx
'use client';

const BRAND = '#3f4bf2';

const points = [
  'Reliable gains with controlled risk',
  '1,000+ traders in our community',
  'Run on funded and live accounts with ease',
  'Built to pass prop firm challenges',
  'Minimal manual work required',
  'Free community resources & testing tools',
  'Fast support on Discord (<24h)',
  'Full setup guide & step-by-step tutorials',
];

function Check() {
  return (
    <svg className="h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke={BRAND} strokeWidth="2" opacity="0.25" />
      <path d="M7 12.5l3.2 3.2L17 9" stroke={BRAND} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Trust() {
  return (
    <section className="relative bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why <span style={{ color: BRAND }}>trust</span> us?
            </h2>
            <p className="mt-3 max-w-prose text-slate-600">
              Real traders, real automation. Built to be simple to set up, flexible to adjust, and consistent to run.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-800">
                  <span className="mt-1"><Check /></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: ratings (bigger) + CTA */}
          <div className="flex flex-col items-center justify-center">
            {/* Ratings chip */}
            <div className="flex items-center gap-4 rounded-full bg-white/90 px-6 py-3 shadow-sm ring-1 ring-slate-200 backdrop-blur">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 1.5l2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8L4.7 18l1-6L1.3 7.9l6-.9L10 1.5z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-700">1000+ satisfied users</span>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://dc.pipvaro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-slate-900 shadow-sm transition-colors duration-200 ease-out hover:bg-[#3f4bf2] hover:text-white hover:border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3f4bf2]/50 active:translate-y-[1px]"
                style={{ boxShadow: '0 10px 30px -10px rgba(63,75,242,0.35)' }}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/5 transition-colors duration-200 hover:bg-white/15">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-base font-medium">Join the community</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* reduce-motion */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          :global(*) { transition-duration: 0.001ms !important; animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>
    </section>
  );
}
