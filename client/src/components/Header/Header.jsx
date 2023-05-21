import { Link } from "react-router-dom";
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
            <Link to="">Portfolio</Link>
          </p>
          <p>
            <Link to="">About</Link>
          </p>
          <p>
            <Link to="">Contact</Link>
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
