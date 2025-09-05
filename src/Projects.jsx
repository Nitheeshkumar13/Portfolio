import React from "react";
import ProjectCard from "./ProjectCard";

import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";

import insuranceImg from "./assets/insurance.png";  
import Todoimage from "./assets/Todo.png";  
import CourseImg from "./assets/course.png"; 


const Projects = () => {
  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <span color="orange">My works</span>
      <div className="projects-grid">
        <ProjectCard
          image={insuranceImg}
          title="Timspark"
          description="A digital solutions agency specializing in future-ready web development and modern design for businesses."
          tools={[
            { name: "Java", icon: <FaHtml5 size={30} /> },
            { name: "Database", icon: <FaCss3 size={30} /> },
            { name: "GitHub", icon: <FaJs size={30} /> },
            { name: "Database", icon: <FaReact size={30} /> },
          ]}
        />
         <ProjectCard
          image={Todoimage}
          title="Simple Todo Application"
          description="A personal productivity tool for creating, organizing, and tracking your daily tasks."
          tools={[
            { name: "Java", icon: <FaHtml5 size={20}  /> },
            { name: "Database", icon: <FaCss3 size={20} /> },
            { name: "GitHub", icon: <FaJs size={20} /> },
          ]}
        />
        <ProjectCard
          image={CourseImg}
          title=" Course buying platform"
          description="An online marketplace for browsing, purchasing, and managing educational courses."
          tools={[
            { name: "Java", icon: <FaHtml5 size={30} /> },
            { name: "Database", icon: <FaCss3 size={30} /> },
             { name: "Database", icon: <FaJs size={30} /> },
            { name: "GitHub", icon: <FaReact size={30} /> },
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;

