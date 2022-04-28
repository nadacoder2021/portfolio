import React from "react";
import "./Brand.css";
import { SocialIcon } from "react-social-icons";

const socialStyle = {
   padding: "50px", 
   margin: "20px" 
}


function Brand(props) {
  
  return (
    <div className="gpt3__brand section__padding">
      <SocialIcon
          style= {socialStyle}
       
        url="https://www.linkedin.com/in/nida-f-982230234/"
      />{" "}
      <SocialIcon
        style={socialStyle}
       
        url="https://github.com/nadacoder2021"
      />
      <SocialIcon
        style={socialStyle}
      
        url="https://slack.com/intl/en-gb/"
      />
    </div>
  );
}

export default Brand;
