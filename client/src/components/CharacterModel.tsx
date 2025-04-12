
import React from 'react';
import { motion } from 'framer-motion';

interface CharacterModelProps {
  model: string;
  alt: string;
  hovered: boolean;
}

export default function CharacterModel({ model, alt, hovered }: CharacterModelProps) {
  return (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      animate={{ 
        scale: hovered ? 1.05 : 1,
      }}
      transition={{ duration: 0.7 }}
    >
      <img 
        src={model}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          objectFit: 'cover',
          objectPosition: 'center center'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/30" />
      {hovered && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}
