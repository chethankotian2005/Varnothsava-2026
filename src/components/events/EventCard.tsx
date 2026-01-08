'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react'
import { Event } from '@/data/events'

interface EventCardProps {
  event: Event
  index: number
  onClick: () => void
}

const categoryColors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  cultural: { bg: 'from-rose-500/20 to-orange-500/10', text: 'text-rose-400', border: 'group-hover:border-rose-500/40', glow: 'group-hover:shadow-rose-500/10' },
  technical: { bg: 'from-cyan-glow/20 to-cyan-500/10', text: 'text-cyan-glow', border: 'group-hover:border-cyan-glow/40', glow: 'group-hover:shadow-cyan-glow/10' },
  arts: { bg: 'from-purple-500/20 to-pink-500/10', text: 'text-purple-400', border: 'group-hover:border-purple-500/40', glow: 'group-hover:shadow-purple-500/10' },
  literary: { bg: 'from-gold-800/20 to-gold-950/10', text: 'text-gold-800', border: 'group-hover:border-gold-800/40', glow: 'group-hover:shadow-gold-800/10' },
  media: { bg: 'from-teal-500/20 to-emerald-500/10', text: 'text-teal-400', border: 'group-hover:border-teal-500/40', glow: 'group-hover:shadow-teal-500/10' },
  gaming: { bg: 'from-red-500/20 to-violet-500/10', text: 'text-red-400', border: 'group-hover:border-red-500/40', glow: 'group-hover:shadow-red-500/10' },
}

export default function EventCard({ event, index, onClick }: EventCardProps) {
  const colors = categoryColors[event.categoryId] || categoryColors.cultural

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className={`bg-forest-900/50 backdrop-blur-sm border border-gold-800/20 rounded-xl ${colors.border} ${colors.glow} group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300`}
    >
      {/* Gradient Header */}
      <div className={`h-24 bg-gradient-to-br ${colors.bg} relative`}>
        <div className="absolute inset-0 bg-forest-950/40" />
        <div className="absolute bottom-3 left-4">
          <span className={`inline-block px-2.5 py-1 rounded-full bg-forest-950/60 backdrop-blur-sm text-xs font-medium ${colors.text} border border-current/20`}>
            {event.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-forest-100 group-hover:text-gold-950 transition-colors mb-2">
          {event.name}
        </h3>
        
        <p className="text-forest-300 text-sm line-clamp-2 mb-4">
          {event.description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-forest-400">
            <Calendar size={14} className="text-gold-800" />
            <span>{event.date.split(',')[0]}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-forest-400">
            <Users size={14} className="text-cyan-glow" />
            <span>{event.teamSize}</span>
          </div>
        </div>

        {/* Prize & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gold-800/10">
          <div className="flex items-center gap-1.5">
            <Trophy size={14} className="text-gold-950" />
            <span className="text-gold-950 font-semibold text-sm">{event.prizePool}</span>
          </div>
          <span className="flex items-center gap-1 text-gold-800 text-sm font-medium group-hover:text-gold-950 transition-colors">
            View Details
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}
