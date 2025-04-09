import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CharacterModel from './CharacterModel';
import ParticleEffect from './ParticleEffect';
import { Character } from '@/data/characters';

interface CharacterPanelProps {
  character: Character;
}

export default function CharacterPanel({ character }: CharacterPanelProps) {
  const [hovered, setHovered] = useState(false);
  
  const containerClass = `character-container ${character.containerClass} h-96 md:h-[70vh] bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden parallax-tilt transition-all duration-500`;
  const borderClass = `glow-border ${character.borderClass} h-full flex flex-col items-center justify-center p-4 relative`;
  
  return (
    <motion.div 
      className={containerClass}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={borderClass}>
        {/* Character Model/Image */}
        <div className="character-image relative w-full h-3/5 overflow-hidden flex items-center justify-center">
          <CharacterModel 
            model={character.model} 
            alt={character.name} 
            hovered={hovered}
          />
        </div>
        
        {/* Tech Interface Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 bg-cover bg-center" 
          style={{ backgroundImage: `url('${character.overlayImage}')` }}
        />
        
        {/* Character Info */}
        <div className="character-info z-10 flex flex-col items-center justify-end h-2/5 py-4">
          <motion.h2 
            className={`character-name font-heading text-3xl md:text-4xl font-bold ${character.nameColor} mb-2 tracking-wider`}
            animate={{ 
              opacity: hovered ? 1 : 0, 
              y: hovered ? 0 : 20,
              scale: hovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {character.name}
          </motion.h2>
          
          <div className="hidden lg:block">
            <p className="text-center text-sm text-gray-300 mb-4 max-w-xs">
              {character.description}
            </p>
            <motion.button 
              className={`tech-button font-heading text-xs tracking-wider py-2 px-4 ${character.buttonClass} transition-all duration-300 rounded`}
              whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${character.glowColor}` }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE PROFILE
            </motion.button>
          </div>
        </div>
        
        {/* Themed Particles Effect */}
        <ParticleEffect 
          active={hovered} 
          type={character.id} 
        />
      </div>
    </motion.div>
  );
}
