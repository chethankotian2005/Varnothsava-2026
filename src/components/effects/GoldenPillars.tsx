'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

// 3D Granite Monolithic Pillar with GSAP-animated etched circuits
const MonolithicPillar = ({ side, mouseProximity }: { side: 'left' | 'right'; mouseProximity: number }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [pulsePhase, setPulsePhase] = useState(0)
  
  // GSAP Professional Circuit Flow Animation
  useGSAP(() => {
    if (!svgRef.current) return
    
    const circuits = svgRef.current.querySelectorAll('.circuit-path')
    
    // Staggered flow with non-linear organic rhythm
    gsap.to(circuits, {
      strokeDashoffset: 0,
      duration: 3,
      ease: 'power2.inOut',
      stagger: {
        each: 0.2,
        from: 'start',
        repeat: -1,
        yoyo: true,
      },
    })
    
    // Glowing nodes pulse
    const nodes = svgRef.current.querySelectorAll('.circuit-node')
    gsap.to(nodes, {
      opacity: 0.8,
      scale: 1.3,
      duration: 1.5,
      ease: 'sine.inOut',
      stagger: {
        each: 0.15,
        repeat: -1,
        yoyo: true,
      },
    })
  }, { scope: svgRef, dependencies: [side] })
  
  // Breathing glow for reactive lighting
  useEffect(() => {
    let frame = 0
    const animate = () => {
      frame += 1
      setPulsePhase(frame * 0.02)
      requestAnimationFrame(animate)
    }
    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [])
  
  const glowIntensity = 0.4 + Math.sin(pulsePhase) * 0.3
  const reactiveGlow = Math.min(1, glowIntensity + mouseProximity * 0.5)
  
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Main SVG pillar with 3D granite texture */}
      <svg 
        ref={svgRef}
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 200 1200" 
        preserveAspectRatio="none"
      >
        <defs>
          {/* Dark Granite 3D Gradient - creates rounded cylindrical effect */}
          <linearGradient id={`granite-3d-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a0a0a" />
            <stop offset="20%" stopColor="#151515" />
            <stop offset="50%" stopColor="#1a1a1a" />
            <stop offset="80%" stopColor="#151515" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          
          {/* Rough granite texture with noise */}
          <filter id={`granite-texture-${side}`} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.6 0.4" numOctaves="8" seed={side === 'left' ? 42 : 73} result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" result="graynoise" />
            <feComponentTransfer in="graynoise" result="contrast">
              <feFuncA type="discrete" tableValues="0 0 0 1 1 1" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="contrast" mode="multiply" />
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
          
          {/* Deep shadow for 3D depth */}
          <linearGradient id={`depth-shadow-${side}`} x1={side === 'left' ? '100%' : '0%'} y1="0%" x2={side === 'left' ? '0%' : '100%'} y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#0a0a08" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          
          {/* Cyan neon glow for circuits */}
          <filter id={`neon-glow-${side}`} x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2" result="blur1" />
            <feGaussianBlur stdDeviation="5" result="blur2" />
            <feGaussianBlur stdDeviation="10" result="blur3" />
            <feMerge>
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Bottom mist fade */}
          <linearGradient id={`mist-fade-${side}`} x1="0%" y1="80%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#051612" stopOpacity="0" />
            <stop offset="60%" stopColor="#051612" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#051612" stopOpacity="1" />
          </linearGradient>
          
          {/* Gold carving accent */}
          <linearGradient id={`gold-carving-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B6914" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#8B6914" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* MAIN GRANITE PILLAR - Rough-hewn irregular edges */}
        <path
          d={side === 'left'
            ? `M0 0 
               L165 0 
               Q168 30 162 60
               L170 150 Q158 200 168 250
               L160 350 Q172 400 165 450
               L168 550 Q160 600 170 650
               L163 750 Q170 800 165 850
               L172 950 Q162 1000 168 1050
               L165 1150 Q170 1180 168 1200
               L0 1200 Z`
            : `M200 0 
               L35 0 
               Q32 30 38 60
               L30 150 Q42 200 32 250
               L40 350 Q28 400 35 450
               L32 550 Q40 600 30 650
               L37 750 Q30 800 35 850
               L28 950 Q38 1000 32 1050
               L35 1150 Q30 1180 32 1200
               L200 1200 Z`
          }
          fill={`url(#granite-3d-${side})`}
          filter={`url(#granite-texture-${side})`}
          style={{
            boxShadow: side === 'left' 
              ? 'inset -10px 0 20px rgba(0,0,0,0.8), 20px 0 40px rgba(0,0,0,0.5)'
              : 'inset 10px 0 20px rgba(0,0,0,0.8), -20px 0 40px rgba(0,0,0,0.5)',
          }}
        />
        
        {/* Inner shadow for 3D tunnel effect */}
        <rect
          x={side === 'left' ? '120' : '0'}
          y="0"
          width="80"
          height="1200"
          fill={`url(#depth-shadow-${side})`}
        />

        {/* ETCHED HOYSALA MEDALLIONS with subtle gold */}
        {[100, 250, 420, 580, 740, 900, 1060].map((y, i) => {
          const baseX = side === 'left' ? 85 : 115
          const radius = 42 - (i % 3) * 4
          
          return (
            <g key={`medallion-${i}`} opacity="0.4">
              <circle 
                cx={baseX} 
                cy={y} 
                r={radius + 4} 
                fill="#0a0908"
                opacity="0.7"
              />
              <circle 
                cx={baseX} 
                cy={y} 
                r={radius} 
                fill="none" 
                stroke={`url(#gold-carving-${side})`}
                strokeWidth="2.5"
              />
              {/* Temple wheel spokes */}
              {[...Array(12)].map((_, j) => {
                const angle = (j * 30 * Math.PI) / 180
                return (
                  <line
                    key={`spoke-${j}`}
                    x1={baseX + Math.cos(angle) * 12}
                    y1={y + Math.sin(angle) * 12}
                    x2={baseX + Math.cos(angle) * (radius - 4)}
                    y2={y + Math.sin(angle) * (radius - 4)}
                    stroke="#D4AF37"
                    strokeWidth="1"
                    opacity="0.15"
                  />
                )
              })}
              <circle cx={baseX} cy={y} r="10" fill="#0a0908" stroke="#D4AF37" strokeWidth="1" opacity="0.25" />
            </g>
          )
        })}

        {/* ===== ETCHED CYAN CIRCUITS - Embedded in stone ===== */}
        <g filter={`url(#neon-glow-${side})`} opacity={reactiveGlow}>
          {/* Main vertical circuit - flows from bottom to top */}
          <path
            className="circuit-path"
            d={side === 'left'
              ? `M105 1200 
                 L105 1080 Q115 1030 105 980
                 L110 880 Q100 830 110 780
                 L105 680 Q115 630 105 580
                 L110 480 Q100 430 110 380
                 L105 280 Q115 230 105 180
                 L110 80 Q105 40 105 0`
              : `M95 1200 
                 L95 1080 Q85 1030 95 980
                 L90 880 Q100 830 90 780
                 L95 680 Q85 630 95 580
                 L90 480 Q100 430 90 380
                 L95 280 Q85 230 95 180
                 L90 80 Q95 40 95 0`
            }
            stroke="#00F2FF"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="500"
            strokeDashoffset="500"
            style={{ filter: 'drop-shadow(0 0 6px #00F2FF)' }}
          />
          
          {/* Secondary branch circuits */}
          <path
            className="circuit-path"
            d={side === 'left'
              ? `M135 1200 L138 1020 Q128 920 138 820 L135 620 Q142 520 135 420 L138 220 Q130 120 135 0`
              : `M65 1200 L62 1020 Q72 920 62 820 L65 620 Q58 520 65 420 L62 220 Q70 120 65 0`
            }
            stroke="#00F2FF"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="400"
            strokeDashoffset="400"
            opacity="0.7"
          />
          
          {/* Circuit connection branches to medallions */}
          {[100, 250, 420, 580, 740, 900, 1060].map((y, i) => {
            const baseX = side === 'left' ? 85 : 115
            const circuitX = side === 'left' ? 105 : 95
            return (
              <path
                key={`branch-${i}`}
                className="circuit-path"
                d={`M${circuitX} ${y} Q${(circuitX + baseX) / 2} ${y - 12} ${baseX} ${y}`}
                stroke="#00F2FF"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="80"
                strokeDashoffset="80"
                opacity="0.6"
              />
            )
          })}
          
          {/* Glowing circuit nodes */}
          {[100, 250, 420, 580, 740, 900, 1060].map((y, i) => {
            const baseX = side === 'left' ? 85 : 115
            return (
              <circle
                key={`node-${i}`}
                className="circuit-node"
                cx={baseX}
                cy={y}
                r={5}
                fill="#00F2FF"
                opacity="0.4"
              />
            )
          })}
        </g>

        {/* Bottom mist fade into forest floor */}
        <rect
          x="0"
          y="0"
          width="200"
          height="1200"
          fill={`url(#mist-fade-${side})`}
        />
      </svg>
      
      {/* Moss patches and vines for environmental blending */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        {[18, 38, 58, 78, 92].map((top, i) => (
          <div
            key={`moss-${i}`}
            className="absolute"
            style={{
              top: `${top}%`,
              left: side === 'left' ? `${45 + (i % 3) * 12}%` : `${25 + (i % 3) * 12}%`,
              width: `${28 + (i % 2) * 18}px`,
              height: `${18 + (i % 3) * 12}px`,
              background: `radial-gradient(ellipse at center, 
                rgba(25, 65, 45, ${0.5 + (i % 3) * 0.15}) 0%, 
                rgba(18, 50, 35, ${0.35 + (i % 2) * 0.1}) 40%, 
                transparent 70%)`,
              borderRadius: '50%',
              transform: `rotate(${(i * 35) % 90}deg)`,
              filter: 'blur(1.5px)',
            }}
          />
        ))}
        
        <svg className="absolute inset-0 w-full h-full">
          <path
            d={side === 'left'
              ? "M70% 22% Q72% 28% 67% 38% Q70% 48% 62% 58%"
              : "M30% 22% Q28% 28% 33% 38% Q30% 48% 38% 58%"
            }
            stroke="#1a3a2a"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d={side === 'left'
              ? "M62% 62% Q68% 72% 57% 82%"
              : "M38% 62% Q32% 72% 43% 82%"
            }
            stroke="#153525"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>
      </div>
    </div>
  )
}

