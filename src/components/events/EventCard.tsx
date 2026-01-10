'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react'
import { Event, flagshipEventIds } from '@/data/events'

interface EventCardProps {
  event: Event
  index: number
  onClick: () => void
}

const categoryColors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  cultural: { bg: 'from-rose-900/15 to-orange-900/10', text: 'text-rose-400', border: 'group-hover:border-rose-800/40', glow: 'group-hover:shadow-rose-900/10' },
  technical: { bg: 'from-cyan-900/15 to-cyan-950/10', text: 'text-cyan-400', border: 'group-hover:border-cyan-800/40', glow: 'group-hover:shadow-cyan-900/10' },
  arts: { bg: 'from-purple-900/15 to-pink-950/10', text: 'text-purple-400', border: 'group-hover:border-purple-800/40', glow: 'group-hover:shadow-purple-900/10' },
  literary: { bg: 'from-gold-900/15 to-gold-950/10', text: 'text-gold-700', border: 'group-hover:border-gold-800/40', glow: 'group-hover:shadow-gold-900/10' },
  media: { bg: 'from-teal-900/15 to-emerald-950/10', text: 'text-teal-400', border: 'group-hover:border-teal-800/40', glow: 'group-hover:shadow-teal-900/10' },
  gaming: { bg: 'from-red-900/15 to-violet-950/10', text: 'text-red-400', border: 'group-hover:border-red-800/40', glow: 'group-hover:shadow-red-900/10' },
}

export default function EventCard({ event, index, onClick }: EventCardProps) {
  const colors = categoryColors[event.categoryId] || categoryColors.cultural
  const isFlagship = flagshipEventIds.includes(event.id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={onClick}
      className={`
        bg-forest-900/70 backdrop-blur-md rounded-xl group cursor-pointer overflow-hidden 
        transition-all duration-500 hover:shadow-xl hover:-translate-y-1
        ${colors.border} ${colors.glow}
        ${isFlagship 
          ? 'border-2 border-gold-900/40 ring-1 ring-gold-900/15' 
          : 'border border-gold-900/20'
        }
      `}
      style={{
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.25), inset 0 4px 12px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.25)'
      }}
    >
      {/* Gradient Header - stone tablet style */}
      <div className={`${isFlagship ? 'h-28' : 'h-24'} bg-gradient-to-br ${colors.bg} relative`}>
        <div className="absolute inset-0 bg-forest-950/50" />
        {/* Carved line accent for flagship */}
        {isFlagship && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-800/50 to-transparent" />
        )}
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className={`inline-block px-2.5 py-1 rounded-full bg-forest-950/70 backdrop-blur-sm text-xs font-medium ${colors.text} border border-current/15`}>
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
