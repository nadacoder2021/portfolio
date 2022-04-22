import React, {useState, useRef} from 'react';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { Link, animateScroll as scroll } from "react-scroll";
//BEM Block element modifier






const Menu = () => (
<>
<p><a href="#home">Home</a></p>
                <p><a href="/about">About Me</a></p>
                <p><a href="#hpossibility">My Projects</a></p>
                <p><a href="#possibility">Contact Me</a></p>
                <p><a href="#features">Features</a></p>
                <p><a href="#blog">My Blog</a></p>
                </>
)



function Navbar() {

  const [link, setLink] = useState("")
  function handleSetActive(to) {
  setLink(to)
    console.log("this is the state",link);
  }


    const[toggleMenu, setToggleMenu] = useState(false)

 

    return (
      <div className="gpt3__navbar section__margin">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_container">
            <>
              <p>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  Home{" "}
                </Link>
              </p>
              <p>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  About Me{" "}
                </Link>
              </p>
              <p>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  Projects
                </Link>
              </p>
              <p>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  Contact Me
                </Link>
              </p>

              <p>
                <a href="#blog">My Blog</a>
              </p>
            </>
          </div>
        </div>

        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="black"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="black"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <>
                  <p>
                    <a href="home">Home</a>
                  </p>
                  <p>
                    <Link
                      activeClass="active"
                      href="/about"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={20}
                      duration={500}
                      onSetActive={handleSetActive}
                    >
                      About Me{" "}
                    </Link>
                  </p>
                  <p>
                    <Link
                      activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onSetActive={handleSetActive}
                    >
                      Projects
                    </Link>
                  </p>
                  <p>
                    <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={20}
                      duration={500}
                      onSetActive={handleSetActive}
                    >
                      Contact Me
                    </Link>
                  </p>

                  <p>
                    <a href="#blog">My Blog</a>
                  </p>
                </>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default Navbar;