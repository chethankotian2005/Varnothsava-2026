# Glassmorphism Effects Usage Guide

## Overview
Modern frosted glass effects that create a premium, Gen-Z aesthetic on cards and components. Features backdrop blur, transparency, and subtle shadows for depth.

## Available Glass Card Types

### 1. **Base Glass Card** (.glass-card)
Light frosted glass effect - best for light-themed sections
```tsx
<div className="glass-card p-6">
  <h3>Premium Card</h3>
  <p>Content with frosted glass background</p>
</div>
```

### 2. **Dark Glass Card** (.glass-card-dark)
Darker variant - best for dark backgrounds
```tsx
<div className="glass-card-dark p-8">
  <h2>Dark Glass Effect</h2>
  <p>Works great on dark backgrounds</p>
</div>
```

### 3. **Gold Glass Card** (.glass-card-gold)
Premium gold-tinted glass - for VIP/special sections
```tsx
<div className="glass-card-gold p-6">
  <h3>Premium Feature</h3>
  <p>Gold-tinted glass for premium content</p>
</div>
```

### 4. **Subtle Glass** (.glass-subtle)
Minimal effect - for backgrounds and overlays
```tsx
<div className="glass-subtle p-4">
  <p>Subtle glass effect</p>
</div>
```

## Automatic Application

The following component classes automatically get glass effects:

- `.stat-card` → glass-card
- `.testimonial-card` → glass-card-dark
- `.registration-step` → glass-card
- `.event-card` → glass-card-dark
- `.feature-card` → glass-card

## Real-World Examples

### Example 1: Stats Section
```tsx
<section className="py-20">
  <div className="grid md:grid-cols-3 gap-6">
    <div className="stat-card p-8 text-center">
      <h3 className="text-4xl font-bold text-gold-400">5000+</h3>
      <p className="text-gray-300 mt-2">Participants</p>
    </div>
    <div className="stat-card p-8 text-center">
      <h3 className="text-4xl font-bold text-gold-400">50+</h3>
      <p className="text-gray-300 mt-2">Events</p>
    </div>
    <div className="stat-card p-8 text-center">
      <h3 className="text-4xl font-bold text-gold-400">₹10L+</h3>
      <p className="text-gray-300 mt-2">Prize Pool</p>
    </div>
  </div>
</section>
```

### Example 2: Testimonial Cards
```tsx
<div className="grid md:grid-cols-2 gap-6">
  <div className="testimonial-card p-6">
    <p className="text-gray-200 mb-4">
      "Amazing fest! The organization was top-notch."
    </p>
    <div className="flex items-center gap-3">
      <img src="/avatar.jpg" className="w-12 h-12 rounded-full" />
      <div>
        <p className="text-white font-semibold">Priya Sharma</p>
        <p className="text-gray-400 text-sm">NITK Surathkal</p>
      </div>
    </div>
  </div>
</div>
```

### Example 3: Premium Feature Box
```tsx
<div className="glass-card-gold p-8">
  <div className="flex items-center gap-3 mb-4">
    <Trophy className="w-8 h-8 text-gold-400" />
    <h3 className="text-2xl font-bold text-white">VIP Pass</h3>
  </div>
  <p className="text-gray-200 mb-6">
    Get exclusive access to all premium events
  </p>
  <ul className="space-y-2 text-gray-300">
    <li>✓ Priority seating</li>
    <li>✓ Exclusive merchandise</li>
    <li>✓ Meet & greet with artists</li>
  </ul>
  <button className="mt-6 w-full bg-gold-500 text-black px-6 py-3 rounded-lg font-semibold">
    Get VIP Pass
  </button>
</div>
```

### Example 4: Registration Steps
```tsx
<div className="grid md:grid-cols-3 gap-6">
  <div className="registration-step p-6 text-center">
    <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl font-bold text-gold-400">1</span>
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">Sign Up</h3>
    <p className="text-gray-300">Create your account</p>
  </div>
  
  <div className="registration-step p-6 text-center">
    <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl font-bold text-gold-400">2</span>
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">Choose Events</h3>
    <p className="text-gray-300">Select your competitions</p>
  </div>
  
  <div className="registration-step p-6 text-center">
    <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl font-bold text-gold-400">3</span>
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">Pay & Confirm</h3>
    <p className="text-gray-300">Complete registration</p>
  </div>
</div>
```

### Example 5: Overlay/Modal
```tsx
<div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
  <div className="glass-card-dark max-w-md w-full p-8">
    <h2 className="text-2xl font-bold text-white mb-4">
      Confirm Registration
    </h2>
    <p className="text-gray-300 mb-6">
      Are you sure you want to register for this event?
    </p>
    <div className="flex gap-4">
      <button className="glass-subtle flex-1 px-4 py-2">
        Cancel
      </button>
      <button className="bg-gold-500 text-black flex-1 px-4 py-2 rounded-lg font-semibold">
        Confirm
      </button>
    </div>
  </div>
</div>
```

## Customizing Glass Effects

You can combine glass classes with other Tailwind utilities:

```tsx
{/* Custom padding and shadow */}
<div className="glass-card p-10 shadow-2xl">
  Content
</div>

{/* Custom border color */}
<div className="glass-card-dark border-2 border-gold-500/50">
  Content
</div>

{/* With animation */}
<div className="glass-card hover:scale-105 transition-transform">
  Content
</div>

{/* Nested glass */}
<div className="glass-card-dark p-8">
  <div className="glass-subtle p-4">
    Nested glass effect
  </div>
</div>
```

## Performance Considerations

1. **Blur Amount**: 
   - Desktop: 20px blur
   - Mobile: 12px blur (reduced for performance)
   
2. **GPU Acceleration**: All glass effects use `transform` for hover states (GPU-accelerated)

3. **Browser Support**:
   - Modern browsers: Full backdrop-filter support
   - Older browsers: Automatic fallback to solid colors

4. **Mobile**: Blur is reduced on mobile devices for better performance

## When to Use Each Type

| Glass Type | Best For | Example Use Cases |
|-----------|----------|-------------------|
| `.glass-card` | Light sections, stats | Numbers, quick info |
| `.glass-card-dark` | Dark backgrounds | Testimonials, events |
| `.glass-card-gold` | Premium features | VIP, special offers |
| `.glass-subtle` | Backgrounds, overlays | Modals, subtle effects |

## Accessibility

- All glass cards maintain good contrast ratios
- Text remains readable on all backgrounds
- Hover states provide clear visual feedback
- `prefers-reduced-motion` is respected

## Browser Fallbacks

If backdrop-filter is not supported:
- `.glass-card` → solid white with 15% opacity
- `.glass-card-dark` → solid black with 60% opacity
- `.glass-card-gold` → solid gold with 20% opacity
- `.glass-subtle` → solid white with 10% opacity

## Tips for Best Results

1. Use on sections with background images or gradients for best effect
2. Don't overuse - 2-3 glass cards per section is optimal
3. Combine with scroll animations for dramatic reveals
4. Use gold variant sparingly for truly premium content
5. Test on multiple devices for performance
