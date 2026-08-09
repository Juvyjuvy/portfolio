import React, { useState } from "react";
import { FaCode, FaLaptopCode, FaCheck, FaCopy, FaPaperPlane, FaMobileAlt, FaShoppingBag, FaChartLine } from "react-icons/fa";
import "./FrontendIcebreaker.css";

function FrontendIcebreaker() {
  const [appType, setAppType] = useState("dashboard"); // dashboard | ecommerce | mobile
  const [theme, setTheme] = useState("indigo"); // indigo | neon | emerald | sunset
  const [enableAnimations, setEnableAnimations] = useState(true);
  const [enableDarkMode, setEnableDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("preview"); // preview | code
  const [copied, setCopied] = useState(false);

  const themes = {
    indigo: { primary: "#2563eb", accent: "#38bdf8", bg: "#f8fafc", cardBg: "#ffffff", text: "#0f172a" },
    neon: { primary: "#8b5cf6", accent: "#f43f5e", bg: "#0f172a", cardBg: "#1e293b", text: "#f8fafc" },
    emerald: { primary: "#059669", accent: "#34d399", bg: "#f0fdf4", cardBg: "#ffffff", text: "#064e3b" },
    sunset: { primary: "#ea580c", accent: "#fbbf24", bg: "#fff7ed", cardBg: "#ffffff", text: "#431407" },
  };

  const currentTheme = themes[theme];

  const codeSnippet = `// Custom ${appType.toUpperCase()} Component built with React.js
import React, { useState } from "react";

export default function CustomApp() {
  const [data, setData] = useState({ active: true, theme: "${theme}" });

  return (
    <div style={{ backgroundColor: "${currentTheme.bg}", color: "${currentTheme.text}" }}>
      <header className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">${appType.toUpperCase()} App</h2>
        <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "${currentTheme.primary}", color: "#fff" }}>
          Live Status: Active
        </span>
      </header>
      <main className="p-6">
        <p className="text-sm">Engineered with pixel-perfect React & smooth interactions.</p>
      </main>
    </div>
  );
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="icebreaker" id="frontend-lab">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="icebreaker-badge">
            <FaLaptopCode /> Client Icebreaker & Live Frontend Demo
          </span>
          <h2 className="section-title">Test My Frontend Capabilities Live</h2>
          <p className="section-subtitle">
            Configure a custom application interface below to experience real-time React state management and design adaptability.
          </p>
        </div>

        <div className="icebreaker-box">

          {/* Left Controls Column */}
          <div className="controls-column">
            
            <div className="control-group">
              <label>1. Select App Concept</label>
              <div className="option-grid">
                <button
                  className={`option-btn ${appType === "dashboard" ? "active" : ""}`}
                  onClick={() => setAppType("dashboard")}
                >
                  <FaChartLine /> Analytics Dashboard
                </button>
                <button
                  className={`option-btn ${appType === "ecommerce" ? "active" : ""}`}
                  onClick={() => setAppType("ecommerce")}
                >
                  <FaShoppingBag /> E-Commerce Store
                </button>
                <button
                  className={`option-btn ${appType === "mobile" ? "active" : ""}`}
                  onClick={() => setAppType("mobile")}
                >
                  <FaMobileAlt /> Mobile App UI
                </button>
              </div>
            </div>

            <div className="control-group">
              <label>2. Choose Design Theme</label>
              <div className="theme-options">
                {Object.keys(themes).map((tKey) => (
                  <button
                    key={tKey}
                    className={`theme-circle-btn ${theme === tKey ? "active" : ""}`}
                    onClick={() => setTheme(tKey)}
                    style={{ backgroundColor: themes[tKey].primary }}
                    title={`${tKey.toUpperCase()} Theme`}
                  >
                    {theme === tKey && <FaCheck />}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <label>3. Interactive Toggles</label>
              <div className="toggle-list">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={enableAnimations}
                    onChange={(e) => setEnableAnimations(e.target.checked)}
                  />
                  <span>Micro-Animations & Hover Motion</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={enableDarkMode}
                    onChange={(e) => setEnableDarkMode(e.target.checked)}
                  />
                  <span>Dark Mode Preview Mode</span>
                </label>
              </div>
            </div>

            <div className="icebreaker-cta">
              <p>Like this live dynamic architecture?</p>
              <a href="#contact" className="btn btn-ice-primary">
                <FaPaperPlane /> Hire Juvy for your Project
              </a>
            </div>

          </div>

          {/* Right Live Preview & Code Column */}
          <div className="preview-column">
            
            <div className="preview-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>

              <div className="preview-tabs">
                <button
                  className={`tab ${activeTab === "preview" ? "active" : ""}`}
                  onClick={() => setActiveTab("preview")}
                >
                  <FaLaptopCode /> Live Interactive UI
                </button>
                <button
                  className={`tab ${activeTab === "code" ? "active" : ""}`}
                  onClick={() => setActiveTab("code")}
                >
                  <FaCode /> Clean React Code
                </button>
              </div>
            </div>

            <div className="preview-body">
              {activeTab === "preview" ? (
                <div
                  className={`dynamic-ui-container ${enableDarkMode ? "dark-override" : ""} ${enableAnimations ? "animated" : ""}`}
                  style={{
                    backgroundColor: enableDarkMode ? "#0f172a" : currentTheme.bg,
                    color: enableDarkMode ? "#ffffff" : currentTheme.text,
                  }}
                >
                  {/* Dynamic UI Content Rendering */}
                  {appType === "dashboard" && (
                    <div className="ui-dashboard">
                      <div className="ui-nav" style={{ borderColor: currentTheme.primary }}>
                        <strong>⚡ Analytics Pro Dashboard</strong>
                        <span className="status-pill" style={{ backgroundColor: currentTheme.primary }}>Active</span>
                      </div>
                      <div className="ui-stats-row">
                        <div className="ui-card" style={{ backgroundColor: enableDarkMode ? "#1e293b" : currentTheme.cardBg }}>
                          <span>Total Visitors</span>
                          <h3>24,520</h3>
                          <small style={{ color: "#10b981" }}>+14% this month</small>
                        </div>
                        <div className="ui-card" style={{ backgroundColor: enableDarkMode ? "#1e293b" : currentTheme.cardBg }}>
                          <span>Conversion Rate</span>
                          <h3>4.8%</h3>
                          <small style={{ color: currentTheme.primary }}>Optimal UX</small>
                        </div>
                      </div>
                      <div className="ui-chart-box" style={{ backgroundColor: enableDarkMode ? "#1e293b" : currentTheme.cardBg }}>
                        <span>Realtime Traffic Volume</span>
                        <div className="bar-chart">
                          <div className="bar" style={{ height: "40%", backgroundColor: currentTheme.accent }}></div>
                          <div className="bar" style={{ height: "70%", backgroundColor: currentTheme.primary }}></div>
                          <div className="bar" style={{ height: "55%", backgroundColor: currentTheme.accent }}></div>
                          <div className="bar" style={{ height: "90%", backgroundColor: currentTheme.primary }}></div>
                          <div className="bar" style={{ height: "65%", backgroundColor: currentTheme.accent }}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {appType === "ecommerce" && (
                    <div className="ui-ecommerce">
                      <div className="ui-nav">
                        <strong>🛍️ Modern Storefront</strong>
                        <span className="cart-badge" style={{ backgroundColor: currentTheme.primary }}>3 Items</span>
                      </div>
                      <div className="product-grid">
                        {[1, 2].map((item) => (
                          <div key={item} className="product-card" style={{ backgroundColor: enableDarkMode ? "#1e293b" : currentTheme.cardBg }}>
                            <div className="product-img-placeholder" style={{ backgroundColor: currentTheme.accent }}>
                              Product #{item}
                            </div>
                            <h4>Minimalist Smartwatch</h4>
                            <span className="price" style={{ color: currentTheme.primary }}>$199.00</span>
                            <button className="add-btn" style={{ backgroundColor: currentTheme.primary }}>Add to Cart</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {appType === "mobile" && (
                    <div className="ui-mobile-wrapper">
                      <div className="mobile-frame" style={{ borderColor: currentTheme.primary, backgroundColor: enableDarkMode ? "#1e293b" : "#ffffff" }}>
                        <div className="mobile-header" style={{ backgroundColor: currentTheme.primary, color: "white" }}>
                          <span>9:41 AM</span>
                          <strong>Mobile UX Flow</strong>
                        </div>
                        <div className="mobile-content">
                          <div className="avatar-chip">Welcome Back, Juvy! 👋</div>
                          <div className="widget-card" style={{ backgroundColor: currentTheme.bg, color: currentTheme.text }}>
                            <span>Today's Goal</span>
                            <h4>Seamless Frontend React Code</h4>
                          </div>
                          <button className="mobile-action-btn" style={{ backgroundColor: currentTheme.primary, color: "white" }}>
                            Explore Features
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              ) : (
                <div className="code-view-container">
                  <div className="code-actions">
                    <span>JSX / React Component</span>
                    <button className="copy-code-btn" onClick={copyCode}>
                      {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy Code</>}
                    </button>
                  </div>
                  <pre className="code-block">
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FrontendIcebreaker;
