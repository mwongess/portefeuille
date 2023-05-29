import { Link, animateScroll as scroll } from 'react-scroll';
import { NavLink } from "react-router-dom";
import "./HeaderStyles.css";
import { FaBars } from "react-icons/fa";

export const Header = () => {

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };
  
  return (
    <>
      <div className="navbar">
        <div className="navbarLeft">
          <h1>
            mwongess<span>.</span>me
          </h1>
        </div>
        <div className="navbarRight">
          <p>
            <Link to="about"
              spy={true}

              smooth={true}
              offset={-70}
              duration={500}
              onClick={()=>scrollToSection("projects")}>Projects</Link>
          </p>
          <p>
            <NavLink to="">About</NavLink>
          </p>
          <p>
            <NavLink to="">Contact</NavLink>
          </p>
          <button>Hire Me</button>
        </div>
        <div className="bars">
          <FaBars />
        </div>
      </div>
    </>
  );
};
