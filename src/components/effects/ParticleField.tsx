'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
  type: 'firefly' | 'databit'
  glowIntensity: number
}

export default function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  
  // Generate 30 gold firefly particles
  useEffect(() => {
    const goldShades = ['#FFD700', '#FFA500', '#D4AF37', '#E6BE44', '#FFCC33', '#B8860B']
    const newParticles: Particle[] = []
    
    // 30 fireflies only
    const totalParticles = 30
    
    for (let i = 0; i < totalParticles; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 4, // Slightly larger (4-8px)
        color: goldShades[Math.floor(Math.random() * goldShades.length)],
        duration: Math.random() * 10 + 10, // Slower drift (10-20s)
        delay: Math.random() * 8,
        type: 'firefly',
        glowIntensity: Math.random() * 0.6 + 0.4, // (0.4-1.0)
      })
    }
    
    setParticles(newParticles)
  }, [])

  // Track mouse position for repulsion
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <FireflyParticle
          key={particle.id}
          particle={particle}
          mousePos={mousePos}
        />
      ))}
    </div>
  )
}

// Individual particle component with repulsion
function FireflyParticle({ 
  particle, 
  mousePos 
}: { 
  particle: Particle
  mousePos: { x: number; y: number }
}) {
  const [position, setPosition] = useState({ x: particle.x, y: particle.y })
  const [repulsion, setRepulsion] = useState({ x: 0, y: 0 })
  
  // Calculate repulsion from mouse
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const particleX = (position.x / 100) * window.innerWidth
    const particleY = (position.y / 100) * window.innerHeight
    
    const dx = particleX - mousePos.x
    const dy = particleY - mousePos.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    const repulsionRadius = 120
    const maxRepulsion = 40
    
    if (distance < repulsionRadius && distance > 0) {
      const force = (1 - distance / repulsionRadius) * maxRepulsion
      const angle = Math.atan2(dy, dx)
      setRepulsion({
        x: Math.cos(angle) * force,
        y: Math.sin(angle) * force,
      })
    } else {
      setRepulsion({ x: 0, y: 0 })
    }
  }, [mousePos, position])

  const isFirefly = particle.type === 'firefly'
  
  return (
    <motion.div
      className="absolute"
      style={{
        left: `calc(${particle.x}% + ${repulsion.x}px)`,
        top: `calc(${particle.y}% + ${repulsion.y}px)`,
        width: particle.size,
        height: particle.size,
        backgroundColor: particle.color,
        borderRadius: '50%', // Always circular for gold fireflies
        // Gaussian blur for soft firefly glow
        filter: `blur(${particle.size * 0.4}px)`,
        boxShadow: `
          0 0 ${particle.size * 4}px ${particle.color}, 
          0 0 ${particle.size * 8}px ${particle.color}80,
          0 0 ${particle.size * 12}px ${particle.color}40,
          0 0 ${particle.size * 18}px ${particle.color}20
        `,
      }}
      animate={{
        opacity: [0.3, particle.glowIntensity, 0.4, particle.glowIntensity * 0.9, 0.3],
        scale: [1, 1.4, 0.95, 1.3, 1],
      }}
      transition={{
        duration: particle.duration,
        delay: particle.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
