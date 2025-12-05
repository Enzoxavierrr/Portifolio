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
    "Estou no 5º semestre de Engenharia de Software na PUCRS, nessa trajetória, descobri que meu interesse principal está em transformar ideias soltas em algo claro e bem organizado. Gosto de entender o propósito por trás de cada funcionalidade e encontrar formas de torná-la mais simples e intuitiva.",
    "Tenho experiência em desenvolvimento agíl, projetos mobiles acadêmicos e páginas web profissionais. Gosto de ambientes em que a comunicação é direta, as responsabilidades são claras e cada entrega realmente soma ao produto.",
    "Procuro sempre criar soluções que façam sentido para o usuário e que tenham uma experiência fluida, agradável e bem pensada. Acredito que um bom produto nasce quando lógica e criatividade trabalham juntas."
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
