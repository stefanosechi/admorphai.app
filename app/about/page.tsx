import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-8 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">About Us</h1>
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <p className="text-xl text-muted-foreground">
            We are a team of marketers, engineers, and creatives on a mission to democratize video advertising.
          </p>
          
          <div className="p-8 rounded-2xl bg-[#39FF14]/5 border border-[#39FF14]/20">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower every brand, regardless of size or budget, to create world-class video ads that drive real business results. We believe that creativity shouldn't be limited by resources.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#39FF14] mb-4">Why AdMorph?</h2>
            <p className="text-muted-foreground mb-4">
              Traditional video production is slow, expensive, and unpredictable. AdMorph changes the game by using advanced AI to generate hundreds of high-quality video variations in minutes, not weeks.
            </p>
            <p className="text-muted-foreground">
              We're not just a tool; we're your creative partner that works 24/7 to help you scale your campaigns.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
