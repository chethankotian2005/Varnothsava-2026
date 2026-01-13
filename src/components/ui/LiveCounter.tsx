'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

export default function LiveCounter() {
  const [registrations, setRegistrations] = useState(1847)

  useEffect(() => {
    // Simulate live registrations
    const interval = setInterval(() => {
      setRegistrations(prev => prev + Math.floor(Math.random() * 3))
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900/80 border border-gold-800/30 backdrop-blur-sm"
      style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Pulse dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>

      {/* Icon and text */}
      <Users className="w-4 h-4 text-gold-600" />
      <motion.span 
        className="text-sm md:text-base font-medium text-forest-200"
        key={registrations}
        initial={{ scale: 1.2, color: '#E8D5A3' }}
        animate={{ scale: 1, color: '#A8A090' }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-gold-600 font-bold">{registrations.toLocaleString()}</span> students registered
      </motion.span>
    </motion.div>
  )
}
