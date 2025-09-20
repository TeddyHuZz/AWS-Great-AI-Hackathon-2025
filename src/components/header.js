import "./header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div>
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <span>SMEFundMatch</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="navigation">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        {/* Auth Section */}
        <div className="authButtons">
          <Link to="/login" className="signinButton">
            Login
          </Link>
          <Link to="/signup" className="signupButton">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
