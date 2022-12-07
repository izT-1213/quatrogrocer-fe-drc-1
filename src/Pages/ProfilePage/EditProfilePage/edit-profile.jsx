import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton, InputAdornment, Input } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { TextField } from "@mui/material";
import "../EditProfilePage/edit-profile.css";
import validator from "validator";

import {
  UpdatePasswordFunc,
  UpdateProfileFunc,
  FetchUser,
  GetUserAddress,
} from "../../../function";

import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AuthContext from "../../../Components/context/AuthProvider.js";
import jwt_decode from "jwt-decode";

function EditProfilePage() {
  const jwtToken = useContext(AuthContext).auth?.token;
  const userId = jwt_decode(jwtToken);
  const color = "#009688";
  const navigate = useNavigate();
  const [profileDetails, setProfileDetails] = useState({});

  useEffect(() => {
    setProfileDetails({});
    FetchUser(userId.user_id).then(setProfileDetails);
  }, [userId.user_id]);

  const [addressDetails, setAddressDetails] = useState([]);

  useEffect(() => {
    GetUserAddress(userId.user_id).then(setAddressDetails);
  }, [userId.user_id]);

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [dob, setDOB] = useState("");

  const [profileValues, updateProfileValues] = useState({
    first_name: profileDetails.first_name,
    last_name: profileDetails.last_name,
    email: profileDetails.email,
    password: "",
    oldpassword: "",
  });

  const [formErrors, setFormErrors] = useState({ test: "false" });
  const [errMsg, setErrMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [confirmMsg, setConfirmMsg] = useState("");

  const handleDOBChange = (newDOB) => {
    setDOB(newDOB);
  };
  //
  useEffect(() => {
    setErrMsg("");
  }, [profileValues.oldpassword]);

  useEffect(() => {
    setMsg("");
  }, [
    profileValues.first_name,
    profileValues.last_name,
    profileValues.email,
    dob,
    profileValues.oldpassword,
    profileValues.password,
  ]);

  const editProfile = async (e) => {
    e.preventDefault();
    setFormErrors(validate(profileValues));

    if (validate(profileValues === true) && formErrors.test !== "false") {
      setConfirmMsg("Please click again to confirm.");
    } else if (validate(profileValues === true) && !formErrors.test) {
      setConfirmMsg("Please click again to confirm.");
    }

    if (Object.keys(formErrors).length === 0) {
      if (
        (profileValues.first_name ||
          profileValues.last_name ||
          dob ||
          profileValues.email) &&
        profileValues.oldpassword &&
        profileValues.password
      ) {
        const message2 = await UpdatePasswordFunc(
          profileValues.oldpassword,
          profileValues.password,
          userId.user_id
        );
        if (message2 === undefined) {
          const message1 = await UpdateProfileFunc(
            profileValues.first_name,
            profileValues.last_name,
            dob,
            profileValues.email,
            profileValues.password,
            userId.user_id
          );
          if (message1 || message2 === undefined) {
            setErrMsg("");
            alert("Profile is updated successfully!");
            navigate("/profile");
          } else {
            setErrMsg(message1.error);
          }
        } else {
          setErrMsg(message2.error);
        }
      } else if (
        (profileValues.first_name ||
          profileValues.last_name ||
          dob ||
          profileValues.email) &&
        profileValues.oldpassword &&
        !profileValues.password
      ) {
        const message1 = await UpdateProfileFunc(
          profileValues.first_name,
          profileValues.last_name,
          dob,
          profileValues.email,
          profileValues.oldpassword,
          userId.user_id
        );

        if (message1 === undefined) {
          setErrMsg("");
          alert("Profile is updated successfully!");
          navigate("/profile");
        } else {
          setErrMsg(message1.error);
        }
      } else if (
        !profileValues.first_name &&
        !profileValues.last_name &&
        !dob &&
        !profileValues.email &&
        profileValues.oldpassword &&
        profileValues.password
      ) {
        const message2 = await UpdatePasswordFunc(
          profileValues.oldpassword,
          profileValues.password,
          userId.user_id
        );
        if (message2 === undefined) {
          alert("Profile is updated successfully!");
          navigate("/profile");
        } else {
          setErrMsg(message2.error);
        }
      }
    }
  };

  const validate = (values) => {
    const errors = {};

    // if (values.first_name||values.last_name||values.email||values.oldpassword||values.password){

    // }
    if (values.first_name) {
      if (!validator.isAlpha(values.first_name)) {
        errors.first_name = "*First name should contain only alphabets";
      } else if (validator.isEmpty(values.oldpassword)) {
        errors.oldpassword = "Please key in current password to update changes";
      }
    }

    if (values.last_name) {
      if (!validator.isAlpha(values.last_name)) {
        errors.last_name = "*Last name should contain only alphabets";
      } else if (validator.isEmpty(values.oldpassword)) {
        errors.oldpassword =
          "*Please key in current password to update changes";
      }
    }

    if (values.email) {
      if (!validator.isEmail(values.email)) {
        errors.email = "*Email is in incorrect format";
      } else if (validator.isEmpty(values.oldpassword)) {
        errors.oldpassword =
          "*Please key in current password to update changes";
      }
    }
    return Object.keys(errors).length ? errors : true;
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
        <h3>My Account</h3>
      </div>
      <div className="return">
        <ArrowBackIosIcon />
        <p onClick={() => navigate("/profile")}>Return to Account Details</p>
      </div>
      <div className="edit-account-details-container">
        <h6>Account Details</h6>
        <p className="warning">Current password is required to save changes</p>
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
                    setFormErrors(
                      validate(
                        updateProfileValues({
                          ...profileValues,
                          first_name: e.target.value,
                        })
                      )
                    );
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
                    setFormErrors(
                      validate(
                        updateProfileValues({
                          ...profileValues,
                          last_name: e.target.value,
                        })
                      )
                    );
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
                  type="email"
                  disableUnderline={true}
                  className="form-control-mt-1"
                  placeholder="Email"
                  onChange={(e) => {
                    setFormErrors(
                      validate(
                        updateProfileValues({
                          ...profileValues,
                          email: e.target.value,
                        })
                      )
                    );
                  }}
                  value={profileValues.email}
                />
              </td>
              <td className="right-column">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    className="form-control-mt-1"
                    InputProps={{ readOnly: true, disableUnderline: true }}
                    inputFormat="MM/DD/YYYY"
                    value={dob}
                    onChange={handleDOBChange}
                    required={true}
                    maxDate={Date.now()}
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
            <tr>
              <td>
                {" "}
                <div className="errMsg">
                  {formErrors.email && (
                    <p
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
              <td className="left-column">Current Password</td>
              <td className="right-column">New Password</td>
            </tr>
            <tr>
              <td className="left-column">
                <Input
                  className="form-control-mt-1"
                  type={passwordVisibility ? "text" : "password"}
                  disableUnderline={true}
                  placeholder="Current Password"
                  onChange={(e) => {
                    setFormErrors(
                      validate(
                        updateProfileValues({
                          ...profileValues,
                          oldpassword: e.target.value,
                        })
                      )
                    );
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
                    setFormErrors(
                      validate(
                        updateProfileValues({
                          ...profileValues,
                          password: e.target.value,
                        })
                      )
                    );
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
                <div className="errMsg">
                  {formErrors.oldpassword
                    ? formErrors.oldpassword && (
                        <p
                          className={
                            formErrors.oldpassword ? "errmsg" : "offscreen"
                          }
                          aria-live="assertive"
                        >
                          {formErrors.oldpassword}
                        </p>
                      )
                    : errMsg
                    ? errMsg && (
                        <p
                          className={errMsg ? "errmsg" : "offscreen"}
                          aria-live="assertive"
                        >
                          {errMsg}
                        </p>
                      )
                    : ""}
                </div>
              </td>
              <td>
                <div className="msg">
                  {msg && (
                    <p
                      className={msg ? "errmsg" : "offscreen"}
                      aria-live="assertive"
                    >
                      {msg}
                    </p>
                  )}
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="address-details-container">
        <h6>Primary Address</h6>
        <div>
          <table className="address-details-table">
            <tr>
              <th className="user-name">
                {profileDetails.first_name} {profileDetails.last_name}
              </th>
            </tr>
            <tr>
              <td className="address">{addressDetails[0]?.address_line_1}</td>
            </tr>
            <tr>
              <td className="address">{addressDetails[0]?.address_line_2}</td>
            </tr>
            <tr>
              <td className="address">{addressDetails[0]?.address_line_3}</td>
            </tr>
            <tr>
              <td className="address">
                {addressDetails[0]?.postcode} {addressDetails[0]?.state}
              </td>
            </tr>
            <tr>
              <td>{profileDetails.email}</td>
            </tr>
            <tr>
              <td className="view-address">
                <a>
                  <Link to="/profile/addresses" className="view-address-link">
                    View Addresses [{addressDetails.length}]
                  </Link>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="confirmMsg">
        {confirmMsg && (
          <p
            className={confirmMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {confirmMsg}
          </p>
        )}
      </div>
      <div className="buttons-container">
        <button onClick={() => navigate("/profile")} className="cancel">
          Cancel
        </button>
        <div className="submit-button-container">
          <button
            className="submit-edit"
            type="submit"
            disabled={
              profileValues.oldpassword &&
              (profileValues.email ||
                profileValues.first_name ||
                profileValues.last_name ||
                dob ||
                profileValues.password)
                ? false
                : true
            }
            onClick={editProfile}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
