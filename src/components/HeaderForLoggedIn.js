import React from "react";
import { Link } from "react-router-dom";
import "./HeaderForLoggedIn.css";

function HeaderForLoggedIn() {
  return (
    <header className="header">
      <div>
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <span>SMEFundMatch</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="navigation">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        {/* ✅ Profile button now goes to ProfileSetup */}
        <div className="profileSection">
          <Link to="/ProfileSetup" className="profileButton">
            Profile
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderForLoggedIn;
