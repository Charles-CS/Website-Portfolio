import { Code2, Heart, Palette, Quote, Sparkles, Users, Zap, Globe } from "lucide-react"

const DRIVERS = [
  { label: "Creative Design", Icon: Palette },
  { label: "Clean Code", Icon: Code2 },
  { label: "Team Collaboration", Icon: Users },
  { label: "Open Source", Icon: Globe },
]

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-primary">GET TO KNOW ME</p>
        <h2 className="mt-3 font-display text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          About <span className="bg-gradient-to-br from-violet-500 to-violet-700 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Passionate developer & creator who loves building meaningful digital experiences.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: image card */}
          <div className="relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-md">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-2xl font-semibold text-white/90 drop-shadow-sm">Replace me</p>
              <p className="mt-1 text-sm text-white/75">Drop your image into /public/img/...</p>
            </div>

            <span className="relative inline-flex w-fit items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-xs font-medium text-foreground/80 ring-1 ring-white/60 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
              Available for opportunities
            </span>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border">
              <span className="absolute -left-1.5 top-12 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
              <Quote className="h-6 w-6 text-primary" aria-hidden />
              <div className="mt-4 space-y-4 text-foreground/85 text-lg leading-relaxed">
                <p>
                  I&apos;m Charles Platon, a passionate{" "}
                  <span className="font-medium text-primary">developer and creator</span> bridging the gap between code
                  and craft. With a background in Computer Science and a heart for building, I make digital experiences
                  that are functional and meaningful.
                </p>
                <p>
                  Currently exploring the intersection of{" "}
                  <span className="font-medium text-primary">full-stack web, game development, and 3D art</span>. When
                  I&apos;m not shipping code, you&apos;ll find me modeling assets in Blender or competing in CS quizbees
                  with my team.
                </p>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Heart className="h-4 w-4 text-primary" aria-hidden />
                What Drives Me
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {DRIVERS.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 ring-1 ring-border transition-shadow hover:shadow-sm"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun fact */}
            <div className="relative overflow-hidden rounded-2xl bg-card p-6 border border-border shadow-md">
              <Zap className="absolute right-5 top-5 h-6 w-6 text-primary/40" aria-hidden />
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
                <Zap className="h-3.5 w-3.5" aria-hidden />
                Fun Fact
              </p>
              <p className="mt-3 text-lg leading-relaxed text-pretty text-foreground/90">
                &quot;Balancing 3rd-year CS with 3D modeling is a different grind — but bridging logic and visual craft
                is what keeps me coding past midnight.&quot;
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-3 w-3 text-primary" aria-hidden />
                </span>
                Charles · Midnight Coder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
