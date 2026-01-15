
'use client';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
}

function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '', separator = false }: CounterProps) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      // Add blur effect during animation
      if (counterRef.current) {
        const blurAmount = (1 - progress) * 2;
        counterRef.current.style.filter = `blur(${blurAmount}px)`;
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
        if (counterRef.current) {
          counterRef.current.style.filter = 'blur(0px)';
        }
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  const formatNumber = (num: number) => {
    if (separator && num >= 1000) {
      return num.toLocaleString('en-IN');
    }
    return num.toString();
  };

  return (
    <div ref={ref} className="inline-block">
      <span 
        ref={counterRef}
        className="font-bold tabular-nums"
        style={{ transition: 'filter 0.3s' }}
      >
        {prefix}{formatNumber(count)}{suffix}
      </span>
    </div>
  );
}

export default AnimatedCounter;
