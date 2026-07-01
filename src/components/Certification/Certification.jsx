import "./Certification.css";
import topcit from "../../assets/images/topcit-certificate.png";

function Certification() {
  return (
    <section className="certification" id="certification">
      <div className="container">

        <h2 className="section-title">Certifications</h2>

        <p className="section-subtitle">
          Professional certifications and achievements.
        </p>

        <div className="certification-container">

          <div className="certificate-card">

            <div className="certificate-image">
              <img
                src={topcit}
                alt="TOPCIT Certificate"
              />
            </div>

            <div className="certificate-content">

              <span className="certificate-badge">
                Information Technology
              </span>

              <h3>TOPCIT Level 2 Certification</h3>

              <h4>Score: 256</h4>

              <p>
                Successfully achieved <strong>Level 2</strong> in the
                Test of Practical Competency in ICT (TOPCIT), demonstrating
                practical knowledge and competency in software development,
                databases, networking, system analysis, and problem-solving.
              </p>

              <a
                href={topcit}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                View Certificate
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Certification;