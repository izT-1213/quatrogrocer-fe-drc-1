import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Components/context/AuthProvider.js";
import "../ProfilePage/profile.css";
import { FetchTransaction } from "../../function";
import jwtDecode from "jwt-decode";

function UserProfilePage() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const jwtToken = useContext(AuthContext).auth?.token;
  const userId = jwtDecode(jwtToken);

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
    </div>
  );
}

export default UserProfilePage;
