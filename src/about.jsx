// About.jsx
import React from "react";

import devImage from "./assets/dev.png"; // replace with your image path

function About() {
  return (
    <section className="about" id="about">
      <div className="about-card">
        {/* Left Side - Image */}
        <div className="about-img">
          <img src={devImage} alt="Developer" />
        </div>

        {/* Right Side - Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <h4 className="why">Why hire me?</h4>
          <p>
            I am a passionate React developer with hands-on experience in building
            responsive and interactive web applications. I specialize in React.js
            for creating reusable components, managing state efficiently, and
            ensuring smooth user experiences. Along with React, I work with HTML,
            CSS, and JavaScript to design modern, clean, and scalable front-end
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
