"use client"

import { cn } from "@/lib/utils"

type ShowcaseItem = {
  title: string
  tag: string
  position: "top" | "bottom"
}

const COLUMN_A: ShowcaseItem[] = [
  { title: "Creative Work", tag: "Design & Logic", position: "top" },
  { title: "Digital Craft", tag: "Pixel Perfect", position: "bottom" },
  { title: "Visual Story", tag: "Interface Design", position: "top" },
]

const COLUMN_B: ShowcaseItem[] = [
  { title: "Studio Projects", tag: "Built with Passion", position: "top" },
  { title: "Tech Innovation", tag: "Modern Stack", position: "bottom" },
  { title: "Future Vision", tag: "Next Gen Web", position: "top" },
]

const IMAGES_A = [
  "/img/image-gallery/gallery-image-1.png",
  "/img/image-gallery/gallery-image-5.png",
  "/img/image-gallery/gallery-image-3.png",
]

const IMAGES_B = [
  "/img/image-gallery/gallery-image-2.png",
  "/img/image-gallery/gallery-image-4.png",
  "/img/image-gallery/gallery-image-6.png",
]

function ProjectCard({ item, src }: { item: ShowcaseItem; src: string }) {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-white/20 bg-card shadow-md transition-all hover:scale-[1.02]">
      <img
        src={src || "/placeholder.svg"}
        alt={item.title}
        className="w-full aspect-[3/2] object-contain transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <span
        className={cn(
          "absolute font-mono text-[8px] font-normal uppercase tracking-wider",
          "rounded-full bg-white/90 px-2.5 py-1 text-black/80 shadow-lg backdrop-blur-sm",
          "left-3 bottom-3",
        )}
      >
        Preview
      </span>
    </div>
  )
}

function Column({ items, images, direction }: { items: ShowcaseItem[]; images: string[]; direction: "up" | "down" }) {
  const loopItems = [...items, ...items]
  const loopImages = [...images, ...images]

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div
        className={cn(
          "flex flex-col gap-4",
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
    <section className="relative isolate overflow-hidden pt-0 pb-10 -mt-6">
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-4 md:grid-cols-2">
        <Column items={COLUMN_A} images={IMAGES_A} direction="up" />
        <Column items={COLUMN_B} images={IMAGES_B} direction="down" />
      </div>

      <p className="mt-[8px] pb-[30px] text-center font-mono text-[10px] tracking-widest text-muted-foreground/50">
        ↻ infinite vertical scroll · landscape showcase ↺
      </p>
    </section>
  )
}
