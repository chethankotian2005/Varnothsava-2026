'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function FloatingActionButton() {
  const [showFAB, setShowFAB] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling past hero section (800px)
      setShowFAB(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {showFAB && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          transition={{ 
            type: 'spring', 
            stiffness: 260, 
            damping: 20 
          }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            href="/register"
            className="group relative inline-flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-gold-700 via-gold-600 to-gold-700 rounded-full font-display font-bold text-lg text-forest-950 overflow-hidden shadow-2xl hover:shadow-gold-700/60 transition-all duration-300"
            style={{
              boxShadow: '0 10px 40px rgba(212, 175, 55, 0.5)',
              backgroundSize: '200% 100%',
            }}
            aria-label="Register for Varnothsava 2026"
          >
            {/* Animated background shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'linear',
              }}
            />

            {/* Pulse ring animation */}
            <span className="absolute inset-0 rounded-full">
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-gold-600"
                animate={{
                  scale: [1, 1.4],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-gold-600"
                animate={{
                  scale: [1, 1.4],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                  ease: 'easeOut',
                }}
              />
            </span>

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Register Now</span>
            </span>

            {/* Hover effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-500 opacity-0 group-hover:opacity-100 rounded-full"
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
