import { ArrowRight } from "lucide-react"

type GameCard = {
  role: string
  title: string
  description: string
}

const GAMES: GameCard[] = [
  {
    role: "Game Developer",
    title: "The Lost Hospital",
    description:
      "A first-person horror exploration title built in Unreal Engine focused on atmosphere, lighting and sound design.",
  },
  {
    role: "Game Developer",
    title: "Sonic Path",
    description:
      "Fast-paced runner prototype made in Unity exploring movement mechanics and procedural level segments.",
  },
]

export function GamesSection() {
  return (
    <section id="awards" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-primary">03 / CREATIVE DIRECTION</p>
        <h2 className="mt-3 font-display text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="text-foreground">Games &amp; </span>
          <span className="bg-gradient-to-br from-violet-500 to-violet-700 bg-clip-text text-transparent">3D</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {GAMES.map((g) => (
            <article
              key={g.title}
              className="group overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div className="relative flex h-80 items-center justify-center bg-muted/40">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-foreground/20 drop-shadow-sm">Replace me</p>
                  <p className="mt-1 text-sm text-foreground/10">Drop your image into /public/img/...</p>
                </div>
              </div>
              <div className="p-7">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{g.role}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{g.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-foreground/75">{g.description}</p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-violet-700"
                >
                  Click to view
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
