'use client'

import { useEffect } from 'react'

function SmoothScroll() {
  useEffect(() => {
    // Lenis smooth scroll
    let lenis: any

    const initSmoothScroll = async () => {
      const Lenis = (await import('lenis')).default

      lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.2,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.08,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initSmoothScroll()

    // Parallax effect on scroll
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('[data-parallax]')

      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '0.5')
        const rect = el.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const yPos = -(scrolled * speed)

        ;(el as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      lenis?.destroy()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}

export default SmoothScroll
