'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { faqs, faqCategories, searchFAQs, type FAQ } from '@/data/faqs'

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedIds, setExpandedIds] = useState<string[]>([])

  const filteredFAQs = useMemo(() => {
    if (searchQuery.trim()) {
      return searchFAQs(searchQuery)
    }
    if (activeCategory === 'all') {
      return faqs
    }
    return faqs.filter(faq => faq.category === activeCategory)
  }, [activeCategory, searchQuery])

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const expandAll = () => {
    setExpandedIds(filteredFAQs.map(faq => faq.id))
  }

  const collapseAll = () => {
    setExpandedIds([])
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <HelpCircle className="w-16 h-16 text-gold-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gold-500 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-forest-400">
            Find answers to common questions about Varnothsava 2026
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-500" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-forest-900/50 border border-forest-700/50 rounded-xl text-forest-100 placeholder-forest-500 focus:outline-none focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/30"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-gold-600 text-forest-950'
                  : 'bg-forest-800/50 text-forest-400 hover:text-forest-200'
              }`}
            >
              All ({faqs.length})
            </button>
            {faqCategories.map(cat => {
              const count = faqs.filter(f => f.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gold-600 text-forest-950'
                      : 'bg-forest-800/50 text-forest-400 hover:text-forest-200'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Expand/Collapse Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-end gap-2 mb-4"
        >
          <button
            onClick={expandAll}
            className="text-sm text-gold-500 hover:text-gold-400 transition-colors"
          >
            Expand All
          </button>
          <span className="text-forest-600">|</span>
          <button
            onClick={collapseAll}
            className="text-sm text-gold-500 hover:text-gold-400 transition-colors"
          >
            Collapse All
          </button>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.02 }}
                  className="bg-forest-900/50 backdrop-blur-sm border border-forest-700/50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-forest-800/30 transition-colors"
                  >
                    <span className="text-forest-100 font-medium pr-4">{faq.question}</span>
                    {expandedIds.includes(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-forest-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedIds.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 pt-0">
                          <div className="border-t border-forest-700/30 pt-4">
                            <p className="text-forest-400 leading-relaxed">{faq.answer}</p>
                            <div className="mt-3 flex items-center gap-2">
                              <span className="text-xs px-2 py-1 bg-forest-800/50 text-forest-500 rounded-full capitalize">
                                {faq.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-12 h-12 text-forest-600 mx-auto mb-4" />
                <p className="text-forest-400 text-lg">No matching questions found</p>
                <p className="text-forest-600 text-sm mt-2">
                  Try a different search term or category
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-gold-900/30 via-gold-800/20 to-gold-900/30 border border-gold-700/30 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-display font-bold text-gold-500 mb-4">
            Still have questions?
          </h2>
          <p className="text-forest-400 mb-6">
            Can&apos;t find what you&apos;re looking for? Our team is here to help.
          </p>
          <a href="/contact" className="btn-liquid-gold">
            Contact Us
          </a>
        </motion.div>
      </div>
    </main>
  )
}
