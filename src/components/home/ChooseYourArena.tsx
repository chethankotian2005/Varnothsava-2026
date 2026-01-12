'use client'

import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Music2, Code2, Sparkles, Mic2 } from 'lucide-react'

// Golden Mandala SVG - The ceremonial sigil backdrop
const GoldenMandala = ({ isActive = false }: { isActive?: boolean }) => (
  <svg 
    className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] pointer-events-none transition-all duration-700"
    viewBox="0 0 400 400" 
    xmlns="http://www.w3.org/2000/svg"
    style={{
      opacity: isActive ? 0.4 : 0.15,
      filter: isActive ? 'blur(0px)' : 'blur(2px)',
      transform: isActive ? 'scale(1.05)' : 'scale(1)',
    }}
  >
    <defs>
      <radialGradient id="mandala-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(212, 175, 55, 0.6)" />
        <stop offset="50%" stopColor="rgba(212, 175, 55, 0.3)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <linearGradient id="gold-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B6914" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#FFE5A0" />
      </linearGradient>
    </defs>
    
    {/* Outer glow */}
    <circle cx="200" cy="200" r="180" fill="url(#mandala-glow)" />
    
    {/* Concentric ritual rings */}
    {[160, 140, 120, 100, 80].map((r, i) => (
      <circle 
        key={i}
        cx="200" 
        cy="200" 
        r={r} 
        fill="none" 
        stroke="url(#gold-stroke)" 
        strokeWidth={0.5 + i * 0.2}
        opacity={0.3 + i * 0.1}
        strokeDasharray={i % 2 === 0 ? "8 4" : "none"}
      />
    ))}
    
    {/* Sacred geometry - 8 pointed star */}
    {[...Array(8)].map((_, i) => (
      <line
        key={i}
        x1="200"
        y1="50"
        x2="200"
        y2="350"
        stroke="url(#gold-stroke)"
        strokeWidth="0.5"
        opacity="0.3"
        transform={`rotate(${i * 22.5} 200 200)`}
      />
    ))}
    
    {/* Inner petals */}
    {[...Array(12)].map((_, i) => (
      <ellipse
        key={i}
        cx="200"
        cy="120"
        rx="15"
        ry="40"
        fill="none"
        stroke="url(#gold-stroke)"
        strokeWidth="0.8"
        opacity="0.4"
        transform={`rotate(${i * 30} 200 200)`}
      />
    ))}
    
    {/* Center sigil */}
    <circle cx="200" cy="200" r="30" fill="none" stroke="url(#gold-stroke)" strokeWidth="1.5" opacity="0.5" />
    <circle cx="200" cy="200" r="20" fill="none" stroke="url(#gold-stroke)" strokeWidth="1" opacity="0.4" />
    <circle cx="200" cy="200" r="8" fill="rgba(212, 175, 55, 0.3)" />
  </svg>
)

// Arena card data
const arenas = [
  {
    id: 'cultural',
    title: 'Cultural Arena',
    subtitle: 'Where tradition dances with passion',
    icon: Music2,
    gradient: 'from-amber-900/80 via-orange-900/60 to-rose-900/80',
    glowColor: 'rgba(251, 191, 36, 0.4)',
    iconBg: 'from-amber-500 to-orange-600',
    image: '/images/cultural-arena.jpg',
    fallbackGradient: 'from-amber-900 via-orange-800 to-rose-900',
    href: '/events?category=cultural',
    events: ['Classical Dance', 'Music', 'Drama', 'Fashion'],
  },
  {
    id: 'technical',
    title: 'Technical Arena',
    subtitle: 'Where innovation meets excellence',
    icon: Code2,
    gradient: 'from-cyan-900/80 via-blue-900/60 to-indigo-900/80',
    glowColor: 'rgba(0, 212, 212, 0.4)',
    iconBg: 'from-cyan-400 to-blue-600',
    image: '/images/technical-arena.jpg',
    fallbackGradient: 'from-cyan-900 via-blue-800 to-indigo-900',
    href: '/events?category=technical',
    events: ['Hackathon', 'Coding', 'Robotics', 'Quiz'],
  },
  {
    id: 'proshows',
    title: 'Pro Shows Arena',
    subtitle: 'Where legends take the stage',
    icon: Mic2,
    gradient: 'from-purple-900/80 via-fuchsia-900/60 to-pink-900/80',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    iconBg: 'from-purple-500 to-fuchsia-600',
    image: '/images/proshows-arena.jpg',
    fallbackGradient: 'from-purple-900 via-fuchsia-800 to-pink-900',
    href: '/events?category=proshows',
    events: ['DJ Night', 'Celebrity', 'Concert', 'Comedy'],
  },
]

