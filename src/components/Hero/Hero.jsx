import React from "react";
import "./Hero.css";
import profile from "../../assets/images/profile.png";

import {
  FaFigma,
  FaReact,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaAward,
  FaPencilRuler,
  FaLayerGroup,
  FaIdBadge,
  FaGraduationCap,
  FaCheckCircle
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span>UI/UX Designer & React Developer</span>
          </div>

          <h1 className="hero-title">
            Designing Intuitive Interfaces,<br />
            <span>Building Seamless Code.</span>
          </h1>

          <h2 className="hero-subtitle">
            Hi, I'm <strong>Juvy E. Aballe Jr.</strong>
          </h2>

          <p className="hero-description">
            I craft human-centered digital products through user research, Figma prototyping, and pixel-perfect <strong>React.js</strong> web applications.
          </p>

          {/* Quick Stats Grid */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">251</span>
              <span className="stat-label">TOPCIT Score</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">User-Centered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Figma</span>
              <span className="stat-label">Design Systems</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary-hero">
              <FaLayerGroup /> View UX Case Studies
            </a>

            <a
              href="/resume.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              <FaDownload /> Resume
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/Juvyjuvy" target="_blank" rel="noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/jayar.aballe.50" target="_blank" rel="noreferrer" title="Facebook">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>

        </div>

        {/* Right Image Frame with Extended Lanyard Student ID Card */}
        <div className="hero-image-container">

          {/* Lanyard Strap Extended to Navbar & Swinging ID Pass */}
          <div className="lanyard-wrapper">
            <div className="lanyard-strap">
              <div className="strap-line left">
                <span className="strap-text">JUVY E. ABALLE JR. • UI/UX DESIGNER • REACT DEV</span>
              </div>
              <div className="strap-line right">
                <span className="strap-text">JUVY E. ABALLE JR. • TOPCIT LEVEL 2 CERTIFIED</span>
              </div>
              <div className="lanyard-swivel-ring"></div>
              <div className="lanyard-metal-clip"></div>
            </div>

            {/* Realistic Plastic Student ID Card */}
            <div className="realistic-id-card">
              {/* Card Punch Hole */}
              <div className="id-card-punch-slot"></div>

              {/* Card Header Banner */}
              <div className="id-card-header">
                <div className="id-card-logo">
                  <FaGraduationCap /> <span>IT STUDENT & DEV PASS</span>
                </div>
                <span className="id-topcit-tag">TOPCIT 251</span>
              </div>

              {/* Card Body */}
              <div className="id-card-body">
                <div className="id-photo-wrapper">
                  <img src={profile} alt="Juvy E. Aballe Jr." />
                </div>

                <div className="id-card-details">
                  <h3 className="id-card-name">JUVY E. ABALLE JR.</h3>
                  <p className="id-card-role">UI/UX & React Developer</p>
                  
                  <div className="id-card-meta">
                    <span className="id-no">ID: <strong>2024-IT-0251</strong></span>
                    <span className="id-status"><FaCheckCircle /> VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Card Barcode Footer */}
              <div className="id-card-footer">
                <div className="barcode-lines"></div>
                <span className="barcode-text">*JUVY-ABALLE-UIUX-DEV*</span>
              </div>

              {/* Gloss Reflection Layer */}
              <div className="id-card-gloss"></div>
            </div>
          </div>

          {/* Floating UI Badges */}
          <div className="floating-badge badge-top-left">
            <FaFigma className="badge-icon figma" />
            <div>
              <strong>Figma Prototyping</strong>
              <span>Auto Layout & Wireframing</span>
            </div>
          </div>

          <div className="floating-badge badge-bottom-right">
            <FaReact className="badge-icon react" />
            <div>
              <strong>React.js Frontend</strong>
              <span>Clean Code & Components</span>
            </div>
          </div>

          <div className="floating-badge badge-top-right">
            <FaAward className="badge-icon cert" />
            <div>
              <strong>TOPCIT Certified</strong>
              <span>Level 2 IT Competency</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;