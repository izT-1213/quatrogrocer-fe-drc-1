import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@material-ui/core/Input";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import {
  ArrowForwardIos,
  ExpandMore,
  ExpandLess,
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
} from "@mui/icons-material";
import "../Checkout/checkout.css";

function CheckoutPage() {
  const navigate = useNavigate();
  const [showVoucherInput, setVoucherInput] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVoucherInput(false);
    } else {
      setVoucherInput(true);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  const VoucherInput = () => (
    <div>
      <Input className="input" disableUnderline={true} />
    </div>
  );
  const VoucherText = () => (
    <div>
      <p className="title">Vouchers</p>
      <p className="desc">Don’t forget to apply before checkout</p>
    </div>
  );

  const [counter, setCounter] = useState(1);
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSub = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="checkout-page-container">
      <div className="checkout-page-header">
        <p>Cart</p> <ArrowForwardIos />
        <p>Checkout</p>
      </div>
      <div className="shipping-payment-content-container">
        <div className="contact-info">
          <h1>01</h1>
          <h1>Contact Information</h1>
          <hr />
          <div className="inner-content">
            <p className="user-name">Steven James</p>
            <p className="email-addr">sjparty@gmail.com</p>
            <p className="phone-num">60186907892</p>
          </div>
        </div>
        <div className="shipping-dets">
          <h1>02</h1>
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
                <ExpandMore className="expand-arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="payment-dets">
          <h1>03</h1>
          <h1>Payment Details</h1>
          <hr />
          <div className="inner-content">
            <h3>Payment Method</h3>
            <div className="radio-content">
              <RadioGroup defaultValue="quatro-credits">
                <div className="quatro-creds">
                  <FormControlLabel
                    value="quatro-credits"
                    label="Quatro Credits"
                    control={<Radio className="radio-button-style" />}
                  />
                  <div className="credit-balance">RM 200.00</div>
                </div>
                <div className="options">
                  <FormControlLabel
                    value="others"
                    label="Credit Cards, FPX Online, E-Wallets"
                    control={<Radio className="radio-button-style" />}
                  />
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="order-submit">
          <button type="submit" onClick={() => navigate("payment-success")}>
            {" "}
            Place Order{" "}
          </button>
        </div>
      </div>
      <div className="order-summary-container">
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="cart-content">
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
              </div>
              <p className="product-name">China Brocoli</p>
              <p className="product-price">RM 3.59</p>
              <div className="quantity-adjust">
                <IndeterminateCheckBoxOutlined onClick={handleSub} />
                <div className="quantity-value">{counter}</div>
                <AddBoxOutlined onClick={handleAdd} />
              </div>
              <p className="del">Remove</p>
            </div>
          </div>
          <div className="vouchers">
            <div className="voucher-box">
              <div className="voucher-texts" ref={ref}>
                {showVoucherInput ? <VoucherInput /> : <VoucherText />}
              </div>
              <div className="voucher-arrow">
                <ArrowForwardIos />
              </div>
            </div>
          </div>
          <div className="total">
            <table>
              <tr>
                <td className="left-col">Subtotal:</td>
                <td className="right-col">
                  <text className="RM">RM</text>
                  <text className="RM-value">20.18</text>
                </td>
              </tr>
              <tr>
                <td className="left-col">Shipping:</td>
                <td className="right-col">
                  <text className="RM">RM</text>
                  <text className="RM-value">6.00</text>
                </td>
              </tr>
              <tr className="total-row">
                <td className="left-col">Total:</td>
                <td className="right-col">
                  <text className="RM">RM</text>
                  <text className="RM-value">26.18</text>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
