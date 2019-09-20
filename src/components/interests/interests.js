import React from "react";
import { Container } from "react-bootstrap";

const Interests = () => {
  return (
    <div className="experience-section" id="interests">
      <Container>
        <div className="container-content">
          <h1 className="section-title">Interests</h1>
          <p className="general-text">
            On my free time, I enjoy practicing musical instruments. I am
            classically trained in piano &amp; guitar and have been playing each
            for 10 years and 2 years respectively. I am currently transitioning
            into jazz music. I also enjoy gaming, mostly playing MOBAs
            (Multiplayer Online Battle Arena).
          </p>
          <p className="general-text">
            As for programming, I work on side projects or enroll in online
            classes related to web development or computer graphics.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Interests;
