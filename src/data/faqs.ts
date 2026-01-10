// FAQ Data for Varnothsava 2026
export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export const faqCategories = [
  { id: 'general', name: 'General', icon: 'info' },
  { id: 'registration', name: 'Registration', icon: 'clipboard' },
  { id: 'events', name: 'Events', icon: 'calendar' },
  { id: 'accommodation', name: 'Accommodation', icon: 'home' },
  { id: 'payment', name: 'Payment', icon: 'credit-card' },
  { id: 'technical', name: 'Technical Issues', icon: 'settings' },
]

export const faqs: FAQ[] = [
  // General FAQs
  {
    id: 'what-is-varnothsava',
    question: 'What is Varnothsava?',
    answer: 'Varnothsava is the annual inter-collegiate cultural and technical fest of SMVITM, Bantakal, Udupi. It is one of the largest college fests in coastal Karnataka, featuring 50+ events across cultural, technical, arts, literary, media, and gaming categories.',
    category: 'general',
  },
  {
    id: 'when-where',
    question: 'When and where is Varnothsava 2026?',
    answer: 'Varnothsava 2026 will be held from March 15-17, 2026 at the SMVITM campus in Bantakal, Udupi, Karnataka. The fest spans 3 action-packed days with events running from 9 AM to 10 PM each day.',
    category: 'general',
  },
  {
    id: 'who-can-participate',
    question: 'Who can participate in Varnothsava?',
    answer: 'Varnothsava is open to all college students across India. You must be a currently enrolled undergraduate or postgraduate student with a valid college ID. Some events may have specific eligibility criteria mentioned in their rules.',
    category: 'general',
  },
  {
    id: 'theme',
    question: 'What is the theme for Varnothsava 2026?',
    answer: '"Cyber-Aranya Awakens" - Where Karnataka\'s rich cultural heritage meets cutting-edge technology. The theme celebrates the fusion of ancient traditions with futuristic innovation, reflected in our events, decor, and overall experience.',
    category: 'general',
  },
  {
    id: 'contact',
    question: 'How can I contact the organizers?',
    answer: 'You can reach us at contact@varnothsava.in or call our helpline at +91 98765 43210 (9 AM - 9 PM IST). You can also DM us on Instagram @varnothsava_smvitm or visit the Contact page for more options.',
    category: 'general',
  },

  // Registration FAQs
  {
    id: 'how-to-register',
    question: 'How do I register for Varnothsava?',
    answer: 'Visit our Register page, fill in your personal details, select the events you want to participate in, complete the payment, and you\'re done! You\'ll receive a confirmation email with your QR code pass.',
    category: 'registration',
  },
  {
    id: 'registration-fee',
    question: 'What is the registration fee?',
    answer: 'Registration fees vary by event. Individual events range from ₹100-500, while team events range from ₹400-1500. We offer an Early Bird discount of 20% off on all registrations made before February 28, 2026.',
    category: 'registration',
  },
  {
    id: 'early-bird',
    question: 'What is the Early Bird offer?',
    answer: 'Register before February 28, 2026 and get 20% off on all event registration fees! This is our way of rewarding early planners. The discount is automatically applied at checkout.',
    category: 'registration',
  },
  {
    id: 'multiple-events',
    question: 'Can I participate in multiple events?',
    answer: 'Absolutely! You can register for as many events as you want, as long as they don\'t have conflicting time slots. Our registration system will automatically warn you about any scheduling conflicts.',
    category: 'registration',
  },
  {
    id: 'team-registration',
    question: 'How does team registration work?',
    answer: 'For team events, one member registers as the team leader and adds all team member details. The team leader is responsible for the registration fee. Each team member will receive their individual QR code pass.',
    category: 'registration',
  },
  {
    id: 'modify-registration',
    question: 'Can I modify my registration after submitting?',
    answer: 'You can modify your event selections up to 48 hours before the fest begins. Changes after payment may require additional payment or partial refunds. Contact our support team for assistance.',
    category: 'registration',
  },

  // Events FAQs
  {
    id: 'event-categories',
    question: 'What categories of events are there?',
    answer: 'We have 6 main categories: Cultural (dance, music, fashion), Technical (hackathon, robotics, coding), Fine Arts (painting, rangoli), Literary (debate, quiz), Media & Film (short film, photography), and E-Sports (Valorant, BGMI).',
    category: 'events',
  },
  {
    id: 'flagship-events',
    question: 'What are the flagship events?',
    answer: 'Our flagship events include Code Crusade (24-hour hackathon with ₹75,000 prize), Battle of Bands (₹50,000 prize), Robo Wars (₹60,000 prize), and Runway Regal fashion show (₹40,000 prize).',
    category: 'events',
  },
  {
    id: 'prizes',
    question: 'What is the total prize pool?',
    answer: 'Varnothsava 2026 has a total prize pool of over ₹10 Lakhs! Individual event prizes range from ₹12,000 to ₹75,000. All winners also receive certificates and trophies.',
    category: 'events',
  },
  {
    id: 'event-rules',
    question: 'Where can I find detailed event rules?',
    answer: 'Each event has its own detailed rulebook available on the Events page. Click on any event to view its complete rules, judging criteria, and requirements. Rule books are also available for download.',
    category: 'events',
  },
  {
    id: 'event-timing',
    question: 'How can I check event timings?',
    answer: 'Check our Schedule page for the complete 3-day schedule. Each event\'s timing is also listed on its detail page. We recommend arriving at least 30 minutes before your event starts.',
    category: 'events',
  },

  // Accommodation FAQs
  {
    id: 'accommodation-available',
    question: 'Is accommodation provided?',
    answer: 'Yes! We provide accommodation for outstation participants at ₹300 per night (shared rooms in college hostels) or you can opt for nearby hotels (₹800-2000/night). Book through our registration portal.',
    category: 'accommodation',
  },
  {
    id: 'food',
    question: 'Is food provided during the fest?',
    answer: 'The campus has multiple food courts and canteens operating throughout the fest. Registered participants get a 15% discount at partner food stalls. Special dietary requirements can be accommodated on request.',
    category: 'accommodation',
  },
  {
    id: 'how-to-reach',
    question: 'How do I reach SMVITM campus?',
    answer: 'SMVITM is located in Bantakal, 8 km from Udupi city. The nearest railway station is Udupi (8 km), and the nearest airport is Mangalore International Airport (65 km). We provide shuttle services from Udupi railway station.',
    category: 'accommodation',
  },
  {
    id: 'parking',
    question: 'Is parking available?',
    answer: 'Yes, we have ample parking space for two-wheelers and four-wheelers. Parking is free for registered participants. Show your QR code at the parking entrance.',
    category: 'accommodation',
  },

  // Payment FAQs
  {
    id: 'payment-methods',
    question: 'What payment methods are accepted?',
    answer: 'We accept UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards (Visa, Mastercard, Rupay), Net Banking (all major banks), and Wallets. All payments are processed securely through Razorpay.',
    category: 'payment',
  },
  {
    id: 'refund-policy',
    question: 'What is the refund policy?',
    answer: 'Full refund if cancelled before March 1, 2026. 50% refund for cancellations between March 1-10. No refunds after March 10. Refunds are processed within 7-10 business days to the original payment method.',
    category: 'payment',
  },
  {
    id: 'payment-failed',
    question: 'My payment failed but money was deducted. What do I do?',
    answer: 'Don\'t worry! If payment was deducted but registration failed, the amount will be automatically refunded within 5-7 business days. If not, contact us with your transaction ID at payments@varnothsava.in.',
    category: 'payment',
  },
  {
    id: 'gst',
    question: 'Is GST applicable on registration fees?',
    answer: 'No, registration fees displayed are inclusive of all taxes. There are no hidden charges. What you see is what you pay.',
    category: 'payment',
  },

  // Technical FAQs
  {
    id: 'qr-code-not-received',
    question: 'I didn\'t receive my QR code. What do I do?',
    answer: 'Check your spam/junk folder first. If not found, login to your dashboard to download the QR code. Still facing issues? Contact tech@varnothsava.in with your registration ID.',
    category: 'technical',
  },
  {
    id: 'login-issues',
    question: 'I\'m unable to login to my account.',
    answer: 'Try resetting your password using the "Forgot Password" option. If you registered with Google/social login, use the same method. Clear browser cache if issues persist. Contact support if nothing works.',
    category: 'technical',
  },
  {
    id: 'website-not-loading',
    question: 'The website is slow or not loading.',
    answer: 'Try refreshing the page or using a different browser. Clear your cache and cookies. If the issue persists, it might be high traffic - try again after some time. Check our Instagram for any server updates.',
    category: 'technical',
  },
  {
    id: 'browser-support',
    question: 'Which browsers are supported?',
    answer: 'Our website works best on the latest versions of Chrome, Firefox, Safari, and Edge. We recommend updating your browser for the best experience. Some features may not work on Internet Explorer.',
    category: 'technical',
  },
]

// Get FAQs by category
export const getFAQsByCategory = (categoryId: string) => 
  faqs.filter(faq => faq.category === categoryId)

// Search FAQs
export const searchFAQs = (query: string) => {
  const lowercaseQuery = query.toLowerCase()
  return faqs.filter(faq => 
    faq.question.toLowerCase().includes(lowercaseQuery) || 
    faq.answer.toLowerCase().includes(lowercaseQuery)
  )
}
