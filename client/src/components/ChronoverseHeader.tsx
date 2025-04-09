import { useState } from 'react';
import Logo from './Logo';
import AudioToggle from './AudioToggle';
import { useAudio } from '@/lib/useAudio';
import { motion } from 'framer-motion';

export default function ChronoverseHeader() {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <header className="relative py-10 flex flex-col items-center justify-center z-10">
      {/* Marvel-style tech interface markers */}
      <div className="absolute top-0 left-0 w-32 h-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-2 h-8 bg-red-600 opacity-80" />
        <div className="absolute top-0 left-8 w-16 h-1 bg-red-600 opacity-60" />
        <div className="absolute top-4 left-4 w-4 h-4 border border-red-600 opacity-70" />
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-16 pointer-events-none">
        <div className="absolute top-0 right-0 w-2 h-8 bg-red-600 opacity-80" />
        <div className="absolute top-0 right-8 w-16 h-1 bg-red-600 opacity-60" />
        <div className="absolute top-4 right-4 w-4 h-4 border border-red-600 opacity-70" />
      </div>
      
      {/* Main Logo */}
      <div className="logo-container z-10 mb-6">
        <Logo />
      </div>
      
      {/* Tagline with Marvel-inspired glitch effect */}
      <motion.p 
        className="glitch-text font-heading text-lg tracking-wider mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        EXPLORE THE MARVEL MULTIVERSE
      </motion.p>
      
      {/* Decorative line */}
      <motion.div 
        className="w-48 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80 mb-2"
        initial={{ width: 0 }}
        animate={{ width: 192 }}
        transition={{ delay: 1, duration: 0.8 }}
      />
      
      {/* Audio Toggle Button */}
      <AudioToggle isPlaying={isPlaying} onToggle={toggleAudio} />
      
      {/* Marvel-style decorative elements */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-40" />
      </div>
    </header>
  );
}
