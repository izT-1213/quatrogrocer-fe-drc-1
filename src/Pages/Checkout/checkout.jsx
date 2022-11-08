import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@material-ui/core/Input";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../Checkout/checkout.css";

function CheckoutPage() {
  return (
    <div className="checkout-page-container">
      <div className="checkout-page-header">
        <p>Cart</p> <ArrowForwardIosIcon />
        <p>Checkout</p>
      </div>
      <div className="shipping-payment-content-container">
        <div className="contact-info">
          <h3>01</h3>
          <h1>Contact Information</h1>
          <hr />
          <h3>Steven James</h3>
          <p>sjparty@gmail.com</p>
          <p>60186907892</p>
        </div>
        <div className="shipping-dets">
          <h3>02</h3>
          <h1>Shipping Details</h1>
          <hr />
          <h3>Shipping Address</h3>
          <div className="user-address">
            <h3>Steven James</h3>
            <p>
              71 Persiaran Tengku Ampuan Rahimah Taman Sri Andalas, 41200 Klang,
              Selangor, Malaysia
            </p>
            <p>60186907892 </p>
          </div>
        </div>
        <div className="payment-dets">
          <h3>03</h3>
          <h1>Payment Details</h1>
          <hr />
          <h3>Payment Method</h3>
          <div className="quatro-creds"></div>
          <div className="options"></div>
        </div>
      </div>
      <div className="order-summary-container">
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="cart-content">Brocoli</div>
          <div className="vouchers">
            <div className="voucher-texts">
              {" "}
              <p className="title">Vouchers</p>
              <Input
                placeholder="Don’t forget to apply before checkout"
                className="desc"
                disableUnderline={true}
              />
            </div>
            <div className="voucher-arrow">
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div className="total"></div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
