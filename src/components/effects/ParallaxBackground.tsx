'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

interface ParallaxBackgroundProps {
  className?: string
}

/**
 * 2-Layer Parallax Background System
 * Theme: Ancient Forest Ruins
 * 
 * Layering Order (Bottom → Top):
 * 1. far.jpg - Deep forest + light rays (atmospheric base)
 * 2. stone.jpg - Ancient stone ruins texture
 * 
 * Section Strategy:
 * - Hero/CTA: Lighter overlay to show forest depth
 * - Mid-content: Heavier overlay for text readability
 */
export default function ParallaxBackground({ className = '' }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const { scrollYProgress } = useScroll()
  
  // Detect mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Parallax transforms - different speeds for depth effect
  const layer1Y = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const layer2Y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const layer3Y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const layer4Y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Disable parallax on mobile for performance
  const shouldDisableParallax = prefersReducedMotion || isMobile

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* ═══════════════════════════════════════════════════════════════
          LAYER 1: FAR ATMOSPHERIC FOREST (far.jpg)
          Base layer - always visible on all devices
          Reduced opacity for lighter feel
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: shouldDisableParallax ? 0 : layer1Y }}
      >
        <Image
          src="/images/far.jpg"
          alt=""
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
          onLoad={() => setIsLoaded(true)}
        />
        {/* Lighter gradient overlay for brighter feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/10 via-transparent to-forest-950/30" />
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          LAYER 2: STONE RUINS TEXTURE (stone.jpg)
          Mid-ground - reduced opacity for less visual weight
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: shouldDisableParallax ? 0 : layer2Y }}
      >
        <Image
          src="/images/stone.jpg"
          alt=""
          fill
          quality={80}
          className="object-cover"
          sizes="100vw"
          style={{
            opacity: isMobile ? 0.35 : 0.45, // Reduced from 0.65 - lighter stone
            mixBlendMode: 'multiply',
          }}
        />
        {/* Lighter radial vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(5, 13, 10, 0.35) 100%)',
          }}
        />
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          CINEMATIC OVERLAYS FOR READABILITY
          Lightened for premium feel - mystical not murky
          ═══════════════════════════════════════════════════════════════ */}
      
      {/* Top vignette - navbar readability - lighter */}
      <div 
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(5, 13, 10, 0.4) 0%, rgba(5, 13, 10, 0.15) 50%, transparent 100%)',
        }}
      />

      {/* Bottom gradient - footer readability - slightly lighter */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(5, 13, 10, 0.85) 0%, rgba(5, 13, 10, 0.5) 40%, transparent 100%)',
        }}
      />

      {/* Full-screen vignette - reduced for brighter center */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(5, 13, 10, 0.3) 100%)',
        }}
      />

      {/* Loading fade-in */}
      <div 
        className={`absolute inset-0 bg-forest-950 transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ pointerEvents: 'none' }}
      />
    </div>
  )
}
