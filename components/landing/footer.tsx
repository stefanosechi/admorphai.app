import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "mailto:admorphaiproject@gmail.com" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "#", icon: "𝕏" },
  { name: "LinkedIn", href: "#", icon: "in" },
  { name: "YouTube", href: "#", icon: "▶" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-[#39FF14]/20 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 -bottom-20 h-[500px] w-[600px] rounded-full bg-[#39FF14]/15 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative h-12 w-40 transition-transform group-hover:scale-105">
                <Image
                  src="/Logo e favicon/logoadmorphai-removebg-preview.png"
                  alt="AdMorph AI"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Transform your product photos into high-converting video ads with the power of AI.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#39FF14]/30 bg-background text-muted-foreground transition-all hover:border-[#39FF14] hover:text-[#39FF14] hover:shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                  aria-label={social.name}
                >
                  <span className="text-sm font-medium">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#39FF14]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#39FF14]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#39FF14]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#39FF14]/20 pt-8 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p className="text-sm text-muted-foreground">
              © 2026 AdMorph AI. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Sab Tecnologies VAT IE0193642SB Apartment 3 Cullenswood park, Dublin, Ireland. 
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="text-sm text-muted-foreground">
              Made with AI, for AI-powered marketing
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-3 w-3 fill-red-500 text-red-500 animate-pulse" /> in Europe
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
