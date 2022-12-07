import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IconButton, InputAdornment, Input } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { LoginFunc } from "../../function.jsx";
import useAuth from "../../Components/context/useAuth.js";
import "../Login/login.css";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [emailLogin, setEmailLogin] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const { setAuth } = useAuth();

  const [errMsg, setErrMsg] = useState("");

  const userRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [emailLogin, values.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwd = values.password.toString();
    const message = await LoginFunc(emailLogin, passwd);
    const token = message?.data?.userJwt;
    setAuth({ emailLogin, passwd, token });
    if (message.status === 200) {
      navigate(from.toString(), { replace: true });
    } else {
      setErrMsg(message.error);
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="login-page-container">
      <div className="login-image-container">
        <img
          src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
        />
      </div>
      <div className="login-container">
        <div className="login-container-content">
          <div className="login-form-content">
            <form className="login-form" onSubmit={handleSubmit}>
              <h3 className="login-form-title">Welcome Back!</h3>
              <div className="form-group-mt-3">
                <label>EMAIL</label>
              </div>
              <div>
                <Input
                  type="email"
                  disableUnderline={true}
                  ref={userRef}
                  className="form-control-mt-1"
                  placeholder="example@email.com"
                  onChange={(e) => {
                    setEmailLogin(e.target.value);
                  }}
                  required={true}
                  value={emailLogin}
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
                  required={true}
                  disableUnderline={true}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
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
              <div className="errMsg">
                {errMsg && (
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                )}
              </div>
              <div className="d-grid-gap-2-mt-3">
                <button
                  type="submit"
                  className="login-btn"
                  disabled={emailLogin && values.password ? false : true}
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
                I'm new here!{" "}
                <u>
                  <a>
                    <Link to="/signup" className="signup-link">
                      Create a new account
                    </Link>
                  </a>
                </u>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
