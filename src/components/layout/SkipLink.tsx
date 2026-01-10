'use client'

// Skip to main content link for accessibility
// Allows keyboard users to bypass navigation and jump directly to content

export default function SkipLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const main = document.querySelector('main')
    if (main) {
      main.setAttribute('tabindex', '-1')
      main.focus()
      main.removeAttribute('tabindex')
    }
  }

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="
        sr-only focus:not-sr-only
        focus:fixed focus:top-4 focus:left-4 focus:z-[100]
        focus:px-4 focus:py-2 
        focus:bg-gold-600 focus:text-forest-950
        focus:font-semibold focus:rounded-lg
        focus:shadow-lg focus:outline-none
        focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-forest-950
        transition-all
      "
    >
      Skip to main content
    </a>
  )
}
