import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    let animationFrameId: number;
    let startTimestamp: number | null = null;
    
    if (inView) {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        countRef.current = Math.floor(progress * end);
        setCount(countRef.current);
        
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        }
      };
      
      animationFrameId = requestAnimationFrame(step);
    }
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, inView]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-blue-600">
      {prefix}{count}{suffix}
      <span className="text-blue-600">+</span>
    </div>
  );
};

export default AnimatedCounter;