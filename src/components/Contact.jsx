import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Email,
  LocationOn,
  Send,
  LinkedIn,
  GitHub,
  Twitter,
  ContentCopy,
  Check,
  Schedule,
} from "@mui/icons-material";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailAddress = "samuelolaseinde14@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="section-contact" className="section-contact">
      <div className="ambient-glow glow-6"></div>

      <div className="section-header-wrap">
        <span className="section-subtitle">Let's Connect</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-title-bar"></div>
        <p className="section-header-desc">
          Have a project in mind, an opportunity to discuss, or just want to say
          hello? I'd love to hear from you!
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Left: Contact Info Cards */}
          <motion.div
            className="contact-info-column"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-card primary-contact-card">
              <div className="contact-icon-bubble">
                <Email />
              </div>
              <div className="contact-details">
                <span className="contact-label">Email Me Directly</span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="contact-value email-link"
                >
                  {emailAddress}
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
              >
                {copied ? <Check className="text-green" /> : <ContentCopy />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            <div className="contact-card">
              <div className="contact-icon-bubble">
                <LocationOn />
              </div>
              <div className="contact-details">
                <span className="contact-label">Location & Availability</span>
                <span className="contact-value">
                  Nigeria (Available Worldwide / Remote)
                </span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-bubble">
                <Schedule />
              </div>
              <div className="contact-details">
                <span className="contact-label">Response Time</span>
                <span className="contact-value">Within 24 Hours</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="contact-socials-box">
              <h4>Connect On Socials</h4>
              <div className="contact-social-icons">
                <a
                  href="https://github.com/SamuelOlaseinde01"
                  target="_blank"
                  rel="noreferrer"
                  className="social-bubble"
                  title="GitHub"
                >
                  <GitHub />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/samuel-olaseinde-isaac-a3717625a/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-bubble"
                  title="LinkedIn"
                >
                  <LinkedIn />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://x.com/samuelOlaseind2"
                  target="_blank"
                  rel="noreferrer"
                  className="social-bubble"
                  title="Twitter"
                >
                  <Twitter />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Modern Contact Form */}
          <motion.div
            className="contact-form-column"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-card">
              <h3>Send A Message</h3>
              <p>Fill out the form below and I'll get back to you promptly.</p>

              {submitted && (
                <div className="form-alert success">
                  <Check />
                  <span>
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project, timeline, or idea..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send fontSize="small" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
