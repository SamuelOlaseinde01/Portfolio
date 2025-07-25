import React from "react";
import { motion, transform } from "framer-motion";

export default function About() {
  return (
    <section id="section-about" className="section-about">
      <div className="about-container">
        <div className="about-text-img-container">
          <div className="about-img-container">
            <img src="/images/Home-image4.png" alt="about-illustration" />
          </div>
          <div className="about-text-container">
            <h1>Who I am</h1>
            <div className="about-p-container">
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Hello, my name is Samuel Olaseinde, a web developer with a
                strong focus on building responsive, user-centered applications.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                I specialize in full-stack web development, using tools like
                JavaScript, React, Node.js, and MongoDB to create modern,
                scalable solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -120 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                In addition to development, I have experience in graphic design
                and hold a certification in digital marketing.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -160 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                While I don’t position myself as an expert in these areas, I
                often apply design principles and marketing knowledge to improve
                user experience and online visibility.
              </motion.p>
            </div>
            <a href="">Download CV &#8594;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
