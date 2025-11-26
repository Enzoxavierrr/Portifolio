"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      title: "Nubank Page",
      titleColor: "Nubank",
      titleRest: "Page",
      type: "Projeto pessoal",
      description:
        "Redesenhei a landing page do Nubank, aplicando princípios modernos de UI e animações aprendidas no curso FrontPush, utilizando HTML, JavaScript e técnicas avançadas de CSS.",
      color: "#8B5CF6",
      image: "/nubank-capa.png",
      githubUrl: "https://github.com/Enzoxavierrr/Nubank.git",
      liveUrl: "https://nubank-steel.vercel.app/",
      imagePosition: "right",
    },
    {
      title: "PagBank page",
      titleColor: "PagBank",
      titleRest: "page",
      type: "Projeto pessoal",
      description:
        "Redesenhei a landing page do PagBank, aplicando princípios modernos de UI e animações aprendidas no curso FrontPush, utilizando HTML, JavaScript e técnicas avançadas de CSS.",
      color: "#10B981",
      image: "/pag-bank-capa.png",
      githubUrl: "https://github.com/Enzoxavierrr/PagBank.git",
      liveUrl: "https://pag-bank.vercel.app/",
      imagePosition: "left",
    },
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

      projectRefs.current.forEach((project, index) => {
        if (!project) return;

        const image = project.querySelector('.project-image-wrapper');
        const content = project.querySelector('.project-content');
        const isReverse = projects[index].imagePosition === "left";

        gsap.set(image, {
          opacity: 0,
          x: isReverse ? 80 : -80,
          scale: 0.9
        });

        gsap.set(content, {
          opacity: 0,
          x: isReverse ? -60 : 60
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: project,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });

        tl.to(image, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        })
        .to(content, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6");
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="container-lg">
        <h2 ref={titleRef} className="section-title">
          PROJETOS
        </h2>
        <p ref={subtitleRef} className="section-subtitle">EXPLORAR AGORA</p>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className={`project-item ${project.imagePosition === "right" ? "" : "reverse"}`}
            >
              <div className="project-image-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-image"
                  sizes="(max-width: 768px) 100vw, 22rem"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>

              <div className="project-content">
                <div className="project-text-box">
                  <p className="project-type">{project.type}</p>
                  <h3 className="project-title">
                    <span style={{ color: project.color }}>{project.titleColor}</span>{" "}
                    <span className="text-white">{project.titleRest}</span>
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                </div>

                <div className="project-links" style={{ justifyContent: project.imagePosition === "right" ? "flex-start" : "flex-end" }}>
                  {project.imagePosition === "right" ? (
                    <>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
