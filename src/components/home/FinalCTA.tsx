'use client'

import { useRef, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight, Sparkles, Calendar, MapPin, Users, Zap, Trophy } from 'lucide-react'

const highlights = [
  { icon: Calendar, label: 'March 11-14, 2026' },
  { icon: MapPin, label: 'SMVITM Campus, Udupi' },
  { icon: Users, label: '5000+ Participants' },
]

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-28 lg:py-36 relative overflow-hidden">
      {/* Lighter overlay for better balance */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      
      {/* Ritual altar - sacred gold radiance from center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(201,162,39,0.06)_0%,transparent_60%)]" />
      
      {/* Stone altar inner shadow - deepest, most sacred */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 40px 80px -20px rgba(5, 10, 8, 0.7), inset 0 -40px 80px -20px rgba(5, 10, 8, 0.7)'
      }} />
      
      {/* Gold ritual line at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-800/50 to-transparent" />
      
      {/* Mandala-inspired decorative circles - slower, ceremonial rotation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-40">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-gold-900/30"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute inset-12 rounded-full border border-cyan-900/15"
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-24 rounded-full border border-gold-900/25"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute inset-36 rounded-full border border-cyan-900/10"
        />
        
        {/* Subtle sacred glow core - no pulse, steady presence */}
        <div className="absolute inset-48 rounded-full bg-gradient-radial from-gold-950/15 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500/20 border border-gold-500/50 mb-8 shadow-lg shadow-gold-900/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            <span className="text-gold-300 text-sm font-semibold tracking-wide" style={{
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.9)'
            }}>Limited Seats Available</span>
          </motion.div>

          {/* Main headline - clean and decisive */}
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] text-monumental" style={{
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.95), 0 8px 24px rgba(0, 0, 0, 0.8)'
          }}>
            <span className="text-white">Ready to Make</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent" style={{
              textShadow: 'none'
            }}>
              Your Mark?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed font-medium" style={{
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.95), 0 4px 16px rgba(0, 0, 0, 0.8)'
          }}>
            Join <span className="text-white font-bold">5000+ participants</span> from across India. 
            Compete, Connect, and Create memories that last a lifetime.
          </p>
          
          {/* Prize Highlight - Enhanced with Trophy Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-gold-500/20 border-2 border-gold-500/60 mb-8 backdrop-blur-sm shadow-lg shadow-gold-900/40"
          >
            <Trophy className="w-8 h-8 text-gold-400 fill-gold-600/40" />
            <div className="text-left">
              <div className="text-sm text-gold-300 font-mono uppercase tracking-wider font-semibold">Total Prize Pool</div>
              <div className="text-3xl font-display font-bold text-gold-400" style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 0 25px rgba(255, 215, 0, 0.5)'
              }}>₹10 Lakhs + Trophies</div>
            </div>
            <Trophy className="w-8 h-8 text-gold-400 fill-gold-600/40" />
          </motion.div>

          {/* Event highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-gray-900/80 border border-gold-600/40 hover:border-gold-500 transition-all duration-300 hover:shadow-lg hover:shadow-gold-600/30"
              >
                <item.icon 
                  className="w-5 h-5 text-gold-400" 
                  style={{ filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.6))' }}
                />
                <span className="text-gray-200 text-sm font-semibold" style={{
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.9)'
                }}>{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
            <Link 
              href="/register" 
              className="btn-liquid-gold text-lg sm:text-xl group relative overflow-hidden focus-ring min-w-[300px] text-center shadow-[0_0_25px_rgba(212,175,55,0.35)] md:shadow-[0_0_50px_rgba(212,175,55,0.5)] border-2 border-gold-800/60"
              aria-label="Register for Varnothsava 2026 - Free to start"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" aria-hidden="true" />
                <span>Register Now — It&apos;s Free to Start</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>
            
            <Link 
              href="/events" 
              className="btn-circuit text-base sm:text-lg focus-ring min-w-[180px] text-center border-2 border-gold-800/40 hover:border-gold-700"
              aria-label="Browse all events"
            >
              <span>Browse Events</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
          
          {/* Reassurance microcopy - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900/60 border border-gold-600/40 rounded-lg px-6 py-3 inline-flex items-center gap-2 mb-8 backdrop-blur-sm shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <p className="text-gray-200 text-base font-semibold" style={{
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.9)'
            }}>Takes less than 2 minutes</p>
          </motion.div>

          {/* Urgency text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <p className="text-gray-300 text-sm flex items-center justify-center gap-2 font-medium" style={{
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.9)'
            }}>
              <span className="inline-block w-2 h-2 rounded-full bg-gold-500 animate-pulse" aria-hidden="true" />
              Registration closes March 9, 2026
            </p>
            <p className="text-cyan-400 text-sm font-mono font-semibold" style={{
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.9)'
            }}>
              🎉 Join thousands of students from across India
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
