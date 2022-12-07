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

  const [addressDetails, setAddressDetails] = useState([]);

  const [profileDetails, setProfileDetails] = useState({});

  useEffect(() => {
    GetUserAddress(userId.user_id).then((response) => {
      if (!response) {
        setAddressDetails([]);
      } else {
        setAddressDetails(response);
      }
    });
  }, [userId.user_id]);

  useEffect(() => {
    setProfileDetails({});
    FetchUser(userId.user_id).then(setProfileDetails);
  }, [userId.user_id]);

  const [transactionDetails, setTransactionDetails] = useState([]);

  useEffect(() => {
    FetchTransaction(userId.user_id).then(async (response) => {
      if (!response) {
        setTransactionDetails([]);
      } else {
        setTransactionDetails(response);
      }
    });
  }, [userId.user_id]);

  const logout = async () => {
    setAuth({});
    navigate("/");
  };

  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <h3>My Account</h3>
      </div>
      <div className="logout">
        <p onClick={logout}>Log Out</p>
      </div>
      <div className="order-history-container">
        <h6>Order history</h6>
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
            <tbody>
              {transactionDetails?.map((v, i) => (
                <tr key={i}>
                  <td>{transactionDetails[i]?.product_name}</td>
                  <td>{transactionDetails[i]?.product_quantity}</td>
                  <td>RM{transactionDetails[i]?.product_price.toFixed(2)}</td>
                  <td>
                    {new Date(
                      transactionDetails[i]?.transaction_timestamp
                    ).toLocaleString()}
                  </td>
                  <td>
                    RM{transactionDetails[i]?.transaction_total.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="account-details-container">
        <h6>Account Details</h6>
        <div>
          <table className="account-details-table">
            <tr>
              <th>
                Available credits:<text className="RM">RM</text>
                <text className="credit-value">
                  {profileDetails?.user_credit?.toFixed(2)}
                </text>
              </th>
              <th></th>
            </tr>
            <tr>
              <td className="user-name">
                {profileDetails?.first_name} {profileDetails?.last_name}
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
              <td>{profileDetails?.email}</td>
            </tr>
            <tr>
              <td className="view-address">
                <a>
                  <p
                    className="view-address-link"
                    onClick={() => {
                      if (addressDetails.length === undefined) {
                        navigate("/add-address");
                      } else if (addressDetails.length !== undefined) {
                        navigate("/profile/addresses");
                      }
                    }}
                  >
                    View Addresses [
                    {addressDetails.length === undefined
                      ? 0
                      : addressDetails.length}
                    ]
                  </p>
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
