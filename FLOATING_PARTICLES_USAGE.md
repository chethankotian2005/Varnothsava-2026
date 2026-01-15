# Floating Particles Usage Guide

## Overview
Subtle golden particles that float in the background, adding depth and a premium feel to your pages. Lightweight canvas-based animation that creates an elegant ambient effect.

## Basic Setup

### Step 1: Add to Layout
Add the component to your root layout for site-wide effect:

```tsx
// src/app/layout.tsx
import FloatingParticles from '@/components/effects/FloatingParticles';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FloatingParticles />
        {children}
      </body>
    </html>
  );
}
```

### Step 2: Or Add to Specific Pages
For page-specific particles:

```tsx
// src/app/page.tsx
import FloatingParticles from '@/components/effects/FloatingParticles';

export default function HomePage() {
  return (
    <main>
      <FloatingParticles />
      <section className="relative z-10">
        {/* Your content */}
      </section>
    </main>
  );
}
```

## How It Works

1. **Canvas-based**: Uses HTML5 canvas for efficient rendering
2. **50 Particles**: Golden dots floating across the screen
3. **Wrapping**: Particles wrap around screen edges
4. **Responsive**: Automatically adjusts to window resize
5. **Non-intrusive**: `pointer-events-none` allows clicking through
6. **Blend Mode**: Uses `screen` blend mode for subtle effect

## Customization Options

### Modify Particle Count
```tsx
// In FloatingParticles.tsx, change the loop:
for (let i = 0; i < 100; i++) {  // More particles
  particles.push({...});
}

for (let i = 0; i < 25; i++) {  // Fewer particles
  particles.push({...});
}
```

### Adjust Particle Speed
```tsx
// Faster movement
speedX: (Math.random() - 0.5) * 1.5,
speedY: (Math.random() - 0.5) * 1.5,

// Slower, more subtle
speedX: (Math.random() - 0.5) * 0.2,
speedY: (Math.random() - 0.5) * 0.2,
```

### Change Particle Size
```tsx
// Larger particles
size: Math.random() * 5 + 2,

// Tiny particles
size: Math.random() * 2 + 0.5,
```

### Modify Color & Opacity
```tsx
// White particles
ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;

// Cyan particles
ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;

// More opacity
opacity: Math.random() * 0.8 + 0.3,

// Less visible
opacity: Math.random() * 0.3 + 0.1,
```

## Real-World Examples

### Example 1: Hero Section with Particles
```tsx
<section className="hero-section min-h-screen relative">
  <FloatingParticles />
  <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h1 className="gold-gradient-text text-8xl font-bold mb-6">
        Varnothsava 2026
      </h1>
      <p className="text-2xl text-gray-200 mb-8">
        Where Legends Are Born
      </p>
    </div>
  </div>
</section>
```

### Example 2: Full Page Background
```tsx
export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black">
      <FloatingParticles />
      
      <div className="relative z-10">
        <section className="container mx-auto px-4 py-20">
          <h1 className="gradient-heading text-6xl mb-12">
            Featured Events
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Event cards */}
          </div>
        </section>
      </div>
    </main>
  );
}
```

### Example 3: Modal/Overlay with Particles
```tsx
<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
  <FloatingParticles />
  
  <div className="relative z-10 glass-card-dark max-w-2xl w-full mx-4 p-8">
    <h2 className="gradient-heading text-3xl mb-6">
      Registration Complete!
    </h2>
    <p className="text-gray-200 mb-6">
      You're all set for Varnothsava 2026
    </p>
    <button className="gradient-shimmer bg-gold-500 text-black px-8 py-3 rounded-lg font-bold">
      View Details
    </button>
  </div>
</div>
```

## Advanced Customizations

### Create Multiple Particle Types

```tsx
'use client';
import { useEffect, useRef } from 'react';

function EnhancedFloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    // Gold particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: '212, 175, 55', // Gold
      });
    }

    // Cyan particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        color: '0, 255, 255', // Cyan
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

export default EnhancedFloatingParticles;
```

### Add Pulsing Effect

