import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Hero } from './components/Hero';
import { RoleCards } from './components/RoleCards';
import { Footer } from './components/Footer';
import { Info } from './components/info';
import { Gallery } from './components/Gallery';
import { PrivacyPolicy, CookiePolicy } from './components/LegalPages'; 

// Funzione per riportare la pagina in alto quando cambi rotta
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Importante per evitare l'effetto "pagina nera" in fondo */}
      <main className="relative min-h-screen bg-portfolio-black text-white selection:bg-white selection:text-black">
        
        <Menu />

        <Routes>
          {/* PAGINA HOME */}
          <Route path="/" element={
            <>
              <Hero />
              <RoleCards />
            </>
          } />

          {/* PAGINA INFO */}
          <Route path="/info" element={<Info />} />

          {/* PAGINA GALLERY */}
          <Route path="/gallery" element={<Gallery />} />

          {/* AGGIUNTE: PAGINE LEGALI */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
};

export default App;