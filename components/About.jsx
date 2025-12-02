"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // Animação do título
      gsap.set(title, {
        opacity: 0,
        y: 40
      });

      gsap.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Animação dos parágrafos com stagger
      paragraphRefs.current.forEach((paragraph, index) => {
        if (!paragraph) return;

        gsap.set(paragraph, {
          opacity: 0,
          y: 30
        });

        gsap.to(paragraph, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2 + (index * 0.15),
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const paragraphs = [
    "Atualmente estou no 5º semestre de Engenharia de Software na PUCRS, sempre como desenvolvedor, busquei encontrar propósito na harmonia entre lógica e criatividade. Tenho foco na construção de estruturas de back-end limpas e eficientes, e na criação de interfaces front-end dinâmicas, explorando estilos em CSS, efeitos de animação e elementos 3D.",
    "Transformo ideias em experiências interativas, priorizando design elegante, código limpo e desempenho consistente. Estou em constante aprimoramento nas tecnologias React Native, TypeScript e JavaScript, buscando elevar a qualidade visual e arquitetural dos meus projetos.",
    "Acredito no equilíbrio entre funcionalidade e estética — criando soluções que não apenas funcionam de forma impecável, mas também encantam os usuários com experiências visuais marcantes e intuitivas."
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="container-sm">
        <h2 ref={titleRef} className="section-title">
          SOBRE MIM
        </h2>

        <div className="about-text">
          {paragraphs.map((text, index) => (
            <p 
              key={index}
              ref={el => paragraphRefs.current[index] = el}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
