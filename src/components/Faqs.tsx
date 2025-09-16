import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/pv-gradient.png'
import Link from 'next/link'

const faqs = [
  [
    {
      question: 'Which platforms and brokers are supported?',
      answer:
        'MT5 today (MT4/cTrader on the roadmap). Works with any broker that supports MT5 via our Receiver app.',
    },
    {
      question: 'Do I need my own VPS?',
      answer: 'Not on Lunar/Nova—hosting is included (Windows VPS, 24/7, RDP). Fusion has no hosting; you can run the receiver on your own PC/VPS.',
    },
    {
      question: 'Is this ok for prop-firm accounts?',
      answer:
        'Yes. Daily/max drawdown caps, max open trades per symbol, news windows and time filters help you stay within rules.',
    },
  ],
  [
    {
      question: 'Can I start on demo or free?',
      answer:
        'Absolutely. Fusion is free (XAUUSD only) and great for demo/testing. Upgrade anytime to unlock more markets and higher bot frequency.',
    },
    {
      question:
        'How many markets can I trade on each plan?',
      answer:
        'Fusion: XAUUSD only. Lunar: FX majors & metals. Nova: FX, metals & indices.',
    },
    {
      question:
        'Can I pause the bot or intervene manually?',
      answer:
        'Yes—pause/resume per receiver with one click. You can still manage or close trades in your broker terminal at any time.',
    },
  ],
  [
    {
      question: 'How does risk management work?',
      answer:
        'Set daily/max drawdown %, max positions (global & per symbol), SL/TP modes, breakeven and optional trailing. The bot will follow your rules.',
    },
    {
      question: 'Is my data and access secure?',
      answer: 'Your broker/API credentials stay on your receiver. Config and logs are stored securely; traffic is encrypted. You can revoke a receiver anytime.',
    },
    {
      question: 'How do billing, taxes and cancellations work?',
      answer:
        'Monthly via Stripe. Founder pricing is locked for the first 100 members. VAT is added where required. Cancel or change plans anytime.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden py-20 sm:py-32 w-full min-w-screen"
    >
      <Image
        className="absolute w-full min-w-screen"
        src={backgroundImage}
        alt="Pipvaro"
        unoptimized
        fill={true}
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-400/80">
            Answers to the most common questions about our bots, plans, and setup. Can’t find yours? <Link className="text-white" href="mailto:support@pipvaro.com">Contact</Link> support—we’ll help fast.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-400/80">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
