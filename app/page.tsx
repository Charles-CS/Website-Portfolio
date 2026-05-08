import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ScrollingShowcase } from "@/components/scrolling-showcase"
import { AboutSection } from "@/components/about-section"
import { FullStackSection } from "@/components/fullstack-section"
import { CreativeDirectionSection } from "@/components/creative-direction-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <Hero />
      <ScrollingShowcase />
      <AboutSection />
      <FullStackSection />
      <CreativeDirectionSection />
      <SiteFooter />
    </main>
  )
}
