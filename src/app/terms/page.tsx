'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function TermsPage() {
  const lastUpdated = 'January 15, 2026'

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <FileText className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h1 className="text-4xl font-display font-bold text-gold-500 mb-2">
            Terms & Conditions
          </h1>
          <p className="text-forest-500">Last updated: {lastUpdated}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert prose-gold max-w-none"
        >
          <div className="bg-forest-900/50 border border-forest-700/50 rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">1. Acceptance of Terms</h2>
              <p className="text-forest-400 leading-relaxed">
                By registering for and/or attending Varnothsava 2026 (&quot;the Event&quot;), organized by 
                SMVITM Bantakal (&quot;the Organizers&quot;), you agree to comply with and be bound by these 
                Terms and Conditions. If you do not agree to these terms, please do not register 
                for or attend the Event.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">2. Registration & Eligibility</h2>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li>Participants must be enrolled as students in a recognized educational institution.</li>
                <li>A valid college ID or enrollment proof may be required at the time of entry.</li>
                <li>Registration details must be accurate and complete.</li>
                <li>Each participant may register only once. Duplicate registrations will be cancelled.</li>
                <li>Minors (below 18 years) must have written parental consent to participate.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">3. Event Participation</h2>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li>Participants must follow all event rules and guidelines.</li>
                <li>The Organizers reserve the right to modify event schedules, venues, or rules.</li>
                <li>Decisions by event judges and organizers are final and binding.</li>
                <li>Participants must wear their event badges/wristbands at all times during the Event.</li>
                <li>Late arrivals may be denied entry to specific events.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">4. Code of Conduct</h2>
              <p className="text-forest-400 leading-relaxed mb-4">
                All participants must adhere to the following code of conduct:
              </p>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li>Treat all participants, organizers, and volunteers with respect.</li>
                <li>No harassment, discrimination, or bullying of any kind will be tolerated.</li>
                <li>No alcohol, drugs, or weapons are permitted on the premises.</li>
                <li>Respect campus property and event infrastructure.</li>
                <li>Follow all safety instructions and emergency procedures.</li>
              </ul>
              <p className="text-forest-400 leading-relaxed mt-4">
                Violation of the code of conduct may result in immediate disqualification and removal 
                from the Event without refund.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">5. Intellectual Property</h2>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li>Participants retain ownership of their original work submitted during the Event.</li>
                <li>By participating, you grant the Organizers a non-exclusive license to use photos, 
                    videos, and descriptions of your participation for promotional purposes.</li>
                <li>Plagiarism or use of copyrighted material without permission will result in disqualification.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">6. Liability & Disclaimers</h2>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li>Participants attend and participate in the Event at their own risk.</li>
                <li>The Organizers are not liable for any personal injury, loss, or damage to property.</li>
                <li>Participants are responsible for safeguarding their personal belongings.</li>
                <li>The Organizers are not liable for any travel or accommodation issues.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">7. Photography & Recording</h2>
              <p className="text-forest-400 leading-relaxed">
                The Event will be photographed and recorded for promotional and archival purposes. 
                By attending, you consent to being photographed, filmed, and recorded and grant 
                permission for your likeness to be used in promotional materials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">8. Modifications & Cancellations</h2>
              <ul className="list-disc list-inside text-forest-400 space-y-2">
                <li>The Organizers reserve the right to modify, postpone, or cancel the Event due to 
                    unforeseen circumstances, including but not limited to natural disasters, government 
                    restrictions, or safety concerns.</li>
                <li>In case of cancellation, registered participants will be notified via email and 
                    refund policies will apply as stated in our Refund Policy.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">9. Governing Law</h2>
              <p className="text-forest-400 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with 
                the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction 
                of the courts in Udupi, Karnataka.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gold-600 mb-4">10. Contact</h2>
              <p className="text-forest-400 leading-relaxed">
                For any questions regarding these terms, please contact us at{' '}
                <a href="mailto:varnothsava@smvitm.ac.in" className="text-gold-500 hover:underline">
                  varnothsava@smvitm.ac.in
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
