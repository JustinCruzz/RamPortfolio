import React from "react";
import "./Projects.css";
import musicpic from "../assets/musicgenre.jpeg";
import gov from"../assets/governance.jpeg";
export default function Projects() {
  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>PROJECTS</h1>
        </div>
        <div className="cards">
          <div className="card">
            <img src={musicpic} alt="Project Imege" />
            <h1>MUSIC GENRE CLASSIFICATION</h1>
            <p>
              the process of using machine learning to categorize music into
              genres based on audio features. It helps in music recommendation
              and automated tagging.
            </p>
          </div>
          <div className="card">
            <img src={gov} alt="Project Imege" />
            <h1>E-GOVERNANCE</h1>
            <p>
              the use of digital technology to deliver government services,
              improve transparency, and engage with citizens more efficiently.
              It simplifies processes like online voting, tax filing, and public
              services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
