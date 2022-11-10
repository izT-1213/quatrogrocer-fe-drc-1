import React, { useState } from "react";
import {
  ArrowForwardIos,
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
  // AddShoppingCartIcon,
} from "@mui/icons-material";

import img from "../../Images/milk.jpg";

import "../ProductDetailsPage/product-detail-page.css";

function ProductDetailsPage() {
  var parentDirectory = "Marketplace";
  var childDirectory = "Dairy";
  var itemName = "Farm Fresh Pure Fresh Milk 2L";
  var newPrice = 15.45;
  var oldPrice = 16;
  var percentage = 35;
  var description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Mattis molestie a iaculis at erat pellentesque adipiscing.";

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
    <div className="item-details-page-container">
      <div className="product-directory">
        <p>{parentDirectory}</p>
        <ArrowForwardIos sx={{ fontSize: "14px" }} /> <p>{childDirectory}</p>
      </div>
      <div className="above-container">
        <div className="image-container">
          <div className="discount-percentage">
            <text>{percentage}% OFF</text>
          </div>
          <img src={img} alt={itemName}></img>
        </div>
        <div className="item-info-container">
          <div className="item-info">
            <p className="item-name">{itemName}</p>
            <p className="description-header">Description</p>
            <p className="description">{description}</p>
          </div>
          <hr></hr>
          <div className="actions">
            <div className="price-quantity">
              <div className="only-price">
                <p className="new-price">
                  Price:<p className="RM">RM</p>
                  <p className="price-value">{newPrice}</p>
                </p>
                <p className="old-price">
                  <strike>RM{oldPrice}</strike>
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
                  <AddBoxOutlined onClick={handleAdd} className="plus-btn" />
                </div>
              </div>
            </div>
            <button className="add-to-cart">ADD TO CART</button>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="suggestions">
        <p className="suggestion-header">Customer Also Bought</p>
        <hr></hr>
        <div className="product-list-container">
          <div className="product-card">
            <div className="product-image">
              <img src={img} alt={itemName} />
            </div>
            <div className="info">
              <p className="product-name">{itemName}</p>
              <p className="product-oldPrice">RM{oldPrice}</p>
              <p className="product-newPrice">{newPrice}</p>
              <div className="add-btn">{/* <AddShoppingCartIcon /> */}</div>
              {/**to put in the correct button and alignment */}
            </div>
          </div>
          <div className="row">
            <div className="product-card">
              <div className="product-image">
                <img src={img} alt={itemName} />
              </div>
              <div className="info">
                <p className="product-name">{itemName}</p>
                <p className="product-oldPrice">RM{oldPrice}</p>
                <p className="product-newPrice">{newPrice}</p>
                <div className="add-btn">{/* <AddShoppingCartIcon /> */}</div>
                {/**to put in the correct button and alignment */}
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src={img} alt={itemName} />
              </div>
              <div className="info">
                <p className="product-name">{itemName}</p>
                <p className="product-oldPrice">RM{oldPrice}</p>
                <p className="product-newPrice">{newPrice}</p>
                <div className="add-btn">{/* <AddShoppingCartIcon /> */}</div>
                {/**to put in the correct button and alignment */}
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}
export default ProductDetailsPage;
