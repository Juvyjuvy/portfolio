import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">

        <h2 className="section-title">Experience</h2>

        <p className="section-subtitle">
          My internship and hands-on experience in the IT industry.
        </p>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-date">
                February 2026 – May 2026
              </span>

              <h3>IT Intern</h3>

              <h4>Triangle Outsourcing Corporation</h4>

              <ul>

                <li>
                  Designed marketing materials, social media graphics, and promotional content using Canva and Figma.
                </li>

                <li>
                  Conducted lead generation by researching potential clients and business information.
                </li>

                <li>
                  Shared and promoted company products and services through online platforms and social media.
                </li>

                <li>
                  Performed computer cleaning, preventive maintenance, and basic hardware troubleshooting.
                </li>

                <li>
                  Installed and configured software while providing technical support for computers and office equipment.
                </li>

                <li>
                  Assisted with general IT and administrative tasks assigned by supervisors.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;