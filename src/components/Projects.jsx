import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Launch,
  GitHub,
  FolderOpen,
  CheckCircle,
  Visibility,
} from "@mui/icons-material";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projectsData = [
    {
      id: "blood-bank",
      title: "Blood Bank Management System",
      category: "fullstack",
      subtitle: "Full-Stack Healthcare Solution",
      description:
        "A comprehensive web application designed to streamline blood bank logistics, donor registration, inventory tracking, and emergency blood requests between hospitals, donors, and recipients.",
      image: "/images/Blood-bank.png",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Responsive CSS"],
      features: [
        "Donor registration & inventory management",
        "Role-based authentication & request approvals",
        "Real-time blood stock availability tracker",
      ],
      liveUrl: "https://prodrivers.netlify.app",
      githubUrl: "https://github.com/SamuelOlaseinde01",
      featured: true,
    },
    {
      id: "prodrivers",
      title: "ProDrivers Company Platform",
      category: "frontend",
      subtitle: "Commercial Driving Services Landing Page",
      description:
        "A sleek, high-converting landing page and booking interface built for a professional driving company with smooth animations, mobile-first responsive architecture, and booking inquiry workflows.",
      image: "/images/Prodrivers-full-screenshot2.png",
      tags: ["JavaScript (ES6+)", "HTML5", "CSS3 Flex/Grid", "Responsive Design", "UI/UX"],
      features: [
        "Modern interactive hero and services showcase",
        "Fully responsive layout across all device viewports",
        "Optimized asset loading & fast page performance",
      ],
      liveUrl: "https://prodrivers.netlify.app",
      githubUrl: "https://github.com/SamuelOlaseinde01",
      featured: true,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="section-projects" className="section-projects">
      <div className="ambient-glow glow-5"></div>

      <div className="section-header-wrap">
        <span className="section-subtitle">Portfolio Showcase</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-title-bar"></div>
        <p className="section-header-desc">
          A selection of real-world web applications and interfaces I've built with a focus on usability, clean code, and performance.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter-bar">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Works ({projectsData.length})
        </button>
        <button
          className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
          onClick={() => setFilter("fullstack")}
        >
          Full-Stack Apps
        </button>
        <button
          className={`filter-btn ${filter === "frontend" ? "active" : ""}`}
          onClick={() => setFilter("frontend")}
        >
          Frontend & UI
        </button>
      </div>

      <div className="projects-container">
        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="project-card"
              >
                {/* Project Image Preview with Overlay */}
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="project-thumbnail"
                  />
                  <div className="project-overlay">
                    <div className="overlay-links">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="overlay-btn preview-btn"
                        title="View Live Demo"
                      >
                        <Launch />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="overlay-btn github-btn"
                        title="View Source Code"
                      >
                        <GitHub />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                  {project.featured && (
                    <span className="featured-ribbon">Featured</span>
                  )}
                </div>

                {/* Project Details */}
                <div className="project-details">
                  <span className="project-subtitle">{project.subtitle}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-key-features">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="feature-bullet">
                        <CheckCircle className="feat-dot" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-tech-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <Launch fontSize="small" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <GitHub fontSize="small" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
