"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-16">
      {/* Main green glow at top */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-full max-w-[800px] -translate-x-1/2 rounded-full bg-[#39FF14]/20 blur-[100px] opacity-50 sm:opacity-100" />

      {/* Side glows */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[300px] w-[300px] rounded-full bg-[#39FF14]/10 blur-[80px] opacity-40 sm:h-[400px] sm:w-[400px] sm:opacity-100" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[300px] w-[300px] rounded-full bg-[#39FF14]/10 blur-[80px] opacity-40 sm:h-[400px] sm:w-[400px] sm:opacity-100" />

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#39FF14]/15 via-background to-background" />

      {/* Grid pattern with green tint */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#39FF14/5_1px,transparent_1px),linear-gradient(to_bottom,#39FF14/5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#39FF14]/50 bg-[#39FF14]/10 px-4 py-1.5 text-sm text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.3)]"
          >
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Video Ad Generation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your Photos, Now{" "}
            <span className="bg-gradient-to-r from-[#39FF14] via-[#7FFF00] to-[#39FF14] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">
              Viral AI Video Ads
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl"
          >
            Generate high-converting video ads from your product photos in under 60 seconds.
            No editing skills required. Scale your ROAS today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="gap-2 bg-[#39FF14] px-8 text-black font-semibold hover:bg-[#39FF14]/90 shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] transition-all">
              Start Creating Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-[#39FF14]/50 text-[#39FF14] hover:bg-[#39FF14]/10 hover:border-[#39FF14] bg-transparent transition-all">
              <Play className="h-4 w-4 fill-current" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 w-full max-w-5xl"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#39FF14]/30 bg-card shadow-[0_0_60px_rgba(57,255,20,0.15)]">
              <div className="aspect-video bg-gradient-to-br from-card via-secondary to-card">
                <div className="flex h-full items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 animate-pulse rounded-full bg-[#39FF14]/30 blur-xl" />
                    <div className="absolute -inset-8 animate-pulse rounded-full bg-[#39FF14]/10 blur-2xl" />
                    <button
                      type="button"
                      className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#39FF14] text-black transition-transform hover:scale-110 shadow-[0_0_40px_rgba(57,255,20,0.5)]"
                      aria-label="Play demo video"
                    >
                      <Play className="h-8 w-8 fill-current" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-6">
                <p className="text-sm text-muted-foreground">
                  Watch how AdMorph transforms product photos into scroll-stopping video ads
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground/60">Scroll Down</span>
          <div className="h-12 w-6 rounded-full border border-muted-foreground/20 p-1">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-full rounded-full bg-[#39FF14]/50"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
