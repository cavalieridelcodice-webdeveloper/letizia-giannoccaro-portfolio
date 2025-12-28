import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    /* Trasformiamo il div in un Link per tornare alla Home */
    <Link 
      to="/" 
      className="flex flex-col items-end z-50 select-none group outline-none focus:ring-2 focus:ring-white/20 rounded-lg p-2 transition-all"
      aria-label="Letizia Giannoccaro - Torna alla Home"
    >
      {/* Monogram Container */}
      <div className="relative w-24 h-20 md:w-32 md:h-24 mb-2">
        
        {/* L - Bianca Pura */}
        <span className="absolute left-0 top-0 text-6xl md:text-8xl font-serif text-white font-bold leading-none 
                         animate-[slideDown_1.2s_ease-out_forwards] blur-lg opacity-0 z-10 
                         group-hover:text-gray-200 transition-colors">
          L
        </span>
        
        {/* G - Mix-blend-overlay per profondità */}
        <span className="absolute left-8 top-4 md:left-12 md:top-6 text-6xl md:text-8xl font-serif text-white/40 font-bold leading-none 
                         animate-[slideUp_1.2s_ease-out_0.3s_forwards] blur-lg opacity-0 mix-blend-overlay z-0">
          G
        </span>
      </div>
      
      {/* Full Name */}
      <div className="text-right">
        <h1 className="text-[10px] md:text-xs font-sans tracking-[0.5em] uppercase text-gray-300 
                       animate-[trackingExpand_1.5s_ease-in-out_1s_forwards] opacity-0">
          Letizia
          <span className="block font-bold text-white tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-500">
            Giannoccaro
          </span>
        </h1>
      </div>

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-20px); opacity: 0; filter: blur(10px); }
          100% { transform: translateY(0); opacity: 1; filter: blur(0); }
        }
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; filter: blur(10px); }
          100% { transform: translateY(0); opacity: 1; filter: blur(0); }
        }
        @keyframes trackingExpand {
          0% { letter-spacing: 0.2em; opacity: 0; }
          100% { letter-spacing: 0.5em; opacity: 1; }
        }
      `}</style>
    </Link>
  );
};