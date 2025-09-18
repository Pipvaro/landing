import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pipvaro | Terms of Service',
  description:
    'The terms that govern your use of Pipvaro, including bots, receivers, hosting and billing.',
}

export default function TermsOfService() {
  const updated = '17 September 2025'
  const link =
    'text-[#9db2ff] hover:text-white underline decoration-[#3f4bf2]/40 underline-offset-4'

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative isolate bg-gradient-to-b from-[#3f4bf2]/20 via-transparent to-transparent">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            Terms of Service
            <span className="h-1 w-1 rounded-full bg-white/30" />
            Last updated: {updated}
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Use Pipvaro with confidence.
          </h1>
          <p className="mt-3 max-w-3xl text-white/70">
            These Terms govern your access to and use of Pipvaro — our web app, dashboard,
            hosted infrastructure and downloadable receiver software.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 pb-20 md:grid-cols-[220px_1fr]">
        {/* TOC */}
        <aside className="md:sticky md:top-24 md:self-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/60">
              On this page
            </p>
            <nav className="space-y-2 text-sm">
              {[
                ['#who', '1. Who we are'],
                ['#does', '2. What Pipvaro does'],
                ['#eligibility', '3. Eligibility'],
                ['#accounts', '4. Accounts & security'],
                ['#billing', '5. Plans, pricing & billing'],
                ['#beta', '6. Beta & early access'],
                ['#license', '7. Your license'],
                ['#acceptable', '8. Acceptable use'],
                ['#risk', '9. Risk disclosure'],
                ['#thirdparty', '10. Third-party services'],
                ['#availability', '11. Availability & support'],
                ['#ip', '12. Intellectual property'],
                ['#termination', '13. Termination'],
                ['#warranty', '14. Warranties & liability'],
                ['#compliance', '15. Compliance & sanctions'],
                ['#changes', '16. Changes to these Terms'],
                ['#law', '17. Governing law & disputes'],
                ['#contact', '18. Contact'],
              ].map(([href, label]) => (
                <a key={href} href={href} className="block text-white/70 hover:text-white">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* ARTICLE */}
        <article className="space-y-10 leading-relaxed text-white/80">
          <section id="who" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">1) Who we are</h2>
            <p>
              These Terms of Service (“<span className="text-white">Terms</span>”) govern your
              access to and use of <span className="text-white">Pipvaro</span> (the “Service”),
              including our web app, dashboard, hosted infrastructure, and downloadable receiver
              software. “Pipvaro”, “we”, “us” means <span className="text-white">Pipvaro</span>.
              Contact:{' '}
              <a href="mailto:legal@pipvaro.com" className={link}>
                legal@pipvaro.com
              </a>
              .
            </p>
            <p className="mt-2">
              By creating an account, installing a receiver, or paying for a plan, you agree to
              these Terms.
            </p>
          </section>

          <section id="does" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">2) What Pipvaro does (and doesn’t)</h2>
            <p>
              Pipvaro provides automation tools (“<span className="text-white">bots</span>”) that
              place trades at your connected broker according to rules you configure.
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                We are <span className="text-white">not</span> a broker, asset manager or investment 
                adviser. We do not guarantee profit or performance and we do not
                give personalized investment advice.
              </li>
              <li>
                Trades are executed via your own broker connection (e.g., MetaTrader 5). You
                remain fully responsible for all trading decisions and results.
              </li>
            </ul>
          </section>

          <section id="eligibility" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">3) Eligibility</h2>
            <p>
              You must be <span className="text-white">18+</span> and legally able to enter a
              contract. Do not use the Service if prohibited by applicable laws or sanctions.
            </p>
          </section>

          <section id="accounts" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">4) Accounts &amp; security</h2>
            <p>
              You are responsible for your account, passwords, API keys, and any activity.
              <br />
              <span className="text-white">Receiver credentials:</span> On Fusion (self-hosted),
              your broker credentials remain on your machine/VPS. On Lunar/Nova, we provision a
              Windows VPS for you; you control credentials stored there. You must notify us of
              suspected unauthorized access.
            </p>
          </section>

          <section id="billing" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">5) Plans, pricing, and billing</h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                Plans: <span className="text-white">Fusion (Free), Lunar (paid), Nova (paid)</span>;
                features are shown at checkout and on our pricing page.
              </li>
              <li>
                <span className="text-white">Founder/Beta pricing:</span> Discounted pricing is
                available to the first 100 members. After launch, standard prices apply for new
                subscriptions; existing founder accounts keep their founder price while the
                subscription remains active.
              </li>
              <li>
                <span className="text-white">Billing:</span> Subscriptions renew monthly via Stripe
                until canceled. VAT may apply.
              </li>
              <li>
                <span className="text-white">Setup fee (optional):</span> A one-time onboarding fee
                may be charged if selected.
              </li>
              <li>
                <span className="text-white">Cancellations &amp; refunds:</span> Cancel anytime;
                access continues until the end of the current billing period. Fees are
                non-refundable except where required by law.
              </li>
              <li>
                We may change prices or features with reasonable notice. If you do not agree, you
                may cancel before the change takes effect.
              </li>
            </ul>
          </section>

          <section id="beta" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">6) Beta &amp; early-access features</h2>
            <p>
              Some features are released as <span className="text-white">beta</span> and may be
              unstable, incomplete, or temporarily unavailable. You accept the risks of using beta
              features. We may modify or withdraw beta features at any time.
            </p>
          </section>

          <section id="license" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">7) Your license to use Pipvaro</h2>
            <p>
              We grant you a limited, revocable, non-transferable license to install the receiver
              and use the Service for your own trading.
            </p>
            <p className="mt-2">
              You may <span className="text-white">not</span>:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>resell, lease, or white-label without our permission,</li>
              <li>reverse engineer or attempt to access non-public code,</li>
              <li>circumvent security or usage limits,</li>
              <li>misuse the Service to violate law, exchange rules, or third-party rights.</li>
            </ul>
          </section>

          <section id="acceptable" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">8) Acceptable use</h2>
            <p>
              Do not use Pipvaro to: spam or abuse APIs, manipulate markets, infringe IP, test
              high-risk systems (life/medical), or violate prop-firm/broker terms. You are
              responsible for complying with your broker’s and prop firm’s rules.
            </p>
          </section>

          <section id="risk" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">9) Risk disclosure</h2>
            <p>
              Trading leveraged products (FX, metals, indices) is <span className="text-white">
                high risk
              </span>. Losses can exceed deposits. Past performance does not guarantee future
              results. Automation can magnify both gains and losses and may behave unpredictably due
              to latency, liquidity, slippage, outages, bad data, news events, or your
              configuration. You must monitor your accounts and set appropriate risk limits.
            </p>
          </section>

          <section id="thirdparty" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">10) Third-party services</h2>
            <p>
              Pipvaro integrates with third parties (e.g., MetaTrader 5, Stripe, hosting
              providers). We are not responsible for third-party terms, performance, or outages.
              Brand names are trademarks of their owners and used for identification only.
            </p>
          </section>

          <section id="availability" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">11) Availability &amp; support</h2>
            <p>
              We aim for high availability but do not guarantee uninterrupted operation. Planned or
              emergency maintenance may occur. Support response targets:{' '}
              <span className="text-white">Lunar: 24–48h; Nova: ≤24h</span> (business days).
            </p>
          </section>

          <section id="ip" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">12) Intellectual property</h2>
            <p>
              Pipvaro and all related IP remain our property. You grant us a worldwide,
              royalty-free license to use feedback you provide to improve the Service.
            </p>
          </section>

          <section id="termination" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">13) Termination</h2>
            <p>
              You may stop using the Service and cancel anytime. We may suspend or terminate access
              if you breach these Terms, create risk, or use the Service unlawfully. Upon
              termination, your right to use the Service ends and we may delete or anonymize your
              data per our Privacy Policy.
            </p>
          </section>

          <section id="warranty" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">14) Warranties &amp; liability</h2>
            <p>
              The Service is provided “<span className="text-white">as is</span>” and “
              <span className="text-white">as available</span>”. To the fullest extent permitted by
              law, we disclaim all warranties (merchantability, fitness, non-infringement).
            </p>
            <p className="mt-2">
              We are not liable for: (a) trading losses, lost profits, or indirect/consequential
              damages, (b) outages, slippage, or broker/API failures, (c) configuration mistakes or
              misuse. Our total liability for any claim is limited to the{' '}
              <span className="text-white">fees you paid to us in the 3 months</span> before the
              event (or $50 on the free plan).
            </p>
          </section>

          <section id="compliance" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">15) Compliance, export &amp; sanctions</h2>
            <p>
              You represent that you are not subject to trade sanctions and will not use the
              Service in embargoed jurisdictions. You must comply with applicable export controls.
            </p>
          </section>

          <section id="changes" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">16) Changes to these Terms</h2>
            <p>
              We may update these Terms. If changes are material, we will notify you (e.g., in-app,
              email). Continued use after the effective date means you accept the changes.
            </p>
          </section>

          <section id="law" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">17) Governing law &amp; disputes</h2>
            <p>
              If you reside in the <span className="text-white">EEA/UK</span>, these Terms are
              governed by the laws of <span className="text-white">Austria</span>, and courts in{' '}
              <span className="text-white">Linz</span> have exclusive jurisdiction. If you reside
              elsewhere, the governing law is{' '}
              <span className="text-white">Austria (or your local non-conflict law)</span>,
              excluding conflict-of-law rules. Consumers retain any non-waivable rights under local
              law.
            </p>
          </section>

          <section id="contact" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">18) Contact</h2>
            <p className="space-y-1">
              <span className="block">Pipvaro — Legal</span>
              <a href="mailto:legal@pipvaro.com" className={link}>
                legal@pipvaro.com
              </a>
            </p>
          </section>

          <div className="pt-6">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10"
            >
              ↑ Back to top
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
