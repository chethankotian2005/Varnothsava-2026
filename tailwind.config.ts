import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cyber-Aranya Deep Forest base
        forest: {
          DEFAULT: '#051612',
          50: '#030d0a',
          100: '#051612',
          200: '#081f1a',
          300: '#0a2822',
          400: '#0d312a',
          500: '#103a32',
          600: '#13433a',
          700: '#164c42',
          800: '#19554a',
          900: '#1c5e52',
        },
        // Antique Gold - Primary accent
        gold: {
          DEFAULT: '#D4AF37',
          50: '#1a1608',
          100: '#2d260e',
          200: '#403614',
          300: '#54461a',
          400: '#675620',
          500: '#7a6626',
          600: '#8e762c',
          700: '#a18632',
          800: '#b49638',
          900: '#c7a63e',
          950: '#D4AF37',
        },
        // Cyber Cyan - Tech accent
        cyan: {
          DEFAULT: '#00F2FF',
          50: '#001a1c',
          100: '#003338',
          200: '#004d54',
          300: '#006670',
          400: '#00808c',
          500: '#0099a8',
          600: '#00b3c4',
          700: '#00cce0',
          800: '#00e6fc',
          900: '#00F2FF',
          glow: '#00F2FF',
        },
        // Legacy emerald for compatibility
        emerald: {
          glow: '#10b981',
          deep: '#064e3b',
        },
        // Obsidian for deep blacks
        obsidian: {
          DEFAULT: '#051612',
          50: '#0a1f1a',
          100: '#051612',
          200: '#030d0a',
        },
        // Background colors alias
        dark: {
          DEFAULT: '#051612',
          50: '#030d0a',
          100: '#051612',
          200: '#081f1a',
          300: '#0a2822',
          400: '#0d312a',
          500: '#103a32',
        },
        // Heritage temple colors
        heritage: {
          maroon: '#6b2c3d',
          copper: '#b87333',
          bronze: '#cd7f32',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cinzel Decorative', 'serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'forest-gradient': 'linear-gradient(135deg, #051612 0%, #081f1a 50%, #051612 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #f0d890 50%, #D4AF37 100%)',
        'cyber-gradient': 'linear-gradient(180deg, #051612 0%, #0a2822 50%, #051612 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'breathe': 'breathe 4s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'circuit-flow': 'circuit-flow 3s linear infinite',
        'etch': 'etch 2s ease-out forwards',
        'glint': 'glint 4s ease-in-out infinite',
        'float-ember': 'float-ember 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-gold': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2), 0 0 60px rgba(212, 175, 55, 0.1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.4), 0 0 120px rgba(212, 175, 55, 0.2)'
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 50px rgba(212, 175, 55, 0.6)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        'circuit-flow': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        etch: {
          '0%': { clipPath: 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { clipPath: 'inset(0 0% 0 0)', opacity: '1' },
        },
        glint: {
          '0%, 100%': { backgroundPosition: '-200% 0' },
          '50%': { backgroundPosition: '200% 0' },
        },
        'float-ember': {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) rotate(720deg)', opacity: '0' },
        },
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 10px 40px -4px rgba(212, 175, 55, 0.35)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.2)',
        'gold-intense': '0 0 50px rgba(212, 175, 55, 0.6), 0 0 100px rgba(212, 175, 55, 0.3)',
        'cyan-glow': '0 0 30px rgba(0, 242, 255, 0.3), 0 0 60px rgba(0, 242, 255, 0.15)',
        'cyan-intense': '0 0 50px rgba(0, 242, 255, 0.5), 0 0 100px rgba(0, 242, 255, 0.25)',
        'inner-gold': 'inset 0 2px 4px 0 rgba(212, 175, 55, 0.1)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
export default config
