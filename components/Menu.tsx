import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Importante: usa Link di React Router
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Info', href: '/info' },
  { label: 'Gallery', href: '/gallery' },
];

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button */}
      <button 
        onClick={toggleMenu}
        className="fixed top-8 left-8 z-50 p-2 text-white mix-blend-difference hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white rounded-md"
        aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={32} /> : <MenuIcon size={32} />}
      </button>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Sidebar Drawer */}
      <nav 
        className={`fixed top-0 left-0 h-full w-full md:w-96 bg-portfolio-black/95 border-r border-white/10 z-40 transform transition-transform duration-500 cubic-bezier(0.77, 0, 0.175, 1) ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col justify-center h-full px-12 space-y-8">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              to={item.href} // Cambiato da href a to
              onClick={() => setIsOpen(false)}
              // Aggiunto focus:ring per vedere dove si trova il selettore tastiera
              className="group relative overflow-hidden text-3xl md:text-4xl font-serif text-white tracking-widest uppercase py-2 focus:outline-none focus:pl-4 transition-all"
              style={{ transitionDelay: `${index * 100}ms` }}
              tabIndex={isOpen ? 0 : -1} // Impedisce di tappare sul menu quando è chiuso
            >
              <span className="relative z-10 group-hover:text-gray-300 group-focus:text-gray-300 transition-colors">
                {item.label}
              </span>
              {/* Linea sotto che appare anche al focus della tastiera */}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform -translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition-transform duration-300 ease-out" />
            </Link>
          ))}
          
          <div className="mt-12 pt-8 border-t border-white/10">
             <p className="text-gray-400 font-sans text-sm italic">Letizia Giannoccaro</p>
             <p className="text-gray-500 font-sans text-xs mt-2 uppercase tracking-tighter">© {new Date().getFullYear()} Portfolio</p>
          </div>
        </div>
      </nav>
    </>
  );
};