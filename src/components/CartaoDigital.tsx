"use client";

import Image from "next/image";

/* ------------------------------------------------------------------
 * DADOS DE CONTATO — edite aqui e todo o cartão se atualiza.
 * ------------------------------------------------------------------ */
export const CONTATO = {
    empresa: "HomeGlass Aluminium",
    slogan: "Projetos Personalizados",
    telefone: "5514991619177",
    whatsapp: "5514991619177",
    whatsappMensagem:
        "Olá! Recebi o cartão digital da HomeGlass e gostaria de solicitar um orçamento para o meu projeto.",
    instagram: "homeglassaluminium",
    email: "atendimento.homeglass@gmail.com",
    site: "https://homeglassaluminium.netlify.app",
};

const ATUACAO = [
    "Esquadrias de Alumínio Premium",
    "Fachadas Pele de Vidro",
    "Guarda-Corpos e Brises",
    "Isolamento Acústico e Térmico",
];

/** Formata 5514991619177 como +55 (14) 99161-9177 */
function formatarTelefone(numero: string) {
    const ddd = numero.slice(2, 4);
    const parte1 = numero.slice(4, numero.length - 4);
    const parte2 = numero.slice(-4);
    return `+55 (${ddd}) ${parte1}-${parte2}`;
}

const linkWhatsapp = `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(
    CONTATO.whatsappMensagem
)}`;

type Contato = {
    id: string;
    rotulo: string;
    href: string;
    externo?: boolean;
    corHover: string;
    icone: React.ReactNode;
};

const CONTATOS: Contato[] = [
    {
        id: "telefone",
        rotulo: "Ligar",
        href: `tel:+${CONTATO.telefone}`,
        corHover: "group-hover:bg-homeglass-silver/25 group-hover:border-homeglass-silver/60",
        icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
        ),
    },
    {
        id: "whatsapp",
        rotulo: "WhatsApp",
        href: linkWhatsapp,
        externo: true,
        corHover: "group-hover:bg-[#25D366]/25 group-hover:border-[#25D366]/70",
        icone: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
        ),
    },
    {
        id: "site",
        rotulo: "Site",
        href: CONTATO.site,
        corHover: "group-hover:bg-homeglass-silver/25 group-hover:border-homeglass-silver/70",
        icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
            </svg>
        ),
    },
    {
        id: "instagram",
        rotulo: "Instagram",
        href: `https://instagram.com/${CONTATO.instagram}`,
        externo: true,
        corHover: "group-hover:bg-[#E1306C]/25 group-hover:border-[#E1306C]/70",
        icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <rect x="2" y="2" width="20" height="20" rx="5.5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        id: "email",
        rotulo: "E-mail",
        href: `mailto:${CONTATO.email}?subject=${encodeURIComponent("Orçamento - HomeGlass Aluminium")}`,
        corHover: "group-hover:bg-homeglass-silverLight/25 group-hover:border-homeglass-silverLight/70",
        icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <rect x="2" y="4.5" width="20" height="15" rx="2.5" />
                <path d="m3 7 8.1 5.6a1.6 1.6 0 0 0 1.8 0L21 7" />
            </svg>
        ),
    },
];

