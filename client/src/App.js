import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const initialState = {
    projects: ["Instagram Clone", "Recipe Builder", "Messenger App"]
  };
  const [projects] = useState(initialState.projects);
  return (
    <div className="main">
      <div className="container">
        <Navbar />
        <h1 className="heading-primary--title">
          Welcome to my portfolio <br />
          I'm a frontend developer{" "}
        </h1>

        <a href="#" className="btn btn-animated">
          Dicover
        </a>

        <div className="projects">
          <h1 className="projects-title">Projects</h1>
          <div className="project-container">
            {projects.map((project) => (
              <div className="project-box">{project}</div>
            ))}
          </div>
        </div>
        <div className="about-me">
          <h1 className="about-title">About me</h1>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est beatae sint quod non
            deserunt sit pariatur amet alias repellendus hic eos, eius ut, quae inventore? Pariatur
            numquam culpa earum debitis?
          </p>
        </div>
        <div className="contact">
          <h1 className="contact-title">Contact me</h1>
          <div className="contact-container">
            <div className="contact-item">Github</div>
            <div className="contact-item">LinkedIn</div>
            <div className="contact-item">Email</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
