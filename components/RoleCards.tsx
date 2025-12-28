import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom'; // Importato per rendere le card interattive
import { Role } from '../types';

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
    <section id="roles" className="relative py-20 bg-portfolio-black overflow-hidden">
       <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white italic mb-2">Portfolio</h2>
            <div className="h-1 w-20 bg-white"></div>
          </div>
          
          {/* Navigation Arrows - Rese visibili e accessibili */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white transition-all"
              aria-label="Scorri a sinistra"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white transition-all"
              aria-label="Scorri a destra"
            >
              <ChevronRight size={24} />
            </button>
          </div>
       </div>

      {/* Scrolling Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 snap-x mandatory no-scrollbar focus:outline-none"
        tabIndex={-1}
      >
        {roles.map((role) => (
          /* Trasformato in Link per mandare l'utente alla Gallery */
          <Link 
            key={role.id}
            to="/gallery"
            className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[65vh] md:h-[550px] relative group overflow-hidden cursor-pointer block outline-none focus:ring-4 focus:ring-white rounded-sm"
            aria-label={`Guarda foto come ${role.title}`}
          >
            <img 
              src={role.image} 
              alt={role.alt} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-focus:scale-110 brightness-75 group-hover:brightness-100 group-focus:brightness-100"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 group-focus:opacity-40 transition-opacity duration-500" />
            
            <div className="absolute bottom-0 left-0 w-full p-10 translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500">
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-4 border-l-4 border-white pl-6">
                {role.title}
              </h3>
              <p className="text-gray-300 font-sans pl-7 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-100 text-lg italic">
                {role.description}
              </p>
            </div>
          </Link>
        ))}
        
        <div className="shrink-0 w-6 md:w-12" />
      </div>
    </section>
  );
};