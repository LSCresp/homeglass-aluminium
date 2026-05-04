import { Maximize, LayoutGrid, Wind, Sun, Layers, ShieldCheck } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Services() {
    const solutions = [
        { icon: Maximize, title: "Esquadrias Premium", desc: "Perfis extremamente delgados que proporcionam visuais contínuos e integração perfeita entre os ambientes internos e externos." },
        { icon: LayoutGrid, title: "Fachadas Pele de Vidro", desc: "Sistemas estruturais de fixação oculta que garantem fachadas imponentes, eficientes e de altíssimo valor arquitetônico." },
        { icon: Wind, title: "Isolamento Acústico", desc: "Linhas premium com vidros insulados e múltiplas barreiras de vedação para bloquear os ruídos da cidade." },
        { icon: Sun, title: "Controle Térmico", desc: "Vidros de controle solar que reduzem drasticamente o calor, protegendo móveis e economizando energia com ar-condicionado." },
        { icon: Layers, title: "Brises e Revestimentos", desc: "Soluções estéticas em alumínio amadeirado ou anodizado que agregam volume e controlam a luminosidade." },
        { icon: ShieldCheck, title: "Guarda-Corpos", desc: "Sistemas embutidos e envidraçados que oferecem segurança inegociável sem comprometer a vista panorâmica." },
    ];

    return (
        <section id="solucoes" className="py-32 px-6 bg-[#FAFAFA] relative">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F6F2EA] to-transparent z-0"></div>
            <div className="container mx-auto relative z-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <span className="text-homeglass-silver font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Soluções Construtivas</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#121212]">A Engenharia do seu Projeto</h2>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((item, i) => (
                        <FadeIn key={i} delay={i * 100}>
                            <div className="bg-[#FDFBF7] p-10 border border-[rgba(18,18,18,.04)] hover:border-homeglass-silver/30 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(192,197,206,0.08)] transition-all duration-500 group relative overflow-hidden rounded-2xl h-full flex flex-col justify-between">
                                <div className="absolute -top-4 -right-4 text-9xl font-serif font-bold text-[#FAFAFA] group-hover:text-homeglass-silver/5 transition-colors duration-500 select-none z-0">
                                    0{i + 1}
                                </div>

                                <div className="relative z-10">
                                    <item.icon className="w-10 h-10 text-homeglass-silver mb-8 stroke-[1.5] group-hover:scale-110 transition-transform duration-500" />
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
