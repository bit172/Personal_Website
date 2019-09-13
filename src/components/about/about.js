import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import avatar from "./avatar.png";
import resume from "./ResumeOut.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <Container className="section">
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
          <h1>Jonathan Hsu</h1>
          <h3>
            Montreal, Qc · (438) 438-7029 ·{" "}
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
            <a href={resume}>
              CV <FontAwesomeIcon icon={"file-download"} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
