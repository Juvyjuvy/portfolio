import React from "react";
import "./About.css";
import profile from "../../assets/images/profile.png";
import { FaPalette, FaCode, FaAward, FaDownload } from "react-icons/fa";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about user experience design, interfaces, and front-end engineering.
          </p>
        </div>

        <div className="about-container">

          {/* Left Side Avatar */}
          <div className="about-image">
            <img src={profile} alt="Juvy Aballe" />
          </div>

          {/* Right Side Description */}
          <div className="about-content">

            <h3>UI/UX Designer & React Frontend Developer</h3>

            <p>
              Hi! I'm <strong>Juvy E. Aballe Jr.</strong>, a Bachelor of Science
              in Information Technology graduate specializing in <strong>UI/UX Design</strong> and <strong>React.js Frontend Development</strong>.
            </p>

            <p>
              I bridge the gap between creative visual design and responsive code. Using <strong>Figma</strong>, I design user flows, wireframes, component systems, and high-fidelity interactive prototypes. Then, I translate those designs into clean, modular, and maintainable <strong>React.js</strong> web applications.
            </p>

            <p>
              During my internship at <strong>Triangle Outsourcing Corporation</strong>,
              I gained practical experience designing promotional media, conducting client lead generation, managing hardware troubleshooting, and supporting digital operations.
            </p>

            <p>
              I also hold a <strong>TOPCIT Level 2 Certification</strong> (Score: <strong>251</strong>), demonstrating verified competency in software engineering, database management, and problem-solving.
            </p>

            {/* Quick Info Grid */}
            <div className="about-info">

              <div>
                <span>Full Name</span>
                <h4>Juvy E. Aballe Jr.</h4>
              </div>

              <div>
                <span>Primary Discipline</span>
                <h4>UI/UX & React Frontend</h4>
              </div>

              <div>
                <span>Location</span>
                <h4>Iligan City, Philippines</h4>
              </div>

              <div>
                <span>Work Availability</span>
                <h4>Available for Opportunities</h4>
              </div>

            </div>

            <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noreferrer">
              <FaDownload /> Download CV
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;