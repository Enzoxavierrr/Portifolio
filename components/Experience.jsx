const Experience = () => {
  const experiences = [
    {
      title: "AGES II / Desenvolvedor Full Stack",
      period: "AGOS 2025 - DEC 2025",
      description: [
        "Currently, I am working on WebHR Mobile Application, WebHR is a Cloud based Social HR Software for SMEs by Verge Systems Inc. WebHR is currently used in over 160 countries world wide by thousands of organizations to manage HR, As a React.js developer with 1.5 year of experience, I have a strong foundation in creating dynamic and responsive mobile and web applications.",
        "My experience with React Native has allowed me to develop cross-platform mobile applications that run seamlessly on both iOS and Android platforms. Additionally, my proficiency in React.js has equipped me with the skills to create fast, scalable, and dynamic web pages with excellent user experiences. I have a deep understanding of component-based architecture and state management, and I am well-versed in the latest web development trends and technologies.",
      ],
      technologies: [
        "React Native",
        "Java",
        "JavaScript",
        "Typescript",
        "SpringBoot",
        "Docker",
        "PostgreSQL",
      ],
    },
    {
      title: "AGES I/ Desenvolvedor Front-end",
      period: "FEV 2025 - JUL 2025",
      description: [
        "Currently, I am working on WebHR Mobile Application, WebHR is a Cloud based Social HR Software for SMEs by Verge Systems Inc. WebHR is currently used in over 160 countries world wide by thousands of organizations to manage HR, As a React.js developer with 1.5 year of experience, I have a strong foundation in creating dynamic and responsive mobile and web applications.",
        "My experience with React Native has allowed me to develop cross-platform mobile applications that run seamlessly on both iOS and Android platforms. Additionally, my proficiency in React.js has equipped me with the skills to create fast, scalable, and dynamic web pages with excellent user experiences. I have a deep understanding of component-based architecture and state management, and I am well-versed in the latest web development trends and technologies.",
      ],
      technologies: [
        "React Native",
        "Java",
        "JavaScript",
        "Typescript",
        "SpringBoot",
        "Docker",
        "PostgreSQL",
      ],
    },
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

