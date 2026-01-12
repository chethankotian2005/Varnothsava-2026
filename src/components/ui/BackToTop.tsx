'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-forest-800 to-forest-900 border border-gold-800/50 flex items-center justify-center z-40 shadow-2xl hover:shadow-gold-700/40 transition-all duration-300 group"
          style={{
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)',
          }}
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <ArrowUp 
            className="w-5 h-5 text-gold-600 group-hover:text-gold-500 transition-colors" 
            style={{ filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.5))' }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
