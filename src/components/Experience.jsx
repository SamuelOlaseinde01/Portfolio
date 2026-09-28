import React from "react";
import { motion } from "framer-motion";
import {
  Work,
  School,
  CalendarMonth,
  LocationOn,
  CheckCircle,
} from "@mui/icons-material";

export default function Experience() {
  const experiences = [
    {
      title: "Student Intern & CSS Instructor",
      company: "Century Gateways Nigeria Limited",
      employmentType: "Internship",
      period: "Aug 2025 – Sep 2025 · 2 mos",
      location: "Ado-Ekiti, Ekiti State, Nigeria · On-site",
      description:
        "Returned as a Student Intern & CSS Instructor for a subsequent internship term. Led instruction on advanced and foundational CSS, guiding interns in building scalable frontend architectures, responsive design, and CSS layouts.",
      highlights: [
        "Delivered hands-on lectures on modern CSS techniques, Flexbox, Grid, and responsive UI principles",
        "Guided interns through practical web development assignments and live code troubleshooting",
        "Mentored students on clean code habits and cross-device interface consistency",
      ],
      skills: [
        "CSS3",
        "Flexbox & Grid",
        "Front-End Development",
        "Technical Instruction",
        "Mentorship",
      ],
    },
    {
      title: "Student Intern & CSS Instructor",
      company: "Century Gateways Nigeria Limited",
      employmentType: "Internship",
      period: "Aug 2024 – Sep 2024 · 2 mos",
      location: "Ado-Ekiti, Ekiti State, Nigeria · On-site",
      description:
        "Served as CSS Instructor during a 6-week student internship program. Taught fellow interns CSS fundamentals including selectors, Flexbox, Grid, and responsive design through hands-on practical sessions.",
      highlights: [
        "Taught fundamentals of web layout design, selectors, and responsive breakpoints",
        "Conducted interactive lab sessions and guided beginner interns in building their first web interfaces",
        "Strengthened technical communication, curriculum planning, and collaborative problem-solving",
      ],
      skills: [
        "CSS Fundamentals",
        "Responsive Web Design",
        "Front-End Development",
        "Communication",
        "Teaching",
      ],
    },
  ];

  const educations = [
    {
      degree: "Bachelor of Science (BS), Computer Science",
      institution: "Federal University Oye-Ekiti",
      period: "Jan 2023 – Jun 2026",
      location: "Ekiti State, Nigeria",
      description:
        "Pursued comprehensive undergraduate studies in Computer Science, covering foundational computing theory, software engineering principles, algorithms, and practical application development.",
      highlights: [
        "Focus Areas: Front-End Design, Web Application Development & Data Structures",
        "Studying Machine Learning workflows, statistical computing, and algorithmic problem-solving",
        "Active participation in technical projects and collaborative development sprints",
      ],
      skills: [
        "Computer Science Theory",
        "Algorithms & Data Structures",
        "Full-Stack Web Dev",
        "Machine Learning Basics",
      ],
    },
  ];

  return (
    <section id="section-experience" className="section-experience">
      <div className="ambient-glow glow-exp"></div>

      <div className="section-header-wrap">
        <span className="section-subtitle">Career & Education</span>
        <h2 className="section-title">Experience & Academic Journey</h2>
        <div className="section-title-bar"></div>
        <p className="section-header-desc">
          My professional background, instructional experience, and formal
          education in computer science.
        </p>
      </div>

      <div className="experience-container">
        <div className="experience-grid">
          {/* Work Experience Column */}
          <motion.div
            className="timeline-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="column-header">
              <div className="column-icon-box exp-icon-box">
                <Work />
              </div>
              <h3>Professional Experience</h3>
            </div>

            <div className="timeline-cards-list">
              {experiences.map((item, index) => (
                <div key={index} className="timeline-card exp-card">
                  <div className="timeline-card-header">
                    <div className="role-company-wrap">
                      <h4 className="timeline-role">{item.title}</h4>
                      <div className="timeline-company">
                        <span>{item.company}</span>
                        <span className="badge-type">
                          {item.employmentType}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-meta-bar">
                    <span className="meta-item">
                      <CalendarMonth fontSize="small" />
                      {item.period}
                    </span>
                    <span className="meta-item">
                      <LocationOn fontSize="small" />
                      {item.location}
                    </span>
                  </div>

                  <p className="timeline-desc">{item.description}</p>

                  <div className="timeline-highlights">
                    <h5>Key Contributions:</h5>
                    <ul>
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx}>
                          <CheckCircle className="feat-check" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="timeline-skills">
                    {item.skills.map((s, sIdx) => (
                      <span key={sIdx} className="tech-badge">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            className="timeline-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="column-header">
              <div className="column-icon-box edu-icon-box">
                <School />
              </div>
              <h3>Education & Qualifications</h3>
            </div>

            <div className="timeline-cards-list">
              {educations.map((item, index) => (
                <div key={index} className="timeline-card edu-card">
                  <div className="timeline-card-header">
                    <div className="role-company-wrap">
                      <h4 className="timeline-role">{item.degree}</h4>
                      <div className="timeline-company">
                        <span>{item.institution}</span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-meta-bar">
                    <span className="meta-item">
                      <CalendarMonth fontSize="small" />
                      {item.period}
                    </span>
                    <span className="meta-item">
                      <LocationOn fontSize="small" />
                      {item.location}
                    </span>
                  </div>

                  <p className="timeline-desc">{item.description}</p>

                  <div className="timeline-highlights">
                    <h5>Academic Focus & Activities:</h5>
                    <ul>
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx}>
                          <CheckCircle className="feat-check" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="timeline-skills">
                    {item.skills.map((s, sIdx) => (
                      <span key={sIdx} className="tech-badge">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
