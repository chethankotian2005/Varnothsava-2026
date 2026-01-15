
# Gradient Animations Usage Guide

## Overview
Animated gradients that flow, pulse, and shimmer to create a modern, engaging UI. Perfect for hero sections, premium cards, and eye-catching headings.

## Available Gradient Effects

### 1. **Animated Background Gradient** (.animated-gradient)
Flowing dark gradient background that shifts smoothly
```tsx
<section className="animated-gradient min-h-screen">
  <div className="container mx-auto py-20">
    <h1>Your Content</h1>
  </div>
</section>
```

### 2. **Gold Gradient Text** (.gold-gradient-text)
Animated gold text gradient for premium look
```tsx
<h1 className="gold-gradient-text text-6xl font-bold">
  Varnothsava 2026
</h1>
```

### 3. **Gradient Border** (.gradient-border)
Animated golden border that flows around elements
```tsx
<div className="gradient-border p-8 rounded-lg">
  <h3>Premium Feature</h3>
  <p>Content with animated border</p>
</div>
```

### 4. **Gradient Overlay** (.gradient-overlay)
Subtle dark gradient overlay for depth
```tsx
<div className="gradient-overlay relative">
  <img src="/hero.jpg" />
  <div className="relative z-10">
    <h2>Text appears above overlay</h2>
  </div>
</div>
```

### 5. **Gradient Shimmer** (.gradient-shimmer)
Shimmer effect that sweeps across elements
```tsx
<button className="gradient-shimmer bg-gold-500 px-6 py-3">
  Register Now
</button>
```

### 6. **Gold Shimmer** (.gold-shimmer)
Premium gold shimmer for special elements
```tsx
<div className="gold-shimmer stat-card p-6">
  <h3 className="text-4xl">5000+</h3>
  <p>Participants</p>
</div>
```

### 7. **Gradient Glow** (.gradient-glow)
Pulsing golden glow effect
```tsx
<button className="gradient-glow bg-black border-2 border-gold-500 px-8 py-4">
  VIP Pass
</button>
```

## Pre-configured Classes

### Hero Section (.hero-section)
Automatically applies animated gradient background
```tsx
<section className="hero-section min-h-screen flex items-center">
  <div className="container mx-auto text-center">
    <h1 className="text-7xl font-bold text-white mb-6">
      Welcome to Varnothsava
    </h1>
  </div>
</section>
```

### Gradient Heading (.gradient-heading)
Gold gradient text for important headings
```tsx
<h2 className="gradient-heading text-5xl mb-8">
  Featured Events
</h2>
```

### Premium Card (.premium-card)
Combines gradient border + glass effect
```tsx
<div className="premium-card">
  <h3 className="text-2xl font-bold mb-4">VIP Experience</h3>
  <ul className="space-y-2">
    <li>✓ Priority Access</li>
    <li>✓ Exclusive Merchandise</li>
    <li>✓ Meet & Greet</li>
  </ul>
</div>
```

## Real-World Examples

### Example 1: Hero Section with Gradient Text
```tsx
<section className="hero-section min-h-screen flex items-center justify-center">
  <div className="container mx-auto px-4 text-center">
    <h1 className="gold-gradient-text text-7xl md:text-9xl font-bold mb-6">
      Varnothsava 2026
    </h1>
    <p className="text-2xl text-gray-200 mb-8">
      Where Legends Are Born
    </p>
    <button className="gradient-shimmer bg-gold-500 text-black px-12 py-4 rounded-lg text-xl font-bold">
      Register Now
    </button>
  </div>
</section>
```

### Example 2: Premium Feature Cards
```tsx
<div className="grid md:grid-cols-3 gap-8">
  <div className="premium-card hover:scale-105 transition-transform">
    <div className="gold-shimmer mb-4">
      <Trophy className="w-12 h-12 text-gold-400 mx-auto" />
    </div>
    <h3 className="gradient-heading text-2xl mb-3">
      Pro Events
    </h3>
    <p className="text-gray-300">
      Compete in professional-grade competitions
    </p>
  </div>
  
  <div className="premium-card hover:scale-105 transition-transform">
    <div className="gold-shimmer mb-4">
      <Star className="w-12 h-12 text-gold-400 mx-auto" />
    </div>
    <h3 className="gradient-heading text-2xl mb-3">
      Celebrity Proshow
    </h3>
    <p className="text-gray-300">
      Experience world-class performances
    </p>
  </div>
  
  <div className="premium-card hover:scale-105 transition-transform">
    <div className="gold-shimmer mb-4">
      <Award className="w-12 h-12 text-gold-400 mx-auto" />
    </div>
    <h3 className="gradient-heading text-2xl mb-3">
      ₹10L+ Prizes
    </h3>
    <p className="text-gray-300">
      Massive prize pool across all events
    </p>
  </div>
</div>
```

