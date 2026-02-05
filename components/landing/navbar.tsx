"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#39FF14]/20 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.5)]">
            <Zap className="h-5 w-5 text-black" />
          </div>
          <span className="text-xl font-bold text-foreground">AdMorph <span className="text-[#39FF14]">AI</span></span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            How it Works
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Log in
          </Button>
          <Button className="bg-[#39FF14] text-black font-semibold hover:bg-[#39FF14]/90 shadow-[0_0_20px_rgba(57,255,20,0.4)]">
            Launch App
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-6">
            <Link href="#features" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>
              How it Works
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                Log in
              </Button>
              <Button className="w-full bg-primary text-primary-foreground">
                Launch App
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
