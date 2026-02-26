import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-8 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">AdMorph Academy</h1>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-12">
            Master the art of AI video advertising with our free courses.
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-[#39FF14]/20 bg-card hover:border-[#39FF14] transition-all duration-300">
                <div className="aspect-video bg-[#39FF14]/5 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#39FF14]/20">Course 0{i}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                    {i === 1 ? "Video Ad Fundamentals" : i === 2 ? "Advanced Targeting" : "Scaling Strategies"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn the core principles of creating high-converting video ads for social media.
                  </p>
                  <button className="w-full py-2 rounded-lg border border-[#39FF14]/30 text-[#39FF14] font-bold hover:bg-[#39FF14] hover:text-black transition-all">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