// Arena Card Component - Portrait style with ceremonial feel
function ArenaCard({ 
  arena, 
  index, 
  isHovered, 
  onHover 
}: { 
  arena: typeof arenas[0]
  index: number
  isHovered: boolean
  onHover: (id: string | null) => void
}) {
  const prefersReducedMotion = useReducedMotion()
  const Icon = arena.icon
  
  return (
    <motion.div
      className="relative group"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => onHover(arena.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(arena.id)}
      onBlur={() => onHover(null)}
    >
      {/* Mandala backdrop - visible on hover */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <GoldenMandala isActive={isHovered} />
      </div>
      
      <Link 
        href={arena.href}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-4 focus-visible:ring-offset-forest-950 rounded-2xl"
        aria-label={`Enter ${arena.title}`}
      >
        <motion.div
          className="relative w-full aspect-[3/4] sm:aspect-[2/3] lg:aspect-[3/5] rounded-2xl overflow-hidden cursor-pointer"
          whileHover={prefersReducedMotion ? {} : { 
            y: -12, 
            scale: 1.02,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          }}
          whileTap={{ scale: 0.98 }}
          style={{
            boxShadow: isHovered 
              ? `0 25px 60px -15px ${arena.glowColor}, 0 0 40px ${arena.glowColor}, inset 0 1px 0 rgba(255,255,255,0.1)`
              : '0 15px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Full-bleed background image */}
          <div className="absolute inset-0">
            <Image
              src={arena.image}
              alt={`${arena.title} - Varnothsava 2026`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center"
              quality={85}
              loading="lazy"
              priority={false}
            />
          </div>
          
          {/* Fallback gradient (if image fails to load) */}
          <div className={`absolute inset-0 bg-gradient-to-br ${arena.fallbackGradient} -z-10`} />
          
          {/* Dark cinematic gradient overlay for text readability */}
          <div 
            className="absolute inset-0 z-10"
            style={{
              background: `
                linear-gradient(180deg, 
                  rgba(0,0,0,0.3) 0%, 
                  rgba(0,0,0,0.5) 30%,
                  rgba(0,0,0,0.75) 60%,
                  rgba(0,0,0,0.9) 100%
                )
              `,
            }}
          />
          
          {/* Subtle atmospheric glow - blends with cinematic theme */}
          <div 
            className="absolute inset-0 z-10 opacity-20 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at 50% 30%, ${arena.glowColor.replace('0.4', '0.15')} 0%, transparent 60%)
              `,
            }}
          />
          
          {/* Gold border - ceremonial frame (above all overlays) */}
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 z-20"
            style={{
              border: isHovered 
                ? '2px solid rgba(212, 175, 55, 0.8)' 
                : '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: isHovered 
                ? 'inset 0 0 30px rgba(212, 175, 55, 0.15)' 
                : 'inset 0 0 20px rgba(0,0,0,0.3)',
            }}
          />
          
          {/* Corner accents - engraved style (above overlays) */}
          <div className="absolute top-3 left-3 w-8 h-8 z-20">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-700 to-transparent" />
            <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-gold-700 to-transparent" />
          </div>
          <div className="absolute top-3 right-3 w-8 h-8 z-20">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-gold-700 to-transparent" />
            <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-gold-700 to-transparent" />
          </div>
          <div className="absolute bottom-3 left-3 w-8 h-8 z-20">
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-700 to-transparent" />
            <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-gold-700 to-transparent" />
          </div>
          <div className="absolute bottom-3 right-3 w-8 h-8 z-20">
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-gold-700 to-transparent" />
            <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-gold-700 to-transparent" />
          </div>
          
          {/* Glowing icon - top corner with circular glow */}
          <motion.div 
            className="absolute top-6 right-6 z-20"
            animate={isHovered && !prefersReducedMotion ? { 
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0],
            } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div 
              className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${arena.iconBg} flex items-center justify-center`}
              style={{
                boxShadow: isHovered 
                  ? `0 0 40px ${arena.glowColor}, 0 0 80px ${arena.glowColor}`
                  : `0 0 20px ${arena.glowColor}`,
              }}
            >
              {/* Outer ring */}
              <div 
                className="absolute inset-0 rounded-full border-2 border-white/40"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.4)',
                }}
              />
              <Icon 
                className="w-9 h-9 text-white" 
                style={{ filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))' }}
              />
            </div>
          </motion.div>
          
          {/* Content - Bottom section with glass effect */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-20">
            {/* Subtitle - above title */}
            <motion.p
              className="text-white/60 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase mb-2"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              {arena.subtitle}
            </motion.p>
            
            {/* Title - Engraved ceremonial text */}
            <h3 
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide"
              style={{
                background: 'linear-gradient(180deg, #FFE5A0 0%, #D4AF37 40%, #B8860B 70%, #8B6914 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none',
                filter: `
                  drop-shadow(0 -1px 0 rgba(255,229,160,0.3))
                  drop-shadow(0 2px 4px rgba(0,0,0,0.8))
                  drop-shadow(0 0 20px ${arena.glowColor})
                `,
              }}
            >
              {arena.title}
            </h3>
            
            {/* Event tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {arena.events.slice(0, 3).map((event, i) => (
                <span 
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/10 backdrop-blur-sm"
                >
                  {event}
                </span>
              ))}
              <span className="text-xs px-3 py-1 rounded-full bg-gold-900/30 text-gold-400 border border-gold-800/30">
                +more
              </span>
            </div>
            
            {/* Enter CTA - appears on hover */}
            <motion.div
              className="mt-6 flex items-center gap-2 text-gold-400 font-semibold"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm tracking-wider uppercase">Enter Arena</span>
              <motion.span
                animate={isHovered ? { x: [0, 5, 0] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function ChooseYourArena() {
  const [hoveredArena, setHoveredArena] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <section 
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="arena-heading"
    >
      {/* ═══════════════════════════════════════════════════════════════
          SECTION OVERLAY - Uses global ParallaxBackground
          Matches other sections (FestIdentity, etc.) for consistency
          ═══════════════════════════════════════════════════════════════ */}
      
      {/* Heavy cinematic overlay - shows stone texture through */}
      <div className="absolute inset-0 bg-forest-950/80 backdrop-blur-[1px] pointer-events-none" />
      
      {/* Warm atmosphere - ritual chamber glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, 
              rgba(212, 175, 55, 0.04) 0%, 
              transparent 60%
            )
          `,
        }}
      />
      
      {/* Stone inner shadow effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 40px 60px -20px rgba(5, 13, 10, 0.5), inset 0 -40px 60px -20px rgba(5, 13, 10, 0.5)'
      }} />
      
      {/* Large background mandala - centered, floats between bg and cards */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg 
          className="w-[150%] max-w-[1400px] h-auto opacity-[0.06] blur-[1px]"
          viewBox="0 0 400 400" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="bg-mandala-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(212, 175, 55, 0.5)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="190" fill="url(#bg-mandala-glow)" />
          {[180, 160, 140, 120, 100, 80, 60].map((r, i) => (
            <circle 
              key={i}
              cx="200" 
              cy="200" 
              r={r} 
              fill="none" 
              stroke="#D4AF37"
              strokeWidth="0.5"
              opacity={0.3}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="200"
              y1="20"
              x2="200"
              y2="380"
              stroke="#D4AF37"
              strokeWidth="0.15"
              opacity="0.2"
              transform={`rotate(${i * 30} 200 200)`}
            />
          ))}
        </svg>
      </div>
      
      {/* Carved stone border accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/25 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/15 to-transparent" />

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Ceremonial invitation */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Pre-title ornament */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-700" />
            <Sparkles className="w-5 h-5 text-gold-600" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-700" />
          </div>
          
          <motion.span
            className="inline-block text-gold-600 text-sm font-mono tracking-[0.3em] uppercase mb-4"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The Path Awaits
          </motion.span>
          
          <h2 
            id="arena-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-6 my-10"
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F5EBD7 30%, #D4AF37 70%, #8B6914 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: 'none',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5)) drop-shadow(0 0 30px rgba(212,175,55,0.2))',
            }}
          >
            Choose Your Arena
          </h2>
          
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Three paths lie before you. Each arena holds its own glory, its own challenge.
            <span className="block mt-2 text-gold-600/80 font-medium">Where will your legend begin?</span>
          </p>
        </motion.div>

        {/* Arena Cards - Three columns on desktop, stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {arenas.map((arena, index) => (
            <ArenaCard
              key={arena.id}
              arena={arena}
              index={index}
              isHovered={hoveredArena === arena.id}
              onHover={setHoveredArena}
            />
          ))}
        </div>
        
        {/* Bottom ornament */}
        <motion.div 
          className="flex items-center justify-center gap-4 mt-16"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-800/50" />
          <div className="w-2 h-2 rounded-full bg-gold-700/50" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-800/50" />
        </motion.div>
      </div>
    </section>
  )
}
