import React from "react";
import "./techstack.css";
import checkmark from '../../assets/checkmark.png';

const TechStack = () => {
  return (
    <section id="techstackSection">
      <h2 className="techstackTitle">Skills</h2>
      <div className="techstackContainer">
        <div className="techstackBox">
          <h5 className="techstackCategory">Languages</h5>
          <ul className="techstackList">
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>C++</li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>OOPs </li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>JavaScript</li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>React</li>
          </ul>
        </div>
        <div className="techstackBox">
          <h5 className="techstackCategory">Coursework</h5>
          <ul className="techstackList">
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>Data Structures & Algorithms</li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>Database Management Systems</li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>AI-ML (Basic Fundamentals)</li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>Web Development</li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>SQL</li>
          </ul>
        </div>
        <div className="techstackBox">
          <h5 className="techstackCategory">Tools/Software</h5>
          <ul className="techstackList">
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>VS Code</li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>Canva</li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>Google Colab</li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>Replit</li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>MongoDB</li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>MySQL</li>
            <li><img src={checkmark} alt="checkmark" className="techstackCheckmark"/>Git and GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
