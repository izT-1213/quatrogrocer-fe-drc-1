import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { ImgOverlay } from "image-overlay-react";
import { FetchProduct } from "../../function.jsx";
import { ToastContainer, toast } from "react-toastify";
import {
  ArrowRightAlt,
  AddShoppingCart,
  LocalOfferOutlined,
  PaymentOutlined,
  AutorenewOutlined,
} from "@mui/icons-material";
import "image-overlay-react/dist/index.css";
import "react-toastify/dist/ReactToastify.css";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  var i = 0;

  // >>>>fetch product list from API<<<<
  const [productDetails, setProductDetails] = useState([]);
  const { products } = useParams();

  useEffect(() => {
    setProductDetails([]);
    FetchProduct(products).then(setProductDetails);
  }, [products]);
  // >>>>end function<<<<

  // toastify notifications
  // const toastId = React.useRef(null);

  const notify = () => {
    // if (!toast.isActive(toastId.current)) {
    //   toastId.current =
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

  //need to do function to map api product here
  const HorCardContainer = () => (
    <div className="horizontal-cards-container">
      {/* mapping api products */}
      {productDetails?.slice(1, 7).map(function (key, index) {
        return (
          <div className="card-container">
            <div className="horizontal-card" key={index}>
              <div className="product-image">
                <img src={key.product_image} alt={key.product_name} />
              </div>
              <p className="product-name">{key.product_name}</p>
              <p className="product-price">
                <text className="RM">RM</text> {key.product_price.toFixed(2)}
              </p>
              <div className="button-container">
                <button className="add-to-cart-btn" onClick={notify}>
                  <AddShoppingCart className="cart-icon" key={index} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const LargeHorCard = () => (
    <div>
      {console.log(productDetails)}
      {productDetails?.slice(6 + (i = i + 1), 7 + i).map(function (key, index) {
        return (
          <div className="large-horizontal-card" key={index}>
            <div className="product-image">
              <img src={key.product_image} alt={key.product_name} />
            </div>
            <p className="product-name">{key.product_name}</p>
            <p className="product-price">
              <text className="RM">RM</text> {key.product_price.toFixed(2)}
            </p>
            <div className="button-container">
              <button className="add-to-cart-btn" onClick={notify}>
                <AddShoppingCart className="cart-icon" key={index} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <div className="home-header">
        {/* <getProductsHome /> */}
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

        <div className="home-image-container"></div>
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
          <div>
            {productDetails?.slice(0, 1).map(function (key, index) {
              return (
                <div className="vertical-card">
                  <div className="product-image" key={index}>
                    <img src={key.product_image} alt={key.product_name} />
                  </div>
                  <p className="product-name" key={index}>
                    {key.product_name}
                  </p>
                  <p className="product-price" key={index}>
                    <text className="RM">RM</text>{" "}
                    {key.product_price.toFixed(2)}
                  </p>
                  <div className="button-container">
                    <button className="add-to-cart-btn" onClick={notify}>
                      <AddShoppingCart className="cart-icon" key={index} />
                    </button>
                  </div>
                </div>
              );
            })}
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
            <ImgOverlay
              imgSrc="https://images.unsplash.com/photo-1582401656496-9d75f95f9018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
              alt="cereal-img"
              bgColor="rgb(37, 37, 37, 0.5)"
              position="right"
              width="100%"
              height="100%"
            >
              <p onClick={() => navigate("/cereal")}>Cereal</p>
            </ImgOverlay>
          </div>
        </div>

        <div className="best-choices-product-2">
          <div className="category-card">
            <ImgOverlay
              imgSrc="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="raw-meat-img"
              bgColor="rgb(37, 37, 37, 0.5)"
              position="left"
              width="100%"
              height="100%"
            >
              <p onClick={() => navigate("/meat")}>Meat</p>
            </ImgOverlay>
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
      <ToastContainer />
    </div>
  );
}
export default Home;
