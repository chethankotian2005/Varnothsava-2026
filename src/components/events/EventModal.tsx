'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, MapPin, Users, IndianRupee, Phone, User } from 'lucide-react'
import { Event } from '@/data/events'
import Link from 'next/link'
import ShareButtons from '@/components/ui/ShareButtons'

interface EventModalProps {
  event: Event | null
  isOpen: boolean
  onClose: () => void
}

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
  if (!event) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest-950/90 backdrop-blur-sm z-50 overflow-y-auto"
          >
            {/* Centered Container */}
            <div className="min-h-screen flex items-center justify-center p-4 py-8 sm:py-12">
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl max-h-[80vh] bg-gradient-to-br from-forest-900 via-forest-900/95 to-forest-950 border-2 border-gold-800/40 rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-forest-950/80 my-auto"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 215, 0, 0.1)'
                }}
              >
            {/* Header */}
            <div className="relative p-4 sm:p-5 pb-4 border-b border-gold-800/30 bg-gradient-to-r from-forest-900 via-forest-800/50 to-forest-900">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-forest-800/70 backdrop-blur-sm flex items-center justify-center text-forest-300 hover:text-gold-800 hover:bg-forest-700 transition-all duration-300 border border-gold-800/30 hover:border-gold-800/60 hover:scale-110 z-10"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <span className="inline-block px-2.5 py-1 rounded-full bg-gold-900/30 text-gold-800 text-xs font-semibold tracking-wider uppercase mb-2 border border-gold-800/40">
                {event.category}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-forest-100 pr-12 leading-tight">
                {event.name}
              </h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 sm:space-y-5 scrollbar-thin scrollbar-thumb-gold-800/30 scrollbar-track-forest-950/20 hover:scrollbar-thumb-gold-800/50"
              style={{
                scrollBehavior: 'smooth'
              }}
            >
              {/* Description */}
              <div className="p-3 sm:p-4 rounded-xl bg-forest-800/30 border border-gold-800/20">
                <p className="text-forest-200 leading-relaxed text-sm sm:text-base">
                  {event.description}
                </p>
              </div>

              {/* Event Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-forest-800/50 to-forest-800/30 border border-gold-800/20 hover:border-gold-800/40 transition-all duration-300">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gold-800 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/60 font-medium uppercase tracking-wide">Date</p>
                    <p className="text-forest-100 text-xs sm:text-sm font-semibold">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-forest-800/50 to-forest-800/30 border border-gold-800/20 hover:border-gold-800/40 transition-all duration-300">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gold-800 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/60 font-medium uppercase tracking-wide">Time</p>
                    <p className="text-forest-100 text-xs sm:text-sm font-semibold">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-forest-800/50 to-forest-800/30 border border-gold-800/20 hover:border-gold-800/40 transition-all duration-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-glow flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/60 font-medium uppercase tracking-wide">Venue</p>
                    <p className="text-forest-100 text-xs sm:text-sm font-semibold">{event.venue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-forest-800/50 to-forest-800/30 border border-gold-800/20 hover:border-gold-800/40 transition-all duration-300">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-glow flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/60 font-medium uppercase tracking-wide">Team Size</p>
                    <p className="text-forest-100 text-xs sm:text-sm font-semibold">{event.teamSize}</p>
                  </div>
                </div>
              </div>

              {/* Registration Fee */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-gold-900/20 via-gold-800/10 to-gold-900/20 border-2 border-gold-800/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-gold-800" />
                  <span className="text-xs text-white/70 font-semibold uppercase tracking-wider">Registration Fee</span>
                </div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-gold-800">₹{event.registrationFee}</p>
              </div>

              {/* Rules */}
              <div className="p-4 rounded-xl bg-forest-800/30 border border-gold-800/20">
                <h3 className="text-base sm:text-lg font-semibold text-forest-100 mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 sm:h-6 bg-gradient-to-b from-gold-800 to-cyan-glow rounded-full"></span>
                  Rules & Guidelines
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-forest-300 text-xs sm:text-sm leading-relaxed">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-cyan-glow/30 to-cyan-glow/10 flex items-center justify-center text-xs text-cyan-glow font-bold flex-shrink-0 mt-0.5 border border-cyan-glow/30">
                        {index + 1}
                      </span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coordinator */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-forest-800/50 to-forest-800/30 border border-gold-800/30">
                <h3 className="text-xs sm:text-sm font-semibold text-white/80 mb-3 uppercase tracking-wider">Event Coordinator</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-glow/30 to-cyan-glow/10 flex items-center justify-center border-2 border-cyan-glow/40">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-glow" />
                    </div>
                    <span className="text-forest-100 font-semibold text-sm sm:text-base">{event.coordinator.name}</span>
                  </div>
                  <a
                    href={`tel:${event.coordinator.phone}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gold-900/20 text-gold-800 hover:text-gold-950 hover:bg-gold-900/30 transition-all duration-300 border border-gold-800/30 hover:border-gold-800/50 text-sm"
                  >
                    <Phone size={14} />
                    <span className="font-medium">{event.coordinator.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 border-t border-gold-800/30 bg-gradient-to-r from-forest-950/80 via-forest-900/50 to-forest-950/80 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center">
                <Link
                  href={`/register?event=${event.id}`}
                  className="btn-liquid-gold flex-1 text-center py-2.5 sm:py-3 font-semibold text-sm sm:text-base"
                >
                  Register Now • ₹{event.registrationFee}
                </Link>
                <button
                  onClick={onClose}
                  className="btn-circuit flex-1 py-2.5 sm:py-3 text-sm sm:text-base"
                >
                  Close
                </button>
                <ShareButtons 
                  title={`${event.name} - Varnothsava 2026`}
                  description={event.description}
                  hashtags={['Varnothsava2026', 'SMVITM', event.category.replace(/\s+/g, '')]}
                />
              </div>
            </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
