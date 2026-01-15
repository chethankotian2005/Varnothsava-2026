# Scroll Animation Usage Guide

## Overview
Advanced scroll-triggered animations that fade, slide, and reveal elements as you scroll. Uses IntersectionObserver for optimal performance.

## Basic Usage

### 1. Fade Up Animation
Elements slide up and fade in:
```tsx
<div data-animate="fade-up">
  <h2>This fades up as you scroll</h2>
</div>
```

### 2. Fade Down Animation
Elements slide down and fade in:
```tsx
<div data-animate="fade-down">
  <p>This fades down from above</p>
</div>
```

### 3. Fade Left Animation
Elements slide from right and fade in:
```tsx
<div data-animate="fade-left">
  <img src="/image.jpg" alt="Slides from right" />
</div>
```

### 4. Fade Right Animation
Elements slide from left and fade in:
```tsx
<div data-animate="fade-right">
  <div>Slides from left</div>
</div>
```

### 5. Scale Animation
Elements grow from 90% to 100%:
```tsx
<div data-animate="scale">
  <button>Grows as you scroll</button>
</div>
```

### 6. Fade Animation (no movement)
Simple opacity fade:
```tsx
<div data-animate="fade">
  <p>Just fades in</p>
</div>
```

### 7. Rotate Animation
Elements rotate and scale into view:
```tsx
<div data-animate="rotate">
  <div className="card">Rotates into view</div>
</div>
```

### 8. Blur Animation
Elements unblur as they appear:
```tsx
<div data-animate="blur">
  <img src="/hero.jpg" alt="Unblurs on scroll" />
</div>
```

## Advanced: Staggered Children

Animate children with sequential delays:

```tsx
<div data-animate="fade-up">
  <div data-stagger>Item 1 (appears first)</div>
  <div data-stagger>Item 2 (100ms delay)</div>
  <div data-stagger>Item 3 (200ms delay)</div>
  <div data-stagger>Item 4 (300ms delay)</div>
</div>
```

### Real-world Example: Event Cards

```tsx
<section className="py-20">
  <div data-animate="fade-up">
    <h2 className="text-4xl font-bold text-center mb-12">
      Upcoming Events
    </h2>
  </div>
  
  <div className="grid md:grid-cols-3 gap-6" data-animate="fade-up">
    <div data-stagger className="card p-6">
      <h3>Event 1</h3>
      <p>Description</p>
    </div>
    <div data-stagger className="card p-6">
      <h3>Event 2</h3>
      <p>Description</p>
    </div>
    <div data-stagger className="card p-6">
      <h3>Event 3</h3>
      <p>Description</p>
    </div>
  </div>
</section>
```

### Real-world Example: Hero Section

```tsx
<section className="hero min-h-screen flex items-center">
  <div className="container mx-auto">
    <div data-animate="fade-up">
      <h1 className="text-6xl font-bold mb-6">
        Varnothsava 2026
      </h1>
    </div>
    
    <div data-animate="fade-up">
      <p className="text-xl mb-8">
        Join 5000+ participants
      </p>
    </div>
    
    <div data-animate="fade-up">
      <button className="btn-primary">
        Register Now
      </button>
    </div>
  </div>
</section>
```

### Real-world Example: Features Grid

```tsx
<section data-animate="fade-up">
  <h2>Features</h2>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div data-stagger className="feature-card">Feature 1</div>
    <div data-stagger className="feature-card">Feature 2</div>
    <div data-stagger className="feature-card">Feature 3</div>
    <div data-stagger className="feature-card">Feature 4</div>
  </div>
</section>
```

## Animation Types Reference

| Animation Type | Effect | Best For |
|---------------|--------|----------|
| `fade-up` | Slides up + fades | Headings, cards, sections |
| `fade-down` | Slides down + fades | Dropdowns, modals |
| `fade-left` | Slides from right + fades | Images, sidebars |
| `fade-right` | Slides from left + fades | Text blocks, quotes |
| `scale` | Grows + fades | Buttons, icons, badges |
| `fade` | Only fades | Backgrounds, overlays |
| `rotate` | Rotates + scales + fades | Special elements, logos |
| `blur` | Unblurs + scales | Images, hero sections |

## Performance Tips

1. **Use Sparingly**: Don't animate everything - 3-5 animations per viewport is ideal
2. **Combine with Parallax**: Use parallax for backgrounds, scroll animations for content
3. **Mobile Optimized**: Animations are faster on mobile (0.6s vs 0.8s)
4. **Accessibility**: Automatically disabled for users with `prefers-reduced-motion`
5. **GPU Acceleration**: All animations use transforms for optimal performance

## Timing & Customization

Default timings:
- Main animations: 0.8s
- Stagger delay: 100ms per item
- Mobile animations: 0.6s
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (smooth ease-out)

To customize timing in your component:
```tsx
<div 
  data-animate="fade-up"
  style={{ transitionDuration: '1.2s' }}
>
  Slower animation
</div>
```

## Troubleshooting

**Animation not working?**
- Check that `data-animate` attribute is set correctly
- Ensure element is not already visible on page load
- Check browser console for JavaScript errors

**Animation too fast/slow?**
- Modify transition-duration in CSS or inline styles
- Adjust rootMargin in ScrollAnimations.tsx for earlier/later trigger

**Animation triggering too early?**
- Increase rootMargin value (e.g., `-200px` instead of `-100px`)

**Stagger not working?**
- Parent must have `data-animate` attribute
- Children must have `data-stagger` attribute
- Check that elements are direct children

## Browser Support

- ✅ Chrome/Edge (full support)
- ✅ Firefox (full support)
- ✅ Safari (full support)
- ✅ Mobile browsers (optimized)
- ✅ Respects `prefers-reduced-motion`