// Global vignette overlay
const VignetteOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-50"
    style={{
      background: `radial-gradient(
        ellipse 80% 60% at 50% 45%,
        transparent 0%,
        transparent 40%,
        rgba(5, 22, 18, 0.3) 60%,
        rgba(5, 22, 18, 0.6) 75%,
        rgba(2, 10, 8, 0.85) 90%,
        rgba(0, 0, 0, 0.95) 100%
      )`,
    }}
  />
)

export default function GoldenPillars() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [leftProximity, setLeftProximity] = useState(0)
  const [rightProximity, setRightProximity] = useState(0)
  
  const { scrollYProgress } = useScroll()
  
  // 3-Layer Parallax System
  // Front: Stone pillars (15px movement)
  const pillarParallaxY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 25 })
  const leftPillarMoveX = useTransform(smoothMouseX, [0, 1], [15, -15])
  const rightPillarMoveX = useTransform(smoothMouseX, [0, 1], [-15, 15])
  
  // Middle: Title/Logo (5px movement) - handled in CyberAranyaHero
  // Back: Forest/Mist (-2px fixed) - handled in AnimatedBackground

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX } = e
      const normalizedX = clientX / window.innerWidth
      mouseX.set(normalizedX)
      mouseY.set(e.clientY / window.innerHeight)
      
      // Calculate proximity for reactive glow
      const pillarZone = window.innerWidth * 0.15
      const leftDist = Math.max(0, 1 - (clientX / pillarZone))
      const rightDist = Math.max(0, 1 - ((window.innerWidth - clientX) / pillarZone))
      
      setLeftProximity(leftDist)
      setRightProximity(rightDist)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Vignette overlay for depth */}
      <VignetteOverlay />
      
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {/* Left Monolithic Pillar with 3D granite effect */}
        <motion.div
          className="absolute left-0 top-0 bottom-0"
          style={{ 
            width: '14vw',
            minWidth: '120px',
            maxWidth: '220px',
            x: leftPillarMoveX,
            // Heavy drop shadow for 3D standing effect
            filter: `drop-shadow(20px 0 40px rgba(0,0,0,0.8)) 
                     drop-shadow(10px 0 20px rgba(0,0,0,0.6))
                     drop-shadow(5px 0 80px rgba(0,242,255,${leftProximity * 0.12}))`,
          }}
        >
          <motion.div 
            className="relative h-full w-full"
            style={{ 
              y: pillarParallaxY,
              // 3D rounded effect with gradient
              background: 'linear-gradient(90deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
              boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.8), 20px 0 40px rgba(0,0,0,0.5)',
              borderRadius: '4px',
            }}
          >
            <MonolithicPillar side="left" mouseProximity={leftProximity} />
          </motion.div>
        </motion.div>

        {/* Right Monolithic Pillar with 3D granite effect */}
        <motion.div
          className="absolute right-0 top-0 bottom-0"
          style={{ 
            width: '14vw',
            minWidth: '120px',
            maxWidth: '220px',
            x: rightPillarMoveX,
            // Heavy drop shadow for 3D standing effect
            filter: `drop-shadow(-20px 0 40px rgba(0,0,0,0.8)) 
                     drop-shadow(-10px 0 20px rgba(0,0,0,0.6))
                     drop-shadow(-5px 0 80px rgba(0,242,255,${rightProximity * 0.12}))`,
          }}
        >
          <motion.div 
            className="relative h-full w-full"
            style={{ 
              y: pillarParallaxY,
              // 3D rounded effect with gradient
              background: 'linear-gradient(90deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
              boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.8), -20px 0 40px rgba(0,0,0,0.5)',
              borderRadius: '4px',
            }}
          >
            <MonolithicPillar side="right" mouseProximity={rightProximity} />
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
