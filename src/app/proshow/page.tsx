import { Metadata } from 'next'
import ParallaxBackground from '@/components/effects/ParallaxBackground'
import DigitalEtching from '@/components/effects/DigitalEtching'
import { Calendar, Clock, MapPin, Music, Sparkles, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pro Show - Varnothsava 2026',
  description: 'Experience the grand concert at Varnothsava 2026 on March 14th. Live music, entertainment, and unforgettable moments await!',
  openGraph: {
    title: 'Pro Show - Varnothsava 2026',
    description: 'Join us for an electrifying concert experience on March 14th, 2026',
  },
}

export default function ProShowPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxBackground />
        <DigitalEtching text="PRO SHOW 2026" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-900/30 border border-purple-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
              Coming Soon
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Pro Show Night
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light">
            An Evening of Music, Magic & Memories
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get ready for an unforgettable concert experience at Varnothsava 2026. 
            The stage is set, the lights are ready, and something spectacular is coming your way.
          </p>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Date Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-6 rounded-2xl bg-forest-900/80 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <Calendar className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Date</h3>
                <p className="text-2xl font-bold text-white">March 14, 2026</p>
                <p className="text-sm text-gray-500 mt-1">Friday Night</p>
              </div>
            </div>

            {/* Time Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-6 rounded-2xl bg-forest-900/80 backdrop-blur-sm border border-fuchsia-500/20 hover:border-fuchsia-500/40 transition-all duration-300">
                <Clock className="w-8 h-8 text-fuchsia-400 mb-4" />
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Time</h3>
                <p className="text-2xl font-bold text-white">7:00 PM</p>
                <p className="text-sm text-gray-500 mt-1">Onwards</p>
              </div>
            </div>

            {/* Venue Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-6 rounded-2xl bg-forest-900/80 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                <MapPin className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Venue</h3>
                <p className="text-2xl font-bold text-white">Main Stage</p>
                <p className="text-sm text-gray-500 mt-1">College Grounds</p>
              </div>
            </div>
          </div>

          {/* Artist Announcement Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-fuchsia-600/10 to-pink-600/10 rounded-3xl blur-2xl" />
            <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-forest-900/90 to-forest-800/90 backdrop-blur-md border border-gold-500/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center mb-6">
                  <Music className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                    Artist Lineup
                  </span>
                </h2>

                <div className="max-w-2xl mx-auto">
                  <p className="text-xl text-gray-300 mb-6">
                    The search is on for the perfect artists to make this night legendary!
                  </p>

                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 border border-purple-500/50 backdrop-blur-sm">
                    <Sparkles className="w-5 h-5 text-purple-300 animate-pulse" />
                    <span className="text-lg font-semibold text-purple-200">
                      Band Selection in Progress
                    </span>
                    <Sparkles className="w-5 h-5 text-fuchsia-300 animate-pulse" />
                  </div>

                  <p className="text-gray-400 mt-6 text-sm">
                    Stay tuned! We&apos;re curating the perfect lineup to give you an experience you&apos;ll never forget. 
                    The announcement will be made soon!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What to Expect Section */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Music, title: 'Live Music', description: 'Professional artists and incredible performances' },
              { icon: Sparkles, title: 'Stage Production', description: 'World-class lighting and sound systems' },
              { icon: Users, title: 'Epic Crowd', description: 'Thousands of students celebrating together' },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-forest-900/50 backdrop-blur-sm border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-gold-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">
              Want updates about the Pro Show? Follow us on social media!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/varnothsava_2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Follow on Instagram
              </a>
              <a
                href="/events"
                className="px-6 py-3 rounded-full bg-forest-800 text-white font-semibold border border-gold-500/30 hover:border-gold-500 hover:bg-forest-700 transition-all duration-300"
              >
                Browse Other Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-20" />
    </main>
  )
}
