'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, SlidersHorizontal } from 'lucide-react'
import { events, categories, Event } from '@/data/events'
import CategoryFilter from '@/components/events/CategoryFilter'
import EventCard from '@/components/events/EventCard'
import EventModal from '@/components/events/EventModal'

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredEvents = useMemo(() => {
    let filtered = events

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter((event) => event.categoryId === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (event) =>
          event.name.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.category.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [activeCategory, searchQuery])

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedEvent(null), 300)
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-forest-950">
      {/* Hero Section */}
      <section className="py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-800/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-glow/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-800/20 text-gold-800 text-sm font-semibold tracking-wider uppercase mb-4 border border-gold-800/30">
              50+ Events
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-forest-100 mb-4">
              Explore <span className="text-gold-950">Events</span>
            </h1>
            <p className="text-forest-300 text-lg">
              From cultural performances to technical challenges, find your stage and showcase your talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Events */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-forest-900/50 border border-gold-800/20 rounded-xl text-forest-100 placeholder-forest-400 focus:outline-none focus:border-gold-800/50 focus:ring-1 focus:ring-gold-800/30 transition-all"
                />
              </div>

              {/* Results count */}
              <div className="text-forest-400 text-sm">
                Showing <span className="text-gold-950 font-medium">{filteredEvents.length}</span> events
              </div>
            </div>

            {/* Category Filters */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>

          {/* Events Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredEvents.map((event, index) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    index={index}
                    onClick={() => handleEventClick(event)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-forest-900/50 border border-gold-800/20 flex items-center justify-center mx-auto mb-4">
                  <SlidersHorizontal className="w-8 h-8 text-forest-400" />
                </div>
                <h3 className="text-xl font-semibold text-forest-100 mb-2">No events found</h3>
                <p className="text-forest-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}
