import "./About.css";
import profile from "../../assets/images/profile.png";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better.
          </p>
        </div>

        <div className="about-container">

          {/* Left Side */}
          <div className="about-image">
            <img src={profile} alt="Juvy Aballe" />
          </div>

          {/* Right Side */}
          <div className="about-content">

            <h3>Frontend Developer & UI/UX Designer</h3>

            <p>
              Hi! I'm <strong>Juvy E. Aballe Jr.</strong>, a Bachelor of Science
              in Information Technology graduate with a passion for building
              modern, responsive, and user-friendly web applications.
            </p>

            <p>
              My primary expertise is in <strong>React.js</strong>, HTML, CSS,
              JavaScript, Bootstrap, and UI/UX design using Figma. I enjoy
              turning creative ideas into functional websites that provide a
              great user experience.
            </p>

            <p>
              During my internship at <strong>Triangle Outsourcing Corporation</strong>,
              I gained experience in graphic design, lead generation, computer
              maintenance, PC cleaning, software installation, and promoting
              company services through online platforms.
            </p>

            <p>
              I also earned a <strong>TOPCIT Level 2 Certification</strong>
              with a score of <strong>256</strong>, demonstrating my practical
              knowledge and competency in Information Technology.
            </p>

            <div className="about-info">

              <div>
                <span>Name</span>
                <h4>Juvy E. Aballe Jr.</h4>
              </div>

              <div>
                <span>Email</span>
                <h4>juvyaballe46@gmail.com</h4>
              </div>

              <div>
                <span>Location</span>
                <h4>Iligan City, Philippines</h4>
              </div>

              <div>
                <span>Status</span>
                <h4>Open for Work</h4>
              </div>

            </div>

            <a href="/resume.pdf" className="btn">
              Download Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;