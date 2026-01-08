'use client'

import { motion } from 'framer-motion'

interface CategoryFilterProps {
  categories: { id: string; name: string; count: number }[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="relative">
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'text-forest-950'
                : 'text-forest-300 hover:text-forest-100 bg-forest-900/50 hover:bg-forest-900 border border-gold-800/20 hover:border-gold-800/40'
            }`}
          >
            {activeCategory === category.id && (
              <motion.span
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-gold-800 to-gold-950 rounded-full shadow-lg shadow-gold-950/30"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {category.name}
              <span className={`text-xs ${
                activeCategory === category.id ? 'text-forest-950/70' : 'text-forest-400'
              }`}>
                ({category.count})
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
