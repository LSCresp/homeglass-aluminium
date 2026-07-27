/* ------------------------------------------------------------------
 * REPRESENTANTES DE VENDAS
 *
 * Cada item desta lista vira um cartão próprio em /cartao/<slug>,
 * com o telefone e o WhatsApp do vendedor. Tudo o que é da empresa
 * (logo, áreas de atuação, Instagram, site, e-mail) continua vindo de
 * CONTATO, em src/components/CartaoDigital.tsx — muda lá uma vez e
 * muda em todos os cartões.
 *
 * Para adicionar um vendedor, acrescente uma linha aqui e dê push.
 * Para tirar do ar, apague a linha: o link passa a dar 404.
 *
 * Regras do slug: só letras minúsculas, números e hífen, sem acento.
 * Ele é o endereço do cartão, então "João Silva" vira "joao-silva".
 *
 * Regras do telefone: só dígitos, começando com 55 (país) e o DDD.
 * Ex.: (14) 99161-9177  ->  "5514991619177"
 * ------------------------------------------------------------------ */

export type Representante = {
    slug: string;
    nome: string;
    cargo?: string;
    telefone: string;
    /** Só preencha se o WhatsApp for diferente do telefone de ligação. */
    whatsapp?: string;
};

export const REPRESENTANTES: Representante[] = [
    {
        slug: "alessandro",
        nome: "Alessandro",
        telefone: "5516981332656",
    },
    {
        slug: "marcelo",
        nome: "Marcelo",
        telefone: "5514997105500",
    },
    {
        // Mesmo número do "Fale Conosco" do site.
        slug: "ricardo",
        nome: "Ricardo",
        telefone: "5514991619177",
    },
];

export function buscarRepresentante(slug: string): Representante | undefined {
    return REPRESENTANTES.find((representante) => representante.slug === slug);
}

/** O WhatsApp cai no telefone quando não é informado separadamente. */
export function whatsappDe(representante: Representante): string {
    return representante.whatsapp ?? representante.telefone;
}
