import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@material-ui/core/Input";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { ArrowForwardIos, ExpandMore, ExpandLess } from "@mui/icons-material";
import "../Checkout/checkout.css";

function CheckoutPage() {
  return (
    <div className="checkout-page-container">
      <div className="checkout-page-header">
        <p>Cart</p> <ArrowForwardIos />
        <p>Checkout</p>
      </div>
      <div className="shipping-payment-content-container">
        <div className="contact-info">
          <h2>01</h2>
          <h1>Contact Information</h1>
          <hr />
          <div className="inner-content">
            <p className="user-name">Steven James</p>
            <p>sjparty@gmail.com</p>
            <p>60186907892</p>
          </div>
        </div>
        <div className="shipping-dets">
          <h2>02</h2>
          <h1>Shipping Details</h1>
          <hr />
          <div className="inner-content">
            <h3>Shipping Address</h3>
            <div className="user-address-dropdown">
              <p className="user-name">Steven James</p>
              <p className="address">
                71 Persiaran Tengku Ampuan Rahimah Taman Sri Andalas, 41200
                Klang, Selangor, Malaysia
              </p>
              <p className="phone-num">60186907892 </p>
              <div className="addr-dropdown-icon">
                <ExpandMore />
              </div>
            </div>
          </div>
        </div>
        <div className="payment-dets">
          <h2>03</h2>
          <h1>Payment Details</h1>
          <hr />
          <div className="inner-content">
            <h3>Payment Method</h3>
            <div>
              <RadioGroup defaultValue="quatro-credits">
                <div className="quatro-creds">
                  <FormControlLabel
                    value="quatro-credits"
                    label="Quatro Credits"
                    control={<Radio className="radio-buttom-style" />}
                  />
                </div>
                <div className="options">
                  <FormControlLabel
                    value="others"
                    label="Credit Cards, FPX Online, E-Wallets"
                    control={<Radio className="radio-buttom-style" />}
                  />
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
      <div className="order-summary-container">
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="cart-content">Brocoli</div>
          <div className="vouchers">
            <div className="voucher-texts">
              <p className="title">Vouchers</p>
              <Input
                placeholder="Don’t forget to apply before checkout"
                className="desc"
                disableUnderline={true}
              />
            </div>
            <div className="voucher-arrow">
              <ArrowForwardIos />
            </div>
          </div>
          <div className="total"></div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
