import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { LoginFunc } from "../../function.jsx";
import "../Login/login.css";

function LoginPage() {
  const [emailLogin, setEmailLogin] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const login = (e) => {
    e.preventDefault();
    LoginFunc(emailLogin, values.password.toString());
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="login-page-container">
      <div className="login-image-container">
        <img src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
      </div>
      <div className="login-container">
        <div className="login-container-content">
          <div className="login-form-content">
            <form className="login-form">
              <h3 className="login-form-title">Welcome Back!</h3>
              <div className="form-group-mt-3">
                <label>EMAIL</label>
              </div>
              <div>
                <Input
                  type="email"
                  disableUnderline={true}
                  className="form-control-mt-1"
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmailLogin(e.target.value);
                  }}
                />
              </div>
              <div className="form-group-mt-3">
                <label>PASSWORD</label>
              </div>
              <div>
                <Input
                  className="form-control-mt-1"
                  placeholder="Password"
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                  disableUnderline={true}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              <p className="forgot-pwd-text">
                <a href="#">Forgot password?</a>
              </p>
              <div className="d-grid-gap-2-mt-3">
                <button
                  type="submit"
                  className="signup-login-btn"
                  onClick={login}
                >
                  Log In
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
