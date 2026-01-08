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
        // Ancient Ruins × Nature × Tech - Deep Forest Stone
        forest: {
          DEFAULT: '#0A1612',
          50: '#050D0A',
          100: '#081410',
          200: '#0A1612',
          300: '#0D1F18',
          400: '#102820',
          500: '#133128',
          600: '#163A30',
          700: '#194338',
          800: '#1C4C40',
          900: '#1F5548',
          950: '#0A1612',
        },
        // Ceremonial Antique Gold
        gold: {
          DEFAULT: '#C9A227',
          50: '#1A1608',
          100: '#2D260E',
          200: '#403614',
          300: '#54461A',
          400: '#675620',
          500: '#7A5F16',
          600: '#8B6914',
          700: '#A17A18',
          800: '#B88B1C',
          900: '#C9A227',
          950: '#E8D5A3',
        },
        // Glowing Ancient Tech Cyan/Teal
        cyan: {
          DEFAULT: '#00D4D4',
          50: '#001A1A',
          100: '#002D2D',
          200: '#004040',
          300: '#004D4D',
          400: '#006666',
          500: '#008080',
          600: '#009999',
          700: '#00B3B3',
          800: '#00CCCC',
          900: '#00D4D4',
          glow: '#00D4D4',
        },
        // Ancient Stone
        stone: {
          DEFAULT: '#0A1612',
          light: '#0D1F18',
          dark: '#050D0A',
        },
        // Heritage temple colors
        heritage: {
          maroon: '#5B2333',
          copper: '#9A6324',
          bronze: '#8B7355',
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
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cinzel Decorative', 'serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'forest-gradient': 'linear-gradient(145deg, #0A1612 0%, #0D1F18 50%, #0A1612 100%)',
        'gold-gradient': 'linear-gradient(145deg, #7A5F16 0%, #C9A227 50%, #E8D5A3 100%)',
        'stone-gradient': 'linear-gradient(180deg, #050D0A 0%, #0A1612 50%, #050D0A 100%)',
      },
      animation: {
        // Slow, purposeful, ancient animations
        'float': 'float 8s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 5s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'glow': 'glow 4s ease-in-out infinite alternate',
        'breathe': 'breathe 6s ease-in-out infinite',
        'spin-slow': 'spin 60s linear infinite',
        'circuit-flow': 'circuit-flow 4s linear infinite',
        'etch': 'etch 2.5s ease-out forwards',
        'glint': 'glint 6s ease-in-out infinite',
        'float-ember': 'float-ember 12s ease-in-out infinite',
        'ancient-pulse': 'ancient-pulse 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-gold': {
          '0%, 100%': { 
            boxShadow: '0 0 15px rgba(201, 162, 39, 0.25), 0 0 30px rgba(201, 162, 39, 0.15)'
          },
          '50%': { 
            boxShadow: '0 0 25px rgba(201, 162, 39, 0.35), 0 0 50px rgba(201, 162, 39, 0.2)'
          },
        },
        'ancient-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
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
