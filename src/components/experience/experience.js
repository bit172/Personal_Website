import React from "react";
import { Container, Col } from "react-bootstrap";

const Experience = () => {
  return (
    <Container>
      <div className="container-content">
        <h1 className="section-title">Experience</h1>
        <Col className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Electronic Production Tester Intern</h3>
            <div className="subheading mb-3">Genetec</div>
            <p className="experience-text">
              Developed part of a database management web application to keep
              track of data associated with parts in manufacturing for the
              Electronic Production team. Created UI elements and configured
              HTTPS requests to a back-end web server in Angular. Implemented
              back end modules using a CQRS (Command Query Responsibility
              Segregation) architechture in C#. Developped unit tests for
              modules created.
            </p>
          </div>
          <Col md={3} className="resume-date text-md-right">
            <span>September 2018 - December 2018</span>
          </Col>
        </Col>
      </div>
    </Container>
  );
};

export default Experience;
