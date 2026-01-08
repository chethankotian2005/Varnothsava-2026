'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { Users, Star, Sparkles, Mail, ArrowRight } from 'lucide-react'

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
  const sizeClasses = {
    lg: 'w-72 h-32',
    md: 'w-56 h-24',
    sm: 'w-44 h-20',
  }
  
  const variantClasses = {
    title: 'bg-gradient-to-br from-gold-800/20 via-gold-700/10 to-gold-600/20 border-gold-800/40 hover:border-gold-700/60',
    platinum: 'bg-gradient-to-br from-slate-400/10 via-gray-500/10 to-slate-400/10 border-gray-400/30 hover:border-gray-300/50',
    gold: 'bg-gradient-to-br from-gold-700/10 via-gold-600/10 to-gold-700/10 border-gold-700/20 hover:border-gold-600/40',
  }
  
  const textClasses = {
    title: 'text-gold-950 text-2xl font-display font-bold',
    platinum: 'text-gray-200 text-lg font-semibold',
    gold: 'text-gold-700 text-base font-medium',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`
        ${sizeClasses[size]} 
        rounded-2xl border backdrop-blur-sm
        ${variantClasses[variant]}
        flex items-center justify-center
        relative overflow-hidden group cursor-pointer
        transition-all duration-300
        focus-within:ring-2 focus-within:ring-gold-800
      `}
      tabIndex={0}
      role="article"
      aria-label={`${name} - ${variant} sponsor`}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Content */}
      <span className={textClasses[variant]}>{name}</span>
      
      {/* Title sponsor crown */}
      {variant === 'title' && (
        <Star className="absolute top-3 right-3 w-5 h-5 text-gold-800/50" />
      )}
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
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden bg-forest-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/50 via-forest-900/30 to-forest-950/50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-800/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-800/40 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-950/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-800/5 rounded-full blur-3xl" />
      
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
            <span className="text-gold-700 text-sm font-mono tracking-wider uppercase">Our Partners</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-forest-100 mb-6">
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
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-800/50" />
            <span className="text-gold-800 text-sm font-mono tracking-widest uppercase">Title Sponsor</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-800/50" />
          </div>
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gold-950/20 rounded-3xl blur-2xl" />
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
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-500/50" />
            <span className="text-gray-400 text-sm font-mono tracking-widest uppercase">Platinum Partners</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-500/50" />
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
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-600/50" />
            <span className="text-amber-500 text-sm font-mono tracking-widest uppercase">Gold Partners</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-600/50" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
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
