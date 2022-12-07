import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowForwardIos,
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
  AddShoppingCart,
} from "@mui/icons-material";
import {
  FetchProduct,
  SearchProduct,
  FetchDiscountProduct,
  AddToCartFunc,
  AddToCartDiscFunc,
} from "../../function";
import { ToastContainer, toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import AuthContext from "../../Components/context/AuthProvider.js";
import "../ProductDetailsPage/product-detail-page.css";

function ProductDetailsPage() {
  const { product_name } = useParams();
  const jwtToken = useContext(AuthContext).auth?.token;
  const userId = jwt_decode(jwtToken);
  const navigate = useNavigate();
  const [i, setI] = useState(0);

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (i === 0) {
      setI(randomInteger(1, 93));
    }
  });

  const [productDetails, setProductDetails] = useState([]);
  const [productRec, setProductRec] = useState([]);
  const [discountProductDetails, setDiscountProductDetails] = useState([]);

  useEffect(() => {
    setProductDetails([]);
    SearchProduct(product_name).then(setProductDetails);
  }, [product_name]);

  useEffect(() => {
    setProductRec([]);
    FetchProduct().then(setProductRec);
  }, []);

  useEffect(() => {
    setDiscountProductDetails([]);
    FetchDiscountProduct().then(setDiscountProductDetails);
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

  const [cartDiscountValues, updateDiscountCartValues] = useState({
    user_id: userId.user_id,
    discount_product_id: "",
    product_quantity: 0,
  });

  const handleCartSubmit = async (e, product_id) => {
    e.preventDefault();
    const message = await AddToCartFunc(userId.user_id, product_id, counter);

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

  const HorCardContainer = () => (
    <div className="horizontal-cards-container">
      {/* mapping api products */}
      {productRec?.slice(i, i + 6).map(function (key, index) {
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
      {productDetails.length !== 0
        ? productDetails
            ?.filter((list) => list.product_name === product_name)
            .map((obj) => (
              <div>
                <div className="product-directory">
                  <p>{parentDirectory}</p>
                  <ArrowForwardIos sx={{ fontSize: "14px" }} />{" "}
                  <p>{obj.product_category}</p>
                </div>
                <div className="above-container">
                  <div className="image-container">
                    <img src={obj.product_image} alt={obj.product_name}></img>
                  </div>
                  <div className="item-info-container">
                    <div className="item-info">
                      <h5 className="item-name">{obj.product_name}</h5>
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
              </div>
            ))
        : discountProductDetails
            ?.filter((list) => list.discount_product_name === product_name)
            .map((obj) => (
              <div>
                {console.log(obj.discount_product_id)}
                <div className="product-directory">
                  <p>{parentDirectory}</p>
                  <ArrowForwardIos sx={{ fontSize: "14px" }} />{" "}
                  <p>{obj.discount_product_category}</p>
                </div>
                <div className="above-container">
                  <div className="image-container">
                    <div className="discount-percentage">
                      <text>25% OFF</text>
                    </div>
                    <img
                      src={obj.discount_product_image}
                      alt={obj.discount_product_name}
                    ></img>
                  </div>
                  <div className="item-info-container">
                    <div className="item-info">
                      <h5 className="item-name">{obj.discount_product_name}</h5>
                      <p className="description-header">Description</p>
                      <p className="description">
                        {obj.discount_product_description}
                      </p>
                    </div>
                    <hr></hr>
                    <div className="actions">
                      <div className="price-quantity">
                        <div className="only-price">
                          <p className="new-price">
                            Price:<p className="RM">RM</p>
                            <p className="price-value">
                              {obj.discount_product_price.toFixed(2)}
                            </p>
                          </p>
                          <p className="old-price">
                            <strike>
                              {(obj.discount_product_price * 1.25).toFixed(2)}
                            </strike>
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
                          navigate("/maintenance");
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      <div className="suggestions">
        <h5 className="suggestion-header">Customer Also Bought</h5>
        <hr></hr>
        <div className="product-list-container">
          <HorCardContainer />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default ProductDetailsPage;
