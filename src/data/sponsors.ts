export interface Sponsor {
  id: string
  name: string
  logo: string
  website?: string
  tier: 'title' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'media' | 'education'
  description?: string
}

export interface SponsorTier {
  id: string
  name: string
  color: string
  bgGradient: string
  borderColor: string
  benefits: string[]
}

export const sponsorTiers: SponsorTier[] = [
  {
    id: 'title',
    name: 'Title Sponsor',
    color: 'text-amber-400',
    bgGradient: 'from-amber-900/40 to-amber-800/20',
    borderColor: 'border-amber-600/50',
    benefits: [
      'Exclusive branding on all materials',
      'Main stage naming rights',
      'VIP passes and hospitality',
      'Speaking opportunity at inauguration',
      'Prime booth location',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Sponsors',
    color: 'text-slate-200',
    bgGradient: 'from-slate-700/40 to-slate-600/20',
    borderColor: 'border-slate-400/50',
    benefits: [
      'Large logo on event materials',
      'Premium booth space',
      'Social media promotion',
      'VIP passes',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Sponsors',
    color: 'text-gold-500',
    bgGradient: 'from-gold-900/40 to-gold-800/20',
    borderColor: 'border-gold-600/50',
    benefits: [
      'Logo on event materials',
      'Standard booth space',
      'Social media mentions',
      'Event passes',
    ],
  },
  {
    id: 'silver',
    name: 'Silver Sponsors',
    color: 'text-gray-400',
    bgGradient: 'from-gray-700/40 to-gray-600/20',
    borderColor: 'border-gray-500/50',
    benefits: [
      'Logo on website',
      'Social media mentions',
      'Event passes',
    ],
  },
  {
    id: 'bronze',
    name: 'Bronze Sponsors',
    color: 'text-amber-700',
    bgGradient: 'from-amber-950/40 to-amber-900/20',
    borderColor: 'border-amber-800/50',
    benefits: [
      'Logo on website',
      'Event passes',
    ],
  },
  {
    id: 'media',
    name: 'Media Partners',
    color: 'text-blue-400',
    bgGradient: 'from-blue-900/40 to-blue-800/20',
    borderColor: 'border-blue-600/50',
    benefits: [
      'Coverage partnership',
      'Brand visibility',
    ],
  },
  {
    id: 'education',
    name: 'Education Partners',
    color: 'text-green-400',
    bgGradient: 'from-green-900/40 to-green-800/20',
    borderColor: 'border-green-600/50',
    benefits: [
      'Student engagement',
      'Recruitment opportunity',
    ],
  },
]

export const sponsors: Sponsor[] = [
  // Title Sponsor
  {
    id: 'techcorp',
    name: 'TechCorp Industries',
    logo: '/images/sponsors/techcorp.png',
    website: 'https://techcorp.example.com',
    tier: 'title',
    description: 'Leading technology solutions provider in Karnataka',
  },
  
  // Platinum Sponsors
  {
    id: 'innovate-solutions',
    name: 'Innovate Solutions',
    logo: '/images/sponsors/innovate.png',
    website: 'https://innovate.example.com',
    tier: 'platinum',
  },
  {
    id: 'coastal-bank',
    name: 'Coastal Bank',
    logo: '/images/sponsors/coastal-bank.png',
    website: 'https://coastalbank.example.com',
    tier: 'platinum',
  },
  
  // Gold Sponsors
  {
    id: 'mangalore-motors',
    name: 'Mangalore Motors',
    logo: '/images/sponsors/mm.png',
    website: 'https://mangaloremotors.example.com',
    tier: 'gold',
  },
  {
    id: 'udupi-foods',
    name: 'Udupi Foods',
    logo: '/images/sponsors/udupi-foods.png',
    website: 'https://udupifoods.example.com',
    tier: 'gold',
  },
  {
    id: 'karavali-travels',
    name: 'Karavali Travels',
    logo: '/images/sponsors/karavali.png',
    website: 'https://karavali.example.com',
    tier: 'gold',
  },
  
  // Silver Sponsors
  {
    id: 'printwise',
    name: 'PrintWise',
    logo: '/images/sponsors/printwise.png',
    tier: 'silver',
  },
  {
    id: 'eventpro',
    name: 'EventPro Rentals',
    logo: '/images/sponsors/eventpro.png',
    tier: 'silver',
  },
  {
    id: 'campus-cafe',
    name: 'Campus Cafe',
    logo: '/images/sponsors/campuscafe.png',
    tier: 'silver',
  },
  {
    id: 'student-zone',
    name: 'Student Zone',
    logo: '/images/sponsors/studentzone.png',
    tier: 'silver',
  },
  
  // Bronze Sponsors
  {
    id: 'local-print',
    name: 'Local Print Shop',
    logo: '/images/sponsors/localprint.png',
    tier: 'bronze',
  },
  {
    id: 'coffee-corner',
    name: 'Coffee Corner',
    logo: '/images/sponsors/coffee.png',
    tier: 'bronze',
  },
  
  // Media Partners
  {
    id: 'udayavani',
    name: 'Udayavani',
    logo: '/images/sponsors/udayavani.png',
    website: 'https://udayavani.com',
    tier: 'media',
  },
  {
    id: 'daijiworld',
    name: 'Daijiworld',
    logo: '/images/sponsors/daijiworld.png',
    website: 'https://daijiworld.com',
    tier: 'media',
  },
  {
    id: 'radio-city',
    name: 'Radio City 91.1',
    logo: '/images/sponsors/radiocity.png',
    tier: 'media',
  },
  
  // Education Partners
  {
    id: 'coding-ninjas',
    name: 'Coding Ninjas',
    logo: '/images/sponsors/codingninjas.png',
    website: 'https://codingninjas.com',
    tier: 'education',
  },
  {
    id: 'upgrad',
    name: 'upGrad',
    logo: '/images/sponsors/upgrad.png',
    website: 'https://upgrad.com',
    tier: 'education',
  },
]

export const getSponsorsByTier = (tierId: string): Sponsor[] => {
  return sponsors.filter(s => s.tier === tierId)
}

export const getTierInfo = (tierId: string): SponsorTier | undefined => {
  return sponsorTiers.find(t => t.id === tierId)
}
