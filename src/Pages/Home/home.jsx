import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowRightAlt,
  AddShoppingCart,
  LocalOfferOutlined,
  PaymentOutlined,
  AutorenewOutlined,
} from "@mui/icons-material";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  //need to do function to map api product here
  const HorCardContainer = () => (
    <div>
      <table className="horizontal-cards-container">
        <tr>
          <td className="right-col-cards">
            <div className="horizontal-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
              </div>
              <p className="product-name">Farm Fresh Pure Milk 2L</p>
              <p className="product-price">
                <text className="RM">RM</text> 15.45
              </p>
              <div className="button-container">
                <button className="add-to-cart-btn">
                  <AddShoppingCart className="cart-icon" />
                </button>
              </div>
            </div>
          </td>
          <td className="left-col-cards">
            <div className="horizontal-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
              </div>
              <p className="product-name">Farm Fresh Pure Milk 2L</p>
              <p className="product-price">
                <text className="RM">RM</text> 15.45
              </p>
              <div className="button-container">
                <button className="add-to-cart-btn">
                  <AddShoppingCart className="cart-icon" />
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="right-col-cards">
            <div className="horizontal-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
              </div>
              <p className="product-name">Farm Fresh Pure Milk 2L</p>
              <p className="product-price">
                <text className="RM">RM</text> 15.45
              </p>
              <div className="button-container">
                <button className="add-to-cart-btn">
                  <AddShoppingCart className="cart-icon" />
                </button>
              </div>
            </div>
          </td>
          <td className="left-col-cards">
            <div className="horizontal-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
              </div>
              <p className="product-name">Farm Fresh Pure Milk 2L</p>
              <p className="product-price">
                <text className="RM">RM</text> 15.45
              </p>
              <div className="button-container">
                <button className="add-to-cart-btn">
                  <AddShoppingCart className="cart-icon" />
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="right-col-cards">
            <div className="horizontal-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
              </div>
              <p className="product-name">Farm Fresh Pure Milk 2L</p>
              <p className="product-price">
                <text className="RM">RM</text> 15.45
              </p>
              <div className="button-container">
                <button className="add-to-cart-btn">
                  <AddShoppingCart className="cart-icon" />
                </button>
              </div>
            </div>
          </td>
          <td className="left-col-cards">
            <div className="horizontal-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
              </div>
              <p className="product-name">Farm Fresh Pure Milk 2L</p>
              <p className="product-price">
                <text className="RM">RM</text> 15.45
              </p>
              <div className="button-container">
                <button className="add-to-cart-btn">
                  <AddShoppingCart className="cart-icon" />
                </button>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );

  const LargeHorCard = () => (
    <div className="large-horizontal-card">
      <div className="product-image">
        <img src="https://images.unsplash.com/photo-1621378580414-421cba519671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      </div>
      <p className="product-name">Pickle Jar 500GMS</p>
      <p className="product-price">
        <text className="RM">RM</text> 15.45
      </p>
      <div className="button-container">
        <button className="add-to-cart-btn">
          <AddShoppingCart className="cart-icon" />
        </button>
      </div>
    </div>
  );

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
          <button onClick={() => navigate("/marketplace")}>Shop Now</button>
        </div>

        <div className="home-image-container">
          <img
            src="https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt="grocery-bag-img"
          />
        </div>
      </div>
      <div className="today-top-deals">
        <div className="today-top-deals-title">
          <h4>Today's Top Deals</h4>
          <div className="view-more-button">
            <p onClick={() => navigate("/deals-&-promotions")}>View More</p>
            <ArrowRightAlt />
          </div>
        </div>
        <hr></hr>

        <div className="today-top-deals-product">
          <div className="vertical-card">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
            </div>
            <p className="product-name">Farm Fresh Pure Milk 2L</p>
            <p className="product-price">
              <text className="RM">RM</text> 15.45
            </p>
            <div className="button-container">
              <button className="add-to-cart-btn">
                <AddShoppingCart className="cart-icon" />
              </button>
            </div>
          </div>
          <HorCardContainer />
        </div>
      </div>

      <div className="promotion-banner">
        <div className="banner-image-container">
          <img
            src="https://images.unsplash.com/photo-1487646709898-58d3c6e8d886?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="promotion-banner-img"
          />
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
          <p className="discount-code">First2QG</p>
          <p className="discount-notes">Apply discount code in checkout.</p>
        </div>
      </div>

      <div className="best-choices">
        <div className="best-choices-title">
          <h4>Best Choices</h4>
          <div className="view-more-button">
            <p onClick={() => navigate("/best-sellers")}>View More</p>
            <ArrowRightAlt />
          </div>
        </div>
        <hr></hr>

        <div className="best-choices-product-1">
          <LargeHorCard />
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1582401656496-9d75f95f9018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
              alt="cereal-img"
            />
          </div>
        </div>

        <div className="best-choices-product-2">
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="raw-meat-img"
            />
          </div>
          <LargeHorCard />
        </div>
      </div>

      <div className="separator">
        <hr></hr>
      </div>

      <div className="services">
        <div className="services-container">
          <div className="services-title">
            <h4>Start Shopping With Us</h4>
          </div>

          <div className="services-content">
            <div className="services-1">
              <LocalOfferOutlined></LocalOfferOutlined>
              <p className="services-title">Monthly Exciting Sales</p>
              <p className="services-text">
                Limited time promotion every month!
              </p>
            </div>

            <div className="services-2">
              <PaymentOutlined></PaymentOutlined>
              <p className="services-title">Secure Payment</p>
              <p className="services-text">Worry free checkout!</p>
            </div>

            <div className="services-3">
              <AutorenewOutlined></AutorenewOutlined>
              <p className="services-title">Easy Returns & Refunds</p>
              <p className="services-text">
                We got you cover without the hassle!
              </p>
            </div>
          </div>

          <div className="shop-now-button">
            <button onClick={() => navigate("/marketplace")}>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
