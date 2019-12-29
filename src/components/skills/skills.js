import React from "react";
import { Container } from "react-bootstrap";

import "./skills.css";

import images from "./images.json";

const Skills = () => {
  return (
    <div className="experience-section" id="skills">
      <Container>
        <div className="container-content">
          <h1 className="section-title">Skills</h1>
          <div className="skills-container">
            {images.map(image => (
              <img
                className="skill-item"
                key={image.name}
                src={require(`./images/${image.src}`)}
                alt={image.name}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
