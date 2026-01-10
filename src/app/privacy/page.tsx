'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export default function PrivacyPage() {
  const lastUpdated = 'January 15, 2026'

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Shield className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h1 className="text-4xl font-display font-bold text-gold-500 mb-2">
            Privacy Policy
          </h1>
          <p className="text-forest-500">Last updated: {lastUpdated}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-forest-900/50 border border-forest-700/50 rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Introduction</h2>
              <p className="text-forest-400 leading-relaxed">
                SMVITM Bantakal (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you register for and participate in Varnothsava 2026.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Information We Collect</h2>
              <p className="text-forest-400 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth</li>
                <li><strong>Academic Information:</strong> College name, course, year of study, student ID</li>
                <li><strong>Event Preferences:</strong> Events selected, accommodation requirements</li>
                <li><strong>Payment Information:</strong> Transaction details (processed securely via payment gateway)</li>
                <li><strong>Emergency Contact:</strong> Name and phone number of emergency contact</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">How We Use Your Information</h2>
              <p className="text-forest-400 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li>Process and manage your event registration</li>
                <li>Send event-related updates, schedules, and notifications</li>
                <li>Generate participant badges and entry passes</li>
                <li>Maintain safety and security during the event</li>
                <li>Compile aggregate statistics for event planning</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send promotional materials about future events (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Information Sharing</h2>
              <p className="text-forest-400 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li><strong>Event Staff & Volunteers:</strong> Limited to what&apos;s necessary for event coordination</li>
                <li><strong>Participating Colleges:</strong> For verification of participants from their institution</li>
                <li><strong>Service Providers:</strong> Payment processors, accommodation partners (with your consent)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-forest-400 leading-relaxed mt-4">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Data Security</h2>
              <p className="text-forest-400 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your 
                personal information, including encryption, secure servers, and access controls. 
                However, no method of transmission over the Internet is 100% secure, and we cannot 
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Data Retention</h2>
              <p className="text-forest-400 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this policy, unless a longer retention period is required by law. 
                Typically, registration data is retained for 3 years after the event for record-keeping 
                and future event communication.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Your Rights</h2>
              <p className="text-forest-400 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                <li><strong>Opt-out:</strong> Unsubscribe from promotional communications</li>
                <li><strong>Portability:</strong> Request your data in a portable format</li>
              </ul>
              <p className="text-forest-400 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:privacy@smvitm.ac.in" className="text-gold-500 hover:underline">
                  privacy@smvitm.ac.in
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Cookies & Tracking</h2>
              <p className="text-forest-400 leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your experience 
                and analyze site traffic. You can control cookie preferences through your browser settings. 
                Note that disabling cookies may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Children&apos;s Privacy</h2>
              <p className="text-forest-400 leading-relaxed">
                Our services are not directed to children under 13. We do not knowingly collect 
                personal information from children under 13. Participants between 13-18 must have 
                parental consent to register.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Changes to This Policy</h2>
              <p className="text-forest-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the &quot;Last updated&quot; date. 
                Your continued participation in the event after any changes constitutes acceptance 
                of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">Contact Us</h2>
              <p className="text-forest-400 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-forest-800/50 rounded-lg">
                <p className="text-forest-300">SMVITM Bantakal</p>
                <p className="text-forest-400">Varnothsava 2026 Privacy Team</p>
                <p className="text-forest-400">Bantakal, Udupi - 574115</p>
                <p className="text-forest-400">Email:{' '}
                  <a href="mailto:privacy@smvitm.ac.in" className="text-gold-500 hover:underline">
                    privacy@smvitm.ac.in
                  </a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
