import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Psychology,
  AutoAwesome,
  CheckCircle,
} from "@mui/icons-material";

export default function Services() {
  const services = [
    {
      id: "web-dev",
      icon: <Code className="service-header-icon" />,
      title: "Full-Stack Web Development",
      badge: "Core Engineering",
      description:
        "Building blazing-fast, responsive, and robust full-stack web applications tailored to real-world user needs.",
      features: [
        "Interactive React.js & Single Page Apps (SPA)",
        "Scalable Node.js & Express RESTful APIs",
        "Database Architecture & Queries with MongoDB",
        "Cross-browser & 100% Mobile Responsive UI",
      ],
      skills: [
        "React.js",
        "JavaScript ES6+",
        "Node.js",
        "Express.js",
        "MongoDB",
        "HTML5/CSS3",
        "REST APIs",
      ],
      accentColor: "indigo",
    },
    {
      id: "machine-learning",
      icon: <Psychology className="service-header-icon" />,
      title: "Machine Learning & AI Modeling",
      badge: "Data Intelligence",
      description:
        "Developing data-driven machine learning models, statistical algorithms, and predictive intelligence pipelines in Python.",
      features: [
        "Predictive Classification, Regression & Clustering",
        "Data Preprocessing & Feature Engineering",
        "Model Training, Validation & Hyperparameter Tuning",
        "Insights Generation & Statistical Analysis",
      ],
      skills: [
        "Python",
        "Machine Learning",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "Data Modeling",
      ],
      accentColor: "purple",
    },
    {
      id: "ai-integration",
      icon: <AutoAwesome className="service-header-icon" />,
      title: "AI & ML Web Integration",
      badge: "Intelligent Systems",
      description:
        "Bridging machine learning models with frontend interfaces through high-performance APIs and microservice endpoints.",
      features: [
        "Deploying ML Inference Endpoints via FastAPI/Flask",
        "Integrating Intelligent Predictions into React Apps",
        "Asynchronous Data Ingestion & JSON Pipelines",
        "Scalable Cloud & Server-side Architecture",
      ],
      skills: [
        "Python",
        "FastAPI / Flask",
        "Model Deployment",
        "React Integration",
        "API Gateways",
      ],
      accentColor: "cyan",
    },
  ];

  return (
    <section id="section-services" className="section-services">
      <div className="ambient-glow glow-4"></div>

      <div className="section-header-wrap">
        <span className="section-subtitle">What I can do for you</span>
        <h2 className="section-title">Services & Capabilities</h2>
        <div className="section-title-bar"></div>
        <p className="section-header-desc">
          Delivering end-to-end solutions spanning scalable web application
          architecture and intelligent machine learning systems.
        </p>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-card service-accent-${service.accentColor}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="service-card-top">
                <div className="service-icon-box">{service.icon}</div>
                <span className="service-badge">{service.badge}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-features-list">
                <h4>What's Included:</h4>
                <ul>
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle className="feat-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-skills-box">
                <h4>Technologies & Tools:</h4>
                <div className="service-tags">
                  {service.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="service-tag-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
