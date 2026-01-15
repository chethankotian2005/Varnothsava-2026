# Tilt Card 3D Hover Effect Usage Guide

## Overview
Interactive 3D tilt effect that follows mouse movement, creating a premium and engaging card experience. Perfect for highlighting important content like event cards, features, testimonials, and arena selections.

## Basic Usage

```tsx
import TiltCard from '@/components/ui/TiltCard';

<TiltCard>
  <div className="glass-card p-6">
    <h3>Your Content</h3>
  </div>
</TiltCard>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | **required** | Content to be tilted |
| `className` | `string` | `''` | Additional CSS classes |

## Features

1. **3D Perspective**: 1000px perspective for realistic depth
2. **Mouse Tracking**: Tilts based on cursor position
3. **Smooth Animation**: 0.1s transition for fluid movement
4. **Scale Effect**: Slightly enlarges (1.02x) on hover
5. **Auto Reset**: Returns to normal position on mouse leave
6. **GPU Accelerated**: Uses scale3d for optimal performance

## Real-World Examples

### Example 1: Event Cards
```tsx
<div className="grid md:grid-cols-3 gap-8">
  <TiltCard>
    <div className="gradient-border rounded-xl overflow-hidden">
      <div className="bg-black/95 p-6">
        <img 
          src="/events/hackathon.jpg" 
          alt="Hackathon"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="gradient-heading text-2xl mb-2">
          Code Combat
        </h3>
        <p className="text-gray-300 mb-4">
          24-hour coding marathon
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gold-400 font-semibold">₹50K Prize</span>
          <span className="text-gray-400">Team: 2-4</span>
        </div>
        <button className="gradient-shimmer bg-gold-500 text-black px-6 py-2 rounded-lg font-bold w-full">
          Register Now
        </button>
      </div>
    </div>
  </TiltCard>

  {/* More event cards... */}
</div>
```

### Example 2: Stats/Features Cards
```tsx
<section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <h2 className="gradient-heading text-5xl text-center mb-12">
      Why Varnothsava?
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      <TiltCard>
        <div className="premium-card text-center">
          <div className="gold-shimmer w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-gold-400" />
          </div>
          <h3 className="gold-gradient-text text-4xl font-bold mb-3">
            <AnimatedCounter end={10} prefix="₹" suffix="L+" />
          </h3>
          <p className="text-xl text-white font-semibold mb-2">
            Prize Pool
          </p>
          <p className="text-gray-400">
            Across all events
          </p>
        </div>
      </TiltCard>

      <TiltCard>
        <div className="premium-card text-center">
          <div className="gold-shimmer w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-gold-400" />
          </div>
          <h3 className="gold-gradient-text text-4xl font-bold mb-3">
            <AnimatedCounter end={5000} suffix="+" separator={true} />
          </h3>
          <p className="text-xl text-white font-semibold mb-2">
            Participants
          </p>
          <p className="text-gray-400">
            From 100+ colleges
          </p>
        </div>
      </TiltCard>

      <TiltCard>
        <div className="premium-card text-center">
          <div className="gold-shimmer w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10 text-gold-400" />
          </div>
          <h3 className="gold-gradient-text text-4xl font-bold mb-3">
            <AnimatedCounter end={50} suffix="+" />
          </h3>
          <p className="text-xl text-white font-semibold mb-2">
            Events
          </p>
          <p className="text-gray-400">
            Technical & Cultural
          </p>
        </div>
      </TiltCard>
    </div>
  </div>
</section>
```

### Example 3: Arena Selection Cards
```tsx
<section className="py-20 animated-gradient">
  <div className="container mx-auto px-4">
    <h2 className="gradient-heading text-6xl text-center mb-16">
      Choose Your Arena
    </h2>
    
    <div className="grid md:grid-cols-2 gap-12">
      <TiltCard>
        <div className="glass-card-dark rounded-2xl overflow-hidden">
          <div className="relative h-64">
            <img 
              src="/arenas/technical.jpg" 
              alt="Technical Arena"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          </div>
          <div className="p-8">
            <h3 className="gold-gradient-text text-4xl font-bold mb-4">
              Technical Arena
            </h3>
            <p className="text-gray-200 text-lg mb-6">
              Hackathons, coding competitions, robotics, and more
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <Code className="w-5 h-5 text-gold-400" />
                24-hour Hackathon
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Cpu className="w-5 h-5 text-gold-400" />
                Competitive Programming
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Bot className="w-5 h-5 text-gold-400" />
                Robotics Challenge
              </li>
            </ul>
            <button className="gradient-shimmer bg-gold-500 text-black px-8 py-4 rounded-lg font-bold text-lg w-full">
              Explore Technical Events
            </button>
          </div>
        </div>
      </TiltCard>

      <TiltCard>
        <div className="glass-card-dark rounded-2xl overflow-hidden">
          <div className="relative h-64">
            <img 
              src="/arenas/cultural.jpg" 
              alt="Cultural Arena"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          </div>
          <div className="p-8">
            <h3 className="gold-gradient-text text-4xl font-bold mb-4">
              Cultural Arena
            </h3>
            <p className="text-gray-200 text-lg mb-6">
              Dance, music, drama, fashion shows, and entertainment
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <Music className="w-5 h-5 text-gold-400" />
                Celebrity Proshow
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Drama className="w-5 h-5 text-gold-400" />
                Street Play Competition
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Sparkles className="w-5 h-5 text-gold-400" />
                Fashion Show
              </li>
            </ul>
            <button className="gradient-shimmer bg-gold-500 text-black px-8 py-4 rounded-lg font-bold text-lg w-full">
              Explore Cultural Events
            </button>
          </div>
        </div>
      </TiltCard>
    </div>
  </div>
