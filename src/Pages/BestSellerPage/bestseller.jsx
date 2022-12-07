import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { FetchProduct } from "../../function";
import { AddShoppingCart } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "../BestSellerPage/bestseller.css";

function BestSellerPage() {
  const navigate = useNavigate();
  var i = 0;

  const [productDetails, setProductDetails] = useState([]);
  const { products } = useParams();

  useEffect(() => {
    setProductDetails([]);
    FetchProduct(products).then(setProductDetails);
  }, [products]);

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const HorCardContainer = () => (
    <div className="horizontal-cards-container">
      {productDetails
        ?.slice((i = randomInteger(1, 93)), i + 8)
        .map(function (key, index) {
          return (
            <div className="card-container">
              <div className="horizontal-card" key={index}>
                <div
                  className="product-image"
                  onClick={() => {
                    navigate(`/product-details/${key.product_name}`, {
                      state: {
                        product_name: key.product_name,
                        product_description: key.product_description,
                        product_category: key.product_category,
                        product_price: key.product_price,
                        product_quantity: key.product_quantity,
                        product_image: key.product_image,
                        product_id: key.product_id,
                      },
                    });
                  }}
                >
                  <img src={key.product_image} alt={key.product_name} />
                </div>
                <p
                  className="product-name"
                  onClick={() => {
                    navigate(`/product-details/${key.product_name}`, {
                      state: {
                        product_name: key.product_name,
                        product_description: key.product_description,
                        product_category: key.product_category,
                        product_price: key.product_price,
                        product_quantity: key.product_quantity,
                        product_image: key.product_image,
                        product_id: key.product_id,
                      },
                    });
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
                      onClick={() => {
                        navigate(`/product-details/${key.product_name}`);
                      }}
                      key={index}
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
    <div>
      <div className="best-seller-page">
        <div className="best-seller-section">
          <div className="best-seller-title">
            <h5>Best Seller</h5>
          </div>
          <hr></hr>
          <div className="best-seller-product-cards">
            <HorCardContainer />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default BestSellerPage;
