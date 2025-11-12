import React from "react";
import Image from "next/image";

const Projects = () => {
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
      githubUrl: "#",
      liveUrl: "#",
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
      githubUrl: "#",
      liveUrl: "#",
      imagePosition: "left",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-2">
          PROJETOS
        </h2>
        <p className="text-white text-center text-sm mb-12">EXPLORAR AGORA</p>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                project.imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 items-center`}
            >
              <div className="w-full md:w-96 h-96 flex-shrink-0 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <div
                  className="rounded-lg p-6 relative"
                >
                  <p className="text-white text-xs mb-2">{project.type}</p>
                  <h3 className="text-2xl font-semibold mb-4">
                    <span style={{ color: project.color }}>{project.titleColor}</span>{" "}
                    <span className="text-white">{project.titleRest}</span>
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className={`flex gap-4 mt-4 ${project.imagePosition === "right" ? "justify-start" : "justify-end"}`}>
                  {project.imagePosition === "right" ? (
                    <>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:opacity-70 transition-opacity"
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
                        className="text-white hover:opacity-70 transition-opacity"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:opacity-70 transition-opacity"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:opacity-70 transition-opacity"
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

