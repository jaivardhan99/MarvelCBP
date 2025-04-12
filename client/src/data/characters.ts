
export interface Character {
  id: string;
  name: string;
  description: string;
  model: string; // URL to 3D model or image
  containerClass: string;
  borderClass: string;
  nameColor: string;
  buttonClass: string;
  glowColor: string;
  overlayImage: string;
}

export const characters: Character[] = [
  {
    id: 'ironman',
    name: 'IRON MAN',
    description: 'Genius inventor Tony Stark continues to evolve his armor technology, staying one step ahead of threats to the universe.',
    model: 'https://wallpapers.com/images/high/movie-poster-iron-man-phone-nbkpu519x63l5205.webp',
    containerClass: 'iron-man-container',
    borderClass: 'iron-man-border',
    nameColor: 'text-[#FFD700]',
    buttonClass: 'bg-[#E62429]/30 text-[#FFD700] border border-[#FFD700] hover:bg-[#E62429]/50',
    glowColor: 'rgba(230, 36, 41, 0.7)',
    overlayImage: '/attached_assets/319988-3840x2160-desktop-4k-iron-man-background.jpg'
  },
  {
    id: 'spiderman',
    name: 'SPIDER-MAN',
    description: 'With great power comes great responsibility. Peter Parker swings through the multiverse protecting the innocent.',
    model: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    containerClass: 'spider-man-container',
    borderClass: 'spider-man-border',
    nameColor: 'text-[#D42026]',
    buttonClass: 'bg-[#D42026]/30 text-white border border-[#D42026] hover:bg-[#D42026]/50',
    glowColor: 'rgba(212, 32, 38, 0.7)',
    overlayImage: '/attached_assets/image_1744180591908.png'
  },
  {
    id: 'drdoom',
    name: 'DR. DOOM',
    description: 'Victor Von Doom wields sorcery and science with equal mastery, a tyrant whose intellect is matched only by his ambition.',
    model: 'https://wallpapers.com/images/high/dr-doom-1200-x-1500-u3a60pwmljeftrrw.webp',
    containerClass: 'dr-doom-container',
    borderClass: 'dr-doom-border',
    nameColor: 'text-[#C0C0C0]',
    buttonClass: 'bg-[#1A472A]/30 text-[#C0C0C0] border border-[#C0C0C0] hover:bg-[#1A472A]/50',
    glowColor: 'rgba(26, 71, 42, 0.7)',
    overlayImage: '/attached_assets/doom-iphone-cjbmacuowuyc3j7f.jpg'
  },
  {
    id: 'knull',
    name: 'KNULL',
    description: 'God of the Symbiotes, Knull commands darkness itself, threatening to consume all life across the universe.',
    model: '/attached_assets/image_1744180591908.png',
    containerClass: 'knull-container',
    borderClass: 'knull-border',
    nameColor: 'text-[#5E17EB]',
    buttonClass: 'bg-[#5E17EB]/30 text-white border border-[#5E17EB] hover:bg-[#5E17EB]/50',
    glowColor: 'rgba(94, 23, 235, 0.7)',
    overlayImage: '/attached_assets/image_1744180591908.png'
  }
];
