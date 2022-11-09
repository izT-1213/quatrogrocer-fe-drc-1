import React from "react";
import { useLocation, Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "../ProductDetailsPage/product-detail-page.css";

function ProductDetailsPage() {
  return (
    <div>
      <div className="home-header">
        <div className="home-header-content">
          <h1>Fresh.</h1>
          <h1>Healthy.</h1>
          <h1>Convenient.</h1>
          <p>
            Stay home, we always deliver a service <br></br> more than you
            expected.
          </p>
          <button>SHOP NOW</button>
        </div>

        <div className="home-image-container">
          <img src="https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
        </div>
      </div>
      <div className="today-top-deals">
        <div className="today-top-deals-title">
          <h4>Today's Top Deals</h4>
          <div className="view-more-button">
            <p>View More</p>
            <ArrowRightAltIcon></ArrowRightAltIcon>
          </div>
        </div>
        <hr></hr>

        <div className="today-top-deals-product">
          <div className="vertical-card"></div>
          <div className="horizontal-card"></div>
        </div>
      </div>

      <div className="promotion-banner">
        <div className="banner-image-container">
          <img src="https://images.unsplash.com/photo-1487646709898-58d3c6e8d886?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        </div>

        <div className="promotion-banner-content">
          <p className="promotion-banner-header">
            Purchase Min. RM60 And Above<br></br>To Get Free Delivery
          </p>
          <p className="promotion-banner-text">Terms and condition apply</p>
        </div>
      </div>

      <div className="discount-banner">
        <div className="discount-banner-container">
          <p className="discount-text">
            Super discount for your first purchase!
          </p>
          <p className="discount-code">First2GQ</p>
        </div>
      </div>

      <div className="best-choices">
        <div className="best-choices-title">
          <h4>Best Choices</h4>
          <div className="view-more-button">
            <p>View More</p>
            <ArrowRightAltIcon></ArrowRightAltIcon>
          </div>
        </div>
        <hr></hr>

        <div className="best-choices-product-1">
          <div className="large-horizontal-card">
            <p>hello world</p>
          </div>
          <div className="category-card">
            <p>hello world</p>
          </div>
        </div>

        <div className="best-choices-product-2">
          <div className="category-card">
            <p>hello world</p>
          </div>
          <div className="large-horizontal-card">
            <p>hello world</p>
          </div>
        </div>
      </div>

      <div className="services-content">
        <hr></hr>
        <div className="services-content-container">
          <div className="services-content-container-title">
            <h4>Start Shopping With Us</h4>
          </div>
          <div className="services-content-container-text"></div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailsPage;
