import React from "react";
import Particles from "react-particles-js";
const ParticleComponent = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 100
          },
          size: {
            value: 3
          }
        }
      }}
    />
  );
};

export default ParticleComponent;
