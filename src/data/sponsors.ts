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
    color: 'text-[#FFD36A]',
    bgGradient: 'from-[rgba(255,215,120,0.22)] via-[rgba(255,200,90,0.16)] to-[rgba(255,180,60,0.12)]',
    borderColor: 'border-[rgba(255,215,120,0.7)]',
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
    color: 'text-[#E8E8EC]',
    bgGradient: 'from-[rgba(220,220,230,0.18)] via-[rgba(200,200,210,0.14)] to-[rgba(180,180,195,0.10)]',
    borderColor: 'border-[rgba(220,220,220,0.6)]',
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
    color: 'text-[#FFD36A]',
    bgGradient: 'from-[rgba(255,200,90,0.18)] via-[rgba(255,180,60,0.14)] to-[rgba(255,160,40,0.10)]',
    borderColor: 'border-[rgba(255,200,90,0.45)]',
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
    color: 'text-[#C0C0C8]',
    bgGradient: 'from-[rgba(192,192,200,0.16)] via-[rgba(170,170,180,0.12)] to-[rgba(150,150,160,0.08)]',
    borderColor: 'border-[rgba(192,192,200,0.45)]',
    benefits: [
      'Logo on website',
      'Social media mentions',
      'Event passes',
    ],
  },
  {
    id: 'bronze',
    name: 'Bronze Sponsors',
    color: 'text-[#CD7F32]',
    bgGradient: 'from-[rgba(205,127,50,0.18)] via-[rgba(185,110,45,0.14)] to-[rgba(165,95,40,0.10)]',
    borderColor: 'border-[rgba(205,127,50,0.5)]',
    benefits: [
      'Logo on website',
      'Event passes',
    ],
  },
  {
    id: 'media',
    name: 'Media Partners',
    color: 'text-[#60A5FA]',
    bgGradient: 'from-[rgba(96,165,250,0.16)] via-[rgba(80,140,220,0.12)] to-[rgba(60,120,200,0.08)]',
    borderColor: 'border-[rgba(96,165,250,0.45)]',
    benefits: [
      'Coverage partnership',
      'Brand visibility',
    ],
  },
  {
    id: 'education',
    name: 'Education Partners',
    color: 'text-[#4ADE80]',
    bgGradient: 'from-[rgba(74,222,128,0.16)] via-[rgba(60,200,110,0.12)] to-[rgba(50,180,95,0.08)]',
    borderColor: 'border-[rgba(74,222,128,0.45)]',
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
