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

function linkWhatsapp(numero: string) {
    return `https://wa.me/${numero}?text=${encodeURIComponent(CONTATO.whatsappMensagem)}`;
}

/**
 * Quem atende neste cartão. Sem isso, o cartão é o institucional e
 * usa o telefone da empresa; com isso, é o cartão de um representante.
 */
export type PessoaCartao = {
    slug: string;
    nome: string;
    cargo?: string;
    telefone: string;
    whatsapp: string;
};

/* ------------------------------------------------------------------
 * Os cinco contatos, na ordem em que aparecem no arco: da ponta
 * esquerda, descendo até o centro, e subindo para a ponta direita.
 *
 * x é percentual da largura do arco e y é o centro do botão em pixels.
 * Os valores saem de uma elipse de semieixos 40.4% e 130px centrada em
 * (50%, 0), nos angulos 165, 127.5, 90, 52.5 e 15 graus. A elipse é mais
 * larga que um círculo de proposito: em telas de 320px os dois botões
 * centrais encostariam um no outro.
 * ------------------------------------------------------------------ */
type Contato = {
    id: string;
    rotulo: string;
    href: string;
    externo?: boolean;
    x: string;
    y: number;
    destaque?: boolean;
    hover: string;
    icone: React.ReactNode;
};

function montarContatos(telefone: string, whatsapp: string, quem: string): Contato[] {
    return [
    {
        id: "telefone",
        rotulo: `Ligar para ${quem}`,
        href: `tel:+${telefone}`,
        x: "11%",
        y: 34,
        hover: "group-hover:border-homeglass-silver/70 group-hover:bg-homeglass-silver/20",
        icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-[26px] w-[26px]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
        ),
    },
    {
        id: "instagram",
        rotulo: "Instagram da HomeGlass",
        href: `https://instagram.com/${CONTATO.instagram}`,
        externo: true,
        x: "25.4%",
        y: 103,
        hover: "group-hover:border-[#E1306C]/70 group-hover:bg-[#E1306C]/25",
        icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-[26px] w-[26px]">
                <rect x="2" y="2" width="20" height="20" rx="5.5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        id: "whatsapp",
        rotulo: `Falar no WhatsApp com ${quem}`,
        href: linkWhatsapp(whatsapp),
        externo: true,
        x: "50%",
        y: 130,
        destaque: true,
        hover: "group-hover:border-[#25D366] group-hover:bg-[#25D366]/40",
        icone: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
        ),
    },
    {
        id: "email",
        rotulo: "Enviar e-mail",
        href: `mailto:${CONTATO.email}?subject=${encodeURIComponent("Orçamento - HomeGlass Aluminium")}`,
        x: "74.6%",
        y: 103,
        hover: "group-hover:border-homeglass-silverLight/70 group-hover:bg-homeglass-silverLight/20",
        icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-[26px] w-[26px]">
                <rect x="2" y="4.5" width="20" height="15" rx="2.5" />
                <path d="m3 7 8.1 5.6a1.6 1.6 0 0 0 1.8 0L21 7" />
            </svg>
        ),
    },
    {
        id: "site",
        rotulo: "Acessar o site",
        href: CONTATO.site,
        x: "89%",
        y: 34,
        hover: "group-hover:border-homeglass-silver/70 group-hover:bg-homeglass-silver/20",
        icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-[26px] w-[26px]">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
            </svg>
        ),
    },
    ];
}

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

