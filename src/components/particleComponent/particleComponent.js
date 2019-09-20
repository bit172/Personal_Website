import React from "react";
import Particles from "react-particles-js";
const ParticleComponent = () => {
  return (
    <div>
      <Particles
        className="d-none d-lg-block"
        params={{
          particles: {
            number: {
              value: 75
            },
            size: {
              value: 3
            }
          }
        }}
      />
      <Particles
        className="d-lg-none"
        params={{
          particles: {
            number: {
              value: 30
            },
            size: {
              value: 2
            }
          }
        }}
      />
    </div>
  );
};

export default ParticleComponent;
