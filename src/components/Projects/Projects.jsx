import React, { useState } from "react";
import CaseStudyModal from "./CaseStudyModal";
import "./Projects.css";

import promissory from "../../assets/images/Projects/promissory-system.png";
import firealarm from "../../assets/images/Projects/fire-alarm.png";
import grocery from "../../assets/images/Projects/grocery-app.png";

import figmaUI from "../../assets/images/Projects/figma-ui.png";
import graphicDesign from "../../assets/images/Projects/graphic-design.png";

function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "figma-mobile-web",
      category: "🎨 UI/UX Design",
      categoryKey: "ui",
      categoryClass: "ui",
      image: figmaUI,
      title: "Mobile & Web UI Design System",
      description:
        "Designed modern, accessible, and responsive user interfaces in Figma including mobile application flows, dashboard analytics, and landing pages.",
      tech: ["Figma", "Auto Layout", "Design System", "Wireframing", "Prototyping"],
      type: "figma",
      link: "https://www.figma.com/design/riXaxhpi8hKTAPjzlo7Kyh/Project2?node-id=148-129&t=2XGZSOGqR6s5WfpV-0",
      caseStudy: {
        problem: "Users needed a unified mobile-first interface system for managing complex workflow tasks without cognitive overload.",
        solution: "Established a scalable Figma design system with clear typography scales, atomic UI components, and interactive prototypes.",
        personas: ["Mobile Users seeking fast on-the-go actions", "Power Users needing comprehensive dashboard views"],
        wireframes: ["Low-Fidelity Mobile Screen Sketches", "Interactive Figma Prototype Flows", "Atomic Design System Tokens"],
        colorPalette: [
          { name: "Electric Indigo", hex: "#6366f1" },
          { name: "Cyan Spark", hex: "#06b6d4" },
          { name: "Dark Slate Surface", hex: "#0f172a" },
          { name: "Pure White Card", hex: "#ffffff" }
        ],
        typography: "Inter Sans-Serif (Modular Type Scale: 12px - 36px)",
        impact: [
          "100% reusable design component library created in Figma",
          "Seamless responsive breakpoints for mobile and desktop",
          "Interactive prototype validated with usability testing"
        ]
      }
    },
    {
      id: "promissory-note",
      category: "💻 Web Development & UX",
      categoryKey: "web",
      categoryClass: "web",
      image: promissory,
      title: "Promissory Note Management System",
      description:
        "A web-based digital platform that automates the submission, approval workflow, real-time notifications, and analytics of promissory notes.",
      tech: ["React.js", "Firebase", "JavaScript", "Bootstrap", "Figma"],
      type: "github",
      link: "https://github.com/Juvyjuvy/promissory-note",
      caseStudy: {
        problem: "Manual paper-based promissory submissions caused delays, lost tracking records, and unorganized student records.",
        solution: "Designed and engineered an automated React + Firebase platform featuring real-time dashboard analytics and instant status updates.",
        personas: ["Students submitting promissory requests", "Department Administrators reviewing approvals"],
        wireframes: ["Paper-to-Digital Process Mapping", "Admin Approval Dashboard Wireframes", "Notification Flow"],
        colorPalette: [
          { name: "Trust Blue", hex: "#2563eb" },
          { name: "Success Emerald", hex: "#10b981" },
          { name: "Background Light", hex: "#f8fafc" }
        ],
        typography: "Poppins & Inter (Clean Academic Interface)",
        impact: [
          "Digitized 100% of physical promissory workflows during capstone",
          "Real-time Firebase notification sync",
          "Intuitive step-by-step submission wizard reducing errors"
        ]
      }
    },
    {
      id: "fire-alarm",
      category: "💻 Web Development",
      categoryKey: "web",
      categoryClass: "web",
      image: firealarm,
      title: "Smart Fire Alarm System",
      description:
        "Real-time sensor-driven emergency alert web application providing instant safety notifications and hardware telemetry monitoring.",
      tech: ["React.js", "Firebase", "JavaScript", "IoT Integration"],
      type: "github",
      link: "https://github.com/Juvyjuvy/SMARTFIREALARM",
      caseStudy: {
        problem: "Traditional alarm systems lack immediate digital notification triggers and remote status monitoring.",
        solution: "Built a high-priority dashboard UI in React connecting real-time sensor events to instant visual & audible alerts.",
        personas: ["Building Administrators", "Safety Responders"],
        wireframes: ["Status Overview Screen", "Alert Trigger Modal", "Historical Event Log"],
        colorPalette: [
          { name: "Emergency Red", hex: "#ef4444" },
          { name: "Warning Amber", hex: "#f59e0b" },
          { name: "Slate Neutral", hex: "#1e293b" }
        ],
        typography: "Inter Bold (High Visibility Emergency Typography)",
        impact: [
          "Instant sensor data sync via Firebase Realtime DB",
          "Sub-second alert trigger interface design"
        ]
      }
    },
    {
      id: "grocery-app",
      category: "💻 Web Development",
      categoryKey: "web",
      categoryClass: "web",
      image: grocery,
      title: "Grocery List Application",
      description:
        "A responsive grocery organizer featuring budget calculation, category sorting, and instant list persistence.",
      tech: ["React.js", "HTML5", "CSS3", "JavaScript"],
      type: "github",
      link: "https://github.com/Juvyjuvy/grocery-app",
      caseStudy: {
        problem: "Shoppers struggle to organize item lists quickly while keeping track of total estimated expenses.",
        solution: "Crafted a clean, frictionless UI with one-tap item check-off and automatic total price aggregation.",
        personas: ["Everyday Shoppers", "Budget-Conscious Households"],
        wireframes: ["Quick Add Bar Sketch", "Item Card List Layout"],
        colorPalette: [
          { name: "Fresh Green", hex: "#16a34a" },
          { name: "Warm Off-White", hex: "#fef3c7" }
        ],
        typography: "Poppins (Friendly & Legible UI)",
        impact: ["Fast keyboard navigation & instant local storage sync"]
      }
    },
    {
      id: "graphic-design-collection",
      category: "🖌 Graphic Design",
      categoryKey: "graphic",
      categoryClass: "graphic",
      image: graphicDesign,
      title: "Branding & Graphic Design Collection",
      description:
        "Comprehensive collection of logos, promotional posters, social media banners, tarpaulins, and brand identity assets.",
      tech: ["Photoshop", "Illustrator", "Canva", "Branding"],
      type: "pdf",
      link: "/files/Graphic-Design-Portfolio.pdf",
      caseStudy: {
        problem: "Outsourcing clients needed high-impact visual media for brand campaigns and event promotion.",
        solution: "Produced vector branding, promotional social graphics, and marketing materials aligned with brand guidelines.",
        personas: ["Marketing Managers", "Social Media Audiences"],
        wireframes: ["Mood boards", "Color harmony palettes", "Banner layout grids"],
        colorPalette: [
          { name: "Vibrant Cyan", hex: "#06b6d4" },
          { name: "Accent Coral", hex: "#f43f5e" }
        ],
        typography: "Custom Headline Typography & Brand Fonts",
        impact: ["Delivered marketing materials during Triangle Outsourcing internship"]
      }
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.categoryKey === filter);

  return (
    <section className="projects" id="projects">
      <div className="container">

        <h2 className="section-title">Featured Work & UX Case Studies</h2>
        <p className="section-subtitle">
          A showcase of UI/UX Design Case Studies, Web Applications, and Visual Design.
        </p>

        {/* Category Filters */}
        <div className="projects-filter-bar">
          <button 
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Work ({projects.length})
          </button>
          <button 
            className={`filter-btn ${filter === "ui" ? "active" : ""}`}
            onClick={() => setFilter("ui")}
          >
            🎨 UI/UX Case Studies
          </button>
          <button 
            className={`filter-btn ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            💻 Web Development
          </button>
          <button 
            className={`filter-btn ${filter === "graphic" ? "active" : ""}`}
            onClick={() => setFilter("graphic")}
          >
            🖌 Graphic Design
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>

              <div className="project-image" onClick={() => setSelectedProject(project)}>
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <span>View Details & UX Case Study</span>
                </div>
              </div>

              <div className="project-content">
                <span className={`project-category ${project.categoryClass}`}>
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <button 
                    className="btn btn-case-study" 
                    onClick={() => setSelectedProject(project)}
                  >
                    Read Case Study
                  </button>

                  {project.type === "figma" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-outline">
                      Figma
                    </a>
                  )}

                  {project.type === "github" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-outline">
                      GitHub
                    </a>
                  )}

                  {project.type === "pdf" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-outline">
                      View PDF
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Popup */}
      {selectedProject && (
        <CaseStudyModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}

export default Projects;