import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import LogoImage from '@/images/logos/logo.png'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#1e2122]">
      <Container>
        <div className="py-16">
          <Image src={LogoImage} className="mx-auto h-13 w-auto" alt="" />

          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link href="#" className="group" aria-label="Pipvaro on X">
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
              </svg>
            </Link>
            <Link href="#" className="group" aria-label="Pipvaro on GitHub">
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Pipvaro. All rights
            reserved.
          </p>
        </div>

        {/* --- Disclaimer bar (small, grey, centered) --- */}
        <div className="px-4 pb-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[11px] leading-5 text-slate-500">
              <span className="font-semibold">Disclaimer:</span> By using
              <span className="px-1 font-medium">Pipvaro</span> you agree that we
              are not a broker and do not provide financial, investment, tax or
              legal advice. Trading (incl. forex/CFDs/crypto/futures) involves
              high risk and can result in loss of all capital. No guarantees of
              profit, uptime, data accuracy, or execution are provided. You are
              responsible for complying with your local laws and for any
              third-party accounts you use. Purchases are final unless required
              by law. This notice may change without prior notice.
            </p>
            <p className="mt-2 text-[11px] leading-5 text-slate-500">
              Contact:{" "}
              <a
                href="mailto:support@pipvaro.com"
                className="underline decoration-slate-400/50 hover:decoration-slate-300"
              >
                support@pipvaro.com
              </a>
              {" "}| Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        {/* --- /Disclaimer bar --- */}
      </Container>
    </footer>
  )
}
