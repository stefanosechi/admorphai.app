import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-8 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">Documentation</h1>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Learn how to use AdMorph AI to create high-converting video ads.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 mt-12">
            <div className="p-6 rounded-xl border border-[#39FF14]/20 bg-card hover:border-[#39FF14]/50 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
              <p className="text-muted-foreground">Everything you need to know to create your first ad campaign.</p>
            </div>
            <div className="p-6 rounded-xl border border-[#39FF14]/20 bg-card hover:border-[#39FF14]/50 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-4">API Reference</h2>
              <p className="text-muted-foreground">Technical documentation for integrating AdMorph into your workflow.</p>
            </div>
            <div className="p-6 rounded-xl border border-[#39FF14]/20 bg-card hover:border-[#39FF14]/50 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-4">Best Practices</h2>
              <p className="text-muted-foreground">Tips and tricks for maximizing your ROAS with AI video ads.</p>
            </div>
            <div className="p-6 rounded-xl border border-[#39FF14]/20 bg-card hover:border-[#39FF14]/50 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-4">Account Management</h2>
              <p className="text-muted-foreground">Manage your subscription, team members, and billing settings.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
