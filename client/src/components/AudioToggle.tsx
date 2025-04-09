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
      className="absolute top-4 right-4 bg-[#080810] p-2 rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300"
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-gray-400 font-heading text-xs">
        SOUND {isPlaying ? 'ON' : 'OFF'}
      </span>
    </motion.button>
  );
}
