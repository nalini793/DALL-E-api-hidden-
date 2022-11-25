import React from "react";
import "./NavbarStyles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <nav>
        <h2>DALL·E - 2 API</h2>
        <div className="nav_wrapper">
          <ul className="list_nav">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/gallery">Gallery</CustomLink>
            <CustomLink to="/docs">Docs</CustomLink>
            <CustomLink to="/about">About</CustomLink>

            {/* <li>
              <Link className="active links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="links" to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="links" to="/docs">
                DOCS
              </Link>
            </li>
            <li>
              <Link className="links" to="/about">
                About
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link className="links" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