### Example 3: CTA Section with Multiple Effects
```tsx
<section className="animated-gradient py-20">
  <div className="container mx-auto px-4">
    <div className="gradient-overlay rounded-2xl overflow-hidden">
      <img 
        src="/cta-bg.jpg" 
        alt="background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center py-20 px-6">
        <h2 className="gold-gradient-text text-6xl font-bold mb-6">
          Ready to Make Your Mark?
        </h2>
        <p className="text-2xl text-white mb-8">
          Join 5000+ students from 100+ colleges
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="gradient-shimmer gold-shimmer bg-gold-500 text-black px-10 py-4 rounded-lg font-bold text-lg">
            Register Now
          </button>
          <button className="gradient-glow bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg">
            View Events
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Example 4: Stats Section with Gradient Effects
```tsx
<section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <h2 className="gradient-heading text-center text-5xl mb-12">
      By The Numbers
    </h2>
    <div className="grid md:grid-cols-4 gap-6">
      <div className="gold-shimmer glass-card-dark text-center p-8">
        <h3 className="gold-gradient-text text-5xl font-bold mb-2">
          5000+
        </h3>
        <p className="text-gray-300">Participants</p>
      </div>
      
      <div className="gold-shimmer glass-card-dark text-center p-8">
        <h3 className="gold-gradient-text text-5xl font-bold mb-2">
          100+
        </h3>
        <p className="text-gray-300">Colleges</p>
      </div>
      
      <div className="gold-shimmer glass-card-dark text-center p-8">
        <h3 className="gold-gradient-text text-5xl font-bold mb-2">
          50+
        </h3>
        <p className="text-gray-300">Events</p>
      </div>
      
      <div className="gold-shimmer glass-card-dark text-center p-8">
        <h3 className="gold-gradient-text text-5xl font-bold mb-2">
          ₹10L+
        </h3>
        <p className="text-gray-300">Prize Pool</p>
      </div>
    </div>
  </div>
</section>
```

### Example 5: Event Cards with Gradient Borders
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="gradient-border rounded-xl overflow-hidden">
    <div className="bg-black/90 p-6">
      <img 
        src="/event1.jpg" 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="gradient-heading text-2xl mb-2">
        Cyber War
      </h3>
      <p className="text-gray-300 mb-4">
        Intense coding competition
      </p>
      <button className="gradient-shimmer bg-gold-500 text-black px-6 py-2 rounded-lg font-semibold w-full">
        Register
      </button>
    </div>
  </div>
  
  {/* More cards... */}
</div>
```

### Example 6: Testimonial with Gradient Effect
```tsx
<div className="gradient-border rounded-xl">
  <div className="bg-black/95 p-8">
    <div className="flex items-center gap-4 mb-4">
      <div className="gold-shimmer w-16 h-16 rounded-full overflow-hidden">
        <img src="/avatar.jpg" className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="text-white font-bold text-lg">Rahul Sharma</h4>
        <p className="text-gray-400">NITK Surathkal</p>
      </div>
    </div>
    <p className="text-gray-200 mb-4">
      "Best tech fest experience! The energy was unmatched."
    </p>
    <div className="flex text-gold-400">
      ★★★★★
    </div>
  </div>
</div>
```

## Combining Effects

You can combine multiple gradient effects for maximum impact:

```tsx
{/* Gradient background + gradient text + gradient shimmer button */}
<section className="animated-gradient py-32">
  <div className="container mx-auto text-center">
    <h1 className="gold-gradient-text text-8xl font-bold mb-6">
      Epic Heading
    </h1>
    <button className="gradient-shimmer gold-shimmer gradient-glow bg-gold-500 px-12 py-5">
      Ultimate CTA
    </button>
  </div>
</section>

{/* Premium card + gradient border + gold shimmer */}
<div className="premium-card gold-shimmer">
  <h3 className="gradient-heading">VIP Access</h3>
  <p>Exclusive benefits</p>
</div>

{/* Glass card + gradient overlay + gradient glow */}
<div className="glass-card-dark gradient-overlay gradient-glow p-8">
  <div className="relative z-10">
    <h3 className="gold-gradient-text text-3xl">
      Premium Feature
    </h3>
  </div>
</div>
```

## Performance Optimizations

### Mobile Performance
- Animations are automatically slowed on mobile (20s vs 15s)
- Reduced complexity for shimmer effects on smaller screens
- GPU acceleration enabled for smooth performance

### Accessibility
- Full support for `prefers-reduced-motion`
- Static gradients provided as fallback
- All animations can be disabled by user preference

### Browser Support
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- GPU-accelerated with `transform: translateZ(0)`
- Webkit prefixes included for Safari

## Animation Speeds

| Effect | Desktop | Mobile | Hover |
|--------|---------|--------|-------|
| `.animated-gradient` | 15s | 20s | 8s |
| `.gold-gradient-text` | 8s | 10s | 4s |
| `.gradient-border` | 8s | 6s | - |
| `.gradient-shimmer` | 3s | 6s | - |
| `.gold-shimmer` | 4s | 6s | - |
| `.gradient-glow` | 3s | 3s | - |

## Best Practices

1. **Use Sparingly**: Don't animate everything - focus on hero sections, CTAs, and key headings
2. **Combine with Glass**: Pair gradient effects with glassmorphism for premium look
3. **Test Performance**: Always test on mobile devices for smooth performance
4. **Hierarchy**: Use gold gradient text only for H1/H2, not body text
5. **Contrast**: Ensure text remains readable on animated backgrounds
6. **Loading**: Consider adding `will-change` for better initial performance

## When to Use Each Effect

| Effect | Best For | Avoid For |
|--------|----------|-----------|
| `.animated-gradient` | Hero backgrounds, full sections | Small elements, cards |
| `.gold-gradient-text` | Main headings, titles | Body text, labels |
| `.gradient-border` | Premium cards, features | Form inputs, buttons |
| `.gradient-shimmer` | CTAs, buttons | Text, backgrounds |
| `.gold-shimmer` | Stats, achievements | Paragraphs, lists |
| `.gradient-glow` | VIP buttons, special CTAs | Regular links, icons |

## Troubleshooting

**Q: Gradients look choppy on mobile?**
A: Reduce the number of gradient animations on screen simultaneously

**Q: Text is hard to read on gradient background?**
A: Add text-shadow or use gradient-overlay for better contrast

**Q: Animations causing lag?**
A: Disable some effects or use static gradients for less critical elements

**Q: Gold gradient text not showing?**
A: Ensure text color is not set - gradient uses background-clip to show through
