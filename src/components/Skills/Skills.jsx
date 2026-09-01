import React, { useState } from "react";
import { FaPalette, FaCode, FaTools, FaAward, FaSearch, FaProjectDiagram, FaDesktop, FaCheckCircle } from "react-icons/fa";
import "./Skills.css";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("uiux");

  const categories = [
    { id: "uiux", name: "🎨 UI/UX Design", icon: <FaPalette /> },
    { id: "frontend", name: "💻 Frontend Engineering", icon: <FaCode /> },
    { id: "tools", name: "🛠️ Design & Dev Tools", icon: <FaTools /> },
    { id: "cert", name: "📜 Certifications & Skills", icon: <FaAward /> },
  ];

  const skillData = {
    uiux: [
      { name: "Figma Prototyping", desc: "Interactive prototypes, Auto Layout, and Design Systems" },
      { name: "User Research & Personas", desc: "Understanding user behavior, pain points, and user journeys" },
      { name: "Wireframing & IA", desc: "Low & high-fidelity wireframing, information architecture" },
      { name: "Design Systems", desc: "Reusable UI component libraries, color tokens, typography scales" },
      { name: "Usability Testing", desc: "Evaluating user flows, micro-interactions, and accessibility" },
      { name: "Responsive Web & Mobile UI", desc: "Mobile-first layouts adaptable to all screen sizes" },
    ],
    frontend: [
      { name: "React.js", desc: "Component-driven development, hooks, state management" },
      { name: "JavaScript (ES6+)", desc: "Async/Await, DOM manipulation, clean modular code" },
      { name: "HTML5 & CSS3", desc: "Semantic markup, Flexbox, Grid, CSS custom properties" },
      { name: "Bootstrap & Modern CSS", desc: "Rapid responsive styling and custom layout frameworks" },
      { name: "Firebase", desc: "Authentication, Firestore realtime database, web hosting" },
      { name: "Responsive Web Design", desc: "Fluid layouts, media queries, mobile optimization" },
    ],
    tools: [
      { name: "Figma", desc: "Primary vector design & prototyping tool" },
      { name: "Adobe Photoshop", desc: "Image editing, graphic assets, and photo manipulation" },
      { name: "Adobe Illustrator", desc: "Vector graphics, icon design, and branding materials" },
      { name: "Canva", desc: "Social media graphics, posters, and fast creative assets" },
      { name: "Git / GitHub", desc: "Version control, branch management, and collaborative workflow" },
      { name: "VS Code", desc: "Customized extension ecosystem for efficient coding" },
    ],
    cert: [
      { name: "TOPCIT Level 2 Certification", desc: "Score 251 in Test of Practical Competency in ICT" },
      { name: "Graphic Design & Branding", desc: "Posters, banners, tarpaulins, and social media branding" },
      { name: "Technical Support", desc: "Computer maintenance, PC cleaning, and software setup" },
      { name: "Lead Generation", desc: "Client research, market analysis, and outreach strategies" },
    ],
  };

  const uxWorkflow = [
    { step: "01", title: "Empathize & Research", icon: <FaSearch />, text: "Understanding target audience, business goals, and pain points." },
    { step: "02", title: "Wireframe & IA", icon: <FaProjectDiagram />, text: "Mapping user flows, site maps, and low-fidelity structural sketches." },
    { step: "03", title: "Visual Design System", icon: <FaPalette />, text: "Designing high-fidelity UI screens, color tokens, and Figma components." },
    { step: "04", title: "Frontend Implementation", icon: <FaDesktop />, text: "Translating Figma designs into pixel-perfect React.js code." },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">

        <h2 className="section-title">Skills & UX Methodology</h2>
        <p className="section-subtitle">
          Combining human-centered UI/UX design thinking with clean frontend code.
        </p>

        {/* Skill Category Tabs */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-cards-grid">
          {skillData[activeCategory].map((skill, idx) => (
            <div key={idx} className="skill-item-card">
              <div className="skill-card-top">
                <FaCheckCircle className="skill-check-icon" />
                <h3>{skill.name}</h3>
              </div>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* UX Process Workflow */}
        <div className="ux-workflow-container">
          <h3 className="workflow-title">My UI/UX Design & Development Process</h3>
          <div className="workflow-grid">
            {uxWorkflow.map((item, idx) => (
              <div key={idx} className="workflow-card">
                <div className="workflow-step-badge">{item.step}</div>
                <div className="workflow-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;