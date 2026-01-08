'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface CircuitNode {
  x: number
  y: number
  size: number
  delay: number
}

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Transform circuit pattern to mandala as user scrolls
  const circuitOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const mandalaOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const mandalaScale = useTransform(scrollYProgress, [0.2, 0.6], [0.8, 1.2])
  const mandalaRotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  // Generate circuit nodes
  const nodes: CircuitNode[] = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
  }))

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep dark emerald gradient base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 20%, rgba(10, 40, 35, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 100% 60% at 20% 80%, rgba(5, 35, 25, 0.3) 0%, transparent 40%),
            radial-gradient(ellipse 100% 60% at 80% 80%, rgba(5, 35, 25, 0.3) 0%, transparent 40%),
            linear-gradient(180deg, 
              #020a08 0%, 
              #041210 15%, 
              #051612 30%,
              #061814 50%,
              #051612 70%,
              #030e0c 85%,
              #010605 100%
            )
          `,
        }}
      />
      
      {/* Circuit pattern layer */}
      <motion.div 
        style={{ opacity: circuitOpacity }}
        className="absolute inset-0"
      >
        {/* Animated circuit grid - darker, more subtle */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="circuit-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(0, 180, 160, 0.1)"
                strokeWidth="0.5"
              />
            </pattern>
            <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00F2FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-grid)" />
          
          {/* Animated nodes - cyan to match theme */}
          {nodes.map((node, i) => (
            <g key={i}>
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.size}
                fill="url(#node-glow)"
                className="animate-pulse"
                style={{ animationDelay: `${node.delay}s` }}
              />
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.size / 2}
                fill="#00F2FF"
                opacity="0.4"
              />
            </g>
          ))}
          
          {/* Connection lines */}
          {nodes.slice(0, 15).map((node, i) => {
            const nextNode = nodes[(i + 1) % 15]
            return (
              <line
                key={`line-${i}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${nextNode.x}%`}
                y2={`${nextNode.y}%`}
                stroke="rgba(0, 242, 255, 0.08)"
                strokeWidth="0.5"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="10"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </line>
            )
          })}
        </svg>
      </motion.div>

      {/* Mandala pattern layer */}
      <motion.div 
        style={{ 
          opacity: mandalaOpacity,
          scale: mandalaScale,
          rotate: mandalaRotate,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg className="w-[150vh] h-[150vh] opacity-20" viewBox="0 0 400 400">
          <defs>
            <radialGradient id="mandala-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d4a853" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#d4a853" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#d4a853" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Concentric circles */}
          {[50, 80, 110, 140, 170, 200].map((r, i) => (
            <circle
              key={`circle-${i}`}
              cx="200"
              cy="200"
              r={r}
              fill="none"
              stroke="#d4a853"
              strokeWidth="0.5"
              opacity={0.3 - i * 0.04}
            />
          ))}
          
          {/* Mandala petals */}
          {Array.from({ length: 16 }, (_, i) => {
            const angle = (i * 360) / 16
            return (
              <g key={`petal-${i}`} transform={`rotate(${angle} 200 200)`}>
                <path
                  d="M 200 200 Q 200 120 230 100 Q 200 80 170 100 Q 200 120 200 200"
                  fill="none"
                  stroke="#d4a853"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
                <path
                  d="M 200 200 Q 200 140 215 130 Q 200 115 185 130 Q 200 140 200 200"
                  fill="rgba(212, 168, 83, 0.05)"
                  stroke="#d4a853"
                  strokeWidth="0.3"
                  opacity="0.3"
                />
              </g>
            )
          })}
          
          {/* Center ornament */}
          <circle cx="200" cy="200" r="30" fill="url(#mandala-gradient)" />
          <circle cx="200" cy="200" r="20" fill="none" stroke="#d4a853" strokeWidth="1" opacity="0.4" />
          <circle cx="200" cy="200" r="10" fill="rgba(212, 168, 83, 0.2)" />
        </svg>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
              background: i % 2 === 0 ? '#d4a853' : '#10b981',
              boxShadow: `0 0 ${4 + Math.random() * 4}px ${i % 2 === 0 ? '#d4a853' : '#10b981'}`,
            }}
            animate={{
              y: [0, -window.innerHeight * 1.2],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-obsidian/50" />
    </div>
  )
}
