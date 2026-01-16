'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { Users, Sparkles, Mail, ArrowRight } from 'lucide-react'

const sponsors = {
  title: [
    { name: 'TechCorp', tier: 'Title Sponsor' },
  ],
  platinum: [
    { name: 'InnovateTech', tier: 'Platinum' },
    { name: 'FutureWorks', tier: 'Platinum' },
  ],
  gold: [
    { name: 'CodeSpace', tier: 'Gold' },
    { name: 'DataDrive', tier: 'Gold' },
    { name: 'CloudNine', tier: 'Gold' },
  ],
}

// Animated sponsor card component
function SponsorCard({ name, size, variant }: { name: string, size: 'lg' | 'md' | 'sm', variant: 'title' | 'platinum' | 'gold' }) {
  // Responsive size classes - max 120px width on mobile for sm cards
  const sizeClasses = {
    lg: 'w-full max-w-[288px] h-28 md:h-32 md:scale-105',
    md: 'w-full max-w-[224px] h-20 md:h-24',
    sm: 'w-full max-w-[120px] h-16 md:max-w-[176px] md:h-20',
  }
  
  // Premium gradient styles for each tier - ACTIVE, not greyed out
  const variantClasses = {
    title: 'bg-gradient-to-br from-[rgba(255,215,120,0.22)] via-[rgba(255,200,90,0.18)] to-[rgba(255,180,60,0.14)] border-[rgba(255,215,120,0.7)] hover:border-[rgba(255,215,120,0.9)] shadow-[0_18px_45px_rgba(255,200,80,0.25)] hover:shadow-[0_22px_55px_rgba(255,200,80,0.35)]',
    platinum: 'bg-gradient-to-br from-[rgba(220,220,230,0.18)] via-[rgba(200,200,210,0.14)] to-[rgba(180,180,195,0.12)] border-[rgba(220,220,220,0.6)] hover:border-[rgba(240,240,240,0.8)] shadow-[0_14px_36px_rgba(200,200,200,0.15)] hover:shadow-[0_18px_42px_rgba(220,220,220,0.22)]',
    gold: 'bg-gradient-to-br from-[rgba(255,200,90,0.18)] via-[rgba(255,180,60,0.14)] to-[rgba(255,160,40,0.10)] border-[rgba(255,200,90,0.45)] hover:border-[rgba(255,200,90,0.7)] shadow-[0_10px_28px_rgba(255,180,60,0.12)] hover:shadow-[0_14px_36px_rgba(255,180,60,0.20)]',
  }
  
  const textClasses = {
    title: 'text-[#FFD36A] text-xl md:text-2xl font-display font-bold drop-shadow-[0_2px_4px_rgba(255,200,80,0.3)]',
    platinum: 'text-[#E8E8EC] text-base md:text-lg font-semibold drop-shadow-[0_1px_2px_rgba(200,200,200,0.3)]',
    gold: 'text-[#FFD36A] text-sm md:text-base font-medium drop-shadow-[0_1px_2px_rgba(255,180,60,0.3)]',
  }

  // Ring colors for focus states
  const ringClasses = {
    title: 'focus-within:ring-[rgba(255,215,120,0.6)]',
    platinum: 'focus-within:ring-[rgba(220,220,220,0.5)]',
    gold: 'focus-within:ring-[rgba(255,200,90,0.5)]',
  }

  return (
    <motion.div
      whileHover={{ scale: variant === 'title' ? 1.06 : 1.04, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`
        ${sizeClasses[size]} 
        rounded-xl md:rounded-2xl border-2 backdrop-blur-md
        ${variantClasses[variant]}
        flex items-center justify-center
        relative overflow-hidden group cursor-pointer
        transition-all duration-300
        focus-within:ring-2 ${ringClasses[variant]}
        opacity-100
        touch-manipulation
      `}
      tabIndex={0}
      role="article"
      aria-label={`${name} - ${variant} sponsor`}
    >
      {/* Subtle shimmer effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
      
      {/* Logo / Name - centered */}
      <span className={textClasses[variant]}>{name}</span>
    </motion.div>
  )
}

export default function SponsorsPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 relative overflow-hidden">
      {/* Heavy cinematic overlay - shows only stone texture */}
      <div className="absolute inset-0 bg-forest-950/82 backdrop-blur-[1px]" />
      
      {/* Stone hall for honored patrons */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 25px 50px -15px rgba(5, 13, 10, 0.5), inset 0 -25px 50px -15px rgba(5, 13, 10, 0.5)'
      }} />
      
      {/* Carved stone accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/35 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/35 to-transparent" />
      
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-950/6 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-950/4 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-900/50 border border-gold-800/30 mb-6"
          >
            <Users className="w-4 h-4 text-gold-950" />
            <span className="text-gold-700 text-sm font-mono tracking-wider uppercase text-engraved">Our Partners</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-forest-100 mb-6 my-10 text-monumental">
            Powered By{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 via-gold-700 to-gold-950">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-lg text-forest-300 max-w-2xl mx-auto">
            Backed by top companies who believe in nurturing young talent and innovation.
          </p>
        </motion.div>

        {/* Title Sponsor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[rgba(255,215,120,0.6)]" />
            <span className="text-[#FFD36A] text-sm font-mono tracking-[0.22em] uppercase font-semibold">Title Sponsor</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[rgba(255,215,120,0.6)]" />
          </div>
          <div className="flex justify-center">
            <div className="relative">
              {/* Premium glow effect for title sponsor */}
              <div className="absolute -inset-6 bg-[rgba(255,200,80,0.15)] rounded-3xl blur-2xl" />
              <div className="absolute -inset-3 bg-[rgba(255,215,120,0.08)] rounded-2xl blur-xl" />
              <SponsorCard name="TechCorp" size="lg" variant="title" />
            </div>
          </div>
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[rgba(220,220,230,0.6)]" />
            <span className="text-[#E8E8EC] text-sm font-mono tracking-[0.22em] uppercase font-semibold">Platinum Partners</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[rgba(220,220,230,0.6)]" />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.platinum.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <SponsorCard name={sponsor.name} size="md" variant="platinum" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[rgba(255,200,90,0.5)]" />
            <span className="text-[#FFD36A] text-sm font-mono tracking-[0.22em] uppercase font-semibold">Gold Partners</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[rgba(255,200,90,0.5)]" />
          </div>
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex justify-center"
              >
                <SponsorCard name={sponsor.name} size="sm" variant="gold" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block bg-forest-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-800/20">
            <Sparkles className="w-8 h-8 text-gold-950 mx-auto mb-4" aria-hidden="true" />
            <p className="text-forest-100 font-display text-xl mb-2">Interested in partnering with us?</p>
            <p className="text-forest-300 text-sm mb-6">Join our roster of esteemed sponsors</p>
            <a
              href="mailto:sponsors@varnothsava.in"
              className="btn-liquid-gold inline-flex items-center gap-2 group focus-ring"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              <span>sponsors@varnothsava.in</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
