import React, { useEffect, useState } from "react";
import "./AestheticBackground.css";

function AestheticBackground() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="aesthetic-bg-wrapper" aria-hidden="true">
      {/* Interactive Cursor Spotlight */}
      <div
        className="cursor-spotlight"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      ></div>

      {/* Floating Animated Ambient Orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>
      <div className="glow-orb orb-4"></div>

      {/* Grid Canvas Overlay */}
      <div className="grid-overlay"></div>
    </div>
  );
}

export default AestheticBackground;
