import React from "react";
import "./Education.css";
import {Brand} from "../../components/index"
import { Feature } from "../../components";

const education = (
  <ul style={{ paddingLeft: "40px" }}>
    <li> Fullstack Web Development | SCHOOL OF CODE | 2022</li>
    <li> TEFOL certificate | UNIVERSITY OF TORONTO | 2015</li>
    <li> H.Bsc in biochemistry | UNIVERSITY OF TORONTO | 2012</li>
  </ul>
);

const hobbies = (
  <ul style={{ paddingLeft: "40px" }}>
    <li> Swimming, skiing, hiking</li>
    <li> Radio show host for "Science and Religion"</li>
  </ul>
);
const skills = (
  <ul style={{ paddingLeft: "40px" }}>
    <li>Javascript</li>
    <li> Node.js</li>
    <li>React native </li>
    <li>PostgresSQL</li>
    <li>MongoDB</li>
    <li>Firebase</li>
  </ul>
);

function Education(props) {
  return (
    <div className="gpt3__aboutme-container section__margin ">
    <div className="gpt3__aboutme-feature">
      <Feature
        
        title="Education"
        text={education}
      />
      <Feature  title="Skills" text={skills} />
      <Feature
        
        title="Hobbies & Interests"
        text={hobbies}
      />
    </div>
    <div className="gpt3__aboutme-socialIcons">
      <Brand />
      </div>
    
    </div>
  );
}

export default Education;
