import React from 'react';
import { motion } from 'framer-motion';

// Define the character model props
interface CharacterModelProps {
  model: string;
  alt: string;
  hovered: boolean;
}

// Simplified character component that uses images instead of 3D models
export default function CharacterModel({ model, alt, hovered }: CharacterModelProps) {
  return (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center"
      animate={{ 
        scale: hovered ? 1.05 : 1,
      }}
      transition={{ duration: 0.7 }}
    >
      <img 
        src={model}
        alt={alt}
        className="object-cover h-full max-w-full"
      />
      
      {/* Overlay effects when hovered */}
      {hovered && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}
