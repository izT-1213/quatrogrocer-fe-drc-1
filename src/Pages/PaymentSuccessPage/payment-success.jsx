// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Input from "@material-ui/core/Input";
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
  // function handleAddAddress() {}
  function clearInput() {
    document.getElementById("form").reset();
  }

  const navigate = useNavigate();
  return (
    <div className="payment-success-page-container">
      <div className="container-1">
        <div className="payment-success-header">
          <h1>Payment Success !</h1> <br></br>
        </div>
        <div className="navigation-container">
          <div className="left-icon">
            <SlArrowLeft />
          </div>

          <button class="back-btn" onClick={() => navigate("/home")}>
            Return to Home
          </button>
        </div>
        <div className="order-summary-container">
          <h2>Order Summary</h2> <br></br>
          <div className="order-form-container">
            <div className="order-form-content">
              <h3>Shipping Details</h3>
              <form className="order-form" id="form">
                <div className="order-line-container">
                  <div className="order-line-1"></div>

                  <div className="name">
                    <h4>Steven James</h4>
                  </div>

                  <div className="address">
                    <label>
                      71 Persiaran Tengku Ampuan Rahmiah Taman Sri Andalas,
                      41200 Klang, Selangor, Malaysia
                    </label>
                  </div>
                </div>

                <div className="phonenumber-container">
                  <div className="phonenumber">
                    <label>0186907892</label>
                  </div>
                </div>
                {/* <label class="default-address">
                  <input type="checkbox" id="input" />
                  <span class="checkmark"></span> Set as default address
                </label> */}
              </form>
            </div>
            <div className="column">
              <div className="order-form-content-1">
                <h3>China Brocoli</h3>
                <form className="order-form" id="form">
                  <div className="order-line-container">
                    <div className="order-line-1"></div>

                    <div className="name">
                      <h4>RM3.59</h4>
                    </div>

                    <div className="address">
                      <label>Quantity: 1</label>
                    </div>
                  </div>

                  {/* <label class="default-address">
                  <input type="checkbox" id="input" />
                  <span class="checkmark"></span> Set as default address
                </label> */}
                </form>
              </div>
              <div className="order-form-content-2">
                <h3>Pickles Jar</h3>
                <form className="order-form" id="form">
                  <div className="order-line-container">
                    <div className="order-line-1"></div>

                    <div className="name">
                      <h4>RM16.59</h4>
                    </div>

                    <div className="address">
                      <label>Quantity: 1</label>
                    </div>
                  </div>

                  {/* <label class="default-address">
                  <input type="checkbox" id="input" />
                  <span class="checkmark"></span> Set as default address
                </label> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;
