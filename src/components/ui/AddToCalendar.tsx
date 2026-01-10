'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, X, ChevronDown } from 'lucide-react'

interface AddToCalendarProps {
  title: string
  description: string
  startDate: string // ISO format: 2026-03-15T09:00:00
  endDate: string   // ISO format: 2026-03-17T18:00:00
  location: string
  variant?: 'button' | 'dropdown'
}

export default function AddToCalendar({
  title,
  description,
  startDate,
  endDate,
  location,
  variant = 'dropdown',
}: AddToCalendarProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Format dates for different calendar services
  const formatGoogleDate = (date: string) => {
    return date.replace(/[-:]/g, '').replace('.000', '')
  }

  const formatICSDate = (date: string) => {
    return date.replace(/[-:]/g, '').replace('.000', '') + 'Z'
  }

  const formatOutlookDate = (date: string) => {
    return date
  }

  // Generate calendar URLs
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`

  const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&startdt=${formatOutlookDate(startDate)}&enddt=${formatOutlookDate(endDate)}&body=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`

  const yahooUrl = `https://calendar.yahoo.com/?v=60&title=${encodeURIComponent(title)}&st=${formatGoogleDate(startDate)}&et=${formatGoogleDate(endDate)}&desc=${encodeURIComponent(description)}&in_loc=${encodeURIComponent(location)}`

  // Generate ICS file content
  const generateICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Varnothsava 2026//SMVITM//EN
BEGIN:VEVENT
UID:${Date.now()}@varnothsava-2026.vercel.app
DTSTAMP:${formatICSDate(new Date().toISOString())}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:${title}
DESCRIPTION:${description.replace(/\n/g, '\\n')}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${title.replace(/\s+/g, '_')}.ics`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setIsOpen(false)
  }

  const calendarOptions = [
    {
      name: 'Google Calendar',
      icon: '📅',
      action: () => window.open(googleCalendarUrl, '_blank'),
    },
    {
      name: 'Apple Calendar',
      icon: '🍎',
      action: generateICS,
    },
    {
      name: 'Outlook',
      icon: '📧',
      action: () => window.open(outlookUrl, '_blank'),
    },
    {
      name: 'Yahoo Calendar',
      icon: '🗓️',
      action: () => window.open(yahooUrl, '_blank'),
    },
    {
      name: 'Download .ics',
      icon: '⬇️',
      action: generateICS,
    },
  ]

  if (variant === 'button') {
    return (
      <button
        onClick={generateICS}
        className="inline-flex items-center gap-2 px-4 py-2 bg-forest-800/80 hover:bg-forest-700 text-forest-200 rounded-lg transition-colors"
      >
        <Calendar className="w-4 h-4" />
        <span>Add to Calendar</span>
      </button>
    )
  }

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
          isOpen
            ? 'bg-gold-600 text-forest-950'
            : 'bg-forest-800/80 hover:bg-forest-700 text-forest-200 border border-forest-700/50'
        }`}
      >
        <Calendar className="w-4 h-4" />
        <span>Add to Calendar</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full left-0 mt-2 bg-forest-800 border border-forest-700/50 rounded-xl shadow-xl overflow-hidden z-50 min-w-[200px]"
            >
              <div className="p-1">
                {calendarOptions.map((option, index) => (
                  <motion.button
                    key={option.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      option.action()
                      setIsOpen(false)
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-forest-200 hover:bg-forest-700/50 hover:text-gold-400 transition-colors text-left"
                  >
                    <span className="text-lg">{option.icon}</span>
                    <span className="text-sm">{option.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