```tsx
function animate() {
  if (!ctx || !canvas) return;
  
  const time = Date.now() * 0.001; // Current time in seconds
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle, index) => {
    // Add pulsing based on time
    const pulseOpacity = particle.opacity * (0.7 + Math.sin(time + index) * 0.3);
    
    ctx.fillStyle = `rgba(212, 175, 55, ${pulseOpacity})`;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();

    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x > canvas.width) particle.x = 0;
    if (particle.x < 0) particle.x = canvas.width;
    if (particle.y > canvas.height) particle.y = 0;
    if (particle.y < 0) particle.y = canvas.height;
  });

  requestAnimationFrame(animate);
}
```

### Add Mouse Interaction

```tsx
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const mouse = { x: 0, y: 0 };
  const particles: Array<{
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    baseX: number;
    baseY: number;
  }> = [];

  for (let i = 0; i < 50; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push({
      x,
      y,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      baseX: x,
      baseY: y,
    });
  }

  const handleMouseMove = (e: MouseEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  function animate() {
    if (!ctx || !canvas) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      // Calculate distance from mouse
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 150;

      if (distance < maxDistance) {
        // Push particle away from mouse
        const angle = Math.atan2(dy, dx);
        const force = (maxDistance - distance) / maxDistance;
        particle.x -= Math.cos(angle) * force * 5;
        particle.y -= Math.sin(angle) * force * 5;
      } else {
        // Return to normal movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;
      }

      ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      if (particle.x > canvas.width) particle.x = 0;
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.y > canvas.height) particle.y = 0;
      if (particle.y < 0) particle.y = canvas.height;
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);
```

## Combining with Other Effects

### Particles + Animated Gradient
```tsx
<section className="animated-gradient min-h-screen relative">
  <FloatingParticles />
  <div className="relative z-10">
    {/* Content */}
  </div>
</section>
```

### Particles + Glass Cards
```tsx
<main className="min-h-screen bg-black">
  <FloatingParticles />
  
  <div className="relative z-10 container mx-auto px-4 py-20">
    <div className="grid md:grid-cols-3 gap-8">
      <div className="glass-card-dark p-8">
        <h3 className="gold-gradient-text text-2xl mb-4">
          Premium Feature
        </h3>
        <p className="text-gray-300">
          With floating particles in background
        </p>
      </div>
    </div>
  </div>
</main>
```

### Particles + Scroll Animations
```tsx
<section className="relative min-h-screen">
  <FloatingParticles />
  
  <div className="relative z-10 container mx-auto px-4 py-20">
    <div data-animate="fade-up" className="glass-card p-8">
      <h2 className="gradient-heading text-4xl mb-6">
        Animated Content
      </h2>
      <p className="text-gray-200">
        Particles add depth to scroll animations
      </p>
    </div>
  </div>
</section>
```

## Performance Considerations

1. **Particle Count**: 50 particles is optimal for most cases
   - Less than 30: May look sparse on large screens
   - More than 100: May impact performance on slower devices

2. **Canvas Size**: Auto-resizes on window resize event

3. **Animation Loop**: Uses `requestAnimationFrame` for 60fps performance

4. **Z-index**: Set to `z-0` to stay behind content

5. **Pointer Events**: `pointer-events-none` ensures particles don't interfere with interactions

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- HTML5 Canvas API required
- Automatic fallback: Component simply won't render if canvas unsupported

## Mobile Optimization

The default settings work well on mobile, but you can reduce particle count for better performance:

```tsx
const isMobile = window.innerWidth < 768;
const particleCount = isMobile ? 25 : 50;

for (let i = 0; i < particleCount; i++) {
  particles.push({...});
}
```

## Best Practices

1. **Use as Background**: Always keep particles behind content (z-0 or low z-index)
2. **Subtle is Better**: 30% opacity is ideal - don't distract from content
3. **Color Choice**: Gold works well with dark themes; adjust for your palette
4. **Performance**: Test on mobile devices before deploying
5. **Don't Overuse**: Use on hero sections or special pages, not everywhere

## Troubleshooting

**Q: Particles not visible?**
A: Check z-index - ensure content has higher z-index (z-10+)

**Q: Performance issues?**
A: Reduce particle count or adjust speed/size

**Q: Canvas not full screen?**
A: Ensure no CSS conflicts with fixed positioning

**Q: Particles too bright/visible?**
A: Adjust opacity in className (opacity-30 to opacity-20)
