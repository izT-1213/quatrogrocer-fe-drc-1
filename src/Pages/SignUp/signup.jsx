import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { TextField, FormControl, Select, MenuItem } from "@mui/material";
import { IconButton, InputAdornment, Input } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { RegisterFunc } from "../../function.jsx";
import "../SignUp/signup.css";

function SignUpPage() {
  const color = "#009688";
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    checked: false,
    showPassword: false,
  });

  const [dob, setDOB] = useState(dayjs(""));

  const [errMsg, setErrMsg] = useState("");
  const userRef = useRef();
  const errRef = useRef();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [values.email, values.password]);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickTnC = () => {
    setValues({ ...values, checked: !values.checked });
  };

  const handleValueChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleDOBChange = (newDOB) => {
    setDOB(newDOB);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = await RegisterFunc(
      values.email.toString(),
      values.password.toString(),
      values.firstName.toString(),
      values.lastName.toString(),
      dob,
      values.gender.toString()
    );

    if (message === undefined) {
      alert("You have registered an account. Please login to proceed.");
      navigate("/login");
    } else {
      setErrMsg(message.error);
    }
  };

  return (
    <div className="sign-up-page-container">
      <div className="sign-up-container">
        <div className="sign-up-container-content">
          <div className="sign-up-form-content">
            <form className="sign-up-form" onSubmit={handleSubmit}>
              <h3 className="sign-up-form-title">Sign Up</h3>
              <div className="sign-up-form-table">
                <tr>
                  <td className="left-col-line-1">FIRST NAME</td>
                  <td className="right-col-line-1">LAST NAME</td>
                </tr>
                <tr>
                  <td className="left-col">
                    <Input
                      type="first-name"
                      disableUnderline={true}
                      className="form-control-mt-1"
                      placeholder="John"
                      required={true}
                      value={values.firstName}
                      onChange={handleValueChange("firstName")}
                    />
                  </td>
                  <td className="right-col">
                    <Input
                      type="last-name"
                      disableUnderline={true}
                      className="form-control-mt-1"
                      placeholder="Doe"
                      required={true}
                      value={values.lastName}
                      onChange={handleValueChange("lastName")}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="left-col-line-2">GENDER</td>
                  <td className="right-col-line-2">DATE OF BIRTH</td>
                </tr>
                <tr>
                  <td className="left-col">
                    <div>
                      <FormControl fullWidth>
                        <Select
                          variant="standard"
                          labelId="gender-dropdown-list"
                          className="form-control-mt-1"
                          placeholder="Select Gender"
                          disableUnderline={true}
                          id="gender-dropdown-menu"
                          value={values.gender}
                          onChange={handleValueChange("gender")}
                          required={true}
                        >
                          <MenuItem value={"male"}>Male</MenuItem>
                          <MenuItem value={"female"}>Female</MenuItem>
                          <MenuItem value={"others"}>Others</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </td>
                  <td className="right-col">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        id="date-of-birth"
                        className="form-control-mt-1"
                        InputProps={{ disableUnderline: true }}
                        inputFormat="MM/DD/YYYY"
                        value={dob}
                        onChange={handleDOBChange}
                        required={true}
                        disableFuture={true}
                        renderInput={(params) => (
                          <TextField
                            variant="standard"
                            {...params}
                            inputProps={{
                              ...params.inputProps,
                              readOnly: true,
                            }}
                            sx={{ button: { color } }}
                          />
                        )}
                        views={["year", "month", "day"]}
                      />
                    </LocalizationProvider>
                  </td>
                </tr>
              </div>
              <div className="form-group-mt-3">
                <label>EMAIL</label>
              </div>
              <div>
                <Input
                  type="email"
                  disableUnderline={true}
                  ref={userRef}
                  className="form-control-mt-2"
                  placeholder="example@email.com"
                  required={true}
                  value={values.email}
                  onChange={handleValueChange("email")}
                />
              </div>
              <div className="form-group-mt-3">
                <label>PASSWORD</label>
              </div>
              <div>
                <Input
                  className="form-control-mt-2"
                  placeholder="Password"
                  type={values.showPassword ? "text" : "password"}
                  onChange={handleValueChange("password")}
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
              <label className="tnc">
                <input
                  type="checkbox"
                  required={true}
                  value={values.checked}
                  onClick={handleClickTnC}
                />
                <span className="checkmark"></span> I agree to{" "}
                <a onClick={() => navigate("/maintenance")}>
                  <Link className="tnc-link">Terms & Conditions</Link>
                </a>
              </label>
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
                  className="signup-btn"
                  disabled={
                    values.email &&
                    values.password &&
                    values.firstName &&
                    values.lastName &&
                    values.gender &&
                    dob &&
                    values.checked
                      ? false
                      : true
                  }
                >
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
                      <FaGoogle onClick={() => navigate("/maintenance")} />
                    </li>
                  </nav>
                  <nav className="white-padding">
                    <li className="login-apps-icons">
                      <FaFacebook onClick={() => navigate("/maintenance")} />
                    </li>
                  </nav>
                  <nav className="white-padding">
                    <li className="login-apps-icons">
                      <FaApple onClick={() => navigate("/maintenance")} />
                    </li>
                  </nav>
                </div>
              </div>
              <div className="sign-in-text-center">
                Already have an account?{" "}
                <u>
                  <a>
                    <Link to="/login" className="signin-link">
                      Log In
                    </Link>
                  </a>
                </u>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="signup-image-container">
        <img
          src="https://images.unsplash.com/photo-1601057366047-ec734881239b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default SignUpPage;
