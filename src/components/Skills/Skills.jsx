import "./Skills.css";

function Skills() {
  const skills = [
    {
      title: "Frontend Development",
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
      items: [
        "PHP",
        "Java",
        "MySQL",
      ],
    },
    {
      title: "UI/UX Design",
      items: [
        "Figma",
      ],
    },
    {
      title: "Tools",
      items: [
        "Git/GitHub",
        "Visual Studio Code",
        "Firebase",
      ],
    },
    {
      title: "Other Skills",
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

              <h3>{skill.title}</h3>

              <ul>
                {skill.items.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;