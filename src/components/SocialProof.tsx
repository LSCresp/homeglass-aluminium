"use client";

import { Star } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function SocialProof() {
    return (
        <section className="py-32 px-6 bg-[#FAFAFA] border-t border-[rgba(18,18,18,.05)]">
            <div className="container mx-auto text-center">
                <FadeIn>
                    <span className="text-celere-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Reputação</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-20 text-[#121212]">O que dizem nossos clientes</h2>
                </FadeIn>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[1, 2, 3].map((item, i) => (
                        <div key={`container-${item}`} className="h-full">
                            <FadeIn delay={i * 150} direction="up" className="h-full">
                                <div className="bg-[#FDFBF7] p-10 border border-[rgba(18,18,18,.04)] text-left rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500">
                                    <div>
                                        <div className="flex text-celere-gold mb-6">
                                            <Star className="w-5 h-5 fill-current" />
                                            <Star className="w-5 h-5 fill-current" />
                                            <Star className="w-5 h-5 fill-current" />
                                            <Star className="w-5 h-5 fill-current" />
                                            <Star className="w-5 h-5 fill-current" />
                                        </div>
                                        <p className="text-[#121212]/70 italic leading-relaxed text-[15px]">"A infraestrutura que a Célere montou transcende a automação básica. É realmente outro nível de imersão e praticidade no dia a dia da casa."</p>
                                    </div>
                                    <div className="mt-8 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-celere-gold/20 flex items-center justify-center text-xs font-bold text-celere-gold">
                                            C{item}
                                        </div>
                                        <div className="font-bold text-sm text-[#121212]">Cliente Premium {item}</div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
