'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Cpu, Palette, Users, Zap, Crown, Trophy, Calendar } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Cultural Excellence',
    description: 'Celebrate the rich heritage of Karnataka through dance, music, drama, and art.',
    gradient: 'from-gold-800 to-gold-950',
    delay: 0,
  },
  {
    icon: Cpu,
    title: 'Technical Innovation',
    description: 'Push the boundaries of technology with hackathons, coding competitions, and robotics.',
    gradient: 'from-cyan-600 to-cyan-400',
    delay: 0.1,
  },
  {
    icon: Users,
    title: 'Unity in Diversity',
    description: '50+ colleges, 5000+ participants, one grand celebration of talent and creativity.',
    gradient: 'from-forest-600 to-forest-400',
    delay: 0.2,
  },
  {
    icon: Sparkles,
    title: 'Premium Experience',
    description: 'World-class events, renowned judges, and prize pool worth ₹10 Lakhs.',
    gradient: 'from-gold-700 to-gold-400',
    delay: 0.3,
  },
]

const stats = [
  { value: '50+', label: 'Events', icon: Zap },
  { value: '5000+', label: 'Participants', icon: Users },
  { value: '₹10L+', label: 'Prize Pool', icon: Trophy },
  { value: '3', label: 'Days', icon: Calendar },
]

// Animated counter component
function AnimatedStat({ stat, index }: { stat: typeof stats[0], index: number }) {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-950/20 to-forest-700/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-forest-900/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-gold-800/20 group-hover:border-gold-800/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold-950/10">
        <stat.icon className="w-6 h-6 text-gold-800 mx-auto mb-3" aria-hidden="true" />
        <motion.div 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-gold-800 via-gold-700 to-gold-950 bg-clip-text text-transparent mb-2"
          initial={prefersReducedMotion ? {} : { scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
        >
          {stat.value}
        </motion.div>
        <div className="text-forest-300 text-sm uppercase tracking-widest font-mono">
          {stat.label}
        </div>
      </div>
    </motion.div>
  )
}

export default function FestIdentity() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const decorY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const decorOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.8, 0.2])

  return (
    <section ref={sectionRef} className="py-28 lg:py-40 relative overflow-hidden">
      {/* Heavy cinematic overlay - shows only stone texture, hides vines/tech */}
      <div className="absolute inset-0 bg-forest-950/82 backdrop-blur-[2px]" />
      
      {/* Inner sanctum atmosphere - calm, mossy stone */}
      <motion.div 
        style={{ y: decorY, opacity: decorOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-forest-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest-400/8 rounded-full blur-3xl" />
      </motion.div>
      
      {/* Stone inner shadow effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 40px 60px -20px rgba(5, 13, 10, 0.5), inset 0 -40px 60px -20px rgba(5, 13, 10, 0.5)'
      }} />

      {/* Carved stone border accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/25 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/15 to-transparent" />
      
      {/* Decorative mandala pattern - slower, more ancient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-3 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.15" className="text-gold-900"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.15" className="text-gold-900"/>
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.15" className="text-gold-900"/>
          {[...Array(12)].map((_, i) => (
            <line 
              key={i}
              x1="50" y1="5" x2="50" y2="95"
              stroke="currentColor" 
              strokeWidth="0.1"
              className="text-gold-800"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-forest-900/50 border border-gold-800/30 mb-8"
          >
            <Crown className="w-4 h-4 text-gold-950" />
            <span className="text-gold-700 text-sm font-mono tracking-wider uppercase text-engraved">
              The Cyber-Aranya Awakens
            </span>
            <Crown className="w-4 h-4 text-gold-950" />
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-forest-100 mb-6 text-monumental">
            Where{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 via-gold-700 to-gold-950">
                Heritage
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gold-800 via-gold-700 to-gold-950 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
            {' '}Meets{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300">
                Future
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-forest-300 max-w-3xl mx-auto leading-relaxed">
            Varnothsava embodies the perfect fusion of Karnataka&apos;s cultural richness 
            with cutting-edge technological innovation — a celebration where 
            <span className="text-gold-950"> tradition inspires innovation</span>.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative focus-within:ring-2 focus-within:ring-gold-800 rounded-2xl"
              tabIndex={0}
            >
              {/* Card glow on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500`} />
              
              <div className="relative bg-forest-900/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-gold-800/20 group-hover:border-gold-800/50 transition-all duration-500 h-full group-hover:shadow-lg group-hover:shadow-black/20">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-6`}>
                  <div className="w-full h-full rounded-xl bg-forest-950 flex items-center justify-center group-hover:bg-forest-900 transition-colors">
                    <feature.icon className="w-8 h-8 text-forest-100" aria-hidden="true" />
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-semibold text-forest-100 mb-3 group-hover:text-gold-950 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-forest-300 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <motion.div 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + feature.delay, duration: 0.8 }}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-gold-800/20 rounded-3xl" />
            <div className="absolute -inset-8 border border-gold-800/10 rounded-3xl" />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <AnimatedStat key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  )
}
