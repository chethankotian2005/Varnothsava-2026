'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, Phone, Mail, Clock, Send, 
  Instagram, Twitter, Youtube, Facebook, Linkedin,
  MessageSquare, AlertCircle, CheckCircle
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'SMVITM, Bantakal, Udupi - 574115, Karnataka, India',
      link: 'https://maps.google.com/?q=SMVITM+Bantakal+Udupi',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98765 43210',
      link: 'tel:+919876543210',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@varnothsava.in',
      link: 'mailto:contact@varnothsava.in',
    },
    {
      icon: Clock,
      title: 'Helpline Hours',
      content: '9:00 AM - 9:00 PM IST',
      link: null,
    },
  ]

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', handle: '@varnothsava_smvitm', link: 'https://instagram.com/varnothsava_smvitm' },
    { icon: Twitter, name: 'Twitter/X', handle: '@varnothsava', link: 'https://twitter.com/varnothsava' },
    { icon: Youtube, name: 'YouTube', handle: 'Varnothsava SMVITM', link: 'https://youtube.com/@varnothsava' },
    { icon: Facebook, name: 'Facebook', handle: 'Varnothsava', link: 'https://facebook.com/varnothsava' },
    { icon: Linkedin, name: 'LinkedIn', handle: 'Varnothsava', link: 'https://linkedin.com/company/varnothsava' },
  ]

  const quickContacts = [
    { role: 'General Enquiries', email: 'info@varnothsava.in' },
    { role: 'Event Registrations', email: 'register@varnothsava.in' },
    { role: 'Sponsorships', email: 'sponsors@varnothsava.in' },
    { role: 'Technical Support', email: 'tech@varnothsava.in' },
    { role: 'Media & Press', email: 'media@varnothsava.in' },
  ]

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gold-500 mb-4">
            Contact Us
          </h1>
          <p className="text-forest-400 text-lg max-w-2xl mx-auto">
            Have questions about Varnothsava 2026? We&apos;re here to help. 
            Reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-forest-900/50 backdrop-blur-sm border border-forest-700/50 rounded-2xl p-6 md:p-8"
          >
            {submitted ? (
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-gold-500 mb-2">Message Sent!</h3>
                <p className="text-forest-400">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-circuit mt-6"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-display font-bold text-gold-500 mb-6 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-forest-300 text-sm mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-forest-800/50 border border-forest-600/50 rounded-lg text-forest-100 placeholder-forest-500 focus:border-gold-600 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-forest-300 text-sm mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-forest-800/50 border border-forest-600/50 rounded-lg text-forest-100 placeholder-forest-500 focus:border-gold-600 focus:outline-none"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-forest-300 text-sm mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-forest-800/50 border border-forest-600/50 rounded-lg text-forest-100 placeholder-forest-500 focus:border-gold-600 focus:outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-forest-300 text-sm mb-2">Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 bg-forest-800/50 border border-forest-600/50 rounded-lg text-forest-100 focus:border-gold-600 focus:outline-none"
                      >
                        <option value="">Select a topic</option>
                        <option value="registration">Event Registration</option>
                        <option value="sponsorship">Sponsorship Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="accommodation">Accommodation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-forest-300 text-sm mb-2">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-forest-800/50 border border-forest-600/50 rounded-lg text-forest-100 placeholder-forest-500 focus:border-gold-600 focus:outline-none resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-liquid-gold w-full flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link || undefined}
                  target={info.link?.startsWith('http') ? '_blank' : undefined}
                  className={`
                    bg-forest-900/50 backdrop-blur-sm border border-forest-700/50 rounded-xl p-5
                    transition-all duration-300 hover:border-gold-700/50
                    ${info.link ? 'cursor-pointer' : 'cursor-default'}
                  `}
                >
                  <info.icon className="w-8 h-8 text-gold-500 mb-3" />
                  <h3 className="text-forest-300 text-sm mb-1">{info.title}</h3>
                  <p className="text-forest-100">{info.content}</p>
                </a>
              ))}
            </div>

            {/* Quick Contact Emails */}
            <div className="bg-forest-900/50 backdrop-blur-sm border border-forest-700/50 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-gold-500 mb-4">Quick Contacts</h3>
              <div className="space-y-3">
                {quickContacts.map(contact => (
                  <div key={contact.role} className="flex justify-between items-center">
                    <span className="text-forest-400 text-sm">{contact.role}</span>
                    <a href={`mailto:${contact.email}`} className="text-gold-600 hover:text-gold-500 text-sm">
                      {contact.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-forest-900/50 backdrop-blur-sm border border-forest-700/50 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-gold-500 mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-forest-800/50 rounded-lg hover:bg-forest-700/50 transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-gold-500" />
                    <span className="text-sm text-forest-300">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-display font-bold text-gold-500 mb-6 text-center">
            Find Us Here
          </h2>
          <div className="bg-forest-800/50 rounded-2xl overflow-hidden border border-forest-700/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.234!2d74.7852!3d13.3486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb7e4a7c2a83%3A0x2a0a6d7ef6d5b32c!2sSMVITM!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </main>
  )
}
