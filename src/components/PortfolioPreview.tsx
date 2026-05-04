"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

export function PortfolioPreview() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const portfolioImages = [
        { src: "/portfolio/1.jpeg", alt: "Fachada de Vidro" },
        { src: "/portfolio/2.jpeg", alt: "Esquadria Premium" },
        { src: "/portfolio/3.jpeg", alt: "Pele de Vidro Comercial" },
        { src: "/portfolio/4.jpeg", alt: "Box em Vidro Temperado" },
    ];

    return (
        <section id="portfolio" className="py-32 px-6 bg-homeglass-black border-t border-white/5 relative">
            <div className="container mx-auto px-6 max-w-5xl text-center mb-16">
                <FadeIn>
                    <span className="text-homeglass-silver font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Portfólio de Obras</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Nossos Serviços Realizados</h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                        Conheça o padrão de qualidade HomeGlass em diferentes aplicações arquitetônicas de alto padrão.
                    </p>
                </FadeIn>
            </div>

            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioImages.map((image, idx) => (
                        <FadeIn key={idx} delay={idx * 150} direction="up" className="group">
                            <div 
                                className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-lg cursor-pointer"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                                    <span className="text-white border border-white/30 px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                                        Ampliar
                                    </span>
                                </div>
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={600} className="mt-16 text-center">
                    <a 
                        href="/portfolio" 
                        className="inline-flex items-center gap-3 bg-homeglass-dark border border-white/20 text-white px-10 py-5 rounded-full font-bold tracking-[0.05em] uppercase hover:bg-white/10 hover:border-homeglass-silver transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
                    >
                        Ver Galeria Completa
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </FadeIn>
            </div>

            {/* Modal de Imagem Ampliada */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-black/50 rounded-full"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img 
                        src={selectedImage} 
                        className="max-w-full max-h-full rounded-lg object-contain shadow-2xl" 
                        alt="Imagem Ampliada" 
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
