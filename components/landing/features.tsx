"use client"

import { motion } from "framer-motion"
import {
  Zap,
  Target,
  TestTube,
  BarChart3,
  Layers,
  Headphones,
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Bulk Generation",
    description: "Generate hundreds of ad variations in minutes. Scale your creative production without hiring more designers.",
  },
  {
    icon: Target,
    title: "Custom Branding",
    description: "AI learns your brand guidelines, colors, and style. Every ad feels authentically on-brand.",
  },
  {
    icon: TestTube,
    title: "A/B Testing",
    description: "Automatically create multiple versions for split testing. Find your winning creative faster.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track which ad variations perform best. AI learns from data to improve future generations.",
  },
  {
    icon: Layers,
    title: "Multi-Platform Export",
    description: "Export in perfect dimensions for TikTok, Instagram, Facebook, YouTube, and more.",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Get dedicated support from our team of video ad experts. We help you succeed.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative border-y border-[#39FF14]/20 bg-card py-24 sm:py-32 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-[#39FF14]/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#39FF14]/5 blur-[100px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything You Need to Scale
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Powerful features designed for performance marketers who demand results
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-xl border border-[#39FF14]/20 bg-background p-6 transition-all hover:border-[#39FF14]/60 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#39FF14]/10 text-[#39FF14] transition-all group-hover:bg-[#39FF14] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
