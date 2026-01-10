'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Medal, TrendingUp, TrendingDown, Minus, ChevronDown, Share2 } from 'lucide-react'
import { rankedColleges, getTopByCategory, type College } from '@/data/colleges'

const categoryTabs = [
  { id: 'overall', name: 'Overall' },
  { id: 'technical', name: 'Technical' },
  { id: 'cultural', name: 'Cultural' },
  { id: 'arts', name: 'Fine Arts' },
  { id: 'literary', name: 'Literary' },
  { id: 'media', name: 'Media' },
  { id: 'gaming', name: 'E-Sports' },
]

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30">
        <Trophy className="w-5 h-5 text-yellow-900" />
      </div>
    )
  }
  if (rank === 2) {
    return (
      <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center shadow-lg shadow-gray-400/30">
        <Medal className="w-5 h-5 text-gray-700" />
      </div>
    )
  }
  if (rank === 3) {
    return (
      <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center shadow-lg shadow-amber-600/30">
        <Medal className="w-5 h-5 text-amber-200" />
      </div>
    )
  }
  return (
    <div className="w-10 h-10 bg-forest-700/50 rounded-full flex items-center justify-center">
      <span className="text-forest-300 font-mono font-bold">{rank}</span>
    </div>
  )
}

function TrendIndicator({ trend }: { trend: 'up' | 'down' | 'same' }) {
  if (trend === 'up') {
    return <TrendingUp className="w-4 h-4 text-green-500" />
  }
  if (trend === 'down') {
    return <TrendingDown className="w-4 h-4 text-red-500" />
  }
  return <Minus className="w-4 h-4 text-forest-500" />
}

function CollegeRow({ college, index, category }: { college: College & { rank: number }; index: number; category: string }) {
  const [expanded, setExpanded] = useState(false)
  const points = category === 'overall' ? college.points.overall : college.points[category as keyof typeof college.points]
  
  // Simulate trend (in real app, this would come from data)
  const trends = ['up', 'down', 'same'] as const
  const trend = trends[index % 3]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      layout
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className={`
          bg-forest-800/50 backdrop-blur-sm border rounded-xl p-4 cursor-pointer
          transition-all duration-300 hover:border-gold-700/50
          ${college.rank <= 3 ? 'border-gold-600/50' : 'border-forest-700/50'}
          ${expanded ? 'ring-2 ring-gold-600/30' : ''}
        `}
      >
        <div className="flex items-center gap-4">
          <RankBadge rank={college.rank} />
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-forest-100 truncate">{college.shortName}</h3>
              <TrendIndicator trend={trend} />
            </div>
            <p className="text-sm text-forest-500 truncate">{college.location}</p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-mono font-bold text-gold-500">{points}</p>
            <p className="text-xs text-forest-500">points</p>
          </div>

          <ChevronDown className={`w-5 h-5 text-forest-500 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-forest-700/50">
                <p className="text-sm text-forest-400 mb-3">{college.name}</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 text-center">
                  {Object.entries(college.points).filter(([key]) => key !== 'overall').map(([key, value]) => (
                    <div key={key} className="bg-forest-700/30 rounded-lg p-2">
                      <p className="text-xs text-forest-500 capitalize">{key}</p>
                      <p className="font-mono font-bold text-forest-200">{value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-forest-500 mt-3">
                  Events Participated: <span className="text-gold-600">{college.eventsParticipated}</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function LeaderboardPage() {
  const [selectedCategory, setSelectedCategory] = useState('overall')
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    // Simulate real-time updates
    const updateTime = () => {
      setLastUpdated(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 30000)
    return () => clearInterval(interval)
  }, [])

  const colleges = selectedCategory === 'overall' 
    ? rankedColleges 
    : getTopByCategory(selectedCategory as keyof College['points'])

  // Helper function to get points for display
  const getPoints = (college: typeof colleges[0], category: string) => {
    if (category === 'overall') return college.points.overall
    return college.points[category as keyof typeof college.points] || college.points.overall
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gold-500 mb-4">
            Live Leaderboard
          </h1>
          <p className="text-forest-400 text-lg mb-2">
            Real-time college rankings based on event performance
          </p>
          <p className="text-sm text-forest-500">
            Last updated: {lastUpdated} IST • Auto-refreshes every 30 seconds
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-2 -mx-4 px-4 scrollbar-hide">
          {categoryTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                ${selectedCategory === tab.id
                  ? 'bg-gold-600 text-forest-950'
                  : 'bg-forest-800/50 text-forest-400 hover:text-forest-200'
                }
              `}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Top 3 Podium */}
        {colleges.length >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            {/* Second Place */}
            <div className="flex flex-col items-center justify-end">
              <div className="bg-gradient-to-br from-gray-400 to-gray-500 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-2xl md:text-3xl font-bold text-gray-800">2</span>
              </div>
              <p className="font-semibold text-forest-100 text-center text-sm md:text-base">{colleges[1].shortName}</p>
              <p className="text-gold-500 font-mono">{getPoints(colleges[1], selectedCategory)}</p>
              <div className="w-full bg-gray-400/30 h-20 md:h-28 rounded-t-lg mt-2" />
            </div>

            {/* First Place */}
            <div className="flex flex-col items-center justify-end">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-2 shadow-xl shadow-yellow-500/30"
              >
                <Trophy className="w-10 h-10 md:w-12 md:h-12 text-yellow-900" />
              </motion.div>
              <p className="font-bold text-gold-500 text-center">{colleges[0].shortName}</p>
              <p className="text-gold-400 font-mono text-lg">{getPoints(colleges[0], selectedCategory)}</p>
              <div className="w-full bg-yellow-500/30 h-28 md:h-36 rounded-t-lg mt-2" />
            </div>

            {/* Third Place */}
            <div className="flex flex-col items-center justify-end">
              <div className="bg-gradient-to-br from-amber-600 to-amber-800 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <span className="text-xl md:text-2xl font-bold text-amber-200">3</span>
              </div>
              <p className="font-semibold text-forest-100 text-center text-sm md:text-base">{colleges[2].shortName}</p>
              <p className="text-gold-500 font-mono">{getPoints(colleges[2], selectedCategory)}</p>
              <div className="w-full bg-amber-700/30 h-16 md:h-20 rounded-t-lg mt-2" />
            </div>
          </motion.div>
        )}

        {/* Full Rankings */}
        <div className="space-y-3">
          {colleges.map((college, index) => (
            <CollegeRow 
              key={college.id} 
              college={college} 
              index={index}
              category={selectedCategory}
            />
          ))}
        </div>

        {/* Share Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <button className="btn-circuit flex items-center gap-2 mx-auto">
            <Share2 className="w-5 h-5" />
            Share Leaderboard
          </button>
        </motion.div>
      </div>
    </main>
  )
}
