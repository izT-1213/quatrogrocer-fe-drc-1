import React from "react";
import { useNavigate } from "react-router-dom";
import "./product-page.css";

function ProductPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="product-page">
        <div className="side-nav">
          <div className="side-nav-title">
            <h4>Category</h4>
          </div>
          <div className="category-list">
            <ul>
              <li onClick={() => navigate("/fruits-&-vegetables")}>
                Fruits & Vegetables
              </li>
              <li onClick={() => navigate("/dairy")}>Dairy</li>
              <li onClick={() => navigate("/noodles")}>Noodles</li>
              <li onClick={() => navigate("/snacks")}>Snacks</li>
              <li onClick={() => navigate("/biscuits")}>Biscuits</li>
            </ul>
          </div>
        </div>

        <div className="product-section">
          <div className="img-holder"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
