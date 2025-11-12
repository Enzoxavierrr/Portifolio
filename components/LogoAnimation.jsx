"use client";

import { useEffect, useRef, useState } from "react";

const LogoAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Calculate path lengths and set CSS variables
    if (logoRef.current) {
      const paths = logoRef.current.querySelectorAll("path");
      paths.forEach((path, index) => {
        const length = path.getTotalLength();
        document.documentElement.style.setProperty(
          `--logo-entrance-path-${index + 1}-length`,
          `${length}`
        );
      });
    }

    // Start fade out after drawing completes
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500); // Start fade after 2.5s

    // Hide animation after fade completes
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Total 3 seconds

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative">
        <svg
          ref={logoRef}
          width="120"
          height="130"
          viewBox="0 0 27 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="logo-entrance"
          className="logo-entrance-svg"
        >
          <path
            d="M0.000976562 1.35601H24.0158M3.50098 26.3911L14.251 13.6411L25.001 0.891125M3.00098 2.39112L13.751 14.8911L24.501 27.3911"
            stroke="white"
            strokeWidth="2.71203"
            className="logo-entrance-path logo-entrance-path-1"
          />
          <path
            d="M0.856445 14.3911H9.85645"
            stroke="white"
            strokeWidth="2.71203"
            className="logo-entrance-path logo-entrance-path-2"
          />
          <path
            d="M0.000976562 27.0469H23.5867"
            stroke="white"
            strokeWidth="2.71203"
            className="logo-entrance-path logo-entrance-path-3"
          />
          <path
            d="M1.35645 0.00274998V12.3911V25.8911"
            stroke="white"
            strokeWidth="2.71203"
            className="logo-entrance-path logo-entrance-path-4"
          />
        </svg>
      </div>
    </div>
  );
};

export default LogoAnimation;

