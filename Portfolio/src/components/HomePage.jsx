import React from "react";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");
  const [charIndex, setCharIndex] = React.useState(0);

  const titles = [
    "Full-Stack Developer",
    "Graphics Designer",
    "Digital Marketer",
  ];
  React.useEffect(() => {
    const currentTitle = titles[currentIndex];

    if (charIndex < currentTitle.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(typingTimeout);
    } else {
      const holdTimeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 2000);

      return () => clearTimeout(holdTimeout);
    }
  }, [charIndex, currentIndex, titles]);

  return (
    <section id="section-home" className="section-home">
      <div className="home-container">
        <div className="home-text-container">
          <h1>
            Hello, My name is Samuel
            <div className="home-job-title">
              I am a <span className="typed-text">{displayedText}</span>
              <span className="cursor" />
            </div>
          </h1>
          <p>
            "I build responsive, user-focused web applications using modern
            technologies such as JavaScript, React, and Node.js. With a strong
            emphasis on clean, maintainable code and scalable design, I deliver
            solutions that are both efficient and effective."
          </p>
          <p>Check out my projects or reach out to collaborate!</p>
          <a href="">View Projects &#8594;</a>
        </div>
        <div className="home-img-container">
          <img src="/images/Home-image2.png" alt="Illustration" />
        </div>
      </div>
    </section>
  );
}
