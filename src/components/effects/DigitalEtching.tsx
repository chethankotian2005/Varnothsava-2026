'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface DigitalEtchingProps {
  text: string
  subtitle?: string
  className?: string
}

export default function DigitalEtching({ text, subtitle, className = '' }: DigitalEtchingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [glintActive, setGlintActive] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Continuous glint animation every 4-5 seconds (slower)
  useEffect(() => {
    if (!isVisible) return
    
    const startGlint = () => {
      setGlintActive(true)
      setTimeout(() => setGlintActive(false), 2500) // Longer glint duration
    }
    
    // Initial glint after entrance animation completes
    const initialTimer = setTimeout(startGlint, text.length * 0.05 * 1000 + 2000)
    
    // Recurring glint every 4.5 seconds (slower)
    const interval = setInterval(startGlint, 4500)
    
    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [isVisible, text.length])

  const letters = text.split('')

  return (
    <div ref={containerRef} className={`relative text-center ${className}`}>
      {/* Main title container - perfectly centered */}
      <div className="relative inline-block">
        {/* Laser etching line effect */}
        <motion.div
          className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-glow to-transparent"
          style={{
            width: '120%',
            marginLeft: '-10%',
            boxShadow: '0 0 20px 5px rgba(0,242,255,0.5), 0 0 40px 10px rgba(0,242,255,0.3)',
          }}
          initial={{ x: '-100%', opacity: 0 }}
          animate={isVisible ? { 
            x: ['-110%', '110%'],
            opacity: [0, 1, 1, 0],
          } : {}}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.1, 0.9, 1],
          }}
        />

        {/* Radial glow backdrop for title spotlight effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.12) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Individual letters with bold metallic gold effect */}
        <motion.h1 
          className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center leading-tight uppercase group cursor-default"
          style={{ 
            letterSpacing: '0.2em',
            fontWeight: 900,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: prefersReducedMotion ? 0.3 : 1.2,
            ease: prefersReducedMotion ? 'easeOut' : [0.34, 1.56, 0.64, 1], // Bounce effect
          }}
        >
          <span className="sr-only">{text}</span>
          <span 
            aria-hidden="true" 
            className="relative inline-flex transition-all duration-300 ease-out"
            style={{
              willChange: 'transform',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.letterSpacing = '0.22em';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.letterSpacing = '0.2em';
            }}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block relative"
                initial={{ 
                  opacity: 0, 
                  y: 30,
                  rotateX: -90,
                  filter: 'blur(10px)',
                }}
                animate={isVisible ? { 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  filter: 'blur(0px)',
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  // Bold metallic gold gradient
                  background: `linear-gradient(
                    135deg,
                    #FFD700 0%,
                    #FFA500 25%,
                    #FFD700 50%,
                    #FFED4E 75%,
                    #FFD700 100%
                  )`,
                  backgroundSize: '200% 200%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: 'inherit',
                  fontWeight: 'inherit',
                  // Powerful multi-layer shadow for depth and glow
                  textShadow: `
                    0 0 20px rgba(255, 215, 0, 0.8),
                    0 0 40px rgba(255, 165, 0, 0.6),
                    0 0 60px rgba(255, 215, 0, 0.4),
                    0 5px 15px rgba(0, 0, 0, 0.8),
                    0 10px 30px rgba(0, 0, 0, 0.6)
                  `,
                  animation: prefersReducedMotion ? 'none' : 'shimmerGold 5s ease-in-out infinite alternate',
                  backgroundPosition: prefersReducedMotion ? '50% 50%' : undefined,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}

            {/* Diagonal continuous light-sweep glint - enhanced */}
            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ clipPath: 'inset(0)' }}
            >
              <motion.div
                className="absolute"
                style={{
                  width: '120px',
                  height: '200%',
                  top: '-50%',
                  background: `linear-gradient(
                    90deg,
                    transparent 0%,
                    rgba(255,255,255,0.05) 15%,
                    rgba(255,255,255,0.15) 30%,
                    rgba(255,255,255,0.3) 42%,
                    rgba(255,255,255,0.5) 50%,
                    rgba(255,255,255,0.3) 58%,
                    rgba(255,255,255,0.15) 70%,
                    rgba(255,255,255,0.05) 85%,
                    transparent 100%
                  )`,
                  transform: 'rotate(15deg)',
                  filter: 'blur(2px)',
                }}
                animate={{
                  left: glintActive ? ['-25%', '125%'] : '-25%',
                }}
                transition={{
                  duration: 2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </motion.div>
          </span>
        </motion.h1>

        {/* Enhanced underline accent with animated gradient */}
        <motion.div
          className="relative mt-6 mx-auto overflow-hidden"
          style={{ width: '60%', height: '5px' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: text.length * 0.05 + 0.3, ease: 'easeOut' }}
        >
          {/* Animated gold gradient background */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #FFD700 20%, #FFA500 40%, #FFD700 60%, #FFED4E 80%, transparent 100%)',
              backgroundSize: '200% 100%',
              boxShadow: '0 0 15px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 165, 0, 0.5)',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '200% 50%'],
            }}
            transition={{
              duration: 3,
              ease: 'linear',
              repeat: Infinity,
            }}
          />
          
          {/* Traveling light effect - enhanced */}
          <motion.div
            className="absolute inset-y-0 w-20"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
              boxShadow: '0 0 15px rgba(255,255,255,0.6)',
              filter: 'blur(4px)',
            }}
            initial={{ left: '-20%' }}
            animate={{
              left: ['-20%', '120%'],
            }}
            transition={{
              duration: 2.5,
              delay: text.length * 0.05 + 1,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>

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
            className="inline-block"
            style={{
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
            className="inline-block"
            style={{
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
