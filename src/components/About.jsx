import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Terminal,
  Psychology,
  AutoAwesome,
  WorkspacePremium,
} from "@mui/icons-material";

export default function About() {
  const highlights = [
    {
      icon: <Terminal className="highlight-icon icon-code" />,
      title: "Full-Stack Development",
      description:
        "Building responsive, reliable frontend interfaces and resilient REST APIs with React, Node.js, Express, and MongoDB.",
    },
    {
      icon: <Psychology className="highlight-icon icon-design" />,
      title: "Machine Learning & AI",
      description:
        "Training and deploying data-driven ML models using Python, Scikit-Learn, and statistical algorithms for predictive insights.",
    },
    {
      icon: <AutoAwesome className="highlight-icon icon-growth" />,
      title: "Intelligent Web Integration",
      description:
        "Connecting trained machine learning pipelines and RESTful inference endpoints directly into intuitive web applications.",
    },
  ];

  return (
    <section id="section-about" className="section-about">
      <div className="ambient-glow glow-3"></div>

      <div className="section-header-wrap">
        <span className="section-subtitle">Get to know me</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-title-bar"></div>
      </div>

      <div className="about-container">
        <div className="about-grid">
          {/* Left: Visual & Interactive Card */}
          <motion.div
            className="about-visual-column"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-image-card">
              <div className="about-image-backdrop"></div>
              <img
                src="/images/Home-image4.png"
                alt="Samuel Olaseinde - Full Stack & ML Developer"
                className="about-illustration"
              />
              <div className="about-badge-card">
                <WorkspacePremium className="badge-icon" />
                <div>
                  <span className="badge-title">Full-Stack & ML</span>
                  <span className="badge-subtitle">Data-Driven Problem Solver</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Key Strengths */}
          <motion.div
            className="about-content-column"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-bio-text">
              <h3 className="about-greeting">
                Hey there! I'm <span className="highlight-text">Samuel Olaseinde</span>
              </h3>
              <p className="bio-lead">
                A software engineer and machine learning practitioner passionate about building scalable, data-driven web systems.
              </p>
              <p className="bio-body">
                I specialize in modern full-stack web development using <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>, paired with <strong>Python</strong> for <strong>Machine Learning</strong> workflows and predictive modeling.
              </p>
              <p className="bio-body">
                My approach bridges software engineering with data science — developing robust backend services, interactive user interfaces, and integrating machine learning pipelines to solve complex real-world challenges.
              </p>
            </div>

            {/* Core Pillars / Strengths */}
            <div className="about-pillars">
              {highlights.map((item, index) => (
                <div key={index} className="pillar-item">
                  <div className="pillar-icon-wrap">{item.icon}</div>
                  <div className="pillar-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="about-actions">
              <a
                href="#section-contact"
                className="btn btn-primary"
              >
                <span>Let's Work Together</span>
              </a>
              <a
                href="#section-home"
                className="btn btn-outline"
                title="Download CV"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume / CV download link: Replace with your actual CV document file in the public folder!");
                }}
              >
                <Download fontSize="small" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
