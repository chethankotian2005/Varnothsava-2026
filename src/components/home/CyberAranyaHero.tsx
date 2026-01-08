'use client'

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
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

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Modern techno-cultural background */}
      <div className="absolute inset-0 -z-30">
        <TechnoBackground />
      </div>

      {/* Main content with parallax */}
      <motion.div
        className="relative z-10 text-center px-8 md:px-16 lg:px-32 py-20"
        style={{
          opacity: contentOpacity,
          y: contentY,
          x: contentMouseX,
        }}
      >
        {/* Breathing logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <BreathingLogo
            src="/images/logo.png"
            alt="SMVITM Logo"
            size={140}
          />
        </motion.div>

        {/* Digital etching title */}
        <DigitalEtching
          text="VARNOTHSAVA"
          subtitle="Where Heritage Meets the Future"
          className="mb-12"
        />

        {/* Year badge */}
        <motion.div
          className="inline-flex items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-800" />
          <span className="font-mono text-2xl md:text-3xl text-gold-700 tracking-[0.5em]">2026</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-800" />
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p className="text-gold-700/70 text-sm tracking-[0.3em] uppercase mb-6">
            The Awakening Begins In
          </p>
          <FlipCountdown />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <button className="btn-liquid-gold">
            Enter the Aranya
          </button>
          <button className="btn-circuit">
            Explore Events
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gold-700/50"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
              <path
                d="M10 0 L10 20 M2 12 L10 20 L18 12"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
