import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { Carousel } from "react-responsive-carousel";
import { AddShoppingCart } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./product-page.css";
import { FetchProduct } from "../../function";
///////////////////////
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";

function ProductPage() {
  const navigate = useNavigate();

  //pagination
  const [perPage, setPerPage] = useState(10);
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
          <i className="fa fa-angle-double-left"></i>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <i className="fa fa-angle-double-right"></i>
        </button>
      );
    }
    return originalElement;
  };

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
                <p className="RM">RM</p> 15.45
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
                <p className="RM">RM</p> 15.45
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
                <p className="RM">RM</p> 15.45
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
                <p className="RM">RM</p> 15.45
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
                <p className="RM">RM</p> 15.45
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
                <p className="RM">RM</p> 15.45
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
          <div className="side-nav-title">
            <h4>Category</h4>
          </div>
          <div className="category-list">
            <ul>
              <li onClick={() => navigate("/biscuits")}>Biscuits</li>
              <li onClick={() => navigate("/dairy")}>Dairy</li>
              <li onClick={() => navigate("/fruits")}>Fruits</li>
              <li onClick={() => navigate("/vegetables")}>Vegetables</li>
              <li onClick={() => navigate("/noodles")}>Noodles</li>
              <li onClick={() => navigate("/snacks")}>Snacks</li>
              <li onClick={() => navigate("/spices")}>Spices</li>
            </ul>
          </div>
        </div>

        <div className="product-section">
          {/* <p>{JSON.stringify(productDetails.length)}</p> */}
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
                <img
                  src="http://www.familywiseasia.com/wp-content/uploads/2019/07/daria-volkova-BMnX7L9G5xc-unsplash-e1563357571719.jpg"
                  alt="spices-img"
                />
              </div>
              <div
                className="carousel-images"
                onClick={() => navigate("/noodles")}
              >
                <div className="carousel-category">NOODLES</div>
                <img
                  src="https://images.unsplash.com/photo-1587029622793-f51e81058f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="noodles"
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
          <div></div>
          <div className="product-cards">
            <MediumHorCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
