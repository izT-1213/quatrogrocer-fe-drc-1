import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowForwardIos,
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
  AddShoppingCart,
} from "@mui/icons-material";
import { FetchProduct, AddToCartFunc, AddToCartDiscFunc } from "../../function";
import { ToastContainer, toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import AuthContext from "../../Components/context/AuthProvider.js";
import "../ProductDetailsPage/product-detail-page.css";

function ProductDetailsPage() {
  const { product_name } = useParams();
  const jwtToken = useContext(AuthContext).auth?.token;
  const userId = jwt_decode(jwtToken);
  const navigate = useNavigate();
  var i = 0;

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    setProductDetails([]);
    FetchProduct(product_name).then(setProductDetails);
  }, []);

  const [counter, setCounter] = useState(1);
  const handleAdd = () => {
    setCounter((prevState) => prevState + 1);
  };
  const handleSub = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  };

  // const [cartValues, updateCartValues] = useState({
  //   user_id: userId.user_id,
  //   product_id: "",
  //   product_quantity: 0,
  // });

  const [cartDiscountValues, updateDiscountCartValues] = useState({
    user_id: userId.user_id,
    discount_product_id: "",
    product_quantity: 0,
  });

  const handleCartSubmit = async (e, product_id) => {
    e.preventDefault();
    const message = await AddToCartFunc(userId.user_id, product_id, counter);
    console.log(message);

    if (message.status === 200) {
      toast.success(`${message.data.message}  🛒`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleDiscountCartSubmit = async (e) => {
    e.preventDefault();
    const message = await AddToCartDiscFunc(
      cartDiscountValues.user_id,
      cartDiscountValues.discount_product_id,
      cartDiscountValues.product_quantity
    );
  };

  var parentDirectory = "Marketplace";

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const HorCardContainer = () => (
    <div className="horizontal-cards-container">
      {/* mapping api products */}
      {productDetails
        ?.slice((i = randomInteger(1, 93)), i + 6)
        .map(function (key, index) {
          return (
            <div className="card-container">
              <div className="horizontal-card" key={index}>
                <div
                  className="product-image"
                  onClick={() => {
                    navigate(`/product-details/${key.product_name}`);
                  }}
                >
                  <img src={key.product_image} alt={key.product_name} />
                </div>
                <p
                  className="product-name"
                  onClick={() => {
                    navigate(`/product-details/${key.product_name}`);
                  }}
                >
                  {key.product_name}
                </p>
                <p className="product-price">
                  <text className="RM">RM</text> {key.product_price.toFixed(2)}
                </p>
                <div className="button-container">
                  <button className="add-to-cart-btn">
                    <AddShoppingCart
                      className="cart-icon"
                      key={index}
                      onClick={(e) => handleCartSubmit(e)}
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );

  return (
    <div className="item-details-page-container">
      {console.log(product_name)}
      {productDetails
        ?.filter((list) => list.product_name === product_name)
        .map((obj) => (
          <div>
            {console.log(obj.product_id)}
            <div className="product-directory">
              <p>{parentDirectory}</p>
              <ArrowForwardIos sx={{ fontSize: "14px" }} />{" "}
              <p>{obj.product_category}</p>
            </div>
            <div className="above-container">
              <div className="image-container">
                <div className="discount-percentage">
                  <text>50% OFF</text>
                </div>
                <img src={obj.product_image} alt={obj.product_name}></img>
              </div>
              <div className="item-info-container">
                <div className="item-info">
                  <p className="item-name">{obj.product_name}</p>
                  <p className="description-header">Description</p>
                  <p className="description">{obj.product_description}</p>
                </div>
                <hr></hr>
                <div className="actions">
                  <div className="price-quantity">
                    <div className="only-price">
                      <p className="new-price">
                        Price:<p className="RM">RM</p>
                        <p className="price-value">
                          {obj.product_price.toFixed(2)}
                        </p>
                      </p>
                      <p className="old-price">
                        <strike>RM16</strike>
                      </p>
                    </div>

                    <div className="quantity-adjust">
                      <p className="quantity-header">Quantity:</p>
                      <div className="quantity-container">
                        <IndeterminateCheckBoxOutlined
                          onClick={handleSub}
                          className="minus-btn"
                        />
                        <div className="quantity-value">{counter}</div>
                        <AddBoxOutlined
                          onClick={handleAdd}
                          className="plus-btn"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="add-to-cart"
                    onClick={(e) => {
                      handleCartSubmit(e, obj.product_id);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div className="suggestions">
              <p className="suggestion-header">Customer Also Bought</p>
              <hr></hr>
              <div className="product-list-container">
                <HorCardContainer />
              </div>
            </div>
            <ToastContainer />
          </div>
        ))}
    </div>
  );
}
export default ProductDetailsPage;
