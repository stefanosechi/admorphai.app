import Link from "next/link"
import { Zap } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API", href: "#" },
    { name: "Integrations", href: "#" },
  ],
  resources: [
    { name: "Docs", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Academy", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookies", href: "#" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "#", icon: "𝕏" },
  { name: "LinkedIn", href: "#", icon: "in" },
  { name: "YouTube", href: "#", icon: "▶" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-[#39FF14]/20 bg-card overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 -bottom-20 h-[300px] w-[400px] rounded-full bg-[#39FF14]/5 blur-[100px]" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                <Zap className="h-5 w-5 text-black" />
              </div>
              <span className="text-xl font-bold text-foreground">AdMorph <span className="text-[#39FF14]">AI</span></span>
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
            <h4 className="mb-4 text-sm font-semibold text-foreground">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
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
          <p className="text-sm text-muted-foreground">
            © 2026 AdMorph AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with AI, for AI-powered marketing
          </p>
        </div>
      </div>
    </footer>
  )
}
