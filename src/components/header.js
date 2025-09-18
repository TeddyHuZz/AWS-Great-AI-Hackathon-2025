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
          <a href="dashboard">Dashboard</a>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        {/* Auth Section */}
        <div className="authButtons">
          <button className="signinButton">Login</button>
          <button className="signupButton">Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Header;