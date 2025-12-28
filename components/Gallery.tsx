import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface Photo {
    id: number;
    url: string;
    title: string;
    altText: string;
    category: 'Modella' | 'Danza' | 'Cinema';
}

export const Gallery: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState<string>('Tutte');

    const photos: Photo[] = [
        // ... (i tuoi dati restano invariati)
        { id: 0, url: '/assets/images/gallery/modella/letizia-giannoccaro-primo-piano-sorriso.jpg', title: 'Ritratto Sorridente', altText: 'Letizia Giannoccaro - Primo piano sorridente, attrice e modella professionista', category: 'Modella' },
        { id: 1, url: '/assets/images/gallery/modella/letizia-giannoccaro-attrice-profilo-bn.jpg', title: 'Profilo Artistico', altText: 'Letizia Giannoccaro - Foto profilo artistico in bianco e nero per casting cinema', category: 'Modella' },
        { id: 2, url: '/assets/images/gallery/modella/letizia-giannoccaro-modella-ritratto-cappello.jpg', title: 'Urban Style Portrait', altText: 'Letizia Giannoccaro - Ritratto modella con cappello e look urban street style', category: 'Modella' },
        { id: 3, url: '/assets/images/gallery/modella/letizia-giannoccaro-attrice-ritratto-bn.jpg', title: 'Headshot Professionale', altText: 'Letizia Giannoccaro - Headshot intenso in bianco e nero per portfolio attoriale', category: 'Modella' },
        { id: 4, url: '/assets/images/gallery/modella/letizia-giannoccaro-headshot-posa-artistica.jpg', title: 'Posa Editoriale', altText: 'Letizia Giannoccaro - Posa editoriale con mano nei capelli per book moda', category: 'Modella' },
        { id: 5, url: '/assets/images/gallery/modella/letizia-giannoccaro-ritratto-artistico-mare.jpg', title: 'Ritratto Mediterraneo', altText: 'Letizia Giannoccaro - Ritratto artistico a colori con sfondo mare', category: 'Modella' },
        { id: 6, url: '/assets/images/gallery/modella/letizia-giannoccaro-ritratto-artistico-primo-piano.jpg', title: 'Primo Piano Beauty', altText: 'Letizia Giannoccaro - Primo piano fotografico orientato al settore beauty', category: 'Modella' },
        { id: 7, url: '/assets/images/gallery/modella/letizia-giannoccaro-ritratto-artistico-truccata.jpg', title: 'Fashion Look', altText: 'Letizia Giannoccaro - Ritratto fotografico con trucco editoriale', category: 'Modella' },
        { id: 8, url: '/assets/images/gallery/modella/letizia-giannoccaro-ritratto-artistico-corpo-intero.jpg', title: 'Figura Intera', altText: 'Letizia Giannoccaro - Foto a corpo intero per portfolio modella e attrice', category: 'Modella' },
        { id: 9, url: '/assets/images/gallery/danza/letizia-giannoccaro-mezzo-busto.jpg', title: 'Mezzo busto in costume d’epoca', altText: 'Letizia Giannoccaro, danzatrice e performer, ritratto a mezzo busto in costume d’epoca di ispirazione ottocentesca', category: 'Danza' },
        { id: 10, url: '/assets/images/gallery/danza/letizia-giannoccaro-corpo-intero-con-abito-rosso.jpg', title: 'Figura intera in abito rosso', altText: 'Letizia Giannoccaro, danzatrice, figura intera con abito rosso di ispirazione storica', category: 'Danza' },
        { id: 11, url: '/assets/images/gallery/danza/letizia-giannoccaro-corpo-intero-con-abito-rosso-seria.jpg', title: 'Espressione drammatica', altText: 'Letizia Giannoccaro, performer, espressione intensa in abito storico rosso', category: 'Danza' },
        { id: 12, url: '/assets/images/gallery/danza/letizia-giannoccaro-corpo-intero-con-abito-rosso-antico-diverita.jpg', title: 'Espressione sorridente', altText: 'Letizia Giannoccaro - Espressione sorridente con abito rosso antico', category: 'Danza' },
        { id: 13, url: '/assets/images/gallery/danza/letizia-giannoccaro-corpo-intero-con-abito-bianco-antica.jpg', title: 'Letizia Giannoccaro, performer, espressione intensa in abito storico bianco', altText: 'Letizia Giannoccaro, performer, figura intera con abito bianco storico', category: 'Danza' },
        { id: 14, url: '/assets/images/gallery/danza/letizia-giannoccaro-corpo-intero-con-abito-rosso-antico-seduta.jpg', title: 'Abito antico seduta', altText: 'Letizia Giannoccaro - Foto a corpo intero con abito rosso antico seduta', category: 'Danza' },
        { id: 15, url: '/assets/images/gallery/danza/letizia-giannoccaro-seduta seria.jpg', title: 'Posa composta in seduta', altText: 'Letizia Giannoccaro, danzatrice e performer, posa composta da seduta con espressione seria in costume storico', category: 'Danza' },
        { id: 16, url: '/assets/images/gallery/danza/letizia-giannoccaro-abito-antico-professionale.jpg', title: 'Posa professionale', altText: 'Letizia Giannoccaro - Posa ballerina seduta professionale', category: 'Danza' },
        { id: 17, url: '/assets/images/gallery/danza/letizia-giannoccaro-abito-antico-pensierosa.jpg', title: 'Posa pensierosa', altText: 'Letizia Giannoccaro - Posa ballerina seduta pensierosa', category: 'Danza' },
        { id: 18, url: '/assets/images/gallery/cinema/letizia-giannoccaro-primo-piano-cappello.jpg', title: 'Primo piano cinematografico', altText: 'Letizia Giannoccaro, attrice, primo piano cinematografico con cappello', category: 'Cinema' },
        { id: 19, url: '/assets/images/gallery/cinema/letizia-giannoccaro-mezzo-busto-cappello.jpg', title: 'Mezzo busto per cinema', altText: 'Letizia Giannoccaro, attrice, mezzo busto con cappello per casting cinema', category: 'Cinema' },
        { id: 20, url: '/assets/images/gallery/cinema/letizia-giannoccaro-corpo-intero-cappello.jpg', title: 'Figura intera cinematografica', altText: 'Letizia Giannoccaro, attrice, figura intera con cappello in contesto cinematografico', category: 'Cinema' },
        { id: 21, url: '/assets/images/gallery/cinema/letizia-giannoccaro-corpo-intero-ferma.jpg', title: 'Figura intera in posa statica', altText: 'Letizia Giannoccaro, attrice, figura intera in posa statica con atteggiamento controllato, ideale per ruoli cinematografici contemporanei ', category: 'Cinema' },
        { id: 22, url: '/assets/images/gallery/cinema/letizia-giannoccaro-tailleur.jpg', title: 'Look elegante in tailleur', altText: 'Letizia Giannoccaro, attrice, figura intera in tailleur elegante per ruoli contemporanei', category: 'Cinema' },
        { id: 23, url: '/assets/images/gallery/cinema/letizia-giannoccaro-in-macchina.jpg', title: 'Scena intima in auto', altText: 'Letizia Giannoccaro, attrice, ritratto cinematografico seduta in auto, luce naturale e atmosfera narrativa', category: 'Cinema' },
        { id: 24, url: '/assets/images/gallery/cinema/letizia-giannoccaro-braccia-in-crociate.jpg', title: 'Atteggiamento deciso', altText: 'Letizia Giannoccaro, attrice, posa frontale con braccia incrociate, espressione determinata per ruoli drammatici', category: 'Cinema' },
        { id: 25, url: '/assets/images/gallery/cinema/letizia-giannoccaro-guarda-sinistra.jpg', title: 'Sguardo fuori campo', altText: 'Letizia Giannoccaro, attrice, ritratto cinematografico con sguardo laterale, ideale per casting e scene introspettive', category: 'Cinema' },
        { id: 26, url: '/assets/images/gallery/cinema/letizia-giannoccaro-sorridente.jpg', title: 'Sorriso naturale', altText: 'Letizia Giannoccaro, attrice, ritratto con sorriso spontaneo e luce morbida per ruoli contemporanei', category: 'Cinema' },
    ];

    const categories = ['Tutte', 'Modella', 'Danza', 'Cinema'];

    const filteredPhotos = filter === 'Tutte' 
        ? photos 
        : photos.filter(p => p.category === filter);

    const closeLightbox = useCallback(() => setSelectedIndex(null), []);
    
    const nextImage = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredPhotos.length : null));
        }
    }, [selectedIndex, filteredPhotos.length]);

    const prevImage = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null));
        }
    }, [selectedIndex, filteredPhotos.length]);

    // GESTIONE TASTIERA (Esc, Freccia DX, Freccia SX)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, nextImage, prevImage, closeLightbox]);

    return (
        <section id="gallery" className="py-20 bg-portfolio-black min-h-screen">
            <div className="container mx-auto px-6">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif text-white italic">Gallery</h2>
                        <div className="h-1 w-20 bg-white mt-4"></div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 border transition-all duration-300 uppercase tracking-widest text-xs focus:ring-2 focus:ring-white outline-none ${
                                    filter === cat 
                                    ? 'bg-white text-black border-white' 
                                    : 'text-white border-white/20 hover:border-white'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPhotos.map((photo, index) => (
                        <button 
                            key={photo.id}
                            className="relative aspect-[3/4] overflow-hidden group cursor-pointer bg-gray-900 shadow-lg focus:outline-none focus:ring-4 focus:ring-white"
                            onClick={() => setSelectedIndex(index)}
                            aria-label={`Visualizza ingrandimento: ${photo.title}`}
                        >
                            <img 
                                src={photo.url} 
                                alt={photo.altText}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-focus:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 group-focus:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                                <div className="text-center transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300">
                                    <Maximize2 className="text-white w-8 h-8 mx-auto mb-2" />
                                    <p className="text-white text-xs uppercase tracking-[0.2em]">{photo.title}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {selectedIndex !== null && (
                <div 
                    className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-10 backdrop-blur-md"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                >
                    <button 
                        className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform duration-300 z-[110] focus:ring-2 focus:ring-white rounded-full p-2" 
                        onClick={closeLightbox}
                        aria-label="Chiudi galleria"
                    >
                        <X size={40} />
                    </button>

                    <button 
                        className="absolute left-4 md:left-10 text-white p-2 z-[110] hover:scale-110 transition-transform focus:ring-2 focus:ring-white rounded-full" 
                        onClick={(e) => prevImage(e)}
                        aria-label="Immagine precedente"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    <button 
                        className="absolute right-4 md:right-10 text-white p-2 z-[110] hover:scale-110 transition-transform focus:ring-2 focus:ring-white rounded-full" 
                        onClick={(e) => nextImage(e)}
                        aria-label="Immagine successiva"
                    >
                        <ChevronRight size={48} />
                    </button>

                    <div className="max-w-full max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={filteredPhotos[selectedIndex].url} 
                            alt={filteredPhotos[selectedIndex].altText}
                            className="max-w-full max-h-[85vh] object-contain shadow-2xl animate-in fade-in zoom-in duration-300"
                        />
                        <p className="mt-6 text-white text-lg font-serif italic tracking-widest uppercase bg-black/50 px-4 py-1 rounded">
                            {filteredPhotos[selectedIndex].title}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};