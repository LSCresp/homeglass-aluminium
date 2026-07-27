import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CartaoDigital, CONTATO } from "@/components/CartaoDigital";
import { REPRESENTANTES, buscarRepresentante, whatsappDe } from "@/data/representantes";

type Props = { params: { vendedor: string } };

/** Uma página estática por representante, geradas no build. */
export function generateStaticParams() {
    return REPRESENTANTES.map((representante) => ({ vendedor: representante.slug }));
}

/** Slug fora da lista dá 404 em vez de abrir um cartão com o número de outra pessoa. */
export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
    const representante = buscarRepresentante(params.vendedor);

    if (!representante) {
        return { title: `Cartão Digital | ${CONTATO.empresa}` };
    }

    const titulo = `${representante.nome} | ${CONTATO.empresa}`;
    const descricao = representante.cargo
        ? `${representante.nome}, ${representante.cargo} da ${CONTATO.empresa}. Fale direto pelo WhatsApp.`
        : `Fale direto com ${representante.nome}, da ${CONTATO.empresa}.`;

    return {
        title: titulo,
        description: descricao,
        openGraph: {
            title: `${CONTATO.empresa} — ${representante.nome}`,
            description: descricao,
            url: `${CONTATO.site}/cartao/${representante.slug}`,
            siteName: CONTATO.empresa,
            images: [
                {
                    url: "/og-cartao.jpg",
                    width: 1200,
                    height: 630,
                    alt: `Cartão digital de ${representante.nome} — ${CONTATO.empresa}`,
                },
            ],
            locale: "pt_BR",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${CONTATO.empresa} — ${representante.nome}`,
            description: descricao,
            images: ["/og-cartao.jpg"],
        },
    };
}

export default function CartaoRepresentantePage({ params }: Props) {
    const representante = buscarRepresentante(params.vendedor);

    if (!representante) {
        notFound();
    }

    return (
        <CartaoDigital
            pessoa={{
                slug: representante.slug,
                nome: representante.nome,
                cargo: representante.cargo,
                telefone: representante.telefone,
                whatsapp: whatsappDe(representante),
            }}
        />
    );
}
