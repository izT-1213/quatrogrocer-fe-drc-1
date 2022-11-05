import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import "../EditProfilePage/edit-profile.css";

function EditProfilePage() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

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
    <div className="edit-profile-page-container">
      <div className="profile-page-header">
        <h1>My Account</h1>
      </div>
      <div className="edit-account-details-container">
        <h3>Account Details</h3>
        <div className="edit-account-details-table-container">
          <table className="edit-account-details-table">
            <thead>
              <tr className="input-label">
                <td className="right-column">First Name</td>
                <td>Last Name</td>
              </tr>
              <tr>
                <td className="right-column">
                  <Input
                    type="string"
                    disableUnderline={true}
                    className="form-control-mt-1"
                  />
                </td>
                <td>
                  <Input
                    type="string"
                    disableUnderline={true}
                    className="form-control-mt-1"
                  />
                </td>
              </tr>
              <tr className="input-label">
                <td className="right-column">Email</td>
                <td>Phone Number</td>
              </tr>
              <tr>
                <td className="right-column">
                  <Input
                    type="string"
                    disableUnderline={true}
                    className="form-control-mt-1"
                  />
                </td>
                <td>
                  <Input
                    type="string"
                    disableUnderline={true}
                    className="form-control-mt-1"
                  />
                </td>
              </tr>
              <tr className="input-label">
                <td className="right-column">Gender</td>
                <td>Date Of Birth</td>
              </tr>
              <tr>
                <td className="right-column">
                  <Input
                    type="string"
                    disableUnderline={true}
                    className="form-control-mt-1"
                  />
                </td>
                <td>
                  <Input
                    type="string"
                    disableUnderline={true}
                    className="form-control-mt-1"
                  />
                </td>
              </tr>
              <tr className="input-label">
                <td className="right-column">Password</td>
              </tr>
              <tr>
                <td className="right-column">
                  <Input
                    className="form-control-mt-1"
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
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
