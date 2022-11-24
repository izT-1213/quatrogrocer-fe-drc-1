import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton, InputAdornment, Input } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { TextField } from "@mui/material";
import "../EditProfilePage/edit-profile.css";

import { UpdateProfileFunc } from "../../../function";

import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AuthContext from "../../../Components/context/AuthProvider.js";
import jwt_decode from "jwt-decode";

function EditProfilePage() {
  const jwtToken = useContext(AuthContext).auth?.token;
  const userId = jwt_decode(jwtToken);
  const color = "#009688";
  const navigate = useNavigate();

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [dob, setDOB] = useState("");

  const [profileValues, updateProfileValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    oldpassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const errRef = useRef();
  const handleDOBChange = (newDOB) => {
    setDOB(newDOB);
  };

  const editProfile = async (e) => {
    e.preventDefault();
    // console.log(profileValues);
    console.log(validate(profileValues));
    setFormErrors(validate(profileValues, dob));

    if (Object.keys(formErrors).length === 0) {
      UpdateProfileFunc(
        profileValues.first_name.toString(),
        profileValues.last_name.toString(),
        profileValues.email.toString(),
        dob.toString(),
        profileValues.oldpassword.toString(),
        profileValues.password.toString(),
        userId.user_id
      );
      // navigate("/profile");
    }
  };

  const validate = (values, dob) => {
    const errors = {};
    // const regex=

    if (
      !values.first_name &&
      !values.last_name &&
      !values.email &&
      !dob &&
      !values.oldpassword &&
      !values.password
    ) {
      errors.first_name = "*First Name is required";
      errors.last_name = "*Last Name is required";
      errors.email = "*Email is required";
      errors.dob = "*DOB is required";
      errors.oldpassword = "*Old password is required";
      errors.password = "*New Password is required";
      console.log("erorrrrrrr");
    }
    return errors;

    // if (!values.first_name) {
    //   errors.first_name = "*First Name is required";
    // }
    // if (!values.last_name) {
    //   errors.last_name = "*Last Name is required";
    // }
    // if (!values.email) {
    //   errors.email = "*Email is required";
    // }

    // if (!dob) {
    //   errors.dob = "*DOB is required";
    // }

    // if (!values.oldpassword) {
    //   errors.oldpassword = "*Old password is required";
    // }

    // if (!values.password) {
    //   errors.password = "*New Password is required";
    // }

    // if pw1 === pw2
    //editProfile
    //else
    //throw error
    //
    //
    //

    return errors;
  };

  const handleClickShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="edit-profile-page-container">
      <div className="profile-page-header">
        <h1>My Account</h1>
      </div>
      <div className="return">
        <ArrowBackIosIcon />
        <p>
          <Link to={"/profile"}>Return to Account Details</Link>
        </p>
      </div>
      <div className="edit-account-details-container">
        <h3>Account Details</h3>
        <div className="edit-account-details-table-container">
          <table className="edit-account-details-table" id="table">
            <tr className="input-label">
              <td className="left-column">First Name</td>
              <td className="right-column">Last Name</td>
            </tr>
            <tr>
              <td className="left-column">
                <Input
                  type="string"
                  disableUnderline={true}
                  className="form-control-mt-1"
                  placeholder="First Name"
                  onChange={(e) => {
                    updateProfileValues({
                      ...profileValues,
                      first_name: e.target.value,
                    });
                  }}
                  value={profileValues.first_name}
                />
              </td>
              <td className="right-column">
                <Input
                  type="string"
                  disableUnderline={true}
                  className="form-control-mt-1"
                  placeholder="Last Name"
                  onChange={(e) => {
                    updateProfileValues({
                      ...profileValues,
                      last_name: e.target.value,
                    });
                  }}
                  value={profileValues.last_name}
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <div className="errMsg">
                  {formErrors.first_name && (
                    <p
                      ref={errRef}
                      className={formErrors.first_name ? "errmsg" : "offscreen"}
                      aria-live="assertive"
                    >
                      {formErrors.first_name}
                    </p>
                  )}
                </div>
              </td>
              <td>
                {" "}
                <div className="errMsg">
                  {formErrors.last_name && (
                    <p
                      ref={errRef}
                      className={formErrors.last_name ? "errmsg" : "offscreen"}
                      aria-live="assertive"
                    >
                      {formErrors.last_name}
                    </p>
                  )}
                </div>
              </td>
            </tr>
            <tr className="input-label">
              <td className="left-column">Email</td>
              <td className="right-column">Date of Birth</td>
            </tr>
            <tr>
              <td className="left-column">
                <Input
                  type="string"
                  disableUnderline={true}
                  className="form-control-mt-1"
                  placeholder="Email"
                  onChange={(e) => {
                    updateProfileValues({
                      ...profileValues,
                      email: e.target.value,
                    });
                  }}
                  value={profileValues.email}
                />
              </td>
              <td className="right-column">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    className="form-control-mt-1"
                    InputProps={{ disableUnderline: true }}
                    inputFormat="MM/DD/YYYY"
                    value={dob}
                    onChange={handleDOBChange}
                    required={true}
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
            <tr>
              <td>
                {" "}
                <div className="errMsg">
                  {formErrors.email && (
                    <p
                      ref={errRef}
                      className={formErrors.email ? "errmsg" : "offscreen"}
                      aria-live="assertive"
                    >
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </td>
              <td>
                {" "}
                <div className="errMsg">
                  {formErrors.dob && (
                    <p
                      ref={errRef}
                      className={formErrors.dob ? "errmsg" : "offscreen"}
                      aria-live="assertive"
                    >
                      {formErrors.dob}
                    </p>
                  )}
                </div>
              </td>
            </tr>

            <tr className="input-label">
              <td className="left-column">Old Password</td>
              <td className="right-column">New Password</td>
            </tr>
            <tr>
              <td className="left-column">
                <Input
                  className="form-control-mt-1"
                  type={passwordVisibility ? "text" : "password"}
                  disableUnderline={true}
                  placeholder="Old Password"
                  onChange={(e) => {
                    updateProfileValues({
                      ...profileValues,
                      oldpassword: e.target.value,
                    });
                  }}
                  value={profileValues.oldpassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {passwordVisibility ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </td>
              <td className="right-column">
                <Input
                  className="form-control-mt-1"
                  type={passwordVisibility ? "text" : "password"}
                  disableUnderline={true}
                  placeholder="New Password"
                  onChange={(e) => {
                    updateProfileValues({
                      ...profileValues,
                      password: e.target.value,
                    });
                  }}
                  value={profileValues.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {passwordVisibility ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <div className="errMsg">
                  {formErrors.oldpassword && (
                    <p
                      ref={errRef}
                      className={
                        formErrors.oldpassword ? "errmsg" : "offscreen"
                      }
                      aria-live="assertive"
                    >
                      {formErrors.oldpassword}
                    </p>
                  )}
                </div>
              </td>
              <td>
                {" "}
                <div className="errMsg">
                  {formErrors.password && (
                    <p
                      ref={errRef}
                      className={formErrors.password ? "errmsg" : "offscreen"}
                      aria-live="assertive"
                    >
                      {formErrors.password}
                    </p>
                  )}
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="address-details-container">
        <h3>Primary Address</h3>
        <div>
          <table className="address-details-table">
            <tr>
              <th className="user-name">Steven James</th>
            </tr>
            <tr>
              <td className="address">71, Persiaran Tengku Ampuan Rahimah</td>
            </tr>
            <tr>
              <td className="address">Taman Sri Andalas</td>
            </tr>
            <tr>
              <td className="address">41200</td>
            </tr>
            <tr>
              <td className="address">Klang</td>
            </tr>
            <tr>
              <td className="address">Selangor</td>
            </tr>
            <tr>
              <td>60186907892</td>
            </tr>
            <tr>
              <td>sjparty@gmail.com</td>
            </tr>
            <tr>
              <td className="view-address">
                <a>
                  <Link to="/profile/addresses" className="view-address-link">
                    View Addresses [1]
                  </Link>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="buttons-container">
        <button className="cancel">Cancel</button>
        <div className="submit-button-container">
          <button
            className="submit-edit"
            type="submit"
            onClick={
              // validate
              editProfile
            }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
