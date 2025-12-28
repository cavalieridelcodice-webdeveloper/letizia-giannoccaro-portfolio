import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
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
        className="fixed top-8 left-8 z-50 p-2 text-white mix-blend-difference hover:opacity-80 transition-opacity"
        aria-label="Toggle Menu"
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
      >
        <div className="flex flex-col justify-center h-full px-12 space-y-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group relative overflow-hidden text-3xl md:text-4xl font-serif text-white tracking-widest uppercase py-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10 group-hover:text-gray-300 transition-colors">
                {item.label}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>
          ))}
          
          <div className="mt-12 pt-8 border-t border-white/10">
             <p className="text-gray-400 font-sans text-sm">Letizia Giannoccaro</p>
             <p className="text-gray-500 font-sans text-xs mt-2">© {new Date().getFullYear()} Portfolio</p>
          </div>
        </div>
      </nav>
    </>
  );
};
