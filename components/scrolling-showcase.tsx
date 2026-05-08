"use client"

import { cn } from "@/lib/utils"

type ShowcaseItem = {
  title: string
  tag: string
  position: "top" | "bottom"
}

const COLUMN_A: ShowcaseItem[] = [
  { title: "Orpheus", tag: "Where music has no limit", position: "bottom" },
  { title: "Nexus Studio", tag: "Creative Hub", position: "bottom" },
  { title: "Competition Winner", tag: "UI/UX Battle", position: "top" },
  { title: "Devkada Community", tag: "Tech Network", position: "bottom" },
]

const COLUMN_B: ShowcaseItem[] = [
  { title: "CYLCentral", tag: "Events", position: "top" },
  { title: "TixSigurado", tag: "Tickets", position: "bottom" },
  { title: "Design Sprint", tag: "Innovation Hub", position: "top" },
  { title: "Community Meetup", tag: "Collaboration", position: "bottom" },
]

const IMAGES_A = [
  "/img/fullstack/orpheus-1.jpg",
  "/img/creative/devcon.jpg",
  "/img/competition/competionImage1.jpg",
  "/img/devkada/1777990915724.jpg",
]

const IMAGES_B = [
  "/img/fullstack/cyl-1.jpg",
  "/img/fullstack/tix-1.jpg",
  "/img/competition/competionImage2.jpg",
  "/img/devkada/687852729_122171611202888015_2246193837610754200_n.jpg",
]

function ProjectCard({ item, src }: { item: ShowcaseItem; src: string }) {
  return (
    <div className="group relative h-64 w-full overflow-hidden rounded-2xl border border-white/20 bg-card shadow-md transition-all hover:scale-[1.02]">
      <img
        src={src || "/placeholder.svg"}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <span
        className={cn(
          "absolute font-mono text-[10px] uppercase tracking-wider",
          "rounded-full bg-white/90 px-2.5 py-1 text-black shadow-lg backdrop-blur-sm",
          item.position === "top" ? "right-3 top-3" : "left-3 bottom-3",
        )}
      >
        Preview
      </span>
      
      <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-display text-sm font-bold text-white">{item.title}</p>
        <p className="text-[10px] text-white/70">{item.tag}</p>
      </div>
    </div>
  )
}

function Column({ items, images, direction }: { items: ShowcaseItem[]; images: string[]; direction: "up" | "down" }) {
  const loopItems = [...items, ...items, ...items]
  const loopImages = [...images, ...images, ...images]
  
  return (
    <div className="relative h-[480px] overflow-hidden">
      <div
        className={cn(
          "flex flex-col gap-5",
          direction === "up" ? "animate-scroll-up" : "animate-scroll-down",
        )}
      >
        {loopItems.map((item, i) => (
          <ProjectCard key={`${item.title}-${i}`} item={item} src={loopImages[i]} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}

export function ScrollingShowcase() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 pb-12 md:grid-cols-2">
        <Column items={COLUMN_A} images={IMAGES_A} direction="up" />
        <Column items={COLUMN_B} images={IMAGES_B} direction="down" />
      </div>

      <p className="pb-20 text-center font-mono text-xs tracking-widest text-muted-foreground">
        ↻ INFINITE VERTICAL SCROLL · LANDSCAPE SHOWCASE ↺
      </p>
    </section>
  )
}
