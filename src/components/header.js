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
          {/* Make Login button a Link */}
          <Link to="/login">
            <button className="signinButton">Login</button>
          </Link>
          <button className="signupButton">Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
