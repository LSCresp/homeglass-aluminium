import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Monoton } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });
const monoton = Monoton({ weight: '400', subsets: ["latin"], variable: '--font-monoton' });

export const metadata: Metadata = {
    title: "Célere – Casa Inteligente | Automação Residencial Premium",
    description: "Transforme sua casa com a Célere Casa Inteligente. Projetos premium de automação, iluminação, som e segurança. Solicite uma consultoria.",
    openGraph: {
        title: "Célere – Casa Inteligente",
        description: "Conforto, segurança e sofisticação integrados. Especialistas em automação residencial de alto padrão.",
        url: "https://celerecasainteligente.com.br", // SUBSTITUIR NO FUTURO
        siteName: "Célere Casa Inteligente",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
        locale: "pt_BR",
        type: "website",
    }
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Prisma&display=swap" rel="stylesheet" />
            </head>
            <body className={`${montserrat.variable} ${playfair.variable} ${monoton.variable} font-sans antialiased selection:bg-celere-gold selection:text-celere-black`}>
                {children}
            </body>
        </html>
    );
}
