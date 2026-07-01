import "./Projects.css";

import promissory from "../../assets/images/Projects/promissory-system.png";
import firealarm from "../../assets/images/Projects/fire-alarm.png";
import grocery from "../../assets/images/Projects/grocery-app.png";

function Projects() {
  const projects = [
    {
      image: promissory,
      title: "Data-Driven Promissory Note Management System",
      description:
        "A web-based system that digitalizes the submission, approval, notification, and analytics of promissory notes. Developed as our capstone project.",
      tech: [
        "React.js",
        "Firebase",
        "JavaScript",
        "Bootstrap",
        "Figma",
      ],
      github: "https://github.com/Juvyjuvy/promissory-note",
      demo: "#",
    },
    {
      image: firealarm,
      title: "Smart Fire Alarm",
      description:
        "A fire safety monitoring system with real-time notifications and sensor-based detection designed to improve emergency response.",
      tech: [
        "React.js",
        "Firebase",
        "JavaScript",
      ],
      github: "https://github.com/Juvyjuvy/SMARTFIREALARM",
      demo: "#",
    },
    {
      image: grocery,
      title: "Grocery List Application",
      description:
        "A responsive grocery list application that allows users to manage shopping lists, organize products, and improve shopping efficiency.",
      tech: [
        "React.js",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "https://github.com/Juvyjuvy/grocery-app",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">

        <h2 className="section-title">Projects</h2>

        <p className="section-subtitle">
          Some of my academic and personal projects.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">

                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}

                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    Live Demo
                  </a>

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