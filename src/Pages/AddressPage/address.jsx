import React from "react";
import { Link } from "react-router-dom";
import "../AddressPage/address.css";
import { SlArrowLeft } from "react-icons/sl";
import { AiOutlinePlusCircle } from "react-icons/ai";

function AddressPage() {
  return (
    <div className="address-page-container">
      <div className="address-page-header">
        <h1>My Account</h1>
        <div className="your-shipping-address-container">
          <h3>Your Shipping Address</h3>
          <div className="shipping-details-container">
            <div className="shipping-details-table">
              <h3 className="user-name">Steven James (Default)</h3>

              <p className="phone-number">60186907892</p>

              <p className="address">71, Persiaran Tengku Ampuan Rahimah</p>

              <p className="address">Taman Sri Andalas</p>

              <p className="address">41200</p>

              <p className="address">Klang</p>

              <p className="address">Selangor</p>

              <p className="address">Malaysia</p>

              <div className="links">
                <div className="edit-link-container">
                  <Link to="/edit-address" className="edit-link">
                    Edit
                  </Link>
                </div>

                <div className="vertical-line">|</div>
                <div className="delete-btn-container">
                  <Link to="/delete-address" className="delete-btn">
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navigation-buttons">
        <Link to="profile" className="back-to-account">
          <SlArrowLeft />
          <h4>Return to Account Details</h4>
        </Link>
        <div className="add-address-container">
          <Link to="add-new-address">
            <button className="add-address-btn">
              <AiOutlinePlusCircle />
              Add New Address
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddressPage;
