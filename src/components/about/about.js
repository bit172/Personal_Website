import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import avatar from "./avatar.png";
import resume from "./Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="section" id="about">
      <Container>
        <div className="container-content">
          <Row>
            <Col xs={12} md={6} className="text-right d-none d-lg-block">
              <Image
                src={avatar}
                roundedCircle
                height={300}
                width={300}
                className="img-thumbnail avatar"
              />
            </Col>
            <Col xs={12} md={6} className="text-center d-lg-none">
              <Image
                src={avatar}
                roundedCircle
                height={200}
                width={200}
                className="img-thumbnail avatar"
              />
            </Col>
            <Col xs={12} md={6}>
              <h1 className="name primary-title">Jonathan Hsu</h1>
              <h3 className="secondary-title">
                Concordia University · Software Engineering · Montreal, Qc ·
                (438) 888-7029 ·{" "}
                <a href="mailto:bit172@gmail.com">bit172@gmail.com</a>
              </h3>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jonathan-hsu-b96846155/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </a>
                <a href="https://github.com/bit172" target="blank">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
                <a href={resume} download>
                  CV <FontAwesomeIcon icon={"file-download"} />
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <p className="about-text">
              I am a third year software engineering student at Concordia
              University. I started programming in 2016 at Marianopolis College
              using Python. Since then, I learned Java, the basics of web
              development with a few frameworks along the way (Angular, React,
              Node.js). I enjoy learning about full stack web development and
              new web technologies. I have also done a bit of graphics
              programming using OpenGL and C++.
            </p>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
