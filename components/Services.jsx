"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemRefs = useRef([]);

  const services = [
    {
      title: "Desenvolvimento Criativo",
      description: "Interfaces intuitivas e experiências memoráveis. Prototipação no Figma, design systems e foco no usuário.",
    },
    {
      title: "Desenvolvimento Front-end",
      description: "Interfaces modernas, responsivas e com foco em experiência do usuário. React, Next.js, TypeScript.",
    },
    {
      title: "Desenvolvimento Back-end",
      description: "APIs robustas e escaláveis. Node.js, Java, Spring Boot, banco de dados.",
    },
    {
      title: "Landing Pages",
      description: "Páginas de alta conversão com design elegante e performance otimizada.",
    },
    {
      title: "Aplicações Mobile",
      description: "Apps multiplataforma com React Native, focados em usabilidade e performance.",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
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

      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        gsap.set(item, {
          opacity: 0,
          y: 30
        });

        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1 + (index * 0.1),
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
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
    <section id="services" ref={sectionRef} className="section-padding">
      <div className="container-sm">
        <h2 ref={titleRef} className="services-title">
          Como posso te ajudar<span className="services-title-accent">—</span>
        </h2>

        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className="service-item"
            >
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

