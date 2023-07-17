import React from "react";
import "./programs.css";
import { programsData } from "./../../data/programsData";
import RirgtArrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="strock-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="strock-text">TO SHAPE YOU</span>
      </div>
      <div className="program-categeory">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RirgtArrow} alt="" srcset="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
