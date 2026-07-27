import type { Metadata } from "next";
import { CartaoDigital } from "@/components/CartaoDigital";

export const metadata: Metadata = {
    title: "Cartão Digital | HomeGlass Aluminium",
    description:
        "Cartão de visitas digital da HomeGlass Aluminium. Fale conosco pelo WhatsApp, telefone, e-mail ou acesse nosso site.",
    openGraph: {
        title: "HomeGlass Aluminium | Cartão Digital",
        description: "Esquadrias de alumínio e vidro premium. Toque para falar conosco.",
        url: "https://homeglassaluminium.netlify.app/cartao",
        siteName: "HomeGlass Aluminium",
        images: [{ url: "/og-cartao.jpg", width: 1200, height: 630, alt: "Cartão de visitas digital da HomeGlass Aluminium" }],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "HomeGlass Aluminium | Cartão Digital",
        description: "Esquadrias de alumínio e vidro premium. Toque para falar conosco.",
        images: ["/og-cartao.jpg"],
    },
};

export default function CartaoPage() {
    return <CartaoDigital />;
}
