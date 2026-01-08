'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface BreathingLogoProps {
  src: string
  alt: string
  size?: number
  className?: string
}

export default function BreathingLogo({ src, alt, size = 120, className = '' }: BreathingLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  // Smooth spring physics
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  // Transform mouse position to subtle rotation
  const rotateX = useTransform(smoothMouseY, [0, 1], [5, -5])
  const rotateY = useTransform(smoothMouseX, [0, 1], [-5, 5])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distanceX = (e.clientX - centerX) / (window.innerWidth / 2)
        const distanceY = (e.clientY - centerY) / (window.innerHeight / 2)
        mouseX.set(0.5 + distanceX * 0.5)
        mouseY.set(0.5 + distanceY * 0.5)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={containerRef}
      className={`relative breathe-glow ${className}`}
      style={{
        width: size,
        height: size,
        perspective: 1000,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Outer expanding aura rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{
            border: '1px solid',
            borderColor: `rgba(212,175,55,${0.3 - i * 0.1})`,
            boxShadow: `0 0 ${20 + i * 10}px rgba(212,175,55,${0.2 - i * 0.05})`,
          }}
          animate={{
            scale: [1, 1.3 + i * 0.2, 1.5 + i * 0.3],
            opacity: [0.6 - i * 0.15, 0.3 - i * 0.1, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Breathing glow background */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(212,175,55,0.3) 0%, rgba(212,175,55,0.1) 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Circuit ring around logo */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <defs>
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F2FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00F2FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00F2FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Base ring */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="rgba(212,175,55,0.2)"
          strokeWidth="0.5"
        />
        
        {/* Animated traveling light */}
        <motion.circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="url(#circuit-grad)"
          strokeWidth="1"
          strokeDasharray="30 270"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '50% 50%' }}
        />
      </svg>

      {/* Inner golden border */}
      <motion.div
        className="absolute inset-2 rounded-full"
        style={{
          border: '2px solid rgba(212,175,55,0.5)',
          boxShadow: 'inset 0 0 20px rgba(212,175,55,0.2), 0 0 20px rgba(212,175,55,0.3)',
        }}
        animate={{
          boxShadow: [
            'inset 0 0 20px rgba(212,175,55,0.2), 0 0 20px rgba(212,175,55,0.3)',
            'inset 0 0 30px rgba(212,175,55,0.3), 0 0 30px rgba(212,175,55,0.4)',
            'inset 0 0 20px rgba(212,175,55,0.2), 0 0 20px rgba(212,175,55,0.3)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Logo with 3D effect */}
      <motion.div
        className="absolute inset-4 rounded-full overflow-hidden bg-forest-950/80 backdrop-blur-sm flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={size - 32}
          height={size - 32}
          className="object-contain filter drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.3))',
          }}
        />
      </motion.div>

      {/* Hover energy burst */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,242,255,0.3) 0%, transparent 50%)',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovered ? { scale: 1.5, opacity: [0, 0.5, 0] } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Small decorative nodes around the logo */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180
        const x = 50 + 45 * Math.cos(angle)
        const y = 50 + 45 * Math.sin(angle)
        
        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold-950"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 5px rgba(212,175,55,0.5)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )
      })}
    </motion.div>
  )
}
