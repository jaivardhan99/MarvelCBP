import { useEffect } from 'react';
import ChronoverseHeader from '@/components/ChronoverseHeader';
import CharacterPanel from '@/components/CharacterPanel';
import ChronoverseFooter from '@/components/ChronoverseFooter';
import { characters } from '@/data/characters';
import { useParallaxEffect } from '@/lib/useParallaxEffect';

export default function Home() {
  const { initParallaxEffect, resetParallaxEffect } = useParallaxEffect();

  useEffect(() => {
    // Initialize parallax effect for character panels
    initParallaxEffect();

    // Add animation delay to character containers for staggered entrance
    const characterContainers = document.querySelectorAll('.character-container');
    characterContainers.forEach((container, index) => {
      (container as HTMLElement).style.animationDelay = `${index * 0.2}s`;
      container.classList.add('animate-slide-in');
    });

    // Clean up effect when component unmounts
    return () => {
      resetParallaxEffect();
    };
  }, [initParallaxEffect, resetParallaxEffect]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Cosmic Background */}
      <div className="fixed inset-0 z-[-1] bg-space">
        <div 
          className="absolute inset-0" 
          style={{
            background: "radial-gradient(circle at center, #1f1f3f 0%, transparent 70%), url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-transparent" />
      </div>

      {/* Header with Logo */}
      <ChronoverseHeader />

      {/* Main Characters Grid */}
      <main className="relative container mx-auto px-4 py-8 flex-grow">
        <div className="character-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2">
          {characters.map((character) => (
            <CharacterPanel 
              key={character.id} 
              character={character} 
            />
          ))}
        </div>
      </main>

      {/* Footer Navigation */}
      <ChronoverseFooter />
    </div>
  );
}
