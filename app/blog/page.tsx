import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-8 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">Blog</h1>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-12">
            Latest news, updates, and insights from the AdMorph AI team.
          </p>
          
          <div className="space-y-12">
            <article className="border-b border-[#39FF14]/20 pb-12">
              <span className="text-sm text-[#39FF14] font-mono">February 24, 2026</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4 hover:text-[#39FF14] transition-colors cursor-pointer">
                Introducing AdMorph 2.0: The Future of AI Video Ads
              </h2>
              <p className="text-muted-foreground mb-6">
                We've completely rebuilt our engine from the ground up to deliver 4K resolution, faster generation times, and even better conversion rates.
              </p>
              <button className="text-[#39FF14] font-bold hover:underline">Read more →</button>
            </article>

            <article className="border-b border-[#39FF14]/20 pb-12">
              <span className="text-sm text-[#39FF14] font-mono">February 10, 2026</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4 hover:text-[#39FF14] transition-colors cursor-pointer">
                How to Scale Your TikTok Ads with AI
              </h2>
              <p className="text-muted-foreground mb-6">
                Learn the strategies top brands are using to scale their TikTok campaigns without breaking the bank on creative production.
              </p>
              <button className="text-[#39FF14] font-bold hover:underline">Read more →</button>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
