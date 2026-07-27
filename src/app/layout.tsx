import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Monoton } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });
const monoton = Monoton({ weight: '400', subsets: ["latin"], variable: '--font-monoton' });

export const metadata: Metadata = {
    metadataBase: new URL("https://homeglassaluminium.netlify.app"),
    title: "HomeGlass Aluminium | Esquadrias de Alumínio e Vidro Premium",
    description: "Projetos personalizados de esquadrias de alumínio, fachadas e vidros de alto padrão.",
    openGraph: {
        title: "HomeGlass Aluminium",
        description: "Esquadrias de Alumínio e Vidro Premium para residências de alto padrão.",
        url: "https://homeglass-aluminium.vercel.app/",
        siteName: "HomeGlass Aluminium",
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
            </head>
            <body className={`${montserrat.variable} ${playfair.variable} ${monoton.variable} font-sans antialiased selection:bg-homeglass-silver selection:text-homeglass-black`}>
                {children}
            </body>
        </html>
    );
}
