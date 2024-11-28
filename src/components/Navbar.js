import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="desktop-menu">
            <Link className="animation" to="/">Home</Link>
            <Link className="animation" to="/about">About</Link>
            <Link className="animation" to="/contact">Contact</Link>
          </div>
          <div className="mobile-menu">
            <button><Link to="/">Home</Link></button>
            <button><Link to="/about">About</Link></button>
            <button><Link to="/contact">Contact</Link></button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
