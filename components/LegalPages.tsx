import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Cookie } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, subtitle, icon, children }) => (
  <section className="bg-portfolio-black text-white py-32 px-6 min-h-screen">
    {/* Definiamo il contenitore come articolo per la SEO */}
    <article className="container mx-auto max-w-3xl">
      
      {/* Torna alla Home - Ottimizzato con focus visibile */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-gray-500 hover:text-white focus:text-white transition-colors mb-12 uppercase tracking-widest text-xs outline-none focus:ring-2 focus:ring-white focus:ring-offset-8 focus:ring-offset-portfolio-black rounded"
      >
        <ArrowLeft size={14} /> Torna alla Home
      </Link>

      {/* Header Pagina */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-4 text-gray-500">
          {icon}
          <span className="uppercase tracking-[0.3em] text-xs">{subtitle}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif mb-4 italic">
          {title}
        </h1>
        <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent"></div>
      </header>

      {/* Contenuto Testuale - Migliorata la leggibilità e i tag semantici */}
      <div className="space-y-12 font-sans text-gray-400 leading-relaxed text-lg">
        {children}
      </div>

      {/* Footer della pagina legale */}
      <footer className="mt-20 pt-10 border-t border-white/5 text-sm text-gray-600 italic">
        Ultimo aggiornamento: Dicembre 2025
      </footer>
    </article>
  </section>
);

export const PrivacyPolicy: React.FC = () => (
  <LegalLayout 
    title="Privacy Policy" 
    subtitle="Tutela dei Dati" 
    icon={<ShieldCheck size={20} />}
  >
    <section>
      <h2 className="text-white font-serif text-2xl mb-4 italic">01. Trasparenza</h2>
      <p>
        La presente Privacy Policy descrive come i tuoi dati personali vengono raccolti e trattati durante la navigazione sul sito di <strong>Letizia Giannoccaro</strong>, in piena conformità con il GDPR (Regolamento UE 2016/679).
      </p>
    </section>

    <section>
      <h2 className="text-white font-serif text-2xl mb-4 italic">02. Raccolta Dati</h2>
      <p>
        I dati vengono acquisiti esclusivamente se inviati volontariamente tramite email o telefono. Questi includono nome, indirizzo email e dettagli professionali necessari per gestire collaborazioni, casting e contatti lavorativi.
      </p>
    </section>

    <section>
      <h2 className="text-white font-serif text-2xl mb-4 italic">03. Finalità</h2>
      <p>
        Il trattamento ha l'unica finalità di gestire la comunicazione artistica e professionale. I tuoi dati non saranno mai venduti, ceduti o utilizzati per attività di marketing automatizzato di terze parti.
      </p>
    </section>

    <section>
      <h2 className="text-white font-serif text-2xl mb-4 italic">04. I tuoi Diritti</h2>
      <p>
        Hai il diritto di richiedere l'accesso, la rettifica o la cancellazione dei tuoi dati in qualsiasi momento. Per ogni richiesta, puoi scrivere direttamente a: 
        <a 
          href="mailto:letiziagiannoccaro20@gmail.com" 
          className="text-white border-b border-white/20 hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-white px-1 ml-1"
        >
          letiziagiannoccaro20@gmail.com
        </a>.
      </p>
    </section>
  </LegalLayout>
);

export const CookiePolicy: React.FC = () => (
  <LegalLayout 
    title="Cookie Policy" 
    subtitle="Esperienza Digitale" 
    icon={<Cookie size={20} />}
  >
    <section>
      <h2 className="text-white font-serif text-2xl mb-4 italic">Utilizzo dei Cookie</h2>
      <p>
        Questo sito web utilizza solo <strong>cookie tecnici e analitici di prima parte</strong>. Questi piccoli file di testo sono essenziali per permetterti di navigare tra le sezioni e visualizzare correttamente i contenuti multimediali (come i video del portfolio).
      </p>
    </section>

    <section>
      <h2 className="text-white font-serif text-2xl mb-4 italic">Nessun Tracciamento</h2>
      <p>
        Non utilizziamo cookie di profilazione, né cookie pubblicitari per monitorare il tuo comportamento su altri siti web. La tua privacy durante la visione della gallery è totalmente garantita.
      </p>
    </section>

    <section>
      <h2 className="text-white font-serif text-2xl mb-4 italic">Gestione</h2>
      <p>
        Puoi decidere di limitare o bloccare i cookie tramite le impostazioni del tuo browser, tuttavia questo potrebbe influire sulla fluidità di riproduzione dei video nella sezione Info.
      </p>
    </section>
  </LegalLayout>
);