import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@material-ui/core/Input";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import {
  GetUserAddress,
  FetchUser,
  CheckoutProcess,
  DeleteCart,
  PaidCheckout,
  DeleteTransacCart,
} from "../../function.jsx";
import jwt_decode from "jwt-decode";
import AuthContext from "../../Components/context/AuthProvider.js";
import "../Checkout/checkout.css";

function CheckoutPage() {
  const navigate = useNavigate();
  const jwtToken = useContext(AuthContext).auth?.token;
  const userId = jwt_decode(jwtToken);
  const [showVoucherInput, setVoucherInput] = useState(false);
  const ref = useRef(null);
  var sum = 0;
  var total_items = 0;

  const [cartList, setCartList] = useState([]);

  const [addressDetails, setAddressDetails] = useState([]);

  const [profileDetails, setProfileDetails] = useState({});
  const [radioValue, setRadioValue] = useState("quatro-credits");

  useEffect(() => {
    GetUserAddress(userId.user_id).then((response) => {
      if (response.length === undefined) {
        navigate("/add-address");
      } else {
        setAddressDetails(response);
      }
    });
  }, [userId.user_id]);

  useEffect(() => {
    setProfileDetails({});
    FetchUser(userId.user_id).then(setProfileDetails);
  }, [userId.user_id]);

  useEffect(() => {
    CheckoutProcess(userId.user_id).then((response) => {
      if (response.length > 0) {
        setCartList(response);
        DeleteCart(userId.user_id);
      }
    });
  }, [userId.user_id]);

  const [selectedAddress, setSelectedAddress] = useState({ address: "" });

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

  for (var i = 0; i < cartList?.length; i++) {
    sum = sum + cartList[i]?.transaction_total;
    total_items = total_items + 1;
  }

  const VoucherInput = () => (
    <div>
      <Input
        disabled={true}
        className="input"
        disableUnderline={true}
        placeholder={"Under maintanaince"}
      />
    </div>
  );
  const VoucherText = () => (
    <div>
      <p className="title">Vouchers</p>
      <p className="desc">Don’t forget to apply before checkout</p>
    </div>
  );

  const handleValueChange = (prop) => (event) => {
    setSelectedAddress({ ...selectedAddress, [prop]: event.target.value });
  };

  return (
    <div className="checkout-page-container">
      <div className="checkout-page-header">
        <p>Checkout</p>
      </div>
      <div className="shipping-payment-content-container">
        <div className="contact-info">
          <h1>01</h1>
          <h1>Contact Information</h1>
          <hr />
          <div className="inner-content">
            <p className="user-name">
              {profileDetails?.first_name} {profileDetails?.last_name}
            </p>
            <p className="email-addr">{profileDetails?.email}</p>
            {/* <p className="phone-num">60186907892</p> */}
          </div>
        </div>
        <div className="shipping-dets">
          <h1>02</h1>
          <h1>Shipping Details</h1>
          <hr />
          <div className="inner-content">
            <h3>Shipping Address</h3>
            <FormControl fullWidth>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                className="form-control-mt-1"
                id="demo-simple-select"
                required={true}
                value={selectedAddress.address}
                onChange={handleValueChange("address")}
              >
                {addressDetails?.map(function (key, index) {
                  return (
                    <MenuItem value={addressDetails[index]?.address_id}>
                      {addressDetails[index]?.address_line_1}
                      <br />
                      {addressDetails[index]?.address_line_2}
                      <br />
                      {addressDetails[index]?.address_line_3}
                      <br />
                      {addressDetails[index]?.postcode}{" "}
                      {addressDetails[index]?.state}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="payment-dets">
          <h1>03</h1>
          <h1>Payment Details</h1>
          <hr />
          <div className="inner-content">
            <h3>Payment Method</h3>
            <div className="radio-content">
              <RadioGroup
                onChange={(e) => setRadioValue(e.target.value)}
                defaultValue="quatro-credits"
              >
                <div className="quatro-creds">
                  <FormControlLabel
                    value="quatro-credits"
                    label="Quatro Credits"
                    control={<Radio className="radio-button-style" />}
                  />
                  <div className="credit-balance">
                    RM {profileDetails?.user_credit?.toFixed(2)}
                  </div>
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
            <div className="errMsg">
              <p>
                {radioValue === "quatro-credits"
                  ? " "
                  : "This payment method is under maintainence."}
              </p>
            </div>
          </div>
        </div>
        <div className="order-submit">
          <button
            type="submit"
            disabled={
              selectedAddress.address &&
              radioValue !== "others" &&
              sum + 6 < profileDetails.user_credit
                ? false
                : true
            }
            onClick={async () => {
              const response = await PaidCheckout(userId.user_id, sum + 6);
              if (response.status === 200) {
                navigate("payment-success", {
                  state: {
                    address_id: selectedAddress.address,
                    total_items: total_items,
                  },
                });
              }
            }}
          >
            {" "}
            Place Order{" "}
          </button>
          <p>
            {sum + 6 < profileDetails.user_credit
              ? " "
              : "You don't have enough credits to do this transaction."}
          </p>
        </div>
      </div>
      <div className="order-summary-container">
        <div className="order-summary">
          <h1>Order Summary</h1>
          <div className="cart-content">
            {cartList?.map(function (key, index) {
              return (
                <div className="product-card">
                  <div className="product-image">
                    <img
                      src={
                        cartList[index]?.product_image
                          ? cartList[index]?.product_image
                          : cartList[index]?.discount_product_image
                      }
                      alt={
                        cartList[index]?.product_name
                          ? cartList[index]?.product_name
                          : cartList[index]?.discount_product_name
                      }
                    />
                  </div>
                  <p className="product-name">
                    {cartList[index]?.product_name
                      ? cartList[index]?.product_name
                      : cartList[index]?.discount_product_name}
                  </p>
                  <p className="product-price">
                    RM
                    {cartList[index]?.product_price
                      ? cartList[index]?.product_price.toFixed(2)
                      : cartList[index]?.discount_product_price.toFixed(2)}
                  </p>
                  <div className="quantity-adjust">
                    Qty:
                    <div className="quantity-value">
                      {cartList[index]?.product_quantity}
                    </div>
                  </div>
                  <p
                    className="del"
                    onClick={async () => {
                      const response = await DeleteTransacCart(
                        userId.user_id,
                        cartList[index]?.product_id
                      );
                      if (response === 200) {
                        if (
                          !alert(
                            "Item deleted successfully. Please return back to cart to continue your transaction."
                          )
                        ) {
                          navigate("/profile");
                        }
                      }
                    }}
                  >
                    Remove
                  </p>
                </div>
              );
            })}
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
                  <text className="RM-value">{sum.toFixed(2)}</text>
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
                  <text className="RM-value">{(sum + 6).toFixed(2)}</text>
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
