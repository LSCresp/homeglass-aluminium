import { CheckCircle } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Packages() {
    return (
        <section id="pacotes" className="py-32 px-6 bg-[#121212] border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_70%)] opacity-60"></div>
            <div className="absolute inset-0 bg-[url('/header-bg.png')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>

            <div className="container mx-auto relative z-10">
                <FadeIn>
                    <span className="text-homeglass-silver font-bold tracking-[0.2em] text-xs uppercase mb-4 block text-center">Escopo Sob Medida</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-6 text-white">Níveis de Intervenção</h2>
                    <p className="text-center text-white/60 max-w-3xl mx-auto mb-20 text-sm md:text-base leading-relaxed">
                        A HomeGlass não comercializa esquadrias padronizadas. Cada quadro abaixo representa um 
                        <strong> perfil referencial de projeto</strong> para balizar as expectativas de sofisticação 
                        e desempenho térmico e acústico.
                    </p>
                </FadeIn>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

                    <FadeIn delay={100} direction="up" className="p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md rounded-2xl shadow-sm h-full flex flex-col transition-colors duration-500">
                        <div className="mb-auto">
                            <h3 className="text-2xl font-serif font-bold text-white mb-2">Linha Standard</h3>
                            <p className="text-xs text-white/50 mb-8 uppercase tracking-widest">Qualidade Essencial</p>
                            <ul className="space-y-5 mb-10">
                                {["Perfis de alumínio linha 25", "Vidros incolores temperados", "Vedação dupla", "Fechos padronizados"].map((i, k) => (
                                    <li key={k} className="flex items-start gap-4 text-sm text-[#F6F2EA]/80 leading-relaxed">
                                        <CheckCircle className="w-5 h-5 text-homeglass-silver shrink-0 mt-0.5" />
                                        <span>{i}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-auto pt-6 border-t border-white/5 w-full text-center">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40">Comece com calma</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200} direction="up" className="p-10 border border-homeglass-silver/50 bg-gradient-to-b from-[#1A1A1A] to-[#121212] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative transform md:-translate-y-8 flex flex-col h-[105%]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#94A3B8] via-[#E2E8F0] to-[#64748B] text-[#121212] px-6 py-1.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-[0_4px_14px_rgba(192,197,206,0.4)]">
                            Arquitetura Integrada
                        </div>
                        <div className="mb-auto">
                            <h3 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#94A3B8] via-[#E2E8F0] to-[#64748B] mb-2">Linha Premium</h3>
                            <p className="text-xs text-[#F6F2EA]/60 mb-8 uppercase tracking-widest">O equilíbrio perfeito</p>
                            <ul className="space-y-5 mb-10">
                                {["Perfis de alumínio linha 32 ou 42", "Vidros laminados acústicos", "Vedação com borrachas EPDM", "Fechos multiponto e automáticos"].map((i, k) => (
                                    <li key={k} className="flex items-start gap-4 text-sm text-white font-medium leading-relaxed">
                                        <CheckCircle className="w-5 h-5 text-homeglass-silver shrink-0 mt-0.5" />
                                        <span>{i}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-auto pt-6 border-t border-[#C0C5CE]/20 w-full text-center">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#C0C5CE]/90 text-transparent bg-clip-text bg-gradient-to-r from-[#94A3B8] to-[#E2E8F0]">Melhor Custo-Benefício</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={300} direction="up" className="p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md rounded-2xl shadow-sm h-full flex flex-col transition-colors duration-500">
                        <div className="mb-auto">
                            <h3 className="text-2xl font-serif font-bold text-white mb-2">Linha Minimalista</h3>
                            <p className="text-xs text-white/50 mb-8 uppercase tracking-widest">A sofisticação máxima</p>
                            <ul className="space-y-5 mb-10">
                                {["Perfis embutidos e grandes vãos", "Vidros insulados de controle solar", "Deslizamento suave em trilhos inox", "Escoamento invisível", "Pele de vidro"].map((i, k) => (
                                    <li key={k} className="flex items-start gap-4 text-sm text-[#F6F2EA]/80 leading-relaxed">
                                        <CheckCircle className="w-5 h-5 text-homeglass-silver shrink-0 mt-0.5" />
                                        <span>{i}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-auto pt-6 border-t border-white/5 w-full text-center">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40">O máximo em sofisticação</span>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
