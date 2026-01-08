'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Youtube, Mail, MapPin, Phone, Heart, ArrowUpRight, Sparkles } from 'lucide-react'

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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-800/50 to-transparent" />
      
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-950/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
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
            <p className="text-forest-300 text-sm mb-6 max-w-xs leading-relaxed">
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
                  className={`w-12 h-12 rounded-xl bg-forest-900/50 border border-gold-800/20 flex items-center justify-center text-forest-300 ${social.color} hover:text-white hover:border-transparent transition-all duration-300 focus-ring`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon size={20} aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-gold-950 font-display font-semibold text-lg mb-5 flex items-center gap-2">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Explore
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-forest-300 hover:text-gold-950 transition-colors text-sm flex items-center gap-1 group py-1 focus-ring rounded"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-gold-950 font-display font-semibold text-lg mb-5">About</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-forest-300 hover:text-gold-950 transition-colors text-sm flex items-center gap-1 group py-1 focus-ring rounded"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold-950 font-display font-semibold text-lg mb-5">Contact</h3>
            <div className="space-y-4 text-sm text-forest-300">
              <motion.a 
                href="https://maps.google.com" 
                target="_blank"
                className="flex items-start space-x-3 group hover:text-gold-700 transition-colors"
                whileHover={{ x: 3 }}
              >
                <div className="w-9 h-9 rounded-lg bg-forest-800/50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-cyan-glow" />
                </div>
                <span className="pt-1.5">SMVITM, Bantakal, Udupi District, Karnataka - 574115</span>
              </motion.a>
              <motion.a 
                href="tel:+919876543210" 
                className="flex items-center space-x-3 group hover:text-gold-700 transition-colors"
                whileHover={{ x: 3 }}
              >
                <div className="w-9 h-9 rounded-lg bg-forest-800/50 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-cyan-glow" />
                </div>
                <span>+91 98765 43210</span>
              </motion.a>
              <motion.a 
                href="mailto:varnothsava@smvitm.ac.in" 
                className="flex items-center space-x-3 group hover:text-gold-700 transition-colors"
                whileHover={{ x: 3 }}
              >
                <div className="w-9 h-9 rounded-lg bg-forest-800/50 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-gold-950" />
                </div>
                <span>varnothsava@smvitm.ac.in</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gold-800/20 bg-forest-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-forest-300">
            <p className="flex items-center gap-1">
              © 2026 Varnothsava, SMVITM. Made with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" aria-label="love" />{' '}
              in Udupi
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6" aria-label="Legal links">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-gold-950 transition-colors py-1 px-2 focus-ring rounded text-forest-300"
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
