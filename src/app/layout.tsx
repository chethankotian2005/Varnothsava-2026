import type { Metadata } from 'next'
import { Inter, Cinzel_Decorative, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/layout/ChatWidget'
import ParallaxBackground from '@/components/effects/ParallaxBackground'
import { Toaster } from 'sonner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
})

const cinzel = Cinzel_Decorative({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-display',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Varnothsava 2026 | SMVITM - Where Heritage Meets Future',
  description: 'Join 5000+ students at Karnataka\'s grandest inter-collegiate cultural and technical fest. March 15-17, 2026 at SMVITM Udupi. 50+ events, ₹10L+ prizes!',
  keywords: ['Varnothsava', 'SMVITM', 'college fest', 'cultural fest', 'technical fest', '2026', 'hackathon', 'Karnataka', 'Udupi', 'inter-collegiate'],
  authors: [{ name: 'SMVITM', url: 'https://www.smvitm.ac.in' }],
  creator: 'SMVITM',
  publisher: 'SMVITM',
  metadataBase: new URL('https://varnothsava-2026.vercel.app'),
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Varnothsava 2026 | SMVITM - Where Heritage Meets Future',
    description: 'Karnataka\'s grandest inter-collegiate fest. 50+ events, 5000+ participants, ₹10L+ prizes. March 15-17, 2026 at SMVITM Udupi.',
    url: 'https://varnothsava-2026.vercel.app',
    siteName: 'Varnothsava 2026',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/logo-og.png',
        width: 1200,
        height: 630,
        alt: 'Varnothsava 2026 - Where Heritage Meets Future',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varnothsava 2026 | SMVITM',
    description: 'Join Karnataka\'s grandest college fest. 50+ events, ₹10L+ prizes! March 15-17, 2026.',
    images: ['/images/logo-og.png'],
    creator: '@varnothsava',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Varnothsava 2026',
  description: 'Karnataka\'s grandest inter-collegiate cultural and technical fest featuring 50+ events, hackathons, cultural performances, and more.',
  startDate: '2026-03-15T09:00:00+05:30',
  endDate: '2026-03-17T18:00:00+05:30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'SMVITM - Shri Madhwa Vadiraja Institute of Technology & Management',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bantakal',
      addressLocality: 'Udupi',
      addressRegion: 'Karnataka',
      postalCode: '574115',
      addressCountry: 'IN',
    },
  },
  image: ['https://varnothsava-2026.vercel.app/images/logo-og.png'],
  organizer: {
    '@type': 'Organization',
    name: 'SMVITM',
    url: 'https://www.smvitm.ac.in',
  },
  offers: {
    '@type': 'Offer',
    price: '500',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-01-01T00:00:00+05:30',
    url: 'https://varnothsava-2026.vercel.app/register',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-body min-h-screen flex flex-col bg-forest-950 text-forest-100 antialiased">
        {/* 4-Layer Parallax Background */}
        <ParallaxBackground />
        
        <Navbar />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(10, 22, 18, 0.95)',
              border: '1px solid #D4AF37',
              color: '#E8E4DC',
              backdropFilter: 'blur(12px)',
            },
            className: 'font-body',
          }}
          theme="dark"
          richColors
        />
        <main className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
