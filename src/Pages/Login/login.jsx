import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import "../Login/login.css";

function LoginPage() {
  return (
    <div className="log-in-page-container">
      <div className="login-image-container">
        <img src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
      </div>
      <div className="log-in-container">
        <div className="log-in-container-content">
          <div className="log-in-form-content">
            <form className="log-in-form">
              <h3 className="log-in-form-title">Welcome Back!</h3>
              <div className="form-group-mt-3">
                <label>EMAIL</label>
              </div>
              <div>
                <input
                  type="email"
                  className="form-control-mt-1"
                  placeholder="random@gmail.com"
                />
              </div>
              <div className="form-group-mt-3">
                <label>PASSWORD</label>
              </div>
              <div>
                <input
                  type="password"
                  className="form-control-mt-1"
                  placeholder="Enter password"
                />
              </div>
              <p className="forgot-pwd-text">
                <a href="#">Forgot password?</a>
              </p>
              <div className="d-grid-gap-2-mt-3">
                <button type="submit" className="signup-signin-btn">
                  Submit
                </button>
              </div>
              <div className="line-or-box">
                <hr className="line-1" />
                <nav className="white-padding">
                  <div className="or-box">OR</div>
                </nav>
                <hr className="line-1" />
              </div>
              <div className="login-apps-container">
                <div className="login-apps">
                  <nav className="white-padding">
                    <li className="login-apps-icons">
                      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <FaGoogle />
                      </a>
                    </li>
                  </nav>
                  <nav className="white-padding">
                    <li className="login-apps-icons">
                      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <FaFacebook />
                      </a>
                    </li>
                  </nav>
                  <nav className="white-padding">
                    <li className="login-apps-icons">
                      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <FaApple />
                      </a>
                    </li>
                  </nav>
                </div>
              </div>
              <div className="sign-up-text-center">
                I'm new here!
                <a>
                  <Link to="/signup" className="signup-link">
                    {" "}
                    Create a new account
                  </Link>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
