import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Carousel } from "react-responsive-carousel";
import {
  AddShoppingCart,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./product-page.css";
import { FetchProduct } from "../../function";
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";

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

  // Pagination
  const [perPage, setPerPage] = useState(6);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [productDetails, setProductDetails] = useState([]);
  const { products } = useParams();

  useEffect(() => {
    setProductDetails([]);
    FetchProduct(products).then(setProductDetails);
  }, [products]);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(productDetails.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return productDetails.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button>
          <i className="fa fa-angle-double-left">
            <ArrowBackIos />
          </i>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <i className="fa fa-angle-double-right">
            <ArrowForwardIos />
          </i>
        </button>
      );
    }
    return originalElement;
  };

  //mapping product
  const MediumHorCard = () => (
    <div className="medium-horizontal-cards-container">
      {getData(current, size).map((data, index) => {
        return (
          <div className="card-container">
            <div className="medium-horizontal-card" key={index}>
              <div className="product-image">
                <img src={data.product_image} />
              </div>
              <p className="product-name">{data.product_name}</p>
              <p className="product-price">
                <p className="RM">RM</p> {data.product_price.toFixed(2)}
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
          {/* <Products data={products} /> */}
          <div className="filter-info">
            <Pagination
              className="pagination-data"
              showTotal={(total, range) =>
                `Showing ${range[0]}-${range[1]} of ${total}`
              }
              onChange={PaginationChange}
              total={productDetails.length}
              current={current}
              pageSize={size}
              showSizeChanger={false}
              itemRender={PrevNextArrow}
              onShowSizeChange={PerPageChange}
            />
          </div>

          {/* {getData(current, size).map((data, index) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.position}</td>
                <td>{data.gender}</td>
                <td>{data.email}</td>
                <td>{data.salary}</td>
              </tr>
            );
          })} */}

          <div className="product-cards">
            <MediumHorCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
