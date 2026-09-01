import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPalette, FaLaptopCode, FaMoon, FaSun, FaGamepad } from "react-icons/fa";
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

        {/* Backdrop for mobile menu overlay */}
        {menuOpen && <div className="nav-backdrop" onClick={closeMenu}></div>}

        {/* Navigation Menu */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#frontend-lab" onClick={closeMenu} className="nav-highlight">
            <FaLaptopCode /> Live Demo
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#ux-lab" onClick={closeMenu}>
            <FaPalette /> UX Lab
          </a>

          <a href="#quiz-game" onClick={closeMenu} className="game-nav-btn">
            <FaGamepad /> Quiz Game
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          {/* Dark Mode Toggle Button */}
          <button
            className="theme-toggle-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
          </button>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Resume
          </a>
        </nav>

        {/* Mobile Action Controls */}
        <div className="mobile-controls">
          <button
            className="theme-toggle-btn mobile-theme-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
          </button>
          
          <button 
            className="menu-icon" 
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;