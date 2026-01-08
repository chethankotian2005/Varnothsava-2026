'use client'

import { motion, useScroll, useTransform, useMotionValue, useReducedMotion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import DigitalEtching from '@/components/effects/DigitalEtching'
import BreathingLogo from '@/components/effects/BreathingLogo'

// Dynamically import background to avoid SSR issues
const TechnoBackground = dynamic(() => import('@/components/effects/TechnoBackground'), {
  ssr: false,
})

// Flip countdown component with glassmorphism
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

  useEffect(() => {
    const targetDate = new Date('2026-02-21T09:00:00')

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const newTime = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
        setPrevTime(timeLeft)
        setTimeLeft(newTime)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const FlipUnit = ({ value, prevValue, label }: { value: number; prevValue: number; label: string }) => {
    const hasChanged = value !== prevValue
    
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          {/* Enhanced Glassmorphism container */}
          <div 
            className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(5, 22, 18, 0.6) 0%, rgba(10, 35, 28, 0.4) 50%, rgba(5, 22, 18, 0.6) 100%)',
              backdropFilter: 'blur(12px) saturate(1.3)',
              WebkitBackdropFilter: 'blur(12px) saturate(1.3)',
              border: '1px solid #D4AF37',
              boxShadow: `
                0 0 0 1px rgba(212, 175, 55, 0.8),
                0 0 20px rgba(212, 175, 55, 0.3),
                0 0 40px rgba(212, 175, 55, 0.15),
                inset 0 1px 0 rgba(255,255,255,0.1),
                inset 0 -1px 0 rgba(0,0,0,0.4),
                0 8px 32px rgba(0,0,0,0.6)
              `,
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
            
            {/* Number with glitch effect on change */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span 
                key={value}
                className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold"
                style={{
                  background: 'linear-gradient(180deg, #FFE5A0 0%, #D4AF37 40%, #B8860B 70%, #8B6914 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 -1px 0 rgba(255,229,160,0.2)) drop-shadow(0 2px 4px rgba(0,0,0,0.6))',
                }}
                initial={hasChanged ? { 
                  opacity: 0, 
                  y: -20,
                  filter: 'blur(4px)',
                } : false}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  filter: 'blur(0px)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {value.toString().padStart(2, '0')}
              </motion.span>
              
              {/* Digital trail effect */}
              {hasChanged && (
                <motion.span 
                  className="absolute font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-glow/30"
                  initial={{ opacity: 0.5, y: 0 }}
                  animate={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  {prevValue.toString().padStart(2, '0')}
                </motion.span>
              )}
            </div>
            
            {/* Center divider line - heritage style */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-800/40 to-transparent" />
            
            {/* Corner accents - refined */}
            <div className="absolute top-1.5 left-1.5 w-3 h-3 border-l-2 border-t-2 border-gold-800/50 rounded-tl-sm" />
            <div className="absolute top-1.5 right-1.5 w-3 h-3 border-r-2 border-t-2 border-gold-800/50 rounded-tr-sm" />
            <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-l-2 border-b-2 border-gold-800/50 rounded-bl-sm" />
            <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-r-2 border-b-2 border-gold-800/50 rounded-br-sm" />
          </div>
          
          {/* Side decorative circuit dots */}
          <div className="absolute top-1/2 -left-2 w-1 h-1 -translate-y-1/2 rounded-full bg-cyan-glow/50 shadow-[0_0_4px_rgba(0,242,255,0.5)]" />
          <div className="absolute top-1/2 -right-2 w-1 h-1 -translate-y-1/2 rounded-full bg-cyan-glow/50 shadow-[0_0_4px_rgba(0,242,255,0.5)]" />
        </div>
        
        <span className="text-xs font-mono tracking-[0.25em] text-gold-700/80 uppercase">
          {label}
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
      <FlipUnit value={timeLeft.days} prevValue={prevTime.days} label="Days" />
      <span className="text-xl md:text-2xl text-gold-800/50 font-light self-start mt-6">:</span>
      <FlipUnit value={timeLeft.hours} prevValue={prevTime.hours} label="Hours" />
      <span className="text-xl md:text-2xl text-gold-800/50 font-light self-start mt-6">:</span>
      <FlipUnit value={timeLeft.minutes} prevValue={prevTime.minutes} label="Mins" />
      <span className="text-xl md:text-2xl text-gold-800/50 font-light self-start mt-6">:</span>
      <FlipUnit value={timeLeft.seconds} prevValue={prevTime.seconds} label="Secs" />
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

  // Content layer parallax
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
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
      className="relative min-h-[100svh] lg:min-h-screen flex items-center justify-center overflow-hidden atmosphere-gateway"
      aria-label="Hero section"
    >
      {/* Ancient ruins techno-cultural background */}
      <div className="absolute inset-0 -z-30">
        <TechnoBackground />
      </div>
      
      {/* Stone archway vignette - ancient ceremonial gateway */}
      <div 
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 35%, transparent 0%, rgba(5, 13, 10, 0.3) 50%, rgba(5, 13, 10, 0.85) 100%),
            linear-gradient(180deg, transparent 0%, transparent 60%, rgba(5, 13, 10, 0.6) 100%)
          `
        }}
      />
      
      {/* Subtle gold accent lines - carved stone borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-900/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-900/20 to-transparent" />

      {/* Main content with parallax */}
      <motion.div
        className="relative z-10 text-center px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
        style={{
          opacity: contentOpacity,
          y: contentY,
          x: contentMouseX,
        }}
      >
        {/* Breathing logo - slightly smaller for hierarchy */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <BreathingLogo
            src="/images/logo.png"
            alt="SMVITM Logo"
            size={120}
          />
        </motion.div>

        {/* Digital etching title */}
        <DigitalEtching
          text="VARNOTHSAVA"
          subtitle="Where Heritage Meets the Future"
          className="mb-8"
        />

        {/* Year badge */}
        <motion.div
          className="inline-flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-800" />
          <span className="font-mono text-3xl md:text-4xl text-gold-700 tracking-[0.5em] font-bold text-engraved">2026</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-800" />
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p className="text-gold-700/80 text-xs tracking-[0.4em] uppercase mb-5 font-medium text-engraved">
            The Awakening Begins In
          </p>
          <FlipCountdown />
        </motion.div>

        {/* CTA Buttons - Primary CTA is LOUD */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <Link 
            href="/register" 
            className="btn-liquid-gold focus-ring min-w-[220px] text-center text-lg px-8 py-5 shadow-[0_0_20px_rgba(212,175,55,0.3)] md:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            aria-label="Register for Varnothsava 2026"
          >
            <span className="flex items-center justify-center gap-2">
              <span>Register Now</span>
              <span className="text-xs bg-forest-950/40 px-2 py-0.5 rounded-full">FREE</span>
            </span>
          </Link>
          <Link 
            href="/events" 
            className="btn-circuit focus-ring min-w-[180px] text-center px-6 py-4"
            aria-label="View all events"
          >
            Explore Events
          </Link>
        </motion.div>
        
        {/* Reassurance microcopy */}
        <motion.p 
          className="text-forest-500 text-xs mt-4 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Takes less than 2 minutes to register
        </motion.p>

        {/* Scroll indicator - hidden on very short screens */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: prefersReducedMotion ? 0 : 2 }}
          aria-hidden="true"
        >
          <motion.button
            onClick={() => {
              const aboutSection = document.getElementById('about')
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
              }
            }}
            className="flex flex-col items-center gap-2 text-gold-700/60 hover:text-gold-700 transition-colors cursor-pointer p-3 rounded-lg focus-ring group"
            animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Scroll to learn more"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-mono">Discover</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center pt-2">
              <motion.div 
                className="w-1 h-2.5 bg-current rounded-full"
                animate={prefersReducedMotion ? {} : { y: [0, 8, 0], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
