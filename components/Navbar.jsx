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

  const handleDownloadCV = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/CV-Enzo_Xavier.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV-Enzo_Xavier.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao baixar CV:", error);
      // Fallback para o link direto
      window.open("/CV-Enzo_Xavier.pdf", "_blank");
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <div className="logo-container">
              <svg
                ref={logoRef}
                width="27"
                height="29"
                viewBox="0 0 27 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="animated-logo"
                className="logo-svg"
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
            <span className="brand-name">Enzo Xavier</span>
          </div>

          <div className="navbar-actions">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary"
            >
              Contato
            </button>
            <a
              href="/CV-Enzo_Xavier.pdf"
              onClick={handleDownloadCV}
              className="btn-download-cv"
              aria-label="Baixar currículo"
              title="Baixar currículo"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
