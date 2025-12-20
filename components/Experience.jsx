"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);

  const accentColor = "#F59E0B";

  const experiences = [
    {
      company: "AGES II | Operações GAECO",
      role: "Desenvolvedor Full Stack",
      period: "AGO 2025 - DEZ 2025",
      description: [
        "No projeto Operações GAECO, desenvolvido durante a disciplina AGES II, participei da criação de um sistema mobile para apoiar o Ministério Público no gerenciamento de processos e operações. Atuei como desenvolvedor Full Stack, contribuindo no front-end (React + TypeScript) e no back-end (Java + Spring Boot), com foco na integração de APIs REST, autenticação e persistência de dados. O projeto foi conduzido em equipe utilizando metodologias ágeis (Scrum), versionamento com Git e acompanhamento de tarefas via ClickUp. Minha atuação envolveu a implementação de componentes reutilizáveis, modelagem de dados no PostgreSQL, integração entre as camadas e garantia de qualidade nas entregas, simulando um ambiente profissional de desenvolvimento corporativo."
      ],
      technologies: [
        "React",
        "TypeScript",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Docker",
        "Git",
      ],
      wikiLink: "https://tools.ages.pucrs.br/opera-es-gaeco/operacoes-gaeco-wiki/-/wikis/home",
    },
    {
      company: "AGES I | Gastro",
      role: "Desenvolvedor Front-end",
      period: "FEV 2025 - JUL 2025",
      description: [
        "Durante a disciplina AGES I, desenvolvi o projeto Gastro — um aplicativo mobile voltado para recomendações gastronômicas e interação entre usuários e restaurantes locais. Atuei principalmente no desenvolvimento front-end com React Native e TypeScript, aplicando boas práticas de componentização, consumo de APIs REST e gerenciamento de estado. O projeto simulou um ambiente corporativo com metodologia ágil Scrum, integração contínua via Azure DevOps e prototipação no Figma. Também participei da integração com o back-end (Node.js + Prisma + PostgreSQL), garantindo uma comunicação eficiente entre cliente e servidor e contribuindo para o design e usabilidade das interfaces."
      ],
      technologies: [
        "React Native",
        "TypeScript",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        "Figma",
        "Azure DevOps"
      ],
      wikiLink: "https://tools.ages.pucrs.br/gastro/wiki/-/wikis/home",
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set([title, subtitle], {
        opacity: 0,
        y: 40
      });

      gsap.to([title, subtitle], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        gsap.set(card, {
          opacity: 0,
          x: 100,
          scale: 0.95
        });

        gsap.to(card, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "left 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="container">
        <h2 ref={titleRef} className="section-title">
          EXPERIÊNCIAS
        </h2>
        <p ref={subtitleRef} className="section-subtitle">Algumas experiências acadêmicas e pessoais</p>

        <div className="experience-carousel-wrapper">
          <div ref={carouselRef} className="experience-carousel">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                ref={el => cardRefs.current[index] = el}
                className="experience-card-carousel"
                style={{ borderColor: `${accentColor}30` }}
              >
                <div className="experience-header">
                  <div className="experience-header-content">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <h3 className="experience-company">{exp.company}</h3>
                      {exp.wikiLink && (
                        <a
                          href={exp.wikiLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-wiki-link"
                          aria-label="Abrir Wiki do projeto"
                          title="Abrir Wiki do projeto"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className="experience-role" style={{ color: accentColor }}>
                      {exp.role}
                    </p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>

                <div className="experience-description-wrapper">
                  {exp.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className="experience-description">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="tech-tags">
                  {exp.technologies.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="tech-tag"
                      style={{ 
                        borderColor: `${accentColor}40`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
