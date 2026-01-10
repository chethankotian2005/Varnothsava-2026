'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Trophy, Medal, Award, ArrowRight, Crown, TrendingUp, Sparkles } from 'lucide-react'

const topColleges = [
  { rank: 1, name: 'MIT Manipal', points: 2850, icon: Crown, color: 'text-yellow-400', trend: '+120' },
  { rank: 2, name: 'NITK Surathkal', points: 2720, icon: Medal, color: 'text-gray-300', trend: '+85' },
  { rank: 3, name: 'SJCE Mysore', points: 2680, icon: Award, color: 'text-amber-600', trend: '+65' },
  { rank: 4, name: 'RVCE Bangalore', points: 2540, icon: null, color: '', trend: '+50' },
  { rank: 5, name: 'BMS College', points: 2480, icon: null, color: '', trend: '+45' },
]

// Podium visualization component
function PodiumVisualization() {
  return (
    <div className="flex items-end justify-center gap-2 mb-6 h-32">
      {/* Second place */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 64 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="w-20 bg-gradient-to-t from-gray-600/30 to-gray-400/20 rounded-t-lg flex flex-col items-center justify-start pt-2 border border-gray-500/20"
      >
        <Medal className="w-5 h-5 text-gray-300" />
        <span className="text-xs text-gray-400 mt-1">2nd</span>
      </motion.div>
      
      {/* First place */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 96 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="w-24 bg-gradient-to-t from-gold-600/40 to-gold-400/20 rounded-t-lg flex flex-col items-center justify-start pt-2 border border-gold-500/30 relative"
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Crown className="w-8 h-8 text-gold-400 animate-pulse" />
        </div>
        <span className="text-xs text-gold-400 mt-4">1st</span>
        <span className="text-lg font-display font-bold text-gold-300">2850</span>
      </motion.div>
      
      {/* Third place */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 48 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="w-20 bg-gradient-to-t from-amber-700/30 to-amber-500/20 rounded-t-lg flex flex-col items-center justify-start pt-2 border border-amber-600/20"
      >
        <Award className="w-5 h-5 text-amber-500" />
        <span className="text-xs text-amber-400 mt-1">3rd</span>
      </motion.div>
    </div>
  )
}

export default function LeaderboardTeaser() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const decorY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={sectionRef} className="py-28 lg:py-36 relative overflow-hidden">
      {/* Heavy cinematic overlay - shows only stone texture */}
      <div className="absolute inset-0 bg-forest-950/82 backdrop-blur-[1px]" />
      
      {/* Trophy hall ambient glow - gold emanation */}
      <motion.div style={{ y: decorY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-950/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-900/5 rounded-full blur-3xl" />
      </motion.div>
      
      {/* Stone hall inner shadow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 30px 60px -15px rgba(5, 13, 10, 0.6), inset 0 -30px 60px -15px rgba(5, 13, 10, 0.6)'
      }} />
      
      {/* Carved stone accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-700/25 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section intro marker */}
            <div className="w-8 h-px bg-cyan-500/50 mb-6" />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900/50 border border-cyan-500/30 mb-6"
            >
              <TrendingUp className="w-4 h-4 text-cyan-500" />
              <span className="text-cyan-400 text-sm font-mono tracking-wider uppercase text-engraved">Live Rankings</span>
            </motion.div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-forest-100 mb-4 text-monumental">
              Race to the{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-800 via-gold-700 to-gold-950">
                  Championship
                </span>
              </span>
            </h2>
            
            <p className="text-base text-forest-400 mb-8 leading-relaxed max-w-md">
              Track your college’s position live. Every win adds points. 
              Top 3 colleges receive the Overall Championship Trophy.
            </p>

            {/* Prize highlights */}
            <div className="space-y-4 mb-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-4 bg-forest-900/50 rounded-xl border border-gold-800/20 group hover:border-gold-800/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-800 to-gold-600 p-[2px]">
                  <div className="w-full h-full rounded-xl bg-forest-950 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-gold-950" />
                  </div>
                </div>
                <div>
                  <p className="text-forest-100 font-display font-semibold text-lg">Overall Championship</p>
                  <p className="text-forest-400 text-sm">₹2,00,000 + Trophy + Bragging Rights</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 p-4 bg-forest-900/50 rounded-xl border border-cyan-500/20 group hover:border-cyan-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-400 p-[2px]">
                  <div className="w-full h-full rounded-xl bg-forest-950 flex items-center justify-center">
                    <Medal className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <p className="text-forest-100 font-display font-semibold text-lg">Category Champions</p>
                  <p className="text-forest-400 text-sm">₹50,000 each for 6 categories</p>
                </div>
              </motion.div>
            </div>

            <Link 
              href="/leaderboard" 
              className="btn-circuit focus-ring"
            >
              <span>View Full Leaderboard</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Right - Leaderboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-950/10 to-cyan-500/10 rounded-3xl blur-2xl" />
            
            <div className="relative bg-forest-900/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gold-800/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-950" />
                  <h3 className="text-lg font-display font-semibold text-forest-100">Top Colleges</h3>
                </div>
                <span className="text-xs text-forest-500 font-mono uppercase tracking-wider">Live</span>
              </div>

              {/* Podium */}
              <PodiumVisualization />

              {/* Rankings List */}
              <div className="space-y-2">
                {topColleges.map((college, index) => (
                  <motion.div
                    key={college.rank}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index + 0.5 }}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer focus-within:ring-2 focus-within:ring-gold-800 ${
                      college.rank === 1
                        ? 'bg-gradient-to-r from-gold-950/20 to-gold-800/10 border border-gold-800/40 hover:border-gold-700/60'
                        : college.rank === 2
                        ? 'bg-gradient-to-r from-gray-400/10 to-gray-500/5 border border-gray-500/30 hover:border-gray-400/50'
                        : college.rank === 3
                        ? 'bg-gradient-to-r from-amber-700/15 to-amber-600/5 border border-amber-700/30 hover:border-amber-600/50'
                        : index % 2 === 0
                        ? 'bg-forest-800/40 border border-forest-700/20 hover:border-forest-600/40'
                        : 'bg-forest-900/40 border border-forest-700/20 hover:border-forest-600/40'
                    }`}
                    tabIndex={0}
                    role="listitem"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        college.rank === 1 ? 'bg-gradient-to-br from-gold-800/40 to-gold-600/30' :
                        college.rank === 2 ? 'bg-gradient-to-br from-gray-400/30 to-gray-500/20' :
                        college.rank === 3 ? 'bg-gradient-to-br from-amber-700/30 to-amber-500/20' :
                        'bg-forest-700'
                      }`}>
                        {college.icon ? (
                          <college.icon className={`w-5 h-5 ${college.color}`} />
                        ) : (
                          <span className="text-forest-400 text-sm font-mono font-bold">{college.rank}</span>
                        )}
                      </div>
                      <span className={`font-medium ${college.rank <= 3 ? 'text-forest-100' : 'text-forest-300'}`}>
                        {college.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-cyan-400 font-mono">{college.trend}</span>
                      <span className={`font-display font-bold ${
                        college.rank === 1 ? 'text-gold-950 text-xl' : 'text-forest-400'
                      }`}>
                        {college.points.toLocaleString()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-forest-500 text-sm mt-6 font-mono">
                ⚡ Rankings update after each event
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
