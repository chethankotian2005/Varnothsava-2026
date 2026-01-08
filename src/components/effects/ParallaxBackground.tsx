'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

interface ParallaxBackgroundProps {
  className?: string
}

export default function ParallaxBackground({ className = '' }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isLoaded, setIsLoaded] = useState(false)
  
  const { scrollYProgress } = useScroll()
  
  // Parallax transforms - different speeds for each layer
  // Layer 1: Far background - very slow (0.1)
  const layer1Y = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  // Layer 2: Stone texture - medium slow (0.4)
  const layer2Y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  // Layer 3: Tech overlay - medium (0.5)
  const layer3Y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  // Layer 4: Vines foreground - fast (0.8)
  const layer4Y = useTransform(scrollYProgress, [0, 1], ['0%', '80%'])

  useEffect(() => {
    // Mark as loaded after initial render
    setIsLoaded(true)
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* Layer 1: Far Background - Fixed/Very Slow */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          y: prefersReducedMotion ? 0 : layer1Y,
        }}
      >
        <Image
          src="/images/bg-layer-1-far.png"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
          onLoad={() => setIsLoaded(true)}
        />
        {/* Darken the far background slightly */}
        <div className="absolute inset-0 bg-forest-950/30" />
      </motion.div>

      {/* Layer 2: Stone Texture - Mid-Ground */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          y: prefersReducedMotion ? 0 : layer2Y,
        }}
      >
        <Image
          src="/images/bg-layer-2-stone.png"
          alt=""
          fill
          quality={85}
          className="object-cover opacity-80"
          sizes="100vw"
        />
      </motion.div>

      {/* Layer 3: Tech Overlay - Flickering Circuit */}
      <motion.div 
        className="absolute inset-0 tech-flicker"
        style={{ 
          y: prefersReducedMotion ? 0 : layer3Y,
        }}
      >
        <Image
          src="/images/bg-layer-3-tech.png"
          alt=""
          fill
          quality={80}
          className="object-cover opacity-10 mix-blend-screen"
          sizes="100vw"
        />
      </motion.div>

      {/* Layer 4: Vine Frame - Foreground */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          y: prefersReducedMotion ? 0 : layer4Y,
        }}
      >
        <Image
          src="/images/bg-layer-4-vines.png"
          alt=""
          fill
          quality={90}
          className="object-cover"
          sizes="100vw"
          style={{ 
            // Ensure center is transparent for content visibility
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, black 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, black 70%)',
          }}
        />
      </motion.div>

      {/* Bottom gradient for footer readability */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(5, 13, 10, 0.95) 0%, rgba(5, 13, 10, 0.7) 40%, transparent 100%)',
        }}
      />

      {/* Top vignette for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 0%, transparent 40%, rgba(5, 13, 10, 0.4) 100%)',
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
