import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="main">
      <div className="container">
        <Navbar className="navbar" />
        <div className="impressive-object">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Welcome to my portfolio</span>
            <span className="heading-primary-sub">showcasing my projects</span>
          </h1>
        </div>
        <div className="projects">
          <h1 className="title">Projects</h1>
          <div className="project-container"></div>
        </div>
        <div className="about-me">Talk about myself</div>
        <div className="contact">How to contact me</div>
      </div>
    </div>
  );
}

export default App;
