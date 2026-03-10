import { Shield, Wifi, Speaker, Lightbulb, Settings, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Services() {
    const solutions = [
        { icon: Lightbulb, title: "Iluminação", desc: "Dimerização precisa, cores adaptativas e criação de cenários estéticos para cada ocasião." },
        { icon: Speaker, title: "Som & Home Theater", desc: "Áudio invisível multizona de extrema fidelidade e acústica de cinema no seu living." },
        { icon: Shield, title: "Segurança Ativa", desc: "Biometria avançada, CFTV analítico e monitoramento remoto total." },
        { icon: Wifi, title: "Rede Premium", desc: "Infraestrutura Wi-Fi corporativa. Zero pontos cegos, estabilidade ininterrupta." },
        { icon: Settings, title: "Rotinas Inteligentes", desc: "Sua casa acorda, trabalha e descansa com você de forma 100% automatizada." },
        { icon: Zap, title: "Integrações", desc: "Controle ar-condicionado, cortinas, persianas e lareiras unificados no mesmo App." },
    ];

    return (
        <section id="solucoes" className="py-32 px-6 bg-[#FAFAFA] relative">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F6F2EA] to-transparent z-0"></div>
            <div className="container mx-auto relative z-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <span className="text-celere-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Ecosistema Célere</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#121212]">Experiências Imersivas</h2>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((item, i) => (
                        <FadeIn key={i} delay={i * 100}>
                            <div className="bg-[#FDFBF7] p-10 border border-[rgba(18,18,18,.04)] hover:border-celere-gold/30 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.08)] transition-all duration-500 group relative overflow-hidden rounded-2xl h-full flex flex-col justify-between">
                                <div className="absolute -top-4 -right-4 text-9xl font-serif font-bold text-[#FAFAFA] group-hover:text-celere-gold/5 transition-colors duration-500 select-none z-0">
                                    0{i + 1}
                                </div>

                                <div className="relative z-10">
                                    <item.icon className="w-10 h-10 text-celere-gold mb-8 stroke-[1.5] group-hover:scale-110 transition-transform duration-500" />
                                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-[#121212]">{item.title}</h3>
                                    <p className="text-[#121212]/70 leading-relaxed text-sm md:text-base">{item.desc}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
