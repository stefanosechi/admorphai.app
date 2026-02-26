import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-8 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">Privacy Policy</h1>
        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
          <p className="mb-4">Last updated: February 24, 2026</p>
          <p className="mb-8">
            At AdMorph AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us when you register for an account, create or modify your profile, set up preferences, sign up for our newsletter, or make a purchase.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve our services, to develop new services, and to protect AdMorph AI and our users.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect the security of your personal information.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:admorphaiproject@gmail.com" className="text-[#39FF14] hover:underline">admorphaiproject@gmail.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
