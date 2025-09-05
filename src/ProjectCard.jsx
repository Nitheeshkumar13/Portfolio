import React from "react";


const ProjectCard = ({ image, title, description, tools }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="card-img" />

      <div className="card-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tools">
          {tools.map((tool, index) => (
            <span key={index} className="tool-icon">
              {tool.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
