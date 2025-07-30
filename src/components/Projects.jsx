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
              <h1>ProDrivers</h1>
              <p>A Landing page for a driving company</p>
              <p>Tools used: HTML, CSS, JavaScript</p>
            </div>
          </div>
        </a>
        <a href="https://prodrivers.netlify.app" target="_blank">
          <div className="project">
            <div className="project-img">
              <img src="/images/Blood-bank.png" alt="Prodrivers Project" />
            </div>
            <div className="project-text">
              <h1>Blood Bank Management System</h1>
              <p>
                An online blood bank mangement system that streamlines blood
                bank operations between donors and recipients
              </p>
              <p>
                Tools used: React js, Vanilla CSS, Node js, Express js and
                MongoDB
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
