import React from "react";
import { motion } from "framer-motion";
import Projects from "./Projects";

export default function Services() {
  return (
    <>
      <section id="section-services" className="section-services">
        <div className="services-container">
          <h1>What I do</h1>
          <motion.div
            initial={{ opacity: 0, x: -140 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="services-text-container"
          >
            <div className="text-container">
              <div>
                <h2>Web Development</h2>
                <p>
                  I bring websites to life with clean code, smooth interactions,
                  and user-centered design. My focus is on building fast,
                  responsive, and intuitive digital experiences that not only
                  function flawlessly but also look great across all devices.
                  With a strong foundation in modern web technologies, I turn
                  ideas into fully functional websites that meet real-world
                  needs and business goals.
                </p>
              </div>
              <div className="services-skills">
                <h3>Skills:</h3>
                <button>HTML</button>
                <button>CSS</button>
                <button>JavaScript</button>
                <button>React</button>
                <button>Node</button>
                <button>Express</button>
                <button>MongoDB</button>
              </div>
            </div>
            <div className="text-container">
              <div>
                <h2>Digital Marketing</h2>
                <p>
                  I understand how to make a digital presence count — using
                  strategies like basic SEO, content planning, and social media
                  integration to boost engagement. Though I’m not deeply
                  specialized in marketing, I use my foundational knowledge to
                  help websites attract and connect with the right audience.
                </p>
              </div>
              <div className="services-links">
                <a href="">Download my Certificate</a>
              </div>
            </div>
            <div className="text-container">
              <div>
                <h2>Graphics Design</h2>
                <p>
                  I create simple, effective designs that support and enhance my
                  web projects. From selecting color palettes to designing logos
                  or banners, I ensure each visual element aligns with the
                  overall brand feel. While I’m still growing in this field, I
                  apply what I know thoughtfully to make every project look
                  polished and cohesive.
                </p>
              </div>
              <div className="services-tools">
                <h3>Tools:</h3>
                <button>Adobe PhotoShop</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Projects />
    </>
  );
}
