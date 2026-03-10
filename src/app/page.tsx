import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Packages } from "@/components/Packages";
import { SocialProof } from "@/components/SocialProof";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
    return (
        <main className="min-h-screen bg-celere-black text-celere-white overflow-hidden">
            <Header />
            <Hero />
            <Services />
            <Features />
            <Packages />
            <SocialProof />
            <ContactForm />
        </main>
    );
}
