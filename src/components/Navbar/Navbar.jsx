import React, { useState } from "react";
import { FaBars, FaTimes, FaPalette, FaLaptopCode } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

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

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;