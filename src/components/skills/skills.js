import React from "react";
import { Container } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "./skills.css";
const Skills = () => {
  return (
    <div className="experience-section">
      <Container>
        <div className="container-content">
          <h1 className="section-title">Skills</h1>
          <div className="skills-container">
            <CircularProgressbar value={100} text={"100%"} strokeWidth={5} />
            <CircularProgressbar value={90} text={"90%"} strokeWidth={5} />
            <CircularProgressbar value={60} text={"60%"} strokeWidth={5} />
            <CircularProgressbar value={60} text={"60%"} strokeWidth={5} />
            <CircularProgressbar value={60} text={"60%"} strokeWidth={5} />
            <CircularProgressbar value={60} text={"60%"} strokeWidth={5} />
            <CircularProgressbar value={60} text={"60%"} strokeWidth={5} />
            <CircularProgressbar value={60} text={"60%"} strokeWidth={5} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
