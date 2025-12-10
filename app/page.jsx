"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/app/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingNavDock from "@/components/FloatingNavDock";

const LogoAnimation = dynamic(() => import("@/components/LogoAnimation"), {
  ssr: false,
});

const GradientBlinds = dynamic(() => import("@/components/Background"), {
  ssr: false,
});

export default function Home() {
  const { theme } = useTheme();
  const [showContent, setShowContent] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Cores do gradiente baseadas no tema
  const gradientColors = theme === "light" 
    ? ["#FFFFFF", "#F5F5F5", "#E5E5E5", "#D5D5D5", "#A0A0A0"] // Branco com preto fraquinho (sem laranja)
    : ["#1a1a2e", "#2d2d3a", "#4a4a5a", "#6b6b7a", "#F59E0B"]; // Cores escuras originais

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleBackgroundToggle = useCallback((e) => {
    if (
      e.target.tagName === "A" ||
      e.target.tagName === "BUTTON" ||
      e.target.closest("a") ||
      e.target.closest("button")
    ) {
      return;
    }
    setIsPaused((prev) => !prev);
  }, []);

  return (
    <>
      <LogoAnimation />
      <main
        className={`min-h-screen relative z-10 transition-opacity ${
          showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleBackgroundToggle}
      >
        <div
          className="fixed inset-0"
          style={{ zIndex: -1, pointerEvents: "none", opacity: theme === "light" ? 0.6 : 0.4 }}
        >
          <GradientBlinds
            gradientColors={gradientColors}
            angle={35}
            noise={0.15}
            blindCount={24}
            blindMinWidth={60}
            spotlightRadius={0.5}
            spotlightSoftness={1.5}
            spotlightOpacity={0.4}
            mirrorGradient={true}
            distortAmount={1.5}
            mouseDampening={0.1}
            shineDirection="right"
            mixBlendMode="normal"
            mouseFollowPaused={isPaused}
          />
        </div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Contact />
        <FloatingNavDock />
      </main>
    </>
  );
}
