'use client'

import { motion } from 'framer-motion'
import { Sparkles, Trophy, Zap, Calendar, Users } from 'lucide-react'

const highlights = [
  { icon: Trophy, text: 'Prize Pool: ₹10,00,000+', color: 'text-gold-700' },
  { icon: Zap, text: '30+ Exciting Events', color: 'text-cyan-500' },
  { icon: Users, text: '5000+ Participants Expected', color: 'text-forest-300' },
  { icon: Calendar, text: 'March 11-14, 2026', color: 'text-gold-600' },
  { icon: Sparkles, text: 'Registration Open Now!', color: 'text-gold-600' },
]

export default function EventHighlightsMarquee() {
  return (
    <div className="relative overflow-hidden bg-forest-900/50 border-y border-gold-800/20 py-3">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-forest-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-forest-950 to-transparent z-10" />

      {/* Scrolling content - duplicated for seamless loop */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...highlights, ...highlights].map((highlight, index) => {
          const Icon = highlight.icon
          return (
            <div key={index} className="flex items-center gap-2 px-8">
              <Icon className={`w-4 h-4 ${highlight.color}`} />
              <span className="text-sm md:text-base font-medium text-forest-200">
                {highlight.text}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
