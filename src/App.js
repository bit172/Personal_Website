import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs/holder";
import "./App.css";
import Particles from "react-particles-js";

import NavBar from "./components/navbar/navbar";
import About from "./components/about/about";

function App() {
  return (
    <div className="App">
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
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <About />
      </main>
      <footer />
    </div>
  );
}

export default App;
