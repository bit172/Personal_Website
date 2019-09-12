import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import avatar from "./avatar.png";
const About = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="text-right d-none d-lg-block">
          <Image
            src={avatar}
            roundedCircle
            height={300}
            width={300}
            className="img-thumbnail"
          />
        </Col>
        <Col xs={12} md={6} className="text-center d-lg-none">
          <Image
            src={avatar}
            roundedCircle
            height={300}
            width={300}
            className="img-thumbnail"
          />
        </Col>
        <Col xs={12} md={6}>
          <h1>Jonathan Hsu</h1>
        </Col>
      </Row>
      <Row>Hello</Row>
    </Container>
  );
};

export default About;
