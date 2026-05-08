"use client"

import { useState } from "react"
import { Palette, Globe, Award, X, type LucideIcon } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

type Card = {
  count: number
  category: string
  icon: LucideIcon
  title: string
  description: string
  type: string
  // Kinetic-type words that scroll in the preview area
  words: string[]
}

const CARDS: Card[] = [
  {
    count: 3,
    category: "BRANDING",
    icon: Palette,
    title: "TICaP 20 Official Branding",
    description:
      "As Head of Creatives, led the visual direction and designed the official 20th-anniversary logo for this major technology exhibit.",
    type: "BRANDING",
    words: ["bold", "iconic", "milestone", "vision"],
  },
  {
    count: 3,
    category: "CREATIVE DIRECTION",
    icon: Globe,
    title: "DEVCON Manila",
    description:
      "Serving as VP for Creatives, leading digital direction and ensuring visual consistency across all community platforms.",
    type: "CREATIVE DIRECTION",
    words: ["the app will live", "movable to be", "remembered", "by everyone"],
  },
  {
    count: 3,
    category: "WEB DESIGN",
    icon: Globe,
    title: "ASEAN Business Advisory Council (PH)",
    description:
      "Focused on usability and clean visual structure to translate stakeholder requirements into responsive website layouts.",
    type: "WEB DESIGN",
    words: ["clarity", "structure", "trust", "purpose"],
  },
  {
    count: 3,
    category: "AWARD",
    icon: Award,
    title: "WebJam UI/UX Champion",
    description:
      "Award-winning design recognized for exceptional user interface and experience design in a competitive hackathon setting.",
    type: "AWARD",
    words: ["champion", "design", "experience", "excellence"],
  },
]

// Identical kinetic text behind every card so the giant letters scroll in unison
// across the row, just like the reference site.
const KINETIC_LINE_TOP = "the app will live · movable to be · remembered · forever ·"
const KINETIC_LINE_BOTTOM = "movable to be · remembered · forever · the app will live ·"

function KineticPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-muted/40 to-muted/70">
      {/* Two stacked rows of giant text scrolling in opposite directions */}
      <div className="absolute inset-x-0 top-0 flex h-1/2 items-center overflow-hidden">
        <div className="flex shrink-0 animate-marquee-left whitespace-nowrap text-[110px] font-extrabold tracking-tight text-foreground/95 leading-none">
          <span className="px-8">{KINETIC_LINE_TOP}</span>
          <span className="px-8" aria-hidden>
            {KINETIC_LINE_TOP}
          </span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex h-1/2 items-center overflow-hidden">
        <div className="flex shrink-0 animate-marquee-right whitespace-nowrap text-[110px] font-extrabold tracking-tight text-foreground/95 leading-none">
          <span className="px-8">{KINETIC_LINE_BOTTOM}</span>
          <span className="px-8" aria-hidden>
            {KINETIC_LINE_BOTTOM}
          </span>
        </div>
      </div>
      {/* Subtle highlight in the middle */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-foreground/5" />
    </div>
  )
}

export function CreativeDirectionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [page, setPage] = useState(1)

  const active = openIndex !== null ? CARDS[openIndex] : null

  return (
    <section id="creative" className="relative bg-card px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary" aria-hidden />
          <p className="font-mono text-xs tracking-widest text-primary">03 / CREATIVE DIRECTION</p>
        </div>
        <h2 className="mt-3 font-display text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="text-foreground">Design &</span>
          <span className="bg-gradient-to-br from-violet-500 to-violet-700 bg-clip-text text-transparent">
            Creative
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <button
                key={card.title}
                type="button"
                onClick={() => {
                  setOpenIndex(i)
                  setPage(1)
                }}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              >
                {/* Kinetic typography preview */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <KineticPreview />

                  {/* Count badge (visible on hover) */}
                  <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-mono text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/80" aria-hidden />
                    {card.count}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="font-mono text-[11px] tracking-widest">{card.category}</span>
                  </div>

                  <h3 className="mt-3 line-clamp-1 text-sm font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {card.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-foreground/70">{card.description}</p>

                  <p className="mt-4 font-mono text-[11px] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {"Click to view →"}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        <p className="mt-10 text-center font-mono text-xs text-muted-foreground">
          Each project includes a full gallery — click on any card to explore
        </p>
      </div>

      {/* Lightbox / detail modal */}
      <Dialog
        open={openIndex !== null}
        onOpenChange={(o) => {
          if (!o) setOpenIndex(null)
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="max-h-[90vh] w-[95vw] max-w-6xl overflow-hidden p-0 sm:rounded-2xl"
        >
          {active && (
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
              {/* Left: details */}
              <div className="flex flex-col justify-between bg-card p-8">
                <div>
                  <span className="inline-block rounded-md bg-primary/10 px-2 py-1 font-mono text-[10px] tracking-widest text-primary">
                    {active.category}
                  </span>
                  <DialogTitle className="mt-4 text-2xl font-bold leading-tight text-foreground">
                    {active.title}
                  </DialogTitle>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{active.description}</p>
                </div>

                <div className="mt-10 border-t border-border pt-5">
                  <p className="font-mono text-[11px] tracking-widest text-muted-foreground">PROJECT DETAILS</p>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">TYPE</dt>
                      <dd className="font-medium text-foreground">{active.type}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">MEDIA</dt>
                      <dd className="font-medium text-foreground">{active.count} images</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Right: gallery */}
              <div className="relative max-h-[90vh] overflow-y-auto bg-muted/40">
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow-md transition hover:bg-black"
                  aria-label="Close gallery"
                >
                  <X className="h-4 w-4" />
                </button>

                {Array.from({ length: active.count }).map((_, i) => (
                  <div
                    key={i}
                    className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-border bg-background"
                  >
                    <KineticPreview />
                    <span className="absolute right-4 bottom-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 font-mono text-[11px] text-white">
                      {i + 1}/{active.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
