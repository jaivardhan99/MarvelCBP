import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.h1 
      className="logo-text font-display text-5xl md:text-7xl tracking-wider text-white font-bold"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
    >
      CHRONOVERSE
    </motion.h1>
  );
}
