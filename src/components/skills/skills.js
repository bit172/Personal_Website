import React from "react";
import { Container } from "react-bootstrap";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "./skills.css";
import htmlImage from "./images/html.png";
import cssImage from "./images/css.png";
import jsImage from "./images/js.png";
import tsImage from "./images/ts.png";
import javaImage from "./images/java.png";
import csharpImage from "./images/csharp.png";
import openglImage from "./images/opengl.png";
import angularImage from "./images/angular.png";
import reactImage from "./images/react.png";
import mysqlImage from "./images/mysql.png";

const Skills = () => {
  return (
    <div className="experience-section">
      <Container>
        <div className="container-content">
          <h1 className="section-title">Skills</h1>
          <div className="skills-container">
            <CircularProgressbarWithChildren value={100} strokeWidth={5}>
              <img
                style={{ width: 100, marginTop: -5 }}
                src={htmlImage}
                alt="HTML"
              />
              <div style={{ fontSize: "2rem", marginTop: -5 }}>
                <strong>100%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={90} strokeWidth={5}>
              <img
                style={{ width: 100, marginTop: -5 }}
                src={cssImage}
                alt="CSS"
              />
              <div style={{ fontSize: "2rem", marginTop: -5 }}>
                <strong>90%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={90} strokeWidth={5}>
              <img
                style={{ width: 100, marginTop: -5 }}
                src={jsImage}
                alt="JavaScript"
              />
              <div style={{ fontSize: "2rem", marginTop: -5 }}>
                <strong>90%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={90} strokeWidth={5}>
              <img
                style={{ width: 100, marginTop: -5 }}
                src={angularImage}
                alt="Angular"
              />
              <div style={{ fontSize: "2rem", marginTop: -5 }}>
                <strong>90%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={90} strokeWidth={5}>
              <img
                style={{ width: 100, marginTop: -5 }}
                src={javaImage}
                alt="Java"
              />
              <div style={{ fontSize: "2rem", marginTop: -5 }}>
                <strong>90%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={80} strokeWidth={5}>
              <img
                style={{ width: 100, marginTop: -5 }}
                src={tsImage}
                alt="TypeScript"
              />
              <div style={{ fontSize: "2rem", marginTop: -5 }}>
                <strong>80%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={80} strokeWidth={5}>
              <img
                style={{ width: 100, marginTop: -5 }}
                src={csharpImage}
                alt="C#"
              />
              <div style={{ fontSize: "2rem", marginTop: -5 }}>
                <strong>80%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={80} strokeWidth={5}>
              <img
                style={{ width: 100, marginTop: -5 }}
                src={mysqlImage}
                alt="MySQL"
              />
              <div style={{ fontSize: "2rem", marginTop: -5 }}>
                <strong>80%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={70} strokeWidth={5}>
              <img
                style={{ width: 100, marginTop: -5 }}
                src={reactImage}
                alt="React"
              />
              <div style={{ fontSize: "2rem", marginTop: -5 }}>
                <strong>70%</strong>
              </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={60} strokeWidth={5}>
              <img
                style={{ width: 100, marginTop: -5 }}
                src={openglImage}
                alt="OpenGL"
              />
              <div style={{ fontSize: "2rem", marginTop: -5 }}>
                <strong>60%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
