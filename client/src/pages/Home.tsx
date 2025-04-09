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
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Marvel Cosmic Background with red gradient */}
      <div className="fixed inset-0 z-[-1]">
        <div className="bg-marvel-cosmos absolute inset-0">
          <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black via-transparent to-black opacity-40" />
          <div className="absolute inset-0 z-[2] bg-black opacity-40" />
        </div>
        
        {/* Animated particle overlay for cosmic effect */}
        <div className="absolute inset-0 z-[3] opacity-30">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-red-600"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `float ${Math.random() * 15 + 10}s linear infinite, glow ${Math.random() * 4 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* HUD Elements */}
      <div className="hidden lg:block">
        <div className="hud-element top-4 left-4">Status: Online</div>
        <div className="hud-element top-4 right-4">Multiverse Scan: Active</div>
        <div className="hud-element bottom-4 left-4">Timeline: Prime</div>
        <div className="hud-element bottom-4 right-4">Security: Level 7</div>
      </div>

      {/* Tech Interface Overlay */}
      <div className="tech-interface-overlay" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581316378113-6750cd91d97b?auto=format&fit=crop&w=800&q=80')" }} 
      />

      {/* Header with Logo */}
      <ChronoverseHeader />

      {/* Main Characters Grid */}
      <main className="relative container mx-auto px-4 py-8 flex-grow z-10">
        <div className="mb-8 text-center">
          <p className="glitch-text font-heading text-lg mb-6 tracking-wider">ACCESS CHRONOVERSE DATABASE</p>
          <div className="w-full max-w-3xl mx-auto h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60"></div>
        </div>
        
        <div className="character-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
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
