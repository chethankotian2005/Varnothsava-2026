// Event data for Varnothsava 2026 - OFFICIAL EVENTS ONLY
export interface Event {
  id: string
  name: string
  category: string
  categoryId: string
  description: string
  rules: string[]
  date: string
  time: string
  venue: string
  teamSize: string
  registrationFee: number
  coordinator: {
    name: string
    phone: string
  }
  image?: string
  featured?: boolean
}

// Flagship event IDs for visual hierarchy
export const flagshipEventIds = ['algorithm-roulette', 'hackhunt', 'robo-soccer', 'pitchathon']

export const events: Event[] = [
  // 
  // CULTURAL EVENTS - DAY 1 (March 11, 2026)
  // 
  
  {
    id: 'thaka-dhimi-tha',
    name: 'Thaka Dhimi Tha',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Solo Classical Dance competition showcasing traditional Indian dance forms.',
    rules: [
      'Solo performance only',
      'Classical dance forms: Bharatanatyam, Kathak, Odissi, Kuchipudi, Mohiniyattam, etc.',
      'Time limit: 6-8 minutes',
      'Traditional costume mandatory',
      'Pre-recorded music to be submitted in advance',
    ],
    date: 'March 11, 2026',
    time: '9:30 AM',
    venue: 'Library Seminar Hall',
    teamSize: 'Solo',
    registrationFee: 200,
    coordinator: {
      name: 'Cultural Coordinator',
      phone: '+91 98765 43210',
    },
  },
  {
    id: 'bhava-taranga',
    name: 'Bhava Taranga',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Solo Singing competition across various genres and languages.',
    rules: [
      'Solo performance only',
      'Time limit: 5-6 minutes',
      'Any language and genre allowed',
      'Karaoke track or live accompaniment',
      'No explicit content',
    ],
    date: 'March 11, 2026',
    time: '9:30 AM',
    venue: 'Admin Block Seminar Hall',
    teamSize: 'Solo',
    registrationFee: 150,
    coordinator: {
      name: 'Cultural Coordinator',
      phone: '+91 98765 43211',
    },
  },
  {
    id: 'grove-gala',
    name: 'Grove Gala',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Group Western Dance competition featuring contemporary, hip-hop, and freestyle performances.',
    rules: [
      'Team of 6-12 members',
      'Time limit: 6-8 minutes',
      'Pre-recorded music required',
      'Costumes must be appropriate',
      'Props allowed with prior approval',
    ],
    date: 'March 11, 2026',
    time: '9:30 AM',
    venue: 'Open Air Auditorium',
    teamSize: '6-12 Members',
    registrationFee: 500,
    coordinator: {
      name: 'Cultural Coordinator',
      phone: '+91 98765 43212',
    },
  },
  {
    id: 'who-am-i',
    name: 'Who Am I',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Face Painting competition showcasing artistic skills and imagination.',
    rules: [
      'Individual or team of 2',
      'Duration: 90 minutes',
      'Theme revealed on spot',
      'Face paints and brushes provided',
      'Model required (can be team member)',
    ],
    date: 'March 11, 2026',
    time: '9:30 AM',
    venue: 'Classrooms',
    teamSize: '1-2 Members',
    registrationFee: 100,
    coordinator: {
      name: 'Cultural Coordinator',
      phone: '+91 98765 43213',
    },
  },
  {
    id: 'hands-of-art',
    name: 'Hands of Art',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Mehandi competition with intricate traditional and contemporary designs.',
    rules: [
      'Individual participation',
      'Duration: 2 hours',
      'Mehndi cones provided',
      'Model required',
      'Traditional and contemporary designs allowed',
    ],
    date: 'March 11, 2026',
    time: '9:30 AM',
    venue: 'Classrooms',
    teamSize: 'Solo',
    registrationFee: 100,
    coordinator: {
      name: 'Cultural Coordinator',
      phone: '+91 98765 43214',
    },
  },
  {
    id: 'shutterverse',
    name: 'Shutterverse',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Videography competition capturing the essence of Varnothsava 2026.',
    rules: [
      'Individual or team of up to 3',
      'Capture fest moments throughout the day',
      'Duration: 1-3 minutes final video',
      'Submit by end of Day 2 (3:00 PM)',
      'Equipment: Bring your own camera/phone',
    ],
    date: 'March 11-12, 2026',
    time: '9:30 AM onwards',
    venue: 'All Venues',
    teamSize: '1-3 Members',
    registrationFee: 200,
    coordinator: {
      name: 'Media Coordinator',
      phone: '+91 98765 43215',
    },
  },
  {
    id: 'cinecapture',
    name: 'Cinecapture',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Photography competition capturing memorable moments of the fest.',
    rules: [
      'Individual participation',
      'DSLR/Mirrorless/Smartphone allowed',
      'Minimal editing permitted',
      'Submit best 5 photos by Day 2 (3:00 PM)',
      'RAW files to be kept for verification',
    ],
    date: 'March 11-12, 2026',
    time: '9:30 AM onwards',
    venue: 'All Venues',
    teamSize: 'Solo',
    registrationFee: 150,
    coordinator: {
      name: 'Media Coordinator',
      phone: '+91 98765 43216',
    },
  },
  {
    id: 'standup-comedy',
    name: 'Standup Comedy',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Stand-up comedy competition for aspiring comedians.',
    rules: [
      'Solo performance',
      'Time limit: 5-7 minutes',
      'Original content only',
      'Family-friendly humor preferred',
      'No offensive content',
    ],
    date: 'March 11, 2026',
    time: '2:00 PM',
    venue: 'Library Seminar Hall',
    teamSize: 'Solo',
    registrationFee: 100,
    coordinator: {
      name: 'Cultural Coordinator',
      phone: '+91 98765 43217',
    },
  },
  {
    id: 'janapada-nada',
    name: 'Janapada Nada',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Group Singing competition celebrating folk and traditional music.',
    rules: [
      'Team of 4-10 members',
      'Time limit: 8-10 minutes',
      'Folk songs and traditional music',
      'Live or recorded accompaniment allowed',
      'Traditional attire encouraged',
    ],
    date: 'March 11, 2026',
    time: '2:00 PM',
    venue: 'Admin Block Seminar Hall',
    teamSize: '4-10 Members',
    registrationFee: 400,
    coordinator: {
      name: 'Cultural Coordinator',
      phone: '+91 98765 43218',
    },
  },
  {
    id: 'anime-arena',
    name: 'Anime Arena',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Anime Quiz competition. Prelims in CAED LAB (morning), Finals in Open Air Auditorium.',
    rules: [
      'Team of 2-3 members',
      'Prelims: Written round (Morning - CAED LAB)',
      'Finals: Buzzer round (2:00 PM - Open Air Auditorium)',
      'Covers all anime genres and series',
      'No electronic devices allowed',
    ],
    date: 'March 11, 2026',
    time: '2:00 PM (Finals)',
    venue: 'Open Air Auditorium',
    teamSize: '2-3 Members',
    registrationFee: 150,
    coordinator: {
      name: 'Quiz Coordinator',
      phone: '+91 98765 43219',
    },
  },
  
  // 
  // CULTURAL EVENTS - DAY 2 (March 12, 2026)
  // 
  
  {
    id: 'musical-marathon',
    name: 'Musical Marathon',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Antakshari competition testing musical knowledge and quick thinking.',
    rules: [
      'Team of 4-6 members',
      'Prelims in Library Seminar Hall',
      'Finals in Classrooms',
      'Hindi/English/Kannada songs',
      'Standard antakshari rules apply',
    ],
    date: 'March 12, 2026',
    time: '9:30 AM',
    venue: 'Library Seminar Hall (Prelims)',
    teamSize: '4-6 Members',
    registrationFee: 200,
    coordinator: {
      name: 'Cultural Coordinator',
      phone: '+91 98765 43220',
    },
  },
  {
    id: 'natures-palette',
    name: "Nature's Palette",
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Flower Arrangement & Vegetable Carving competition.',
    rules: [
      'Team of 2 members',
      'Duration: 2 hours',
      'Materials provided',
      'Theme revealed on spot',
      'Judged on creativity and technique',
    ],
    date: 'March 12, 2026',
    time: '9:30 AM',
    venue: 'Admin Block Seminar Hall',
    teamSize: '2 Members',
    registrationFee: 150,
    coordinator: {
      name: 'Cultural Coordinator',
      phone: '+91 98765 43221',
    },
  },
  {
    id: 'kala-sangama',
    name: 'Kala Sangama',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Variety Act competition - magic, mimicry, beatboxing, and more!',
    rules: [
      'Solo or group (max 5 members)',
      'Time limit: 5-7 minutes',
      'Any talent/variety act',
      'Props allowed',
      'Original acts preferred',
    ],
    date: 'March 12, 2026',
    time: '9:30 AM',
    venue: 'Open Air Auditorium',
    teamSize: '1-5 Members',
    registrationFee: 150,
    coordinator: {
      name: 'Cultural Coordinator',
      phone: '+91 98765 43222',
    },
  },
  {
    id: 'bannada-prapancha',
    name: 'Bannada Prapancha',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Rangoli competition showcasing colorful floor art.',
    rules: [
      'Team of 2 members',
      'Duration: 2.5 hours',
      'Area: 5x5 feet',
      'Colors and materials provided',
      'Theme: Karnataka Culture',
    ],
    date: 'March 12, 2026',
    time: '9:30 AM',
    venue: 'Lobby',
    teamSize: '2 Members',
    registrationFee: 150,
    coordinator: {
      name: 'Cultural Coordinator',
      phone: '+91 98765 43223',
    },
  },
  {
    id: 'jam',
    name: 'JAM',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Just A Minute (Pick and Speech) - impromptu speaking competition.',
    rules: [
      'Individual participation',
      'Topic given on spot',
      'Duration: 1 minute per participant',
      'Multiple elimination rounds',
      'Points for fluency and content',
    ],
    date: 'March 12, 2026',
    time: '9:30 AM',
    venue: 'Classrooms',
    teamSize: 'Solo',
    registrationFee: 100,
    coordinator: {
      name: 'Literary Coordinator',
      phone: '+91 98765 43224',
    },
  },
  {
    id: 'art-of-tune',
    name: 'Art of Tune',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Drawing competition to showcase artistic creativity.',
    rules: [
      'Individual participation',
      'Duration: 2 hours',
      'Drawing sheets and materials provided',
      'Theme revealed on spot',
      'Any drawing medium allowed',
    ],
    date: 'March 12, 2026',
    time: '9:30 AM',
    venue: 'Classrooms',
    teamSize: 'Solo',
    registrationFee: 100,
    coordinator: {
      name: 'Arts Coordinator',
      phone: '+91 98765 43225',
    },
  },
  {
    id: 'sketch-chronicles',
    name: 'Sketch Chronicles',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'Pencil Sketch competition demonstrating shading and detailing skills.',
    rules: [
      'Individual participation',
      'Duration: 2 hours',
      'Pencils and paper provided',
      'Theme given on spot',
      'Only pencil sketching allowed',
    ],
    date: 'March 12, 2026',
    time: '12:00 PM',
    venue: 'Classrooms',
    teamSize: 'Solo',
    registrationFee: 100,
    coordinator: {
      name: 'Arts Coordinator',
      phone: '+91 98765 43226',
    },
  },
  {
    id: 'silent-symphony',
    name: 'Silent Symphony',
    category: 'Cultural',
    categoryId: 'cultural',
    description: 'MIME performance - tell a story without words.',
    rules: [
      'Solo or group (max 6 members)',
      'Time limit: 5-7 minutes',
      'Theme-based performance',
      'No speaking allowed',
      'Background music permitted',
    ],
    date: 'March 12, 2026',
    time: '2:00 PM',
    venue: 'Open Air Auditorium',
    teamSize: '1-6 Members',
    registrationFee: 150,
    coordinator: {
      name: 'Cultural Coordinator',
      phone: '+91 98765 43227',
    },
  },
  
  // 
  // TECHNICAL EVENTS
  // 
  
  {
    id: 'algorithm-roulette',
    name: 'Algorithm Roulette',
    category: 'Technical',
    categoryId: 'technical',
    description: 'Competitive programming challenge with algorithmic problem solving.',
    rules: [
      'Individual participation',
      'Duration: 2-3 hours',
      'Languages: C, C++, Java, Python',
      'Online judge platform',
      'Multiple difficulty levels',
    ],
    date: 'March 11, 2026',
    time: '10:00 AM',
    venue: 'Computer Lab',
    teamSize: 'Solo',
    registrationFee: 150,
    coordinator: {
      name: 'Technical Coordinator',
      phone: '+91 98765 43230',
    },
    featured: true,
  },
  {
    id: 'hackhunt',
    name: 'HackHunt',
    category: 'Technical',
    categoryId: 'technical',
    description: '24-hour hackathon for innovative solutions to real-world problems.',
    rules: [
      'Team of 2-4 members',
      'Bring your own laptops',
      'Internet access provided',
      'Theme revealed at start',
      'Working prototype required',
    ],
    date: 'March 11-12, 2026',
    time: '10:00 AM (Day 1)',
    venue: 'Computer Lab Complex',
    teamSize: '2-4 Members',
    registrationFee: 400,
    coordinator: {
      name: 'Technical Coordinator',
      phone: '+91 98765 43231',
    },
    featured: true,
  },
  {
    id: 'prompt-to-product',
    name: 'Prompt To Product',
    category: 'Technical',
    categoryId: 'technical',
    description: 'AI-powered product development using prompt engineering.',
    rules: [
      'Team of 2-3 members',
      'Use AI tools to build products',
      'Duration: 4 hours',
      'Presentation required',
      'Innovation and creativity judged',
    ],
    date: 'March 11, 2026',
    time: '2:00 PM',
    venue: 'Innovation Lab',
    teamSize: '2-3 Members',
    registrationFee: 300,
    coordinator: {
      name: 'Technical Coordinator',
      phone: '+91 98765 43232',
    },
  },
  {
    id: 'clash-of-radiants',
    name: 'Clash of Radiants',
    category: 'Technical',
    categoryId: 'technical',
    description: 'Valorant esports tournament - 5v5 tactical shooter competition.',
    rules: [
      'Team of 5+2 (substitutes)',
      'Bring your own peripherals',
      'PCs provided',
      'Standard competitive ruleset',
      'Double elimination format',
    ],
    date: 'March 11-12, 2026',
    time: '11:00 AM',
    venue: 'Gaming Arena',
    teamSize: '5+2 Members',
    registrationFee: 500,
    coordinator: {
      name: 'Gaming Coordinator',
      phone: '+91 98765 43233',
    },
  },
  {
    id: 'fastest-line-follower',
    name: 'Fastest Line Follower',
    category: 'Technical',
    categoryId: 'technical',
    description: 'Line follower robot race - speed and accuracy competition.',
    rules: [
      'Team of 2-4 members',
      'Autonomous robot only',
      'Track revealed on event day',
      'Weight limit: 2kg',
      'Fastest completion wins',
    ],
    date: 'March 11, 2026',
    time: '10:30 AM',
    venue: 'Robotics Arena',
    teamSize: '2-4 Members',
    registrationFee: 300,
    coordinator: {
      name: 'Robotics Coordinator',
      phone: '+91 98765 43234',
    },
  },
  {
    id: 'robo-soccer',
    name: 'Robo Soccer',
    category: 'Technical',
    categoryId: 'technical',
    description: 'Robot football tournament - build and compete with soccer bots.',
    rules: [
      'Team of 3-5 members',
      'Wireless/autonomous control',
      'Robot size: 25cm x 25cm max',
      'Tournament format',
      'Safety inspection required',
    ],
    date: 'March 12, 2026',
    time: '10:00 AM',
    venue: 'Robotics Arena',
    teamSize: '3-5 Members',
    registrationFee: 400,
    coordinator: {
      name: 'Robotics Coordinator',
      phone: '+91 98765 43235',
    },
    featured: true,
  },
  {
    id: 'wright-brothers',
    name: 'Wright Brothers',
    category: 'Technical',
    categoryId: 'technical',
    description: 'RC Aircraft design and flying competition.',
    rules: [
      'Team of 2-4 members',
      'Manual remote control only',
      'Wingspan limit: 1.5m',
      'Flight time and maneuvers judged',
      'Safety regulations mandatory',
    ],
    date: 'March 12, 2026',
    time: '9:00 AM',
    venue: 'Open Ground',
    teamSize: '2-4 Members',
    registrationFee: 350,
    coordinator: {
      name: 'Aero Coordinator',
      phone: '+91 98765 43236',
    },
  },
  {
    id: 'electro-detectives',
    name: 'Electro Detectives',
    category: 'Technical',
    categoryId: 'technical',
    description: 'Circuit debugging and electronics troubleshooting challenge.',
    rules: [
      'Team of 2 members',
      'Duration: 2 hours',
      'Identify and fix circuit faults',
      'Multiple difficulty levels',
      'Tools provided',
    ],
    date: 'March 11, 2026',
    time: '2:00 PM',
    venue: 'Electronics Lab',
    teamSize: '2 Members',
    registrationFee: 200,
    coordinator: {
      name: 'Electronics Coordinator',
      phone: '+91 98765 43237',
    },
  },
  {
    id: 'route-rush',
    name: 'Route Rush',
    category: 'Technical',
    categoryId: 'technical',
    description: 'Maze-solving robot competition with obstacle navigation.',
    rules: [
      'Team of 2-3 members',
      'Autonomous navigation',
      'Time-based competition',
      'Multiple attempts allowed',
      'Fastest successful run wins',
    ],
    date: 'March 12, 2026',
    time: '11:00 AM',
    venue: 'Robotics Arena',
    teamSize: '2-3 Members',
    registrationFee: 250,
    coordinator: {
      name: 'Robotics Coordinator',
      phone: '+91 98765 43238',
    },
  },
  {
    id: 'pitchathon',
    name: 'Pitchathon',
    category: 'Technical',
    categoryId: 'technical',
    description: 'Startup pitch competition for innovative business ideas.',
    rules: [
      'Team of 3-5 members',
      'Duration: 5-7 minutes pitch',
      'Q&A session with judges',
      'Business plan submission',
      'Prototype/MVP preferred',
    ],
    date: 'March 12, 2026',
    time: '2:00 PM',
    venue: 'Auditorium',
    teamSize: '3-5 Members',
    registrationFee: 300,
    coordinator: {
      name: 'Innovation Coordinator',
      phone: '+91 98765 43239',
    },
    featured: true,
  },
  
  // 
  // MANAGEMENT EVENTS (MANTRA)
  // 
  
  {
    id: 'money-matters',
    name: 'Money Matters',
    category: 'Management',
    categoryId: 'management',
    description: 'Financial analysis and investment strategy competition.',
    rules: [
      'Team of 2-3 members',
      'Case study analysis',
      'Duration: 3 hours',
      'Presentation to judges',
      'Real-world scenarios',
    ],
    date: 'March 11, 2026',
    time: '10:00 AM',
    venue: 'MBA Block',
    teamSize: '2-3 Members',
    registrationFee: 250,
    coordinator: {
      name: 'MANTRA Coordinator',
      phone: '+91 98765 43240',
    },
  },
  {
    id: 'visionary-ventures',
    name: 'Visionary Ventures',
    category: 'Management',
    categoryId: 'management',
    description: 'Entrepreneurship and business plan competition.',
    rules: [
      'Team of 3-4 members',
      'Innovative business idea required',
      'Market research and feasibility',
      'Pitch presentation',
      'Financial projections needed',
    ],
    date: 'March 11, 2026',
    time: '2:00 PM',
    venue: 'MBA Block',
    teamSize: '3-4 Members',
    registrationFee: 300,
    coordinator: {
      name: 'MANTRA Coordinator',
      phone: '+91 98765 43241',
    },
  },
  {
    id: 'ultimate-biz-team',
    name: 'The Ultimate Biz Team',
    category: 'Management',
    categoryId: 'management',
    description: 'Team-based business simulation and strategy challenge.',
    rules: [
      'Team of 4-5 members',
      'Multi-round competition',
      'Business simulation game',
      'Decision-making under pressure',
      'Strategy and teamwork judged',
    ],
    date: 'March 12, 2026',
    time: '10:00 AM',
    venue: 'MBA Block',
    teamSize: '4-5 Members',
    registrationFee: 350,
    coordinator: {
      name: 'MANTRA Coordinator',
      phone: '+91 98765 43242',
    },
  },
]

export const categories = [
  { id: 'all', name: 'All Events', count: events.length },
  { id: 'cultural', name: 'Cultural', count: events.filter(e => e.categoryId === 'cultural').length },
  { id: 'technical', name: 'Technical', count: events.filter(e => e.categoryId === 'technical').length },
  { id: 'management', name: 'Management', count: events.filter(e => e.categoryId === 'management').length },
]

export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id)
}

export const getEventsByCategory = (categoryId: string): Event[] => {
  if (categoryId === 'all') return events
  return events.filter(event => event.categoryId === categoryId)
}

export const getFeaturedEvents = (): Event[] => {
  return events.filter(event => flagshipEventIds.includes(event.id))
}

export const searchEvents = (query: string): Event[] => {
  const lowercaseQuery = query.toLowerCase()
  return events.filter(event => 
    event.name.toLowerCase().includes(lowercaseQuery) ||
    event.description.toLowerCase().includes(lowercaseQuery) ||
    event.category.toLowerCase().includes(lowercaseQuery)
  )
}
