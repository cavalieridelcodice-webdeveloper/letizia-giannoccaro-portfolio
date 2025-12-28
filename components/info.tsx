import React from 'react';
import { Download, GraduationCap, Globe, Stars, Languages } from 'lucide-react';

export const Info: React.FC = () => {
    const stats = [
        { label: 'Capelli', value: 'Castani' },
        { label: 'Occhi', value: 'Marroni' },
        { label: 'Altezza', value: '167 cm' },
        { label: 'Peso', value: '47 kg' },
    ];

    const highlights = [
        {
            icon: <GraduationCap size={20} />,
            title: "Formazione d'élite",
            text: "Laurea al DAMS e magistrale in corso presso La Sapienza."
        },
        {
            icon: <Globe size={20} />,
            title: "Esperienza internazionale",
            text: "Stage in Germania e collaborazioni con direttori di fama mondiale."
        },
        {
            icon: <Stars size={20} />,
            title: "Versatilità",
            text: "Attrice, mima, ballerina e aiuto regia."
        },
        {
            icon: <Languages size={20} />,
            title: "Skills Linguistiche",
            text: "Madrelingua italiana e un ottimo inglese (C1)."
        },
    ];

    return (
        <section id="info" className="relative min-h-screen w-full bg-portfolio-black text-white py-20 px-6">
            <div className="container mx-auto">

                {/* PARTE SUPERIORE: Immagine e Parametri Fisici */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center mb-20">
                    <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative">
                        <div className="relative h-full w-full overflow-hidden">
                            <img
                                src="/assets/images/Letizia-Giannoccaro-corpo-intero.jpg"
                                alt="Letizia Giannoccaro foto a corpo intero"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-5xl md:text-7xl font-serif mb-8 italic">Info &<br />Bio</h2>
                        <div className="h-1 w-20 bg-white mb-12"></div>

                        <div className="grid grid-cols-1 border-t border-white/20">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex justify-between items-center py-5 border-b border-white/20">
                                    <span className="text-gray-400 uppercase tracking-widest text-xs font-sans">{stat.label}</span>
                                    <span className="text-2xl font-serif">{stat.value}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="/assets/download/Letizia-Giannoccaro-CV.pdf"
                            download="Letizia-Giannoccaro-CV.pdf"
                            className="mt-10 inline-flex items-center gap-3 px-10 py-4 border border-white hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm font-bold"
                        >
                            <Download size={18} /> Scarica CV
                        </a>
                    </div>
                </div>

                {/* PARTE CENTRALE: Highlights e Bio Estesa */}
                <div className="flex flex-col md:flex-row gap-16 border-t border-white/10 pt-16">

                    {/* COLONNA SINISTRA: Highlights */}
                    <div className="w-full md:w-1/3 md:border-r border-white/10 md:pr-12">
                        <h3 className="text-xl font-serif mb-10 uppercase tracking-widest text-gray-400">Highlights</h3>
                        <div className="space-y-10">
                            {highlights.map((item, i) => (
                                <div key={i} className="group">
                                    <div className="flex items-center gap-4 mb-2 text-white/80 group-hover:text-white transition-colors">
                                        {item.icon}
                                        <h4 className="font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed ml-9">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COLONNA DESTRA: Bio Narrativa */}
                    <div className="w-full md:w-2/3">
                        <h3 className="text-xl font-serif mb-10 uppercase tracking-widest text-gray-400">La mia storia</h3>
                        <div className="space-y-6 text-gray-300 font-sans leading-relaxed text-lg">
                            <p className="font-serif text-2xl text-white italic mb-8">
                                "L’Anima della Scena tra Passione e Determinazione"
                            </p>
                            <p>
                                Nata sotto il sole di <strong>Bari</strong> nel 1999, Letizia ha coltivato fin da bambina un legame indissolubile con il mondo dell’arte. Con una borsa piena di sogni e una passione gigantesca, ha scelto di trasferirsi a <strong>Roma</strong> per trasformare la sua vocazione in una carriera d’eccellenza.
                            </p>
                            <p>
                                La sua formazione è un mosaico di studio e dedizione: dalla Laurea Triennale in <strong>Arti e Scienze dello Spettacolo (DAMS)</strong> al percorso magistrale presso <strong>La Sapienza</strong>, Letizia non ha mai smesso di perfezionarsi. Attrice, mima e ballerina, ha studiato con grandi maestri come <strong>Lina Sastri</strong> e ha affinato le sue doti fisiche e vocali attraverso workshop intensivi e laboratori coreografici internazionali.
                            </p>
                            <p>
                                La sua carriera brilla per la presenza nei teatri più prestigiosi d'Italia. Dall’<strong>Arena di Verona</strong>, dove è stata protagonista in opere monumentali come <em>Carmen</em>, <em>Aida</em> e <em>La Bohème</em>, fino al <strong>Teatro dell’Opera di Roma</strong> e al <strong>Petruzzelli di Bari</strong> La sua versatilità l'ha portata a collaborare con registi del calibro di <strong>Franco Zeffirelli</strong>, <strong>Stefano Poda</strong>, <strong>Mario Martone</strong> e <strong>Chiara Muti</strong>.
                            </p>
                            <p>
                                Letizia non è solo tecnica, è pura energia. Volenterosa e instancabile, vive lo spettacolo a 360°: dalla recitazione per il cinema e la TV alla speaker radiofonica. Socievole e piena di vita, porta in ogni progetto la sua capacità di comunicare e la sua instancabile voglia di fare.
                            </p>
                        </div>
                    </div>
                </div>

                {/* PARTE INFERIORE: Video di Presentazione */}

                <div className="mt-24 border-t border-white/10 pt-16 mb-10">
                    <h3 className="text-xl font-serif mb-10 uppercase tracking-widest text-gray-400 text-center">
                        Video di Presentazione
                    </h3>

                    <div className="relative max-w-4xl mx-auto group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                        <div className="relative aspect-video bg-black overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                            <video
                                controls
                                preload="auto"
                                className="w-full h-full object-cover"
                                // PERCORSO CORRETTO: rimosso "/public/assets/video" ripetuto
                                poster="/assets/video/letizia-giannoccaro-cover.jpg">

                                <track
                                    kind="captions"
                                    src="/assets/video/sottotitoli.vtt"
                                    srcLang="it"
                                    label="Italiano"
                                    default
                                />
                                {/* PERCORSO CORRETTO: rimosso "/public/assets/video" ripetuto */}
                                <source src="/assets/video/letizia-giannoccaro-video-presentazione.mp4" type="video/mp4" />
                                Il tuo browser non supporta il tag video.
                            </video>
                        </div>

                        <p className="mt-6 text-center text-gray-500 text-sm italic tracking-widest uppercase">
                            Filmato & Presentazione Artistica
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};