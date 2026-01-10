'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Calendar, Users, Trophy, Cpu, Palette, Star, Award } from 'lucide-react'

const highlights = [
  { icon: Calendar, label: '3 Days', description: 'of non-stop action' },
  { icon: Trophy, label: '50+ Events', description: 'across 6 categories' },
  { icon: Users, label: '5000+', description: 'expected participants' },
  { icon: Award, label: '₹10L+', description: 'in prizes' },
]

const features = [
  {
    icon: Cpu,
    title: 'Technical Excellence',
    description: 'From hackathons to robotics, showcase your technical prowess in events designed to challenge and inspire.',
  },
  {
    icon: Palette,
    title: 'Cultural Extravaganza',
    description: 'Dance, music, drama, fashion - celebrate the rich tapestry of Indian arts and culture.',
  },
  {
    icon: Star,
    title: 'Pro Shows',
    description: 'Celebrity performances, DJ nights, and star attractions that make Varnothsava truly unforgettable.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gold-500 mb-6">
            About Varnothsava
          </h1>
          <p className="text-xl text-forest-300 max-w-3xl mx-auto leading-relaxed">
            Where Karnataka&apos;s rich cultural heritage meets cutting-edge technology. 
            Varnothsava is more than a fest – it&apos;s a celebration of talent, creativity, and innovation.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-forest-900/50 backdrop-blur-sm border border-forest-700/50 rounded-xl p-6 text-center"
            >
              <item.icon className="w-10 h-10 text-gold-500 mx-auto mb-3" />
              <p className="text-2xl font-display font-bold text-forest-100">{item.label}</p>
              <p className="text-sm text-forest-500">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Theme Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-gold-900/30 via-gold-800/20 to-gold-900/30 border border-gold-700/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold text-gold-500 mb-6 text-center">
              Cyber-Aranya Awakens
            </h2>
            <p className="text-forest-300 text-lg leading-relaxed max-w-4xl mx-auto text-center">
              The theme for Varnothsava 2026 – &quot;Cyber-Aranya Awakens&quot; – represents the harmonious 
              fusion of ancient wisdom and futuristic innovation. Like the mythical forest that 
              comes alive with digital energy, our fest transforms the campus into a realm where 
              tradition dances with technology, and heritage meets the horizons of tomorrow.
            </p>
          </div>
        </motion.section>

        {/* About SMVITM */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gold-500 mb-8 text-center">
            About SMVITM
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-forest-300 leading-relaxed mb-4">
                <strong className="text-gold-600">Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM)</strong> 
                {' '}is a premier engineering institution located in the serene town of Bantakal, Udupi, Karnataka.
              </p>
              <p className="text-forest-400 leading-relaxed mb-4">
                Established under the Sri Soda Vadiraja Mutt, SMVITM has been nurturing young minds 
                since 2008, offering quality education in engineering and management disciplines. 
                The institution is known for its excellent infrastructure, dedicated faculty, and 
                a holistic approach to education that balances academics with co-curricular activities.
              </p>
              <p className="text-forest-400 leading-relaxed">
                Varnothsava, the annual cultural and technical fest, is a testament to the 
                institution&apos;s commitment to providing students with platforms to showcase their 
                talents and connect with peers from across the country.
              </p>
            </div>
            
            <div className="bg-forest-800/50 rounded-2xl p-6 border border-forest-700/50">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-gold-500 mt-1" />
                <div>
                  <p className="text-forest-200 font-medium">Location</p>
                  <p className="text-forest-400 text-sm">Bantakal, Udupi, Karnataka 574115</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-forest-500">Established</span>
                  <span className="text-forest-300">2008</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest-500">Affiliated to</span>
                  <span className="text-forest-300">VTU, Belagavi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest-500">Accreditation</span>
                  <span className="text-forest-300">NAAC &apos;A&apos; Grade</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest-500">Programs</span>
                  <span className="text-forest-300">B.E., M.Tech, MBA</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gold-500 mb-8 text-center">
            What Makes Us Special
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-forest-900/50 backdrop-blur-sm border border-forest-700/50 rounded-xl p-6 hover:border-gold-700/50 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-gold-500 mb-4" />
                <h3 className="text-xl font-display font-bold text-forest-100 mb-3">{feature.title}</h3>
                <p className="text-forest-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* History */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gold-500 mb-8 text-center">
            Our Legacy
          </h2>
          
          <div className="space-y-4">
            {[
              { year: '2024', title: 'Digital Renaissance', highlights: '3500+ participants, 40 events' },
              { year: '2023', title: 'Carnival of Dreams', highlights: '3000+ participants, 35 events' },
              { year: '2022', title: 'Phoenix Rising', highlights: 'Post-pandemic comeback, 2500+ participants' },
              { year: '2019', title: 'Rhythm & Code', highlights: 'Record 4000+ participants' },
            ].map((edition, index) => (
              <motion.div
                key={edition.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 bg-forest-900/30 rounded-xl p-4 border border-forest-700/30"
              >
                <div className="text-3xl font-display font-bold text-gold-600 min-w-[80px]">
                  {edition.year}
                </div>
                <div className="flex-1">
                  <h4 className="text-forest-100 font-semibold">{edition.title}</h4>
                  <p className="text-forest-500 text-sm">{edition.highlights}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-display font-bold text-gold-500 mb-4">
            Ready to be part of the legacy?
          </h2>
          <p className="text-forest-400 mb-6">
            Join us for the biggest edition of Varnothsava yet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/register" className="btn-liquid-gold">
              Register Now
            </a>
            <a href="/events" className="btn-circuit">
              Explore Events
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
