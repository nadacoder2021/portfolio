import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import "./Navbar.css"

import { Link} from "react-scroll";
//BEM Block element modifier






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
                <Link
                  activeClass="active"
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}
                  onSetActive={handleSetActive}
                >
                  Blog
                </Link>
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
                    <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={20}
                      duration={500}
                      onSetActive={handleSetActive}
                    >
                    Home
                    </Link>
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
                    <Link
                      activeClass="active"
                      to="blog"
                      spy={true}
                      smooth={true}
                      offset={20}
                      duration={500}
                      onSetActive={handleSetActive}
                    >
                      Blog
                    </Link>
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