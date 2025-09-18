import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Slider } from '@/components/Slider'
import { Testimonials } from '@/components/Testimonials'
import { Steps } from '@/components/Steps' 
import { Bots } from '@/components/Bots' 

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Steps />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Slider />
        <Bots />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
