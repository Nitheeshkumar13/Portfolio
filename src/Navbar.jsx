import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="/Resume.pdf" download>
        <button className="resume-btn">Resume</button>
      </a>
    </nav>
  );
}

export default Navbar;


