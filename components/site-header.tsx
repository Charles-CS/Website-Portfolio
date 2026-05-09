"use client"

import { useEffect, useState } from "react"
import { Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Awards", href: "#awards" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [active, setActive] = useState<string>("Home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border/60" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-mono text-xs tracking-widest text-foreground/80">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
          LAGUNA, PHILIPPINES
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  className={cn(
                    "relative py-2 transition-colors",
                    active === item.label ? "text-primary font-medium" : "text-foreground/80 hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
        >
          <Linkedin className="h-4 w-4" aria-hidden />
          Connect with me
        </a>
      </div>
    </header>
  )
}
