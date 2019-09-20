import React from "react";
import { Container, Col, Image } from "react-bootstrap";
import genetec from "./images/genetec.png";
const Experience = () => {
  return (
    <div className="experience-section" id="experience">
      <Container>
        <div className="container-content">
          <h1 className="section-title">Experience</h1>
          <Col className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="experience-title mb-0">
                Electronic Production Tester Intern
              </h3>
              <div className="company-title mb-3">
                Genetec
                <Image
                  src={genetec}
                  height={"25%"}
                  width={"25%"}
                  className="company-image"
                />
              </div>
              <p className="general-text">
                Developed part of a internal web tool that keeps track of data
                associated with manufactured parts for the Electronic Production
                team. Created UI elements and configured HTTP requests to a
                back-end web server in Angular. Implemented back end modules
                using a CQRS (Command Query Responsibility Segregation)
                architechture in C#. Developped unit tests for modules created.
              </p>
            </div>
            <Col md={3} className="resume-date text-md-right">
              <span>September 2018 - December 2018</span>
            </Col>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
