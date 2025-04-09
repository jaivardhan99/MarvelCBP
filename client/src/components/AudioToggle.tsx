import React from 'react';
import { motion } from 'framer-motion';

interface AudioToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function AudioToggle({ isPlaying, onToggle }: AudioToggleProps) {
  return (
    <motion.button 
      id="audio-toggle" 
      className="absolute top-4 right-4 z-20"
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {/* Marvel-inspired tech frame */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600/40 to-red-700/40 rounded-sm blur-sm"></div>
        
        <div className="marvel-button relative px-3 py-1.5 flex items-center">
          {/* Animated audio icon */}
          <div className="mr-2 relative w-3 h-3">
            {isPlaying ? (
              <>
                <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute -inset-1 bg-red-500/30 rounded-full animate-ping"></div>
              </>
            ) : (
              <div className="absolute inset-0 border border-gray-500 rounded-full"></div>
            )}
          </div>
          
          <span className="text-white font-heading text-xs tracking-widest">
            AUDIO: {isPlaying ? 'ENABLED' : 'DISABLED'}
          </span>
          
          {/* Marvel-style decorative corner */}
          <div className="absolute top-0 right-0 w-2 h-2 pointer-events-none">
            <div className="absolute top-0 right-0 w-2 h-px bg-red-600"></div>
            <div className="absolute top-0 right-0 w-px h-2 bg-red-600"></div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
