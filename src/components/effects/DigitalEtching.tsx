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
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Main title container - NO grey box or brackets */}
      <div className="relative">
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

        {/* Individual letters with brushed gold foil texture */}
        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider">
          <span className="sr-only">{text}</span>
          <span aria-hidden="true" className="relative inline-flex">
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
                  // Brushed gold foil texture with embossed effect
                  background: `linear-gradient(
                    135deg,
                    #8B7355 0%,
                    #D4AF37 15%,
                    #FFE5A0 30%,
                    #D4AF37 45%,
                    #8B6914 55%,
                    #D4AF37 70%,
                    #FFE5A0 85%,
                    #B8860B 100%
                  )`,
                  backgroundSize: '200% 200%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: 'none',
                  // Multi-layer drop shadows for embossed metallic look
                  filter: `
                    drop-shadow(0 -1px 0 rgba(255,229,160,0.3))
                    drop-shadow(0 1px 0 rgba(0,0,0,0.6))
                    drop-shadow(0 2px 2px rgba(0,0,0,0.5))
                    drop-shadow(0 4px 8px rgba(0,0,0,0.4))
                    drop-shadow(0 0 15px rgba(212,175,55,0.3))
                    drop-shadow(0 0 30px rgba(212,175,55,0.15))
                  `,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}

            {/* Diagonal continuous light-sweep glint - softer, slower */}
            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ clipPath: 'inset(0)' }}
            >
              <motion.div
                className="absolute"
                style={{
                  width: '100px', // Wider for softer effect
                  height: '200%',
                  top: '-50%',
                  // Softer edges with more gradual opacity falloff
                  background: `linear-gradient(
                    90deg,
                    transparent 0%,
                    rgba(255,255,255,0.03) 15%,
                    rgba(255,255,255,0.08) 30%,
                    rgba(255,255,255,0.2) 42%,
                    rgba(255,255,255,0.35) 50%,
                    rgba(255,255,255,0.2) 58%,
                    rgba(255,255,255,0.08) 70%,
                    rgba(255,255,255,0.03) 85%,
                    transparent 100%
                  )`,
                  transform: 'rotate(15deg)', // Slightly less angle
                  filter: 'blur(2px)', // Softer edge
                }}
                animate={{
                  left: glintActive ? ['-25%', '125%'] : '-25%',
                }}
                transition={{
                  duration: 2, // Slower sweep
                  ease: [0.4, 0, 0.2, 1], // Smooth ease
                }}
              />
            </motion.div>
          </span>
        </h1>

        {/* Underline accent with circuit pattern */}
        <motion.div
          className="relative h-0.5 mt-6 mx-auto overflow-hidden"
          style={{ width: '60%' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: text.length * 0.05 + 0.3, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-950 to-transparent" />
          
          {/* Traveling light effect */}
          <motion.div
            className="absolute inset-y-0 w-16"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0,242,255,0.8), transparent)',
              boxShadow: '0 0 10px rgba(0,242,255,0.5)',
            }}
            initial={{ left: '0%' }}
            animate={{
              left: ['0%', '100%'],
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

      {/* Subtitle with reveal animation */}
      {subtitle && (
        <motion.p
          className="mt-8 text-lg sm:text-xl md:text-2xl font-display tracking-[0.2em] text-gold-700/80 uppercase"
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
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
