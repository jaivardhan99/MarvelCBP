import { motion } from 'framer-motion';

export default function ChronoverseFooter() {
  const navItems = [
    { label: 'CHARACTERS', href: '#' },
    { label: 'TIMELINES', href: '#' },
    { label: 'MULTIVERSE', href: '#' },
    { label: 'ABOUT', href: '#' }
  ];
  
  return (
    <footer className="w-full py-6 mt-8 z-10 relative">
      {/* Marvel-style top border with tech-inspired elements */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-70" />
      <div className="flex justify-center">
        <div className="absolute -top-3 w-32 h-6 flex justify-center">
          <div className="w-16 h-6 border-2 border-red-600 border-t-0 opacity-80" />
        </div>
      </div>
      
      {/* Marvel-inspired corner decorations */}
      <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-8 h-1 bg-red-600 opacity-80" />
        <div className="absolute bottom-0 left-0 w-1 h-8 bg-red-600 opacity-80" />
      </div>
      
      <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-8 h-1 bg-red-600 opacity-80" />
        <div className="absolute bottom-0 right-0 w-1 h-8 bg-red-600 opacity-80" />
      </div>
      
      <div className="container mx-auto px-6 py-4">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-heading text-xs text-gray-400 flex items-center">
              <span className="inline-block w-3 h-3 border border-red-600 mr-2" />
              © {new Date().getFullYear()} CHRONOVERSE • MARVEL EXPERIENCE
            </p>
          </div>
          
          {/* Navigation Items with Marvel-styled buttons */}
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                className="marvel-button text-[10px] py-1.5 px-3 my-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
