import React, { useRef , forwardRef} from "react";
import "./AboutMe.css";
import  Feature  from "../../components/feature/Feature"
import Brand from "../../components/brand/Brand"

const about = (
  <>
    <p>
      I'm a hard-working, enthusiastic quick learner who recently trained as a
      software engineer at School of Code. Previously, I worked as a chemistry
      and biology tutor for a number of years after completing my degree in
      biochemistry. But since graduating from School of Code, I've discovered a
      new passion - coding!
    </p>
    <p>
      I developed this website using React. I initially built components 
      using UI libraries such as ANT design, I, instead,  decided to
      build them from scratch as they allowed more customization. I also dabbled with ThreeJs to build an animation.
    </p>
    <p>
      This website is a work in progress. I'd like to add a blog and comment section - connecting it to database. I also need to complete my contact form.
    </p>
  </>
);

function AboutMe(){
 

  return (
    <div id="about" className="gpt3__aboutme-block section__margin">
  
        <Feature title="About Me" text={about} />
     

    </div>
  );}
 
export default AboutMe;
