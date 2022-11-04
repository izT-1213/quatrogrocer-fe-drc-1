import React from "react";
import { Link } from "react-router-dom";
import "../ProfilePage/profile.css";

function UserProfilePage() {
  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <h1>My Account</h1>
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
                  <Link to="/edit-profile" className="edit-link">
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
                  <Link to="/addresses" className="view-address-link">
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
