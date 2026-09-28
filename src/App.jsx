import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style.css";

export default function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <HomePage />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
