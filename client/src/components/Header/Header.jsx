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
            <NavLink to="">Portfolio</NavLink>
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
