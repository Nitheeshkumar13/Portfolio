import React, { useEffect } from "react";
import "./index.css";

function Skills() {
  const skills = [
    { name: "Java", img: "/skills/java.png" },
    { name: "JavaScript", img: "/skills/javascript.png" },
    { name: "React Js", img: "/skills/react.png" },
    { name: "HTML", img: "/skills/html.png" },
    { name: "CSS", img: "/skills/css.png" },
    { name: "MySQL", img: "/skills/mysql.png" },
    { name: "SpringBoot", img: "/skills/springboot.png" },
    { name: "Postman", img: "/skills/postman.png" },
    { name: "VS Code", img: "/skills/vscode.png" },
    { name: "Git", img: "/skills/git.png" },
    { name: "GitHub", img: "/skills/github.png" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pop-in");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(".skill-item");
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.2}s`; // staggered effect
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills">
      <h2>Skills</h2>
      <p className="subtitle">My Technical Expertise</p>
      <div className="skills-card">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
