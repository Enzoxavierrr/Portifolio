"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ROLES = ["Full-Stack", "Front-end", "Back-end", "Criativo"];

const Hero = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const subtitleTextRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Animação de texto rotativo
  useEffect(() => {
    let interval = null;
    let timeout = null;
    
    // Delay inicial para começar após a animação de entrada
    const startDelay = setTimeout(() => {
      // Primeira mudança após delay inicial
      const changeText = () => {
        const textElement = subtitleTextRef.current;
        if (!textElement) return;

        // Fade out
        gsap.to(textElement, {
          opacity: 0,
          y: -20,
          scale: 0.9,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            // Muda o texto
            setCurrentRoleIndex((prevIndex) => {
              const nextIndex = (prevIndex + 1) % ROLES.length;
              return nextIndex;
            });
            
            // Pequeno delay antes do fade in para garantir que o texto foi atualizado
            timeout = setTimeout(() => {
              // Fade in
              gsap.fromTo(
                textElement,
                {
                  opacity: 0,
                  y: 20,
                  scale: 0.9,
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.5,
                  ease: "power3.out",
                }
              );
            }, 50);
          }
        });
      };

      // Inicia o intervalo
      interval = setInterval(changeText, 3000); // Muda a cada 3 segundos
    }, 4000); // Começa após 4 segundos (após animação inicial)

    return () => {
      clearTimeout(startDelay);
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;

    if (!section) return;

    const elements = [image, title, subtitle, description, button].filter(Boolean);
    
    gsap.set(elements, { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    });

    const tl = gsap.timeline({
      delay: 3.2,
      defaults: { 
        ease: "power4.out",
        duration: 1
      }
    });

    tl.to(image, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)"
    })
    .to(title, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8
    }, "-=0.7")
    .to(subtitle, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7
    }, "-=0.5")
    .to(description, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7
    }, "-=0.4")
    .to(button, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center hero-section relative"
    >
      <div className="text-center mx-auto relative z-10 hero-container">
        <div ref={imageRef} className="hero-image-wrapper">
          <Image
            src="/icon-1-svg.svg"
            alt="Enzo Xavier"
            width={320}
            height={320}
            priority
            className="object-contain"
          />
        </div>

        <h1 ref={titleRef} className="hero-title">
          Opa, eai, me chamo <span className="no-break">Enzo Xavier</span>!
        </h1>

        <p ref={subtitleRef} className="hero-subtitle">
          Sou Desenvolvedor{" "}
          <span 
            ref={subtitleTextRef}
            className="hero-role-text"
            style={{ 
              display: "inline-block",
              color: "#F59E0B"
            }}
          >
            {ROLES[currentRoleIndex]}
          </span>
        </p>

        <p ref={descriptionRef} className="hero-description">
          Sou um profissional focado em performance e boas práticas.
          Sempre buscando equilíbrio entre front-end e back-end, unindo um design elegante
          a uma arquitetura eficiente e escalável.
        </p>

        <button
          ref={buttonRef}
          onClick={scrollToContact}
          className="btn-primary"
        >
          Entre em contato
        </button>
      </div>
    </section>
  );
};

export default Hero;
