"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LogoAnimation from "@/components/LogoAnimation";
import GradientBlinds from "@/components/Background";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LogoAnimation />
      <main 
        className={`min-h-screen relative z-10 transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="fixed inset-0" style={{ zIndex: -1, pointerEvents: 'none' }}>
          <GradientBlinds
            gradientColors={['#e0e0e0', '#0c2b4e']}
            angle={45}
            noise={0.3}
            blindCount={20}
            spotlightRadius={0.5}
            spotlightSoftness={1}
            spotlightOpacity={0.5}
            mouseDampening={0}
            shineDirection="right"
          />
        </div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

