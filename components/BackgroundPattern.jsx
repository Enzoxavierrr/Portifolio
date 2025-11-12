"use client";

const BackgroundPattern = () => {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: "url('/Background-Pattern.svg.svg')",
        backgroundSize: "2609px 2609px",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        opacity: 0.5,
        transform: "translateY(-200px) translateX(200px)",
      }}
    />
  );
};

export default BackgroundPattern;

