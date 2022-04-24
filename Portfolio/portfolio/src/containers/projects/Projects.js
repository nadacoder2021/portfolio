import React from "react";
import { Carousel, CarouselItem } from "../../components";
import { Feature } from "../../components";
import tribe from "../../assets/tribe.png";
import next from "../../assets/next.jpeg"
import tic from "../../assets/ti.png"
import "./Projects.css";

function Projects(props) {
  return (
    <div className="gpt3__features section__margin" id="projects">
      <div>
        <Feature title="My Projects" />
      </div>

      <Carousel>
        <CarouselItem
          className="gpt3__features-item1"
          title="Tribe App"
          text="This app was created by a team of six called “Node of Ingenuity” during our School of Code 4-week long final project.This app addresses this problem, allowing users to allocate chores to family members, specify the date a chore should be completed, and mark chores as completed.

          This is an app built with a React Native and Firebase, using the Expo framework. The app has been designed to be run on iPhone 11."
          image={tribe}
          link="https://github.com/nadacoder2021/TribeApp1"
        ></CarouselItem>
        <CarouselItem
          className="gpt3__features-item1"
          title="Resource Learning App"
          text="We developed this web application using NextJS to route to different pages. We discussed different system architectures such as monolith or microservices. We used also different libraries to build components and to test them in Storybook UI "
          image={next}
          link="https://github.com/SchoolOfCode/w11d5_hackathon-samia-nada-richard/tree/main/week11learningresourceapp"
        ></CarouselItem>
        <CarouselItem
          className="gpt3__features-item1"
          title="Tic Tac Toe"
          text="Using Javascript logic, React, useState and useEffect hooks we created a 3 x 3 Tic Tac Toe game  "
          image={tic}
          link="https://github.com/SchoolOfCode/noughts-and-crosses-plan-room22-chirag-austyn-nada"
        ></CarouselItem>
      </Carousel>
    </div>
  );
}

export default Projects;
