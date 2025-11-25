"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  const accentColor = "#8B5CF6";

  const experiences = [
    {
      company: "AGES II | Operações GAECO",
      role: "Desenvolvedor Full Stack",
      period: "AGO 2025 - DEZ 2025",
      description: [
        "No projeto Operações GAECO, desenvolvido durante a disciplina AGES II, participei da criação de um sistema mobile para apoiar o Ministério Público no gerenciamento de processos e operações. Atuei como desenvolvedor Full Stack, contribuindo no front-end (React + TypeScript) e no back-end (Java + Spring Boot), com foco na integração de APIs REST, autenticação e persistência de dados.",
        "O projeto foi conduzido em equipe utilizando metodologias ágeis (Scrum), versionamento com Git e acompanhamento de tarefas via ClickUp. Minha atuação envolveu a implementação de componentes reutilizáveis, modelagem de dados no PostgreSQL, integração entre as camadas e garantia de qualidade nas entregas, simulando um ambiente profissional de desenvolvimento corporativo."
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
    },
    {
      company: "Freelancer | Odin Pedidos",
      role: "Desenvolvedor Front-end",
      period: "AGO 2025 - OUT 2025",
      description: [
        "Atuei como desenvolvedor Front-end no projeto Odin Pedidos, contribuindo para a criação e aprimoramento de interfaces mobile voltadas à gestão de pedidos e controle de entregas. Fui responsável pelo desenvolvimento de telas responsivas, seguindo boas práticas de design e usabilidade.",
        "Durante o projeto, utilizei React e TypeScript em conjunto com Figma e Git, garantindo a fidelidade visual dos protótipos e a manutenção de um código limpo e bem estruturado. Essa experiência reforçou minha capacidade de transformar requisitos de design em interfaces funcionais e intuitivas."
      ],
      technologies: [
        "React",
        "TypeScript",
        "Figma",
        "Git",
      ],
    },
    {
      company: "AGES I | Gastro",
      role: "Desenvolvedor Front-end",
      period: "FEV 2025 - JUL 2025",
      description: [
        "Durante a disciplina AGES I, desenvolvi o projeto Gastro — um aplicativo mobile voltado para recomendações gastronômicas e interação entre usuários e restaurantes locais. Atuei principalmente no desenvolvimento front-end com React Native e TypeScript, aplicando boas práticas de componentização, consumo de APIs REST e gerenciamento de estado.",
        "O projeto simulou um ambiente corporativo com metodologia ágil Scrum, integração contínua via Azure DevOps e prototipação no Figma. Também participei da integração com o back-end (Node.js + Prisma + PostgreSQL), garantindo uma comunicação eficiente entre cliente e servidor e contribuindo para o design e usabilidade das interfaces."
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
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const timeline = timelineRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set([title, subtitle], {
      opacity: 0,
      y: 40
    });

    gsap.set(timeline, {
      scaleY: 0,
      transformOrigin: "top center"
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

    gsap.to(timeline, {
      scaleY: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const dot = item.querySelector('.timeline-dot');
      const card = item.querySelector('.experience-card');

      gsap.set(dot, {
        scale: 0,
        opacity: 0
      });

      gsap.set(card, {
        opacity: 0,
        x: 50
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(dot, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)"
      })
      .to(card, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.2");
    });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="container-sm">
        <h2 ref={titleRef} className="section-title">
          EXPERIÊNCIAS
        </h2>
        <p ref={subtitleRef} className="section-subtitle">ACADÊMICAS</p>

        <div className="experience-timeline-container">
          <div ref={timelineRef} className="timeline-line" aria-hidden="true" />
          
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                ref={el => itemRefs.current[index] = el}
                className="experience-item"
              >
                <div 
                  className="timeline-dot" 
                  style={{ borderColor: accentColor }}
                  aria-hidden="true"
                >
                  <div 
                    className="timeline-dot-inner" 
                    style={{ backgroundColor: accentColor }}
                  />
                </div>

                <div 
                  className="experience-card"
                  style={{ borderColor: `${accentColor}30` }}
                >
                  <div className="experience-header">
                    <div className="experience-header-content">
                      <h3 className="experience-company">{exp.company}</h3>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
