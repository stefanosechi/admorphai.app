import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-8 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">Cookie Policy</h1>
        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
          <p className="mb-4">Last updated: February 24, 2026</p>
          <p className="mb-8">
            This Cookie Policy explains how AdMorph AI uses cookies and similar technologies to recognize you when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. What are cookies?</h2>
          <p className="mb-4">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Why do we use cookies?</h2>
          <p className="mb-4">
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How can I control cookies?</h2>
          <p className="mb-4">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at: <a href="mailto:admorphaiproject@gmail.com" className="text-[#39FF14] hover:underline">admorphaiproject@gmail.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
