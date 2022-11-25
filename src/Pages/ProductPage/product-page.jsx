import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { Carousel } from "react-responsive-carousel";
import { ToastContainer, toast } from "react-toastify";
import { FetchProduct } from "../../function";
import {
  AddShoppingCart,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./product-page.css";
import SideNav from "../../Components/sidenav/sidenav.jsx";
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";

function MarketplacePage() {
  const navigate = useNavigate();

  // Pagination
  const [perPage, setPerPage] = useState(8);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [productDetails, setProductDetails] = useState([]);
  const { products } = useParams();

  const notify = () => {
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
              <div
                className="product-image"
                onClick={() => {
                  navigate(`/product-details/${data.product_name}`, {
                    state: {
                      product_name: data.product_name,
                      product_description: data.product_description,
                      product_category: data.product_category,
                      product_price: data.product_price,
                      product_quantity: data.product_quantity,
                      product_image: data.product_image,
                      product_id: data.product_id,
                    },
                  });
                }}
              >
                <img src={data.product_image} />
              </div>
              <p
                className="product-name"
                onClick={() => {
                  navigate(`/product-details/${data.product_name}`, {
                    state: {
                      product_name: data.product_name,
                      product_description: data.product_description,
                      product_category: data.product_category,
                      product_price: data.product_price,
                      product_quantity: data.product_quantity,
                      product_image: data.product_image,
                      product_id: data.product_id,
                    },
                  });
                }}
              >
                {data.product_name}
              </p>
              <p className="product-price">
                <p className="RM">RM</p> {data.product_price.toFixed(2)}
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

  return (
    <div>
      <div className="product-page">
        <SideNav />
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
                onClick={() =>
                  navigate("/category/sauce-dressing", {
                    state: { category: "Sauce Dressing" },
                  })
                }
              >
                <div className="carousel-category">Sauce Dressing</div>
                <img
                  src="https://images.unsplash.com/photo-1582581720432-de83a98176ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="sauce-dressing-img"
                />
              </div>
              <div
                className="carousel-images"
                onClick={() =>
                  navigate("/category/fruits", {
                    state: { category: "Fruits" },
                  })
                }
              >
                <div className="carousel-category">Fruits</div>
                <img
                  src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="fruits-img"
                />
              </div>
              <div
                className="carousel-images"
                onClick={() =>
                  navigate("/category/confectionary", {
                    state: { category: "Confectionary" },
                  })
                }
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
              showTitle={false}
            />
          </div>
          <div className="product-cards">
            <MediumHorCard />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default MarketplacePage;
