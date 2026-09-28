import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowForward,
  Download,
  Code,
  Psychology,
  AutoAwesome,
} from "@mui/icons-material";

const TITLES = ["Full-Stack Developer", "Machine Learning Engineer"];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentTitle = TITLES[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText === currentTitle) {
          // Pause at complete word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % TITLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex, typingSpeed]);

  const techBadges = [
    "React.js",
    "Python",
    "Machine Learning",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Scikit-Learn",
    "RESTful APIs",
  ];

  return (
    <section id="section-home" className="section-home">
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="home-container">
        <motion.div
          className="home-text-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Availability Pill */}
          <div className="status-pill">
            <span className="pulsing-dot"></span>
            <span>Available for freelance & full-time opportunities</span>
          </div>

          <h1 className="home-title">
            Hi, I'm <span className="highlight-gradient">Samuel Olaseinde</span>
            <div className="home-job-title">
              I build intelligent web applications as a{" "}
              <span className="typed-text-wrapper">
                <span className="typed-text">{displayedText}</span>
                <span className="cursor-blink" />
              </span>
            </div>
          </h1>

          <p className="home-description">
            I specialize in crafting high-performance, user-centric web
            applications using <strong>React</strong>, <strong>Node.js</strong>,
            <strong>Python</strong>, and <strong>Machine Learning</strong>. I
            combine clean, scalable full-stack code with data-driven predictive
            models to deliver powerful digital solutions.
          </p>

          <div className="home-cta-group">
            <a href="#section-projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowForward fontSize="small" />
            </a>
            <a href="#section-contact" className="btn btn-secondary">
              <span>Get In Touch</span>
            </a>
            <a href="#section-about" className="btn btn-outline">
              <Download fontSize="small" />
              <span>Resume</span>
            </a>
          </div>

          {/* Tech stack ticker */}
          <div className="tech-stack-preview">
            <span className="tech-stack-label">Core Technologies:</span>
            <div className="tech-badges-list">
              {techBadges.map((badge, idx) => (
                <span key={idx} className="tech-badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hero Visual Card */}
        <motion.div
          className="home-img-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <div className="hero-card-glow"></div>
          <div className="hero-card-inner">
            <div className="hero-img-box">
              <img
                src="/images/Home-image2.png"
                alt="Samuel Olaseinde - Full Stack & ML Developer"
                className="hero-main-img"
              />
            </div>

            {/* Floating Info Badges */}
            <motion.div
              className="floating-chip chip-top"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="chip-icon code-icon">
                <Code fontSize="small" />
              </div>
              <div className="chip-text">
                <span className="chip-title">Full-Stack Web</span>
                <span className="chip-sub">React & Node.js</span>
              </div>
            </motion.div>

            <motion.div
              className="floating-chip chip-bottom"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="chip-icon design-icon">
                <Psychology fontSize="small" />
              </div>
              <div className="chip-text">
                <span className="chip-title">Machine Learning</span>
                <span className="chip-sub">Intelligent AI Models</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Quick Metrics Banner */}
      <div className="hero-metrics-bar">
        <div className="metric-item">
          <span className="metric-number">MERN + Python</span>
          <span className="metric-label">Full Stack & ML Stack</span>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-item">
          <span className="metric-number">AI & ML</span>
          <span className="metric-label">Predictive & Data Models</span>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-item">
          <span className="metric-number">100%</span>
          <span className="metric-label">Responsive & Scalable</span>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-item">
          <span className="metric-number">Clean</span>
          <span className="metric-label">Maintainable Architecture</span>
        </div>
      </div>
    </section>
  );
}
