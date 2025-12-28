import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { PrivacyPolicy } from './LegalPages';
import { CookiePolicy } from './LegalPages';


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-neutral-900 text-white py-16 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif tracking-widest mb-2">LG</h2>
            <p className="text-sm text-gray-400 font-sans tracking-wider uppercase">
              Artist Portfolio
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4">
              <a href="mailto:letiziagiannoccaro20@gmail.com" className="flex items-center justify-center md:justify-start gap-3 hover:text-gray-300 transition-colors group">
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10">
                  <Mail size={18} />
                </div>
                <span className="font-sans tracking-wide">letiziagiannoccaro20@gmail.com</span>
              </a>
              <a href="tel:+393806576095" className="flex items-center justify-center md:justify-start gap-3 hover:text-gray-300 transition-colors group">
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10">
                  <Phone size={18} />
                </div>
                <span className="font-sans tracking-wide">+39 380 657 6095</span>
              </a>
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/letizia.giannoccaro?locale=it_IT" aria-label="Facebook" className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-transform hover:-translate-y-1">
              <Facebook size={20} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_letiziagiannoccaro_/" aria-label="Instagram" className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-transform hover:-translate-y-1">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-600 font-sans">
            © {currentYear} Letizia Giannoccaro. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a 
              href="/privacy-policy" 
              className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              Privacy Policy
            </a>
            <a 
              href="/cookie-policy" 
              className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};