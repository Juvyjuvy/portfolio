import "./Contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="container">

        <h2 className="section-title">
          Contact Me
        </h2>

        <p className="section-subtitle">
          Feel free to contact me for opportunities or collaborations.
        </p>

        <div className="contact-container">

          {/* Contact Info */}

          <div className="contact-info">

            <div className="contact-card">
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p>juvyaballe46@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <FaPhone />
              <div>
                <h3>Phone</h3>
                <p>09615134642</p>
              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt />
              <div>
                <h3>Location</h3>
                <p>Iligan City, Philippines</p>
              </div>
            </div>

            <div className="contact-social">

              <a href="https://github.com/Juvyjuvy">
                <FaGithub />
              </a>

              <a href="https://www.facebook.com/jayar.aballe.50">
                <FaFacebook />
              </a>

              <a href="https://linkedin.com/in/yourprofile">
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Contact Form */}

          <form className="contact-form">

            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>

            <button
              type="submit"
              className="btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;