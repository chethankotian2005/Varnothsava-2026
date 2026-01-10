'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, Filter } from 'lucide-react'
import { galleryItems, galleryCategories, getGalleryByCategory, getGalleryYears, type GalleryItem } from '@/data/gallery'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeYear, setActiveYear] = useState<number | null>(null)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const years = getGalleryYears()

  const filteredItems = useMemo(() => {
    let items = getGalleryByCategory(activeCategory)
    if (activeYear) {
      items = items.filter(item => item.year === activeYear)
    }
    return items
  }, [activeCategory, activeYear])

  const currentIndex = selectedItem 
    ? filteredItems.findIndex(item => item.id === selectedItem.id) 
    : -1

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1])
    }
  }

  const goToNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1])
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gold-500 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-forest-400 max-w-2xl mx-auto">
            Relive the memories from previous editions of Varnothsava
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {galleryCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gold-600 text-forest-950'
                    : 'bg-forest-800/50 text-forest-400 hover:text-forest-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Year Filter */}
          <div className="flex items-center justify-center gap-3">
            <Filter className="w-4 h-4 text-forest-500" />
            <div className="flex gap-2">
              <button
                onClick={() => setActiveYear(null)}
                className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                  activeYear === null
                    ? 'bg-forest-700 text-forest-100'
                    : 'text-forest-500 hover:text-forest-300'
                }`}
              >
                All Years
              </button>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                    activeYear === year
                      ? 'bg-forest-700 text-forest-100'
                      : 'text-forest-500 hover:text-forest-300'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                onClick={() => setSelectedItem(item)}
                className={`
                  relative rounded-xl overflow-hidden cursor-pointer group
                  ${item.featured ? 'md:col-span-2 md:row-span-2' : ''}
                `}
              >
                {/* Placeholder for image */}
                <div className={`
                  bg-gradient-to-br from-forest-800 to-forest-900 
                  ${item.featured ? 'aspect-square' : 'aspect-[4/3]'}
                  flex items-center justify-center
                `}>
                  <div className="text-center p-4">
                    {item.type === 'video' ? (
                      <Play className="w-12 h-12 text-forest-600 mx-auto mb-2" />
                    ) : (
                      <ImageIcon className="w-12 h-12 text-forest-600 mx-auto mb-2" />
                    )}
                    <p className="text-forest-500 text-sm">{item.title}</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-forest-100 font-semibold">{item.title}</p>
                    <p className="text-forest-400 text-sm">{item.year} • {item.category}</p>
                  </div>
                </div>

                {/* Video indicator */}
                {item.type === 'video' && (
                  <div className="absolute top-2 right-2 bg-forest-950/80 rounded-full p-2">
                    <Play className="w-4 h-4 text-gold-500" fill="currentColor" />
                  </div>
                )}

                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-2 left-2 bg-gold-600 text-forest-950 text-xs font-bold px-2 py-1 rounded">
                    Featured
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <ImageIcon className="w-16 h-16 text-forest-600 mx-auto mb-4" />
            <p className="text-forest-400 text-lg">No images found</p>
            <p className="text-forest-600 text-sm mt-2">
              Try a different category or year filter
            </p>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-forest-800/80 rounded-full text-forest-300 hover:text-white hover:bg-forest-700 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              {currentIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-forest-800/80 rounded-full text-forest-300 hover:text-white hover:bg-forest-700 transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
              )}
              
              {currentIndex < filteredItems.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-forest-800/80 rounded-full text-forest-300 hover:text-white hover:bg-forest-700 transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              )}

              {/* Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl max-h-[80vh] flex flex-col items-center"
              >
                {/* Image placeholder */}
                <div className="bg-forest-800 rounded-xl w-full max-w-4xl aspect-video flex items-center justify-center mb-4">
                  <div className="text-center">
                    {selectedItem.type === 'video' ? (
                      <Play className="w-24 h-24 text-forest-600 mx-auto mb-4" />
                    ) : (
                      <ImageIcon className="w-24 h-24 text-forest-600 mx-auto mb-4" />
                    )}
                    <p className="text-forest-400">Image placeholder</p>
                    <p className="text-forest-600 text-sm">{selectedItem.src}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-display font-bold text-forest-100 mb-2">
                    {selectedItem.title}
                  </h3>
                  {selectedItem.description && (
                    <p className="text-forest-400 mb-2">{selectedItem.description}</p>
                  )}
                  <p className="text-forest-600 text-sm">
                    {selectedItem.year} • {selectedItem.category} • {currentIndex + 1} of {filteredItems.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Coming Soon for 2026 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-gold-900/30 via-gold-800/20 to-gold-900/30 border border-gold-600/30 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-display font-bold text-gold-500 mb-4">
            Varnothsava 2026 Gallery Coming Soon
          </h2>
          <p className="text-forest-400 mb-6">
            Be part of the memories! Register now and join us for the biggest edition yet.
          </p>
          <a href="/register" className="btn-liquid-gold">
            Register Now
          </a>
        </motion.div>
      </div>
    </main>
  )
}
