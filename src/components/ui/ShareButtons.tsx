'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, X, Twitter, Facebook, Linkedin, Link2, Check, MessageCircle } from 'lucide-react'
import { toast } from 'sonner'

interface ShareButtonsProps {
  title: string
  description?: string
  url?: string
  hashtags?: string[]
  variant?: 'floating' | 'inline'
}

export default function ShareButtons({
  title,
  description = 'Check out Varnothsava 2026 - Karnataka\'s grandest inter-collegiate fest!',
  url,
  hashtags = ['Varnothsava2026', 'SMVITM', 'CollegeFest'],
  variant = 'floating',
}: ShareButtonsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  // Use current page URL if not provided
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://varnothsava-2026.vercel.app')
  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)
  const hashtagString = hashtags.join(',')

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=${hashtagString}`,
      color: 'hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2]',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
      color: 'hover:bg-[#4267B2]/20 hover:text-[#4267B2]',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:bg-[#0A66C2]/20 hover:text-[#0A66C2]',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'hover:bg-[#25D366]/20 hover:text-[#25D366]',
    },
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      toast.success('Link copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Failed to copy link')
    }
  }

  const handleShare = (link: typeof shareLinks[0]) => {
    window.open(link.url, '_blank', 'width=600,height=400,noopener,noreferrer')
    setIsOpen(false)
  }

  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-forest-400 mr-2">Share:</span>
        {shareLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleShare(link)}
            className={`p-2 rounded-lg bg-forest-800/50 text-forest-400 transition-all ${link.color}`}
            title={`Share on ${link.name}`}
          >
            <link.icon className="w-4 h-4" />
          </button>
        ))}
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-forest-800/50 text-forest-400 hover:bg-gold-600/20 hover:text-gold-500 transition-all"
          title="Copy link"
        >
          {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
        </button>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Share Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-3 rounded-full transition-colors ${
          isOpen
            ? 'bg-forest-700 text-gold-500'
            : 'bg-forest-800/80 text-forest-400 hover:text-gold-500 hover:bg-forest-700'
        }`}
        title="Share"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="share"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Share2 className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Share Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute bottom-full right-0 mb-2 bg-forest-800 border border-forest-700/50 rounded-xl p-2 shadow-xl min-w-[180px]"
          >
            <div className="text-xs text-forest-500 px-2 py-1 mb-1">Share via</div>
            {shareLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleShare(link)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-forest-300 transition-all ${link.color}`}
              >
                <link.icon className="w-4 h-4" />
                <span className="text-sm">{link.name}</span>
              </motion.button>
            ))}
            <div className="border-t border-forest-700/50 mt-1 pt-1">
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={copyToClipboard}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-forest-300 hover:bg-gold-600/20 hover:text-gold-500 transition-all"
              >
                {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                <span className="text-sm">{copied ? 'Copied!' : 'Copy Link'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
