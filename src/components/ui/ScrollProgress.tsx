'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = height > 0 ? (scrolled / height) * 100 : 0
      setProgress(progress)
    }

    // Initial calculation
    updateProgress()

    // Update on scroll with passive listener for better performance
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-700 via-gold-600 to-gold-700 z-[9999] origin-left"
      style={{
        scaleX: progress / 100,
        boxShadow: '0 0 15px rgba(212, 175, 55, 0.6)',
      }}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
    />
  )
}
