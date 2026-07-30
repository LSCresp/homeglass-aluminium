export function Hero() {
  const WHATSAPP_NUMBER = "SEU_NUMERO_AQUI";

  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-40 px-6 min-h-[90vh] flex items-center">
        {/* Imagem em Fundo preenchendo toda a section (passa por trás do header fixo) */}
        <img
          src="/hero-image.jpg"
          alt="HomeGlass Esquadrias"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay escuro premium para garantir leitura */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(5,11,20,.60)_0%,rgba(5,11,20,.30)_45%,rgba(5,11,20,.95)_100%)]" />

        {/* Glow sutil para dar assinatura premium */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(192,197,206,.15)_0%,rgba(5,11,20,0)_60%)]" />

        {/* Fade para o azul escuro para transição suave com a próxima seção */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 z-0 bg-gradient-to-b from-transparent to-[#050B14]" />

        <div className="container mx-auto relative z-10 flex flex-col items-center text-center mt-[35vh] md:mt-[40vh]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 max-w-4xl leading-[1.05] text-white">
            Esquadrias e Vidros para{" "}
            <span className="bg-silver-gradient text-transparent bg-clip-text">
              Projetos de Alto Padrão
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl leading-relaxed">
            A transparência e a sofisticação que o seu imóvel exige. Projetamos, fabricamos e executamos esquadrias e fachadas em vidro com precisão milimétrica para garantir durabilidade, vedação e estética incomparável.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#contato" className="bg-silver-gradient text-[#121212] px-8 py-4 rounded-full font-bold text-center transition-transform hover:scale-[1.02] shadow-lg hover:shadow-[0_12px_40px_rgba(192,197,206,.18)] flex justify-center items-center gap-2 w-full sm:w-auto">
               Fale Conosco
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#050B14]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="rounded-3xl bg-white/[0.02] border border-white/10 px-6 py-12 md:px-12 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-white font-bold">
              Esquadrias não são apenas aberturas.{" "}
              <br className="hidden md:block" />
              <span className="text-homeglass-silver">
                São a moldura e a proteção do seu imóvel.
              </span>
            </h2>

            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Uma fachada de alto padrão exige mais do que materiais genéricos. 
              Na HomeGlass, consolidamos a estética e o conforto térmico e acústico do seu imóvel 
              através de um projeto robusto de esquadrias: oferecendo grandes vãos livres, linhas 
              sofisticadas e vedação absoluta, entregando um acabamento impecável e desenhado exclusivamente para a sua obra.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}