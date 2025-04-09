import { motion } from 'framer-motion';

export default function ChronoverseFooter() {
  const navItems = [
    { label: 'CHARACTERS', href: '#' },
    { label: 'TIMELINES', href: '#' },
    { label: 'MULTIVERSE', href: '#' },
    { label: 'ABOUT', href: '#' }
  ];
  
  return (
    <footer className="w-full py-6 mt-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-heading text-xs text-gray-500">
              © {new Date().getFullYear()} CHRONOVERSE • MARVEL EXPERIENCE
            </p>
          </div>
          <div className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                className="font-heading text-xs text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
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
