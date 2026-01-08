'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'

// Flip Countdown Component
function FlipCard({ value, label, prevValue }: { value: number; label: string; prevValue: number }) {
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    if (value !== prevValue) {
      setFlip(true)
      const timer = setTimeout(() => setFlip(false), 600)
      return () => clearTimeout(timer)
    }
  }, [value, prevValue])

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-20 md:w-24 md:h-28 perspective-1000">
        {/* Card container */}
        <div className={`absolute inset-0 ${flip ? 'countdown-flip' : ''}`}>
          {/* Top half */}
          <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden rounded-t-xl bg-dark-300/90 border border-gold-600/20 border-b-0">
            <div className="absolute inset-0 flex items-end justify-center pb-0.5">
              <span className="text-3xl md:text-5xl font-display font-bold text-gold-600 neon-gold">
                {String(value).padStart(2, '0')}
              </span>
            </div>
          </div>
          
          {/* Bottom half */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-xl bg-dark-400/90 border border-gold-600/20 border-t-0">
            <div className="absolute inset-0 flex items-start justify-center pt-0.5">
              <span className="text-3xl md:text-5xl font-display font-bold text-gold-700">
                {String(value).padStart(2, '0')}
              </span>
            </div>
          </div>
          
          {/* Center line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-dark-500/50 z-10" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-xl opacity-50 pointer-events-none"
            style={{
              boxShadow: '0 0 20px rgba(212, 168, 83, 0.2), inset 0 0 20px rgba(212, 168, 83, 0.05)'
            }}
          />
        </div>
      </div>
      <span className="text-xs md:text-sm text-gray-500 mt-3 uppercase tracking-widest font-mono">
        {label}
      </span>
    </div>
  )
}

// Glitch Text Component
function GlitchText({ text, className = '' }: { text: string; className?: string }) {
  const [isGlitching, setIsGlitching] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsGlitching(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 w-full text-emerald-glow opacity-70 animate-pulse"
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              transform: 'translate(-2px, -2px)',
              animation: 'glitch-effect 0.3s infinite'
            }}
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-0 w-full text-heritage-maroon opacity-70"
            style={{ 
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
              transform: 'translate(2px, 2px)',
              animation: 'glitch-effect 0.3s infinite reverse'
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  )
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const countdownRef = useRef<HTMLDivElement>(null)

  const [mounted, setMounted] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [prevCountdown, setPrevCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Countdown timer - Set event date to March 15, 2026
  useEffect(() => {
    if (!mounted) return
    
    const eventDate = new Date('2026-03-15T09:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance > 0) {
        setPrevCountdown(countdown)
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [mounted, countdown])

  // GSAP animations
  useEffect(() => {
    if (!mounted) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Initial states
      gsap.set([logoRef.current, titleRef.current, subtitleRef.current, ctaRef.current, countdownRef.current], {
        opacity: 0,
        y: 40,
      })

      // Logo animation - scale up from 0.8
      gsap.set(logoRef.current, { scale: 0.8 })

      // Animation sequence
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        delay: 0.3,
        ease: 'elastic.out(1, 0.75)',
      })
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }, '-=0.6')
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
        }, '-=0.4')
        .to(ctaRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
        }, '-=0.3')
        .to(countdownRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
        }, '-=0.3')

    }, heroRef)

    return () => ctx.revert()
  }, [mounted])

  const countdownItems = [
    { label: 'Days', value: countdown.days, prevValue: prevCountdown.days },
    { label: 'Hours', value: countdown.hours, prevValue: prevCountdown.hours },
    { label: 'Minutes', value: countdown.minutes, prevValue: prevCountdown.minutes },
    { label: 'Seconds', value: countdown.seconds, prevValue: prevCountdown.seconds },
  ]

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 circuit-bg" />
      
      {/* Radial gradients for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-glow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold-600/5 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Logo with pulse glow */}
        <motion.div 
          ref={logoRef} 
          className="mb-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative inline-block">
            {/* Outer glow ring */}
            <div className="absolute inset-0 -m-4 rounded-full bg-gold-600/20 blur-xl animate-pulse-gold" />
            
            {/* Logo container */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden ring-4 ring-gold-600/40 pulse-glow">
              <Image
                src="/images/logo.png"
                alt="Varnothsava 2026 - SMVITM"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Orbiting particles */}
            <div className="absolute inset-0 -m-8 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-gold-600 rounded-full shadow-gold-glow" />
              <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-emerald-glow rounded-full shadow-teal-glow" />
            </div>
          </div>
        </motion.div>

        {/* Title with glitch effect */}
        <div ref={titleRef} className="mb-6">
          <span className="block text-sm md:text-base text-emerald-glow font-mono tracking-[0.3em] uppercase mb-4">
            SMVITM Presents
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">
            <GlitchText 
              text="VARNOTHSAVA" 
              className="bg-gradient-to-r from-gold-800 via-gold-600 to-gold-800 bg-clip-text text-transparent"
            />
          </h1>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-mono text-emerald-glow mt-4 tracking-widest">
            2026
          </span>
        </div>

        {/* Tagline */}
        <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
          <span className="font-display italic text-gold-600">The Nexus of </span>
          <span className="text-gold-700 font-display">Heritage</span>
          <span className="font-display italic text-gold-600"> and </span>
          <span className="text-emerald-glow font-mono">Future</span>
        </p>

        {/* Event Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 mb-10">
          <div className="flex items-center gap-2 glass-gold px-4 py-2 rounded-full">
            <Calendar size={18} className="text-gold-600" />
            <span className="font-mono text-sm">March 15-17, 2026</span>
          </div>
          <div className="flex items-center gap-2 glass-gold px-4 py-2 rounded-full">
            <MapPin size={18} className="text-gold-600" />
            <span className="font-mono text-sm">SMVITM, Bantakal</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link href="/register" className="btn-primary group">
            <span>Register Now</span>
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/events" className="btn-secondary">
            Explore Events
          </Link>
        </div>

        {/* Flip Countdown */}
        <div ref={countdownRef}>
          <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-6 font-mono">
            Event Starts In
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {mounted ? (
              countdownItems.map((item) => (
                <FlipCard
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  prevValue={item.prevValue}
                />
              ))
            ) : (
              countdownItems.map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-16 h-20 md:w-24 md:h-28 rounded-xl bg-dark-300/90 border border-gold-600/20 flex items-center justify-center">
                    <span className="text-3xl md:text-5xl font-display font-bold text-gold-600">--</span>
                  </div>
                  <span className="text-xs md:text-sm text-gray-500 mt-3 uppercase tracking-widest font-mono">
                    {item.label}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold-600/50 flex items-start justify-center p-1.5 glass">
          <motion.div 
            className="w-1.5 h-2.5 bg-gold-600 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
