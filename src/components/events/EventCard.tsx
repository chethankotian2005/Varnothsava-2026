'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Users, ArrowRight } from 'lucide-react'
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
  management: { bg: 'from-amber-900/15 to-yellow-950/10', text: 'text-amber-400', border: 'group-hover:border-amber-800/40', glow: 'group-hover:shadow-amber-900/10' },
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
        transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
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
      {/* Event Image */}
      {event.image && (
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-forest-950/90 to-forest-900/80">
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-transparent" />
          
          {/* Category badge on image */}
          <div className="absolute top-3 left-3">
            <span className={`inline-block px-3 py-1.5 rounded-full bg-forest-950/80 backdrop-blur-sm text-xs font-semibold ${colors.text} border border-current/20`}>
              {event.category}
            </span>
          </div>

          {/* Flagship badge */}
          {isFlagship && (
            <div className="absolute top-3 right-3">
              <span className="inline-block px-3 py-1.5 rounded-full bg-gold-900/80 backdrop-blur-sm text-xs font-bold text-gold-100 border border-gold-700/30">
                ⭐ Featured
              </span>
            </div>
          )}
        </div>
      )}

      {/* Fallback gradient header if no image */}
      {!event.image && (
        <div className={`${isFlagship ? 'h-28' : 'h-24'} bg-gradient-to-br ${colors.bg} relative`}>
          <div className="absolute inset-0 bg-forest-950/50" />
          {isFlagship && (
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-800/50 to-transparent" />
          )}
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span className={`inline-block px-2.5 py-1 rounded-full bg-forest-950/70 backdrop-blur-sm text-xs font-medium ${colors.text} border border-current/15`}>
              {event.category}
            </span>
          </div>
        </div>
      )}

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
          <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium">
            <Calendar size={14} className="text-gold-800" />
            <span>{event.date.split(',')[0]}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium">
            <Users size={14} className="text-cyan-glow" />
            <span>{event.teamSize}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-end pt-4 border-t border-gold-800/10">
          <span className="flex items-center gap-1 text-gold-800 text-sm font-medium group-hover:text-gold-950 transition-colors">
            View Details
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}
