# Loading Skeleton Screens Usage Guide

## Overview
Professional loading states with shimmer effects that create a smooth, modern user experience. Better than traditional spinners, skeletons show the structure of content before it loads.

## Available Components

### Base Skeleton
```tsx
import { Skeleton } from '@/components/ui/Skeleton';

<Skeleton className="h-4 w-32" />
<Skeleton className="h-64 w-full rounded-xl" />
```

### Pre-built Skeletons

| Component | Use Case |
|-----------|----------|
| `SkeletonEventCard` | Event listings |
| `SkeletonStatCard` | Statistics/numbers |
| `SkeletonTestimonial` | Testimonials |
| `SkeletonTeamCard` | Team members |
| `SkeletonSponsor` | Sponsor logos |
| `SkeletonGalleryImage` | Gallery images |
| `SkeletonLeaderboardItem` | Leaderboard entries |
| `SkeletonScheduleEvent` | Schedule items |
| `SkeletonFAQ` | FAQ items |
| `SkeletonPageHeader` | Page headers |
| `SkeletonTableRow` | Table rows |
| `SkeletonPage` | Full page loading |

## Real-World Examples

### Example 1: Event Cards Loading
```tsx
'use client';
import { useState, useEffect } from 'react';
import { SkeletonEventCard } from '@/components/ui/Skeleton';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <SkeletonEventCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
```

### Example 2: Stats Dashboard Loading
```tsx
import { SkeletonStatCard } from '@/components/ui/Skeleton';

function StatsDashboard({ loading, stats }) {
  if (loading) {
    return (
      <div className="grid md:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <SkeletonStatCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-4 gap-8">
      <div className="glass-card-dark text-center p-8">
        <h3 className="gold-gradient-text text-6xl font-bold mb-4">
          <AnimatedCounter end={stats.participants} />
        </h3>
        <p className="text-gray-300 text-lg">Participants</p>
      </div>
      {/* More stats... */}
    </div>
  );
}
```

### Example 3: Testimonials with Loading
```tsx
import { SkeletonTestimonial } from '@/components/ui/Skeleton';

function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTestimonials(testimonialsData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="gradient-heading text-5xl text-center mb-12">
          What Students Say
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <>
              {[...Array(6)].map((_, i) => (
                <SkeletonTestimonial key={i} />
              ))}
            </>
          ) : (
            testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
```

### Example 4: Leaderboard Loading
```tsx
import { SkeletonLeaderboardItem } from '@/components/ui/Skeleton';

function Leaderboard() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(10)].map((_, i) => (
          <SkeletonLeaderboardItem key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {teams.map((team, index) => (
        <div key={team.id} className="gradient-border rounded-xl">
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
                <AnimatedCounter end={team.score} separator={true} />
              </div>
              <p className="text-gray-400 text-sm">points</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Example 5: Gallery Loading
```tsx
import { SkeletonGalleryImage } from '@/components/ui/Skeleton';

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loading ? (
        <>
          {[...Array(12)].map((_, i) => (
            <SkeletonGalleryImage key={i} />
          ))}
        </>
      ) : (
        images.map(image => (
          <div key={image.id} className="rounded-lg overflow-hidden">
            <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
          </div>
        ))
      )}
    </div>
  );
}
```

### Example 6: Schedule with Loading
```tsx
import { SkeletonScheduleEvent } from '@/components/ui/Skeleton';

