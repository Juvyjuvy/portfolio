import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPalette, FaLaptopCode, FaMoon, FaSun, FaGamepad, FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <a href="#home" className="logo">
          Juvy<span>.</span>
          <span className="logo-tag">UI/UX</span>
        </a>

        {/* Inline Desktop Menu Links (Visible on Desktop) */}
        <nav className="desktop-inline-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#frontend-lab" className="nav-highlight">
            <FaLaptopCode /> Live Demo
          </a>
          <a href="#projects">Projects</a>
          <a href="#ux-lab">
            <FaPalette /> UX Lab
          </a>
          <a href="#quiz-game" className="game-nav-btn">
            <FaGamepad /> Quiz Game
          </a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Backdrop for overlay drawer */}
        {menuOpen && <div className="nav-backdrop" onClick={closeMenu}></div>}

        {/* Full Slide-out Drawer (Desktop & Mobile Burger Navigation) */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <div className="drawer-header">
            <a href="#home" className="logo" onClick={closeMenu}>
              Juvy<span>.</span>
              <span className="logo-tag">UI/UX</span>
            </a>
            <button className="drawer-close-btn" onClick={closeMenu} aria-label="Close menu">
              <FaTimes />
            </button>
          </div>

          <div className="drawer-links">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#frontend-lab" onClick={closeMenu} className="nav-highlight">
              <FaLaptopCode /> Live Frontend Demo
            </a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#ux-lab" onClick={closeMenu}>
              <FaPalette /> UX Design Lab
            </a>
            <a href="#quiz-game" onClick={closeMenu} className="game-nav-btn">
              <FaGamepad /> Portfolio Quiz Game
            </a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <div className="drawer-actions">
            {/* Dark Mode Toggle Button */}
            <button
              className="theme-toggle-btn drawer-theme-btn"
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
              <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              className="resume-btn drawer-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Download Resume
            </a>
          </div>

          <div className="drawer-social">
            <a href="https://github.com/Juvyjuvy" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="mailto:juvyaballe46@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </nav>

        {/* Action Controls & Burger Menu Button */}
        <div className="nav-controls">
          <button
            className="theme-toggle-btn desktop-theme-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
          </button>

          <a
            href="/resume.pdf"
            className="resume-btn desktop-resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <button 
            className="menu-icon" 
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            title="Menu Drawer"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;