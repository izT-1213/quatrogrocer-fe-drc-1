import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowForwardIos,
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
  AddShoppingCart,
} from "@mui/icons-material";
import { FetchProduct } from "../../function";
import { ToastContainer, toast } from "react-toastify";
import "../ProductDetailsPage/product-detail-page.css";

function ProductDetailsPage() {
  const { product_name } = useParams();
  const navigate = useNavigate();
  var i = 0;

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    setProductDetails([]);
    FetchProduct().then(setProductDetails);
  }, []);

  var parentDirectory = "Marketplace";

  const [counter, setCounter] = useState(1);
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSub = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  };

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
                    <AddShoppingCart className="cart-icon" key={index} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );

  const notify = () => {
    toast.success("Item added to cart! 🛒", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="item-details-page-container">
      {productDetails
        .filter((list) => list.product_name === product_name)
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
                  <button className="add-to-cart" onClick={notify}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <hr></hr>
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
