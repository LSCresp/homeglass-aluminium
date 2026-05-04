"use client";

import { useState } from "react";
import portfolioDataRaw from "@/data/portfolio.json";

interface PortfolioItem {
    src: string;
    category: string;
}

const portfolioData = portfolioDataRaw as PortfolioItem[];

export function PortfolioGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="w-full">
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {portfolioData.length === 0 ? (
                    <div className="col-span-full text-center py-20 text-white/50">
                        <p>Nenhuma imagem encontrada no portfólio.</p>
                    </div>
                ) : (
                    portfolioData.map((image, idx) => (
                        <div 
                            key={idx} 
                            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[4/3] shadow-lg cursor-pointer"
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <img 
                                src={image.src} 
                                alt={`Obra HomeGlass ${idx + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                                <span className="text-white border border-white/30 px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase backdrop-blur-sm shadow-xl">
                                    Ampliar
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>
            
            <div className="mt-16 text-center text-white/50 text-sm font-medium">
                Exibindo {portfolioData.length} projetos concluídos
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
        </div>
    );
}
