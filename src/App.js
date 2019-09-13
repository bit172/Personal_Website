import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs/holder";
import "./App.css";
import Particles from "react-particles-js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./components/navbar/navbar";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Skills from "./components/skills/skills";
library.add(fab, faFileDownload);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Particles
          id="particles-js"
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
        <About />
        <Experience />
        <Skills />
      </main>
      <footer />
    </div>
  );
}

export default App;
