import { useCallback } from 'react';

export function useParallaxEffect() {
  const initParallaxEffect = useCallback(() => {
    const parallaxItems = document.querySelectorAll('.parallax-tilt');
    
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      parallaxItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemX = rect.left + rect.width / 2;
        const itemY = rect.top + rect.height / 2;
        
        // Calculate distance from mouse to item center
        const distX = mouseX - itemX;
        const distY = mouseY - itemY;
        
        // Only apply effect if mouse is close to the item
        if (Math.abs(distX) < window.innerWidth / 2 && Math.abs(distY) < window.innerHeight / 2) {
          // Scale down the effect for subtle movement
          const rotateY = distX * 0.01;
          const rotateX = -distY * 0.01;
          
          (item as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        } else {
          (item as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        }
      });
    };
    
    const handleMouseLeave = () => {
      parallaxItems.forEach(item => {
        (item as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    };
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Return cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  const resetParallaxEffect = useCallback(() => {
    const parallaxItems = document.querySelectorAll('.parallax-tilt');
    
    parallaxItems.forEach(item => {
      (item as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  }, []);
  
  return { initParallaxEffect, resetParallaxEffect };
}
