'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Floating particles for ambient effect
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    opacity: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 10,
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
            background: `radial-gradient(circle, rgba(0, 200, 220, ${p.opacity}) 0%, transparent 70%)`,
            boxShadow: `0 0 ${p.size * 2}px rgba(0, 200, 220, ${p.opacity * 0.5})`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
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
      {/* Base gradient - Dark teal to deep blue */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, 
              #051a1a 0%, 
              #0a2a2a 25%, 
              #0d1f35 50%, 
              #0a1a2a 75%, 
              #051520 100%
            )
          `,
        }}
      />

      {/* Ambient glow spots */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 30% 20%, rgba(0, 180, 200, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 70% 80%, rgba(0, 150, 180, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 80% 30%, rgba(212, 175, 55, 0.04) 0%, transparent 40%),
            radial-gradient(ellipse 30% 20% at 20% 70%, rgba(212, 175, 55, 0.03) 0%, transparent 40%)
          `,
        }}
      />

      {/* Concentric rings - inspired by logo's golden ring */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1000 1000" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient for rings */}
          <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#B8962B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.12" />
          </linearGradient>
          
          {/* Cyan accent gradient */}
          <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C8DC" stopOpacity="0" />
            <stop offset="50%" stopColor="#00C8DC" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00C8DC" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow-subtle">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Partial concentric rings - abstract incomplete arcs */}
        <g transform="translate(500, 500)">
          {/* Outer partial ring 1 */}
          <motion.path
            d="M 0 -380 A 380 380 0 0 1 330 190"
            fill="none"
            stroke="url(#ring-gradient)"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          {/* Outer partial ring 2 */}
          <motion.path
            d="M -200 340 A 380 380 0 0 1 -380 0"
            fill="none"
            stroke="url(#ring-gradient)"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />

          {/* Middle ring - larger arc */}
          <motion.path
            d="M 280 -180 A 320 320 0 0 1 280 180"
            fill="none"
            stroke="url(#ring-gradient)"
            strokeWidth="0.8"
            strokeLinecap="round"
            filter="url(#glow-subtle)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.3 }}
          />

          {/* Middle ring - opposite side */}
          <motion.path
            d="M -280 200 A 320 320 0 0 1 -100 -300"
            fill="none"
            stroke="url(#ring-gradient)"
            strokeWidth="0.6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
          />

          {/* Inner ring fragment 1 */}
          <motion.path
            d="M 180 -130 A 220 220 0 0 1 200 100"
            fill="none"
            stroke="url(#cyan-gradient)"
            strokeWidth="1"
            strokeLinecap="round"
            filter="url(#glow-subtle)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 1 }}
          />

          {/* Inner ring fragment 2 */}
          <motion.path
            d="M -150 -160 A 220 220 0 0 0 -200 80"
            fill="none"
            stroke="url(#cyan-gradient)"
            strokeWidth="0.8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />

          {/* Small accent arcs */}
          <motion.circle
            cx="0"
            cy="0"
            r="420"
            fill="none"
            stroke="url(#ring-gradient)"
            strokeWidth="0.3"
            strokeDasharray="20 80 40 100"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.4, rotate: 360 }}
            transition={{ 
              opacity: { duration: 1, delay: 1.5 },
              rotate: { duration: 120, repeat: Infinity, ease: 'linear' }
            }}
          />
        </g>
      </svg>

      {/* Circuit patterns - inspired by logo's circuitry */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.08]" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C8DC" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00A0B0" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Left side circuit patterns */}
        <g className="circuit-left" opacity="0.6">
          {/* Horizontal lines */}
          <motion.line 
            x1="0" y1="200" x2="150" y2="200" 
            stroke="url(#circuit-grad)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.line 
            x1="150" y1="200" x2="150" y2="280" 
            stroke="url(#circuit-grad)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
          <motion.line 
            x1="150" y1="280" x2="80" y2="280" 
            stroke="url(#circuit-grad)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          />
          
          {/* Circuit nodes */}
          <motion.circle 
            cx="150" cy="200" r="3" 
            fill="#00C8DC"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ delay: 1 }}
          />
          <motion.circle 
            cx="80" cy="280" r="2" 
            fill="#00C8DC"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ delay: 1.5 }}
          />

          {/* Lower left circuit */}
          <motion.path 
            d="M 0 500 L 100 500 L 100 450 L 180 450" 
            fill="none" 
            stroke="url(#circuit-grad)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <motion.circle 
            cx="100" cy="450" r="2.5" 
            fill="#00C8DC"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ delay: 1.8 }}
          />
        </g>

        {/* Right side circuit patterns */}
        <g className="circuit-right" opacity="0.5">
          <motion.line 
            x1="1200" y1="300" x2="1050" y2="300" 
            stroke="url(#circuit-grad)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
          <motion.line 
            x1="1050" y1="300" x2="1050" y2="380" 
            stroke="url(#circuit-grad)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          <motion.line 
            x1="1050" y1="380" x2="1120" y2="380" 
            stroke="url(#circuit-grad)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          />
          
          <motion.circle 
            cx="1050" cy="300" r="3" 
            fill="#00C8DC"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ delay: 1.2 }}
          />

          {/* Upper right circuit */}
          <motion.path 
            d="M 1200 150 L 1080 150 L 1080 220 L 1000 220" 
            fill="none" 
            stroke="url(#circuit-grad)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.circle 
            cx="1080" cy="150" r="2" 
            fill="#00C8DC"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ delay: 1.5 }}
          />
        </g>

        {/* Bottom circuit accents */}
        <g className="circuit-bottom" opacity="0.4">
          <motion.path 
            d="M 400 800 L 400 720 L 500 720 L 500 750" 
            fill="none" 
            stroke="url(#circuit-grad)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 1.2 }}
          />
          <motion.path 
            d="M 700 800 L 700 740 L 800 740" 
            fill="none" 
            stroke="url(#circuit-grad)" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.4 }}
          />
        </g>
      </svg>

      {/* Subtle cultural silhouettes - extremely faint */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.03]" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="culture-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Abstract dancer silhouette - left */}
        <motion.path
          d="M 80 600 Q 100 550 120 580 Q 140 520 130 480 Q 150 440 140 400 
             Q 160 420 170 390 Q 150 360 160 340 Q 140 320 150 300
             Q 130 310 120 280 Q 110 300 100 290"
          fill="none"
          stroke="url(#culture-fade)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 2 }}
        />

        {/* Abstract musician silhouette - right */}
        <motion.path
          d="M 1100 550 Q 1080 500 1090 460 Q 1070 420 1085 380
             Q 1060 360 1075 330 Q 1050 340 1060 300
             Q 1040 310 1050 280"
          fill="none"
          stroke="url(#culture-fade)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 2.3 }}
        />
      </svg>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Center focus glow - subtle spotlight */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 50% 45%, 
              rgba(212, 175, 55, 0.03) 0%, 
              transparent 50%
            )
          `,
        }}
      />

      {/* Vignette for cinematic depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 50% 50%, 
              transparent 20%, 
              rgba(5, 20, 25, 0.4) 60%,
              rgba(3, 12, 15, 0.8) 100%
            )
          `,
        }}
      />

      {/* Top fade for navbar blending */}
      <div 
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(180deg, rgba(5, 20, 25, 0.6) 0%, transparent 100%)',
        }}
      />

      {/* Bottom gradient transition to content below */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(0deg, #051015 0%, rgba(5, 16, 21, 0.8) 50%, transparent 100%)',
        }}
      />
    </div>
  )
}
