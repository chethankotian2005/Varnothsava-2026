# Varnothsava 2026 - The Digital Aranya

A stunning cultural festival website featuring the "Cyber-Aranya" theme - a fusion of ancient Hoysala heritage with modern cyberpunk aesthetics.

## 🎨 Theme Features

- **Monolithic Stone Pillars**: 3D carved stone pillars with etched cyan circuit paths
- **Brushed Gold Foil**: Embossed metallic title with subtle glint effects
- **Glassmorphism Countdown**: Frosted glass countdown timer with gold accents
- **Firefly Particles**: Ambient floating fireflies and data-bits with mouse interaction
- **Deep Dark Emerald**: Rich forest-inspired color palette with radial vignette
- **Enhanced Parallax**: Multi-layer depth effects responding to mouse movement

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **3D Graphics**: SVG with advanced filters (feTurbulence, feGaussianBlur, feDiffuseLighting)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Varnothsava 2026 - Digital Aranya theme"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

## 🎨 Color Palette

- **Deep Forest**: `#051612`, `#020a08`
- **Charcoal Stone**: `#0d0d0b` to `#1c1b18`
- **Antique Gold**: `#D4AF37`
- **Cyber Cyan**: `#00F2FF`
- **Emerald Accents**: `#1a3a2a`, `#153525`

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & Tailwind
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── events/
│       └── page.tsx         # Events listing
├── components/
│   ├── effects/
│   │   ├── AnimatedBackground.tsx
│   │   ├── BreathingLogo.tsx
│   │   ├── DigitalEtching.tsx
│   │   ├── GoldenPillars.tsx
│   │   ├── MistEffect.tsx
│   │   └── ParticleField.tsx
│   ├── events/
│   │   ├── CategoryFilter.tsx
│   │   ├── EventCard.tsx
│   │   └── EventModal.tsx
│   ├── home/
│   │   ├── CyberAranyaHero.tsx
│   │   ├── EventCategories.tsx
│   │   ├── FestIdentity.tsx
│   │   └── ...
│   └── layout/
│       ├── Footer.tsx
│       └── Navbar.tsx
└── data/
    └── events.ts            # Event data
```

## 🎯 Key Components

### GoldenPillars
Monolithic stone pillars with:
- Irregular chipped edges using SVG Q-curves
- Rock texture via feTurbulence noise
- Etched Hoysala medallions with temple wheel patterns
- Animated cyan circuit paths with stroke-dasharray
- Moss and vine overlays for environmental blending
- Bottom mist fade and global vignette overlay

### DigitalEtching
Main title with:
- Multi-layer embossed shadows for metallic depth
- Periodic glint animation (4.5s interval)
- Soft rotated highlight with blur

### ParticleField
Interactive particle system:
- 80% fireflies, 20% data-bits
- Mouse repulsion physics (120px radius)
- Individual glow effects per particle type

## 🔧 Environment Variables

No environment variables required for basic deployment. Add these if needed:

```env
# Optional analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional CMS
# Add your CMS keys here
```

## 📝 License

Copyright © 2026 Varnothsava. All rights reserved.

## 🤝 Contributing

For event updates or bug reports, please contact the organizing committee.

---

**Built with ❤️ for Varnothsava 2026**
