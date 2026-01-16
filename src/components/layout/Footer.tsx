'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Twitter, Youtube, Mail, MapPin, Phone, ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react'

const footerLinks = {
  explore: [
    { name: 'Events', href: '/events' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Sponsors', href: '/sponsors' },
  ],
  about: [
    { name: 'About SMVITM', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
  ],
}

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/varnothsava', color: 'hover:bg-pink-500' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/varnothsava', color: 'hover:bg-blue-500' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@varnothsava', color: 'hover:bg-red-500' },
]

// Collapsible section for mobile
function CollapsibleSection({ 
  title, 
  children, 
  icon 
}: { 
  title: string
  children: React.ReactNode
  icon?: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gold-800/20 md:border-0">
      {/* Mobile: Collapsible header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 md:py-0 md:mb-5 md:pointer-events-none min-h-[48px] md:min-h-0"
        aria-expanded={isOpen}
      >
        <h3 className="text-gold-950 font-display font-semibold text-lg flex items-center gap-2">
          {icon}
          {title}
        </h3>
        <ChevronDown 
          className={`w-5 h-5 text-gold-700 transition-transform md:hidden ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {/* Desktop: Always visible, Mobile: Collapsible */}
      <div className="hidden md:block">
        {children}
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden md:hidden pb-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950">
      {/* Carved stone border at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/40 to-transparent" />
      
      {/* Stone foundation inner shadow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 20px 40px -10px rgba(5, 10, 8, 0.6)'
      }} />
      
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-950/6 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer - 32px padding on mobile */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20">
        {/* Brand Section - Full width on mobile */}
        <div className="mb-8 md:mb-0 md:hidden">
          <Link href="/" className="flex items-center space-x-3 mb-6 group focus-ring rounded-lg p-1 -m-1" aria-label="Varnothsava 2026 - Home">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-800/50 group-hover:ring-gold-950 transition-all">
              <Image
                src="/images/logo.png"
                alt="Varnothsava 2026 Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-gold-950 font-display font-bold text-2xl block">
                Varnothsava
              </span>
              <span className="text-cyan-glow text-sm font-mono">2026</span>
            </div>
          </Link>
          <p className="text-white/85 mb-6 leading-relaxed text-[15px]">
            The grandest inter-collegiate fest of coastal Karnataka. Where heritage meets innovation, and dreams take flight.
          </p>
          
          {/* Social Links - 36x36px minimum */}
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-forest-900/50 border border-gold-800/20 flex items-center justify-center text-forest-300 ${social.color} hover:text-white hover:border-transparent transition-all duration-300 focus-ring`}
                aria-label={`Follow us on ${social.name} (opens in new tab)`}
              >
                <social.icon size={20} aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-10 lg:gap-12">
          {/* Brand - Desktop only */}
          <div className="hidden md:block lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group focus-ring rounded-lg p-1 -m-1 w-fit" aria-label="Varnothsava 2026 - Home">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-800/50 group-hover:ring-gold-950 transition-all">
                <Image
                  src="/images/logo.png"
                  alt="Varnothsava 2026 Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-gold-950 font-display font-bold text-2xl block">
                  Varnothsava
                </span>
                <span className="text-cyan-glow text-sm font-mono">2026</span>
              </div>
            </Link>
            <p className="text-white/85 mb-6 max-w-xs leading-relaxed" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              The grandest inter-collegiate fest of coastal Karnataka. Where heritage meets innovation, and dreams take flight.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-forest-900/50 border border-gold-800/20 flex items-center justify-center text-forest-300 ${social.color} hover:text-white hover:border-transparent transition-all duration-300 focus-ring`}
                  aria-label={`Follow us on ${social.name} (opens in new tab)`}
                >
                  <social.icon size={20} aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore Links - Collapsible on mobile */}
          <CollapsibleSection title="Explore" icon={<Sparkles className="w-4 h-4" aria-hidden="true" />}>
            <ul className="space-y-3" role="list">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#F4D03F] transition-colors text-[15px] md:text-sm flex items-center gap-1 group py-2 md:py-1 min-h-[44px] md:min-h-0 focus-ring rounded"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          {/* About Links - Collapsible on mobile */}
          <CollapsibleSection title="About">
            <ul className="space-y-3" role="list">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#F4D03F] transition-colors text-[15px] md:text-sm flex items-center gap-1 group py-2 md:py-1 min-h-[44px] md:min-h-0 focus-ring rounded"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          {/* Contact Info - Collapsible on mobile */}
          <CollapsibleSection title="Contact">
            <div className="space-y-4 text-[15px] md:text-sm text-white/80">
              <motion.a 
                href="https://maps.google.com/?q=SMVITM+Bantakal+Udupi" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 group hover:text-gold-700 transition-colors py-2 md:py-0 min-h-[44px] md:min-h-0"
                whileHover={{ x: 3 }}
              >
                <div className="w-10 h-10 md:w-9 md:h-9 rounded-lg bg-forest-800/50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-cyan-glow" />
                </div>
                <span className="pt-2 md:pt-1.5">SMVITM, Bantakal, Udupi District, Karnataka - 574115</span>
              </motion.a>
              
              {/* Click-to-call */}
              <motion.a 
                href="tel:+919876543210" 
                className="flex items-center space-x-3 group hover:text-gold-700 transition-colors py-2 md:py-0 min-h-[44px] md:min-h-0"
                whileHover={{ x: 3 }}
              >
                <div className="w-10 h-10 md:w-9 md:h-9 rounded-lg bg-forest-800/50 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-cyan-glow" />
                </div>
                <span>+91 98765 43210</span>
              </motion.a>
              
              {/* Click-to-email */}
              <motion.a 
                href="mailto:varnothsava@smvitm.ac.in" 
                className="flex items-center space-x-3 group hover:text-gold-700 transition-colors py-2 md:py-0 min-h-[44px] md:min-h-0"
                whileHover={{ x: 3 }}
              >
                <div className="w-10 h-10 md:w-9 md:h-9 rounded-lg bg-forest-800/50 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-gold-950" />
                </div>
                <span>varnothsava@smvitm.ac.in</span>
              </motion.a>
            </div>
          </CollapsibleSection>
        </div>
      </div>

      {/* Bottom Bar - Vertical stacking on mobile with 12px spacing */}
      <div className="relative border-t border-gold-800/20 bg-forest-900/50">
        {/* Brand whisper: subtle gold accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold-700/50 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-6">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-4 text-sm text-white/75">
            <p className="text-center md:text-left">
              © 2026 Varnothsava, SMVITM.
            </p>
            <nav className="flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:gap-4 sm:gap-6" aria-label="Legal links">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#F4D03F] transition-colors py-2 px-2 min-h-[44px] md:min-h-0 flex items-center focus-ring rounded text-white/75"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
