'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react'
import Link from 'next/link'

// Schedule data for 3 days
const scheduleData = {
  'day-1': {
    date: 'March 15, 2026',
    day: 'Day 1',
    title: 'The Awakening',
    events: [
      { time: '08:00 AM', name: 'Registration & Check-in', venue: 'Main Gate', type: 'general', duration: '2 hrs' },
      { time: '09:30 AM', name: 'Inauguration Ceremony', venue: 'Main Auditorium', type: 'ceremony', duration: '1.5 hrs' },
      { time: '10:00 AM', name: 'Nritya Sangam (Classical Dance)', venue: 'Main Auditorium', type: 'cultural', duration: '4 hrs' },
      { time: '10:00 AM', name: 'Canvas Chronicles (Painting)', venue: 'Arts Block', type: 'arts', duration: '2 hrs' },
      { time: '09:00 AM', name: 'Code Crusade (Hackathon Begins)', venue: 'Computer Lab Complex', type: 'technical', duration: '24 hrs' },
      { time: '09:00 AM', name: 'Shutter Stories (Photography)', venue: 'Campus-wide', type: 'media', duration: '6 hrs' },
      { time: '10:00 AM', name: 'Valorant Showdown (Day 1)', venue: 'Gaming Arena', type: 'gaming', duration: '8 hrs' },
      { time: '11:00 AM', name: 'Verbal Valor (Debate)', venue: 'Seminar Hall 1', type: 'literary', duration: '4 hrs' },
      { time: '02:00 PM', name: 'Binary Blitz (Coding Contest)', venue: 'CS Lab 1 & 2', type: 'technical', duration: '3 hrs' },
      { time: '03:00 PM', name: 'Folk Dance Competition', venue: 'Open Air Theatre', type: 'cultural', duration: '3 hrs' },
      { time: '06:00 PM', name: 'Pro Night: DJ Performance', venue: 'Main Ground', type: 'proshows', duration: '3 hrs' },
    ],
  },
  'day-2': {
    date: 'March 16, 2026',
    day: 'Day 2',
    title: 'The Surge',
    events: [
      { time: '09:00 AM', name: 'Code Crusade (Hackathon Ends)', venue: 'Computer Lab Complex', type: 'technical', duration: '12 hrs' },
      { time: '09:00 AM', name: 'Rangoli Rangam', venue: 'College Ground', type: 'arts', duration: '3 hrs' },
      { time: '10:00 AM', name: 'Robo Wars', venue: 'Mechanical Workshop', type: 'technical', duration: '6 hrs' },
      { time: '10:00 AM', name: 'Valorant Showdown (Finals)', venue: 'Gaming Arena', type: 'gaming', duration: '6 hrs' },
      { time: '11:00 AM', name: 'BGMI Battleground', venue: 'Gaming Arena', type: 'gaming', duration: '5 hrs' },
      { time: '02:00 PM', name: 'Quizzical Quest', venue: 'Seminar Hall 2', type: 'literary', duration: '3 hrs' },
      { time: '02:00 PM', name: 'Western Dance Competition', venue: 'Main Auditorium', type: 'cultural', duration: '3 hrs' },
      { time: '03:00 PM', name: 'Tech Talk: Industry Expert', venue: 'Conference Hall', type: 'general', duration: '2 hrs' },
      { time: '05:00 PM', name: 'Standup Comedy Night', venue: 'Open Air Theatre', type: 'proshows', duration: '2 hrs' },
      { time: '06:00 PM', name: 'Battle of Bands', venue: 'Open Air Theatre', type: 'cultural', duration: '4 hrs' },
    ],
  },
  'day-3': {
    date: 'March 17, 2026',
    day: 'Day 3',
    title: 'The Culmination',
    events: [
      { time: '09:00 AM', name: 'Group Singing', venue: 'Main Auditorium', type: 'cultural', duration: '3 hrs' },
      { time: '10:00 AM', name: 'Treasure Hunt', venue: 'Campus-wide', type: 'general', duration: '3 hrs' },
      { time: '10:00 AM', name: 'Mad Ads', venue: 'Seminar Hall 1', type: 'literary', duration: '2 hrs' },
      { time: '11:00 AM', name: 'Face Painting', venue: 'Arts Block', type: 'arts', duration: '2 hrs' },
      { time: '02:00 PM', name: 'Hackathon Results', venue: 'Main Auditorium', type: 'technical', duration: '1 hr' },
      { time: '03:00 PM', name: 'Cine Shorts (Film Screening)', venue: 'Screening Hall', type: 'media', duration: '3 hrs' },
      { time: '04:00 PM', name: 'Street Play Competition', venue: 'Open Air Theatre', type: 'cultural', duration: '2 hrs' },
      { time: '07:00 PM', name: 'Runway Regal (Fashion Show)', venue: 'Main Auditorium', type: 'cultural', duration: '2 hrs' },
      { time: '09:00 PM', name: 'Prize Distribution & Valedictory', venue: 'Main Auditorium', type: 'ceremony', duration: '1.5 hrs' },
      { time: '10:30 PM', name: 'Star Night: Celebrity Performance', venue: 'Main Ground', type: 'proshows', duration: '2 hrs' },
    ],
  },
}

