import React, { useState } from "react";
import { FaCopy, FaCheck, FaPalette, FaSlidersH, FaMagic, FaRegSmile } from "react-icons/fa";
import "./DesignLab.css";

function DesignLab() {
  const [copiedHex, setCopiedHex] = useState(null);
  const [activeTheme, setActiveTheme] = useState("blue");
  const [toggleActive, setToggleActive] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const colorTokens = [
    { label: "Primary Brand", varName: "--primary", hex: "#2563eb" },
    { label: "Accent Highlight", varName: "--accent", hex: "#38bdf8" },
    { label: "Deep Slate Text", varName: "--secondary", hex: "#1e293b" },
    { label: "Surface Light", varName: "--background", hex: "#f8fafc" },
    { label: "Success Green", varName: "--success", hex: "#10b981" },
  ];

  const themes = [
    { id: "blue", name: "Electric Blue", primary: "#2563eb", accent: "#38bdf8" },
    { id: "purple", name: "Violet Dream", primary: "#7c3aed", accent: "#c084fc" },
    { id: "emerald", name: "Emerald Mint", primary: "#059669", accent: "#34d399" },
    { id: "rose", name: "Vibrant Rose", primary: "#e11d48", accent: "#fb7185" },
  ];

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const applyTheme = (theme) => {
    setActiveTheme(theme.id);
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--accent", theme.accent);
  };

  const simulateLoading = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 1500);
  };

  return (
    <section className="design-lab" id="ux-lab">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <FaMagic /> Live UI/UX Playground
          </span>
          <h2 className="section-title">Interactive Design System Lab</h2>
          <p className="section-subtitle">
            Explore design tokens, color dynamics, and UI micro-interactions live in browser.
          </p>
        </div>

        <div className="lab-grid">
          
          {/* Theme Switcher & Color Tokens */}
          <div className="lab-card">
            <div className="lab-card-header">
              <FaPalette className="lab-icon" />
              <h3>Dynamic Theme Switcher</h3>
            </div>
            <p className="lab-card-desc">
              Test how color tokens adapt dynamically across the entire portfolio UI in real time.
            </p>

            <div className="theme-selector">
              {themes.map((t) => (
                <button
                  key={t.id}
                  className={`theme-chip ${activeTheme === t.id ? "active" : ""}`}
                  onClick={() => applyTheme(t)}
                  style={{ "--chip-color": t.primary }}
                >
                  <span className="dot" style={{ backgroundColor: t.primary }}></span>
                  {t.name}
                </button>
              ))}
            </div>

            <div className="color-tokens-list">
              <h4>Design Token Palette</h4>
              {colorTokens.map((token, idx) => (
                <div key={idx} className="token-row">
                  <div className="token-swatch" style={{ backgroundColor: token.hex }}></div>
                  <div className="token-info">
                    <span className="token-label">{token.label}</span>
                    <span className="token-var">{token.varName}</span>
                  </div>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard(token.hex)}
                    title="Copy hex color"
                  >
                    {copiedHex === token.hex ? <FaCheck className="copied" /> : <FaCopy />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Micro-Interactions & Components Lab */}
          <div className="lab-card">
            <div className="lab-card-header">
              <FaSlidersH className="lab-icon" />
              <h3>UI Micro-Interactions</h3>
            </div>
            <p className="lab-card-desc">
              Hands-on preview of interactive states, accessibility cues, and component feedback.
            </p>

            {/* Interactive Buttons */}
            <div className="lab-subgroup">
              <h4>Stateful Button Components</h4>
              <div className="button-group">
                <button className="btn btn-primary-demo" onClick={simulateLoading} disabled={buttonLoading}>
                  {buttonLoading ? <span className="spinner"></span> : "Trigger Action"}
                </button>
                <button className="btn btn-outline-demo">Outline State</button>
              </div>
            </div>

            {/* Interactive Toggle */}
            <div className="lab-subgroup">
              <h4>Accessible Toggle Switch</h4>
              <div className="toggle-wrapper" onClick={() => setToggleActive(!toggleActive)}>
                <div className={`switch-track ${toggleActive ? "on" : "off"}`}>
                  <div className="switch-thumb"></div>
                </div>
                <span className="toggle-label">
                  Component State: <strong>{toggleActive ? "Active / Enabled" : "Disabled"}</strong>
                </span>
              </div>
            </div>

            {/* Typography Scale Slider */}
            <div className="lab-subgroup">
              <h4>Fluid Typography Scaling</h4>
              <div className="slider-wrapper">
                <input
                  type="range"
                  min="14"
                  max="24"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                />
                <span>{fontSize}px</span>
              </div>
              <p className="typography-preview" style={{ fontSize: `${fontSize}px` }}>
                User experience thrives at the intersection of clarity and delight. <FaRegSmile />
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DesignLab;
