import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Role } from '../types';

// Array aggiornato con descrizioni ALT per la SEO
const roles: (Role & { alt: string })[] = [
  {
    id: 1,
    title: 'Ballerina',
    image: '/assets/images/Letizia-Giannoccaro-come-ballerina.jpg',
    description: 'Espressione attraverso il movimento',
    alt: 'Letizia Giannoccaro ballerina professionista in una posa di danza'
  },
  {
    id: 2,
    title: 'Attrice',
    image: '/assets/images/Letizia-Giannoccaro-come-attrice.jpg',
    description: 'Interpretazione e passione scenica',
    alt: 'Ritratto artistico di Letizia Giannoccaro come attrice di teatro e cinema'
  },
  {
    id: 3,
    title: 'Modella',
    image: '/assets/images/Letizia-Giannoccaro-come-modella.jpg',
    description: 'Eleganza e presenza scenica',
    alt: 'Letizia Giannoccaro modella professionista per shooting di moda'
  },
  {
    id: 4,
    title: 'Speaker',
    image: '/assets/images/Letizia-Giannoccaro-come-speaker.jpg',
    description: 'La voce come strumento d\'arte',
    alt: 'Letizia Giannoccaro speaker e conduttrice durante una sessione di registrazione'
  }
];

export const RoleCards: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="gallery" className="relative py-20 bg-portfolio-black">
       <div className="container mx-auto px-6 mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-2">Portfolio</h2>
            <div className="h-1 w-20 bg-white"></div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
       </div>

      {/* Scrolling Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 snap-x mandatory no-scrollbar"
      >
        {roles.map((role) => (
          <div 
            key={role.id}
            className="snap-center shrink-0 w-[85vw] md:w-[400px] h-[60vh] md:h-[500px] relative group overflow-hidden cursor-pointer"
          >
            {/* Image con attributo ALT per la SEO */}
            <img 
              src={role.image} 
              alt={role.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110  brightness-90 group-hover:brightness-100"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
            
            {/* Text Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 border-l-4 border-white pl-4">
                {role.title}
              </h3>
              <p className="text-gray-300 font-sans pl-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {role.description}
              </p>
            </div>
          </div>
        ))}
        
        {/* Spacer for right padding */}
        <div className="shrink-0 w-6 md:w-12" />
      </div>
    </section>
  );
};