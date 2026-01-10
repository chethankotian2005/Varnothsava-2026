'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

interface ParallaxBackgroundProps {
  className?: string
}

/**
 * 4-Layer Parallax Background System
 * Theme: Ancient Forest Ruins × Futuristic Technology
 * 
 * Layering Order (Bottom → Top):
 * 1. far.jpg - Deep forest + light rays (atmospheric base)
 * 2. stone.jpg - Ancient stone ruins texture
 * 3. vines.png - Organic nature overlay (PNG transparency)
 * 4. tech.png - Glowing circuitry overlay (PNG transparency)
 */
export default function ParallaxBackground({ className = '' }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const { scrollYProgress } = useScroll()
  
  // Detect mobile for performance optimization (disable fixed attachment)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Parallax transforms - different speeds for depth effect
  // Layer 1: Far background - very slow (creates depth)
  const layer1Y = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  // Layer 2: Stone ruins - slow-medium
  const layer2Y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  // Layer 3: Vines overlay - medium
  const layer3Y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  // Layer 4: Tech circuits - faster (foreground feel)
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
          Base layer - deep forest with light rays, mystical atmosphere
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
        {/* Cinematic darkening for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/20 via-transparent to-forest-950/40" />
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          LAYER 2: STONE RUINS TEXTURE (stone.jpg)
          Mid-ground - ancient carved stone structures
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
            opacity: 0.65,
            mixBlendMode: 'multiply',
          }}
        />
        {/* Soft vignette to blend edges */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, rgba(5, 13, 10, 0.5) 100%)',
          }}
        />
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          LAYER 3: HANGING VINES OVERLAY (vines.png)
          Nature overlay - organic, living forest elements
          PNG with transparency for proper compositing
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: shouldDisableParallax ? 0 : layer3Y }}
      >
        <Image
          src="/images/vines.png"
          alt=""
          fill
          quality={90}
          className="object-cover"
          sizes="100vw"
          style={{
            opacity: 0.8,
          }}
        />
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          LAYER 4: FUTURISTIC CIRCUITRY (tech.png)
          Top overlay - glowing tech circuits, futuristic energy
          PNG with transparency, uses screen blend for glow effect
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div 
        className="absolute inset-0 tech-glow-pulse"
        style={{ y: shouldDisableParallax ? 0 : layer4Y }}
      >
        <Image
          src="/images/tech.png"
          alt=""
          fill
          quality={85}
          className="object-cover"
          sizes="100vw"
          style={{
            opacity: 0.4,
            mixBlendMode: 'screen',
          }}
        />
        {/* Subtle cyan glow effect for tech layer */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(0, 212, 212, 0.03) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          CINEMATIC OVERLAYS FOR READABILITY
          These ensure text remains legible over detailed backgrounds
          ═══════════════════════════════════════════════════════════════ */}
      
      {/* Top vignette - navbar readability */}
      <div 
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(5, 13, 10, 0.6) 0%, rgba(5, 13, 10, 0.3) 50%, transparent 100%)',
        }}
      />

      {/* Bottom gradient - footer readability */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(5, 13, 10, 0.95) 0%, rgba(5, 13, 10, 0.7) 40%, transparent 100%)',
        }}
      />

      {/* Full-screen vignette for cinematic depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(5, 13, 10, 0.45) 100%)',
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
