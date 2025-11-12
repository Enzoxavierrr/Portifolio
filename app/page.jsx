import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundPattern from "@/components/BackgroundPattern";
import LogoAnimation from "@/components/LogoAnimation";

export default function Home() {
  return (
    <>
      <LogoAnimation />
      <main className="min-h-screen relative z-10">
        <BackgroundPattern />
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

