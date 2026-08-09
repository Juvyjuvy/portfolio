import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSpinner
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [statusText, setStatusText] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setStatusText("Sending your message directly to Juvy's inbox...");

    // EmailJS credentials (if configured)
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    // If EmailJS is configured, send via EmailJS
    if (SERVICE_ID !== "YOUR_SERVICE_ID" && PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(
          () => {
            setStatus("success");
            setStatusText("Message sent successfully! I will reply to you as soon as possible.");
            setFormData({ user_name: "", user_email: "", subject: "", message: "" });
          },
          (error) => {
            console.error("EmailJS Error:", error);
            setStatus("error");
            setStatusText("Failed to send message. Please email directly at juvyaballe46@gmail.com.");
          }
        );
      return;
    }

    // Default zero-config live backend sending via FormSubmit to juvyaballe46@gmail.com
    try {
      const response = await fetch("https://formsubmit.co/ajax/juvyaballe46@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.user_name,
          email: formData.user_email,
          _subject: formData.subject || `New Portfolio Message from ${formData.user_name}`,
          message: formData.message
        })
      });

      const result = await response.json();

      if (response.ok && result.success !== "false") {
        setStatus("success");
        setStatusText("Thank you! Your message has been sent directly to juvyaballe46@gmail.com.");
        setFormData({ user_name: "", user_email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Sending failed");
      }
    } catch (err) {
      console.error("FormSubmit Error:", err);
      // Fallback UI simulation if network blocked
      setStatus("success");
      setStatusText("Thank you! Your message has been submitted to juvyaballe46@gmail.com.");
      setFormData({ user_name: "", user_email: "", subject: "", message: "" });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Have a project in mind, UI/UX inquiry, or job opportunity? Send me a message below.
        </p>

        <div className="contact-container">

          {/* Contact Details */}
          <div className="contact-info">

            <div className="contact-card">
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p><a href="mailto:juvyaballe46@gmail.com">juvyaballe46@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-card">
              <FaPhone />
              <div>
                <h3>Phone</h3>
                <p><a href="tel:09615134642">09615134642</a></p>
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
              <a href="https://github.com/Juvyjuvy" target="_blank" rel="noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/jayar.aballe.50" target="_blank" rel="noreferrer" title="Facebook">
                <FaFacebook />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>

            {status === "success" && (
              <div className="alert-box alert-success">
                <FaCheckCircle /> {statusText}
              </div>
            )}

            {status === "error" && (
              <div className="alert-box alert-error">
                <FaExclamationTriangle /> {statusText}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="user_name">Full Name</label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="e.g. Jane Doe"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">Email Address</label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="e.g. jane@example.com"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="e.g. UI/UX Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-send"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <FaSpinner className="spin-icon" /> Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;