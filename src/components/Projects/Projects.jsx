import "./Projects.css";

import promissory from "../../assets/images/Projects/promissory-system.png";
import firealarm from "../../assets/images/Projects/fire-alarm.png";
import grocery from "../../assets/images/Projects/grocery-app.png";

import figmaUI from "../../assets/images/Projects/figma-ui.png";
import graphicDesign from "../../assets/images/Projects/graphic-design.png";

function Projects() {
  const projects = [
    {
      category: "💻 Web Development",
      categoryClass: "web",
      image: promissory,
      title: "Data-Driven Promissory Note Management System",
      description:
        "A web-based system that digitalizes the submission, approval, notification, and analytics of promissory notes. Developed as our capstone project.",
      tech: ["React.js", "Firebase", "JavaScript", "Bootstrap", "Figma"],
      type: "github",
      link: "https://github.com/Juvyjuvy/promissory-note",
    },

    {
      category: "💻 Web Development",
      categoryClass: "web",
      image: firealarm,
      title: "Smart Fire Alarm",
      description:
        "A smart fire alarm system with real-time notifications and sensor-based fire detection.",
      tech: ["React.js", "Firebase", "JavaScript"],
      type: "github",
      link: "https://github.com/Juvyjuvy/SMARTFIREALARM",
    },

    {
      category: "💻 Web Development",
      categoryClass: "web",
      image: grocery,
      title: "Grocery List Application",
      description:
        "A responsive grocery list application that allows users to organize and manage shopping lists efficiently.",
      tech: ["React.js", "HTML", "CSS", "JavaScript"],
      type: "github",
      link: "https://github.com/Juvyjuvy/grocery-app",
    },

    {
      category: "🎨 UI / UX Design",
      categoryClass: "ui",
      image: figmaUI,
      title: "Mobile & Web UI Designs",
      description:
        "Designed modern and responsive user interfaces in Figma including dashboards, mobile applications, and landing pages.",
      tech: ["Figma", "Prototype", "Auto Layout", "Wireframe"],
      type: "figma",
      link: "https://www.figma.com/design/riXaxhpi8hKTAPjzlo7Kyh/Project2?node-id=148-129&t=2XGZSOGqR6s5WfpV-0",
    },

    {
      category: "🖌 Graphic Design",
      categoryClass: "graphic",
      image: graphicDesign,
      title: "Graphic Design Collection",
      description:
        "Designed logos, social media posters, banners, tarpaulins, product advertisements, and other branding materials.",
      tech: ["Photoshop", "Illustrator", "Canva", "Branding"],
      type: "pdf",
      link: "/files/Graphic-Design-Portfolio.pdf",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">

        <h2 className="section-title">Projects</h2>

        <p className="section-subtitle">
          A collection of my Web Development, UI/UX Design, and Graphic Design
          projects.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
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

                  {project.type === "github" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      GitHub
                    </a>
                  )}

                  {project.type === "figma" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      View Figma
                    </a>
                  )}

                  {project.type === "pdf" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      View Designs
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;