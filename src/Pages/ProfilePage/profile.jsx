import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  GetUserAddress,
  FetchUser,
  FetchTransaction,
} from "../../function.jsx";
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

  const [transactionDetails, setTransactionDetails] = useState([]);

  useEffect(() => {
    setTransactionDetails([]);
    FetchTransaction(userId.user_id).then(setTransactionDetails);
  }, []);

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
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>
            {transactionDetails?.map((v, i) => (
              <tr key={i}>
                <td>{transactionDetails[i]?.product_name}</td>
                <td>{transactionDetails[i]?.product_quantity}</td>
                <td>RM{transactionDetails[i]?.product_price}</td>
                <td>
                  {new Date(
                    transactionDetails[i]?.transaction_timestamp
                  ).toLocaleString()}
                </td>
                <td>RM{transactionDetails[i]?.transaction_total}</td>
              </tr>
            ))}
            {/* <tr>
                <td>{transactionDetails[0]?.product_name}</td>
                <td>{transactionDetails[0]?.product_quantity}</td>
                <td>RM{transactionDetails[0]?.product_price}</td>
                <td>{transactionDetails[0]?.transaction_timestamp}</td>
                <td>RM{transactionDetails[0]?.transaction_total}</td>
              </tr> */}
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
                <text className="credit-value">
                  {profileDetails.user_credit}
                </text>
              </th>
              <th></th>
            </tr>
            <tr>
              <td className="user-name">
                {profileDetails.first_name} {profileDetails.last_name}
              </td>
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
    </div>
  );
}

export default UserProfilePage;
