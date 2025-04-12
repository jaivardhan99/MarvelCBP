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
  
  // Marvel-inspired card design with distinct character theming
  const containerClass = `character-card character-container ${character.containerClass} h-96 md:h-[70vh] rounded-sm overflow-hidden parallax-tilt transition-all duration-500`;
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
      {/* Character status indicators - Marvel HUD style */}
      <div className="absolute top-2 left-2 z-20">
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full ${hovered ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`} />
          <div className="ml-2 font-heading text-[10px] text-gray-300">
            {hovered ? 'ACTIVE' : 'STANDBY'}
          </div>
        </div>
      </div>
      
      <div className={borderClass}>
        {/* Character Model/Image with enhanced effects */}
        <div className="character-image relative w-full h-[90%] overflow-hidden flex items-center justify-center">
          <CharacterModel 
            model={character.model} 
            alt={character.name} 
            hovered={hovered}
          />
          
          {/* Energy field effect that appears on hover */}
          {hovered && (
            <motion.div 
              className="absolute inset-0 z-10 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-red-900/30 to-transparent" />
            </motion.div>
          )}
        </div>
        
        {/* Tech Interface Overlay - More Marvel-like with tech patterns */}
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 bg-cover bg-center" 
          style={{ backgroundImage: `url('${character.overlayImage}')` }}
        />
        
        {/* Tech scan lines for futuristic effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="h-px bg-red-500/70 w-full"
              style={{ top: `${i * 5}%` }}
            />
          ))}
        </div>
        
        {/* Character Info with Marvel-style typography */}
        <div className="character-info z-10 flex flex-col items-center justify-end h-2/5 py-4">
          <motion.div
            className="w-full relative text-center"
            animate={{ 
              y: hovered ? 0 : 10
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className={`character-name font-heading text-3xl md:text-4xl font-bold mb-2 tracking-wider`}
              style={{ 
                color: hovered ? character.nameColor.replace('text-', '') : 'white',
                textShadow: hovered ? `0 0 10px ${character.glowColor}, 0 0 20px ${character.glowColor}` : 'none'
              }}
              animate={{ 
                opacity: 1, 
                scale: hovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {character.name}
            </motion.h2>
            
            {/* Red dividing line - Marvel style */}
            <motion.div 
              className="h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent w-full mx-auto"
              initial={{ width: "30%", opacity: 0.3 }}
              animate={{ 
                width: hovered ? "80%" : "30%", 
                opacity: hovered ? 0.8 : 0.3 
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          
          <motion.div 
            className="hidden lg:block w-full mt-3"
            animate={{ 
              opacity: hovered ? 1 : 0, 
              y: hovered ? 0 : 10
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-center text-sm text-gray-300 mb-4 max-w-xs mx-auto">
              {character.description}
            </p>
            <div className="flex justify-center">
              <motion.button 
                className="marvel-button text-xs font-heading tracking-wider py-2 px-4"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 0 15px ${character.glowColor}` 
                }}
                whileTap={{ scale: 0.95 }}
              >
                ACCESS FILE
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced Particles Effect */}
        <ParticleEffect 
          active={hovered} 
          type={character.id} 
        />
      </div>
    </motion.div>
  );
}
