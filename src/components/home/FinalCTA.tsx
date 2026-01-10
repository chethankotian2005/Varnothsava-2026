'use client'

import { useRef, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight, Sparkles, Calendar, MapPin, Users, Zap } from 'lucide-react'

const highlights = [
  { icon: Calendar, label: 'March 15-17, 2026' },
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
      {/* Light overlay - shows all 4 background layers for dramatic CTA */}
      <div className="absolute inset-0 bg-forest-950/55 backdrop-blur-[1px]" />
      
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-950/15 border border-gold-800/40 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-600 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-700"></span>
            </span>
            <span className="text-gold-600 text-sm font-medium tracking-wide">Limited Seats Available</span>
          </motion.div>

          {/* Main headline - clean and decisive */}
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] text-monumental">
            <span className="text-forest-50">Ready to Make</span>
            <br />
            <span className="bg-gradient-to-r from-gold-700 via-gold-600 to-gold-800 bg-clip-text text-transparent">
              Your Mark?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-forest-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join <span className="text-forest-100 font-semibold">5000+ participants</span> from across India. 
            Compete, Connect, and Create memories that last a lifetime.
          </p>

          {/* Event highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900/50 border border-gold-800/20"
              >
                <item.icon className="w-4 h-4 text-gold-950" />
                <span className="text-forest-200 text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
            <Link 
              href="/register" 
              className="btn-liquid-gold text-lg sm:text-xl group relative overflow-hidden focus-ring min-w-[300px] text-center shadow-[0_0_25px_rgba(212,175,55,0.35)] md:shadow-[0_0_50px_rgba(212,175,55,0.5)]"
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
              className="btn-circuit text-base sm:text-lg focus-ring min-w-[180px] text-center"
              aria-label="Browse all events"
            >
              <span>Browse Events</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
          
          {/* Reassurance microcopy */}
          <p className="text-forest-500 text-sm mb-8">Takes less than 2 minutes</p>

          {/* Urgency text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <p className="text-forest-300 text-sm flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-gold-800 animate-pulse" aria-hidden="true" />
              Registration closes March 10, 2026
            </p>
            <p className="text-cyan-glow text-sm font-mono">
              🎉 Early bird pricing • 20% off on all events until Feb 28
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
