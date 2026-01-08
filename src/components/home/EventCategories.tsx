'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight, Music, Code, Palette, Mic, Camera, Gamepad2, Sparkles } from 'lucide-react'

// Blueprint Pattern SVG for technical events
const BlueprintPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5"/>
        <circle cx="0" cy="0" r="1" fill="rgba(59, 130, 246, 0.8)"/>
      </pattern>
      <pattern id="blueprint-major" width="160" height="160" patternUnits="userSpaceOnUse">
        <path d="M 160 0 L 0 0 0 160" fill="none" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#blueprint-grid)"/>
    <rect width="100%" height="100%" fill="url(#blueprint-major)"/>
    {/* Technical annotations */}
    <text x="10" y="20" fill="rgba(59, 130, 246, 0.4)" fontSize="8" fontFamily="monospace">REV.2026</text>
    <text x="10" y="95%" fill="rgba(59, 130, 246, 0.4)" fontSize="8" fontFamily="monospace">SCALE: 1:1</text>
  </svg>
)

// Silk Pattern SVG for cultural events
const SilkPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="silk-wave" width="100" height="20" patternUnits="userSpaceOnUse">
        <path 
          d="M0 10 Q25 0, 50 10 T100 10" 
          fill="none" 
          stroke="url(#silk-gradient)" 
          strokeWidth="1"
        />
      </pattern>
      <linearGradient id="silk-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(244, 114, 182, 0.6)"/>
        <stop offset="50%" stopColor="rgba(251, 191, 36, 0.8)"/>
        <stop offset="100%" stopColor="rgba(244, 114, 182, 0.6)"/>
      </linearGradient>
      <filter id="silk-blur">
        <feGaussianBlur stdDeviation="0.5"/>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#silk-wave)" filter="url(#silk-blur)"/>
  </svg>
)

// Petal Pattern for fine arts
const PetalPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="petal-grad">
        <stop offset="0%" stopColor="rgba(168, 85, 247, 0.4)"/>
        <stop offset="100%" stopColor="rgba(168, 85, 247, 0)"/>
      </radialGradient>
    </defs>
    {[...Array(6)].map((_, i) => (
      <ellipse
        key={i}
        cx={`${20 + (i % 3) * 30}%`}
        cy={`${25 + Math.floor(i / 3) * 50}%`}
        rx="30"
        ry="15"
        fill="url(#petal-grad)"
        transform={`rotate(${i * 30} ${20 + (i % 3) * 30} ${25 + Math.floor(i / 3) * 50})`}
      />
    ))}
  </svg>
)

// Neon Gaming Pattern
const NeonPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="neon-glow">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path 
      d="M0,50 L30,20 L60,50 L90,20 L100,30" 
      stroke="rgba(239, 68, 68, 0.6)" 
      strokeWidth="2" 
      fill="none"
      filter="url(#neon-glow)"
    />
    <path 
      d="M0,80 L40,60 L80,80 L100,60" 
      stroke="rgba(139, 92, 246, 0.6)" 
      strokeWidth="2" 
      fill="none"
      filter="url(#neon-glow)"
    />
  </svg>
)

const categories = [
  {
    id: 'technical',
    name: 'Technical',
    tagline: 'Code the Future',
    icon: Code,
    pattern: BlueprintPattern,
    gradient: 'from-blue-500/10 via-cyan-500/5 to-transparent',
    borderGlow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
    iconBg: 'bg-blue-500/20 group-hover:bg-blue-500/30',
    iconColor: 'text-blue-400',
    accentColor: 'text-blue-400',
    events: ['Hackathon', 'Coding Contest', 'Robotics', 'AI Challenge', 'Web Dev'],
    count: 15,
    size: 'large', // Bento grid size
  },
  {
    id: 'cultural',
    name: 'Cultural',
    tagline: 'Heritage in Motion',
    icon: Music,
    pattern: SilkPattern,
    gradient: 'from-rose-500/10 via-orange-500/5 to-transparent',
    borderGlow: 'group-hover:shadow-[0_0_30px_rgba(244,114,182,0.3)]',
    iconBg: 'bg-rose-500/20 group-hover:bg-rose-500/30',
    iconColor: 'text-rose-400',
    accentColor: 'text-rose-400',
    events: ['Classical Dance', 'Band Competition', 'Drama', 'Fashion Show'],
    count: 12,
    size: 'large',
  },
  {
    id: 'arts',
    name: 'Fine Arts',
    tagline: 'Colors of Expression',
    icon: Palette,
    pattern: PetalPattern,
    gradient: 'from-purple-500/10 via-pink-500/5 to-transparent',
    borderGlow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    iconBg: 'bg-purple-500/20 group-hover:bg-purple-500/30',
    iconColor: 'text-purple-400',
    accentColor: 'text-purple-400',
    events: ['Painting', 'Sculpture', 'Rangoli', 'Mehendi'],
    count: 8,
    size: 'medium',
  },
  {
    id: 'literary',
    name: 'Literary',
    tagline: 'Words that Inspire',
    icon: Mic,
    pattern: null,
    gradient: 'from-amber-500/10 via-yellow-500/5 to-transparent',
    borderGlow: 'group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]',
    iconBg: 'bg-amber-500/20 group-hover:bg-amber-500/30',
    iconColor: 'text-amber-400',
    accentColor: 'text-amber-400',
    events: ['Debate', 'Poetry', 'Quiz', 'JAM'],
    count: 10,
    size: 'medium',
  },
  {
    id: 'media',
    name: 'Media & Film',
    tagline: 'Frame Your Vision',
    icon: Camera,
    pattern: null,
    gradient: 'from-teal-500/10 via-emerald-500/5 to-transparent',
    borderGlow: 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]',
    iconBg: 'bg-teal-500/20 group-hover:bg-teal-500/30',
    iconColor: 'text-teal-400',
    accentColor: 'text-teal-400',
    events: ['Short Film', 'Photography', 'Reels', 'Documentary'],
    count: 6,
    size: 'small',
  },
  {
    id: 'gaming',
    name: 'E-Sports',
    tagline: 'Play to Win',
    icon: Gamepad2,
    pattern: NeonPattern,
    gradient: 'from-red-500/10 via-violet-500/5 to-transparent',
    borderGlow: 'group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]',
    iconBg: 'bg-red-500/20 group-hover:bg-red-500/30',
    iconColor: 'text-red-400',
    accentColor: 'text-red-400',
    events: ['Valorant', 'BGMI', 'FIFA', 'Chess'],
    count: 5,
    size: 'small',
  },
]

