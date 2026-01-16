'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface DigitalEtchingProps {
  text: string
  subtitle?: string
  className?: string
}

export default function DigitalEtching({ text, subtitle, className = '' }: DigitalEtchingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Detect mobile viewport for simplified rendering
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div ref={containerRef} className={`relative text-center ${className}`}>
      {/* Main title container - cinematic entry animation, no hover */}
      <motion.div 
        className="relative inline-block"
        initial={{
          y: 30,
          scale: 0.96,
          opacity: 0,
        }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          willChange: 'transform, opacity',
        }}
      >
        {/* Premium 3D gold-metal title with forest light integration */}
        <motion.h1 
          className="font-display text-center leading-tight uppercase relative z-10 hero-title-3d-gold px-4"
          style={{ 
            fontSize: 'clamp(2.25rem, 8vw, 6rem)',
            fontWeight: 700,
            letterSpacing: 'clamp(0.08em, 2vw, 0.1em)',
            background: 'linear-gradient(180deg, #FFFDF5 0%, #FFF1B8 25%, #FFD36A 50%, #F2B93B 75%, #C9971A 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: `
              0 1px 0 rgba(255, 253, 245, 0.9),
              0 2px 0 rgba(255, 241, 184, 0.7),
              0 3px 0 rgba(255, 211, 106, 0.5),
              0 4px 0 rgba(242, 185, 59, 0.3),
              0 5px 8px rgba(0, 0, 0, 0.2),
              0 8px 15px rgba(0, 0, 0, 0.15),
              inset 0 -1px 2px rgba(0, 0, 0, 0.15),
              0 -1px 1px rgba(80, 200, 180, 0.2),
              0 6px 2px rgba(80, 200, 180, 0.08)
            `,
            filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.2)) brightness(1.2)',
          }}
          initial={{ 
            opacity: 0, 
            y: 20 
          }}
          animate={{ 
            opacity: 1, 
            y: 0 
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
        >
          <span className="sr-only">{text}</span>
          <span aria-hidden="true">
            {text}
          </span>
        </motion.h1>

        {/* Clean minimal underline */}
        <motion.div
          className="relative mt-6 mx-auto hero-underline-neon"
          style={{ 
            width: '60%', 
            height: '2px',
            background: 'rgba(212, 175, 55, 0.6)',
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.3)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Subtitle with reveal animation - Each word styled for visual harmony */}
      {subtitle && (
        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-display tracking-[0.15em] uppercase px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { 
            opacity: 1, 
            y: 0, 
          } : {}}
          transition={{
            duration: 1,
            delay: text.length * 0.05 + 0.5,
            ease: 'easeOut',
          }}
          style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.15)',
          }}
        >
          {/* "Where" - warm off-white for readability, not disabled */}
          <span className="text-[#F5EBD7]">Where </span>
          {/* "Heritage" - ceremonial gold accent */}
          <span 
            className="inline heritage-highlight"
            style={isMobile ? {
              // Mobile: Plain color, no GPU-intensive effects
              color: '#D4AF37',
              background: 'none',
              WebkitTextFillColor: '#D4AF37',
            } : {
              // Desktop: Full gradient effect
              background: 'linear-gradient(135deg, #D4AF37 0%, #FFE5A0 50%, #D4AF37 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.4))',
            }}
          >Heritage</span>
          {/* "Meets" - warm off-white connecting word */}
          <span className="text-[#F5EBD7]"> Meets </span>
          {/* "Future" - cyan tech accent */}
          <span 
            className="inline future-highlight"
            style={isMobile ? {
              // Mobile: Plain color, no GPU-intensive effects
              color: '#00D4D4',
              background: 'none',
              WebkitTextFillColor: '#00D4D4',
            } : {
              // Desktop: Full gradient effect
              background: 'linear-gradient(135deg, #00D4D4 0%, #7FFFD4 50%, #00D4D4 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 8px rgba(0,212,212,0.4))',
            }}
          >Future</span>
        </motion.p>
      )}
    </div>
  )
}
