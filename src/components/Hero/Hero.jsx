import "./Hero.css";
import profile from "../../assets/images/profile.png";

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        {/* Left */}

        <div className="hero-content">

          <span className="hero-tag">
            Welcome to my Portfolio 👋
          </span>

          <h1>
            Hi, I'm
            <br />
            <span>Juvy E. Aballe Jr.</span>
          </h1>

          <h3>
            Frontend Developer | React.js Developer | UI/UX Designer
          </h3>

          <p>
            I build modern, responsive, and user-friendly web applications
            using React.js while creating intuitive user experiences through
            clean UI/UX design.
          </p>

          <div className="hero-buttons">

            <a
              href="/resume.pdf"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              <FaDownload />
              Download Resume
            </a>

            <a href="#contact" className="btn btn-outline">
              <FaEnvelope />
              Contact Me
            </a>

          </div>

          <div className="hero-social">

            <a href="https://github.com/yourusername">
              <FaGithub />
            </a>

            <a href="https://facebook.com/yourprofile">
              <FaFacebook />
            </a>

            <a href="https://linkedin.com/in/yourprofile">
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="hero-image">

          <img
            src={profile}
            alt="Juvy"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;