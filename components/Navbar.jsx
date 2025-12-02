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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
