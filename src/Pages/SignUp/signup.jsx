import React, { useState, useRef, useEffect, useContext } from "react";
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

  //email and password variables
  const [emailReg, setUsernameReg] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  //to catch error message
  const [errMsg, setErrMsg] = useState("");
  const userRef = useRef();
  const errRef = useRef();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [emailReg, values.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (`input[name="checkbox-required"]:checked`.length) {
      return true;
    } else {
      console.log("not checked");
      setErrMsg("Please read the terms and conditions.");
    }
    const message = await RegisterFunc(emailReg, values.password.toString());

    if (message === undefined) {
      navigate("/");
    } else {
      console.log(message);
      setErrMsg(message.error);
      // setErrMsg(JSON.stringify(message.error));
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [value, setValue] = useState(dayjs(""));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [gender, setGender] = useState("");

  const handleChangeGender = (event) => {
    setGender(event.target.value);
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
                      type="string"
                      disableUnderline={true}
                      className="form-control-mt-1"
                      placeholder="John"
                      required={true}
                    />
                  </td>
                  <td className="right-col">
                    <Input
                      type="string"
                      disableUnderline={true}
                      className="form-control-mt-1"
                      placeholder="Doe"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="left-col-line-2">GENDER</td>
                  <td className="right-col-line-2">DATE OF BIRTH</td>
                </tr>
                <tr>
                  <td className="left-col">
                    <FormControl fullWidth>
                      <Select
                        variant="standard"
                        labelId="demo-simple-select-label"
                        className="form-control-mt-1"
                        disableUnderline={true}
                        id="demo-simple-select"
                        value={gender}
                        onChange={handleChangeGender}
                      >
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"female"}>Female</MenuItem>
                        <MenuItem value={"others"}>Others</MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                  <td className="right-col">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        className="form-control-mt-1"
                        InputProps={{ disableUnderline: true }}
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        // PaperProps={{
                        //   sx: {
                        //     "& .MuiPickersDay-root": {
                        //       "&.Mui-selected": {
                        //         backgroundColor: { backgroundColor: color },
                        //       },
                        //     },
                        //     "& .MuiPickersMonth-root": {
                        //       "&.Mui-selected": {
                        //         backgroundColor: { backgroundColor: color },
                        //       },
                        //     },
                        //   },
                        // }}
                        renderInput={(params) => (
                          <TextField
                            variant="standard"
                            {...params}
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
                  type=""
                  disableUnderline={true}
                  ref={userRef}
                  className="form-control-mt-1"
                  required={true}
                  onChange={(e) => {
                    setUsernameReg(e.target.value);
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
              <label class="tnc">
                <input
                  type="checkbox"
                  required={true}
                  name="checkbox-required"
                />
                <span class="checkmark"></span> I agree to{" "}
                <a>
                  <Link to="/" className="tnc-link">
                    Terms & Conditions
                  </Link>
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
                  <Link to="/login" className="signin-link">
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
