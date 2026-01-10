// Colleges Database for Leaderboard
export interface College {
  id: string
  name: string
  shortName: string
  location: string
  logo?: string
  points: {
    overall: number
    technical: number
    cultural: number
    arts: number
    literary: number
    media: number
    gaming: number
  }
  eventsParticipated: number
  rank?: number
}

export const colleges: College[] = [
  {
    id: 'smvitm',
    name: 'Shri Madhwa Vadiraja Institute of Technology & Management',
    shortName: 'SMVITM',
    location: 'Udupi, Karnataka',
    points: { overall: 2850, technical: 650, cultural: 720, arts: 380, literary: 420, media: 340, gaming: 340 },
    eventsParticipated: 42,
  },
  {
    id: 'nitk',
    name: 'National Institute of Technology Karnataka',
    shortName: 'NITK Surathkal',
    location: 'Surathkal, Karnataka',
    points: { overall: 2720, technical: 780, cultural: 580, arts: 290, literary: 480, media: 310, gaming: 280 },
    eventsParticipated: 38,
  },
  {
    id: 'mit-manipal',
    name: 'Manipal Institute of Technology',
    shortName: 'MIT Manipal',
    location: 'Manipal, Karnataka',
    points: { overall: 2680, technical: 720, cultural: 650, arts: 320, literary: 390, media: 350, gaming: 250 },
    eventsParticipated: 40,
  },
  {
    id: 'sjec',
    name: "St Joseph Engineering College",
    shortName: 'SJEC',
    location: 'Mangalore, Karnataka',
    points: { overall: 2450, technical: 580, cultural: 620, arts: 340, literary: 380, media: 280, gaming: 250 },
    eventsParticipated: 35,
  },
  {
    id: 'nmamit',
    name: 'NMAM Institute of Technology',
    shortName: 'NMAMIT',
    location: 'Nitte, Karnataka',
    points: { overall: 2380, technical: 620, cultural: 540, arts: 310, literary: 350, media: 290, gaming: 270 },
    eventsParticipated: 36,
  },
  {
    id: 'sahyadri',
    name: 'Sahyadri College of Engineering & Management',
    shortName: 'Sahyadri',
    location: 'Mangalore, Karnataka',
    points: { overall: 2290, technical: 550, cultural: 580, arts: 280, literary: 340, media: 270, gaming: 270 },
    eventsParticipated: 34,
  },
  {
    id: 'ait',
    name: 'Acharya Institute of Technology',
    shortName: 'AIT Bangalore',
    location: 'Bangalore, Karnataka',
    points: { overall: 2180, technical: 520, cultural: 490, arts: 320, literary: 360, media: 250, gaming: 240 },
    eventsParticipated: 32,
  },
  {
    id: 'rvce',
    name: 'RV College of Engineering',
    shortName: 'RVCE',
    location: 'Bangalore, Karnataka',
    points: { overall: 2150, technical: 680, cultural: 420, arts: 260, literary: 380, media: 220, gaming: 190 },
    eventsParticipated: 30,
  },
  {
    id: 'pesit',
    name: 'PES Institute of Technology',
    shortName: 'PESIT',
    location: 'Bangalore, Karnataka',
    points: { overall: 2080, technical: 640, cultural: 380, arts: 240, literary: 350, media: 260, gaming: 210 },
    eventsParticipated: 28,
  },
  {
    id: 'bmsce',
    name: 'BMS College of Engineering',
    shortName: 'BMSCE',
    location: 'Bangalore, Karnataka',
    points: { overall: 1980, technical: 580, cultural: 420, arts: 220, literary: 320, media: 230, gaming: 210 },
    eventsParticipated: 29,
  },
  {
    id: 'sdit',
    name: 'SDM Institute of Technology',
    shortName: 'SDIT',
    location: 'Ujire, Karnataka',
    points: { overall: 1850, technical: 420, cultural: 480, arts: 280, literary: 290, media: 210, gaming: 170 },
    eventsParticipated: 27,
  },
  {
    id: 'canara',
    name: 'Canara Engineering College',
    shortName: 'CEC',
    location: 'Mangalore, Karnataka',
    points: { overall: 1780, technical: 380, cultural: 520, arts: 260, literary: 270, media: 190, gaming: 160 },
    eventsParticipated: 26,
  },
  {
    id: 'nmit',
    name: 'Nitte Meenakshi Institute of Technology',
    shortName: 'NMIT',
    location: 'Bangalore, Karnataka',
    points: { overall: 1720, technical: 440, cultural: 390, arts: 240, literary: 280, media: 200, gaming: 170 },
    eventsParticipated: 25,
  },
  {
    id: 'vit',
    name: 'Vellore Institute of Technology',
    shortName: 'VIT Vellore',
    location: 'Vellore, Tamil Nadu',
    points: { overall: 1680, technical: 520, cultural: 340, arts: 200, literary: 260, media: 190, gaming: 170 },
    eventsParticipated: 24,
  },
  {
    id: 'msrit',
    name: 'MS Ramaiah Institute of Technology',
    shortName: 'MSRIT',
    location: 'Bangalore, Karnataka',
    points: { overall: 1620, technical: 480, cultural: 360, arts: 180, literary: 250, media: 180, gaming: 170 },
    eventsParticipated: 23,
  },
  {
    id: 'dsce',
    name: 'Dayananda Sagar College of Engineering',
    shortName: 'DSCE',
    location: 'Bangalore, Karnataka',
    points: { overall: 1540, technical: 420, cultural: 380, arts: 190, literary: 220, media: 170, gaming: 160 },
    eventsParticipated: 22,
  },
  {
    id: 'jssate',
    name: 'JSS Academy of Technical Education',
    shortName: 'JSSATE',
    location: 'Noida, UP',
    points: { overall: 1480, technical: 400, cultural: 340, arts: 200, literary: 240, media: 160, gaming: 140 },
    eventsParticipated: 21,
  },
  {
    id: 'rnsit',
    name: 'RNS Institute of Technology',
    shortName: 'RNSIT',
    location: 'Bangalore, Karnataka',
    points: { overall: 1420, technical: 380, cultural: 320, arts: 180, literary: 220, media: 170, gaming: 150 },
    eventsParticipated: 20,
  },
  {
    id: 'git',
    name: 'Global Institute of Technology',
    shortName: 'GIT',
    location: 'Bangalore, Karnataka',
    points: { overall: 1350, technical: 340, cultural: 300, arts: 190, literary: 210, media: 160, gaming: 150 },
    eventsParticipated: 19,
  },
  {
    id: 'sce',
    name: 'Srinivas College of Engineering',
    shortName: 'SCE',
    location: 'Mangalore, Karnataka',
    points: { overall: 1280, technical: 300, cultural: 340, arts: 180, literary: 190, media: 140, gaming: 130 },
    eventsParticipated: 18,
  },
]

// Sort colleges by overall points and assign ranks
export const rankedColleges = colleges
  .sort((a, b) => b.points.overall - a.points.overall)
  .map((college, index) => ({ ...college, rank: index + 1 }))

// Get top N colleges
export const getTopColleges = (n: number = 10) => rankedColleges.slice(0, n)

// Get college by category
export const getTopByCategory = (category: keyof College['points'], n: number = 10) => {
  return [...colleges]
    .sort((a, b) => b.points[category] - a.points[category])
    .slice(0, n)
    .map((college, index) => ({ ...college, rank: index + 1 }))
}
