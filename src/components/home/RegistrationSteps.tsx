'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { UserPlus, CalendarCheck, CreditCard, CheckCircle, ArrowRight, Sparkles, Zap } from 'lucide-react'

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up with your college email and complete your profile with essential details.',
    gradient: 'from-cyan-500 to-cyan-400',
    glowColor: 'rgba(0, 242, 255, 0.3)',
  },
  {
    step: 2,
    icon: CalendarCheck,
    title: 'Select Events',
    description: 'Browse through 50+ events and pick the ones that match your passion and skills.',
    gradient: 'from-forest-600 to-forest-400',
    glowColor: 'rgba(6, 95, 70, 0.3)',
  },
  {
    step: 3,
    icon: CreditCard,
    title: 'Make Payment',
    description: 'Complete secure payment via UPI, cards, or net banking. Early bird discounts available!',
    gradient: 'from-gold-700 to-gold-500',
    glowColor: 'rgba(212, 175, 55, 0.3)',
  },
  {
    step: 4,
    icon: CheckCircle,
    title: 'Get Confirmed',
    description: 'Receive your confirmation email with event details and participation QR code.',
    gradient: 'from-gold-800 to-gold-600',
    glowColor: 'rgba(212, 175, 55, 0.4)',
  },
]

export default function RegistrationSteps() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%'])

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 relative overflow-hidden atmosphere-chamber">
      {/* Stone passageway ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-forest-900/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-gold-950/8 rounded-full blur-3xl" />
      
      {/* Stone chamber inner shadow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 25px 40px -12px rgba(5, 13, 10, 0.5), inset 0 -25px 40px -12px rgba(5, 13, 10, 0.5)'
      }} />
      
      {/* Carved stone accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-700/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/25 to-transparent" />
      
      {/* Ancient circuit path - subtle carved lines */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 212, 212, 0.2)" />
              <stop offset="100%" stopColor="rgba(201, 162, 39, 0.2)" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q400,100 800,200 T1600,200" fill="none" stroke="url(#circuit-grad)" strokeWidth="1" />
          <path d="M0,400 Q400,300 800,400 T1600,400" fill="none" stroke="url(#circuit-grad)" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          {/* Section intro marker */}
          <div className="w-8 h-px bg-gold-800/50 mx-auto mb-6" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-900/50 border border-gold-800/30 mb-6"
          >
            <Zap className="w-4 h-4 text-gold-950" />
            <span className="text-gold-700 text-sm font-mono tracking-wider uppercase text-engraved">Quick & Easy</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-forest-100 mb-4 text-monumental">
            Register in{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 via-gold-700 to-gold-950">
                4 Simple Steps
              </span>
            </span>
          </h2>
          
          <p className="text-base text-forest-400 max-w-lg mx-auto">
            Get started in minutes. Join thousands from across the country.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* Animated progress line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-forest-800" />
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold-950 via-cyan-500 to-gold-950"
              style={{ height: lineProgress }}
            />
          </div>

          {/* Steps Grid */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative ${index % 2 === 1 ? 'lg:mt-24' : ''}`}
              >
                {/* Step Card */}
                <div className="group relative">
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                    style={{ background: step.glowColor }}
                  />
                  
                  <div className="relative bg-forest-900/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gold-800/20 group-hover:border-gold-800/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-black/20 group-hover:-translate-y-1">
                    {/* Step Number Badge */}
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className={`relative flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} p-[2px]`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="w-full h-full rounded-xl bg-forest-950 flex items-center justify-center group-hover:bg-forest-900 transition-colors">
                          <step.icon className="w-6 h-6 text-forest-100" aria-hidden="true" />
                        </div>
                        {/* Step number */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold-950 flex items-center justify-center text-xs font-bold text-forest-950">
                          {step.step}
                        </div>
                      </motion.div>
                      
                      <div>
                        <span className="text-xs font-mono text-forest-500 uppercase tracking-wider">Step {step.step}</span>
                        <h3 className="text-xl font-display font-semibold text-forest-100 group-hover:text-gold-950 transition-colors">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-forest-300 leading-relaxed pl-[72px]">
                      {step.description}
                    </p>

                    {/* Connection line for mobile */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden absolute left-7 -bottom-8 w-0.5 h-8 bg-gradient-to-b from-gold-800/50 to-transparent" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/register" className="btn-liquid-gold inline-flex items-center gap-2 group focus-ring">
            <Sparkles className="w-5 h-5" aria-hidden="true" />
            <span>Start Registration</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-forest-500 text-sm mt-4 flex items-center justify-center gap-2"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Early bird offer ends February 28, 2026
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
