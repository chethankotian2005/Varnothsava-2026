export interface GalleryItem {
  id: string
  src: string
  thumbnail?: string
  type: 'image' | 'video'
  title: string
  description?: string
  category: 'cultural' | 'technical' | 'workshop' | 'proshow' | 'moments' | 'venue'
  year: number
  featured?: boolean
}

export interface GalleryCategory {
  id: string
  name: string
  description: string
}

export const galleryCategories: GalleryCategory[] = [
  { id: 'all', name: 'All', description: 'View all gallery items' },
  { id: 'cultural', name: 'Cultural', description: 'Dance, music, drama performances' },
  { id: 'technical', name: 'Technical', description: 'Hackathons, robotics, coding' },
  { id: 'workshop', name: 'Workshops', description: 'Learning sessions and demos' },
  { id: 'proshow', name: 'Pro Shows', description: 'Celebrity performances and concerts' },
  { id: 'moments', name: 'Moments', description: 'Candid captures and memories' },
  { id: 'venue', name: 'Venue', description: 'Stage setups and decorations' },
]

// Sample gallery data - replace with actual images
export const galleryItems: GalleryItem[] = [
  // 2024 Edition
  {
    id: 'dance-finals-2024',
    src: '/images/gallery/dance-finals-2024.jpg',
    type: 'image',
    title: 'Dance Competition Finals',
    description: 'The electrifying finale of our flagship dance competition',
    category: 'cultural',
    year: 2024,
    featured: true,
  },
  {
    id: 'hackathon-2024',
    src: '/images/gallery/hackathon-2024.jpg',
    type: 'image',
    title: '24-Hour Hackathon',
    description: 'Teams working through the night on innovative solutions',
    category: 'technical',
    year: 2024,
    featured: true,
  },
  {
    id: 'proshow-2024',
    src: '/images/gallery/proshow-2024.jpg',
    type: 'image',
    title: 'Pro Show Night',
    description: 'The main stage lit up for the headline performance',
    category: 'proshow',
    year: 2024,
    featured: true,
  },
  {
    id: 'robotics-2024',
    src: '/images/gallery/robotics-2024.jpg',
    type: 'image',
    title: 'Robo Wars Arena',
    description: 'Fierce battles in the robot combat arena',
    category: 'technical',
    year: 2024,
  },
  {
    id: 'drama-2024',
    src: '/images/gallery/drama-2024.jpg',
    type: 'image',
    title: 'Theater Performance',
    description: 'A moving performance by the drama club',
    category: 'cultural',
    year: 2024,
  },
  {
    id: 'workshop-ai-2024',
    src: '/images/gallery/workshop-ai-2024.jpg',
    type: 'image',
    title: 'AI/ML Workshop',
    description: 'Hands-on session with industry experts',
    category: 'workshop',
    year: 2024,
  },
  {
    id: 'crowd-2024',
    src: '/images/gallery/crowd-2024.jpg',
    type: 'image',
    title: 'Opening Ceremony Crowd',
    description: 'The amphitheater packed for the inauguration',
    category: 'moments',
    year: 2024,
  },
  {
    id: 'main-stage-2024',
    src: '/images/gallery/main-stage-2024.jpg',
    type: 'image',
    title: 'Main Stage Setup',
    description: 'The spectacular Cyber-Aranya themed main stage',
    category: 'venue',
    year: 2024,
  },
  
  // 2023 Edition
  {
    id: 'fashion-show-2023',
    src: '/images/gallery/fashion-show-2023.jpg',
    type: 'image',
    title: 'Fashion Show',
    description: 'Stunning designs on the runway',
    category: 'cultural',
    year: 2023,
  },
  {
    id: 'coding-2023',
    src: '/images/gallery/coding-2023.jpg',
    type: 'image',
    title: 'Competitive Coding',
    description: 'Intense focus during the coding marathon',
    category: 'technical',
    year: 2023,
  },
  {
    id: 'band-2023',
    src: '/images/gallery/band-2023.jpg',
    type: 'image',
    title: 'Battle of Bands',
    description: 'College bands rocking the stage',
    category: 'cultural',
    year: 2023,
  },
  {
    id: 'dj-night-2023',
    src: '/images/gallery/dj-night-2023.jpg',
    type: 'image',
    title: 'DJ Night',
    description: 'The crowd going wild at DJ night',
    category: 'proshow',
    year: 2023,
  },
  {
    id: 'winners-2023',
    src: '/images/gallery/winners-2023.jpg',
    type: 'image',
    title: 'Overall Champions',
    description: 'The winning team celebrating their victory',
    category: 'moments',
    year: 2023,
    featured: true,
  },
  {
    id: 'decor-2023',
    src: '/images/gallery/decor-2023.jpg',
    type: 'image',
    title: 'Entrance Decoration',
    description: 'The themed entrance welcoming participants',
    category: 'venue',
    year: 2023,
  },
  
  // 2022 Edition
  {
    id: 'comeback-2022',
    src: '/images/gallery/comeback-2022.jpg',
    type: 'image',
    title: 'Post-Pandemic Comeback',
    description: 'The joyful return after two years',
    category: 'moments',
    year: 2022,
    featured: true,
  },
  {
    id: 'classical-2022',
    src: '/images/gallery/classical-2022.jpg',
    type: 'image',
    title: 'Classical Dance',
    description: 'A beautiful Bharatanatyam performance',
    category: 'cultural',
    year: 2022,
  },
  {
    id: 'quiz-2022',
    src: '/images/gallery/quiz-2022.jpg',
    type: 'image',
    title: 'Quiz Finals',
    description: 'Battle of the brains in the grand finale',
    category: 'technical',
    year: 2022,
  },
  {
    id: 'painting-2022',
    src: '/images/gallery/painting-2022.jpg',
    type: 'image',
    title: 'Live Painting',
    description: 'Artists creating masterpieces on the spot',
    category: 'workshop',
    year: 2022,
  },
]

export const getGalleryByCategory = (category: string): GalleryItem[] => {
  if (category === 'all') return galleryItems
  return galleryItems.filter(item => item.category === category)
}

export const getGalleryByYear = (year: number): GalleryItem[] => {
  return galleryItems.filter(item => item.year === year)
}

export const getFeaturedGallery = (): GalleryItem[] => {
  return galleryItems.filter(item => item.featured)
}

export const getGalleryYears = (): number[] => {
  const yearsSet = new Set(galleryItems.map(item => item.year))
  return Array.from(yearsSet).sort((a, b) => b - a)
}
