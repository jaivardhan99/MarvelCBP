import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ParticleEffectProps {
  active: boolean;
  type: string; // 'ironman', 'spiderman', 'drdoom', 'knull'
}

export default function ParticleEffect({ active, type }: ParticleEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!active || !containerRef.current) return;
    
    // Create particles based on character type
    const container = containerRef.current;
    container.innerHTML = '';
    
    const numParticles = 20;
    
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      
      // Set particle style based on character
      switch (type) {
        case 'ironman':
          particle.className = 'absolute w-1.5 h-1.5 rounded-full bg-[#E62429] opacity-80';
          break;
        case 'spiderman':
          particle.className = 'absolute w-1 h-1 rounded-full bg-[#D42026] opacity-80';
          break;
        case 'drdoom':
          particle.className = 'absolute w-2 h-2 rounded-full bg-[#1A472A] opacity-70';
          break;
        case 'knull':
          particle.className = 'absolute w-2 h-2 rounded-full bg-[#5E17EB] opacity-70';
          break;
      }
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      
      // Random animation duration
      const duration = 2 + Math.random() * 3;
      
      // Character-specific particle animations
      if (type === 'ironman') {
        // Iron Man: Rising energy sparks
        particle.style.animation = `float ${duration}s ease-in-out infinite`;
      } else if (type === 'spiderman') {
        // Spider-Man: Web-like movements
        particle.style.animation = `float ${duration}s ease-in-out infinite, glow ${duration}s ease-in-out infinite`;
      } else if (type === 'drdoom') {
        // Dr. Doom: Magical energy
        particle.style.animation = `glow ${duration}s ease-in-out infinite`;
      } else if (type === 'knull') {
        // Knull: Symbiote tendrils
        particle.style.animation = `glitch ${duration}s infinite`;
      }
      
      container.appendChild(particle);
    }
    
    // Clean up
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [active, type]);
  
  return (
    <AnimatePresence>
      {active && (
        <motion.div 
          className={`particles ${type}-particles`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          ref={containerRef}
        />
      )}
    </AnimatePresence>
  );
}
