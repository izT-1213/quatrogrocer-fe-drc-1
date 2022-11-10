import React from "react";
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./address.css";
//history
import { useNavigate } from "react-router-dom";

function YourShippingAddressPage() {
  const navigate = useNavigate();

  return (
    <div className="address-page-container">
      <div className="address-page-header">
        <h1>My Account</h1>
        <div className="your-shipping-address-container">
          <h3>Your Shipping Address</h3>
        </div>
        <div className="shipping-details-container">
          <div className="shipping-details-table">
            <h3 className="user-name">Steven James (Default)</h3>
            <br></br>

            <p className="phone-number">60186907892</p>
            <br></br>

            <p className="address">71, Persiaran Tengku Ampuan Rahimah</p>

            <p className="address">Taman Sri Andalas</p>

            <p className="address">41200</p>

            <p className="address">Klang</p>

            <p className="address">Selangor</p>

            <p className="address">Malaysia</p>
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
        <div className="back-to-account-container">
          <div className="left-icon">
            <SlArrowLeft />
          </div>

          <button className="back-btn" onClick={() => navigate("/profile")}>
            Return to Account Details
          </button>
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
