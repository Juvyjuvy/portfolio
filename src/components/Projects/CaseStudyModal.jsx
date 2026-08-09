import React, { useEffect, useState } from "react";
import { FaTimes, FaFigma, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLayerGroup, FaUserCheck, FaPencilRuler, FaPalette } from "react-icons/fa";
import "./CaseStudyModal.css";

function CaseStudyModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy || {
    problem: "Outdated processes required digital transformation to improve efficiency, user clarity, and accessibility across devices.",
    solution: "Created an intuitive, human-centered UI design system in Figma backed by wireframing, user testing, and clean React implementation.",
    personas: ["Students & Academics needing fast navigation", "Administrators seeking clear data visualization"],
    wireframes: ["Information Architecture Tree", "Low-Fidelity Mobile Screens", "High-Fidelity Component Library"],
    colorPalette: [
      { name: "Primary Blue", hex: "#2563eb" },
      { name: "Teal Accent", hex: "#38bdf8" },
      { name: "Slate Dark", hex: "#0f172a" },
      { name: "Surface Light", hex: "#f8fafc" }
    ],
    typography: "Inter & Poppins (Dynamic Type Scale)",
    impact: ["Reduced user flow friction by 40%", "100% responsive across mobile and desktop", "Consistent UI design system established in Figma"]
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-header">
          <div className="modal-badge-group">
            <span className="modal-category">{project.category}</span>
            <span className="modal-ux-badge"><FaPalette /> UI/UX Case Study</span>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            <FaTimes />
          </button>
        </div>

        {/* Title Banner */}
        <div className="modal-title-section">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs">
          <button 
            className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <FaLayerGroup /> Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === "research" ? "active" : ""}`}
            onClick={() => setActiveTab("research")}
          >
            <FaUserCheck /> Research & Flow
          </button>
          <button 
            className={`tab-btn ${activeTab === "design" ? "active" : ""}`}
            onClick={() => setActiveTab("design")}
          >
            <FaPencilRuler /> Design System
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          
          {activeTab === "overview" && (
            <div className="tab-content fade-in">
              <div className="modal-image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="case-grid">
                <div className="case-box">
                  <h3>🎯 The Challenge</h3>
                  <p>{caseStudy.problem}</p>
                </div>
                <div className="case-box highlight">
                  <h3>💡 The UX Solution</h3>
                  <p>{caseStudy.solution}</p>
                </div>
              </div>

              <div className="impact-section">
                <h3>🚀 User Impact & Outcomes</h3>
                <ul>
                  {caseStudy.impact.map((item, idx) => (
                    <li key={idx}><FaCheckCircle className="check-icon" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "research" && (
            <div className="tab-content fade-in">
              <div className="section-block">
                <h3>👥 Target User Personas</h3>
                <div className="persona-grid">
                  {caseStudy.personas.map((persona, idx) => (
                    <div key={idx} className="persona-card">
                      <div className="persona-avatar">0{idx + 1}</div>
                      <p>{persona}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-block">
                <h3>📐 Wireframes & Information Architecture</h3>
                <div className="wireframe-tags">
                  {caseStudy.wireframes.map((wf, idx) => (
                    <span key={idx} className="wireframe-pill">{wf}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "design" && (
            <div className="tab-content fade-in">
              <div className="section-block">
                <h3>🎨 Color System Tokens</h3>
                <div className="palette-grid">
                  {caseStudy.colorPalette.map((color, idx) => (
                    <div key={idx} className="color-swatch-box">
                      <div className="color-preview" style={{ backgroundColor: color.hex }}></div>
                      <div className="color-details">
                        <span className="color-name">{color.name}</span>
                        <span className="color-hex">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-block">
                <h3>✍️ Typography System</h3>
                <p className="typography-spec">{caseStudy.typography}</p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Links */}
        <div className="modal-footer">
          <div className="tech-pills">
            {project.tech.map((t, idx) => (
              <span key={idx}>{t}</span>
            ))}
          </div>

          <div className="modal-actions">
            {project.link && project.type === "figma" && (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-figma">
                <FaFigma /> View Figma File
              </a>
            )}
            {project.link && project.type === "github" && (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-github">
                <FaGithub /> View Code
              </a>
            )}
            {project.link && project.type === "pdf" && (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                <FaExternalLinkAlt /> View PDF Deck
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default CaseStudyModal;