export function CartaoDigital({ pessoa }: { pessoa?: PessoaCartao }) {
    const telefone = pessoa?.telefone ?? CONTATO.telefone;
    const whatsapp = pessoa?.whatsapp ?? CONTATO.whatsapp;
    const contatos = montarContatos(telefone, whatsapp, pessoa?.nome ?? CONTATO.empresa);

    return (
        <main className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-homeglass-black text-white">
            {/* ---------------- Fundo ---------------- */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                {/* Foto do site, bem apagada, só para dar profundidade */}
                <Image src="/hero-image.png" alt="" fill priority className="object-cover opacity-[0.22]" />

                {/* Escurecimento geral */}
                <div className="absolute inset-0 bg-gradient-to-b from-homeglass-black/80 via-homeglass-dark/90 to-homeglass-black" />

                {/* Malha de esquadria: montantes verticais e travessas horizontais */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(90deg, rgba(192,197,206,0.075) 0px, rgba(192,197,206,0.075) 1px, transparent 1px, transparent 76px), repeating-linear-gradient(0deg, rgba(192,197,206,0.045) 0px, rgba(192,197,206,0.045) 1px, transparent 1px, transparent 124px)",
                    }}
                />

                {/* Reflexo diagonal, como luz batendo no vidro */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(112deg, transparent 26%, rgba(226,232,240,0.10) 42%, rgba(226,232,240,0.03) 49%, transparent 60%)",
                    }}
                />

                {/* Brilho prata atrás do logo */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(62% 38% at 50% 10%, rgba(192,197,206,0.22) 0%, transparent 70%)",
                    }}
                />

                {/* Vinheta, para fechar as bordas */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(118% 78% at 50% 44%, transparent 42%, rgba(5,11,20,0.92) 100%)",
                    }}
                />
            </div>

            {/* ---------------- Conteúdo ---------------- */}
            <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center px-6 py-4 text-center sm:my-10 sm:rounded-[36px] sm:border sm:border-white/10 sm:bg-white/[0.04] sm:py-9 sm:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] sm:backdrop-blur-xl">
                {/* Logo */}
                <Aparecer>
                    <div className="relative h-[100px] w-[100px] rounded-full p-[2px] bg-silver-gradient shadow-[0_18px_50px_-12px_rgba(0,0,0,0.95)]">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-homeglass-black/90">
                            <Image
                                src="/logo-icon.png"
                                alt={`Logotipo ${CONTATO.empresa}`}
                                width={200}
                                height={200}
                                priority
                                className="h-[70px] w-[70px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                            />
                        </div>
                    </div>
                </Aparecer>

                {/* Nome da empresa */}
                <Aparecer delay={120} className="mt-5">
                    <h1 className="font-serif text-[28px] font-bold leading-tight tracking-wide text-white sm:text-4xl">
                        HomeGlass
                        <span className="block bg-silver-gradient bg-clip-text text-transparent">
                            Aluminium
                        </span>
                    </h1>
                    {/* No cartão do representante, quem ele é ocupa o lugar do slogan */}
                    {pessoa ? (
                        <div className="mt-3 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1 backdrop-blur-md">
                            <span className="text-[13px] font-semibold tracking-wide text-white">
                                {pessoa.nome}
                            </span>
                            {pessoa.cargo && (
                                <>
                                    <span className="text-white/25">|</span>
                                    <span className="text-[10px] uppercase tracking-[0.14em] text-homeglass-silver/80">
                                        {pessoa.cargo}
                                    </span>
                                </>
                            )}
                        </div>
                    ) : (
                        <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.32em] text-homeglass-silver/80">
                            {CONTATO.slogan}
                        </p>
                    )}
                </Aparecer>

                {/* Divisor */}
                <Aparecer delay={200} className="my-2.5 w-full">
                    <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-homeglass-silver/50 to-transparent" />
                </Aparecer>

                {/* Atuação */}
                <Aparecer delay={260} className="w-full">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
                        Atuação
                    </p>
                    <ul className="mt-2 space-y-0.5">
                        {ATUACAO.map((item) => (
                            <li key={item} className="text-[13.5px] leading-relaxed text-white/85">
                                {item}
                            </li>
                        ))}
                    </ul>
                </Aparecer>

                {/* Arco de contatos */}
                <Aparecer delay={340} className="mt-5 w-full">
                    <div className="relative mx-auto h-[172px] w-full max-w-[340px]">
                        {/* Linha curva que amarra os ícones */}
                        <svg
                            viewBox="0 0 340 172"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                            className="absolute inset-0 h-full w-full"
                        >
                            <defs>
                                <linearGradient id="arcoPrata" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#C0C5CE" stopOpacity="0" />
                                    <stop offset="28%" stopColor="#E2E8F0" stopOpacity="0.55" />
                                    <stop offset="72%" stopColor="#E2E8F0" stopOpacity="0.55" />
                                    <stop offset="100%" stopColor="#C0C5CE" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 37.4 33.6 A 137.4 130 0 0 0 302.6 33.6"
                                fill="none"
                                stroke="url(#arcoPrata)"
                                strokeWidth="1.25"
                            />
                        </svg>

                        {contatos.map((contato) => (
                            <a
                                key={contato.id}
                                href={contato.href}
                                target={contato.externo ? "_blank" : undefined}
                                rel={contato.externo ? "noopener noreferrer" : undefined}
                                aria-label={contato.rotulo}
                                title={contato.rotulo}
                                style={{ left: contato.x, top: `${contato.y}px` }}
                                className="group absolute -translate-x-1/2 -translate-y-1/2 outline-none"
                            >
                                <span
                                    className={`flex items-center justify-center rounded-full border text-homeglass-silverLight backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:text-white group-focus-visible:ring-2 group-focus-visible:ring-homeglass-silver group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-homeglass-black ${contato.hover} ${contato.destaque
                                            ? "h-[66px] w-[66px] sm:h-[72px] sm:w-[72px] border-[#25D366]/60 bg-[#25D366]/25 text-white shadow-[0_12px_34px_-8px_rgba(37,211,102,0.55),inset_0_1px_0_rgba(255,255,255,0.25)]"
                                            : "h-[58px] w-[58px] sm:h-16 sm:w-16 border-white/25 bg-white/[0.08] shadow-[0_10px_28px_-10px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.18)]"
                                        }`}
                                >
                                    {contato.icone}
                                </span>
                            </a>
                        ))}
                    </div>
                </Aparecer>

                {/* Rodapé */}
                <Aparecer delay={420} className="w-full">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                        Toque nos ícones
                    </p>
                    <p className="mt-2 text-[11px] tracking-wide text-white/40">
                        {formatarTelefone(telefone)}
                        <span className="mx-2 text-white/20">|</span>
                        <a
                            href={pessoa ? `/cartao/${pessoa.slug}/contato.vcf` : "/homeglass-aluminium.vcf"}
                            download
                            className="underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
                        >
                            Salvar contato
                        </a>
                    </p>
                </Aparecer>
            </div>
        </main>
    );
}
