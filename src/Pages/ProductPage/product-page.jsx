import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { AddShoppingCart } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./product-page.css";

function ProductPage() {
  const navigate = useNavigate();

  const SideNav = () => (
    <div>
      <div className="side-nav-title">
        <h4>Category</h4>
      </div>
      <div className="category-list">
        <ul>
          <li onClick={() => navigate("/beverages")}>Beverages</li>
          <li onClick={() => navigate("/bread-&-pastry")}>Bread & Pastry</li>
          <li onClick={() => navigate("/canned-food")}>Canned Food</li>
          <li onClick={() => navigate("/cereal")}>Cereal</li>
          <li onClick={() => navigate("/confectionary")}>Confectionary</li>
          <li onClick={() => navigate("/condiments")}>Condiments</li>
          <li onClick={() => navigate("/dairy")}>Dairy</li>
          <li onClick={() => navigate("/frozen-dairy")}>Frozen Dairy</li>
          <li onClick={() => navigate("/fruits")}>Fruits</li>
          <li onClick={() => navigate("/jam")}>Jam</li>
          <li onClick={() => navigate("/juice")}>Juice</li>
          <li onClick={() => navigate("/meat")}>Meat</li>
          <li onClick={() => navigate("/pet-food")}>Pet Food</li>
          <li onClick={() => navigate("/sauce-dressing")}>Sauce Dressing</li>
          <li onClick={() => navigate("/snacks")}>Snacks</li>
          <li onClick={() => navigate("/caffeine")}>
            Tea, Coffee, Chocolate Drinks
          </li>
        </ul>
      </div>
    </div>
  );

  //mapping product
  const MediumHorCard = () => (
    <div>
      <table className="medium-horizontal-cards-container">
        <tr>
          <td className="right-col-cards">
            <div className="medium-horizontal-card">
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
            <div className="medium-horizontal-card">
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
            <div className="medium-horizontal-card">
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
            <div className="medium-horizontal-card">
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
            <div className="medium-horizontal-card">
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
            <div className="medium-horizontal-card">
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

  return (
    <div>
      <div className="product-page">
        <div className="side-nav">
          <SideNav />
        </div>

        <div className="product-section">
          <div className="carousel">
            <Carousel
              autoPlay={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
            >
              <div
                className="carousel-images"
                onClick={() => navigate("/sauce-dressing")}
              >
                <div className="carousel-category">Sauce Dressing</div>
                <img
                  src="https://images.unsplash.com/photo-1582581720432-de83a98176ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="sauce-dressing-img"
                />
              </div>
              <div
                className="carousel-images"
                onClick={() => navigate("/fruits")}
              >
                <div className="carousel-category">Fruits</div>
                <img
                  src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="fruits-img"
                />
              </div>
              <div
                className="carousel-images"
                onClick={() => navigate("/confectionary")}
              >
                <div className="carousel-category">Confectionary</div>
                <img
                  src="https://images.unsplash.com/photo-1504623912536-fdb14bcb0d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="confectionary-img"
                />
              </div>
            </Carousel>
          </div>

          <div className="product-section-title">
            <h5>Marketplace</h5>
          </div>
          <hr></hr>

          <div className="product-cards">
            <MediumHorCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
