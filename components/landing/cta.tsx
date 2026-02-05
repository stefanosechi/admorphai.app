"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="relative bg-background py-24 sm:py-32 overflow-hidden">
      {/* Large background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39FF14]/10 blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[#39FF14]/50 bg-gradient-to-br from-[#39FF14]/20 via-card to-[#39FF14]/10 p-8 sm:p-12 lg:p-16 shadow-[0_0_60px_rgba(57,255,20,0.2)]"
        >
          {/* Background pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-[#39FF14]/15 via-transparent to-transparent" />
          <div className="pointer-events-none absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-[#39FF14]/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#39FF14]/15 blur-[80px]" />
          
          <div className="relative text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#39FF14]/50 bg-[#39FF14]/15 px-4 py-1.5 text-sm text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.3)]">
              <Sparkles className="h-4 w-4" />
              <span>Start Your 7-Day Free Trial</span>
            </div>

            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Ready to Ignite Your Ads?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Join thousands of performance marketers creating scroll-stopping video ads with AI.
              Start creating free today.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 bg-[#39FF14] px-8 text-black font-semibold hover:bg-[#39FF14]/90 shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:shadow-[0_0_40px_rgba(57,255,20,0.7)] transition-all">
                Start Creating Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-sm text-muted-foreground">No credit card required</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
