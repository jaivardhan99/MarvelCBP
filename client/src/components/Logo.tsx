import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <div className="relative flex flex-col items-center">
      <motion.h1 
        className="logo-text font-display text-5xl md:text-7xl tracking-wider text-white font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
        style={{
          textShadow: `
            0 0 5px rgba(212, 32, 38, 0.8),
            0 0 10px rgba(212, 32, 38, 0.5),
            0 0 15px rgba(212, 32, 38, 0.3)
          `,
          WebkitTextStroke: '1px rgba(212, 32, 38, 0.8)'
        }}
      >
        CHRONOVERSE
      </motion.h1>
      
      {/* Marvel-inspired red line underneath */}
      <motion.div 
        className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent w-full mt-2"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      
      {/* Glitch elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0, 0.1, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          repeatType: "loop" 
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-display text-5xl md:text-7xl tracking-wider text-red-500 font-bold opacity-80" 
            style={{ 
              transform: 'translate(2px, 2px)',
              filter: 'blur(1px)'
            }}>
            CHRONOVERSE
          </div>
        </div>
      </motion.div>
    </div>
  );
}
