import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'Pipvaro | Trading, Automated.',
    default: 'Pipvaro | Trading, Automated.',
  },
  description:
    'Smarter decisions, seamless execution with Pipvaro across every market.',
      icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  }
}


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full overflow-x-hidden scroll-smooth bg-[#1e2122] antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        {children}
        <script
          src="https://widget.nixera.net/widget.js"
          data-organization-id="org_333WJG9j9bu3PyJkfp3XHfRdbGB"
        ></script>
      </body>
    </html>
  )
}
