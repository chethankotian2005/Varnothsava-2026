'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone, Mail, MessageSquare, HelpCircle } from 'lucide-react'

const quickLinks = [
  {
    icon: HelpCircle,
    title: 'FAQs',
    description: 'Find quick answers',
    href: '/faqs',
    color: 'text-blue-400',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: '+91 98765 43210',
    href: 'tel:+919876543210',
    color: 'text-green-400',
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'contact@varnothsava.in',
    href: 'mailto:contact@varnothsava.in',
    color: 'text-gold-400',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    description: 'Chat with us',
    href: 'https://wa.me/919876543210?text=Hi!%20I%20have%20a%20question%20about%20Varnothsava%202026',
    color: 'text-emerald-400',
  },
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Show notification bubble after 5 seconds if user hasn't interacted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowNotification(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [hasInteracted])

  const handleOpen = () => {
    setIsOpen(true)
    setShowNotification(false)
    setHasInteracted(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Notification Bubble */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 10 }}
              className="absolute bottom-16 right-0 bg-forest-800 border border-forest-600/50 rounded-lg p-3 shadow-lg min-w-[200px]"
            >
              <button
                onClick={() => setShowNotification(false)}
                className="absolute -top-2 -right-2 w-5 h-5 bg-forest-700 rounded-full flex items-center justify-center text-forest-300 hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
              <p className="text-sm text-forest-200">
                👋 Need help? We&apos;re here!
              </p>
              <div className="absolute bottom-0 right-4 w-3 h-3 bg-forest-800 border-r border-b border-forest-600/50 transform rotate-45 translate-y-1/2" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Button */}
        <motion.button
          onClick={isOpen ? handleClose : handleOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${
            isOpen
              ? 'bg-forest-700 hover:bg-forest-600'
              : 'bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400'
          }`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 text-forest-950" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulse effect when notification is showing */}
          {showNotification && !isOpen && (
            <span className="absolute inset-0 rounded-full animate-ping bg-gold-500/30" />
          )}
          
          {/* Notification dot */}
          {!hasInteracted && !isOpen && (
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-forest-950" />
          )}
        </motion.button>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-forest-900 border border-forest-700/50 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gold-600 to-gold-500 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-forest-950">Need Help?</h3>
                  <p className="text-xs text-forest-800">We typically reply in minutes</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-forest-300 text-sm mb-4">
                Choose how you&apos;d like to get in touch with us:
              </p>

              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-forest-800/50 hover:bg-forest-800 rounded-xl transition-colors group"
                  >
                    <div className={`w-10 h-10 bg-forest-700/50 rounded-lg flex items-center justify-center ${link.color} group-hover:scale-110 transition-transform`}>
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-forest-100 group-hover:text-gold-400 transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-xs text-forest-500">{link.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick message section */}
              <div className="mt-4 pt-4 border-t border-forest-700/50">
                <p className="text-xs text-forest-500 mb-3">
                  Or send a quick message:
                </p>
                <form 
                  action="mailto:contact@varnothsava.in" 
                  method="get" 
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    name="subject"
                    placeholder="Type your question..."
                    className="flex-1 px-3 py-2 bg-forest-800 border border-forest-700/50 rounded-lg text-sm text-forest-100 placeholder-forest-500 focus:outline-none focus:border-gold-600/50"
                  />
                  <button
                    type="submit"
                    className="w-10 h-10 bg-gold-600 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Send className="w-4 h-4 text-forest-950" />
                  </button>
                </form>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-forest-800/50 px-4 py-2 text-center">
              <p className="text-xs text-forest-500">
                Available 9 AM - 9 PM IST
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
