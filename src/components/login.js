// src/components/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./login.css";
import "./loginresponsive.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ hook for navigation

  // Handle form submit
  const handleLogin = (e) => {
    e.preventDefault(); // prevent page refresh
    // 👉 Here you would normally check credentials with backend API
    // For now, just navigate to Loggedin page
    navigate("/Loggedin");
  };

  return (
    <div className="login-main">
      {/* Left Side (Image / Branding) */}
      <div className="login-left">
        <img src="/logo192.png" alt="Login Illustration" />
      </div>

      {/* Right Side (Form) */}
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src="/logo192.png" alt="App Logo" />
          </div>

          <div className="login-center">
            <h2>Welcome Back</h2>
            <p>Please login to your account</p>

            <form onSubmit={handleLogin}>
              {/* Email */}
              <input type="email" placeholder="Email" required />

              {/* Password */}
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer", fontSize: "14px" }}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>

              {/* Options */}
              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <Link to="/forgot-password" className="forgot-pass-link">
                  Forgot Password?
                </Link>
              </div>

              {/* Buttons */}
              <div className="login-center-buttons">
                <button type="submit">Login</button>
                <button type="button">
                  <img src="/google-icon.png" alt="Google Logo" />
                  Login with Google
                </button>
              </div>
            </form>

            <p className="login-bottom-p">
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
