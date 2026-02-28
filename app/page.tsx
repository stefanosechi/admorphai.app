import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Showcase } from "@/components/landing/showcase"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Features } from "@/components/landing/features"
import { Pricing } from "@/components/landing/pricing"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"
import { Particles } from "@/components/landing/particles"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <Particles />
      <Navbar />
      <Hero />
      <Showcase />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
