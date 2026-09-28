import React, { useState, useEffect, useRef } from "react";
import {
  GitHub,
  LinkedIn,
  Twitter,
  Menu,
  Close,
  ArrowForward,
} from "@mui/icons-material";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("section-home");

  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    closeMobileMenu();

    isClickScrolling.current = true;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Release scroll lock after smooth scrolling finishes
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 850);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // If we are smooth scrolling due to a nav click, do not overwrite the active tab
      if (isClickScrolling.current) return;

      // Check if near top
      if (window.scrollY < 80) {
        setActiveSection("section-home");
        return;
      }

      // Check if near bottom of document
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection("section-contact");
        return;
      }

      const sections = [
        "section-home",
        "section-about",
        "section-services",
        "section-experience",
        "section-projects",
        "section-contact",
      ];

      // Viewport check line: 160px from the top (just below fixed header)
      const triggerLine = 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine && rect.bottom >= triggerLine) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <a
          href="#section-home"
          className="logo"
          onClick={(e) => handleNavClick(e, "section-home")}
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Samuel</span>
          <span className="logo-slash">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a
            href="#section-home"
            className={activeSection === "section-home" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "section-home")}
          >
            Home
          </a>
          <a
            href="#section-about"
            className={activeSection === "section-about" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "section-about")}
          >
            About
          </a>
          <a
            href="#section-services"
            className={activeSection === "section-services" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "section-services")}
          >
            Services
          </a>
          <a
            href="#section-experience"
            className={activeSection === "section-experience" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "section-experience")}
          >
            Experience
          </a>
          <a
            href="#section-projects"
            className={activeSection === "section-projects" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "section-projects")}
          >
            Projects
          </a>
          <a
            href="#section-contact"
            className={activeSection === "section-contact" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "section-contact")}
          >
            Contact
          </a>
        </nav>

        {/* Desktop Right: Socials & CTA */}
        <div className="header-actions">
          <div className="social-links">
            <a
              href="https://github.com/SamuelOlaseinde01"
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              className="social-btn"
            >
              <GitHub fontSize="small" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-olaseinde-isaac-a3717625a/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              className="social-btn"
            >
              <LinkedIn fontSize="small" />
            </a>
            <a
              href="https://x.com/samuelOlaseind2"
              target="_blank"
              rel="noreferrer"
              title="Twitter Profile"
              className="social-btn"
            >
              <Twitter fontSize="small" />
            </a>
          </div>

          <a
            href="#section-contact"
            className="header-cta-btn"
            onClick={(e) => handleNavClick(e, "section-contact")}
          >
            Let's Talk <ArrowForward fontSize="small" className="cta-arrow" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          <a
            href="#section-home"
            className={activeSection === "section-home" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "section-home")}
          >
            Home
          </a>
          <a
            href="#section-about"
            className={activeSection === "section-about" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "section-about")}
          >
            About
          </a>
          <a
            href="#section-services"
            className={activeSection === "section-services" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "section-services")}
          >
            Services
          </a>
          <a
            href="#section-experience"
            className={activeSection === "section-experience" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "section-experience")}
          >
            Experience
          </a>
          <a
            href="#section-projects"
            className={activeSection === "section-projects" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "section-projects")}
          >
            Projects
          </a>
          <a
            href="#section-contact"
            className={activeSection === "section-contact" ? "active" : ""}
            onClick={(e) => handleNavClick(e, "section-contact")}
          >
            Contact
          </a>
        </div>

        <div className="mobile-socials">
          <a
            href="https://github.com/SamuelOlaseinde01"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            onClick={closeMobileMenu}
          >
            <GitHub />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-olaseinde-isaac-a3717625a/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            onClick={closeMobileMenu}
          >
            <LinkedIn />
          </a>
          <a
            href="https://x.com/samuelOlaseind2"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            onClick={closeMobileMenu}
          >
            <Twitter />
          </a>
        </div>

        <a
          href="#section-contact"
          className="header-cta-btn mobile-cta"
          onClick={(e) => handleNavClick(e, "section-contact")}
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
