'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, LayoutGrid, List, Calendar, MapPin, Users, IndianRupee } from 'lucide-react'
import { events, categories, Event } from '@/data/events'
import CategoryFilter from '@/components/events/CategoryFilter'
import EventCard from '@/components/events/EventCard'
import EventModal from '@/components/events/EventModal'

type ViewMode = 'grid' | 'list'
type SortOption = 'name' | 'date' | 'fee-asc' | 'fee-desc'

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('name')

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

    // Sort events
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'fee-asc':
          return a.registrationFee - b.registrationFee
        case 'fee-desc':
          return b.registrationFee - a.registrationFee
        case 'date':
        default:
          return a.date.localeCompare(b.date)
      }
    })

    return filtered
  }, [activeCategory, searchQuery, sortBy])

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedEvent(null), 300)
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section - transparent to show parallax background */}
      <section className="py-12 lg:py-20 relative overflow-hidden">
        {/* Light overlay - shows all background layers */}
        <div className="absolute inset-0 bg-forest-950/55" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-800/8 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-glow/4 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

      {/* Events List - heavier overlay for text readability */}
      <section className="py-8 lg:py-12 relative">
        <div className="absolute inset-0 bg-forest-950/82 backdrop-blur-[1px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <div className="flex items-center gap-4">
                {/* Sort dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-3 py-2 bg-forest-900/50 border border-gold-800/20 rounded-lg text-forest-200 text-sm focus:outline-none focus:border-gold-800/50"
                >
                  <option value="name">Sort by Name</option>
                  <option value="date">Sort by Date</option>
                  <option value="fee-asc">Fee: Low to High</option>
                  <option value="fee-desc">Fee: High to Low</option>
                </select>

                {/* View toggle */}
                <div className="flex bg-forest-900/50 border border-gold-800/20 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-gold-600 text-forest-950'
                        : 'text-forest-400 hover:text-forest-200'
                    }`}
                    aria-label="Grid view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'list'
                        ? 'bg-gold-600 text-forest-950'
                        : 'text-forest-400 hover:text-forest-200'
                    }`}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                <span className="text-forest-400 text-sm hidden sm:inline">
                  <span className="text-gold-950 font-medium">{filteredEvents.length}</span> events
                </span>
              </div>
            </div>

            {/* Category Filters */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>

          {/* Events Grid/List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filteredEvents.length > 0 ? (
              <AnimatePresence mode="wait">
                {viewMode === 'grid' ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  >
                    {filteredEvents.map((event, index) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        index={index}
                        onClick={() => handleEventClick(event)}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {filteredEvents.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.02 }}
                        onClick={() => handleEventClick(event)}
                        className="bg-forest-900/50 backdrop-blur-sm border border-forest-700/50 rounded-xl p-4 md:p-6 cursor-pointer hover:border-gold-700/50 hover:bg-forest-800/50 transition-all group"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-2 py-0.5 bg-gold-600/20 text-gold-500 text-xs font-medium rounded">
                                {event.category}
                              </span>
                              {event.featured && (
                                <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded">
                                  Featured
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg font-display font-bold text-forest-100 group-hover:text-gold-500 transition-colors mb-1">
                              {event.name}
                            </h3>
                            <p className="text-forest-400 text-sm line-clamp-1">{event.description}</p>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-forest-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{event.venue}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{event.teamSize}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gold-500 font-medium">
                              <IndianRupee className="w-4 h-4" />
                              <span>{event.registrationFee}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
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
