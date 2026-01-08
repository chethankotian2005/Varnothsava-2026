'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Ambient floating particles
function AmbientParticles() {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    opacity: number
    duration: number
    delay: number
    color: string
  }>>([])

  useEffect(() => {
    const colors = ['rgba(0, 200, 220, ', 'rgba(0, 180, 200, ', 'rgba(212, 175, 55, ']
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.2 + 0.05,
      duration: Math.random() * 20 + 25,
      delay: Math.random() * 15,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, ${p.color}${p.opacity}) 0%, transparent 70%)`,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}${p.opacity * 0.4})`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 8, -8, 0],
            opacity: [p.opacity, p.opacity * 1.3, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function TechnoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep immersive gradient - teal, cyan, midnight blue */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(160deg, 
              #03101a 0%, 
              #051a22 15%,
              #062028 30%, 
              #081c30 50%,
              #0a1828 70%,
              #051218 85%,
              #020a10 100%
            )
          `,
        }}
      />

      {/* Secondary gradient layer for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 50% 100%, rgba(6, 30, 40, 0.8) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(8, 25, 45, 0.6) 0%, transparent 50%)
          `,
        }}
      />

      {/* Soft ambient glow spots */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 35% at 25% 30%, rgba(0, 180, 210, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 45% 30% at 75% 70%, rgba(0, 160, 190, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 35% 25% at 85% 25%, rgba(0, 200, 220, 0.04) 0%, transparent 40%),
            radial-gradient(ellipse 30% 20% at 15% 75%, rgba(0, 170, 200, 0.04) 0%, transparent 40%),
            radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212, 175, 55, 0.015) 0%, transparent 50%)
          `,
        }}
      />

      {/* Concentric ring arcs - minimal and elegant */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gold ring gradient */}
          <linearGradient id="ring-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#B8962B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          
          {/* Cyan ring gradient */}
          <linearGradient id="ring-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C8DC" stopOpacity="0" />
            <stop offset="40%" stopColor="#00B8CC" stopOpacity="0.1" />
            <stop offset="60%" stopColor="#00A8BC" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00C8DC" stopOpacity="0" />
          </linearGradient>

          {/* Soft glow filter */}
          <filter id="arc-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Ultra-soft glow */}
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Centered ring arcs behind logo area */}
        <g transform="translate(960, 540)">
          {/* Large outer arc - top right */}
          <motion.path
            d="M 200 -420 A 450 450 0 0 1 450 -100"
            fill="none"
            stroke="url(#ring-gold)"
            strokeWidth="0.8"
            strokeLinecap="round"
            filter="url(#arc-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.3, ease: 'easeOut' }}
          />
          
          {/* Large outer arc - bottom left */}
          <motion.path
            d="M -450 100 A 450 450 0 0 1 -200 420"
            fill="none"
            stroke="url(#ring-gold)"
            strokeWidth="0.6"
            strokeLinecap="round"
            filter="url(#arc-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.6, ease: 'easeOut' }}
          />

          {/* Medium arc - right side */}
          <motion.path
            d="M 320 -200 A 380 380 0 0 1 320 200"
            fill="none"
            stroke="url(#ring-cyan)"
            strokeWidth="1"
            strokeLinecap="round"
            filter="url(#arc-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          />

          {/* Medium arc - left side */}
          <motion.path
            d="M -320 250 A 380 380 0 0 1 -350 -150"
            fill="none"
            stroke="url(#ring-cyan)"
            strokeWidth="0.8"
            strokeLinecap="round"
            filter="url(#arc-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
          />

          {/* Inner subtle arc - top */}
          <motion.path
            d="M -180 -280 A 320 320 0 0 1 180 -280"
            fill="none"
            stroke="url(#ring-gold)"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.8, delay: 1, ease: 'easeOut' }}
          />

          {/* Inner subtle arc - bottom */}
          <motion.path
            d="M 150 300 A 320 320 0 0 1 -150 300"
            fill="none"
            stroke="url(#ring-gold)"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.8, delay: 1.2, ease: 'easeOut' }}
          />

          {/* Dashed orbit ring - very subtle */}
          <motion.circle
            cx="0"
            cy="0"
            r="500"
            fill="none"
            stroke="url(#ring-gold)"
            strokeWidth="0.3"
            strokeDasharray="8 60 15 80 10 100"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.25, rotate: 360 }}
            transition={{ 
              opacity: { duration: 2, delay: 1.5 },
              rotate: { duration: 180, repeat: Infinity, ease: 'linear' }
            }}
          />
        </g>
      </svg>

      {/* Circuit patterns - very subtle, logo-inspired */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.06 }}
      >
        <defs>
          <linearGradient id="circuit-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C8DC" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00A0B0" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="circuit-fade-lr" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C8DC" stopOpacity="0" />
            <stop offset="50%" stopColor="#00C8DC" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00C8DC" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="circuit-fade-tb" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00C8DC" stopOpacity="0" />
            <stop offset="50%" stopColor="#00C8DC" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00C8DC" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left edge circuit cluster */}
        <g className="circuit-left">
          <motion.path 
            d="M 0 280 L 120 280 L 120 340 L 80 340" 
            fill="none" 
            stroke="url(#circuit-cyan)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
          <motion.circle cx="120" cy="280" r="3" fill="#00C8DC"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
          <motion.circle cx="80" cy="340" r="2" fill="#00C8DC"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} />
          
          <motion.path 
            d="M 0 600 L 80 600 L 80 520 L 150 520 L 150 560" 
            fill="none" 
            stroke="url(#circuit-cyan)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.circle cx="80" cy="520" r="2.5" fill="#00C8DC"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />
          <motion.circle cx="150" cy="560" r="2" fill="#00C8DC"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 }} />

          <motion.path 
            d="M 0 820 L 60 820 L 60 780 L 100 780" 
            fill="none" 
            stroke="url(#circuit-cyan)" 
            strokeWidth="0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 1.3 }}
          />
        </g>

        {/* Right edge circuit cluster */}
        <g className="circuit-right">
          <motion.path 
            d="M 1920 320 L 1800 320 L 1800 380 L 1850 380" 
            fill="none" 
            stroke="url(#circuit-cyan)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          />
          <motion.circle cx="1800" cy="320" r="3" fill="#00C8DC"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.3 }} />
          
          <motion.path 
            d="M 1920 550 L 1820 550 L 1820 620 L 1870 620" 
            fill="none" 
            stroke="url(#circuit-cyan)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 1.1 }}
          />
          <motion.circle cx="1820" cy="550" r="2.5" fill="#00C8DC"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7 }} />

          <motion.path 
            d="M 1920 750 L 1860 750 L 1860 700 L 1780 700 L 1780 730" 
            fill="none" 
            stroke="url(#circuit-cyan)" 
            strokeWidth="0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.4 }}
          />
          <motion.circle cx="1860" cy="700" r="2" fill="#00C8DC"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2 }} />
        </g>

        {/* Bottom edge subtle circuits */}
        <g className="circuit-bottom">
          <motion.path 
            d="M 300 1080 L 300 1000 L 380 1000 L 380 1030" 
            fill="none" 
            stroke="url(#circuit-cyan)" 
            strokeWidth="0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
          <motion.path 
            d="M 1600 1080 L 1600 1020 L 1520 1020" 
            fill="none" 
            stroke="url(#circuit-cyan)" 
            strokeWidth="0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, delay: 1.7 }}
          />
        </g>

        {/* Top edge subtle circuits */}
        <g className="circuit-top">
          <motion.path 
            d="M 400 0 L 400 60 L 460 60" 
            fill="none" 
            stroke="url(#circuit-cyan)" 
            strokeWidth="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          />
          <motion.path 
            d="M 1500 0 L 1500 50 L 1440 50 L 1440 80" 
            fill="none" 
            stroke="url(#circuit-cyan)" 
            strokeWidth="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 2 }}
          />
        </g>
      </svg>

      {/* Ambient particles */}
      <AmbientParticles />

      {/* Center spotlight - very subtle */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 40% 35% at 50% 48%, 
              rgba(212, 175, 55, 0.02) 0%, 
              transparent 60%
            )
          `,
        }}
      />

      {/* Cinematic vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 75% at 50% 50%, 
              transparent 25%, 
              rgba(3, 12, 18, 0.5) 65%,
              rgba(2, 8, 12, 0.85) 100%
            )
          `,
        }}
      />

      {/* Top gradient blend */}
      <div 
        className="absolute top-0 left-0 right-0 h-40"
        style={{
          background: 'linear-gradient(180deg, rgba(3, 12, 18, 0.7) 0%, transparent 100%)',
        }}
      />

      {/* Bottom gradient transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-56"
        style={{
          background: 'linear-gradient(0deg, #030a10 0%, rgba(3, 10, 16, 0.9) 40%, transparent 100%)',
        }}
      />
    </div>
  )
}
