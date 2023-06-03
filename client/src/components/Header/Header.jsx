import { NavLink } from "react-router-dom";
import "./HeaderStyles.css";
import { FaBars } from "react-icons/fa";

export const Header = () => {

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
          <a href='#projects'>Projects</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#cta">Contact</a>
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
