'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, MapPin, Users, IndianRupee, Trophy, Phone, User } from 'lucide-react'
import { Event } from '@/data/events'
import Link from 'next/link'

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
            className="fixed inset-0 bg-forest-950/90 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[85vh] bg-forest-900 border border-gold-800/30 rounded-2xl overflow-hidden z-50 flex flex-col shadow-2xl shadow-forest-950/50"
          >
            {/* Header */}
            <div className="relative p-6 pb-4 border-b border-gold-800/20">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-forest-800/50 flex items-center justify-center text-forest-400 hover:text-forest-100 hover:bg-forest-800 transition-colors border border-gold-800/20"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <span className="inline-block px-3 py-1 rounded-full bg-gold-800/20 text-gold-800 text-xs font-semibold tracking-wider uppercase mb-3 border border-gold-800/30">
                {event.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-forest-100 pr-10">
                {event.name}
              </h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Description */}
              <div>
                <p className="text-forest-200 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Event Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-forest-800/50 border border-gold-800/10">
                  <Calendar className="w-5 h-5 text-gold-800 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-forest-400 uppercase">Date</p>
                    <p className="text-forest-100 text-sm">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-forest-800/50 border border-gold-800/10">
                  <Clock className="w-5 h-5 text-gold-800 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-forest-400 uppercase">Time</p>
                    <p className="text-forest-100 text-sm">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-forest-800/50 border border-gold-800/10">
                  <MapPin className="w-5 h-5 text-cyan-glow flex-shrink-0" />
                  <div>
                    <p className="text-xs text-forest-400 uppercase">Venue</p>
                    <p className="text-forest-100 text-sm">{event.venue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-forest-800/50 border border-gold-800/10">
                  <Users className="w-5 h-5 text-cyan-glow flex-shrink-0" />
                  <div>
                    <p className="text-xs text-forest-400 uppercase">Team Size</p>
                    <p className="text-forest-100 text-sm">{event.teamSize}</p>
                  </div>
                </div>
              </div>

              {/* Prize & Fee */}
              <div className="flex gap-4">
                <div className="flex-1 p-4 rounded-lg bg-gradient-to-br from-gold-800/20 to-gold-950/10 border border-gold-800/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className="w-4 h-4 text-gold-950" />
                    <span className="text-xs text-forest-400 uppercase">Prize Pool</span>
                  </div>
                  <p className="text-xl font-display font-bold text-gold-950">{event.prizePool}</p>
                </div>
                <div className="flex-1 p-4 rounded-lg bg-forest-800/50 border border-gold-800/10">
                  <div className="flex items-center gap-2 mb-1">
                    <IndianRupee className="w-4 h-4 text-forest-400" />
                    <span className="text-xs text-forest-400 uppercase">Registration</span>
                  </div>
                  <p className="text-xl font-display font-bold text-forest-100">₹{event.registrationFee}</p>
                </div>
              </div>

              {/* Rules */}
              <div>
                <h3 className="text-lg font-semibold text-forest-100 mb-3">Rules & Guidelines</h3>
                <ul className="space-y-2">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3 text-forest-300 text-sm">
                      <span className="w-5 h-5 rounded-full bg-cyan-glow/20 flex items-center justify-center text-xs text-cyan-glow flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coordinator */}
              <div className="p-4 rounded-lg bg-forest-800/50 border border-gold-800/20">
                <h3 className="text-sm font-semibold text-forest-400 mb-3 uppercase tracking-wider">Event Coordinator</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-glow/20 flex items-center justify-center border border-cyan-glow/30">
                      <User className="w-5 h-5 text-cyan-glow" />
                    </div>
                    <span className="text-forest-100 font-medium">{event.coordinator.name}</span>
                  </div>
                  <a
                    href={`tel:${event.coordinator.phone}`}
                    className="flex items-center gap-2 text-gold-800 hover:text-gold-950 transition-colors"
                  >
                    <Phone size={16} />
                    <span className="text-sm">{event.coordinator.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 pt-4 border-t border-gold-800/20 bg-forest-950/50">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/register?event=${event.id}`}
                  className="btn-liquid-gold flex-1 text-center"
                >
                  Register for ₹{event.registrationFee}
                </Link>
                <button
                  onClick={onClose}
                  className="btn-circuit flex-1"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
