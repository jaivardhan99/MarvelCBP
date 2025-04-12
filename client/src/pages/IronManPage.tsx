
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import IronManScene from '@/components/IronManScene';

export default function IronManPage() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="iron-man-page min-h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-20 container mx-auto px-4 py-8"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <IronManScene />
        </motion.div>
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-heading text-[#FFD700] text-center mb-8 tracking-wider"
        >
          IRON MAN
        </motion.h1>
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-[#FFD700]/30"
        >
          <p className="text-white/90 mb-6 text-lg">
            Genius inventor Tony Stark continues to evolve his armor technology, staying one step ahead of threats to the universe.
          </p>
          
          <div className="grid grid-cols-3 gap-6">
            {['Mark 85', 'Nanotech', 'Arc Reactor'].map((tech, i) => (
              <motion.div 
                key={tech}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="tech-card bg-[#FFD700]/10 p-4 rounded border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all"
              >
                <h3 className="text-[#FFD700] font-heading mb-2">{tech}</h3>
                <div className="h-1 w-full bg-[#FFD700]/30 rounded">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1 + (i * 0.1), duration: 1 }}
                    className="h-full bg-[#FFD700] rounded"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
