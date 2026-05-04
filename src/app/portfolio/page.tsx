import { Header } from "@/components/Header";
import { PortfolioGallery } from "@/components/PortfolioGallery";

export const metadata = {
    title: "Portfólio de Obras | HomeGlass Aluminium",
    description: "Galeria de projetos de alto padrão executados pela HomeGlass Aluminium.",
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-homeglass-black text-homeglass-white">
            <Header />
            
            <section className="pt-40 pb-20 px-6">
                <div className="container mx-auto text-center mb-16">
                    <span className="text-homeglass-silver font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Repositório Oficial</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Nossos Projetos</h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg mb-12">
                        Explore nosso acervo completo de projetos finalizados.
                    </p>
                </div>

                <div className="container mx-auto max-w-7xl">
                    <PortfolioGallery />
                </div>
            </section>
        </main>
    );
}
