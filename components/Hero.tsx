import React from 'react';
import { Logo } from './Logo';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-no-repeat transition-all duration-[1.5s] ease-out"
        style={{
          backgroundImage: "url('/assets/images/letizia-giannoccaro-portfolio-home.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
        role="img"
        aria-label="Ritratto di Letizia Giannoccaro - Home"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Logo - Rendiamolo navigabile se il componente Logo contiene un link */}
      <div className="absolute top-8 right-8 md:top-12 md:right-16 z-20 focus-within:ring-2 focus-within:ring-white rounded-lg p-2 transition-all">
        <Logo />
      </div>

      {/* Citazione */}
      <div className="absolute bottom-32 left-8 md:left-24 max-w-lg z-10">
        <p className="text-white/90 font-serif italic text-xl md:text-2xl drop-shadow-2xl">
          "L'arte è l'unica cosa seria al mondo."
        </p>
      </div>

      {/* Scroll Indicator - Trasformato in bottone per la tastiera */}
      <a 
        href="#info" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white focus:text-white animate-bounce transition-colors outline-none focus:ring-2 focus:ring-white rounded-full p-2"
        aria-label="Scorri verso il basso per le informazioni"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
};