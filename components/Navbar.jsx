"use client";

import { useEffect, useRef } from "react";

const Navbar = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      const paths = logoRef.current.querySelectorAll("path");
      paths.forEach((path, index) => {
        const length = path.getTotalLength();
        document.documentElement.style.setProperty(
          `--logo-path-${index + 1}-length`,
          `${length}`
        );
      });
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                ref={logoRef}
                width="27"
                height="29"
                viewBox="0 0 27 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="animated-logo"
                className="w-full h-auto"
              >
                <path
                  d="M0.000976562 1.35601H24.0158M3.50098 26.3911L14.251 13.6411L25.001 0.891125M3.00098 2.39112L13.751 14.8911L24.501 27.3911"
                  stroke="white"
                  strokeWidth="2.71203"
                  className="logo-path logo-path-1"
                />
                <path
                  d="M0.856445 14.3911H9.85645"
                  stroke="white"
                  strokeWidth="2.71203"
                  className="logo-path logo-path-2"
                />
                <path
                  d="M0.000976562 27.0469H23.5867"
                  stroke="white"
                  strokeWidth="2.71203"
                  className="logo-path logo-path-3"
                />
                <path
                  d="M1.35645 0.00274998V12.3911V25.8911"
                  stroke="white"
                  strokeWidth="2.71203"
                  className="logo-path logo-path-4"
                />
              </svg>
            </div>
            <span className="text-white font-semibold text-lg">Enzo Xavier</span>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
