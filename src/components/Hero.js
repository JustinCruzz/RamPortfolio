import React from "react";
import "./Hero.css";
import "./Help.css";
import github from "../assets/githublogo.svg";
import linkedin from "../assets/linkedinlogo.svg";
import gmail from "../assets/gmailogo.svg";
import Profilepic from "../assets/MyPicc.png";
export default function Hero() {
  return (
    <div className="Hero flexed">
      <div className="about ">
        <div className="name fontfamily">
          <h1>VAMSHI RAMAVATH</h1>
        </div>
        <div className="designation fontfamily textalign">
          <h4>B.Tech student in Computer Science and Engineering</h4>
        </div>
        <div className="links">
          <a href="www.google.com">
            <img src={linkedin} alt="Linkedin"></img>
          </a>
          <a href="www.google.com">
            <img src={gmail} alt="Linkedin"></img>
          </a>
          <a href="www.google.com">
            <img src={github} alt="Linkedin"></img>
          </a>
        </div>
        <div className="bio fontfamily  textalign">
          <p className="paragraph">
            A B.Tech Computer Science student with strong skills in programming
            and full-stack development. Passionate about applying technology to
            solve real-world challenges, with project experience in areas like
            music genre classification and e-governance. Driven by a commitment
            to continuous learning and innovation.
          </p>
        </div>
        <div className="flexed">
          <a href="../assets/myresume.pdf" download ><button className="resume fontfamily">Resume</button></a>
        </div>
      </div>
      <div className="profile flexed">
        <img src={Profilepic} alt="Vamshi"></img>
      </div>
    </div>
  );
}
