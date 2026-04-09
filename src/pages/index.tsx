import { FeatureSection } from '@/components/feature-section'
import { HeroSection } from '@/components/hero-section'

export default function Home() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
    </article>
  )
}
