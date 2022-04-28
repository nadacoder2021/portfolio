import React, { Suspense } from "react";
import "./Header.css";
import resume from "../../assets/Nida resume.pdf"
import TypeAnimation from "react-type-animation";
import { Canvas } from "@react-three/fiber";
import SphereAnimation from "../../components/box/Box";
import { OrbitControls } from "@react-three/drei";

function Header(props) {
  return (
    <div className="gpt3__header section__margin" id="home">
      <div className="gpt3__header-content">
        <h1>Nida Farooq </h1>
        <h1 className="gradient__text">Fullstack Software Engineer </h1>
        <div className="animation">
          <h1 className="gradient__text-animation">
            <TypeAnimation
              cursor={false}
              sequence={[
                "HTML, CSS ",
                2000,
                "React & React Native JS ",
                2000,
                "Node JS ",
                2000,
                "PostgreSQL, Firebase ",
                2000,
              ]}
              repeat={Infinity}
            />
          </h1>
        </div>

        <div className="gpt3__header-content__input">
         <a href={resume} download="Nida resume.pdf">
          <button type="button">Download CV</button></a>
        </div>
      </div>
      <div className="gpt3__header-image">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[-2, 5, 2]} intensity={0.4} />
          <Suspense fallback={null}>
            <SphereAnimation />
          </Suspense>
        </Canvas>
        {/* <img src={pic} alt="pic"/> */}
      </div>
    </div>
  );
}

export default Header;
