const Experience = () => {
  const experiences = [
    {
      title: "AGES II / Desenvolvedor Full Stack",
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
      title: "AGES I / Desenvolvedor Front-end",
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

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-2">
          EXPERIÊNCIAS
        </h2>
        <p className="text-white text-center text-sm mb-12">ACADÊMICAS</p>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12">
              <div className="flex flex-row justify-between items-center mb-4">
                <h3 className="text-white font-semibold text-xl">
                  {exp.title}
                </h3>
                <p className="text-gray-400 text-sm">{exp.period}</p>
              </div>
              
              <div className="mb-4">
                {exp.description.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="text-gray-300 text-sm md:text-base leading-relaxed mb-3"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-transparent rounded-lg text-white text-xs py-2 px-4 border border-white/20"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

