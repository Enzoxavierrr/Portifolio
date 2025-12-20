"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function IconCloud({ images = [], className = "" }) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setDimensions({ width: rect.width, height: rect.height });
        }
      }
    };

    updateDimensions();
    const timer = setTimeout(updateDimensions, 200);
    const timer2 = setTimeout(updateDimensions, 500);
    
    let resizeObserver;
    try {
      resizeObserver = new ResizeObserver(updateDimensions);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
    } catch (e) {
      console.warn('ResizeObserver não disponível');
    }
    
    window.addEventListener("resize", updateDimensions);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener("resize", updateDimensions);
    };
  }, [images]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    
    mouseX.set(x);
    mouseY.set(y);
    
    const rotateXValue = (y / (rect.height / 2)) * 20;
    const rotateYValue = (x / (rect.width / 2)) * 20;
    
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-white" style={{ minHeight: '400px' }}>
        <p>Carregando ícones...</p>
      </div>
    );
  }

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  const baseRadius = Math.min(dimensions.width, dimensions.height) * 0.35;

  const iconPositions = images.map((image, i) => {
    const angle = (i / images.length) * Math.PI * 2;
    const verticalAngle = (i / images.length) * Math.PI;
    const radius = baseRadius * (0.7 + Math.sin(verticalAngle) * 0.3);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const z = Math.sin(verticalAngle) * radius;
    
    return { 
      image, 
      x, 
      y, 
      z,
      index: i 
    };
  });

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[400px] md:h-[500px] ${className}`}
      style={{ 
        minHeight: '400px',
        position: 'relative',
        perspective: '1000px',
        cursor: 'grab'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      >
        {iconPositions.map((item, i) => {
          const scale = 1 + (item.z / baseRadius) * 0.3;
          const opacity = 0.7 + (item.z / baseRadius) * 0.3;
          
          return (
            <motion.div
              key={`icon-${i}-${item.image}`}
              className="absolute flex items-center justify-center cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: opacity,
                scale: scale,
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.02,
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
              whileHover={{ 
                scale: scale * 1.3, 
                zIndex: 50,
                opacity: 1,
              }}
              style={{
                left: `${centerX + item.x}px`,
                top: `${centerY + item.y}px`,
                transform: `translate(-50%, -50%) translateZ(${item.z}px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                className="flex items-center justify-center p-2 md:p-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(245,158,11,0.2)] backdrop-blur-sm"
                whileHover={{
                  backgroundColor: "rgba(245, 158, 11, 0.15)",
                  borderColor: "rgba(245, 158, 11, 0.5)",
                  boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
                }}
              >
                <img
                  src={item.image}
                  alt={`Tech icon ${i}`}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  style={{ 
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    filter: 'brightness(0) invert(1)',
                  }}
                  onError={(e) => {
                    console.error(`Erro ao carregar: ${item.image}`);
                    // Tentar URL alternativa sem cor
                    const altUrl = item.image.replace('/ffffff', '');
                    if (e.target.src !== altUrl) {
                      e.target.src = altUrl;
                    } else {
                      e.target.style.display = 'none';
                    }
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default IconCloud;
