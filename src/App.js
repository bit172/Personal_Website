import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs/holder";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./components/navbar/navbar";
import ParticleComponent from "./components/particleComponent/particleComponent";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Skills from "./components/skills/skills";
import Interests from "./components/interests/interests";
library.add(fab, faFileDownload);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ParticleComponent />
        <About />
        <Experience />
        <Skills />
        <Interests />
      </main>
      <footer />
    </div>
  );
}

export default App;
