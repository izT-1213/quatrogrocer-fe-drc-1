import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import "../SignUp/signup.css";

function SignUpPage() {
  return (
    <div className="sign-up-page-container">
      <div className="sign-up-container">
        <div className="sign-up-container-content">
          <div className="sign-up-form-content">
            <form className="sign-up-form">
              <h3 className="sign-up-form-title">Sign Up</h3>
              <div className="form-group-mt-3">
                <label>EMAIL</label>
              </div>
              <div>
                <input
                  type="email"
                  className="form-control-mt-1"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group-mt-3">
                <label>PASSWORD</label>
              </div>
              <div>
                <input
                  type="password"
                  className="form-control-mt-1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group-mt-3">
                <label>CONFIRM PASSWORD</label>
              </div>
              <div>
                <input
                  type="password"
                  className="form-control-mt-1"
                  placeholder="Password"
                />
              </div>
              <label class="tnc">
                <input type="checkbox" />
                <span class="checkmark"></span> I agree to{" "}
                <a>
                  <Link to="/" className="tnc-link">
                    Terms & Conditions
                  </Link>
                </a>
              </label>
              <div className="d-grid-gap-2-mt-3">
                <button type="submit" className="signup-signin-btn">
                  SIGN UP
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
              <div className="sign-in-text-center">
                Already have an account?
                <a>
                  <Link to="/signin" className="signin-link">
                    {" "}
                    Log In
                  </Link>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="signup-image-container">
        <img src="https://images.unsplash.com/photo-1601057366047-ec734881239b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </div>
    </div>
  );
}

export default SignUpPage;
