import React from "react";
import {
  KeyboardArrowUp,
  GitHub,
  LinkedIn,
  Twitter,
  Favorite,
} from "@mui/icons-material";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-container">
        <div className="footer-brand">
          <a href="#section-home" className="logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Samuel</span>
            <span className="logo-slash">/&gt;</span>
          </a>
          <p className="footer-tagline">
            Building intuitive, modern, and scalable web solutions with passion
            and precision.
          </p>
        </div>

        <div className="footer-nav">
          <h4>Navigation</h4>
          <div className="footer-links">
            <a href="#section-home">Home</a>
            <a href="#section-about">About</a>
            <a href="#section-services">Services</a>
            <a href="#section-experience">Experience</a>
            <a href="#section-projects">Projects</a>
            <a href="#section-contact">Contact</a>
          </div>
        </div>

        <div className="footer-social-section">
          <h4>Stay Connected</h4>
          <p>Follow my journey and connect with me across platforms.</p>
          <div className="footer-socials">
            <a
              href="https://github.com/SamuelOlaseinde01"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="social-btn"
            >
              <GitHub fontSize="small" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-olaseinde-isaac-a3717625a/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="social-btn"
            >
              <LinkedIn fontSize="small" />
            </a>
            <a
              href="https://x.com/samuelOlaseind2"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
              className="social-btn"
            >
              <Twitter fontSize="small" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Samuel Olaseinde. Built with React &
          Modern CSS.
        </p>
        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Scroll to top of page"
        >
          <span>Back to top</span>
          <KeyboardArrowUp />
        </button>
      </div>
    </footer>
  );
}
