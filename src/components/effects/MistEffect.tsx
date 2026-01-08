'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function MistEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-0 left-0 right-0 h-64 md:h-80 pointer-events-none z-10 overflow-hidden"
    >
      {/* Base mist layer - always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />
      
      {/* Animated mist layer 1 - slowest, largest */}
      <motion.div
        className="mist-layer absolute -bottom-10 left-0 right-0 h-48"
        style={{ 
          background: 'radial-gradient(ellipse 200% 100% at 50% 100%, rgba(5,22,18,0.9) 0%, transparent 60%)',
        }}
        animate={{
          x: [0, 40, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Animated mist layer 2 - medium speed */}
      <motion.div
        className="mist-layer absolute -bottom-5 left-0 right-0 h-40"
        style={{ 
          background: 'radial-gradient(ellipse 150% 100% at 30% 100%, rgba(5,22,18,0.7) 0%, transparent 50%)',
        }}
        animate={{
          x: [-30, 30, -30],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Animated mist layer 3 - fastest, smallest */}
      <motion.div
        className="mist-layer absolute bottom-0 left-0 right-0 h-32"
        style={{ 
          background: 'radial-gradient(ellipse 120% 100% at 70% 100%, rgba(5,22,18,0.6) 0%, transparent 40%)',
        }}
        animate={{
          x: [20, -40, 20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle emerald glow in mist */}
      <motion.div
        className="absolute bottom-0 left-1/4 right-1/4 h-20"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 100%, rgba(6,95,70,0.15) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating mist wisps */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 h-24 w-48 md:w-64"
          style={{
            left: `${10 + i * 15}%`,
            background: 'radial-gradient(ellipse 100% 100% at 50% 80%, rgba(5,22,18,0.5) 0%, transparent 60%)',
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Gold dust in mist */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute w-1 h-1 rounded-full bg-gold-950/50"
          style={{
            left: `${5 + i * 8}%`,
            bottom: `${20 + (i % 5) * 15}px`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + (i % 4),
            delay: i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
