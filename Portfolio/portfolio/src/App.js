import React from "react";
import { Navbar } from "./components/index";
import {
  ContactMe,
  Education,
  AboutMe,
  Projects,
  Header,Footer
} from "./containers/index";
import { Element } from "react-scroll";
import "./App.css";

function App(props) {


  return (
    <div className="App gradient__bg">
      <Navbar />
      <Element>
        <Header id="home" />
      </Element>
      <Element>
        <AboutMe id="about" />
      </Element>
      <Education />
      <Element>
        <Projects id="projects" />
      </Element>
      <Element>
        <ContactMe id="contact" />
      </Element>
      <Element>
        <Footer />
      </Element>
    </div>
  );
}

export default App;
