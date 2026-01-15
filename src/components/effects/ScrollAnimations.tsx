'use client'

import { useEffect } from 'react'

function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')

          // Stagger children if they exist
          const children = entry.target.querySelectorAll('[data-stagger]')
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in')
            }, index * 100)
          })
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('[data-animate]')
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}

export default ScrollAnimations
