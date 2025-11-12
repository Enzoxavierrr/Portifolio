"use client";

import { useEffect, useRef, useState } from "react";
import SVGInject from "@iconfu/svg-inject";

const LogoAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const logoImgRef = useRef(null);

  const handleImageLoad = (e) => {
    SVGInject(e.target, {
      afterInject: (img, svg) => {
        const calculatePaths = () => {
          if (svg) {
            const paths = svg.querySelectorAll("path");
            paths.forEach((path, index) => {
              const length = path.getTotalLength();
              if (length > 0) {
                document.documentElement.style.setProperty(
                  `--logo-path-${index + 1}-length`,
                  `${length}`
                );
              }
            });
          }
        };

        setTimeout(calculatePaths, 50);
        setTimeout(calculatePaths, 200);
        setTimeout(calculatePaths, 500);
      },
    });
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      data-splash-active
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="relative flex items-center justify-center">
        <img
          ref={logoImgRef}
          src="/Logo.svg"
          alt="Logo"
          onLoad={handleImageLoad}
          className="logo-splash-img"
          style={{
            width: "120px",
            height: "130px",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

export default LogoAnimation;
