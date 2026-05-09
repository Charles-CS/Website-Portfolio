"use client"

import { useState } from "react"
import { Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Competition", href: "#competition" },
  { label: "Web Dev", href: "#web-dev" },
  { label: "Other Works", href: "#other-works" },
]

export function SiteHeader() {
  const [active, setActive] = useState<string>("Home")

  return (
    <header
      className="absolute inset-x-0 top-2 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#70708A]">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
          LAGUNA, PHILIPPINES
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-xs">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setActive(item.label)}
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

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
        >
          <Linkedin className="h-4 w-4" aria-hidden />
          Connect with me
        </a>
      </div>
    </header>
  )
}
