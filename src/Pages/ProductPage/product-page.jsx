import React from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
              <li onClick={() => navigate("/biscuits")}>Biscuits</li>
              <li onClick={() => navigate("/dairy")}>Dairy</li>
              <li onClick={() => navigate("/fruits-&-vegetables")}>
                Fruits & Vegetables
              </li>
              <li onClick={() => navigate("/noodles")}>Noodles</li>
              <li onClick={() => navigate("/snacks")}>Snacks</li>
              <li onClick={() => navigate("/spices")}>Spices</li>
            </ul>
          </div>
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
                onClick={() => navigate("/spices")}
              >
                <div className="carousel-category">SPICES</div>
                <img src="http://www.familywiseasia.com/wp-content/uploads/2019/07/daria-volkova-BMnX7L9G5xc-unsplash-e1563357571719.jpg" />
              </div>
              <div
                className="carousel-images"
                onClick={() => navigate("/noodles")}
              >
                <div className="carousel-category">NOODLES</div>
                <img src="https://images.unsplash.com/photo-1587029622793-f51e81058f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
