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
  FaLayerGroup
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

        {/* Right Image Frame with Floating UI Badges */}
        <div className="hero-image-container">
          
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

          <div className="hero-frame">
            <img src={profile} alt="Juvy E. Aballe Jr." />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;