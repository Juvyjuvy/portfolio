import "./Skills.css";

function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      tagline: "Building interfaces people actually enjoy using.",
      items: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
      ],
    },
    {
      title: "Programming",
      tagline: "Server-side logic and databases that hold up.",
      items: [
        "PHP",
        "Java",
        "MySQL",
      ],
    },
    {
      title: "UI/UX Design",
      tagline: "Designing with the user's flow in mind first.",
      items: [
        "Figma",
      ],
    },
    {
      title: "Tools",
      tagline: "The everyday stack that keeps projects moving.",
      items: [
        "Git/GitHub",
        "Visual Studio Code",
        "Firebase",
      ],
    },
    {
      title: "Other Skills",
      tagline: "Practical, hands-on know-how beyond code.",
      items: [
        "Responsive Web Design",
        "Graphic Design",
        "Computer Maintenance",
        "PC Cleaning",
        "Lead Generation",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">

        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools that I use.
        </p>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="card-inner">

                <div className="card-front">
                  <h3>{skill.title}</h3>
                  <ul>
                    {skill.items.map((item, i) => (
                      <li key={i}>✔ {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-back">
                  <h3>{skill.title}</h3>
                  <p>{skill.tagline}</p>
                  <span className="card-count">
                    {skill.items.length} skill{skill.items.length > 1 ? "s" : ""}
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;