/** Entrada suave em CSS puro — sempre visível, mesmo sem JS ou observer. */
function Aparecer({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <div className={`cartao-aparecer ${className}`} style={{ animationDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}

export function CartaoDigital() {
    async function compartilhar() {
        const dados = {
            title: `${CONTATO.empresa} — Cartão Digital`,
            text: `${CONTATO.empresa} | ${CONTATO.slogan}`,
            url: `${CONTATO.site}/cartao`,
        };

        if (typeof navigator !== "undefined" && navigator.share) {
            try {
                await navigator.share(dados);
                return;
            } catch {
                /* usuário cancelou o compartilhamento */
            }
        }

        try {
            await navigator.clipboard.writeText(dados.url);
            alert("Link do cartão copiado!");
        } catch {
            /* navegador sem suporte à área de transferência */
        }
    }

    return (
        <main className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-homeglass-black text-white">
            {/* Fundo: imagem do site + brilho prata + vinheta */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-image.png"
                    alt=""
                    fill
                    priority
                    aria-hidden="true"
                    className="object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-homeglass-black/70 via-homeglass-dark/85 to-homeglass-black" />
                <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[130%] aspect-square bg-homeglass-silver/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-md flex-col items-center px-6 py-7 text-center sm:min-h-0 sm:my-10 sm:rounded-[36px] sm:border sm:border-white/10 sm:bg-white/[0.04] sm:py-10 sm:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] sm:backdrop-blur-xl">
                {/* Logo */}
                <Aparecer>
                    <div className="relative h-[124px] w-[124px] rounded-full p-[2px] bg-silver-gradient shadow-[0_18px_50px_-12px_rgba(0,0,0,0.9)]">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-homeglass-black/90 backdrop-blur-sm">
                            <Image
                                src="/logo-icon.png"
                                alt={`Logotipo ${CONTATO.empresa}`}
                                width={200}
                                height={200}
                                priority
                                className="h-[84px] w-[84px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                            />
                        </div>
                    </div>
                </Aparecer>

                {/* Nome da empresa */}
                <Aparecer delay={120} className="mt-5">
                    <h1 className="font-serif text-3xl font-bold leading-tight tracking-wide text-white sm:text-4xl">
                        HomeGlass
                        <span className="block bg-silver-gradient bg-clip-text text-transparent">
                            Aluminium
                        </span>
                    </h1>
                    <p className="mt-2.5 text-[11px] font-medium uppercase tracking-[0.32em] text-homeglass-silver/80">
                        {CONTATO.slogan}
                    </p>
                </Aparecer>

                {/* Divisor */}
                <Aparecer delay={200} className="my-5 w-full">
                    <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-homeglass-silver/50 to-transparent" />
                </Aparecer>

                {/* Atuação */}
                <Aparecer delay={260} className="w-full">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45">
                        Atuação
                    </p>
                    <ul className="mt-3 space-y-1">
                        {ATUACAO.map((item) => (
                            <li key={item} className="text-[14px] leading-relaxed text-white/85">
                                {item}
                            </li>
                        ))}
                    </ul>
                </Aparecer>

                {/* Ícones de contato */}
                <Aparecer delay={340} className="mt-7 w-full">
                    <div className="flex flex-wrap items-start justify-center gap-x-5 gap-y-5">
                        {CONTATOS.map((contato) => (
                            <a
                                key={contato.id}
                                href={contato.href}
                                target={contato.externo ? "_blank" : undefined}
                                rel={contato.externo ? "noopener noreferrer" : undefined}
                                aria-label={contato.rotulo}
                                className="group flex w-[74px] flex-col items-center gap-2 outline-none"
                            >
                                <span
                                    className={`flex h-[62px] w-[62px] items-center justify-center rounded-full border border-white/20 bg-white/[0.07] text-homeglass-silverLight backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:text-white group-focus-visible:ring-2 group-focus-visible:ring-homeglass-silver shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)] ${contato.corHover}`}
                                >
                                    {contato.icone}
                                </span>
                                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/55 transition-colors group-hover:text-white/90">
                                    {contato.rotulo}
                                </span>
                            </a>
                        ))}
                    </div>
                </Aparecer>

                {/* Ações principais */}
                <Aparecer delay={420} className="mt-auto w-full pt-6">
                    <a
                        href={linkWhatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-bold text-white shadow-[0_10px_30px_rgba(37,211,102,0.28)] transition-all duration-300 hover:bg-[#20BD5A] hover:scale-[1.02]"
                    >
                        Solicitar Orçamento
                    </a>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                        <a
                            href={CONTATO.site}
                            className="flex items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/15"
                        >
                            Acessar o site
                        </a>
                        <a
                            href="/homeglass-aluminium.vcf"
                            download
                            className="flex items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white/15"
                        >
                            Salvar contato
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={compartilhar}
                        className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-homeglass-silver/70 transition-colors hover:text-white"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
                        </svg>
                        Compartilhar cartão
                    </button>

                    <p className="mt-3 text-[11px] tracking-wide text-white/35">
                        {formatarTelefone(CONTATO.telefone)} · © {new Date().getFullYear()} {CONTATO.empresa}
                    </p>
                </Aparecer>
            </div>
        </main>
    );
}
