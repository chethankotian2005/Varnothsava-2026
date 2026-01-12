import dynamic from 'next/dynamic'
import CyberAranyaHero from '@/components/home/CyberAranyaHero'
import FestIdentity from '@/components/home/FestIdentity'
import ChooseYourArena from '@/components/home/ChooseYourArena'
import RegistrationSteps from '@/components/home/RegistrationSteps'
import LeaderboardTeaser from '@/components/home/LeaderboardTeaser'
import SponsorsPreview from '@/components/home/SponsorsPreview'
import Testimonials from '@/components/home/Testimonials'
import FinalCTA from '@/components/home/FinalCTA'
import LiveCounter from '@/components/ui/LiveCounter'
import EventHighlightsMarquee from '@/components/ui/EventHighlightsMarquee'

// Dynamically import effects that use browser APIs
const MistEffect = dynamic(() => import('@/components/effects/MistEffect'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      {/* Ambient environment effects */}
      <MistEffect />
      
      {/* Event Highlights Marquee - Scrolling banner */}
      <EventHighlightsMarquee />
      
      {/* Main content sections with IDs and consistent spacing for scroll-based navigation */}
      <section id="hero" className="relative">
        <CyberAranyaHero />
        {/* Live registration counter below hero */}
        <div className="container mx-auto px-6 -mt-8 relative z-20">
          <LiveCounter />
        </div>
      </section>
      
      <section id="about" className="relative">
        <FestIdentity />
      </section>
      
      {/* Choose Your Arena - Event categories selection */}
      <section id="events" className="relative">
        <ChooseYourArena />
      </section>
      
      <section id="registration" className="relative">
        <RegistrationSteps />
      </section>
      
      <section id="leaderboard" className="relative">
        <LeaderboardTeaser />
      </section>
      
      <section id="testimonials" className="relative">
        <Testimonials />
      </section>
      
      <section id="sponsors" className="relative">
        <SponsorsPreview />
      </section>
      
      <section id="cta" className="relative">
        <FinalCTA />
      </section>
    </>
  )
}
