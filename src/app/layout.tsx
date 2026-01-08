import type { Metadata } from 'next'
import { Inter, Cinzel_Decorative, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
  title: 'Varnothsava 2026 | SMVITM',
  description: 'Experience the grandest inter-collegiate cultural and technical fest of coastal Karnataka. Varnothsava 2026 - Where tradition meets innovation.',
  keywords: ['Varnothsava', 'SMVITM', 'college fest', 'cultural fest', 'technical fest', '2026'],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Varnothsava 2026 | SMVITM',
    description: 'Experience the grandest inter-collegiate cultural and technical fest of coastal Karnataka.',
    type: 'website',
    images: [
      {
        url: '/images/logo-og.png',
        width: 1200,
        height: 630,
        alt: 'Varnothsava 2026 - SMVITM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varnothsava 2026 | SMVITM',
    description: 'Experience the grandest inter-collegiate cultural and technical fest of coastal Karnataka.',
    images: ['/images/logo-og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${jetbrains.variable}`}>
      <body className="font-body min-h-screen flex flex-col bg-forest-950 text-forest-100 antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
