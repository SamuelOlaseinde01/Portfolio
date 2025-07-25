import React from "react";

export default function Projects() {
  return (
    <section id="section-projects" className="section-projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <a href="">
          <div className="project">
            <div className="project-img">
              <img
                src="/images/Prodrivers-full-screenshot2.png"
                alt="Prodrivers Project"
              />
            </div>
            <div className="project-text">
              <h3>Name: A Landing page for a Driving company</h3>
              <h4>Tools used: HTML, CSS, JavaScript</h4>
            </div>
          </div>
        </a>
        <a href="https://prodrivers.netlify.app" target="_blank">
          <div className="project">
            <div className="project-img">
              <img
                src="/images/Prodrivers-full-screenshot2.png"
                alt="Prodrivers Project"
              />
            </div>
            <div className="project-text">
              <h3>Name: A Landing page for a Driving company</h3>
              <h4>Tools used: HTML, CSS, JavaScript</h4>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