function SchedulePage() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(5)].map((_, i) => (
          <SkeletonScheduleEvent key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {schedule.map(event => (
        <div key={event.id} className="glass-card-dark rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-8 h-8 text-gold-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-gray-400 mb-3">{event.description}</p>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>📅 {event.date}</span>
                <span>🕐 {event.time}</span>
                <span>📍 {event.venue}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Example 7: Team Page Loading
```tsx
import { SkeletonTeamCard } from '@/components/ui/Skeleton';

function TeamPage() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h1 className="gradient-heading text-6xl text-center mb-16">
          Meet Our Team
        </h1>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading ? (
            <>
              {[...Array(8)].map((_, i) => (
                <SkeletonTeamCard key={i} />
              ))}
            </>
          ) : (
            team.map(member => (
              <TiltCard key={member.id}>
                <div className="glass-card-dark rounded-xl overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold-400 font-semibold">
                      {member.role}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
```

### Example 8: Custom Skeleton Pattern
```tsx
import { Skeleton } from '@/components/ui/Skeleton';

function CustomCardSkeleton() {
  return (
    <div className="premium-card">
      {/* Header with icon and title */}
      <div className="flex items-center gap-4 mb-6">
        <Skeleton className="w-16 h-16 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      
      {/* Content area */}
      <Skeleton className="h-32 w-full mb-4 rounded-lg" />
      
      {/* Tags/badges */}
      <div className="flex gap-2 mb-6">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
      
      {/* Action buttons */}
      <div className="flex gap-3">
        <Skeleton className="h-12 flex-1 rounded-lg" />
        <Skeleton className="h-12 w-12 rounded-lg" />
      </div>
    </div>
  );
}
```

## Animation Variants

### Standard Shimmer (Default)
```tsx
<Skeleton className="h-4 w-32" />
```

### Dark Shimmer
```tsx
<div className="skeleton-shimmer-dark h-4 w-32 rounded" />
```

### Gold Shimmer (Premium)
```tsx
<div className="skeleton-shimmer-gold h-4 w-32 rounded" />
```

### Pulse Animation
```tsx
<div className="skeleton-pulse bg-gray-800 h-4 w-32 rounded" />
```

### Slow Shimmer
```tsx
<div className="skeleton-shimmer skeleton-shimmer-slow h-4 w-32 rounded" />
```

### Fast Shimmer (Urgent Loading)
```tsx
<div className="skeleton-shimmer skeleton-shimmer-fast h-4 w-32 rounded" />
```

### Wave Effect
```tsx
<div className="skeleton-wave bg-gray-800 h-4 w-32 rounded" />
```

## Combining with Suspense

```tsx
import { Suspense } from 'react';
import { SkeletonEventCard } from '@/components/ui/Skeleton';

function EventsPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="gradient-heading text-6xl mb-12">Events</h1>
        
        <Suspense
          fallback={
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <SkeletonEventCard key={i} />
              ))}
            </div>
          }
        >
          <EventsList />
        </Suspense>
      </div>
    </section>
  );
}
```

## Progressive Loading

```tsx
function ProgressiveLoad() {
  const [loadedItems, setLoadedItems] = useState(0);
  const totalItems = 12;

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadedItems(prev => {
        if (prev >= totalItems) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {[...Array(totalItems)].map((_, i) => (
        <div key={i}>
          {i < loadedItems ? (
            <EventCard event={events[i]} />
          ) : (
            <SkeletonEventCard />
          )}
        </div>
      ))}
    </div>
  );
}
```

## Best Practices

1. **Match Layout**: Skeleton should match the actual content's layout
2. **Use Consistently**: Apply to all async content
3. **Show Structure**: Reveal page structure before content loads
4. **Appropriate Duration**: Display for minimum 300ms to avoid flash
5. **Progressive Enhancement**: Load content progressively when possible
6. **Accessible**: Ensure skeletons don't interfere with screen readers

## Performance Considerations

1. **GPU Acceleration**: Animations use transforms for smooth performance
2. **Reduced Motion**: Respects `prefers-reduced-motion` setting
3. **Mobile Optimized**: Slower animations on mobile to save battery
4. **Lightweight**: Minimal CSS, no JavaScript overhead

## Accessibility

```tsx
function AccessibleSkeleton() {
  return (
    <div 
      role="status" 
      aria-label="Loading content"
      aria-live="polite"
    >
      <SkeletonEventCard />
      <span className="sr-only">Loading events...</span>
    </div>
  );
}
```

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- CSS animations (widely supported)
- Graceful degradation: static placeholders if animations not supported

## Troubleshooting

**Q: Skeleton causes layout shift?**
A: Ensure skeleton dimensions match actual content

**Q: Animation too fast/slow?**
A: Use `.skeleton-shimmer-slow` or `.skeleton-shimmer-fast` classes

**Q: Want solid placeholders?**
A: Use `.skeleton-pulse` instead of shimmer

**Q: Skeleton overlaps content?**
A: Add proper loading state management with conditional rendering
