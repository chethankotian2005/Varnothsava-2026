'use client'

import { motion, useScroll, useTransform, useMotionValue, useReducedMotion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ChevronDown, Sparkles, ArrowRight, Calendar } from 'lucide-react'
import DigitalEtching from '@/components/effects/DigitalEtching'
import BreathingLogo from '@/components/effects/BreathingLogo'
import AddToCalendar from '@/components/ui/AddToCalendar'

// Dynamically import background to avoid SSR issues
const TechnoBackground = dynamic(() => import('@/components/effects/TechnoBackground'), {
  ssr: false,
})

// Flip countdown component with glassmorphism and enhanced animations
const FlipCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [prevTime, setPrevTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isUrgent, setIsUrgent] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isEventLive, setIsEventLive] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // March 15, 2026 at midnight IST (Indian Standard Time UTC+5:30)
    const targetDate = new Date('2026-03-15T00:00:00+05:30')

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        
        setTimeLeft(prev => {
          setPrevTime(prev)
          return { days, hours, minutes, seconds }
        })
        setIsUrgent(days < 7)
        setIsEventLive(false)
      } else {
        // Event has started
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsEventLive(true)
      }
    }

    // Initial calculation
    calculateTimeLeft()
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [mounted])

  const FlipUnit = ({ value, prevValue, label, isUrgentMode }: { value: number; prevValue: number; label: string; isUrgentMode?: boolean }) => {
    const hasChanged = value !== prevValue
    
    return (
      <div className="flex flex-col items-center gap-3">
        <motion.div 
          className="relative"
          animate={isUrgentMode ? {
            x: [0, -2, 2, -2, 2, 0],
          } : {}}
          transition={{
            duration: 0.5,
            repeat: isUrgentMode ? Infinity : 0,
            repeatDelay: 2,
          }}
        >
          {/* Enhanced Glassmorphism container */}
          <motion.div 
            className={`relative w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-xl overflow-hidden ${isUrgentMode ? 'ring-2 ring-red-500/50' : ''}`}
            animate={hasChanged ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, rgba(5, 22, 18, 0.6) 0%, rgba(10, 35, 28, 0.4) 50%, rgba(5, 22, 18, 0.6) 100%)',
              backdropFilter: 'blur(12px) saturate(1.3)',
              WebkitBackdropFilter: 'blur(12px) saturate(1.3)',
              border: isUrgentMode ? '1px solid rgba(239, 68, 68, 0.6)' : '1px solid #D4AF37',
              boxShadow: isUrgentMode 
                ? `0 0 0 1px rgba(239, 68, 68, 0.8), 0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(239, 68, 68, 0.15), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.6)`
                : `0 0 0 1px rgba(212, 175, 55, 0.8), 0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.15), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.6)`,
            }}
          >
            {/* Frosted texture overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.05) 0%, transparent 50%),
                  linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 40%, rgba(0,0,0,0.15) 100%)
                `,
              }}
            />
            
            {/* Glowing gold border pulse */}
            <div 
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.6), inset 0 0 10px rgba(212, 175, 55, 0.2)',
                animation: 'glow-pulse 2s ease-in-out infinite',
              }}
            />
            
            {/* Number with flip animation on change */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={value}
                  className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold"
                  style={{
                    background: isUrgentMode 
                      ? 'linear-gradient(180deg, #FF8A8A 0%, #EF4444 40%, #DC2626 70%, #B91C1C 100%)'
                      : 'linear-gradient(180deg, #FFE5A0 0%, #D4AF37 40%, #B8860B 70%, #8B6914 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 -1px 0 rgba(255,229,160,0.2)) drop-shadow(0 2px 4px rgba(0,0,0,0.6))',
                  }}
                  initial={{ 
                    opacity: 0, 
                    y: -30,
                    rotateX: -90,
                    filter: 'blur(4px)',
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    rotateX: 0,
                    filter: 'blur(0px)',
                  }}
                  exit={{
                    opacity: 0,
                    y: 30,
                    rotateX: 90,
                    filter: 'blur(4px)',
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {value.toString().padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
            </div>
            
            {/* Center divider line - heritage style */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-800/40 to-transparent" />
            
            {/* Corner accents - refined */}
            <div className="absolute top-1.5 left-1.5 w-3 h-3 border-l-2 border-t-2 border-gold-800/50 rounded-tl-sm" />
            <div className="absolute top-1.5 right-1.5 w-3 h-3 border-r-2 border-t-2 border-gold-800/50 rounded-tr-sm" />
            <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-l-2 border-b-2 border-gold-800/50 rounded-bl-sm" />
            <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-r-2 border-b-2 border-gold-800/50 rounded-br-sm" />
          </motion.div>
          
          {/* Side decorative circuit dots */}
          <div className="absolute top-1/2 -left-2 w-1 h-1 -translate-y-1/2 rounded-full bg-cyan-glow/50 shadow-[0_0_4px_rgba(0,242,255,0.5)]" />
          <div className="absolute top-1/2 -right-2 w-1 h-1 -translate-y-1/2 rounded-full bg-cyan-glow/50 shadow-[0_0_4px_rgba(0,242,255,0.5)]" />
        </motion.div>
        
        <span className={`text-xs font-mono tracking-[0.25em] uppercase ${isUrgentMode ? 'text-red-400/80' : 'text-gold-700/80'}`}>
          {label}
        </span>
      </div>
    )
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 h-28">
        <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-xl bg-forest-900/50 animate-pulse border border-gold-800/30" />
        <span className="text-xl md:text-2xl text-gold-800/50">:</span>
        <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-xl bg-forest-900/50 animate-pulse border border-gold-800/30" />
        <span className="text-xl md:text-2xl text-gold-800/50">:</span>
        <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-xl bg-forest-900/50 animate-pulse border border-gold-800/30" />
        <span className="text-xl md:text-2xl text-gold-800/50">:</span>
        <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-xl bg-forest-900/50 animate-pulse border border-gold-800/30" />
      </div>
    )
  }

  // Show "Event Live" banner when countdown reaches zero
  if (isEventLive) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            textShadow: [
              '0 0 20px rgba(212,175,55,0.5)',
              '0 0 40px rgba(212,175,55,0.8)',
              '0 0 20px rgba(212,175,55,0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-4xl md:text-6xl font-display font-bold text-gold-700"
        >
          🎉 EVENT IS LIVE! 🎉
        </motion.div>
        <p className="text-gold-700/70 mt-4 text-lg">March 15-17, 2026 • SMVITM Campus</p>
      </motion.div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
      <FlipUnit value={timeLeft.days} prevValue={prevTime.days} label="Days" isUrgentMode={isUrgent} />
      <span className="text-xl md:text-2xl text-gold-800/50 font-light self-start mt-6">:</span>
      <FlipUnit value={timeLeft.hours} prevValue={prevTime.hours} label="Hours" isUrgentMode={isUrgent} />
      <span className="text-xl md:text-2xl text-gold-800/50 font-light self-start mt-6">:</span>
      <FlipUnit value={timeLeft.minutes} prevValue={prevTime.minutes} label="Mins" isUrgentMode={isUrgent} />
      <span className="text-xl md:text-2xl text-gold-800/50 font-light self-start mt-6">:</span>
      <FlipUnit value={timeLeft.seconds} prevValue={prevTime.seconds} label="Secs" isUrgentMode={isUrgent} />
    </div>
  )
}

export default function CyberAranyaHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Content layer parallax - keep opacity at 1 so CTAs remain clickable
  const contentY = useTransform(scrollYProgress, [0, 0.3], ['0%', '10%'])
  const contentMouseX = useTransform(mouseX, [0, 1], [5, -5])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = e.clientX / window.innerWidth
      const normalizedY = e.clientY / window.innerHeight
      mouseX.set(normalizedX)
      mouseY.set(normalizedY)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Respect reduced motion preferences
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] lg:min-h-screen flex items-center justify-center overflow-hidden z-40 pb-32"
      aria-label="Hero section"
    >
      {/* Hero-specific overlay - darken for readability while showing parallax */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(5, 13, 10, 0.4) 60%, rgba(5, 13, 10, 0.7) 100%)
          `
        }}
      />
      
      {/* Subtle gold accent lines - carved stone borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-900/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-900/20 to-transparent" />

      {/* Main content with parallax - balanced padding to fit all content */}
      <motion.div
        className="relative z-30 text-center px-6 md:px-12 lg:px-24 max-w-6xl mx-auto pt-20 md:pt-24 pb-8"
        style={{
          y: contentY,
          x: contentMouseX,
        }}
      >
        {/* Breathing logo as ceremonial seal - sized as royal crest */}
        <motion.div
          className="flex justify-center mb-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <BreathingLogo
            src="/images/logo.png"
            alt="SMVITM Logo"
            size={100}
          />
        </motion.div>

        {/* Digital etching title */}
        <DigitalEtching
          text="VARNOTHSAVA"
          subtitle="Where Heritage Meets the Future"
          className="mb-5"
        />

        {/* Year badge */}
        <motion.div
          className="inline-flex items-center gap-4 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-800" />
          <span className="font-mono text-2xl md:text-3xl text-gold-700 tracking-[0.5em] font-bold text-engraved">2026</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-800" />
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p className="text-gold-700/80 text-xs tracking-[0.4em] uppercase mb-5 font-medium text-engraved">
            The Awakening Begins In
          </p>
          <FlipCountdown />
        </motion.div>

        {/* CTA Buttons - Primary CTA is LOUD - Enhanced with micro-interactions */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-50 mb-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          {/* Register Now - Primary CTA with glow effect */}
          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            {/* Animated glow background */}
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-gold-800 via-gold-700 to-gold-950 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Link 
              href="/register" 
              className="relative flex items-center justify-center gap-2 min-w-[200px] text-center text-base font-bold px-8 py-4 
                         bg-gradient-to-r from-gold-800 via-gold-700 to-gold-950 
                         text-forest-950 rounded-xl
                         shadow-[0_0_30px_rgba(212,175,55,0.4)] 
                         hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]
                         transition-all duration-300
                         border border-gold-700/50
                         overflow-hidden
                         pointer-events-auto cursor-pointer focus-ring"
              aria-label="Register for Varnothsava 2026"
            >
              <Sparkles className="w-5 h-5" />
              <span className="relative z-10">Register Now</span>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: '-200%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </Link>
          </motion.div>
          
          {/* Explore Events - Secondary CTA */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <Link 
              href="/events" 
              className="relative flex items-center justify-center gap-2 min-w-[180px] text-center px-6 py-4
                         bg-forest-900/60 backdrop-blur-sm
                         text-gold-700 font-semibold rounded-xl
                         border border-gold-800/40 hover:border-gold-700
                         hover:bg-forest-900/80
                         transition-all duration-300
                         shadow-[0_0_20px_rgba(0,0,0,0.3)]
                         hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]
                         pointer-events-auto cursor-pointer focus-ring"
              aria-label="View all events"
            >
              <span>Explore Events</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </motion.div>

          {/* Add to Calendar */}
          <AddToCalendar
            title="Varnothsava 2026 - SMVITM"
            description="Karnataka's grandest inter-collegiate cultural and technical fest. 50+ events, ₹10L+ prizes, 5000+ participants. Don't miss it!"
            startDate="2026-03-15T09:00:00"
            endDate="2026-03-17T18:00:00"
            location="SMVITM, Bantakal, Udupi, Karnataka 574115"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
