'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Heart, Star, Users } from 'lucide-react'
import { sponsors, sponsorTiers, getSponsorsByTier, getTierInfo } from '@/data/sponsors'

export default function SponsorsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gold-500 mb-4">
            Our Sponsors & Partners
          </h1>
          <p className="text-xl text-forest-400 max-w-2xl mx-auto">
            Varnothsava 2026 is made possible by the generous support of our sponsors and partners.
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        {sponsorTiers.map((tier, tierIndex) => {
          const tierSponsors = getSponsorsByTier(tier.id)
          if (tierSponsors.length === 0) return null
          
          return (
            <motion.section
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tierIndex * 0.1 }}
              className="mb-16"
            >
              <h2 className={`text-2xl md:text-3xl font-display font-bold ${tier.color} mb-8 text-center`}>
                {tier.name}
              </h2>
              
              <div className={`grid gap-6 ${
                tier.id === 'title' 
                  ? 'grid-cols-1' 
                  : tier.id === 'platinum'
                    ? 'grid-cols-1 md:grid-cols-2'
                    : tier.id === 'gold' || tier.id === 'silver'
                      ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                      : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5'
              }`}>
                {tierSponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`
                      bg-gradient-to-br ${tier.bgGradient}
                      border ${tier.borderColor}
                      rounded-2xl p-6 
                      flex flex-col items-center justify-center
                      transition-all duration-300
                      ${tier.id === 'title' ? 'py-12' : ''}
                    `}
                  >
                    {/* Placeholder for logo */}
                    <div className={`
                      bg-forest-800/50 rounded-xl flex items-center justify-center
                      ${tier.id === 'title' ? 'w-64 h-32' : tier.id === 'platinum' ? 'w-48 h-24' : 'w-32 h-16'}
                      mb-4
                    `}>
                      <span className={`${tier.color} font-display font-bold ${tier.id === 'title' ? 'text-2xl' : 'text-lg'}`}>
                        {sponsor.name.split(' ')[0]}
                      </span>
                    </div>
                    
                    <h3 className={`font-semibold text-center ${tier.id === 'title' ? 'text-xl' : 'text-base'} text-forest-200`}>
                      {sponsor.name}
                    </h3>
                    
                    {sponsor.description && (
                      <p className="text-forest-500 text-sm text-center mt-2">
                        {sponsor.description}
                      </p>
                    )}
                    
                    {sponsor.website && (
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-3 flex items-center gap-1 text-sm ${tier.color} hover:underline`}
                      >
                        Visit Website <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )
        })}

        {/* Become a Sponsor CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gold-900/40 via-gold-800/30 to-gold-900/40 border border-gold-600/40 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-gold-500 mb-4">
                  Become a Sponsor
                </h2>
                <p className="text-forest-300 mb-6">
                  Partner with Varnothsava 2026 and connect your brand with 5000+ students 
                  and young professionals from across Karnataka and beyond.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-forest-400">
                    <Users className="w-5 h-5 text-gold-600" />
                    <span>5000+ expected participants</span>
                  </div>
                  <div className="flex items-center gap-3 text-forest-400">
                    <Star className="w-5 h-5 text-gold-600" />
                    <span>50+ colleges participating</span>
                  </div>
                  <div className="flex items-center gap-3 text-forest-400">
                    <Heart className="w-5 h-5 text-gold-600" />
                    <span>3 days of high engagement</span>
                  </div>
                </div>
                
                <a href="/contact" className="btn-liquid-gold">
                  Get Sponsorship Kit
                </a>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-display font-bold text-forest-200 mb-4">
                  Sponsorship Tiers
                </h3>
                {sponsorTiers.slice(0, 5).map(tier => (
                  <div key={tier.id} className="flex items-center justify-between bg-forest-900/30 rounded-lg px-4 py-3">
                    <span className={`font-medium ${tier.color}`}>{tier.name}</span>
                    <span className="text-forest-500 text-sm">
                      {tier.benefits.length} benefits
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Thank You Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-forest-400">
            A heartfelt thank you to all our sponsors and partners for believing in us and 
            making Varnothsava 2026 possible. Your support empowers thousands of students 
            to showcase their talents and pursue their passions.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
