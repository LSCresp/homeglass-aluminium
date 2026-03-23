"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function ContactForm() {
    const [formData, setFormData] = useState({
        nome: "", cidade: "", situacao: "Projeto em andamento",
        prioridade: "Iluminação e Clima", whatsapp: "", observacoes: ""
    });

    const WHATSAPP_NUMBER = "SEU_NUMERO_AQUI";

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const useEndpoint = false;

        if (useEndpoint) {
            try {
                await fetch('/api/contato-endpoint', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                alert("Sua solicitação foi enviada com sucesso! Em breve entraremos em contato.");
            } catch (error) {
                alert("Erro ao enviar contato. Tente novamente mais tarde.");
            }
        } else {
            const msg = `Olá Célere! Gostaria de um orçamento para automação.%0A%0A*Nome:* ${formData.nome}%0A*Cidade:* ${formData.cidade}%0A*Fase do Imóvel:* ${formData.situacao}%0A*Interesse principal:* ${formData.prioridade}%0A*Telefone:* ${formData.whatsapp}%0A%0A*Observações:* ${formData.observacoes}`;
            window.open(`https://wa.me/${+5514997302774}?text=${msg}`, "_blank");
        }
    };

    const faqs = [
        { q: "A automação funciona caso a internet caia?", a: "Sim. Em nossa arquitetura com Home Assistant ou hubs Zigbee descentralizados, o processamento é estritamente local. Acionar luzes, cortinas e acessar recursos essenciais não depende de conexão externa." },
        { q: "Qual a diferença entre a Célere e comprar dispositivos smart comuns?", a: "Equipamentos de varejo (Wi-Fi) sobrecarregam o roteador e dependem de nuvens chinesas. A Célere utiliza protocolos de rede mesh como Zigbee, independentes de Wi-Fi, integrando tudo nativamente em painéis velozes." },
        { q: "É possível instalar a automação em um imóvel já pronto?", a: "Perfeitamente. Diferente da antiga automação centralizada que exigia longos conduítes para quadros elétricos gigantes, nossa engenharia descentralizada (wireless e mesh) permite retrofits limpos e sem quebra de alvenaria." },
        { q: "O sistema ficará obsoleto? Pode ser expandido futuramente?", a: "Nossos projetos são construídos sobre plataformas modulares modernas (como Home Assistant/Zigbee). É possível adicionar novos dispositivos e marcas no futuro sem perder o investimento inicial." },
        { q: "Como funciona a manutenção a longo prazo?", a: "Além das garantias, prestamos suporte remoto seguro da central local, corrigindo lógicas ou adicionando integrações de forma rápida, mantendo sua casa sempre atualizada." },
    ];

    return (
        <>
            <section className="py-32 px-6 container mx-auto border-t border-[rgba(18,18,18,.05)] bg-[#FAFAFA]">
                <FadeIn>
                    <span className="text-celere-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block text-center">Tire suas dúvidas</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-20 text-[#121212]">Perguntas Frequentes</h2>
                </FadeIn>
                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={`faq-${i}`} className="w-full">
                            <FadeIn delay={i * 100} direction="up" className="w-full block">
                                <details className="group bg-[#FDFBF7] border border-[rgba(18,18,18,.04)] rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-celere-gold/20 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between font-bold text-lg text-[#121212]">
                                        {faq.q}
                                        <div className="w-10 h-10 rounded-full bg-[#FAFAFA] flex items-center justify-center border border-celere-gold/10 group-open:bg-celere-gold/10 group-open:border-transparent transition-colors">
                                            <ChevronDown className="transition-transform group-open:rotate-180 text-celere-gold w-5 h-5" />
                                        </div>
                                    </summary>
                                    <p className="mt-6 text-[#121212]/70 leading-relaxed text-base border-t border-[rgba(18,18,18,.04)] pt-6">{faq.a}</p>
                                </details>
                            </FadeIn>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contato" className="py-32 px-6 bg-gradient-to-b from-[#FDFBF7] to-[#F6F2EA] border-t border-[rgba(18,18,18,.05)] relative pb-40">
                <div className="container mx-auto px-6 max-w-5xl text-center mb-24">
                    <FadeIn>
                        <span className="text-celere-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Engenharia Sob Medida</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[#121212]">Inicie seu projeto consultivo</h2>
                        <p className="text-[#121212]/70 text-lg max-w-2xl mx-auto leading-relaxed">
                            Agende uma imersão técnica. Entendemos que cada imóvel possui um DNA único que exige um projeto de infraestrutura tecnológica rigoroso e exclusivo.
                        </p>
                    </FadeIn>
                </div>

                <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
                    <FadeIn direction="right">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6 text-celere-black">Dê o primeiro passo.</h2>
                            <p className="text-celere-gray mb-8">
                                Preencha o formulário para entendermos o seu momento. Nossa equipe técnica entrará em contato para agendar uma consultoria sem compromisso.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-sm text-celere-gray">
                                    <div className="w-10 h-10 rounded-full bg-celere-dark flex items-center justify-center border border-celere-gold/20 shadow-sm text-lg text-celere-black">📐</div>
                                    Análise estrutural da planta e alinhamento do escopo
                                </div>
                                <div className="flex items-center gap-4 text-sm text-celere-gray">
                                    <div className="w-10 h-10 rounded-full bg-celere-dark flex items-center justify-center border border-celere-gold/20 shadow-sm text-lg text-celere-black">🤝</div>
                                    Reuniões agendadas conforme sua disponibilidade
                                </div>
                            </div>
                        </div>
                    </FadeIn>


                    <div className="relative">
                        <FadeIn direction="left" delay={200} className="w-full">
                            <div className="bg-[#FDFBF7] p-10 md:p-14 border border-[rgba(18,18,18,.04)] rounded-[2rem] relative shadow-[0_20px_60px_rgb(0,0,0,0.04)]">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-celere-gold opacity-5 blur-3xl rounded-full pointer-events-none"></div>
                                <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2 col-span-2 md:col-span-1">
                                            <label className="text-sm font-bold text-[#121212]">Nome completo</label>
                                            <input
                                                type="text"
                                                className="w-full bg-[#FAFAFA] border border-[rgba(18,18,18,.08)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-celere-gold/50 focus:bg-[#FDFBF7] transition-colors"
                                                placeholder="Seu nome"
                                                required
                                                onChange={e => setFormData({ ...formData, nome: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2 col-span-2 md:col-span-1">
                                            <label className="text-sm font-bold text-[#121212]">Telefone / WhatsApp</label>
                                            <input
                                                type="tel"
                                                className="w-full bg-[#FAFAFA] border border-[rgba(18,18,18,.08)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-celere-gold/50 focus:bg-[#FDFBF7] transition-colors"
                                                placeholder="(00) 00000-0000"
                                                required
                                                onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2 col-span-2 md:col-span-1">
                                            <label className="text-sm font-bold text-[#121212]">Sua Cidade e Estado</label>
                                            <input
                                                type="text"
                                                className="w-full bg-[#FAFAFA] border border-[rgba(18,18,18,.08)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-celere-gold/50 focus:bg-[#FDFBF7] transition-colors"
                                                placeholder="Ex: São Paulo - SP"
                                                required
                                                onChange={e => setFormData({ ...formData, cidade: e.target.value })}
                                            />
                                        </div>
                                        
                                        <div className="space-y-2 col-span-2 md:col-span-1">
                                            <label className="text-sm font-bold text-[#121212]">Situação do Imóvel</label>
                                            <select
                                                className="w-full bg-[#FAFAFA] border border-[rgba(18,18,18,.08)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-celere-gold/50 focus:bg-[#FDFBF7] transition-colors text-[#121212]/80"
                                                required
                                                onChange={e => setFormData({ ...formData, situacao: e.target.value })}
                                                defaultValue="Projeto em andamento"
                                            >
                                                <option value="Ainda em projeto">Ainda em projeto (Planta)</option>
                                                <option value="Obra em andamento">Em construção civil</option>
                                                <option value="Reforma">Entrando em reforma</option>
                                                <option value="Imóvel pronto">Imóvel pronto pra morar</option>
                                            </select>
                                        </div>
                                        
                                        <div className="space-y-2 col-span-2">
                                            <label className="text-sm font-bold text-[#121212]">O que você mais deseja automatizar?</label>
                                            <select
                                                className="w-full bg-[#FAFAFA] border border-[rgba(18,18,18,.08)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-celere-gold/50 focus:bg-[#FDFBF7] transition-colors text-[#121212]/80"
                                                required
                                                onChange={e => setFormData({ ...formData, prioridade: e.target.value })}
                                                defaultValue="Iluminação e Clima"
                                            >
                                                <option value="Iluminação e Clima">Iluminação e Ar-condicionado</option>
                                                <option value="Áudio e Home-Theater">Áudio integrado e Home-Theater</option>
                                                <option value="Segurança e Câmeras">Segurança (Câmeras e Fechaduras)</option>
                                                <option value="Cortinas e Persianas">Cortinas e Persianas automáticas</option>
                                                <option value="Casa Completa">A casa toda (Completo)</option>
                                                <option value="Ainda não sei">Gostaria de consultoria p/ decidir</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#121212]">Detalhes adicionais (Opcional)</label>
                                        <textarea
                                            className="w-full bg-[#FAFAFA] border border-[rgba(18,18,18,.08)] rounded-xl px-4 py-4 h-24 resize-none focus:outline-none focus:border-celere-gold/50 focus:bg-[#FDFBF7] transition-colors"
                                            placeholder="Conte-nos um pouco sobre o que você imagina para sua casa..."
                                            onChange={e => setFormData({ ...formData, observacoes: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-[#121212] py-4 rounded-xl text-white font-bold tracking-wide hover:bg-celere-gold transition-colors duration-300 shadow-[0_4px_14px_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] mt-4">
                                        Solicitar Orçamento
                                    </button>
                                    <p className="text-xs text-center text-[#121212]/50 mt-6 tracking-wide">Seus dados estão protegidos sob sigilo de projeto.</p>
                                </form>
                            </div>
                        </FadeIn>
                    </div>
                </div >
            </section >

            <footer className="relative -mt-16 z-20 bg-gradient-to-t from-[#F6F2EA]/90 to-[#FDFBF7]/70 backdrop-blur-2xl pt-10 pb-6 shadow-[0_-12px_40px_-10px_rgba(0,0,0,0.06)] overflow-hidden text-center text-sm text-celere-gray rounded-t-[3rem] border-t border-[#FDFBF7]/60">
                <div className="absolute inset-0 bg-[#FDFBF7]/30 z-0 pointer-events-none mix-blend-overlay"></div>
                {/* Linha de reflexo (highlight) que dá o volume do vidro na extremidade superior */}
                <div className="absolute inset-x-0 top-0 h-[10px] bg-gradient-to-b from-[#FDFBF7] to-transparent opacity-80 z-0 pointer-events-none"></div>

                <div className="container mx-auto px-6 flex flex-col items-center relative z-10 w-full pt-2">
                    <div className="bg-[#FDFBF7] px-3 py-1.5 rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] mb-3">
                        <img src="/logo.png" alt="Célere Engenharia de Automação" className="h-[4rem] md:h-[5rem] w-auto object-contain opacity-95 drop-shadow-sm filter contrast-[1.05]" />
                    </div>
                    <p className="text-xs tracking-wide">© {new Date().getFullYear()} Célere - Engenharia de Automação para Alto Padrão. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}
