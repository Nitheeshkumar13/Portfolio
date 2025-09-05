import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Hero() {
  const roles = ["React Developer", "Software Engineer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // changes every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      

      {/* Hero Content */}
      <div className="hero-content">
        <div className="icons">
          <a href="https://github.com/Nitheeshkumar13" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nitheeshkumar-s-373b96299/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <h1>
          Hello, I am <span className="highlight">NitheeshKumar S</span>
        </h1>

        {/* Animated Role */}
        <h2>{roles[index]}</h2>

        <p>
          
            Knack for building modern and efficient web applications using the
            React ecosystem.
          
        </p>
        <p>
          
            I enjoy architecting scalable solutions, focusing on clean UI,
            reusable components, and smooth workflows.
         
        </p>
        <div className="buttons">
          <a href="#contact">
    <button className="hire-btn">Hire Me</button>
  </a>
          <a href="/Resume.pdf" download>
            <button className="get-resume-btn">Get Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
