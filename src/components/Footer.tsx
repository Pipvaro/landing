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
              <NavLink href="/privacy-policy">Privacy Policy</NavLink>
              <NavLink href="/terms-of-service">Terms of Service</NavLink>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            {/* Discord (schärfere Variante) */}
            <Link href="https://discord.gg/rU9hbFDeaY" target="blank_" className="group" aria-label="Pipvaro on Discord">
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
                shapeRendering="geometricPrecision"
              >
                <path d="M21.06 6.356A17.573 17.573 0 0 0 16.757 5c-.2.358-.43.83-.588 1.23A13.2 13.2 0 0 0 12 5.652c-1.625 0-3.188.28-4.668.803-.16-.4-.39-.872-.588-1.23A17.573 17.573 0 0 0 2.94 6.356 19.2 19.2 0 0 0 1 15.258c1.728 2.055 4.197 3.544 6.977 4.203.351-.48.663-.991.93-1.53-.51-.149-.996-.35-1.453-.592l.327-.248c2.768 1.287 5.89 1.287 8.657 0l.327.248c-.457.241-.943.443-1.453.592.267.539.58 1.049.93 1.53 2.78-.659 5.249-2.148 6.976-4.203a19.2 19.2 0 0 0-1.94-8.902ZM8.084 13.86c-.79 0-1.43-.741-1.43-1.653 0-.911.64-1.652 1.43-1.652.79 0 1.43.741 1.43 1.652 0 .912-.64 1.653-1.43 1.653Zm7.832 0c-.79 0-1.43-.741-1.43-1.653 0-.911.64-1.652 1.43-1.652.79 0 1.43.741 1.43 1.652 0 .912-.64 1.653-1.43 1.653Z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link href="https://instagram.com/pipvaro" target="_blank" className="group" aria-label="Pipvaro on Instagram">
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
              </svg>
            </Link>

            {/* X / Twitter */}
            <Link href="#" className="group" aria-label="Pipvaro on X">
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
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
