"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconCloud } from "@/registry/magicui/icon-cloud";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cloudRef = useRef(null);

  const slugs = [
    // Front-end
    "react",
    "typescript",
    "javascript",
    "nextdotjs",
    "html5",
    "css3",
    // Back-end
    "java",
    "spring",
    "nodedotjs",
    "prisma",
    // Ferramentas e Design
    "figma",
    "docker",
    "github",
    "postgresql",
    "supabase",
  ];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const text = textRef.current;
    const cloud = cloudRef.current;

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

      // Animação do texto
      gsap.set(text, {
        opacity: 0,
        x: -30
      });

      gsap.to(text, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      // Animação do Icon Cloud - removida para garantir visibilidade
      if (cloud) {
        gsap.set(cloud, {
          opacity: 1,
          x: 0,
          scale: 1,
          visibility: "visible"
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container-sm">
        <h2 ref={titleRef} className="section-title">
          HABILIDADES
        </h2>

        <div className="skills-content">
          <div ref={textRef} className="skills-text">
            <p>
              Ao longo da minha trajetória, desenvolvi habilidades em diversas tecnologias e ferramentas que me permitem criar soluções completas e eficientes. Tenho experiência tanto no desenvolvimento front-end quanto back-end, trabalhando com frameworks modernos e metodologias ágeis.
            </p>
            <p>
              Minha stack principal inclui React e TypeScript para interfaces dinâmicas, Node.js e Java para back-end robusto, e ferramentas como Docker e Git para garantir qualidade e organização no desenvolvimento. Também trabalho com design e prototipação no Figma, sempre buscando criar experiências visuais impactantes.
            </p>
          </div>

          <div ref={cloudRef} className="skills-cloud">
            <div className="relative flex size-full items-center justify-center overflow-hidden">
              <IconCloud images={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

