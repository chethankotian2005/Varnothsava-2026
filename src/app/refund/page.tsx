'use client'

import { motion } from 'framer-motion'
import { RotateCcw, AlertCircle, CheckCircle, XCircle, Clock, Mail } from 'lucide-react'

export default function RefundPage() {
  const lastUpdated = 'January 15, 2026'

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <RotateCcw className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h1 className="text-4xl font-display font-bold text-gold-500 mb-2">
            Refund Policy
          </h1>
          <p className="text-forest-500">Last updated: {lastUpdated}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {/* Quick Overview */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-900/30 border border-green-700/50 rounded-xl p-6 text-center">
              <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <p className="text-green-400 font-semibold">100% Refund</p>
              <p className="text-forest-500 text-sm">Before Feb 28, 2026</p>
            </div>
            <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-xl p-6 text-center">
              <Clock className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
              <p className="text-yellow-400 font-semibold">50% Refund</p>
              <p className="text-forest-500 text-sm">March 1-10, 2026</p>
            </div>
            <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-6 text-center">
              <XCircle className="w-10 h-10 text-red-500 mx-auto mb-3" />
              <p className="text-red-400 font-semibold">No Refund</p>
              <p className="text-forest-500 text-sm">After March 10, 2026</p>
            </div>
          </div>

          <div className="bg-forest-900/50 border border-forest-700/50 rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Refund Timeline</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-forest-800/50 rounded-lg">
                  <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-forest-200 font-semibold">Before February 28, 2026</p>
                    <p className="text-forest-400">
                      Full refund (100%) of the registration fee, excluding payment gateway charges (2-3%).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-forest-800/50 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-forest-200 font-semibold">March 1 - March 10, 2026</p>
                    <p className="text-forest-400">
                      Partial refund (50%) of the registration fee. No refund for accommodation bookings.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-forest-800/50 rounded-lg">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-forest-200 font-semibold">After March 10, 2026</p>
                    <p className="text-forest-400">
                      No refunds will be processed. Registration is non-transferable after this date.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">How to Request a Refund</h2>
              <ol className="list-decimal list-inside text-forest-400 space-y-3">
                <li>
                  Send an email to{' '}
                  <a href="mailto:refunds@smvitm.ac.in" className="text-gold-500 hover:underline">
                    refunds@smvitm.ac.in
                  </a>
                  {' '}with the subject line: &quot;Refund Request - [Your Registration ID]&quot;
                </li>
                <li>Include your full name, registered email, and registration ID in the email body.</li>
                <li>Provide the reason for cancellation (optional but helpful).</li>
                <li>Attach proof of payment (transaction screenshot or receipt).</li>
                <li>Wait for confirmation within 3-5 business days.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Refund Processing</h2>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li>Approved refunds will be processed within 7-10 business days.</li>
                <li>Refunds will be credited to the original payment method used during registration.</li>
                <li>For UPI/Net Banking payments, refunds may take up to 14 business days.</li>
                <li>You will receive an email confirmation once the refund is processed.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Non-Refundable Items</h2>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li>Payment gateway convenience fees (typically 2-3% of transaction amount)</li>
                <li>Merchandise purchases</li>
                <li>Workshop fees (separate refund policy may apply)</li>
                <li>Accommodation bookings made through event partners</li>
                <li>Pro show tickets (after sales close)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Event Cancellation by Organizers</h2>
              <p className="text-forest-400 leading-relaxed mb-4">
                In the unlikely event that Varnothsava 2026 is cancelled by the organizers due to 
                unforeseen circumstances (natural disasters, government restrictions, etc.):
              </p>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li>All registered participants will receive a full refund (100%).</li>
                <li>Refunds will be processed automatically within 14 business days.</li>
                <li>Participants will be notified via email with details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Transfer of Registration</h2>
              <p className="text-forest-400 leading-relaxed">
                If you cannot attend, you may transfer your registration to another eligible 
                participant before March 10, 2026. To request a transfer, email{' '}
                <a href="mailto:registration@smvitm.ac.in" className="text-gold-500 hover:underline">
                  registration@smvitm.ac.in
                </a>
                {' '}with both the original and new participant&apos;s details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Exceptions</h2>
              <p className="text-forest-400 leading-relaxed mb-4">
                Special consideration may be given in cases of:
              </p>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li>Medical emergencies (with valid documentation)</li>
                <li>Family emergencies (bereavement, etc.)</li>
                <li>Visa rejection for international participants</li>
              </ul>
              <p className="text-forest-400 leading-relaxed mt-4">
                Requests for exceptions should be sent to{' '}
                <a href="mailto:varnothsava@smvitm.ac.in" className="text-gold-500 hover:underline">
                  varnothsava@smvitm.ac.in
                </a>
                {' '}with relevant documentation.
              </p>
            </section>

            {/* Important Notice */}
            <section className="bg-amber-900/20 border border-amber-700/40 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-amber-400 font-semibold mb-2">Important Notice</p>
                  <p className="text-forest-400">
                    By registering for Varnothsava 2026, you acknowledge that you have read, 
                    understood, and agree to this refund policy. We encourage you to carefully 
                    consider your commitment before registering.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Contact Us</h2>
              <p className="text-forest-400 leading-relaxed">
                For any questions regarding refunds, please contact:
              </p>
              <div className="mt-4 flex items-center gap-3 p-4 bg-forest-800/50 rounded-lg">
                <Mail className="w-5 h-5 text-gold-500" />
                <a href="mailto:refunds@smvitm.ac.in" className="text-gold-500 hover:underline">
                  refunds@smvitm.ac.in
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
