import dynamic from 'next/dynamic'
import CyberAranyaHero from '@/components/home/CyberAranyaHero'
import FestIdentity from '@/components/home/FestIdentity'
import ChooseYourArena from '@/components/home/ChooseYourArena'
import RegistrationSteps from '@/components/home/RegistrationSteps'
import LeaderboardTeaser from '@/components/home/LeaderboardTeaser'
import SponsorsPreview from '@/components/home/SponsorsPreview'
import Testimonials from '@/components/home/Testimonials'
import FinalCTA from '@/components/home/FinalCTA'

// Dynamically import effects that use browser APIs
const MistEffect = dynamic(() => import('@/components/effects/MistEffect'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      {/* Ambient environment effects */}
      <MistEffect />
      
      {/* Main content sections with IDs for scroll-based navigation */}
      <section id="hero">
        <CyberAranyaHero />
      </section>
      
      <section id="about">
        <FestIdentity />
      </section>
      
      {/* Choose Your Arena - Event categories selection */}
      <section id="events">
        <ChooseYourArena />
      </section>
      
      <section id="registration">
        <RegistrationSteps />
      </section>
      
      <section id="leaderboard">
        <LeaderboardTeaser />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="sponsors">
        <SponsorsPreview />
      </section>
      
      <section id="cta">
        <FinalCTA />
      </section>
    </>
  )
}
