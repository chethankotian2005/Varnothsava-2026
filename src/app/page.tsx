import dynamic from 'next/dynamic'
import CyberAranyaHero from '@/components/home/CyberAranyaHero'
import FestIdentity from '@/components/home/FestIdentity'
import EventCategories from '@/components/home/EventCategories'
import RegistrationSteps from '@/components/home/RegistrationSteps'
import LeaderboardTeaser from '@/components/home/LeaderboardTeaser'
import SponsorsPreview from '@/components/home/SponsorsPreview'
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
      
      {/* Main content sections */}
      <CyberAranyaHero />
      <FestIdentity />
      <EventCategories />
      <RegistrationSteps />
      <LeaderboardTeaser />
      <SponsorsPreview />
      <FinalCTA />
    </>
  )
}
