import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Pipvaro',
  description: 'How Pipvaro collects, uses, and protects your data.',
}

export default function PrivacyPolicy() {
  const updated = '17 September 2025'
  const link =
    'text-[#9db2ff] hover:text-white underline decoration-[#3f4bf2]/40 underline-offset-4'

  return (
    <>
      <Header />

      {/* Hero / intro */}
      <section className="relative isolate bg-gradient-to-b from-[#3f4bf2]/20 via-transparent to-transparent">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            Privacy Policy
            <span className="h-1 w-1 rounded-full bg-white/30" />
            Last updated: {updated}
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Your data. Your rules.
          </h1>
          <p className="mt-3 max-w-3xl text-white/70">
            This policy explains how we collect, use and share information when you use{' '}
            <span className="text-white">pipvaro.com</span> and our apps. We comply with GDPR/UK
            GDPR and provide CPRA disclosures for California residents.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 pb-20 md:grid-cols-[220px_1fr]">
        {/* TOC */}
        <aside className="md:sticky md:top-24 md:self-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/60">
              On this page
            </p>
            <nav className="space-y-2 text-sm">
              {[
                ['#controller', '1. Data controller'],
                ['#collect', '2. What we collect'],
                ['#legal', '3. Legal bases'],
                ['#cookies', '4. Cookies & analytics'],
                ['#sharing', '5. Sharing'],
                ['#transfers', '6. International transfers'],
                ['#retention', '7. Retention'],
                ['#rights', '8. Your rights'],
                ['#ccpa', '9. CCPA/CPRA'],
                ['#security', '10. Security'],
                ['#children', '11. Children'],
                ['#automation', '12. Automated decisions'],
                ['#links', '13. Third-party links'],
                ['#changes', '14. Changes'],
                ['#law', '15. Governing law & disputes'],
                ['#contact', '16. Contact'],
              ].map(([href, label]) => (
                <a key={href} href={href} className="block text-white/70 hover:text-white">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Article */}
        <article className="space-y-10 leading-relaxed text-white/80">
          <section id="controller" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">1) Data controller</h2>
            <p>
              <span className="text-white">Pipvaro</span>. Contact our privacy team at{' '}
              <a href="mailto:privacy@pipvaro.com" className={link}>
                privacy@pipvaro.com
              </a>
              . If appointed, our Data Protection Officer (DPO) can be reached at the same email.
            </p>
          </section>

          <section id="collect" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">2) What we collect</h2>
            <h3 className="mt-3 font-medium text-white">Information you provide</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Account details (name, email, password hash), organization/team info.</li>
              <li>Billing data (country, tax/VAT where applicable) processed by Stripe.</li>
              <li>Bot/receiver configuration (allowed symbols, risk limits, SL/TP modes, etc.).</li>
              <li>Support messages and content you upload.</li>
            </ul>
            <h3 className="mt-4 font-medium text-white">Automatically collected</h3>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                Usage & device data: IP, timestamps, pages/actions, app logs, crash diagnostics,
                cookies/local storage IDs.
              </li>
              <li>Hosted plans (Lunar/Nova): VPS metadata (instance ID, uptime, resource usage).</li>
              <li className="text-white/90">
                We <span className="font-semibold">do not store your broker password</span> on our
                servers. On Fusion (self-hosted) it stays on your device/VPS. On Lunar/Nova, it is
                stored on your dedicated VPS under your control.
              </li>
            </ul>
            <h3 className="mt-4 font-medium text-white">From third parties</h3>
            <p className="mt-2">
              Payment status from Stripe; authentication/hosting/analytics info from providers such
              as Vercel, MongoDB Atlas, Cloudflare, SendGrid/email provider, and VPS providers we
              use to provision hosting.
            </p>
          </section>

          <section id="legal" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">3) Why we process your data (legal bases)</h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Provide the Service & support (Art. 6(1)(b) GDPR – contract).</li>
              <li>Billing, fraud prevention, compliance (Art. 6(1)(c) and 6(1)(f)).</li>
              <li>Service improvement & analytics (Art. 6(1)(f) – balanced against your rights).</li>
              <li>Marketing with your consent (Art. 6(1)(a)) – unsubscribe anytime.</li>
              <li>Security (detecting abuse, securing infrastructure) (Art. 6(1)(f)).</li>
            </ul>
          </section>

          <section id="cookies" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">4) Cookies & analytics</h2>
            <p>
              We use essential cookies for login/security and optional analytics/performance
              cookies. Where required, we ask for consent via banner. You can withdraw consent in
              settings; browser controls may also limit cookies.
            </p>
          </section>

          <section id="sharing" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">5) Sharing your information</h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                Processors acting on our instructions (hosting, analytics, support, email, VPS
                providers, payment processors).
              </li>
              <li>Compliance & legal recipients when required by law or to protect rights/safety.</li>
            </ul>
            <p className="mt-2">
              We do <span className="font-semibold text-white">not</span> sell personal information.
            </p>
          </section>

          <section id="transfers" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">6) International transfers</h2>
            <p>
              For transfers outside the EEA/UK, we rely on adequacy decisions or Standard
              Contractual Clauses (SCCs) with additional safeguards where needed.
            </p>
          </section>

          <section id="retention" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">7) Retention</h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Account & billing records: up to 10 years (tax law).</li>
              <li>App & security logs: 30–365 days.</li>
              <li>Support tickets: 24 months.</li>
            </ul>
            <p className="mt-2">Afterwards we delete or anonymize the data.</p>
          </section>

          <section id="rights" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">8) Your rights (GDPR/UK GDPR)</h2>
            <p>
              You can request access, rectification, erasure, restriction, portability, and object
              to processing based on legitimate interests. Where processing relies on consent, you
              can withdraw consent at any time.
            </p>
            <p>
              To exercise rights, email{' '}
              <a href="mailto:privacy@pipvaro.com" className={link}>
                privacy@pipvaro.com
              </a>
              . You can also lodge a complaint with your local Data Protection Authority.
            </p>
          </section>

          <section id="ccpa" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">9) CCPA/CPRA (California)</h2>
            <p>
              We do not “sell” or “share” personal information as defined by the CPRA. California
              residents may request access, deletion and correction by contacting us. Authorized
              agents may act on your behalf with verifiable proof. We will not discriminate for
              exercising rights.
            </p>
          </section>

          <section id="security" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">10) Security</h2>
            <p>
              We use encryption in transit, access controls, and segregated environments. On
              Fusion, credentials stay on your machine/VPS. On hosted plans, your VPS is dedicated
              to your account—keep access restricted. No system is perfectly secure; report issues
              to{' '}
              <a href="mailto:support@pipvaro.com" className={link}>
                support@pipvaro.com
              </a>
              .
            </p>
          </section>

          <section id="children" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">11) Children</h2>
            <p>The Service is not intended for individuals under 18.</p>
          </section>

          <section id="automation" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">12) Automated decision-making</h2>
            <p>
              We do not use your personal data to make decisions that produce legal or similarly
              significant effects. Trading bots execute strategies you configure and are not based
              on your personal characteristics.
            </p>
          </section>

          <section id="links" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">13) Third-party links</h2>
            <p>
              Our site may link to third-party sites/platforms. Their privacy practices are
              separate and governed by their policies.
            </p>
          </section>

          <section id="changes" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">14) Changes to this Policy</h2>
            <p>
              We may update this Policy from time to time. If changes are material, we will notify
              you (e.g., in-app or email). Continued use after the effective date constitutes
              acceptance.
            </p>
          </section>

          <section id="law" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">15) Governing law &amp; disputes</h2>
            <p>
              This Policy and any dispute arising out of it are governed by the laws of{' '}
              <span className="text-white">Austria</span>. Courts in{' '}
              <span className="text-white">Linz</span> shall have exclusive jurisdiction, without
              prejudice to any mandatory consumer rights under local law.
            </p>
          </section>

          <section id="contact" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">16) Contact</h2>
            <p className="space-y-1">
              <span className="block">Pipvaro — Privacy</span>
              <a href="mailto:privacy@pipvaro.com" className={link}>
                privacy@pipvaro.com
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
