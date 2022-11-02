import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../SignUp/signup.css";

function SignUpPage() {
  return (
    <div className="sign-up-container">
      <form className="sign-up-form">
        <div className="sign-up-form-content">
          <h3 className="sign-up-form-title">Sign Up</h3>
          <div className="form-group-mt-3">
            <label>FIRST NAME</label>
          </div>
          <div>
            <input
              type="string"
              className="form-control-mt-1"
              placeholder="e.g Jane"
            />
          </div>
          <div className="form-group-mt-3">
            <label>LAST NAME</label>
          </div>
          <div>
            <input
              type="string"
              className="form-control-mt-1"
              placeholder="e.g Doe"
            />
          </div>
          <div className="form-group-mt-3">
            <label>EMAIL ADDRESS</label>
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
          <div className="d-grid-gap-2-mt-3">
            <button type="submit" className="signup-signin-btn">
              SIGN UP
            </button>
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
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
