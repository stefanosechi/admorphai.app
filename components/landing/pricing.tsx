"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Info, Lock, Zap, Crown, Rocket } from "lucide-react"

const plans = [
  {
    name: "Skeptic",
    price: "€9.99",
    period: "/month",
    description: "For those who don't trust and want to see for themselves",
    credits: "800 credits/month",
    features: [
      "Up to 4 low res videos or 1 HD video",
      "Try the real power of the tool",
      "Launch your first ads",
    ],
    cta: "Choose Plan",
    popular: false,
    icon: Lock,
  },
  {
    name: "Starter",
    price: "€49",
    period: "/month",
    description: "For those who realized it works and want to get serious",
    credits: "5,000 credits/month",
    features: [
      "Up to 20 low res videos or 7 HD videos",
      "15s & 25s videos",
      "WhatsApp support",
    ],
    cta: "Choose Plan",
    popular: false,
    icon: Zap,
  },
  {
    name: "Pro",
    price: "€79",
    period: "/month",
    description: "For those who scale campaigns and need volume",
    credits: "9,000 credits/month",
    features: [
      "Up to 36 low res videos or 12 HD videos",
      "15s & 25s videos",
      "Email, WhatsApp & dedicated call support",
    ],
    cta: "Get Started",
    popular: true,
    icon: Crown,
  },
  {
    name: "Agency",
    price: "€499",
    period: "/month",
    description: "For those who manage clients and can't afford to wait",
    credits: "60,000 credits/month",
    features: [
      "Up to 240 low res videos or 85 HD videos",
      "Multi-user team",
      "API access",
      "Dedicated account manager",
      "White-label exports",
    ],
    cta: "Choose Plan",
    popular: false,
    icon: Rocket,
  },
]

const creditPacks = [
  { credits: 400, price: "€5" },
  { credits: 800, price: "€10" },
  { credits: 2000, price: "€25" },
  { credits: 4000, price: "€50" },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-background py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[#39FF14]/5 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choose the plan that fits your growth stage. Scale as you go.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col overflow-hidden rounded-2xl border ${plan.popular
                  ? "border-[#39FF14] bg-gradient-to-b from-[#39FF14]/10 to-card shadow-[0_0_40px_rgba(57,255,20,0.15)] z-10"
                  : "border-[#39FF14]/20 bg-card hover:border-[#39FF14]/40 hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] transition-all"
                } p-6`}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-6 rotate-45 bg-[#39FF14] px-12 py-1 text-xs font-bold text-black shadow-[0_0_20px_rgba(57,255,20,0.5)] tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#39FF14]/10 text-[#39FF14]">
                  <plan.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground italic min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <div className="mt-2 text-sm font-medium text-[#39FF14]">
                  {plan.credits}
                </div>
              </div>

              <ul className="mb-8 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 flex-shrink-0 text-[#39FF14] mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild
                className={`w-full font-bold ${
                  plan.popular 
                    ? "bg-[#39FF14] text-black hover:bg-[#39FF14]/90 shadow-[0_0_20px_rgba(57,255,20,0.3)]" 
                    : "bg-transparent border border-[#39FF14]/30 text-foreground hover:bg-[#39FF14]/10 hover:border-[#39FF14]"
                }`}
              >
                <Link href="https://admorph.lovable.app/auth">
                  {plan.cta}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