</section>
```

### Example 4: Testimonial Cards
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  <TiltCard>
    <div className="gradient-border rounded-xl">
      <div className="bg-black/95 p-8">
        <div className="flex text-gold-400 mb-4">
          ★★★★★
        </div>
        <p className="text-gray-200 text-lg mb-6">
          "Best college fest experience ever! The energy, events, and organization were top-notch."
        </p>
        <div className="flex items-center gap-4">
          <div className="gold-shimmer w-14 h-14 rounded-full overflow-hidden">
            <img 
              src="/testimonials/avatar1.jpg" 
              alt="Priya"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">Priya Sharma</h4>
            <p className="text-gray-400">NITK Surathkal</p>
          </div>
        </div>
      </div>
    </div>
  </TiltCard>

  {/* More testimonials... */}
</div>
```

### Example 5: Sponsor Cards
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  <TiltCard>
    <div className="glass-card p-6 flex items-center justify-center min-h-[150px]">
      <img 
        src="/sponsors/company1.png" 
        alt="Sponsor"
        className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
      />
    </div>
  </TiltCard>

  {/* More sponsors... */}
</div>
```

### Example 6: Team Member Cards
```tsx
<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
  <TiltCard>
    <div className="glass-card-dark rounded-xl overflow-hidden">
      <div className="gold-shimmer">
        <img 
          src="/team/member1.jpg" 
          alt="Team member"
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-1">
          Rahul Patel
        </h3>
        <p className="text-gold-400 font-semibold mb-3">
          Event Head
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </TiltCard>

  {/* More team members... */}
</div>
```

## Advanced Customization

### Adjust Tilt Intensity

Create a custom version with adjustable intensity:

```tsx
'use client';
import { useRef, MouseEvent } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // 0-1, default 1
}

function TiltCard({ children, className = '', intensity = 1 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Adjust tilt based on intensity
    const rotateX = ((y - centerY) / centerY) * 10 * intensity;
    const rotateY = ((x - centerX) / centerX) * -10 * intensity;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.1s ease-out',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
}

// Usage:
<TiltCard intensity={0.5}>  {/* Subtle tilt */}
  <div className="glass-card p-6">Content</div>
</TiltCard>

<TiltCard intensity={1.5}>  {/* Dramatic tilt */}
  <div className="glass-card p-6">Content</div>
</TiltCard>
```

### Add Glare Effect

```tsx
'use client';
import { useRef, MouseEvent } from 'react';

function TiltCardWithGlare({ children, className = '' }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glareRef.current) return;

    const card = cardRef.current;
    const glare = glareRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    // Glare effect
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    glare.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255,255,255,0.3), transparent 50%)`;
    glare.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glareRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    glareRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.1s ease-out',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none rounded-inherit z-10"
        style={{
          transition: 'opacity 0.3s',
          opacity: 0,
        }}
      />
      {children}
    </div>
  );
}
```

## Combining with Other Effects

### Tilt + Glass + Gradient + Animation
```tsx
<TiltCard>
  <div 
    className="premium-card gradient-glow"
    data-animate="fade-up"
  >
    <div className="gold-shimmer mb-6">
      <Trophy className="w-16 h-16 text-gold-400 mx-auto" />
    </div>
    <h3 className="gold-gradient-text text-3xl font-bold mb-4">
      Premium Feature
    </h3>
    <p className="text-gray-200 text-lg">
      With multiple premium effects combined
    </p>
  </div>
</TiltCard>
```

### Tilt + Parallax
```tsx
<section data-parallax="0.5">
  <div className="grid md:grid-cols-3 gap-8">
    <TiltCard>
      <div className="glass-card-dark p-8">
        <h3 className="gradient-heading text-2xl">
          Parallax + Tilt
        </h3>
      </div>
    </TiltCard>
  </div>
</section>
```

## Performance Considerations

1. **GPU Acceleration**: Uses `scale3d` and `perspective` for hardware acceleration
2. **Transform Only**: Only animates transform property (no layout recalc)
3. **Fast Transition**: 0.1s transition keeps it snappy
4. **Cleanup**: Properly resets on mouse leave
5. **Mobile**: Works on touch devices but less noticeable

## Mobile Behavior

The tilt effect works on mobile but is less pronounced since touch events don't provide continuous position updates like mouse movement. Consider:

```tsx
const isMobile = window.innerWidth < 768;
const tiltIntensity = isMobile ? 0.5 : 1;
```

## Best Practices

1. **Use Sparingly**: Apply to important cards only (not every element)
2. **Content Cards**: Best for event cards, features, testimonials
3. **Avoid on Buttons**: Can interfere with click interactions
4. **Test Mobile**: Ensure experience works on touch devices
5. **Combine Effects**: Works great with glass cards and gradients
6. **Grid Layouts**: Perfect for card grids (3-4 columns)

## Accessibility

- Works with keyboard navigation (focus states)
- Screen readers can access content normally
- No motion for users with `prefers-reduced-motion` preference

To respect reduced motion:

```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Don't apply tilt effect
  return <div className={className}>{children}</div>;
}
```

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Uses CSS transforms (widely supported)
- Graceful degradation: works without transform support (just no tilt)

## Troubleshooting

**Q: Tilt effect is too subtle?**
A: Increase rotation values (change `* 10` to `* 15` or higher)

**Q: Tilt feels laggy?**
A: Reduce transition duration or remove transition entirely

**Q: Cards overlap when tilted?**
A: Add more gap between cards or reduce scale on hover

**Q: Effect not working on mobile?**
A: Add touch event handlers for mobile support
