import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="text-right d-none d-lg-block">
          <Image src="holder.js/250x400" rounded />
        </Col>
        <Col xs={12} md={6} className="text-center d-lg-none">
          <Image src="holder.js/250x400" rounded />
        </Col>
        <Col xs={12} md={6}>
          Jonathan Hsu
        </Col>
      </Row>
    </Container>
  );
};

export default About;
