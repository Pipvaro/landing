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
import { Results } from '@/components/Results'
import Trust from '@/components/Trust'
import BackToTop from '@/components/BackToTop';



export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <BackToTop showAfterId="PrimaryFeatures" />
        <SecondaryFeatures />
        <Steps />
        <CallToAction />
        <Testimonials />
        <Trust />
        <Pricing />
        <Slider />
        {/* <Results /> */}
        <Bots />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
