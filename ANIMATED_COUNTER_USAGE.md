# Animated Counter with Odometer Effect Usage Guide

## Overview
Numbers roll up like a slot machine with smooth blur effects during animation. Perfect for statistics, achievements, and impactful numbers that deserve attention.

## Basic Usage

```tsx
import AnimatedCounter from '@/components/ui/AnimatedCounter';

// Simple counter
<AnimatedCounter end={30} suffix="+" />

// Large number with separator
<AnimatedCounter end={5000} suffix="+" separator={true} />

// Currency format
<AnimatedCounter end={10} prefix="₹" suffix="L+" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `end` | `number` | **required** | Final number to count to |
| `duration` | `number` | `2000` | Animation duration in milliseconds |
| `prefix` | `string` | `''` | Text before the number (e.g., "₹", "$") |
| `suffix` | `string` | `''` | Text after the number (e.g., "+", "K", "M") |
| `separator` | `boolean` | `false` | Add comma separators for large numbers |

## Features

1. **Smooth Easing**: Uses easeOutQuart for natural deceleration
2. **Blur Effect**: Numbers blur slightly during animation (slot machine feel)
3. **Intersection Observer**: Animates only when scrolled into view
4. **Trigger Once**: Animation plays once, won't repeat on scroll
5. **Indian Number Format**: When separator is true, uses Indian locale (1,00,000)
6. **Tabular Numbers**: Consistent digit width for stable layout

## Real-World Examples

### Example 1: Hero Stats Section
```tsx
<section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8">
      <div className="glass-card-dark text-center p-8">
        <div className="text-6xl mb-4">
          <AnimatedCounter 
            end={5000} 
            suffix="+" 
            separator={true}
          />
        </div>
        <p className="text-gray-300 text-lg">Participants</p>
      </div>

      <div className="glass-card-dark text-center p-8">
        <div className="text-6xl mb-4">
          <AnimatedCounter 
            end={100} 
            suffix="+" 
          />
        </div>
        <p className="text-gray-300 text-lg">Colleges</p>
      </div>

      <div className="glass-card-dark text-center p-8">
        <div className="text-6xl mb-4">
          <AnimatedCounter 
            end={50} 
            suffix="+" 
          />
        </div>
        <p className="text-gray-300 text-lg">Events</p>
      </div>

      <div className="glass-card-dark text-center p-8">
        <div className="text-6xl mb-4">
          <AnimatedCounter 
            end={10} 
            prefix="₹" 
            suffix="L+" 
          />
        </div>
        <p className="text-gray-300 text-lg">Prize Pool</p>
      </div>
    </div>
  </div>
</section>
```

### Example 2: Event Registrations Counter
```tsx
<div className="premium-card p-8">
  <h3 className="text-2xl font-bold mb-4">Cyber War</h3>
  <div className="flex items-center gap-4 mb-6">
    <Users className="w-6 h-6 text-gold-400" />
    <span className="text-gray-300">
      <AnimatedCounter end={342} /> registered
    </span>
  </div>
  <div className="flex items-center gap-4 mb-6">
    <Trophy className="w-6 h-6 text-gold-400" />
    <span className="text-gray-300">
      Prize: <AnimatedCounter end={50} prefix="₹" suffix="K" />
    </span>
  </div>
  <button className="gradient-shimmer bg-gold-500 text-black px-6 py-3 rounded-lg font-bold w-full">
    Register Now
  </button>
</div>
```

### Example 3: Achievement Showcase
```tsx
<section className="py-20 animated-gradient">
  <div className="container mx-auto px-4 text-center">
    <h2 className="gradient-heading text-5xl mb-12">
      Our Impact
    </h2>
    
    <div className="grid md:grid-cols-3 gap-12">
      <div>
        <div className="gold-gradient-text text-7xl font-bold mb-4">
          <AnimatedCounter 
            end={15} 
            duration={2500}
          />
        </div>
        <p className="text-2xl text-white font-semibold mb-2">Years</p>
        <p className="text-gray-300">Of Excellence</p>
      </div>

      <div>
        <div className="gold-gradient-text text-7xl font-bold mb-4">
          <AnimatedCounter 
            end={75000} 
            suffix="+" 
            separator={true}
            duration={3000}
          />
        </div>
        <p className="text-2xl text-white font-semibold mb-2">Alumni</p>
        <p className="text-gray-300">Across The Globe</p>
      </div>

      <div>
        <div className="gold-gradient-text text-7xl font-bold mb-4">
          <AnimatedCounter 
            end={500} 
            suffix="+" 
            duration={2500}
          />
        </div>
        <p className="text-2xl text-white font-semibold mb-2">Colleges</p>
        <p className="text-gray-300">Participated Ever</p>
      </div>
    </div>
  </div>
</section>
```

### Example 4: Countdown Timer Style
```tsx
<div className="flex items-center justify-center gap-8 py-12">
  <div className="text-center">
    <div className="glass-card-gold p-6 rounded-2xl">
      <div className="text-5xl font-bold mb-2">
        <AnimatedCounter end={45} duration={1500} />
      </div>
      <p className="text-gray-300 text-sm uppercase tracking-wider">Days</p>
    </div>
  </div>

  <div className="text-4xl text-gold-400">:</div>

  <div className="text-center">
    <div className="glass-card-gold p-6 rounded-2xl">
      <div className="text-5xl font-bold mb-2">
        <AnimatedCounter end={12} duration={1500} />
      </div>
      <p className="text-gray-300 text-sm uppercase tracking-wider">Hours</p>
    </div>
  </div>

  <div className="text-4xl text-gold-400">:</div>

  <div className="text-center">
    <div className="glass-card-gold p-6 rounded-2xl">
      <div className="text-5xl font-bold mb-2">
        <AnimatedCounter end={30} duration={1500} />
      </div>
      <p className="text-gray-300 text-sm uppercase tracking-wider">Minutes</p>
    </div>
  </div>
