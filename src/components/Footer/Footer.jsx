import "./Footer.css";

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Logo */}

        <div className="footer-logo">
          <h2>Juvy<span>.</span></h2>

          <p>
            Frontend Developer | React.js Developer | UI/UX Designer
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certification">Certification</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Socials */}

        <div className="footer-social">

          <h3>Connect With Me</h3>

          <div className="social-icons">

            <a
              href="https://github.com/Juvyjuvy"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/jayar.aballe.50"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:juvyaballe46@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © {year} Juvy E. Aballe Jr. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;