// Card Component with different sizes for Bento grid
function BentoCard({ category, index }: { category: typeof categories[0], index: number }) {
  const isLarge = category.size === 'large'
  const isMedium = category.size === 'medium'
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`
        ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
        ${isMedium ? 'md:col-span-1 md:row-span-2' : ''}
      `}
    >
      <Link
        href={`/events?category=${category.id}`}
        className={`
          group relative block h-full min-h-[280px] overflow-hidden rounded-2xl
          bg-forest-900/60 backdrop-blur-sm
          border border-gold-800/20 hover:border-gold-800/50
          transition-all duration-300 ease-out
          focus-ring
          hover:scale-[1.02] hover:-translate-y-1
          ${category.borderGlow}
        `}
        aria-label={`Explore ${category.name} events - ${category.count} events available`}
      >
        {/* Background Pattern */}
        {category.pattern && <category.pattern />}
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />
        
        {/* Hover Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className={`relative z-10 h-full flex flex-col ${isLarge ? 'p-8' : 'p-6'}`}>
          {/* Icon with glow */}
          <div className={`
            inline-flex items-center justify-center rounded-xl
            ${isLarge ? 'w-16 h-16' : 'w-12 h-12'}
            ${category.iconBg}
            transition-all duration-300
            group-hover:scale-110 group-hover:rotate-3
          `}>
            <category.icon className={`${isLarge ? 'w-8 h-8' : 'w-6 h-6'} ${category.iconColor}`} />
          </div>

          {/* Title & Tagline */}
          <div className="mt-auto">
            <span className={`text-xs font-mono ${category.accentColor} uppercase tracking-wider opacity-70`}>
              {category.tagline}
            </span>
            <h3 className={`
              font-display font-bold text-forest-100 
              group-hover:text-gold-950 transition-colors duration-300
              ${isLarge ? 'text-3xl mt-2' : 'text-xl mt-1'}
            `}>
              {category.name}
            </h3>
            
            {/* Event Count */}
            <div className="flex items-center gap-2 mt-3">
              <Sparkles className={`w-4 h-4 ${category.accentColor}`} />
              <span className="text-sm text-forest-400">
                {category.count} events
              </span>
            </div>

            {/* Event Tags - Only on large cards */}
            {isLarge && (
              <div className="flex flex-wrap gap-2 mt-4">
                {category.events.slice(0, 4).map((event) => (
                  <span
                    key={event}
                    className="px-3 py-1 text-xs rounded-full bg-forest-800/50 text-forest-200 border border-gold-800/20"
                  >
                    {event}
                  </span>
                ))}
                {category.events.length > 4 && (
                  <span className="px-3 py-1 text-xs rounded-full bg-gold-950/20 text-gold-700 border border-gold-800/30">
                    +{category.count - 4} more
                  </span>
                )}
              </div>
            )}

            {/* Explore Link */}
            <div className={`
              flex items-center gap-2 mt-4 
              ${category.accentColor} 
              font-medium text-sm
              opacity-0 group-hover:opacity-100
              translate-y-2 group-hover:translate-y-0
              transition-all duration-300
            `}>
              <span>Explore Events</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Corner Accent */}
          <div className={`
            absolute top-0 right-0 w-24 h-24
            bg-gradient-to-bl ${category.gradient}
            opacity-50 group-hover:opacity-80
            transition-opacity duration-300
          `} />
        </div>

        {/* Border Glow Effect */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold-800/40 transition-colors duration-500" />
      </Link>
    </motion.div>
  )
}

export default function EventCategories() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-b from-forest-950 via-forest-900/80 to-forest-950">
      {/* Dense energy: pulsing cyan glow + parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-800/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </motion.div>
      
      {/* Top accent line - cyan energy */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-10"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>50+ Events Await</span>
          </motion.span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-forest-100 mb-4">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 via-gold-700 to-gold-950">
              Arena
            </span>
          </h2>
          
          <p className="text-lg text-forest-300 max-w-2xl mx-auto">
            Six distinct categories, infinite possibilities. Find the stage where your talent shines brightest.
          </p>
        </motion.div>

        {/* Bento Grid - tight, energetic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 auto-rows-[140px]">
          {categories.map((category, index) => (
            <BentoCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link 
            href="/events" 
            className="btn-liquid-gold inline-flex items-center gap-2 group focus-ring"
          >
            <span>Explore All Events</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
