import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  GetUserAddress,
  FetchUser,
  FetchTransaction,
  DeductCredit,
} from "../../function.jsx";
import jwt_decode from "jwt-decode";
import AuthContext from "../../Components/context/AuthProvider.js";
import "./payment-success.css";

function PaymentSuccessPage() {
  var shipping = 6.0;
  const navigate = useNavigate();
  const jwtToken = useContext(AuthContext).auth?.token;
  const userId = jwt_decode(jwtToken);
  var sum = 0;
  const [cartList, setCartList] = useState([]);
  const [addressDetails, setAddressDetails] = useState([]);
  const [profileDetails, setProfileDetails] = useState({});

  const location = useLocation();
  var addId = location.state.address_id;
  var total_items = location.state.total_items;

  console.log(location.state);
  console.log(total_items);

  useEffect(() => {
    setAddressDetails([]);
    GetUserAddress(userId.user_id).then(setAddressDetails);
  }, [userId.user_id]);

  useEffect(() => {
    setProfileDetails({});
    FetchUser(userId.user_id).then(setProfileDetails);
  }, [userId.user_id]);

  useEffect(() => {
    FetchTransaction(userId.user_id).then(setCartList);
  }, [userId.user_id]);

  const selectedAddress = addressDetails.filter(
    (obj) => obj.address_id === addId
  );
  for (var i = 0; i < total_items; i++) {
    sum = sum + cartList[i]?.transaction_total;
  }

  // {
  //   DeductCredit(userId.user_id, sum + 6.0);
  // }

  useEffect(() => {
    FetchTransaction(userId.user_id).then(setCartList);
  }, [userId.user_id]);

  return (
    <div className="payment-success-container">
      <div className="payment-success-header">
        <h1>Payment Success!</h1>
        <div className="return">
          <ArrowBackIosIcon onClick={() => navigate("/profile/addresses")} />
          <Link to={"/profile"} className="link-style">
            Return to Account Details
          </Link>
        </div>
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
                  <p>
                    {profileDetails.first_name} {profileDetails.last_name}
                  </p>
                </div>
                <div className="address">
                  <p className="address-line-1">
                    {selectedAddress[0]?.address_line_1}
                  </p>
                  <p className="address-line-2">
                    {selectedAddress[0]?.address_line_2}
                  </p>
                  <p>{selectedAddress[0]?.address_line_3}</p>
                  <p>
                    {selectedAddress[0]?.postcode} {selectedAddress[0]?.state}
                  </p>
                </div>
                <div className="number">
                  <p>{profileDetails.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-summary">
            <div className="cart-content">
              {cartList?.slice(0, total_items).map(function (key, index) {
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
                    <div className="quantity">
                      <p className="product-quantity">
                        Quantity: {cartList[index]?.product_quantity}
                      </p>
                    </div>
                    {/* <p className="del">Remove</p> */}
                  </div>
                );
              })}
            </div>
            <div className="calculation">
              <div>
                <text className="title">Subtotal: RM</text>
                <span className="value">
                  {"  "}
                  {sum.toFixed(2)}
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
                  {(sum + 6).toFixed(2)}
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
