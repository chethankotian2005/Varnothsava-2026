'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface PremiumHeroTitleProps {
  text: string
  className?: string
}

export default function PremiumHeroTitle({ text, className = '' }: PremiumHeroTitleProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative inline-block"
      initial={{
        y: 30,
        scale: 0.95,
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
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {/* Main title text */}
      <motion.h1
        className={`relative z-10 ${className}`}
        initial={{ letterSpacing: '0.08em' }}
        animate={{ 
          letterSpacing: isHovered ? '0.02em' : '0em',
          y: isHovered ? -2 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
        style={{
          willChange: 'transform, letter-spacing',
        }}
      >
        {text}
      </motion.h1>

      {/* Neon sweep effect - pseudo element alternative */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.35) 45%, rgba(6, 182, 212, 0.4) 50%, rgba(6, 182, 212, 0.35) 55%, transparent 100%)',
            width: '40%',
          }}
          initial={{ x: '-100%' }}
          animate={{ x: '300%' }}
          transition={{
            delay: 0.8,
            duration: 1.2,
            ease: 'linear',
          }}
        />
      </motion.div>
    </motion.div>
  )
}
