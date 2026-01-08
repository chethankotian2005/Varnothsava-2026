'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// Subtle ambient particles for depth
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
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.15 + 0.03,
      duration: Math.random() * 25 + 30,
      delay: Math.random() * 15,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
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
            boxShadow: `0 0 ${p.size * 3}px ${p.color}${p.opacity * 0.3})`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 5, -5, 0],
            opacity: [p.opacity, p.opacity * 1.2, p.opacity],
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
      {/* Base image layer */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Darkening overlay for text contrast */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'rgba(2, 8, 12, 0.35)',
        }}
      />

      {/* Soft blue/teal enhancement overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(3, 15, 25, 0.25) 100%)
          `,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Subtle gold glow on circular arcs area */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 45% at 50% 48%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200, 165, 45, 0.02) 0%, transparent 60%)
          `,
        }}
      />

      {/* Cyan circuit pattern enhancement - very subtle */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 40% 30% at 20% 40%, rgba(0, 200, 220, 0.025) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 80% 60%, rgba(0, 180, 210, 0.02) 0%, transparent 50%)
          `,
        }}
      />

      {/* Vignette effect - draws focus to center */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 75% 65% at 50% 50%, 
              transparent 20%, 
              rgba(2, 8, 12, 0.4) 60%,
              rgba(1, 5, 8, 0.75) 100%
            )
          `,
        }}
      />

      {/* Center clarity zone - keep clean for content */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 35% 30% at 50% 45%, 
              rgba(255, 255, 255, 0.015) 0%, 
              transparent 70%
            )
          `,
        }}
      />

      {/* Ambient particles */}
      <AmbientParticles />

      {/* Top edge blend */}
      <div 
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(180deg, rgba(2, 8, 12, 0.5) 0%, transparent 100%)',
        }}
      />

      {/* Bottom gradient transition for content below */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(0deg, #020810 0%, rgba(2, 8, 16, 0.85) 50%, transparent 100%)',
        }}
      />
    </div>
  )
}
