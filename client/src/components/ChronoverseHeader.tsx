import { useState } from 'react';
import Logo from './Logo';
import AudioToggle from './AudioToggle';
import { useAudio } from '@/lib/useAudio';

export default function ChronoverseHeader() {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <header className="relative py-8 flex flex-col items-center justify-center">
      <div className="logo-container z-10 mb-4">
        <Logo />
      </div>
      <p className="font-heading text-lg tracking-wide text-gray-300 animate-pulse-slow">
        EXPLORE THE MARVEL MULTIVERSE
      </p>
      
      {/* Audio Toggle Button */}
      <AudioToggle isPlaying={isPlaying} onToggle={toggleAudio} />
    </header>
  );
}
