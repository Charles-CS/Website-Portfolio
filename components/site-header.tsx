"use client"

import { useState } from "react"
import { Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Web Dev", href: "#projects" },
  { label: "Other works", href: "#creative" },
]

export function SiteHeader() {
  const [active, setActive] = useState<string>("Home")

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    if (elem) {
      const offset = 80 // Adjust for header height
      const bodyRect = document.body.getBoundingClientRect().top
      const elemRect = elem.getBoundingClientRect().top
      const elemPosition = elemRect - bodyRect
      const offsetPosition = elemPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setActive(NAV_ITEMS.find((i) => i.href === href)?.label || "Home")
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#70708A]"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
          LAGUNA, PHILIPPINES
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-xs">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    "relative py-2 transition-colors font-medium",
                    active === item.label ? "text-primary font-semibold" : "text-[#70708A] hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
            Connect with me
          </a>
        </div>
      </div>
    </header>
  )
}
