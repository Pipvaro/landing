import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/pv-gradient.png'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Ready to automate <br></br>your trading?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Launch your first bot in minutes—manage, monitor<br></br> and pause from one dashboard.
          </p>
          <Button href="https://app.pipvaro.com" color="white" className="mt-10">
            Start free with Fusion
          </Button>
        </div>
      </Container>
    </section>
  )
}
