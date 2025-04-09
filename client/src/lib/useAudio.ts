import { useState, useEffect, useRef } from 'react';

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  // Use a ref to keep track of audio elements
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({
    ironman: null,
    spiderman: null,
    drdoom: null,
    knull: null,
    background: null
  });
  
  // Set up audio elements
  useEffect(() => {
    // Background music
    audioRefs.current.background = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-cinematic-atmosphere-sweep-221.mp3');
    audioRefs.current.background.loop = true;
    audioRefs.current.background.volume = 0.3;
    
    // Character sounds (would be implemented in a real version)
    audioRefs.current.ironman = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-laser-weapon-shot-1681.mp3');
    audioRefs.current.spiderman = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-fast-small-sweep-transition-166.mp3');
    audioRefs.current.drdoom = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magical-atmosphere-whoosh-576.mp3');
    audioRefs.current.knull = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-dark-atmosphere-sweeping-583.mp3');
    
    // Set loop settings
    Object.values(audioRefs.current).forEach(audio => {
      if (audio) {
        audio.loop = false;
        audio.volume = 0.5;
      }
    });
    
    // Clean up audio on unmount
    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    };
  }, []);
  
  // Function to toggle audio
  const toggleAudio = () => {
    setIsPlaying(prev => {
      const newState = !prev;
      
      if (newState) {
        // Start background music
        if (audioRefs.current.background) {
          audioRefs.current.background.play().catch(() => {
            // Handle any autoplay policy errors
            console.warn('Audio autoplay was prevented by the browser');
          });
        }
      } else {
        // Pause all audio
        Object.values(audioRefs.current).forEach(audio => {
          if (audio) {
            audio.pause();
          }
        });
      }
      
      return newState;
    });
  };
  
  // Function to play character-specific sound
  const playCharacterSound = (character: string) => {
    if (!isPlaying) return;
    
    const audio = audioRefs.current[character as keyof typeof audioRefs.current];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(console.error);
    }
  };
  
  return { isPlaying, toggleAudio, playCharacterSound };
}
