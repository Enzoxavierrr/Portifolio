"use client";

import Image from "next/image";
import GradientBlinds from './Background';




const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
            <Image
              src="/icon-1-svg.svg"
              alt="Enzo Xavier"
              width={320}
              height={320}
              priority
              className="object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Opa, eai, me chamo Enzo Xavier!
        </h1>
        
        <p className="text-2xl text-gray-300 mb-6">
          Eu vivo basicamente de Código e Café ☕.
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Sou desenvolvedor de software focado em clean code, performance e boas práticas.
          Sempre buscando equilíbrio entre front-end e back-end, unindo um design elegante
          a uma arquitetura eficiente e escalável.
        </p>
        
        <button
          onClick={scrollToContact}
          className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          Entre em contato
        </button>
      </div>
    </section>
  );
};

export default Hero;

