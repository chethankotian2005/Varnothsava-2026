'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    college: 'NITK Surathkal',
    avatar: '/images/avatars/avatar-1.jpg',
    quote: 'Varnothsava was an incredible experience! The hackathon challenged us to think creatively, and the cultural performances were mesmerizing. Can\'t wait for 2026!',
    rating: 5,
    event: 'HackAranya 2024',
  },
  {
    id: 2,
    name: 'Rahul Menon',
    college: 'MIT Manipal',
    avatar: '/images/avatars/avatar-2.jpg',
    quote: 'The organization was flawless. From registration to prize distribution, everything was handled professionally. The best college fest I\'ve attended!',
    rating: 5,
    event: 'Robotics Challenge',
  },
  {
    id: 3,
    name: 'Sneha Patel',
    college: 'SJCE Mysore',
    avatar: '/images/avatars/avatar-3.jpg',
    quote: 'Winning the classical dance competition was a dream come true. The judges were fair, the stage was world-class, and the audience was so supportive!',
    rating: 5,
    event: 'Nritya Sangam',
  },
  {
    id: 4,
    name: 'Arjun Reddy',
    college: 'RV College Bangalore',
    avatar: '/images/avatars/avatar-4.jpg',
    quote: 'The coding contest had genuinely challenging problems. Met amazing people from different colleges and learned so much in just two days.',
    rating: 5,
    event: 'Code Combat',
  },
  {
    id: 5,
    name: 'Kavya Nair',
    college: 'SDM Dharwad',
    avatar: '/images/avatars/avatar-5.jpg',
    quote: 'SMVITM knows how to host a fest! The ambiance, the events, the food - everything was perfect. Already counting days to Varnothsava 2026!',
    rating: 5,
    event: 'Photography Contest',
  },
  {
    id: 6,
    name: 'Vikram Singh',
    college: 'PES University',
    avatar: '/images/avatars/avatar-6.jpg',
    quote: 'The E-Sports tournament was super competitive. Great infrastructure, smooth gameplay, and amazing crowd energy. Looking forward to defending my title!',
    rating: 5,
    event: 'Valorant Championship',
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-800/20 to-gold-950/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-forest-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gold-800/20 hover:border-gold-700 transition-all duration-300 h-full flex flex-col">
        {/* Quote icon */}
        <Quote className="w-8 h-8 text-gold-800/30 mb-4" />
        
        {/* Testimonial text */}
        <p className="text-forest-200 leading-relaxed mb-6 flex-grow italic">
          "{testimonial.quote}"
        </p>
        
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold-700 text-gold-700" />
          ))}
        </div>
        
        {/* Author */}
        <div className="flex items-center gap-4 pt-4 border-t border-gold-800/20">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold-800/50 bg-forest-800">
            {/* Placeholder avatar with initials */}
            <div className="w-full h-full flex items-center justify-center text-gold-700 font-bold text-lg">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <div>
            <h4 className="text-gold-700 font-semibold">{testimonial.name}</h4>
            <p className="text-forest-400 text-sm">{testimonial.college}</p>
            <p className="text-gold-800/60 text-xs mt-0.5">{testimonial.event}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-forest-950/80 backdrop-blur-[1px]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gold-800/10 rounded-full blur-3xl" />
      </div>
      
      {/* Border accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-950/20 border border-gold-800/30 text-gold-700 text-sm font-mono tracking-wider uppercase mb-4"
          >
            <Star className="w-4 h-4" />
            <span>Participant Stories</span>
          </motion.span>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-100 mb-4">
            What{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 via-gold-700 to-gold-950">
              Participants
            </span>{' '}
            Say
          </h2>
          
          <p className="text-forest-400 max-w-2xl mx-auto">
            Hear from students who experienced the magic of Varnothsava
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
