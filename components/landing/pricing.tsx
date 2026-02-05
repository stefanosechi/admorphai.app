"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$30",
    period: "/month",
    description: "Perfect for getting started with AI video ads",
    features: [
      "50 video ads/month",
      "720p resolution",
      "Basic templates",
      "Email support",
      "1 brand kit",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$129",
    period: "/month",
    description: "For growing brands scaling their ad creative",
    features: [
      "300 video ads/month",
      "1080p resolution",
      "Premium templates",
      "Priority support",
      "5 brand kits",
      "A/B testing tools",
      "Custom analytics",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$309",
    period: "/month",
    description: "For agencies and high-volume advertisers",
    features: [
      "Unlimited video ads",
      "4K resolution",
      "All templates + custom",
      "Dedicated account manager",
      "Unlimited brand kits",
      "API access",
      "White-label options",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-background py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#39FF14]/5 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Real Results, Real ROAS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choose the plan that fits your creative needs. All plans include a 7-day free trial.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border ${
                plan.popular
                  ? "border-[#39FF14]/60 bg-gradient-to-b from-[#39FF14]/15 to-card shadow-[0_0_40px_rgba(57,255,20,0.2)]"
                  : "border-[#39FF14]/20 bg-card hover:border-[#39FF14]/40 hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] transition-all"
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-6 rotate-45 bg-[#39FF14] px-12 py-1 text-xs font-semibold text-black shadow-[0_0_20px_rgba(57,255,20,0.5)]">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#39FF14]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-[#39FF14] text-black font-semibold hover:bg-[#39FF14]/90 shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                    : "bg-secondary text-secondary-foreground hover:bg-[#39FF14]/10 hover:text-[#39FF14] border border-[#39FF14]/30"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
