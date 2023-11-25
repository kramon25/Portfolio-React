import { NavLink, Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="nav">
      <div>
        <Link to="/" className="siteName">
          Ramondo
        </Link>
      </div>
      <div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          Navigation
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Portfolio">Portfolio</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/Resume">Resume</NavLink>
            <NavLink to="/Certs">Certifications</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
