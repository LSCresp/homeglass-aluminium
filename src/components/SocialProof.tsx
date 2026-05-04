"use client";

import { Star } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function SocialProof() {
    return (
        <section className="py-32 px-6 bg-[#FAFAFA] border-t border-[rgba(18,18,18,.05)]">
            <div className="container mx-auto text-center">
                <FadeIn>
                    <span className="text-homeglass-silver font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Nosso Diferencial</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-20 text-[#121212]">Onde a arquitetura encontra a precisão</h2>
                </FadeIn>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { 
                            title: "Limpeza Visual", 
                            metric: "Vãos Livres Imponentes", 
                            desc: "Maximizamos a transparência e a entrada de luz natural. Trabalhamos com perfis extremamente finos que suportam grandes folhas de vidro, eliminando barreiras visuais e conectando os ambientes."
                        },
                        { 
                            title: "Desempenho Térmico e Acústico", 
                            metric: "Conforto e Eficiência", 
                            desc: "Vedação absoluta com uso de vidros insulados e laminados acústicos. Protegemos seu lar dos ruídos externos e controlamos o calor, garantindo um clima sempre agradável e economia de energia."
                        },
                        { 
                            title: "Segurança e Durabilidade", 
                            metric: "Robustez em Cada Detalhe", 
                            desc: "Utilizamos apenas as ligas metálicas mais nobres e fechos de alta segurança. Um sistema imbatível contra intempéries, estruturado para durar décadas com o mínimo de manutenção."
                        }
                    ].map((item, i) => (
                        <div key={`proof-${i}`} className="h-full">
                            <FadeIn delay={i * 150} direction="up" className="h-full">
                                <div className="bg-[#FDFBF7] p-10 border border-[rgba(18,18,18,.04)] text-left rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] h-full flex flex-col hover:-translate-y-2 transition-transform duration-500">
                                    <h3 className="text-xl font-bold text-[#121212] mb-2">{item.title}</h3>
                                    <div className="text-homeglass-silver font-serif font-medium mb-6 text-sm tracking-wide">{item.metric}</div>
                                    <p className="text-[#121212]/70 leading-relaxed text-[15px]">{item.desc}</p>
                                </div>
                            </FadeIn>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
