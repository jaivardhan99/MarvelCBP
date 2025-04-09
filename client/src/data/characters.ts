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
    model: 'https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?auto=format&fit=crop&w=600&h=800&q=80',
    containerClass: 'iron-man-container',
    borderClass: 'iron-man-border',
    nameColor: 'text-[#FFD700]',
    buttonClass: 'bg-[#E62429]/30 text-[#FFD700] border border-[#FFD700] hover:bg-[#E62429]/50',
    glowColor: 'rgba(230, 36, 41, 0.7)',
    overlayImage: 'https://images.unsplash.com/photo-1581316378113-6750cd91d97b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spiderman',
    name: 'SPIDER-MAN',
    description: 'With great power comes great responsibility. Peter Parker swings through the multiverse protecting the innocent.',
    model: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&h=800&q=80',
    containerClass: 'spider-man-container',
    borderClass: 'spider-man-border',
    nameColor: 'text-[#D42026]',
    buttonClass: 'bg-[#D42026]/30 text-white border border-[#D42026] hover:bg-[#D42026]/50',
    glowColor: 'rgba(212, 32, 38, 0.7)',
    overlayImage: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'drdoom',
    name: 'DR. DOOM',
    description: 'Victor Von Doom wields sorcery and science with equal mastery, a tyrant whose intellect is matched only by his ambition.',
    model: 'https://images.unsplash.com/photo-1642456074142-92f75bd9609f?auto=format&fit=crop&w=600&h=800&q=80',
    containerClass: 'dr-doom-container',
    borderClass: 'dr-doom-border',
    nameColor: 'text-[#C0C0C0]',
    buttonClass: 'bg-[#1A472A]/30 text-[#C0C0C0] border border-[#C0C0C0] hover:bg-[#1A472A]/50',
    glowColor: 'rgba(26, 71, 42, 0.7)',
    overlayImage: 'https://images.unsplash.com/photo-1548391350-968f58dedaed?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'knull',
    name: 'KNULL',
    description: 'God of the Symbiotes, Knull commands darkness itself, threatening to consume all life across the universe.',
    model: 'https://images.unsplash.com/photo-1559163179-3fd017552229?auto=format&fit=crop&w=600&h=800&q=80',
    containerClass: 'knull-container',
    borderClass: 'knull-border',
    nameColor: 'text-[#5E17EB]',
    buttonClass: 'bg-[#5E17EB]/30 text-white border border-[#5E17EB] hover:bg-[#5E17EB]/50',
    glowColor: 'rgba(94, 23, 235, 0.7)',
    overlayImage: 'https://images.unsplash.com/photo-1520034475321-cbe63696469a?auto=format&fit=crop&w=800&q=80'
  }
];
