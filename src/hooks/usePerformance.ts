'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * Hook for optimized scroll-triggered animations
 * Only runs animations when elements are visible
 */
export function useOptimizedAnimation(options: {
  once?: boolean
  margin?: string
  amount?: number | 'some' | 'all'
} = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: options.once ?? false,
    margin: options.margin ?? '100px',
    amount: options.amount ?? 0.3,
  })

  return { ref, isInView }
}

/**
 * Detect device performance level
 * Helps adjust animation complexity based on device capabilities
 */
export function useDevicePerformance() {
  const [performance, setPerformance] = useState<'high' | 'medium' | 'low'>('high')

  useEffect(() => {
    // Check device capabilities
    const cores = navigator.hardwareConcurrency || 4
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4
    
    // Low-end device detection
    if (cores <= 2 || memory <= 2) {
      setPerformance('low')
    } else if (cores <= 4 || memory <= 4) {
      setPerformance('medium')
    }

    // Check for power saving mode
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (connection?.saveData) {
      setPerformance('low')
    }
  }, [])

  return performance
}

/**
 * Delay heavy animations until page is loaded
 */
export function useDelayedAnimations(delay: number = 500) {
  const [animationsEnabled, setAnimationsEnabled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationsEnabled(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return animationsEnabled
}

/**
 * Use requestAnimationFrame for smooth timer updates
 */
export function useRAFTimer(callback: () => void, interval: number = 1000) {
  const rafRef = useRef<number | null>(null)
  const lastUpdateRef = useRef<number>(0)
  const callbackRef = useRef(callback)

  // Keep callback ref updated
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (timestamp - lastUpdateRef.current >= interval) {
        callbackRef.current()
        lastUpdateRef.current = timestamp
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [interval])
}

/**
 * Reduce animation quality on scroll for better performance
 */
export function useReduceOnScroll() {
  const [isScrolling, setIsScrolling] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return isScrolling
}
