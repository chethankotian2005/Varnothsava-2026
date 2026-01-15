/* 
  PARALLAX USAGE GUIDE
  ===================
  
  Add the data-parallax attribute to any element to create a parallax effect:
  
  Examples:
  ---------
  
  1. Slow parallax (background elements):
  <div data-parallax="0.3">
    This moves slower than the scroll speed
  </div>
  
  2. Medium parallax (mid-ground elements):
  <div data-parallax="0.5">
    This moves at 50% of scroll speed
  </div>
  
  3. Fast parallax (foreground elements):
  <div data-parallax="0.8">
    This moves faster, creating more depth
  </div>
  
  4. Example with images:
  <div className="relative h-screen overflow-hidden">
    <div data-parallax="0.4" className="absolute inset-0">
      <img src="/bg-image.jpg" alt="Background" />
    </div>
    <div data-parallax="0.6" className="relative z-10">
      <h1>Content on top</h1>
    </div>
  </div>
  
  Tips:
  -----
  - Lower values (0.1-0.4): Background elements, subtle movement
  - Medium values (0.5-0.6): Content elements
  - Higher values (0.7-0.9): Foreground elements, dramatic effect
  - Use sparingly for best effect (3-5 parallax elements per section)
  
  Performance:
  ------------
  - Parallax uses transform: translateY() for GPU acceleration
  - Scroll listener is passive for better performance
  - Works on desktop; disabled on mobile via smoothTouch: false
*/

// Example implementation in a React component:

/*
export default function ParallaxSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background layer - slowest *\/}
      <div data-parallax="0.2" className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-b from-forest-900 to-forest-950" />
      </div>
      
      {/* Mid layer - medium speed *\/}
      <div data-parallax="0.4" className="absolute top-20 left-10 opacity-50">
        <div className="w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />
      </div>
      
      {/* Content layer - faster *\/}
      <div data-parallax="0.6" className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold text-white mb-6">
          Parallax Effect
        </h2>
        <p className="text-xl text-gray-300">
          Scroll down to see the depth effect
        </p>
      </div>
    </section>
  )
}
*/
