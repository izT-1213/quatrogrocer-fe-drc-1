import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { GetUserAddress, FetchUser } from "../../function.jsx";
import AuthContext from "../../Components/context/AuthProvider.js";
import "../ProfilePage/profile.css";

function UserProfilePage() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
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

  const logout = async () => {
    setAuth({});
    navigate("/");
  };
  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <h1>My Account</h1>
      </div>
      <div className="logout">
        <p onClick={logout}>Log out</p>
      </div>
      <div className="order-history-container">
        <h3>Order history</h3>
        <div className="order-history-table-container">
          <table className="order-history-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Payment Status</th>
                <th>Fullfillment Status</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>BR123</td>
                <td>3 Nov 2022</td>
                <td>Completed</td>
                <td>Completed</td>
                <td>RM123.00</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="account-details-container">
        <h3>Account Details</h3>
        <div>
          <table className="account-details-table">
            <tr>
              <th>
                Available credits:<text className="RM">RM</text>
                <text className="credit-value">200</text>
              </th>
              <th></th>
            </tr>
            <tr>
              <td className="user-name">Steven James</td>
              <td className="edit">
                <a>
                  <Link to="/profile/edit-profile" className="edit-link">
                    Edit
                  </Link>
                </a>
              </td>
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
              <td className="address">{addressDetails[0]?.postcode}</td>
            </tr>
            <tr>
              <td className="address">{addressDetails[0]?.state}</td>
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
    </div>
  );
}

export default UserProfilePage;
