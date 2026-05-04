import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
    return (
        <main className="min-h-screen bg-homeglass-black text-homeglass-white overflow-hidden">
            <Header />
            <Hero />
            <Services />
            <PortfolioPreview />
            <ContactForm />
        </main>
    );
}
