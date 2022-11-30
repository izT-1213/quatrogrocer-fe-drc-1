import React, { useState, useEffect, useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { GetUserAddress, FetchUser } from "../../function.jsx";
import jwt_decode from "jwt-decode";
import AuthContext from "../../Components/context/AuthProvider.js";
import "./address.css";

function YourShippingAddressPage() {
  const navigate = useNavigate();
  const jwtToken = useContext(AuthContext).auth?.token;
  const userId = jwt_decode(jwtToken);

  const [addressDetails, setAddressDetails] = useState({});

  const [profileDetails, setProfileDetails] = useState({});

  useEffect(() => {
    setAddressDetails({});
    GetUserAddress(userId.user_id).then(setAddressDetails);
  }, [userId.user_id]);

  useEffect(() => {
    setProfileDetails({});
    FetchUser(userId.user_id).then(setProfileDetails);
  }, [userId.user_id]);

  return (
    <div className="address-page-container">
      <div className="address-page-header">
        <h3>My Account</h3>
        <div className="your-shipping-address-container">
          <p>Your Shipping Address</p>
        </div>
        <div className="shipping-details-container">
          <div className="shipping-details-table">
            <table className="address-details-table">
              <tr>
                <th className="user-name">
                  {profileDetails.first_name} {profileDetails.last_name}
                </th>
              </tr>
              <tr>
                <td>60186907892</td>
              </tr>
              <tr>
                <td>sjparty@gmail.com</td>
              </tr>
            </table>
          </div>
          <div>
            {addressDetails?.map(function (key, index) {
              return (
                <div key={index}>
                  <tr>
                    <td className="address">
                      {addressDetails[index]?.address_line_1}
                    </td>
                  </tr>
                  <tr>
                    <td className="address">
                      {addressDetails[index]?.address_line_2}
                    </td>
                  </tr>
                  <tr>
                    <td className="address">
                      {addressDetails[index]?.address_line_3}
                    </td>
                  </tr>
                  <tr>
                    <td className="address">
                      {addressDetails[index]?.postcode}
                    </td>
                  </tr>
                  <tr>
                    <td className="address">{addressDetails[index]?.state}</td>
                  </tr>
                </div>
              );
            })}
          </div>
          <br></br>
          <div className="links">
            <Link to="/edit-address" className="edit-link">
              Edit
            </Link>

            <div className="vertical-line"></div>

            <Link to="/delete-address" className="delete-btn">
              Delete
            </Link>
          </div>
        </div>
      </div>

      <div className="navigation-buttons">
        <div className="return">
          <ArrowBackIosIcon />
          <p onClick={() => navigate("/profile")}>Return to Account Details</p>
        </div>

        <button
          className="add-address-btn"
          onClick={() => navigate("/add-address")}
        >
          <AiOutlinePlusCircle />
          Add New Address
        </button>

        {/* <button className="add-address-btn">
          <Link to="/add-address" className="add-address-link">
            <AiOutlinePlusCircle />
            Add New Address
          </Link>
        </button> */}
      </div>
    </div>
  );
}

export default YourShippingAddressPage;
