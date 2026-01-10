'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  User, Mail, Phone, Building, GraduationCap, Calendar,
  ChevronRight, ChevronLeft, Check, CreditCard, QrCode,
  Download, Share2, Clock, AlertCircle, Sparkles
} from 'lucide-react'
import { events, categories } from '@/data/events'

// Step indicator component
function StepIndicator({ currentStep, steps }: { currentStep: number; steps: string[] }) {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className={`
            flex items-center justify-center w-10 h-10 rounded-full border-2 
            transition-all duration-300
            ${index < currentStep 
              ? 'bg-gold-600 border-gold-600 text-forest-950' 
              : index === currentStep 
                ? 'border-gold-600 text-gold-600' 
                : 'border-forest-600 text-forest-500'
            }
          `}>
            {index < currentStep ? (
              <Check className="w-5 h-5" />
            ) : (
              <span className="font-mono text-sm">{index + 1}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-16 md:w-24 h-0.5 mx-2 transition-all duration-300 ${
              index < currentStep ? 'bg-gold-600' : 'bg-forest-600'
            }`} />
          )}
        </div>
      ))}
    </div>
  )
}

// Early bird banner
function EarlyBirdBanner() {
  const earlyBirdEnd = new Date('2026-02-28T23:59:59')
  const now = new Date()
  const isEarlyBird = now < earlyBirdEnd

  if (!isEarlyBird) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-gold-900/30 via-gold-800/40 to-gold-900/30 border border-gold-700/50 rounded-xl p-4 mb-8 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <Sparkles className="w-6 h-6 text-gold-500" />
        <div>
          <p className="text-gold-500 font-semibold">Early Bird Offer!</p>
          <p className="text-gold-600/80 text-sm">Get 20% off on all registrations until Feb 28, 2026</p>
        </div>
      </div>
      <div className="text-gold-500 font-mono text-lg">-20%</div>
    </motion.div>
  )
}

// College list for dropdown
const collegesList = [
  'SMVITM, Bantakal',
  'NITK Surathkal',
  'MIT Manipal',
  'St Joseph Engineering College',
  'NMAMIT Nitte',
  'Sahyadri College of Engineering',
  'Canara Engineering College',
  'Srinivas College of Engineering',
  'SDM Institute of Technology',
  'Alvas Institute of Engineering',
  'Vivekananda College of Engineering',
  'PACE Mangalore',
  'Yenepoya Institute of Technology',
  'Shree Devi Institute of Technology',
  'Bearys Institute of Technology',
  'AIET Mijar',
  'MITE Moodabidri',
  'RVCE Bangalore',
  'BMSCE Bangalore',
  'PESIT Bangalore',
  'Other',
]

export default function RegisterPage() {
  const [step, setStep] = useState(0)
  const [mounted, setMounted] = useState(false)
  const steps = ['Personal Details', 'Select Events', 'Payment', 'Confirmation']

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    branch: '',
    studentId: '',
  })
  const [selectedEvents, setSelectedEvents] = useState<string[]>([])
  const [paymentMethod, setPaymentMethod] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [registrationComplete, setRegistrationComplete] = useState(false)
  const [registrationId, setRegistrationId] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  // Calculate total fee with early bird discount
  const calculateTotal = () => {
    const earlyBirdEnd = new Date('2026-02-28T23:59:59')
    const isEarlyBird = new Date() < earlyBirdEnd
    const discount = isEarlyBird ? 0.2 : 0

    const total = selectedEvents.reduce((sum, eventId) => {
      const event = events.find(e => e.id === eventId)
      return sum + (event?.registrationFee || 0)
    }, 0)

    return {
      subtotal: total,
      discount: Math.round(total * discount),
      total: Math.round(total * (1 - discount)),
      isEarlyBird,
    }
  }

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setRegistrationId(`VARN2026-${Math.random().toString(36).substr(2, 9).toUpperCase()}`)
      setRegistrationComplete(true)
      handleNext()
    }, 2000)
  }

  const toggleEvent = (eventId: string) => {
    setSelectedEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    )
  }

  if (!mounted) return null

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
            Register for Varnothsava 2026
          </h1>
          <p className="text-forest-400 text-lg">
            Join 5000+ participants from 50+ colleges
          </p>
        </motion.div>

        <EarlyBirdBanner />

        {/* Step Indicator */}
        <StepIndicator currentStep={step} steps={steps} />

        {/* Form Steps */}
        <div className="bg-forest-900/50 backdrop-blur-sm border border-forest-700/50 rounded-2xl p-6 md:p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Personal Details */}
            {step === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-display font-bold text-gold-500 mb-6">
                  Personal Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-forest-300 text-sm mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-500" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-3 bg-forest-800/50 border border-forest-600/50 rounded-lg text-forest-100 placeholder-forest-500 focus:border-gold-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-forest-300 text-sm mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-500" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@college.edu"
                        className="w-full pl-10 pr-4 py-3 bg-forest-800/50 border border-forest-600/50 rounded-lg text-forest-100 placeholder-forest-500 focus:border-gold-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-forest-300 text-sm mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-500" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-3 bg-forest-800/50 border border-forest-600/50 rounded-lg text-forest-100 placeholder-forest-500 focus:border-gold-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* College */}
                  <div>
                    <label className="block text-forest-300 text-sm mb-2">College *</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-500" />
                      <select
                        value={formData.college}
                        onChange={(e) => setFormData({...formData, college: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-forest-800/50 border border-forest-600/50 rounded-lg text-forest-100 focus:border-gold-600 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">Select your college</option>
                        {collegesList.map(college => (
                          <option key={college} value={college}>{college}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Year */}
                  <div>
                    <label className="block text-forest-300 text-sm mb-2">Year of Study *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-500" />
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({...formData, year: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-forest-800/50 border border-forest-600/50 rounded-lg text-forest-100 focus:border-gold-600 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">Select year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                        <option value="pg">Post Graduate</option>
                      </select>
                    </div>
                  </div>

                  {/* Branch */}
                  <div>
                    <label className="block text-forest-300 text-sm mb-2">Branch *</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-500" />
                      <input
                        type="text"
                        value={formData.branch}
                        onChange={(e) => setFormData({...formData, branch: e.target.value})}
                        placeholder="e.g., Computer Science"
                        className="w-full pl-10 pr-4 py-3 bg-forest-800/50 border border-forest-600/50 rounded-lg text-forest-100 placeholder-forest-500 focus:border-gold-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Events */}
            {step === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-display font-bold text-gold-500">
                    Select Events
                  </h2>
                  <span className="text-forest-400">
                    {selectedEvents.length} selected
                  </span>
                </div>

                {/* Events by category */}
                <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                  {categories.filter(c => c.id !== 'all').map(category => (
                    <div key={category.id}>
                      <h3 className="text-lg font-semibold text-gold-600 mb-3">{category.name}</h3>
                      <div className="grid gap-3">
                        {events.filter(e => e.categoryId === category.id).map(event => (
                          <div
                            key={event.id}
                            onClick={() => toggleEvent(event.id)}
                            className={`
                              p-4 rounded-xl border cursor-pointer transition-all duration-300
                              ${selectedEvents.includes(event.id)
                                ? 'bg-gold-900/30 border-gold-600'
                                : 'bg-forest-800/30 border-forest-600/50 hover:border-forest-500'
                              }
                            `}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-forest-100">{event.name}</h4>
                                <p className="text-sm text-forest-400 mt-1">{event.date} • {event.time}</p>
                                <p className="text-sm text-forest-500">{event.teamSize}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-gold-500 font-mono">₹{event.registrationFee}</p>
                                <div className={`
                                  w-6 h-6 rounded-full border-2 flex items-center justify-center mt-2
                                  ${selectedEvents.includes(event.id)
                                    ? 'bg-gold-600 border-gold-600'
                                    : 'border-forest-500'
                                  }
                                `}>
                                  {selectedEvents.includes(event.id) && (
                                    <Check className="w-4 h-4 text-forest-950" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Payment */}
            {step === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-display font-bold text-gold-500 mb-6">
                  Payment
                </h2>

                {/* Order Summary */}
                <div className="bg-forest-800/30 rounded-xl p-5 mb-6">
                  <h3 className="text-lg font-semibold text-forest-100 mb-4">Order Summary</h3>
                  <div className="space-y-2 mb-4">
                    {selectedEvents.map(eventId => {
                      const event = events.find(e => e.id === eventId)
                      return event && (
                        <div key={eventId} className="flex justify-between text-forest-300">
                          <span>{event.name}</span>
                          <span>₹{event.registrationFee}</span>
                        </div>
                      )
                    })}
                  </div>
                  <div className="border-t border-forest-600/50 pt-4 space-y-2">
                    <div className="flex justify-between text-forest-400">
                      <span>Subtotal</span>
                      <span>₹{calculateTotal().subtotal}</span>
                    </div>
                    {calculateTotal().isEarlyBird && (
                      <div className="flex justify-between text-green-500">
                        <span>Early Bird Discount (20%)</span>
                        <span>-₹{calculateTotal().discount}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-xl font-bold text-gold-500">
                      <span>Total</span>
                      <span>₹{calculateTotal().total}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <h3 className="text-lg font-semibold text-forest-100 mb-4">Select Payment Method</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['UPI', 'Credit/Debit Card', 'Net Banking', 'Wallet'].map(method => (
                      <div
                        key={method}
                        onClick={() => setPaymentMethod(method)}
                        className={`
                          p-4 rounded-xl border cursor-pointer transition-all duration-300
                          ${paymentMethod === method
                            ? 'bg-gold-900/30 border-gold-600'
                            : 'bg-forest-800/30 border-forest-600/50 hover:border-forest-500'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-5 h-5 text-gold-500" />
                          <span className="text-forest-100">{method}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 mt-6">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-forest-600 bg-forest-800 text-gold-600 focus:ring-gold-600"
                  />
                  <label htmlFor="terms" className="text-forest-400 text-sm">
                    I agree to the <Link href="/terms" className="text-gold-500 hover:underline">Terms & Conditions</Link> and <Link href="/refund" className="text-gold-500 hover:underline">Refund Policy</Link>
                  </label>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === 3 && registrationComplete && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-white" />
                </motion.div>

                <h2 className="text-3xl font-display font-bold text-gold-500 mb-4">
                  Registration Successful!
                </h2>
                <p className="text-forest-400 mb-2">Your registration ID:</p>
                <p className="text-2xl font-mono text-gold-600 mb-8">{registrationId}</p>

                {/* QR Code Placeholder */}
                <div className="inline-block bg-white p-4 rounded-xl mb-6">
                  <div className="w-48 h-48 bg-gradient-to-br from-forest-800 to-forest-900 rounded-lg flex items-center justify-center">
                    <QrCode className="w-24 h-24 text-gold-500" />
                  </div>
                </div>

                <p className="text-forest-400 mb-8">
                  A confirmation email has been sent to {formData.email}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-liquid-gold flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Pass
                  </button>
                  <button className="btn-circuit flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {!(step === 3 && registrationComplete) && (
            <div className="flex justify-between mt-8 pt-6 border-t border-forest-700/50">
              <button
                onClick={handleBack}
                disabled={step === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  step === 0 
                    ? 'text-forest-600 cursor-not-allowed' 
                    : 'text-forest-300 hover:text-gold-500'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </button>

              {step < 2 ? (
                <button
                  onClick={handleNext}
                  disabled={step === 1 && selectedEvents.length === 0}
                  className="btn-liquid-gold flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : step === 2 ? (
                <button
                  onClick={handlePayment}
                  disabled={!paymentMethod || !agreedToTerms}
                  className="btn-liquid-gold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CreditCard className="w-5 h-5" />
                  Pay ₹{calculateTotal().total}
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
