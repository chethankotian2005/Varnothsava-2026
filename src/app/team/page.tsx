'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Instagram } from 'lucide-react'
import { teamData } from '@/data/team'

const categoryColors: Record<string, string> = {
  faculty: 'from-gold-700 to-gold-900',
  core: 'from-gold-600 to-amber-700',
  technical: 'from-cyan-600 to-cyan-800',
  cultural: 'from-purple-600 to-purple-800',
  marketing: 'from-pink-600 to-pink-800',
  design: 'from-orange-600 to-orange-800',
  logistics: 'from-green-600 to-green-800',
  sponsorship: 'from-blue-600 to-blue-800',
}

export default function TeamPage() {
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
            Meet the Team
          </h1>
          <p className="text-forest-400 text-lg max-w-2xl mx-auto">
            The passionate individuals behind Varnothsava 2026, 
            working tirelessly to create an unforgettable experience.
          </p>
        </motion.div>

        {/* Team Categories */}
        <div className="space-y-16">
          {teamData.map((category, categoryIndex) => (
            <motion.section
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-600 mb-2">
                  {category.title}
                </h2>
                <p className="text-forest-400">{category.description}</p>
              </div>

              {/* Team Members Grid */}
              <div className={`
                grid gap-6
                ${category.members.length <= 2 
                  ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto' 
                  : category.members.length === 3 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                }
              `}>
                {category.members.map((member, memberIndex) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: memberIndex * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-forest-900/50 backdrop-blur-sm border border-forest-700/50 rounded-2xl p-6 text-center hover:border-gold-700/50 transition-all duration-300 h-full">
                      {/* Avatar */}
                      <div className={`
                        w-20 h-20 mx-auto mb-4 rounded-full
                        bg-gradient-to-br ${categoryColors[category.id] || 'from-gold-600 to-gold-800'}
                        flex items-center justify-center
                        ring-4 ring-forest-800 group-hover:ring-gold-700/50 transition-all duration-300
                      `}>
                        <span className="text-2xl font-display font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>

                      {/* Info */}
                      <h3 className="font-semibold text-forest-100 text-lg mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gold-600 text-sm font-medium mb-1">
                        {member.role}
                      </p>
                      <p className="text-forest-500 text-sm mb-4">
                        {member.department}
                      </p>

                      {/* Social Links */}
                      <div className="flex justify-center gap-3">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-forest-800 text-forest-400 hover:bg-gold-600 hover:text-forest-950 transition-all duration-300"
                            title="Email"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={`https://linkedin.com/in/${member.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-forest-800 text-forest-400 hover:bg-gold-600 hover:text-forest-950 transition-all duration-300"
                            title="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.instagram && (
                          <a
                            href={`https://instagram.com/${member.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-forest-800 text-forest-400 hover:bg-gold-600 hover:text-forest-950 transition-all duration-300"
                            title="Instagram"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gold-900/30 via-gold-800/40 to-gold-900/30 border border-gold-700/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gold-500 mb-4">
              Want to be part of the team?
            </h2>
            <p className="text-forest-400 mb-6 max-w-xl mx-auto">
              We&apos;re always looking for enthusiastic volunteers to help make 
              Varnothsava the best it can be.
            </p>
            <a href="/contact" className="btn-liquid-gold inline-block">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
