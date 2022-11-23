import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../EditProfilePage/edit-profile.css";
import { UpdateProfileFunc } from "../../../function";

function EditProfilePage() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const [profileValues, updateProfileValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    oldpassword: "",
    date_of_birth: "",
    user_id: "",
  });

  

  const editProfile = async (e) => {
    e.preventDefault();

    UpdateProfileFunc(
      profileValues.first_name.toString(),
      profileValues.last_name.toString(),
      profileValues.email.toString(),
      profileValues.phone_number.toString(),
      profileValues.date_of_birth.toString(),
      profileValues.oldpassword.toString(),
      profileValues.password.toString(),
      profileValues.user_id
    );
  };


  const validate = () => {
    if (oldPass !== newPass){

    }
    // if pw1 === pw2
    //editProfile
    //else
    //throw error
    //
    //
    //
    editProfile;
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
              <td className="right-column">Phone Number</td>
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
                <Input
                  type="string"
                  disableUnderline={true}
                  className="form-control-mt-1"
                  placeholder="Phone Number"
                  onChange={(e) => {
                    updateProfileValues({
                      ...profileValues,
                      phone_number: e.target.value,
                    });
                  }}
                  value={profileValues.phone_number}
                />
              </td>
            </tr>
            <tr className="input-label">
              <td className="left-column">User ID</td>
              <td className="right-column">Date Of Birth</td>
            </tr>
            <tr>
              <td className="left-column">
                <Input
                  type="string"
                  disableUnderline={true}
                  className="form-control-mt-1"
                  placeholder="User ID"
                  onChange={(e) => {
                    updateProfileValues({
                      ...profileValues,
                      user_id: e.target.value,
                    });
                  }}
                  value={profileValues.user_id}
                />
              </td>
              <td className="right-column">
                <Input
                  type="string"
                  disableUnderline={true}
                  className="form-control-mt-1"
                  placeholder="First Name"
                  onChange={(e) => {
                    updateProfileValues({
                      ...profileValues,
                      date_of_birth: e.target.value,
                    });
                  }}
                  value={profileValues.date_of_birth}
                />
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
                    setOldPass(e.target.value);
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
                    setNewPass(e.target.value);
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
          <button
            className="submit-edit"
            type="submit"
            onClick={() => {
              validate();
              // editProfile;
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
