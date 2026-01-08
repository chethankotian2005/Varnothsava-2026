'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
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
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden bg-forest-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900/50 to-forest-950" />
      
      {/* Mandala-inspired decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-gold-800/20"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute inset-12 rounded-full border border-cyan-500/10"
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-24 rounded-full border border-gold-800/30"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-36 rounded-full border border-cyan-500/10"
        />
        
        {/* Pulsing core */}
        <div className="absolute inset-48 rounded-full bg-gradient-radial from-gold-950/20 via-transparent to-transparent animate-pulse" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-950/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-900/50 border border-gold-800/30 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-gold-700 text-sm font-mono tracking-wider uppercase">Limited Seats Available</span>
            <Sparkles className="w-4 h-4 text-gold-950" />
          </motion.div>

          {/* Main headline */}
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-forest-100">Ready to Make</span>
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gold-800 via-gold-700 to-gold-950 bg-clip-text text-transparent">
                Your Mark?
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold-800 via-gold-700 to-gold-950 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link 
              href="/register" 
              className="btn-liquid-gold text-lg group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Register Now — It&apos;s Free to Start</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              href="/events" 
              className="btn-circuit text-lg"
            >
              <span>Browse Events</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Urgency text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <p className="text-forest-400 text-sm flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-gold-800 animate-pulse" />
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
