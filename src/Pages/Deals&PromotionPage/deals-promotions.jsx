import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FetchDiscountProduct } from "../../function";
import {
  AddShoppingCart,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "../Deals&PromotionPage/deals-promotions.css";
import Pagination from "rc-pagination";

function DealsPromotionsPage() {
  const navigate = useNavigate();
  const [perPage, setPerPage] = useState(8);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    setProductDetails([]);
    FetchDiscountProduct().then(setProductDetails);
  }, []);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(productDetails.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
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

  const MediumHorCard = () => (
    <div className="medium-horizontal-cards-container">
      {getData(current, size).map((data, index) => {
        return (
          <div className="card-container">
            <div className="medium-horizontal-card" key={index}>
              <div
                className="product-image"
                onClick={() => {
                  navigate(`/product-details/${data.discount_product_name}`);
                }}
              >
                <img src={data.discount_product_image} />
              </div>
              <p
                className="product-name"
                onClick={() => {
                  navigate(`/product-details/${data.discount_product_name}`);
                }}
              >
                {data.discount_product_name}
              </p>
              <p className="product-price">
                <p className="RM">RM</p>{" "}
                {data.discount_product_price.toFixed(2)}
              </p>
              <div className="button-container">
                <button
                  className="add-to-cart-btn"
                  onClick={() => {
                    navigate(`/product-details/${data.discount_product_name}`);
                  }}
                >
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
      <div className="deals-promotions-page">
        <div className="deals-promotions-section">
          <div className="deals-promotions-title">
            <h5>Deals & Promotions</h5>
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
export default DealsPromotionsPage;
