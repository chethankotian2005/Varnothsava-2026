'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/', sectionId: 'hero' },
  { name: 'Events', href: '/events', sectionId: 'events' },
  { name: 'Schedule', href: '/schedule', sectionId: null },
  { name: 'Register', href: '/register', sectionId: null },
  { name: 'Leaderboard', href: '/leaderboard', sectionId: null },
  { name: 'Gallery', href: '/gallery', sectionId: null },
  { name: 'About', href: '/about', sectionId: null },
  { name: 'Contact', href: '/contact', sectionId: null },
]

// Section IDs on the homepage for scroll-based active state
const homeSections = ['hero', 'about', 'events', 'registration', 'leaderboard', 'sponsors', 'cta']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const pathname = usePathname()
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // IntersectionObserver for active section detection
  useEffect(() => {
    // Only run on homepage
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    // Disconnect previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the section that is most visible
      const visibleEntries = entries.filter(entry => entry.isIntersecting)
      
      if (visibleEntries.length > 0) {
        // Sort by intersection ratio and pick the most visible
        const mostVisible = visibleEntries.reduce((prev, current) => 
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        )
        setActiveSection(mostVisible.target.id)
      }
    }

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is in upper-middle of viewport
      threshold: [0, 0.25, 0.5, 0.75, 1]
    })

    // Observe all sections
    homeSections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element && observerRef.current) {
        observerRef.current.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [pathname])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Check if a nav link should be active
  const isLinkActive = useCallback((link: typeof navLinks[0]) => {
    // For non-home pages, match pathname
    if (pathname !== '/') {
      return pathname === link.href || pathname.startsWith(link.href + '/')
    }
    
    // On homepage, use section-based active state
    if (link.href === '/' && activeSection === 'hero') return true
    if (link.sectionId && activeSection === link.sectionId) return true
    if (link.href === '/events' && activeSection === 'events') return true
    
    return false
  }, [pathname, activeSection])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'bg-forest-950/70 backdrop-blur-xl border-b border-gold-900/30'
          : 'bg-forest-950/40 backdrop-blur-md border-b border-gold-900/10'
      }`}
      style={{
        boxShadow: scrolled || isOpen 
          ? 'inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)'
          : 'inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group focus-ring rounded-lg"
            aria-label="Varnothsava 2026 - Home"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden ring-2 ring-gold-800/50 transition-all duration-300 group-hover:scale-105 group-hover:ring-gold-950">
              <Image
                src="/images/logo.png"
                alt="Varnothsava 2026 Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-gold-950 font-display font-bold text-lg lg:text-xl tracking-wide">
                Varnothsava
              </span>
              <span className="text-cyan-glow font-mono text-xs tracking-widest">2026</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isLinkActive(link)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link font-medium text-sm tracking-[0.12em] uppercase relative group ${
                    active ? 'active text-gold-500' : 'text-gold-900 hover:text-gold-400'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/register" 
              className="btn-liquid-gold tracking-wider focus-ring" 
              style={{ fontSize: '14px' }}
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button - HIGHLY VISIBLE WITH CORRECT Z-INDEX */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              lg:hidden 
              relative z-[110]
              p-2.5
              min-w-[44px] min-h-[44px] 
              flex items-center justify-center
              rounded-lg
              bg-gold-500/20
              border-2 border-gold-500
              hover:bg-gold-500/30
              active:bg-gold-500/40
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-forest-950
              shadow-lg shadow-gold-900/30
            "
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-7 w-7 text-gold-400" strokeWidth={3} />
            ) : (
              <Menu className="h-7 w-7 text-gold-400" strokeWidth={3} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced with slide-in animation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay - z-index LOWER than menu panel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[98]"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            {/* Slide-in menu panel - z-index HIGHER than backdrop */}
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-b from-forest-900 via-forest-950 to-black border-l border-gold-800/30 z-[99] flex flex-col"
            >
              {/* Close button - top right */}
              <div className="flex justify-end p-4 shrink-0">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-gold-700 hover:text-gold-500 hover:bg-gold-500/10 transition-all duration-200 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
                >
                  <X size={28} strokeWidth={2.5} />
                </motion.button>
              </div>
              
              {/* Scrollable menu items */}
              <div className="flex-1 overflow-y-auto px-6 pb-4">
                <nav className="space-y-1" role="navigation" aria-label="Mobile navigation">
                  {navLinks.map((link, index) => {
                    const active = isLinkActive(link)
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-4 px-4 min-h-[52px] flex items-center text-lg font-semibold rounded-lg transition-all duration-200 ${
                            active 
                              ? 'text-gold-400 bg-gold-500/15 border-l-4 border-gold-500' 
                              : 'text-gray-200 hover:text-gold-400 hover:bg-gold-500/10 hover:pl-6 border-l-4 border-transparent'
                          }`}
                          aria-current={active ? 'page' : undefined}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>
                
                {/* Event info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.2, duration: 0.3 }}
                  className="mt-8 pt-6 border-t border-gold-800/30"
                >
                  <p className="text-gray-400 text-sm text-center">
                    March 11-14, 2026
                  </p>
                  <p className="text-gold-500 text-sm text-center font-semibold mt-1">
                    SMVITM, Udupi
                  </p>
                </motion.div>
              </div>
              
              {/* Sticky CTA Button at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="shrink-0 p-6 bg-gradient-to-t from-black via-forest-950/95 to-transparent border-t border-gold-800/20"
              >
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="btn-liquid-gold w-full text-center block text-lg py-4 min-h-[56px] flex items-center justify-center focus-ring"
                >
                  Register Now
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
