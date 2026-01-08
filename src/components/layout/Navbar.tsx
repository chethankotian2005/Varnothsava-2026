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
  { name: 'Gallery', href: '/gallery', sectionId: null },
  { name: 'Team', href: '/team', sectionId: null },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled || isOpen
          ? 'bg-forest-950/95 backdrop-blur-xl border-b border-gold-900/25 shadow-2xl shadow-black/50'
          : 'bg-transparent backdrop-blur-none border-b border-transparent'
      }`}
      style={scrolled || isOpen ? {
        boxShadow: 'inset 0 -1px 0 rgba(201, 162, 39, 0.08), 0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      } : undefined}
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
                  className={`nav-link font-medium text-xs tracking-[0.15em] uppercase relative group ${
                    active ? 'active text-gold-950' : 'text-forest-300'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {/* Circuit node indicator */}
                  <span 
                    className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 transition-all duration-300 ${
                      active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <span className={`block w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(0,242,255,0.8)] ${
                      active ? 'bg-gold-950' : 'bg-cyan-glow'
                    }`} />
                    <span className={`absolute top-1.5 left-1/2 -translate-x-1/2 w-px h-2 bg-gradient-to-b to-transparent ${
                      active ? 'from-gold-950' : 'from-cyan-glow'
                    }`} />
                  </span>
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/register" 
              className="btn-liquid-gold text-xs tracking-wider focus-ring"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 text-forest-200 hover:text-gold-950 transition-colors rounded-lg focus-ring"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-forest-950/98 backdrop-blur-lg border-b border-gold-800/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link, index) => {
                const active = isLinkActive(link)
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`nav-link-mobile ${active ? 'active' : ''}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                className="pt-4"
              >
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="btn-liquid-gold w-full text-center block focus-ring"
                >
                  Register Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
