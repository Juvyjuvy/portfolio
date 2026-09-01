import React, { useState, useEffect } from "react";
import { FaCode, FaLaptopCode, FaCheck, FaCopy, FaPaperPlane, FaMobileAlt, FaShoppingBag, FaChartLine } from "react-icons/fa";
import productSmartwatch from "../../assets/images/Products/product-smartwatch.jpg";
import productHeadphones from "../../assets/images/Products/product-headphones.jpg";
import mobileUiReal from "../../assets/images/Products/mobile-ui-real.jpg";
import "./FrontendIcebreaker.css";

function FrontendIcebreaker() {
  const [appType, setAppType] = useState("dashboard"); // dashboard | ecommerce | mobile
  const [theme, setTheme] = useState("indigo"); // indigo | neon | emerald | sunset
  const [enableAnimations, setEnableAnimations] = useState(true);
  const [enableDarkMode, setEnableDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("preview"); // preview | code
  const [copied, setCopied] = useState(false);
  const [isGlobalDark, setIsGlobalDark] = useState(false);

  useEffect(() => {
    const checkDark = () => setIsGlobalDark(document.body.classList.contains("dark-mode"));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const isDark = enableDarkMode || isGlobalDark;

  const themes = {
    indigo: { primary: "#2563eb", accent: "#38bdf8", bg: "#f8fafc", cardBg: "#ffffff", text: "#0f172a" },
    neon: { primary: "#8b5cf6", accent: "#f43f5e", bg: "#0f172a", cardBg: "#1e293b", text: "#f8fafc" },
    emerald: { primary: "#059669", accent: "#34d399", bg: "#f0fdf4", cardBg: "#ffffff", text: "#064e3b" },
    sunset: { primary: "#ea580c", accent: "#fbbf24", bg: "#fff7ed", cardBg: "#ffffff", text: "#431407" },
  };

  const currentTheme = themes[theme];

  const productsList = [
    { id: 1, name: "Minimalist Smartwatch", price: "$199.00", img: productSmartwatch },
    { id: 2, name: "Pro Wireless Headphones", price: "$249.00", img: productHeadphones },
  ];

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
                  className={`dynamic-ui-container ${isDark ? "dark-override" : ""} ${enableAnimations ? "animated" : ""}`}
                  style={{
                    backgroundColor: isDark ? "#0f172a" : currentTheme.bg,
                    color: isDark ? "#ffffff" : currentTheme.text,
                  }}
                >
                  {/* Dynamic UI Content Rendering */}
                  {appType === "dashboard" && (
                    <div className="ui-dashboard">
                      <div className="ui-nav" style={{ borderColor: isDark ? "rgba(56, 189, 248, 0.4)" : currentTheme.primary }}>
                        <strong>⚡ Analytics Pro Dashboard</strong>
                        <span className="status-pill" style={{ backgroundColor: currentTheme.primary, color: "#ffffff" }}>Active</span>
                      </div>
                      <div className="ui-stats-row">
                        <div className="ui-card" style={{ backgroundColor: isDark ? "#1e293b" : currentTheme.cardBg, color: isDark ? "#ffffff" : currentTheme.text, border: isDark ? "1px solid rgba(51, 65, 85, 0.7)" : "1px solid #e2e8f0" }}>
                          <span>Total Visitors</span>
                          <h3>24,520</h3>
                          <small style={{ color: "#10b981", fontWeight: "600" }}>+14% this month</small>
                        </div>
                        <div className="ui-card" style={{ backgroundColor: isDark ? "#1e293b" : currentTheme.cardBg, color: isDark ? "#ffffff" : currentTheme.text, border: isDark ? "1px solid rgba(51, 65, 85, 0.7)" : "1px solid #e2e8f0" }}>
                          <span>Conversion Rate</span>
                          <h3>4.8%</h3>
                          <small style={{ color: isDark ? "#38bdf8" : currentTheme.primary, fontWeight: "600" }}>Optimal UX</small>
                        </div>
                      </div>
                      <div className="ui-chart-box" style={{ backgroundColor: isDark ? "#1e293b" : currentTheme.cardBg, color: isDark ? "#ffffff" : currentTheme.text, border: isDark ? "1px solid rgba(51, 65, 85, 0.7)" : "1px solid #e2e8f0" }}>
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
                      <div className="ui-nav" style={{ borderColor: isDark ? "rgba(56, 189, 248, 0.4)" : currentTheme.primary }}>
                        <strong>🛍️ Modern Storefront</strong>
                        <span className="cart-badge" style={{ backgroundColor: currentTheme.primary, color: "#ffffff" }}>2 Items</span>
                      </div>
                      <div className="product-grid">
                        {productsList.map((prod) => (
                          <div key={prod.id} className="product-card" style={{ backgroundColor: isDark ? "#1e293b" : currentTheme.cardBg, color: isDark ? "#ffffff" : currentTheme.text, border: isDark ? "1px solid rgba(51, 65, 85, 0.7)" : "1px solid #e2e8f0" }}>
                            <div className="product-img-wrapper">
                              <img src={prod.img} alt={prod.name} className="product-img" />
                            </div>
                            <h4>{prod.name}</h4>
                            <span className="price" style={{ color: isDark ? "#38bdf8" : currentTheme.primary, fontWeight: "700" }}>{prod.price}</span>
                            <button className="add-btn" style={{ backgroundColor: currentTheme.primary, color: "#ffffff" }}>Add to Cart</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {appType === "mobile" && (
                    <div className="ui-mobile-wrapper">
                      <div className="real-phone-mockup" style={{ borderColor: currentTheme.primary }}>
                        <div className="phone-screen-container">
                          <img src={mobileUiReal} alt="Real Mobile App UI Flow" className="real-mobile-img" />
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
