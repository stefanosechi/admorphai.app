"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "MetaAds", icon: "M" },
  { name: "TikTok Ads", icon: "T" },
  { name: "Google Ads", icon: "G" },
  { name: "Snapchat", icon: "S" },
  { name: "Pinterest", icon: "P" },
  { name: "LinkedIn", icon: "L" },
]

export function TrustedBy() {
  return (
    <section className="relative border-b border-[#39FF14]/20 bg-background py-16 overflow-hidden">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39FF14]/5 blur-[80px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground"
        >
          Trusted by Performance Marketers
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-muted-foreground/60 transition-all hover:text-[#39FF14] group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#39FF14]/30 bg-secondary text-lg font-bold text-[#39FF14]">
                {logo.icon}
              </div>
              <span className="hidden text-sm font-medium sm:inline">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
