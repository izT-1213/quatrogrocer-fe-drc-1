import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { TextField } from "@mui/material";
import "../EditProfilePage/edit-profile.css";
import { UpdateProfileFunc, GetPasswordFunc } from "../../../function";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function EditProfilePage() {
  const color = "#009688";
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [profileValues, updateProfileValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    oldpassword: "",
  });

  // const [passwordValues, oldPasswordValues] = useState({
  //   user_id: profileValues.user_id,
  //   password: profileValues.oldpassword,
  // });

  //dob
  const [dob, setDOB] = useState(dayjs(""));
  const handleDOBChange = (newDOB) => {
    setDOB(newDOB);
  };

  const editProfile = async (e) => {
    e.preventDefault();
    // GetPasswordFunc(passwordValues.user_id, passwordValues.password.toString());

    UpdateProfileFunc(
      profileValues.first_name.toString(),
      profileValues.last_name.toString(),
      profileValues.email.toString(),
      dob.toString(),
      profileValues.oldpassword.toString(),
      profileValues.password.toString()
    );
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
                  placeholder="First Name"
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
          <button className="submit-edit" type="submit" onClick={editProfile}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