</div>
```

### Example 5: Leaderboard Scores
```tsx
<div className="space-y-4">
  {leaderboard.map((team, index) => (
    <div 
      key={team.id} 
      className="gradient-border rounded-xl overflow-hidden"
    >
      <div className="bg-black/95 p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-gold-400">
              #{index + 1}
            </span>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">{team.name}</h4>
            <p className="text-gray-400 text-sm">{team.college}</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-3xl font-bold text-gold-400">
            <AnimatedCounter 
              end={team.score} 
              separator={true}
              duration={2500}
            />
          </div>
          <p className="text-gray-400 text-sm">points</p>
        </div>
      </div>
    </div>
  ))}
</div>
```

### Example 6: Inline Text Counter
```tsx
<p className="text-2xl text-gray-200">
  Join{' '}
  <span className="gold-gradient-text text-3xl">
    <AnimatedCounter end={5247} separator={true} />
  </span>
  {' '}students who have already registered for Varnothsava 2026!
</p>
```

### Example 7: Social Proof Counters
```tsx
<div className="glass-card p-6 flex items-center gap-6">
  <div className="gold-shimmer">
    <Heart className="w-12 h-12 text-red-500" />
  </div>
  <div>
    <div className="text-3xl font-bold mb-1">
      <AnimatedCounter end={12450} separator={true} suffix="+" />
    </div>
    <p className="text-gray-400">People Love Varnothsava</p>
  </div>
</div>

<div className="glass-card p-6 flex items-center gap-6">
  <div className="gold-shimmer">
    <Star className="w-12 h-12 text-gold-400" />
  </div>
  <div>
    <div className="text-3xl font-bold mb-1">
      <AnimatedCounter end={4} suffix=".9" />
      <span className="text-xl text-gray-400">/5</span>
    </div>
    <p className="text-gray-400">Average Rating</p>
  </div>
</div>
```

## Advanced Customization

### Custom Duration for Different Numbers
```tsx
{/* Fast for small numbers */}
<AnimatedCounter end={5} duration={1000} />

{/* Slower for dramatic effect */}
<AnimatedCounter end={10000} duration={4000} separator={true} />
```

### Custom Styling
```tsx
<div className="gold-shimmer glass-card-dark p-10 text-center">
  <div className="text-8xl text-gold-400 mb-4">
    <AnimatedCounter 
      end={2026} 
      duration={3000}
    />
  </div>
  <p className="text-2xl text-white font-bold">The Year of Excellence</p>
</div>
```

### Combining with Other Effects
```tsx
<div 
  className="premium-card gradient-glow"
  data-animate="fade-up"
>
  <h3 className="gradient-heading text-4xl mb-6">
    Total Prize Money
  </h3>
  <div className="text-7xl font-bold text-white mb-4">
    <AnimatedCounter 
      end={10} 
      prefix="₹" 
      suffix=" Lakhs+"
      duration={3000}
    />
  </div>
  <p className="text-gray-300 text-xl">
    Across all events
  </p>
</div>
```

## Number Formatting Examples

```tsx
{/* Indian style with commas */}
<AnimatedCounter end={100000} separator={true} />
// Output: 1,00,000

{/* Currency */}
<AnimatedCounter end={50} prefix="₹" suffix="K" />
// Output: ₹50K

{/* Percentage */}
<AnimatedCounter end={98} suffix="%" />
// Output: 98%

{/* Plus suffix */}
<AnimatedCounter end={5000} suffix="+" separator={true} />
// Output: 5,000+

{/* Decimal-like (using suffix) */}
<AnimatedCounter end={4} suffix=".9" />
// Output: 4.9
```

## Performance Considerations

1. **Threshold**: Component triggers at 30% visibility (`threshold: 0.3`)
2. **Trigger Once**: Animation plays only once per page load
3. **RAF**: Uses `requestAnimationFrame` for smooth 60fps animation
4. **Cleanup**: Properly cancels animation frames on unmount
5. **GPU**: Blur effect uses GPU-accelerated filters

## Animation Behavior

- **Easing**: easeOutQuart (starts fast, decelerates smoothly)
- **Blur**: 2px blur at start, fades to 0px at end
- **Duration**: Customizable (default 2000ms)
- **Format**: Respects Indian number formatting when separator=true

## Best Practices

1. **Context Matters**: Use for impactful numbers (1000+), not for small counts (1-10) unless it's a key metric
2. **Duration**: 2-3 seconds for most numbers, 3-4 seconds for very large numbers
3. **Grouping**: Group related counters together for synchronized effect
4. **Styling**: Combine with gradient text or gold colors for premium feel
5. **Placement**: Position above the fold or in hero sections for maximum impact
6. **Don't Overuse**: Use sparingly - 4-6 counters per page maximum

## Accessibility

- Uses `tabular-nums` for consistent digit width
- Semantic HTML structure
- Screen readers will read final value after animation completes
- Respects user motion preferences (though component doesn't disable by default)

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Uses standard IntersectionObserver API
- RequestAnimationFrame for smooth animations
- CSS filter for blur effect

## Troubleshooting

**Q: Counter doesn't animate?**
A: Ensure component is scrolled into view (30% threshold)

**Q: Numbers look jerky?**
A: Increase duration for smoother animation

**Q: Layout shifts during animation?**
A: Using `tabular-nums` should prevent this - ensure parent has fixed width if needed

**Q: Want different easing?**
A: Modify the `easeOutQuart` function in the component code
