'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Leaf } from 'lucide-react'

// Forest ambiance with birds chirping, gentle breeze, and nature sounds
const AMBIENT_SOUND_URL = 'https://cdn.pixabay.com/audio/2022/03/10/audio_4dedf5bf94.mp3'

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const TARGET_VOLUME = 0.12
  const FADE_DURATION = 2000 // 2 seconds
  const FADE_STEPS = 40

  // Initialize audio on mount
  useEffect(() => {
    const audio = new Audio(AMBIENT_SOUND_URL)
    audio.preload = 'auto'
    audio.loop = true
    audio.volume = 0
    audioRef.current = audio

    audio.addEventListener('canplaythrough', () => {
      setIsLoaded(true)
    })

    audio.addEventListener('error', (e) => {
      console.error('Audio failed to load:', e)
    })

    // Pause audio when tab is inactive
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current && isPlaying) {
        audioRef.current.pause()
      } else if (!document.hidden && audioRef.current && isPlaying) {
        audioRef.current.play().catch(() => {})
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current)
      }
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  // Update visibility handler when isPlaying changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current && isPlaying) {
        audioRef.current.pause()
      } else if (!document.hidden && audioRef.current && isPlaying) {
        audioRef.current.play().catch(() => {})
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isPlaying])

  const fadeIn = useCallback(() => {
    if (!audioRef.current) return

    const audio = audioRef.current
    const stepVolume = TARGET_VOLUME / FADE_STEPS
    const stepDuration = FADE_DURATION / FADE_STEPS
    let currentStep = 0

    audio.volume = 0
    audio.play().catch((err) => {
      console.error('Playback failed:', err)
      setIsPlaying(false)
    })

    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current)
    }

    fadeIntervalRef.current = setInterval(() => {
      currentStep++
      const newVolume = Math.min(stepVolume * currentStep, TARGET_VOLUME)
      audio.volume = newVolume

      if (currentStep >= FADE_STEPS) {
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current)
        }
      }
    }, stepDuration)
  }, [])

  const fadeOut = useCallback(() => {
    if (!audioRef.current) return

    const audio = audioRef.current
    const currentVolume = audio.volume
    const stepVolume = currentVolume / FADE_STEPS
    const stepDuration = FADE_DURATION / FADE_STEPS
    let currentStep = 0

    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current)
    }

    fadeIntervalRef.current = setInterval(() => {
      currentStep++
      const newVolume = Math.max(currentVolume - stepVolume * currentStep, 0)
      audio.volume = newVolume

      if (currentStep >= FADE_STEPS || newVolume <= 0) {
        audio.pause()
        audio.volume = 0
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current)
        }
      }
    }, stepDuration)
  }, [])

  const toggleSound = () => {
    if (isPlaying) {
      fadeOut()
      setIsPlaying(false)
    } else {
      fadeIn()
      setIsPlaying(true)
    }
  }

  return (
    <div className="fixed bottom-20 left-4 z-50">
      <motion.button
        onClick={toggleSound}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`
          relative flex items-center justify-center w-10 h-10 rounded-full
          transition-all duration-300 
          ${isPlaying 
            ? 'bg-forest-800/90 border-gold-700/60 text-gold-700' 
            : 'bg-forest-900/70 border-forest-700/40 text-white/50 hover:text-white/70'
          }
          border backdrop-blur-sm
          focus:outline-none focus:ring-2 focus:ring-gold-700/50
          shadow-lg
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        aria-label={isPlaying ? 'Mute ambient sound' : 'Play ambient forest sound'}
        disabled={!isLoaded}
      >
        <motion.div
          animate={isPlaying ? { rotate: [0, 5, -5, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4" />
          ) : (
            <Leaf className="w-4 h-4" />
          )}
        </motion.div>

        {/* Pulsing indicator when playing */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gold-700 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.5, 1], 
                opacity: [1, 0.5, 1] 
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          )}
        </AnimatePresence>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 
                       bg-forest-900/95 border border-forest-700/50 rounded-md
                       text-xs text-white/80 whitespace-nowrap backdrop-blur-sm
                       pointer-events-none"
          >
            {isPlaying ? '🔊 Sound On' : '🌿 Forest ambience'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
