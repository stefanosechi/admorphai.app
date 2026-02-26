import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-8 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">Terms of Service</h1>
        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
          <p className="mb-4">Last updated: February 24, 2026</p>
          <p className="mb-8">
            Please read these Terms of Service ("Terms") carefully before using the AdMorph AI website and services operated by AdMorph AI.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Subscriptions</h2>
          <p className="mb-4">
            Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis (such as monthly or annually).
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Content</h2>
          <p className="mb-4">
            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the Content that you post to the Service.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <a href="mailto:admorphaiproject@gmail.com" className="text-[#39FF14] hover:underline">admorphaiproject@gmail.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
