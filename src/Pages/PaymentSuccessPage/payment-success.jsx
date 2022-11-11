// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Input from "@material-ui/core/Input";
import "./payment-success.css";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
// import {
//   allPostcodes,
//   getStates,
//   getCities,
//   getPostcodes,
//   findPostcode,
// } from "malaysia-postcodes";
// import YourShippingAddressPage from "../address";

function PaymentSuccessPage() {
  const navigate = useNavigate();

  var itemName = "China Brocoli";
  var itemPrice = 3.59;
  var itemQuantity = 1;
  var subtotal = 20.18;
  var shipping = 6.0;
  var total = 26.18;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Payment Success!</h1>
        <button className="back-btn">
          <SlArrowLeft />
          Return to Home
        </button>
      </div>

      <div className="main-container">
        <div className="header-order-summary">
          <text>Order Summary</text>
        </div>
        <div className="content">
          <div className="shipping-details-container">
            <div className="details-content">
              <h1 className="header-shipping-details">Shipping Details</h1>
              <div className="content-shipping-details">
                <div className="name">
                  <p>Steven James</p>
                </div>
                <div className="address">
                  <p className="address-line-1">
                    71 Persiaran Tengku Ampuan Rahimah Taman Sri Andalas, 41200
                  </p>
                  <p className="address-line-2">Klang, Selangor, Malaysia</p>
                </div>
                <div className="number">
                  <p>60186907892</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-summary">
            <div className="cart-content">
              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                </div>
                <p className="product-name">{itemName}</p>
                <p className="product-price">RM {itemPrice.toFixed(2)}</p>
                <div className="quantity">
                  <p className="product-quantity">Quantity: {itemQuantity}</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                </div>
                <p className="product-name">{itemName}</p>
                <p className="product-price">RM {itemPrice.toFixed(2)}</p>
                <div className="quantity">
                  <p className="product-quantity">Quantity: {itemQuantity}</p>
                </div>
              </div>
            </div>
            <div className="calculation">
              <div>
                <text className="title">Subtotal: RM</text>
                <span className="value">
                  {"  "}
                  {subtotal.toFixed(2)}
                </span>
              </div>
              <div>
                <text className="title">Shipping: RM</text>
                <span className="value">
                  {"  "}
                  {shipping.toFixed(2)}
                </span>
              </div>
              <hr></hr>
              <div>
                <text className="title">Total: RM</text>
                <span className="value">
                  {"  "}
                  {total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;
