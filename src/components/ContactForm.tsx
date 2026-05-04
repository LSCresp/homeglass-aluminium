"use client";

import { FadeIn } from "./FadeIn";

export function ContactForm() {
    const WHATSAPP_NUMBER = 5514991619177; // Coloque seu número aqui, ex: 5511999999999

    return (
        <>
            <section id="contato" className="py-32 px-6 bg-homeglass-dark border-t border-white/5 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-homeglass-silver/5 blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                    <FadeIn>
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-8 shadow-lg">
                            <svg className="w-10 h-10 text-homeglass-silver" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                            </svg>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">Pronto para transformar seu projeto?</h2>
                        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                            Entendemos que cada imóvel possui um DNA único. Fale com um de nossos especialistas agora mesmo e receba um orçamento exclusivo.
                        </p>
                        
                        <a 
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Estava navegando no site da HomeGlass e gostaria de solicitar um orçamento para o meu projeto.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#20BD5A] hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(37,211,102,0.3)]"
                        >
                            Falar no WhatsApp
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                        
                        <p className="text-sm text-white/40 mt-8 font-medium">Atendimento rápido e focado no seu padrão de exigência.</p>
                    </FadeIn>
                </div>
            </section>

            <footer className="relative z-20 bg-gradient-to-t from-homeglass-black/90 to-homeglass-dark/70 backdrop-blur-2xl pt-10 pb-6 shadow-[0_-12px_40px_-10px_rgba(0,0,0,0.2)] overflow-hidden text-center text-sm text-homeglass-gray border-t border-white/5">
                <div className="absolute inset-0 bg-homeglass-black/30 z-0 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute inset-x-0 top-0 h-[10px] bg-gradient-to-b from-white/10 to-transparent opacity-80 z-0 pointer-events-none"></div>

                <div className="container mx-auto px-6 flex flex-col items-center justify-center relative z-10 w-full pt-4">
                    <p className="text-xs tracking-wider text-white/50 font-medium">© {new Date().getFullYear()} HomeGlass Aluminium. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}