const eventTypeColors: Record<string, string> = {
  cultural: 'bg-gold-600/20 text-gold-500 border-gold-600/50',
  technical: 'bg-cyan-600/20 text-cyan-400 border-cyan-600/50',
  arts: 'bg-purple-600/20 text-purple-400 border-purple-600/50',
  literary: 'bg-green-600/20 text-green-400 border-green-600/50',
  media: 'bg-orange-600/20 text-orange-400 border-orange-600/50',
  gaming: 'bg-red-600/20 text-red-400 border-red-600/50',
  proshows: 'bg-pink-600/20 text-pink-400 border-pink-600/50',
  ceremony: 'bg-gold-700/20 text-gold-400 border-gold-700/50',
  general: 'bg-forest-600/20 text-forest-300 border-forest-600/50',
}

type DayKey = 'day-1' | 'day-2' | 'day-3'

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<DayKey>('day-1')
  const [filterType, setFilterType] = useState('all')

  const dayData = scheduleData[selectedDay]
  const filteredEvents = filterType === 'all' 
    ? dayData.events 
    : dayData.events.filter(e => e.type === filterType)

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gold-500 mb-4">
            Event Schedule
          </h1>
          <p className="text-forest-400 text-lg">
            March 15-17, 2026 • 3 Days of Non-Stop Action
          </p>
        </motion.div>

        {/* Day Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {(Object.keys(scheduleData) as DayKey[]).map((dayKey) => {
            const day = scheduleData[dayKey]
            return (
              <motion.button
                key={dayKey}
                onClick={() => setSelectedDay(dayKey)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  px-6 py-4 rounded-xl border transition-all duration-300
                  ${selectedDay === dayKey
                    ? 'bg-gold-600 border-gold-500 text-forest-950'
                    : 'bg-forest-800/50 border-forest-600/50 text-forest-300 hover:border-gold-700'
                  }
                `}
              >
                <p className="font-bold">{day.day}</p>
                <p className="text-sm opacity-80">{day.date}</p>
              </motion.button>
            )
          })}
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['all', 'cultural', 'technical', 'arts', 'literary', 'media', 'gaming', 'proshows'].map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${filterType === type
                  ? 'bg-gold-600 text-forest-950'
                  : 'bg-forest-800/50 text-forest-400 hover:text-forest-200'
                }
              `}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Day Title */}
        <motion.div
          key={selectedDay}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-display text-gold-600">{dayData.title}</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-forest-700/50 -translate-x-1/2" />

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedDay}-${filterType}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={`${event.name}-${index}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`
                    relative flex flex-col md:flex-row items-start gap-4
                    ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                  `}
                >
                  {/* Time marker */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gold-600 rounded-full -translate-x-1/2 border-4 border-forest-900 z-10" />

                  {/* Time */}
                  <div className={`
                    w-full md:w-1/2 pl-16 md:pl-0
                    ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}
                  `}>
                    <span className="text-gold-500 font-mono text-lg">{event.time}</span>
                  </div>

                  {/* Event Card */}
                  <div className={`
                    w-full md:w-1/2 pl-16 md:pl-0
                    ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}
                  `}>
                    <div className="bg-forest-800/50 backdrop-blur-sm border border-forest-700/50 rounded-xl p-5 hover:border-gold-700/50 transition-all duration-300">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className={`
                            inline-block px-3 py-1 rounded-full text-xs font-medium border mb-2
                            ${eventTypeColors[event.type]}
                          `}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                          <h3 className="text-lg font-semibold text-forest-100">{event.name}</h3>
                          <div className="flex flex-wrap gap-4 mt-2 text-sm text-forest-400">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {event.venue}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {event.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Download Schedule Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="btn-liquid-gold">
            Download Full Schedule (PDF)
          </button>
        </motion.div>
      </div>
    </main>
  )
}
